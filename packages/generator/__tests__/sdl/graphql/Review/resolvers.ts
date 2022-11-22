import { Resolvers } from '../../resolversTypes';
import { GraphQLError } from 'graphql/error';

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
    Users_groupByReview: (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await(prisma.review.groupBy(args));
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
    Users_createOneReview: (_parent, args, { prisma }) => {
      return prisma.review.create(args);
    },
    Users_updateOneReview: (_parent, args, { prisma }) => {
      return prisma.review.update(args);
    },
    Users_updateOneReviewSaga: (_parent, args, { prisma }) => {
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
