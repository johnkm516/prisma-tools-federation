import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    findUniqueGroup: (_parent, args, { prisma }) => {
      return prisma.group.findUnique(args);
    },
    findFirstGroup: (_parent, args, { prisma }) => {
      return prisma.group.findFirst(args);
    },
    findManyGroup: (_parent, args, { prisma }) => {
      return prisma.group.findMany(args);
    },
    findManyGroupCount: (_parent, args, { prisma }) => {
      return prisma.group.count(args);
    },
    aggregateGroup: (_parent, args, { prisma }) => {
      return prisma.group.aggregate(args);
    },
  },
  Mutation: {
    createOneGroup: (_parent, args, { prisma }) => {
      return prisma.group.create(args);
    },
    updateOneGroup: (_parent, args, { prisma }) => {
      return prisma.group.update(args);
    },
    deleteOneGroup: async (_parent, args, { prisma }) => {
      return prisma.group.delete(args);
    },
    upsertOneGroup: async (_parent, args, { prisma }) => {
      return prisma.group.upsert(args);
    },
    deleteManyGroup: async (_parent, args, { prisma }) => {
      return prisma.group.deleteMany(args);
    },
    updateManyGroup: (_parent, args, { prisma }) => {
      return prisma.group.updateMany(args);
    },
  },
  Group: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(
        (e) => e[0] !== '__typename',
      );
      return prisma.group.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
