import { Resolvers } from '../../resolversTypes';
import { GraphQLError } from 'graphql/error';

const resolvers: Resolvers = {
  Query: {
    Users_findUniqueUser: (_parent, args, { prisma }) => {
      return prisma.user.findUnique(args);
    },
    Users_findUniqueUserOrThrow: (_parent, args, { prisma }) => {
      return prisma.user.findUniqueOrThrow(args);
    },
    Users_findFirstUser: (_parent, args, { prisma }) => {
      return prisma.user.findFirst(args);
    },
    Users_findFirstUserOrThrow: (_parent, args, { prisma }) => {
      return prisma.user.findFirstOrThrow(args);
    },
    Users_findManyUser: (_parent, args, { prisma }) => {
      return prisma.user.findMany(args);
    },
    Users_findManyUserCount: (_parent, args, { prisma }) => {
      return prisma.user.count(args);
    },
    Users_aggregateUser: (_parent, args, { prisma }) => {
      return prisma.user.aggregate(args);
    },
    Users_groupByUser: (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await(prisma.user.groupBy(args));
        return result;
      } catch (e) {
        if (e.toString().includes('Argument by is missing')) {
          throw new GraphQLError(`Argument 'by' is missing`, {
            extensions: {
              code: 'BAD_USER_INPUT',
            },
          });
        }
      }
    },
  },
  Mutation: {
    Users_createOneUser: (_parent, args, { prisma }) => {
      return prisma.user.create(args);
    },
    Users_updateOneUser: (_parent, args, { prisma }) => {
      return prisma.user.update(args);
    },
    Users_updateOneUserSaga: (_parent, args, { prisma }) => {
      return prisma.user.update(args);
    },
    Users_deleteOneUser: async (_parent, args, { prisma }) => {
      return prisma.user.delete(args);
    },
    Users_upsertOneUser: async (_parent, args, { prisma }) => {
      return prisma.user.upsert(args);
    },
    Users_deleteManyUser: async (_parent, args, { prisma }) => {
      return prisma.user.deleteMany(args);
    },
    Users_updateManyUser: (_parent, args, { prisma }) => {
      return prisma.user.updateMany(args);
    },
  },
  User: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(
        (e) => e[0] !== '__typename',
      );
      return prisma.user.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
