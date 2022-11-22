import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    Users_findUniqueProduct: (_parent, args, { prisma }) => {
      return prisma.product.findUnique(args);
    },
    Users_findUniqueProductOrThrow: (_parent, args, { prisma }) => {
      return prisma.product.findUniqueOrThrow(args);
    },
    Users_findFirstProduct: (_parent, args, { prisma }) => {
      return prisma.product.findFirst(args);
    },
    Users_findFirstProductOrThrow: (_parent, args, { prisma }) => {
      return prisma.product.findFirstOrThrow(args);
    },
    Users_findManyProduct: (_parent, args, { prisma }) => {
      return prisma.product.findMany(args);
    },
    Users_findManyProductCount: (_parent, args, { prisma }) => {
      return prisma.product.count(args);
    },
    Users_aggregateProduct: (_parent, args, { prisma }) => {
      return prisma.product.aggregate(args);
    },
    Users_groupByProduct: (_parent, args, { prisma }) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      return prisma.product.groupBy(args);
    },
  },
  Mutation: {
    Users_createOneProduct: (_parent, args, { prisma }) => {
      return prisma.product.create(args);
    },
    Users_updateOneProduct: (_parent, args, { prisma }) => {
      return prisma.product.update(args);
    },
    Users_updateOneProductSaga: (_parent, args, { prisma }) => {
      return prisma.product.update(args);
    },
    Users_deleteOneProduct: async (_parent, args, { prisma }) => {
      return prisma.product.delete(args);
    },
    Users_upsertOneProduct: async (_parent, args, { prisma }) => {
      return prisma.product.upsert(args);
    },
    Users_deleteManyProduct: async (_parent, args, { prisma }) => {
      return prisma.product.deleteMany(args);
    },
    Users_updateManyProduct: (_parent, args, { prisma }) => {
      return prisma.product.updateMany(args);
    },
  },
  Product: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(
        (e) => e[0] !== '__typename',
      );
      return prisma.product.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
