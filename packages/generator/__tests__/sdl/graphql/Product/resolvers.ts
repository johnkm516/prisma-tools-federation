import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    findUniqueProduct: (_parent, args, { prisma }) => {
      return prisma.product.findUnique(args);
    },
    findFirstProduct: (_parent, args, { prisma }) => {
      return prisma.product.findFirst(args);
    },
    findManyProduct: (_parent, args, { prisma }) => {
      return prisma.product.findMany(args);
    },
    findManyProductCount: (_parent, args, { prisma }) => {
      return prisma.product.count(args);
    },
    aggregateProduct: (_parent, args, { prisma }) => {
      return prisma.product.aggregate(args);
    },
  },
  Mutation: {
    createOneProduct: (_parent, args, { prisma }) => {
      return prisma.product.create(args);
    },
    updateOneProduct: (_parent, args, { prisma }) => {
      return prisma.product.update(args);
    },
    deleteOneProduct: async (_parent, args, { prisma }) => {
      return prisma.product.delete(args);
    },
    upsertOneProduct: async (_parent, args, { prisma }) => {
      return prisma.product.upsert(args);
    },
    deleteManyProduct: async (_parent, args, { prisma }) => {
      return prisma.product.deleteMany(args);
    },
    //updateMany for this model cannot exist as this model contains only unique fields or relations.
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
