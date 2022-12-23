import { QueriesAndMutations } from '@paljs/types';
import { GenerateSdl } from '.';

export async function createQueriesAndMutations(
  modelName: string,
  exclude: QueriesAndMutations[],
  generator: GenerateSdl,
  generateUpdateMany: boolean,
) {
  const operations = generator.options.federation
    ? {
        queries: {
          type: 'type Query {',
          resolver: 'Query: {',
        },
        mutations: {
          type: 'type Mutation {',
          resolver: 'Mutation: {',
        },
      }
    : {
        queries: {
          type: 'type Query {',
          resolver: 'Query: {',
        },
        mutations: {
          type: 'type Mutation {',
          resolver: 'Mutation: {',
        },
      };

  const args = async (key: QueriesAndMutations) =>
    await generator.getInputTypes(
      generator.queries.includes(key as any) ? 'Query' : 'Mutation',
      key + name,
    );
  const model = modelName.charAt(0).toLowerCase() + modelName.slice(1);
  const name = modelName.charAt(0).toUpperCase() + modelName.slice(1);
  const prismaName = generator.options.prismaName;
  if (!exclude.includes('findUnique')) {
    if (generator.options.federation) {
      operations.queries.type += `\n${generator.options.federation}_`;
      operations.queries.resolver += `\n${generator.options.federation}_`;
    } else {
      operations.queries.type += `\n`;
      operations.queries.resolver += `\n`;
    }
    operations.queries.type += `findUnique${name}(${await args(
      'findUnique',
    )}): ${modelName}`;
    operations.queries.resolver += `findUnique${name}: (_parent, args, {${prismaName}}) => {
      return ${prismaName}.${model}.findUnique(args)
    },`;
  }

  if (!exclude.includes('findUniqueOrThrow')) {
    if (generator.options.federation) {
      operations.queries.type += `\n${generator.options.federation}_`;
      operations.queries.resolver += `\n${generator.options.federation}_`;
    } else {
      operations.queries.type += `\n`;
      operations.queries.resolver += `\n`;
    }
    operations.queries.type += `findUnique${name}OrThrow(${await args(
      'findUnique',
    )}): ${modelName}`;
    operations.queries.resolver += `findUnique${name}OrThrow: (_parent, args, {${prismaName}}) => {
      return ${prismaName}.${model}.findUniqueOrThrow(args)
    },`;
  }

  if (!exclude.includes('findFirst')) {
    if (generator.options.federation) {
      operations.queries.type += `\n${generator.options.federation}_`;
      operations.queries.resolver += `\n${generator.options.federation}_`;
    } else {
      operations.queries.type += `\n`;
      operations.queries.resolver += `\n`;
    }
    operations.queries.type += `findFirst${name}(${await args(
      'findFirst',
    )}): ${modelName}`;
    operations.queries.resolver += `findFirst${name}: (_parent, args, {${prismaName}}) => {
      return ${prismaName}.${model}.findFirst(args)
    },`;
  }

  if (!exclude.includes('findFirstOrThrow')) {
    if (generator.options.federation) {
      operations.queries.type += `\n${generator.options.federation}_`;
      operations.queries.resolver += `\n${generator.options.federation}_`;
    } else {
      operations.queries.type += `\n`;
      operations.queries.resolver += `\n`;
    }
    operations.queries.type += `findFirst${name}OrThrow(${await args(
      'findFirst',
    )}): ${modelName}`;
    operations.queries.resolver += `findFirst${name}OrThrow: (_parent, args, {${prismaName}}) => {
      return ${prismaName}.${model}.findFirstOrThrow(args)
    },`;
  }

  if (!exclude.includes('findMany')) {
    if (generator.options.federation) {
      operations.queries.type += `\n${generator.options.federation}_`;
      operations.queries.resolver += `\n${generator.options.federation}_`;
    } else {
      operations.queries.type += `\n`;
      operations.queries.resolver += `\n`;
    }
    operations.queries.type += `findMany${name}(${await args(
      'findMany',
    )}): [${modelName}!]`;
    operations.queries.resolver += `findMany${name}: (_parent, args, {${prismaName}}) => {
      return ${prismaName}.${model}.findMany(args)
    },`;
  }

  if (!exclude.includes('findCount')) {
    if (generator.options.federation) {
      operations.queries.type += `\n${generator.options.federation}_`;
      operations.queries.resolver += `\n${generator.options.federation}_`;
    } else {
      operations.queries.type += `\n`;
      operations.queries.resolver += `\n`;
    }
    operations.queries.type += `findMany${name}Count(${await args(
      'findMany',
    )}): Int!`;
    operations.queries.resolver += `findMany${name}Count: (_parent, args, {${prismaName}}) => {
      return ${prismaName}.${model}.count(args)
    },`;
  }

  if (!exclude.includes('aggregate')) {
    if (generator.options.federation) {
      operations.queries.type += `\n${generator.options.federation}_`;
      operations.queries.resolver += `\n${generator.options.federation}_`;
    } else {
      operations.queries.type += `\n`;
      operations.queries.resolver += `\n`;
    }
    operations.queries.type += `aggregate${name}(${await args(
      'aggregate',
    )}): Aggregate${name}`;
    operations.queries.resolver += `aggregate${name}: (_parent, args, {${prismaName}}) => {
      return ${prismaName}.${model}.aggregate(args)
    },`;
  }

  if (!exclude.includes('groupBy')) {
    if (generator.options.federation) {
      operations.queries.type += `\n${generator.options.federation}_`;
      operations.queries.resolver += `\n${generator.options.federation}_`;
    } else {
      operations.queries.type += `\n`;
      operations.queries.resolver += `\n`;
    }
    operations.queries.type += `groupBy${name}(${await args(
      'groupBy',
    )}): [${name}GroupByOutputType]`;
    operations.queries.resolver += `groupBy${name}: async (_parent, args, {${prismaName}}) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await (${prismaName}.${model}.groupBy(args));
        return result;
      } catch(e) {
        if (e.toString().includes("Argument by is missing")) {
          throw new GraphQLError(\`Argument 'by' is missing\`, {
            extensions: {
              code: 'BAD_USER_INPUT',
            },
          });
        }
      }
    },`;
  }

  if (!exclude.includes('createOne')) {
    if (generator.options.federation) {
      operations.mutations.type += `\n${generator.options.federation}_`;
      operations.mutations.resolver += `\n${generator.options.federation}_`;
    } else {
      operations.mutations.type += `\n`;
      operations.mutations.resolver += `\n`;
    }
    operations.mutations.type += `createOne${name}(${await args(
      'createOne',
    )}): ${name}!`;
    operations.mutations.resolver += `createOne${name}: (_parent, args, {${prismaName}}) => {
      return ${prismaName}.${model}.create(args)
    },`;
  }

  if (!exclude.includes('updateOne')) {
    if (generator.options.federation) {
      operations.mutations.type += `\n${generator.options.federation}_`;
      operations.mutations.resolver += `\n${generator.options.federation}_`;
    } else {
      operations.mutations.type += `\n`;
      operations.mutations.resolver += `\n`;
    }
    operations.mutations.type += `updateOne${name}(${await args(
      'updateOne',
    )}): ${modelName}!`;
    operations.mutations.resolver += `updateOne${name}: (_parent, args, {${prismaName}}) => {
      return ${prismaName}.${model}.update(args)
    },`;
  }

  if (!exclude.includes('updateOneSaga')) {
    if (generator.options.federation) {
      operations.mutations.type += `\n${generator.options.federation}_`;
      operations.mutations.resolver += `\n${generator.options.federation}_`;
    } else {
      operations.mutations.type += `\n`;
      operations.mutations.resolver += `\n`;
    }
    let updateArgsName = await args('updateOne');
    updateArgsName = updateArgsName.replaceAll('Input', 'SagaInput');
    operations.mutations.type += `updateOne${name}Saga(${updateArgsName}): ${modelName}!`;
    operations.mutations.resolver += `updateOne${name}Saga: (_parent, args, {${prismaName}}) => {
      return ${prismaName}.${model}.update(args)
    },`;
  }

  if (!exclude.includes('deleteOne')) {
    if (generator.options.federation) {
      operations.mutations.type += `\n${generator.options.federation}_`;
      operations.mutations.resolver += `\n${generator.options.federation}_`;
    } else {
      operations.mutations.type += `\n`;
      operations.mutations.resolver += `\n`;
    }
    operations.mutations.type += `deleteOne${name}(${await args(
      'deleteOne',
    )}): ${modelName}`;
    operations.mutations.resolver += `deleteOne${name}: async (_parent, args, {${prismaName}}) => {
      return ${prismaName}.${model}.delete(args)
    },`;
  }

  if (!exclude.includes('upsertOne')) {
    if (generator.options.federation) {
      operations.mutations.type += `\n${generator.options.federation}_`;
      operations.mutations.resolver += `\n${generator.options.federation}_`;
    } else {
      operations.mutations.type += `\n`;
      operations.mutations.resolver += `\n`;
    }
    operations.mutations.type += `upsertOne${name}(${await args(
      'upsertOne',
    )}): ${modelName}`;
    operations.mutations.resolver += `upsertOne${name}: async (_parent, args, {${prismaName}}) => {
      return ${prismaName}.${model}.upsert(args)
    },`;
  }

  if (!exclude.includes('deleteMany')) {
    if (generator.options.federation) {
      operations.mutations.type += `\n${generator.options.federation}_`;
      operations.mutations.resolver += `\n${generator.options.federation}_`;
    } else {
      operations.mutations.type += `\n`;
      operations.mutations.resolver += `\n`;
    }
    operations.mutations.type += `deleteMany${name}(${await args(
      'deleteMany',
    )}): BatchPayload`;
    operations.mutations.resolver += `deleteMany${name}: async (_parent, args, {${prismaName}}) => {
      return ${prismaName}.${model}.deleteMany(args)
    },`;
  }

  if (!exclude.includes('updateMany') && generateUpdateMany) {
    if (generator.options.federation) {
      operations.mutations.type += `\n${generator.options.federation}_`;
      operations.mutations.resolver += `\n${generator.options.federation}_`;
    } else {
      operations.mutations.type += `\n`;
      operations.mutations.resolver += `\n`;
    }
    operations.mutations.type += `updateMany${name}(${await args(
      'updateMany',
    )}): BatchPayload`;
    operations.mutations.resolver += `updateMany${name}: (_parent, args, {${prismaName}}) => {
      return ${prismaName}.${model}.updateMany(args)
    },`;
  } else if (!generateUpdateMany) {
    operations.mutations.type += `\n# updateMany for this model cannot exist as this model contains only unique fields or relations.`;
    operations.mutations.resolver += `\n//updateMany for this model cannot exist as this model contains only unique fields or relations.`;
  }

  operations.queries.type += `
}\n\n`;
  operations.queries.resolver += `
},`;
  operations.mutations.type += `
}`;
  operations.mutations.resolver += `
}`;
  return operations;
}
