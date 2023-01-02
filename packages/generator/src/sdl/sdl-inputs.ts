import { DMMF } from '@prisma/client/runtime';
import { GetDMMFOptions, getDMMF } from '@prisma/internals';
import gql from 'graphql-tag';
import { Document, Field } from '../Generators';

export function SDLInputsTemplate(graphqlSDL: string) {
  return `import gql from 'graphql-tag';

export default gql\`
${graphqlSDL}
\`;`;
}

export interface SDLInputOptions {
  dmmfOptions: GetDMMFOptions;
  excludeFields?: string[];
  filterInputs?: (input: DMMF.InputType) => DMMF.SchemaArg[];
  doNotUseFieldUpdateOperationsInput?: boolean;
  includeTransactionalBatchMutation?: boolean;
  federation?: string;
}

const testedTypes: string[] = [];

const hasEmptyTypeFields = (
  type: string,
  schema: DMMF.Schema,
  options?: SDLInputOptions,
) => {
  testedTypes.push(type);
  const inputObjectTypes = schema ? [...schema.inputObjectTypes.prisma] : [];
  if (schema?.inputObjectTypes.model)
    inputObjectTypes.push(...schema.inputObjectTypes.model);

  const inputType = inputObjectTypes.find((item) => item.name === type);
  if (inputType) {
    if (inputType.fields.length === 0) return true;
    for (const field of inputType.fields) {
      const fieldType = getInputType(field, options);
      if (
        fieldType.type !== type &&
        fieldType.location === 'inputObjectTypes' &&
        !testedTypes.includes(fieldType.type as string)
      ) {
        const state = hasEmptyTypeFields(
          fieldType.type as string,
          schema,
          options,
        );
        if (state) return true;
      }
    }
  }
  return false;
};

const getInputType = (
  field: DMMF.SchemaArg,
  options?: { doNotUseFieldUpdateOperationsInput?: boolean },
) => {
  let index = 0;
  if (
    options?.doNotUseFieldUpdateOperationsInput &&
    field.inputTypes.length > 1 &&
    (field.inputTypes[1].type as string).endsWith('FieldUpdateOperationsInput')
  ) {
    return field.inputTypes[index];
  }
  if (
    field.inputTypes.length > 1 &&
    (field.inputTypes[1].location === 'inputObjectTypes' ||
      field.inputTypes[1].isList ||
      field.inputTypes[1].type === 'Json')
  ) {
    index = 1;
  }
  return field.inputTypes[index];
};

async function generateInputsString(
  schema: DMMF.Schema,
  readyDmmf: Document,
  options?: SDLInputOptions,
) {
  let fileContent = `
scalar DateTime

type BatchPayload @shareable {
  count: Int!
}
`;
  if (schema) {
    const enums = [...schema.enumTypes.prisma];

    if (schema.enumTypes.model) enums.push(...schema.enumTypes.model);
    enums.forEach((item) => {
      fileContent += `enum ${item.name} {`;
      item.values.forEach((item2) => {
        fileContent += `  ${item2}`;
      });
      fileContent += `\n}
  
`;
    });
    //console.log(schema);
    //console.log (schema.inputObjectTypes.model);
    const inputObjectTypes = [...schema.inputObjectTypes.prisma];
    if (schema.inputObjectTypes.model)
      inputObjectTypes.push(...schema.inputObjectTypes.model);

    //console.log(readyDmmf.modelInputTypesMap);
    //console.log(readyDmmf.modelOutputTypesMap);
    //console.log(readyDmmf.datamodel);
    //console.log(readyDmmf.schema.outputObjectTypes.prisma.map(p => p.name));

    inputObjectTypes.forEach((input) => {
      if (input.fields.length > 0) {
        if (options?.federation) {
          fileContent += `input ${options?.federation}_${input.name} {\n`;
        } else {
          fileContent += `input ${input.name} {\n`;
        }
        const inputFields =
          typeof options?.filterInputs === 'function'
            ? options.filterInputs(input)
            : input.fields;
        inputFields
          .filter((field) => !options?.excludeFields?.includes(field.name))
          .forEach(async (field) => {
            const inputType = getInputType(field, options);

            const hasEmptyType =
              inputType.location === 'inputObjectTypes' &&
              hasEmptyTypeFields(inputType.type as string, schema, options);

            if (!hasEmptyType) {
              if (options?.federation) {
                fileContent += `  ${field.name}: ${
                  inputType.isList
                    ? `[${options?.federation}_${inputType.type}!]`
                    : `${options?.federation}_${inputType.type}`
                }${field.isRequired ? '!' : ''}`;
              } else {
                fileContent += `  ${field.name}: ${
                  inputType.isList ? `[${inputType.type}!]` : inputType.type
                }${field.isRequired ? '!' : ''}`;
              }
              fileContent += `\n`;
            }
          });
        fileContent += `}
    
`;
      }
    });

    schema?.outputObjectTypes.prisma
      .filter(
        (type) =>
          type.name.includes('Aggregate') ||
          type.name.endsWith('CountOutputType') ||
          type.name.endsWith('GroupByOutputType'),
      )
      .forEach((type) => {
        if (options?.federation) {
          const model = readyDmmf.modelmap?.get(
            readyDmmf.modelOutputTypesMap?.get(type.name) ?? ``,
          );

          if (model) {
            fileContent += `type ${type.name} `;
            if (type.name.startsWith(`Aggregate`)) {
              fileContent += `@shareable {\n`;
            } else if (
              type.name === model.name + `CountAggregateOutputType` ||
              type.name === model.name + `AvgAggregateOutputType` ||
              type.name === model.name + `SumAggregateOutputType` ||
              type.name === model.name + `MinAggregateOutputType` ||
              type.name === model.name + `MaxAggregateOutputType` ||
              type.name === model.name + `CountOutputType` ||
              type.name === model.name + `GroupByOutputType`
            ) {
              let keyStr = ``;

              model?.keyFields?.forEach((keys) => {
                if (
                  keys.every((key) =>
                    type.fields.map((field) => field.name).includes(key),
                  )
                ) {
                  keyStr += `@key(fields: "` + keys.join(' ') + `") `;
                }
              });
              fileContent += keyStr + ` @shareable {\n`;
            } else {
              let keyStr = ``;
              model?.keyFields?.forEach((keys) => {
                //let isNumber: boolean = false;

                keyStr += `@key(fields: "` + keys.join(' ') + `") `;
              });
              fileContent += keyStr + ` @shareable {\n`;
            }

            type.fields
              .filter((field) => !options?.excludeFields?.includes(field.name))
              .forEach((field) => {
                fileContent += `  ${field.name}: ${
                  field.outputType.isList
                    ? `[${field.outputType.type}!]`
                    : field.outputType.type
                }${!field.isNullable ? '!' : ''}`;

                /*
                if (field.name == '_all') {
                  fileContent += ' @shareable'
                }
                */

                const modelField: Field | undefined = model.fields.find(
                  (f) => (f.name = field.name),
                );
                if (modelField) {
                }
                fileContent += `\n`;
              });

            fileContent += `}\n\n`;
          }
        } else {
          fileContent += `type ${type.name} {\n`;
          type.fields
            .filter((field) => !options?.excludeFields?.includes(field.name))
            .forEach((field) => {
              fileContent += `  ${field.name}: ${
                field.outputType.isList
                  ? `[${field.outputType.type}!]`
                  : field.outputType.type
              }${!field.isNullable ? '!' : ''}`;
              fileContent += `\n`;
            });
          fileContent += `}\n\n`;
        }
      });

    console.log(options?.includeTransactionalBatchMutation);
    if (options?.includeTransactionalBatchMutation) {
      const Mutation = schema?.outputObjectTypes.prisma.find(
        (outputType) => outputType.name === 'Mutation',
      );
      const TransactionalBatchInput: string[] = [];
      const MutationsArgsInputs: string[] = [];
      let modelRegexStr = Array.from(readyDmmf.modelmap!.keys()).join('|');
      const updateManyRegex = new RegExp(
        `(updateMany(?<model>${modelRegexStr}))`,
      );
      if (Mutation) {
        Mutation.fields.forEach((field) => {
          if (field.name != 'executeRaw' && field.name != 'queryRaw') {
            let match = field.name.match(updateManyRegex);
            if (match && match.groups?.model) {
              if (
                readyDmmf.modelmap?.get(match.groups?.model)
                  ?.generateUpdateMany == false
              ) {
                return;
              }
            }
            TransactionalBatchInput.push(
              options?.federation
                ? `  ${options.federation}_${field.name}: ${options.federation}_${field.name}Input`
                : ` ${field.name}: ${field.name}Input`,
            );
            MutationsArgsInputs.push(
              options?.federation
                ? `input ${options.federation}_${field.name}Input {`
                : `input ${field.name}Input {`,
            );
            field.args.forEach((args) => {
              let line = '';
              line += ` ${args.name}: `;
              if (
                args.inputTypes[0].type !== 'Boolean' &&
                options?.federation
              ) {
                line += args.inputTypes[0].isList
                  ? `[${options?.federation}_${args.inputTypes[0].type}]`
                  : `${options?.federation}_${args.inputTypes[0].type}`;
              } else {
                line += args.inputTypes[0].isList
                  ? `[${args.inputTypes[0].type}]`
                  : `${args.inputTypes[0].type}`;
              }
              MutationsArgsInputs.push(line);
            });

            MutationsArgsInputs.push(`}\n`);
          }
        });
      }
      MutationsArgsInputs.push(
        options?.federation
          ? `input ${options.federation}_transactionalMutationInput {`
          : `input transactionalMutationInput {`,
      );
      MutationsArgsInputs.push(TransactionalBatchInput.join('\n'));
      MutationsArgsInputs.push(`}\n`);

      fileContent += `type TransactionSucceeded ${
        options?.federation ? `@shareable` : ``
      } {
  transactionSucceeded: Boolean!
}\n\n`;
      fileContent += MutationsArgsInputs.join(`\n`);
    }
  }
  return fileContent;
}

export const sdlInputs = async (
  options: SDLInputOptions,
  readyDmmf: Document,
) => {
  const dmmf = await getDMMF(options.dmmfOptions);
  const inputString = await generateInputsString(
    dmmf.schema,
    readyDmmf,
    options,
  );
  return gql(inputString);
};

export const sdlInputsString = async (
  options: SDLInputOptions,
  readyDmmf: Document,
) => {
  const dmmf = await getDMMF(options.dmmfOptions);
  /*
  console.log("printing datamodel types : ");
  console.log(dmmf.datamodel.types);
  console.log("printing mappings : ");
  console.log(dmmf.mappings);
  console.log(dmmf.schema.outputObjectTypes.prisma)
  */ return generateInputsString(dmmf.schema, readyDmmf, options);
};
