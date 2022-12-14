import { Mutation, Options, Query } from '@paljs/types';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { format, Options as PrettierOptions } from 'prettier';
import pkgDir from 'pkg-dir';
import { join } from 'path';
import {
  getDMMF,
  getConfig,
  getEnvPaths,
  tryLoadEnvs,
} from '@prisma/internals';
import { DMMF } from '@prisma/client/runtime';

const projectRoot = pkgDir.sync() || process.cwd();

///Custom DMMF extension code taken from Prismix : https://github.com/jamiepine/prismix///
export type CustomFieldAttributes = {
  columnName?: string;
  dbType?: string;
  relationOnUpdate?: string;
  shareable?: boolean;
  inaccessible?: boolean;
  external?: boolean;
  requires?: string;
  provides?: string;
  override?: string;
};
export type CustomModelAttributes = {
  doubleAtIndexes?: string[];
  keyFields?: string[][];
  fieldsTypeMap?: Map<string, Field>;
  generateUpdateMany?: boolean;
};

export type CustomAttributes = {
  fields: Record<string, CustomFieldAttributes>;
} & CustomModelAttributes;

export type Field = DMMF.Field & CustomFieldAttributes;
export type Model = DMMF.Model & {
  fields: Field[];
} & CustomModelAttributes;

export type Datamodel = DMMF.Datamodel & {
  models: Model[];
};

export type Document = DMMF.Document & {
  datamodel: Datamodel;
  modelmap?: Map<string, Model>;
  modelInputTypesMap?: Map<string, string>;
  modelOutputTypesMap?: Map<string, string>;
};

async function getSchema(schema: string) {
  let document: Document = await getDMMF({ datamodel: schema });
  const customAttributes = getCustomAttributes(schema);

  let modelInputTypesMap: Map<string, string> = new Map([]);
  let modelOutputTypesMap: Map<string, string> = new Map([]);
  let modelMap: Map<string, Model> = new Map([]);
  const models: Model[] = document.datamodel.models.map((model: Model) => {
    let keyFields: string[][] = [];
    let fieldsTypeMap: Map<string, Field> = new Map([]);
    if (model.primaryKey?.fields) {
      keyFields.push(model.primaryKey?.fields);
    }
    if (model.uniqueFields) {
      model.uniqueFields.forEach((uniques) => keyFields.push(uniques));
    }

    let result: Model = {
      ...model,
      doubleAtIndexes: customAttributes[model.name]?.doubleAtIndexes,
      fields: model.fields.map((field) =>
        // Inject columnName and db.Type from the parsed fieldMappings above
        {
          const attributes =
            customAttributes[model.name]?.fields[field.name] ?? {};
          if (field.isId || (field.isRequired && field.isUnique)) {
            keyFields.push([field.name]);
          }
          let fieldResult: Field = {
            ...field,
            columnName: attributes.columnName,
            dbType: attributes.dbType,
            relationOnUpdate: attributes.relationOnUpdate,
            shareable: attributes.shareable,
            inaccessible: attributes.inaccessible,
            external: attributes.external,
            requires: attributes.requires,
            provides: attributes.provides,
            override: attributes.override,
          };
          fieldsTypeMap.set(fieldResult.name, fieldResult);
          return fieldResult;
        },
      ),
      keyFields: keyFields,
      fieldsTypeMap: fieldsTypeMap,
    };
    modelMap.set(model.name, result);

    return result;
  });

  let modelRegexStr = Array.from(modelMap.keys())
    .sort(function (a, b) {
      return b.length - a.length; //Sort in decreasing length to make model token greedy
    })
    .join('|');
  const inputTypeRegex = new RegExp(
    `(?<model>${modelRegexStr})(WhereInput|OrderByWithRelationInput|WhereUniqueInput|ScalarWhereInput|OrderByWithAggregationInput|ScalarWhereWithAggregatesInput|CreateInput|UncheckedCreateInput|UpdateInput|UncheckedUpdateInput|CreateManyInput|UpdateManyMutationInput|UncheckedUpdateManyInput|CountOrderByAggregateInput|AvgOrderByAggregateInput|MaxOrderByAggregateInput|MinOrderByAggregateInput|SumOrderByAggregateInput|Create.*?Input|Update.*?Input|Unchecked.*?Input|UpsertWithout.*?Input|UpsertWithWhereUniqueWithout.*?Input|UncheckedUpdateWithout.*?Input|UncheckedUpdateManyWithout.*?Input|UncheckedCreateWithout.*?Input|.*CompoundUniqueInput|OrderByRelationAggregateInput|ListRelationFilter|RelationFilter)`,
  );
  document.schema.inputObjectTypes.prisma.forEach((type) => {
    let matched = type.name.match(inputTypeRegex);
    if (matched?.input && matched.groups?.model) {
      modelInputTypesMap.set(matched.input, matched.groups.model);
      if (matched.input.endsWith('UpdateManyMutationInput')) {
        type.fields.length == 0
          ? (modelMap.get(matched.groups.model)!.generateUpdateMany = false)
          : (modelMap.get(matched.groups.model)!.generateUpdateMany = true);
      }
    }
  });

  const outputTypeRegex = new RegExp(
    `((?<model>${modelRegexStr})(GroupByOutputType|CountOutputType|CountAggregateOutputType|AvgAggregateOutputType|SumAggregateOutputType|MinAggregateOutputType|MaxAggregateOutputType))|((Aggregate)(?<model2>${modelRegexStr}))`,
  );

  document.schema.outputObjectTypes.prisma.forEach((type) => {
    let matched = type.name.match(outputTypeRegex);
    if (matched?.input && (matched.groups?.model || matched.groups?.model2)) {
      modelOutputTypesMap.set(
        matched.input,
        matched.groups.model ? matched.groups?.model : matched.groups?.model2,
      );
    }
  });

  document.datamodel.models = models;
  document.modelmap = modelMap;
  document.modelInputTypesMap = modelInputTypesMap;
  document.modelOutputTypesMap = modelOutputTypesMap;

  return document;
}

// Extract @map attributes, which aren't accessible from the prisma SDK
// Adapted from https://github.com/sabinadams/aurora/commit/acb020d868f2ba16b114cf084b959b65d0294a73#diff-8f1b0a136f29e1af67b019f53772aa2e80bf4d24e2c8b844cfa993d8cc9df789
function getCustomAttributes(datamodel: string) {
  // Split the schema up by the ending of each block and then keep each starting with 'model'
  // This should essentially give us an array of the model blocks
  const modelChunks = datamodel.split('\n}');
  return modelChunks.reduce(
    (
      modelDefinitions: Record<string, CustomAttributes>,
      modelChunk: string,
    ) => {
      // Split the model chunk by line to get the individual fields
      let pieces = modelChunk
        .split('\n')
        .filter((chunk) => chunk.trim().length);
      // Pull out model name
      const modelName = pieces
        .find((name) => name.match(/model (.*) {/))
        ?.split(' ')[1];
      if (!modelName) return modelDefinitions;
      // Regex for getting our @map attribute
      const mapRegex = new RegExp(/@?@map\("(?<name>.*)"\)/);
      const dbRegex = new RegExp(/(?<type>@db\.(.[^\s@]*))/);
      const federationDirectiveRegex = new RegExp(
        /\/\/@(shareable|inaccessible|external|requires\(\s*fields:\s*.*\)|provides\(\s*fields:\s*.*\)|override\(\s*from:\s*.*\))/gi,
      );
      const federationDirectiveFieldRegex = new RegExp(
        /\/\/@.*\(\s*.*:\s*(?<value>.*)\)/,
      );
      const relationOnUpdateRegex = new RegExp(
        /onUpdate: (?<op>Cascade|NoAction|Restrict|SetDefault|SetNull)/,
      );
      const doubleAtIndexRegex = new RegExp(/(?<index>@@index\(.*\))/);
      const doubleAtIndexes = pieces
        .reduce((ac: string[], field) => {
          const item = field.match(doubleAtIndexRegex)?.groups?.index;
          return item ? [...ac, item] : ac;
        }, [])
        .filter((f) => f);
      const fieldsWithCustomAttributes = pieces
        .map((field) => {
          const columnName = field.match(mapRegex)?.groups?.name;
          const dbType = field.match(dbRegex)?.groups?.type;
          const relationOnUpdate = field.match(relationOnUpdateRegex)?.groups
            ?.op;

          const federationAttributes = Array.from(
            field.matchAll(federationDirectiveRegex),
          )?.map((matches) =>
            matches.filter((match) => match?.includes('//@'))[0].toLowerCase(),
          );

          /*
          console.log(federationAttributes);
          console.log(field.match(mapRegex));
          console.log(field.match(dbRegex));
          console.log(
            federationAttributes
              ?.find((a) => a.includes('//@requires'))
              ?.match(federationDirectiveFieldRegex)?.groups?.value,
          );
          */

          return [
            field.trim().split(' ')[0],
            {
              columnName,
              dbType,
              relationOnUpdate,
              shareable: federationAttributes?.includes('//@shareable'),
              inaccessible: federationAttributes?.includes('//@inaccessible'),
              external: federationAttributes?.includes('//@external'),
              requires: federationAttributes
                ?.find((a) => a.includes('//@requires'))
                ?.match(federationDirectiveFieldRegex)
                ?.groups?.value.replaceAll('"', ''),
              provides: federationAttributes
                ?.find((a) => a.includes('//@provides'))
                ?.match(federationDirectiveFieldRegex)
                ?.groups?.value.replaceAll('"', ''),
              override: federationAttributes
                ?.find((a) => a.includes('//@override'))
                ?.match(federationDirectiveFieldRegex)
                ?.groups?.value.replaceAll('"', ''),
            },
          ] as [string, CustomAttributes['fields'][0]];
        })
        .filter(
          (f) =>
            f[1]?.columnName ||
            f[1]?.dbType ||
            f[1]?.relationOnUpdate ||
            f[1]?.external ||
            f[1]?.inaccessible ||
            f[1]?.requires ||
            f[1]?.shareable,
        );

      return {
        ...modelDefinitions,
        [modelName]: {
          fields: Object.fromEntries(fieldsWithCustomAttributes),
          doubleAtIndexes,
        },
      };
    },
    {},
  );
}

export class Generators {
  options: Options = {
    prismaName: 'prisma',
    output: join(projectRoot, 'src/graphql'),
    excludeFields: [],
    excludeModels: [],
    excludeFieldsByModel: {},
    excludeQueriesAndMutations: [],
    excludeQueriesAndMutationsByModel: {},
  };

  isJS?: boolean = false;

  queries: Query[] = [
    'findUnique',
    'findFirst',
    'findMany',
    'findCount',
    'aggregate',
    'groupBy',
  ];
  mutations: Mutation[] = [
    'createOne',
    'updateOne',
    'upsertOne',
    'deleteOne',
    'updateMany',
    'deleteMany',
  ];

  schemaString: string;
  schemaPath: string;
  readyDmmf?: Document;

  constructor(schemaPath: string, customOptions?: Partial<Options>) {
    this.options = { ...this.options, ...customOptions };
    this.isJS = this.options.javaScript;
    this.schemaPath = schemaPath;
    this.schemaString = readFileSync(this.schemaPath, 'utf-8');
    tryLoadEnvs(getEnvPaths());
  }

  protected async dmmf(): Promise<Document> {
    if (!this.readyDmmf) {
      this.readyDmmf = await getSchema(this.schemaString);
      if (
        this.options.federation &&
        this.readyDmmf.modelmap?.has('TransactionalBatchMutation')
      ) {
        throw new Error(
          'TransactionalBatchMutation is a reserved model name! Please remove or rename TransactionalBatchMutation in the Prisma Schema.',
        );
      }
      return this.readyDmmf;
    } else {
      return this.readyDmmf;
    }
  }

  protected async schemaConfig() {
    return await getConfig({ datamodel: this.schemaString });
  }

  protected async datamodel() {
    const { datamodel }: { datamodel: Datamodel } = await this.dmmf();
    return datamodel;
  }

  protected dataModel(models: Model[], name: string) {
    return models.find((m) => m.name === name);
  }

  protected dataField(name: string, model?: Model) {
    return model?.fields.find((f: Field) => f.name === name);
  }

  protected async models() {
    const { schema }: { schema: DMMF.Schema } = await this.dmmf();
    return schema.outputObjectTypes.model.filter(
      (model) =>
        !this.options.models || this.options.models.includes(model.name),
    );
  }

  async getInputTypes(typeName: string, fieldName: string, sdl = true) {
    const { schema }: { schema: DMMF.Schema } = await this.dmmf();
    const field = schema.outputObjectTypes.prisma
      .find((type) => type.name === typeName)
      ?.fields.find((field) => field.name === fieldName);
    if (!field) return '';
    if (this.options.federation) {
      return sdl ? this.getSDLArgs(field.args) : this.getNexusArgs(field.args);
    } else {
      return sdl ? this.getSDLArgs(field.args) : this.getNexusArgs(field.args);
    }
  }

  getNexusArgs(args: DMMF.SchemaArg[]) {
    const getType = (arg: DMMF.SchemaArg) => {
      let type = `'${arg.inputTypes[0].type}'`;

      if (arg.inputTypes[0].isList) {
        type = `list(${type})`;
      }

      if (arg.isRequired) {
        type = `nonNull(${type})`;
      }
      return type;
    };
    const argsText: string[] = ['args: {'];
    args.forEach((arg) => {
      argsText.push(`${arg.name}: ${getType(arg)},`);
    });
    argsText.push('},');
    return argsText.join('\n');
  }

  getSDLArgs(args: DMMF.SchemaArg[]) {
    const getType = (arg: DMMF.SchemaArg) => {
      let type = `${arg.inputTypes[0].type}`;
      if (
        this.options.federation &&
        this.readyDmmf?.modelmap?.get(
          this.readyDmmf.modelInputTypesMap?.get(
            arg.inputTypes[0].type as string,
          ) ?? ``,
        )
      ) {
        type = `${this.options.federation}_${type}`;
      }

      if (arg.isRequired) {
        type = `${type}!`;
      }

      if (arg.inputTypes[0].isList) {
        type = `[${type}]`;
      }

      return type;
    };
    const argsText: string[] = [];
    args.forEach((arg) => {
      argsText.push(`${arg.name}: ${getType(arg)}`);
    });
    return argsText.join('\n');
  }

  protected withExtension(filename: string) {
    return filename + (this.isJS ? '.js' : '.ts');
  }

  protected excludeFields(model: string) {
    return this.options.excludeFields.concat(
      this.options.excludeFieldsByModel[model],
    );
  }

  protected disableQueries(model: string) {
    return (
      this.options.disableQueries ||
      !!this.options.excludeModels.find(
        (item) => item.name === model && item.queries,
      )
    );
  }

  protected disableMutations(model: string) {
    return (
      this.options.disableMutations ||
      !!this.options.excludeModels.find(
        (item) => item.name === model && item.mutations,
      )
    );
  }

  protected smallModel(name: string) {
    return name.charAt(0).toLowerCase() + name.slice(1);
  }

  protected upperModel(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  protected federatedOption() {
    return this.options.federation;
  }

  protected includeTransactionalBatchMutationOption() {
    return this.options.includeTransactionalBatchMutation;
  }

  protected excludedOperations(model: string) {
    return this.options.excludeQueriesAndMutations.concat(
      this.options.excludeQueriesAndMutationsByModel[model] ?? [],
    );
  }

  protected mkdir(path: string) {
    !existsSync(path) && mkdirSync(path, { recursive: true });
  }

  protected output(...paths: string[]): string {
    return join(this.options.output, ...paths);
  }

  protected getIndexContent(files: string[], oldFilePath?: string) {
    const oldFileContent = oldFilePath ? this.readFile(oldFilePath) : '';
    const lines: string[] = [];
    if (this.isJS) lines.push('module.exports = {');
    files.forEach((file) => {
      if (this.isJS) {
        lines.push(`  ...require('./${file}'),`);
      } else if (!oldFileContent.includes(`export * from './${file}'`)) {
        lines.push(`export * from './${file}'`);
      }
    });
    if (this.isJS) {
      lines.push('}');
      return lines.join('\n');
    } else {
      lines.push(oldFileContent);
      return lines.join('\n');
    }
  }

  protected readFile(path: string) {
    return existsSync(path) ? readFileSync(path, { encoding: 'utf-8' }) : '';
  }

  protected getImport(content: string, path: string) {
    return this.isJS
      ? `const ${content} = require('${path}')`
      : `import ${content} from '${path}'`;
  }

  protected filterDocs(docs?: string) {
    return docs
      ?.replace(/@PrismaSelect.map\(\[(.*?)\]\)/, '')
      .replace(/@onDelete\((.*?)\)/, '');
  }

  protected shouldOmit(docs?: string) {
    if (!docs?.includes('@Pal.omit')) {
      return false;
    }
    if (docs?.match(/@Pal.omit(\(\))?\b/)) {
      return true;
    }
    const innerExpression = docs?.match(/@Pal.omit\(\[(.*?)\]\)/);
    if (innerExpression) {
      const expressionArguments = innerExpression[1]
        .replace(/\s/g, '')
        .split(',')
        .filter(Boolean);
      return expressionArguments.includes('output');
    }
    return false;
  }

  protected createFileIfNotfound(
    path: string,
    fileName: string,
    content: string,
  ) {
    !existsSync(path) && this.mkdir(path);
    !existsSync(join(path, fileName)) &&
      writeFileSync(join(path, fileName), content);
  }

  protected get parser() {
    return this.isJS ? 'babel' : 'babel-ts';
  }

  protected formation(
    text: string,
    parser: PrettierOptions['parser'] = this.parser,
  ) {
    return format(text, {
      singleQuote: true,
      semi: true,
      trailingComma: 'all',
      parser,
    });
  }
}
