import { Options } from '@paljs/types';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { createQueriesAndMutations } from './CreateQueriesAndMutations';
import { Document, Generators, Model } from '../Generators';
import { GenerateTypes } from './GenerateTypes';
import { sdlInputsString, SDLInputsTemplate } from './sdl-inputs';
import { modelNamesExport } from './model-names';

export class GenerateSdl extends Generators {
  constructor(schemaPath: string, customOptions?: Partial<Options>) {
    super(schemaPath, customOptions);
  }

  async run() {
    await this.createModels();
    this.createMaster();
    if (!this.isJS) {
      const generateTypes = new GenerateTypes(await this.dmmf(), this.options);
      const code = generateTypes.run();
      writeFileSync(this.output('../resolversTypes.ts'), this.formation(code));
    }
    return this.dmmf();
  }

  private resolversPath = this.output(this.withExtension('resolvers'));
  private resolversIndex = existsSync(this.resolversPath)
    ? readFileSync(this.resolversPath, { encoding: 'utf-8' })
    : defaultResolverFile(this.isJS);
  private resolversExport: string[] = getCurrentExport(this.resolversIndex);

  private typeDefsPath = this.output(this.withExtension('typeDefs'));
  private typeDefsIndex = existsSync(this.typeDefsPath)
    ? readFileSync(this.typeDefsPath, { encoding: 'utf-8' })
    : defaultTypeFile(this.isJS);
  private typeDefsExport: string[] = getCurrentExport(this.typeDefsIndex);

  private SDLInputsPath = this.output(this.withExtension('sdl-inputs'));
  private inputsString: string = '';

  private modelNamesPath = this.output(this.withExtension('model-names'));
  private modelNames: string[] = [];

  private async createModels() {
    const dataModels = await this.datamodel();
    this.inputsString = await this.getSDLInputs(await this.dmmf());
    for (const model of await this.models()) {
      const dataModel = this.dataModel(dataModels.models, model.name);
      const modelDocs = this.filterDocs(dataModel?.documentation);
      let fileContent = ``;
      this.modelNames.push(model.name);
      if (this.options.federation) {
        //fileContent += `extend schema\n\t@link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])\n\n`;
        let keyStr = ``;
        dataModel?.keyFields?.forEach((keys) => {
          keyStr += `@key(fields: "` + keys.join(' ') + `") `;
        });

        fileContent += `${modelDocs ? `"""${modelDocs}"""\n` : ''}type ${
          model.name
        } `;
        fileContent += keyStr + ` @shareable {`;
      }
      const excludeFields = this.excludeFields(model.name);
      model.fields.forEach((field) => {
        if (!excludeFields.includes(field.name)) {
          const dataField = this.dataField(field.name, dataModel);
          const fieldDocs = this.filterDocs(dataField?.documentation);
          if (this.shouldOmit(fieldDocs)) {
            return;
          }
          fileContent += `
          ${fieldDocs ? `"""${fieldDocs}"""\n` : ''}${field.name}`;
          if (field.args.length > 0) {
            fileContent += '(';
            field.args.forEach((arg) => {
              const inputTypeModel = this.readyDmmf?.modelmap?.get(
                this.readyDmmf.modelInputTypesMap?.get(
                  arg.inputTypes[0].type as string,
                ) ?? ``,
              );
              if (inputTypeModel && this.options.federation) {
                fileContent += `${arg.name}: ${this.options.federation}_${arg.inputTypes[0].type}
                `;
              } else {
                fileContent += `${arg.name}: ${arg.inputTypes[0].type}
                `;
              }
            });
            fileContent += ')';
          }
          fileContent += `: ${
            field.outputType.isList
              ? `[${field.outputType.type}!]!`
              : field.outputType.type + (!field.isNullable ? '!' : '')
          }`;
          if (this.options.federation) {
            if (dataField?.shareable) {
              fileContent += ` @shareable`;
            }
            if (dataField?.inaccessible) {
              fileContent += ` @inaccessible`;
            }
            if (dataField?.external) {
              fileContent += ` @external`;
            }
            if (dataField?.requires) {
              {
                fileContent +=
                  ' @requires(fields: "' + dataField?.requires + '")';
              }
            }
            if (dataField?.provides) {
              {
                fileContent +=
                  ' @provides(fields: "' + dataField?.provides + '")';
              }
            }
            if (dataField?.override) {
              {
                fileContent +=
                  ' @override(from: "' + dataField?.override + '")';
              }
            }
          }
        }
      });
      fileContent += `\n}\n\n`;
      if (dataModel) {
        await this.createFiles(dataModel, fileContent);
      }
    }
  }

  private async getOperations(model: Model) {
    const exclude = this.excludedOperations(model.name);
    return await createQueriesAndMutations(
      model.name,
      exclude,
      this,
      model.generateUpdateMany ? true : false,
    );
  }

  private async createFiles(model: Model, typeContent: string) {
    const operations = await this.getOperations(model);
    this.mkdir(this.output(model.name));

    let resolvers = '';
    if (!this.disableQueries(model.name)) {
      resolvers += operations.queries.resolver;
      typeContent += operations.queries.type;
    }
    if (!this.disableMutations(model.name)) {
      resolvers += operations.mutations.resolver;
      typeContent += operations.mutations.type;
    }
    if (this.federatedOption()) {
      resolvers += `,${model.name}: {\n\t__resolveReference(reference, { prisma }) {\n`;
      resolvers += `const [field, value] = Object.entries(reference).find(e => e[0] !== '__typename');\n`;
      resolvers += `return prisma.${model.name.toLowerCase()}.findUnique({ where: { [field]: value } });`;
      resolvers += `\t}\n}\n`;
    }
    this.createResolvers(resolvers, model.name);
    this.createTypes(typeContent, model.name);
  }

  private createResolvers(resolvers: string, model: string) {
    if (resolvers) {
      if (this.isJS) {
        resolvers = `
      const ${model} = {
        ${resolvers}
      }
      
      module.exports = { 
      ${model}
      }
        `;
      } else {
        resolvers = `import { Resolvers } from '../../resolversTypes';
      import { GraphQLError } from 'graphql/error';
      
      const resolvers: Resolvers = {
        ${resolvers}
      }
      export default resolvers;
        `;
      }
      writeFileSync(
        this.output(model, this.withExtension('resolvers')),
        this.formation(resolvers),
      );

      if (!this.resolversExport.includes(model)) {
        this.resolversExport.push(model);
        this.resolversIndex = `${this.getImport(
          this.isJS ? `{ ${model} }` : model,
          `./${model}/resolvers`,
        )}\n${this.resolversIndex}`;
      }
    }
  }

  private createTypes(fileContent: string, model: string) {
    if (this.isJS) {
      fileContent = `const { default: gql } = require('graphql-tag');\n
    const ${model} = gql\`\n${this.formation(fileContent, 'graphql')}\n\`;\n
    module.exports = { 
      ${model}
      }`;
    } else {
      fileContent = `import gql from 'graphql-tag';\n
    export default gql\`\n${this.formation(fileContent, 'graphql')}\n\`;\n`;
    }

    writeFileSync(
      this.output(model, this.withExtension('typeDefs')),
      this.formation(fileContent),
    );

    if (!this.typeDefsExport.includes(model)) {
      this.typeDefsExport.push(model);
      this.typeDefsIndex = `${this.getImport(
        this.isJS ? `{ ${model} }` : model,
        `./${model}/typeDefs`,
      )}\n${this.typeDefsIndex}`;
    }
  }

  private createMaster() {
    writeFileSync(
      this.resolversPath,
      this.formation(replaceExports(this.resolversExport, this.resolversIndex)),
    );

    writeFileSync(
      this.typeDefsPath,
      this.formation(replaceExports(this.typeDefsExport, this.typeDefsIndex)),
    );

    writeFileSync(this.SDLInputsPath, SDLInputsTemplate(this.inputsString), {
      encoding: 'utf8',
      flag: 'w',
    });
    writeFileSync(
      this.modelNamesPath,
      modelNamesExport(this.modelNames, this.options.federation),
      { encoding: 'utf8', flag: 'w' },
    );
  }

  private async getSDLInputs(readyDmmf: Document): Promise<string> {
    console.log(this.includeTransactionalBatchMutationOption());
    return (this.inputsString = await sdlInputsString(
      {
        dmmfOptions: { datamodelPath: this.schemaPath },
        doNotUseFieldUpdateOperationsInput:
          this.options.doNotUseFieldUpdateOperationsInput,
        federation: this.federatedOption(),
        includeTransactionalBatchMutation:
          this.includeTransactionalBatchMutationOption(),
      },
      readyDmmf,
    ));
  }
}

const replaceExports = (exports: string[], text: string) => {
  const matchText = text.match(/\[([\S\s]*?)]/);
  if (matchText) {
    return text.replace(
      matchText[0],
      JSON.stringify(exports).replace(/"/g, ''),
    );
  }
  return '';
};

const getCurrentExport = (text: string) => {
  const matchText = text.match(/\[([\S\s]*?)]/);
  if (matchText) {
    return matchText[1]
      .split(',')
      .filter((a) => a)
      .map((a) => a.replace(/\s/g, ''));
  }
  return [];
};

const defaultResolverFile = (isJs?: boolean) =>
  isJs
    ? `
    const resolvers = [];
    
    module.exports = {resolvers};`
    : `export default [];`;
const defaultTypeFile = (isJs?: boolean) =>
  isJs
    ? `const { mergeTypeDefs } = require('@graphql-tools/merge');
const { sdlInputs } = require('@paljs/plugins');

const typeDefs = mergeTypeDefs([SDLInputs]);

module.exports = {typeDefs};`
    : `import { mergeTypeDefs } from '@graphql-tools/merge';
import SDLInputs from './sdl-inputs';;

export default mergeTypeDefs([SDLInputs]);`;
