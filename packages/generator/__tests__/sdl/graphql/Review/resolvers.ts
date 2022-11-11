import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    Users_findUniqueReview: (_parent, args, { prisma }) => {
      return prisma.review.findUnique(args);
    },
    Users_findUniqueReviewOrThrow: (_parent, args, { prisma }) => {
      return prisma.review.findUniqueOrThrow(args);
    },
    Users_findFirstReview: (_parent, args, { prisma }) => {
      return prisma.review.findFirst(args);
    },
    Users_findFirstReviewOrThrow: (_parent, args, { prisma }) => {
      return prisma.review.findFirstOrThrow(args);
    },
    Users_findManyReview: (_parent, args, { prisma }) => {
      return prisma.review.findMany(args);
    },
    Users_findManyReviewCount: (_parent, args, { prisma }) => {
      return prisma.review.count(args);
    },
    Users_aggregateReview: (_parent, args, { prisma }) => {
      return prisma.review.aggregate(args);
    },
  },
  Mutation: {
    Users_createOneReview: (_parent, args, { prisma }) => {
      return prisma.review.create(args);
    },
    Users_updateOneReview: (_parent, args, { prisma }) => {
      return prisma.review.update(args);
    },
    Users_deleteOneReview: async (_parent, args, { prisma }) => {
      return prisma.review.delete(args);
    },
    Users_upsertOneReview: async (_parent, args, { prisma }) => {
      return prisma.review.upsert(args);
    },
    Users_deleteManyReview: async (_parent, args, { prisma }) => {
      return prisma.review.deleteMany(args);
    },
    Users_updateManyReview: (_parent, args, { prisma }) => {
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
