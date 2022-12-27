import { GraphQLError } from 'graphql/error';
import { Resolvers } from '../resolversTypes';

const mutationRegex = new RegExp(
  /(?<serviceName>)(createOne|updateOne|deleteOne|upsertOne|deleteMany|updateMany)(?<model>)/,
);

const resolvers: Resolvers = {
  Mutation: {
    Users_transactionalBatchMutation: async (_parent, args, { prisma }) => {
      const prismaTasks = await prisma.$transaction(async (prisma) => {
        let mutationTasks = [];
        for (const mutationTypes of args.mutations) {
          if (Object.keys(mutationTypes).length > 1) {
            throw new GraphQLError(
              `Only one mutation per Auth_transactionalMutationInput is allowed! Use multiple Auth_transactionalMutationInput in an array instead.`,
              {
                extensions: {
                  code: 'BAD_USER_INPUT',
                },
              },
            );
          }
          //console.log(mutationTypes);
          const query = Object.keys(mutationTypes)[0];
          const mutation = query.match(mutationRegex);
          const queryType = mutation ? mutation[0] : '';
          const [, model] = query.split(queryType);
          switch (queryType) {
            case 'createOne': {
              mutationTasks.concat(
                await prisma[model].create(mutationTypes[query]),
              );
              break;
            }
            case 'updateOne': {
              mutationTasks.concat(
                await prisma[model].update(mutationTypes[query]),
              );
              break;
            }
            case 'deleteOne': {
              mutationTasks.concat(
                await prisma[model].delete(mutationTypes[query]),
              );
              break;
            }
            case 'upsertOne': {
              mutationTasks.concat(
                await prisma[model].upsert(mutationTypes[query]),
              );
              break;
            }
            case 'deleteMany': {
              mutationTasks.concat(
                await prisma[model].deleteMany(mutationTypes[query]),
              );
              break;
            }
            case 'updateMany': {
              mutationTasks.concat(
                await prisma[model].updateMany(mutationTypes[query]),
              );
              break;
            }
            default: {
              throw new GraphQLError(
                `Query ${queryType} does not match any of the known generated CRUD mutations!`,
                {
                  extensions: {
                    code: 'BAD_USER_INPUT',
                  },
                },
              );
            }
          }
        }
        return mutationTasks;
      });
      //return prisma.user.create(args);
      return { transactionSucceeded: true };
    },
  },
};

export default resolvers;
