import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    findUniqueApple: (_parent, args, { prisma }) => {
      return prisma.apple.findUnique(args);
    },
    findFirstApple: (_parent, args, { prisma }) => {
      return prisma.apple.findFirst(args);
    },
    findManyApple: (_parent, args, { prisma }) => {
      return prisma.apple.findMany(args);
    },
    findManyAppleCount: (_parent, args, { prisma }) => {
      return prisma.apple.count(args);
    },
    aggregateApple: (_parent, args, { prisma }) => {
      return prisma.apple.aggregate(args);
    },
  },
  Mutation: {
    createOneApple: (_parent, args, { prisma }) => {
      return prisma.apple.create(args);
    },
    updateOneApple: (_parent, args, { prisma }) => {
      return prisma.apple.update(args);
    },
    deleteOneApple: async (_parent, args, { prisma }) => {
      return prisma.apple.delete(args);
    },
    upsertOneApple: async (_parent, args, { prisma }) => {
      return prisma.apple.upsert(args);
    },
    deleteManyApple: async (_parent, args, { prisma }) => {
      return prisma.apple.deleteMany(args);
    },
    updateManyApple: (_parent, args, { prisma }) => {
      return prisma.apple.updateMany(args);
    },
  },
  Apple: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(
        (e) => e[0] !== '__typename',
      );
      return prisma.apple.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
