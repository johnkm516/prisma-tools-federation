import { Options } from '@paljs/types';
import { DMMF } from '../schema';
import { Document } from '../Generators';

export class GenerateTypes {
  code: string[] = [
    `import * as Client from '@prisma/client'`,
    `import { Context } from './context'`,
    `import { GraphQLResolveInfo } from 'graphql';`,
    `type Resolver<T extends {}, A extends {}, R extends any> = (parent: T,args: A, context: Context, info: GraphQLResolveInfo) => Promise<R>;`,
    `// cause typescript not to expand types and preserve names
    type NoExpand<T> = T extends unknown ? T : never;`,
    `// this type assumes the passed object is entirely optional
    type AtLeast<O extends object, K extends string> = NoExpand<
      O extends unknown
      ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
        | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
      : never>;`,
    `export type GroupByError = \`Error: Field "\${any}" used in "having" needs to be provided in "by".\` | [Error, "Field ", any, " in \\"having\\" needs to be provided in \\"by\\""] `,
  ];

  scalar: { [key: string]: any } = {
    Int: 'number',
    Float: 'number',
    String: 'string',
    Boolean: 'boolean',
    DateTime: 'Date',
    Json: 'any',
  };

  testedTypes: string[] = [];

  constructor(private dmmf: Document, private options: Partial<Options>) {}

  get schema() {
    return this.dmmf.schema;
  }

  get dataModel() {
    return this.dmmf.datamodel;
  }

  isModel(modelName: string) {
    return (
      !!this.dmmf.datamodel.models.find((model) => model.name === modelName) ||
      !!this.dmmf.schema.enumTypes.model?.find(
        (model) => model.name === modelName,
      )
    );
  }

  capital(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  getOutputType(
    options: DMMF.SchemaField['outputType'] | DMMF.SchemaArgInputType,
    input = false,
  ) {
    switch (options.location) {
      case 'scalar':
        return `${this.scalar[options.type as string]}${
          options.isList ? '[]' : ''
        }`;
      default:
        const type =
          options.type.toString().startsWith('Aggregate') &&
          this.options.federation
            ? `Prisma.Get${options.type
                .toString()
                .replace('Aggregate', '')}AggregateType<${
                this.options.federation
              }_${options.type}Args>`
            : options.type.toString().startsWith('Aggregate')
            ? `Prisma.Get${options.type
                .toString()
                .replace('Aggregate', '')}AggregateType<${options.type}Args>`
            : options.type.toString() === 'AffectedRowsOutput'
            ? 'Prisma.BatchPayload'
            : !this.isModel(options.type.toString()) && !input
            ? `Prisma.${options.type}`
            : options.type;
        return `${!input ? 'Client.' : ''}${type}${options.isList ? '[]' : ''}`;
    }
  }

  hasEmptyTypeFields(type: string) {
    this.testedTypes.push(type);
    const inputType = this.schema.inputObjectTypes.prisma.find(
      (item) => item.name === type,
    );
    if (inputType) {
      if (inputType.fields.length === 0) return true;
      for (const field of inputType.fields) {
        const fieldType = this.getInputType(field);
        if (
          fieldType.type !== type &&
          fieldType.location === 'inputObjectTypes' &&
          !this.testedTypes.includes(fieldType.type as string)
        ) {
          const state = this.hasEmptyTypeFields(fieldType.type as string);
          if (state) return true;
        }
      }
    }
    return false;
  }

  getInputType(field: DMMF.SchemaArg) {
    let index = 0;
    if (
      this.options.doNotUseFieldUpdateOperationsInput &&
      field.inputTypes.length > 1 &&
      (field.inputTypes[1].type as string).endsWith(
        'FieldUpdateOperationsInput',
      )
    ) {
      return field.inputTypes[index];
    }
    if (
      field.inputTypes.length > 1 &&
      field.inputTypes[1].location === 'inputObjectTypes'
    ) {
      index = 1;
    }
    return field.inputTypes[index];
  }

  getOutput(typeName: string) {
    return this.dmmf.schema.outputObjectTypes.prisma.find(
      (type) => type.name === typeName,
    );
  }

  run() {
    const outputTypes: string[] = [
      `export interface Resolvers {`,
      `[key: string]: {[key: string]: Resolver<any, any, any>}`,
    ];
    const argsTypes: string[] = [];
    const resolversTypes: string[] = [];
    // generate Output types
    [
      ...this.schema.outputObjectTypes.model,
      ...this.schema.outputObjectTypes.prisma,
    ].forEach((type) => {
      outputTypes.push(`${type.name}?: ${type.name};`);
      const fields: string[] = [
        `export interface ${type.name} {`,
        `[key: string]: Resolver<any, any, any>`,
      ];

      // generate fields
      type.fields.forEach((field) => {
        const parentType = ['Query', 'Mutation'].includes(type.name)
          ? '{}'
          : `Client.${
              type.name === 'AffectedRowsOutput'
                ? 'Prisma.BatchPayload'
                : !this.isModel(type.name)
                ? 'Prisma.' + type.name
                : type.name
            }`;
        const argsType =
          field.args.length > 0
            ? `${
                ['Query', 'Mutation'].includes(type.name) ? '' : type.name
              }${this.capital(field.name)}Args`
            : '{}';
        const fieldName =
          ['Query', 'Mutation'].includes(type.name) && this.options.federation
            ? `${this.options.federation}_${field.name}`
            : field.name;
        if (
          (!field.name.startsWith(`updateMany`) ||
            (field.name.startsWith(`updateMany`) &&
              this.dmmf.modelmap?.get(field.name.replace(`updateMany`, ``))
                ?.generateUpdateMany)) &&
          !field.name.startsWith(`groupBy`)
        ) {
          if (argsType != `{}` && this.options.federation) {
            fields.push(
              `${fieldName}?: Resolver<${parentType}, ${
                this.options.federation
              }_${argsType}, ${this.getOutputType(field.outputType)}${
                field.isNullable ? ' | null' : ''
              }>`,
            );
          } else {
            fields.push(
              `${fieldName}?: Resolver<${parentType}, ${argsType}, ${this.getOutputType(
                field.outputType,
              )}${field.isNullable ? ' | null' : ''}>`,
            );
          }
        } else {
          fields.push(
            `//${fieldName} is not generated because model has only unique fields or relations.`,
          );
        }

        // add findManyCount
        if (
          type.name === 'Query' &&
          field.name.startsWith('findMany') &&
          this.options.federation
        ) {
          fields.push(
            `${fieldName}Count?: Resolver<${parentType}, ${this.options.federation}_${argsType}, number>`,
          );
        } else if (field.name.startsWith('findMany')) {
          fields.push(
            `${fieldName}Count?: Resolver<${parentType}, ${argsType}, number>`,
          );
        }

        // add groupBy
        if (
          type.name === 'Query' &&
          field.name.startsWith('groupBy') &&
          this.options.federation
        ) {
          let modelName = fieldName.replace(
            `${this.options.federation}_groupBy`,
            '',
          );
          fields.push(
            `${fieldName}?: Resolver<${parentType}, any, Client.Prisma.Get${modelName}GroupByPayload<${this.options.federation}_GroupBy${modelName}Args> | GroupByError>;`,
          );
        } else if (field.name.startsWith('groupBy')) {
          let modelName = fieldName.replace('groupBy', '');
          fields.push(
            `${fieldName}?: Resolver<${parentType}, any, Client.Prisma.Get${modelName}GroupByPayload<GroupBy${modelName}Args> | GroupByError>;`,
          );
        }

        if (
          this.options.includeTransactionalBatchMutation &&
          type.name === 'Mutation' &&
          field.name === type.fields[type.fields.length - 1].name
        ) {
          fields.push(
            this.options.federation
              ? `${this.options.federation}_transactionalBatchMutation?: Resolver<{}, ${this.options.federation}_TransactionalBatchMutationArgs, any>;`
              : `transactionalBatchMutation?: Resolver<{}, TransactionalBatchMutationArgs, any>;`,
          );
        }

        // generate args
        if (argsType !== '{}') {
          if (
            !argsType.startsWith('UpdateMany') ||
            (argsType.startsWith('UpdateMany') &&
              this.dmmf.modelmap?.get(
                argsType.split(`UpdateMany`)[1]?.split(`Args`)[0],
              )?.generateUpdateMany)
          ) {
            const args: string[] = [];
            if (this.options.federation) {
              args.push(
                `export interface ${this.options.federation}_${argsType} {`,
              );
            } else {
              args.push(`export interface ${argsType} {`);
            }

            field.args.forEach((arg) => {
              const outputTypeModel = this.dmmf.modelmap?.get(
                this.dmmf.modelInputTypesMap?.get(
                  this.getOutputType(arg.inputTypes[0], true).replace(`[]`, ``),
                ) ?? ``,
              );
              if (this.options.federation && outputTypeModel) {
                args.push(
                  `${arg.name}${arg.isRequired ? '' : '?'}: ${
                    this.options.federation
                  }_${this.getOutputType(arg.inputTypes[0], true)}${
                    field.isNullable ? ' | null' : ''
                  }`,
                );
              } else {
                args.push(
                  `${arg.name}${
                    arg.isRequired ? '' : '?'
                  }: ${this.getOutputType(arg.inputTypes[0], true)}${
                    field.isNullable ? ' | null' : ''
                  }`,
                );
              }
            });
            if (argsType.startsWith('Aggregate')) {
              const modelName = field.outputType.type
                .toString()
                .replace('Aggregate', '');
              const output = this.getOutput(field.outputType.type.toString());
              output?.fields.forEach((field) => {
                const name = this.capital(field.name.replace('_', ''));
                args.push(
                  `${field.name}?: Client.Prisma.${modelName}${name}AggregateInputType`,
                );
              });
            }
            args.push('}');
            argsTypes.push(args.join('\n'));
          } else {
            argsTypes.push(
              `//${argsType} is not generated as the related model contains only unique or relation fields`,
            );
          }
        }
      });
      if (this.options.federation) {
        if ([...this.schema.outputObjectTypes.model].includes(type)) {
          fields.push(`\n\n__resolveReference?: any`);
        }
      }

      fields.push('}');
      resolversTypes.push(fields.join('\n'));
    });
    outputTypes.push('}');
    this.code.push(
      outputTypes.join('\n'),
      resolversTypes.join('\n\n'),
      argsTypes.join('\n\n'),
    );

    // generate input types
    const inputTypes: string[] = [];
    const inputModel = this.schema.inputObjectTypes.model || [];
    [...this.schema.inputObjectTypes.prisma, ...inputModel].forEach((input) => {
      if (input.fields.length > 0) {
        const fields: string[] = [];
        const model = this.dmmf.modelmap?.get(
          this.dmmf.modelInputTypesMap?.get(input.name) ?? ``,
        );
        if (this.options.federation && model) {
          if (input.name === `${model.name}WhereUniqueInput`) {
            fields.push(
              `export type ${this.options.federation}_${input.name} = AtLeast<{`,
            );
          } else {
            fields.push(
              `export interface ${this.options.federation}_${input.name} {`,
            );
          }
          input.fields.forEach((field) => {
            const inputType = this.getInputType(field);
            const outputTypeModel = this.dmmf.modelmap?.get(
              this.dmmf.modelInputTypesMap?.get(
                this.getOutputType(inputType, true).replace(`[]`, ``),
              ) ?? ``,
            );
            const hasEmptyType =
              inputType.location === 'inputObjectTypes' &&
              this.hasEmptyTypeFields(inputType.type as string);
            if (outputTypeModel && !hasEmptyType) {
              fields.push(
                `${field.name}${field.isRequired ? '' : '?'}: ${
                  this.options.federation
                }_${this.getOutputType(inputType, true)}${
                  field.isNullable ? ' | null' : ''
                }`,
              );
            } else if (!hasEmptyType) {
              fields.push(
                `${field.name}${
                  field.isRequired ? '' : '?'
                }: ${this.getOutputType(inputType, true)}${
                  field.isNullable ? ' | null' : ''
                }`,
              );
            }
          });
          if (input.name === `${model.name}WhereUniqueInput`) {
            let uniques = [...new Set(model.keyFields?.flat())];
            fields.push('}, ');
            fields.push(
              uniques
                .map((unique) => {
                  return `'${unique}'`;
                })
                .join(' | '),
            );
            fields.push('>');
          } else {
            fields.push('}');
          }

          inputTypes.push(fields.join('\n'));

          if (input.name === `${model.name}UpdateInput`) {
            if (this.options.federation) {
              fields.push(
                `export interface ${this.options.federation}_${input.name} {`,
              );
            } else {
              fields.push(
                `export interface ${this.options.federation}_${input.name} {`,
              );
            }

            input.fields.forEach((field) => {
              const inputType = this.getInputType(field);
              const outputTypeModel = this.dmmf.modelmap?.get(
                this.dmmf.modelInputTypesMap?.get(
                  this.getOutputType(inputType, true).replace(`[]`, ``),
                ) ?? ``,
              );
              const hasEmptyType =
                inputType.location === 'inputObjectTypes' &&
                this.hasEmptyTypeFields(inputType.type as string);
              if (outputTypeModel && !hasEmptyType) {
                fields.push(
                  `${field.name}${field.isRequired ? '' : '?'}: ${
                    this.options.federation
                  }_${this.getOutputType(inputType, true)}${
                    field.isNullable ? ' | null' : ''
                  }`,
                );
              } else if (!hasEmptyType) {
                fields.push(
                  `${field.name}${
                    field.isRequired ? '' : '?'
                  }: ${this.getOutputType(inputType, true)}${
                    field.isNullable ? ' | null' : ''
                  }`,
                );
              }
            });

            fields.push('}');
          }
        } else {
          fields.push(`export interface ${input.name} {`);
          input.fields.forEach((field) => {
            const inputType = this.getInputType(field);
            const hasEmptyType =
              inputType.location === 'inputObjectTypes' &&
              this.hasEmptyTypeFields(inputType.type as string);
            if (!hasEmptyType) {
              fields.push(
                `${field.name}${
                  field.isRequired ? '' : '?'
                }: ${this.getOutputType(inputType, true)}${
                  field.isNullable ? ' | null' : ''
                }`,
              );
            }
          });
          fields.push('}');
          inputTypes.push(fields.join('\n'));
        }
      }
    });
    this.code.push(inputTypes.join('\n\n'));

    // generate enums
    const enumsTypes: string[] = [];
    const enumModel = this.schema.enumTypes.model || [];
    [...this.schema.enumTypes.prisma, ...enumModel].forEach((item) => {
      const values: string[] = [`export enum ${item.name} {`];
      item.values.forEach((item2) => {
        values.push(`${item2} = "${item2}",`);
      });
      values.push('}');
      enumsTypes.push(values.join('\n'));
    });
    this.code.push(enumsTypes.join('\n'));

    // generate TransactionalBatchMutation
    if (this.options.includeTransactionalBatchMutation) {
      const TransactionalBatchInput: string[] = [];
      const Mutation = this.schema.outputObjectTypes.prisma.find(
        (type) => type.name === 'Mutation',
      );
      if (Mutation) {
        TransactionalBatchInput.push(
          this.options.federation
            ? `export interface ${this.options.federation}_TransactionalMutationInput {`
            : `export interface TransactionalMutationInput {`,
        );
        Mutation.fields.forEach((field) => {
          const fieldname =
            field.name.charAt(0).toUpperCase() + field.name.slice(1);
          if (field.name != 'executeRaw' && field.name != 'queryRaw') {
            TransactionalBatchInput.push(
              this.options?.federation
                ? `  ${this.options.federation}_${fieldname}: ${this.options.federation}_${fieldname}Args;`
                : ` ${fieldname}: ${fieldname}Args;`,
            );
          }
        });
        TransactionalBatchInput.push(`}\n`);

        TransactionalBatchInput.push(
          this.options.federation
            ? `export interface ${this.options.federation}_TransactionalBatchMutationArgs {`
            : `export interface TransactionalMutationArgs {`,
        );
        TransactionalBatchInput.push(
          this.options.federation
            ? `  mutations: ${this.options.federation}_TransactionalMutationInput[];`
            : ` mutations: TransactionalMutationInput[];`,
        );
        TransactionalBatchInput.push(`}\n`);

        TransactionalBatchInput.push(
          `export interface TransactionSucceeded {
          transactionSucceeded: boolean
        }\n`,
        );
      }
      this.code.push(TransactionalBatchInput.join('\n'));
    }

    return this.code.join('\n\n');
  }
}
