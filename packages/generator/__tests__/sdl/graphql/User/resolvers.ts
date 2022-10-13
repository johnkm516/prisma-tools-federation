import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    Users_findUniqueUser: (_parent, args, { prisma }) => {
      return prisma.user.findUnique(args);
    },
    Users_findFirstUser: (_parent, args, { prisma }) => {
      return prisma.user.findFirst(args);
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
  },
  Mutation: {
    Users_createOneUser: (_parent, args, { prisma }) => {
      return prisma.user.create(args);
    },
    Users_updateOneUser: (_parent, args, { prisma }) => {
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
