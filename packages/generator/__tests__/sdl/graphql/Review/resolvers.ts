import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    findUniqueReview: (_parent, args, { prisma }) => {
      return prisma.review.findUnique(args);
    },
    findFirstReview: (_parent, args, { prisma }) => {
      return prisma.review.findFirst(args);
    },
    findManyReview: (_parent, args, { prisma }) => {
      return prisma.review.findMany(args);
    },
    findManyReviewCount: (_parent, args, { prisma }) => {
      return prisma.review.count(args);
    },
    aggregateReview: (_parent, args, { prisma }) => {
      return prisma.review.aggregate(args);
    },
  },
  Mutation: {
    createOneReview: (_parent, args, { prisma }) => {
      return prisma.review.create(args);
    },
    updateOneReview: (_parent, args, { prisma }) => {
      return prisma.review.update(args);
    },
    deleteOneReview: async (_parent, args, { prisma }) => {
      return prisma.review.delete(args);
    },
    upsertOneReview: async (_parent, args, { prisma }) => {
      return prisma.review.upsert(args);
    },
    deleteManyReview: async (_parent, args, { prisma }) => {
      return prisma.review.deleteMany(args);
    },
    updateManyReview: (_parent, args, { prisma }) => {
      return prisma.review.updateMany(args);
    },
  },
  Review: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(
        (e) => e[0] !== '__typename',
      );
      return prisma.review.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
