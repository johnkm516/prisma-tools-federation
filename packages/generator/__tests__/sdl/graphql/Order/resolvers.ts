import { Resolvers } from '../../resolversTypes';
import { GraphQLError } from 'graphql/error';

const resolvers: Resolvers = {
  Query: {
    Users_findUniqueOrder: (_parent, args, { prisma }) => {
      return prisma.order.findUnique(args);
    },
    Users_findUniqueOrderOrThrow: (_parent, args, { prisma }) => {
      return prisma.order.findUniqueOrThrow(args);
    },
    Users_findFirstOrder: (_parent, args, { prisma }) => {
      return prisma.order.findFirst(args);
    },
    Users_findFirstOrderOrThrow: (_parent, args, { prisma }) => {
      return prisma.order.findFirstOrThrow(args);
    },
    Users_findManyOrder: (_parent, args, { prisma }) => {
      return prisma.order.findMany(args);
    },
    Users_findManyOrderCount: (_parent, args, { prisma }) => {
      return prisma.order.count(args);
    },
    Users_aggregateOrder: (_parent, args, { prisma }) => {
      return prisma.order.aggregate(args);
    },
    Users_groupByOrder: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.order.groupBy(args);
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
    Users_createOneOrder: (_parent, args, { prisma }) => {
      return prisma.order.create(args);
    },
    Users_updateOneOrder: (_parent, args, { prisma }) => {
      return prisma.order.update(args);
    },
    Users_deleteOneOrder: async (_parent, args, { prisma }) => {
      return prisma.order.delete(args);
    },
    Users_upsertOneOrder: async (_parent, args, { prisma }) => {
      return prisma.order.upsert(args);
    },
    Users_deleteManyOrder: async (_parent, args, { prisma }) => {
      return prisma.order.deleteMany(args);
    },
    Users_updateManyOrder: (_parent, args, { prisma }) => {
      return prisma.order.updateMany(args);
    },
  },
  Order: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(
        (e) => e[0] !== '__typename',
      );
      return prisma.order.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
