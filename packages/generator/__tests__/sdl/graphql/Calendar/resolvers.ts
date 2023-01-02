import { Resolvers } from '../../resolversTypes';
import { GraphQLError } from 'graphql/error';

const resolvers: Resolvers = {
  Query: {
    Users_findUniqueCalendar: (_parent, args, { prisma }) => {
      return prisma.calendar.findUnique(args);
    },
    Users_findUniqueCalendarOrThrow: (_parent, args, { prisma }) => {
      return prisma.calendar.findUniqueOrThrow(args);
    },
    Users_findFirstCalendar: (_parent, args, { prisma }) => {
      return prisma.calendar.findFirst(args);
    },
    Users_findFirstCalendarOrThrow: (_parent, args, { prisma }) => {
      return prisma.calendar.findFirstOrThrow(args);
    },
    Users_findManyCalendar: (_parent, args, { prisma }) => {
      return prisma.calendar.findMany(args);
    },
    Users_findManyCalendarCount: (_parent, args, { prisma }) => {
      return prisma.calendar.count(args);
    },
    Users_aggregateCalendar: (_parent, args, { prisma }) => {
      return prisma.calendar.aggregate(args);
    },
    Users_groupByCalendar: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.calendar.groupBy(args);
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
    Users_createOneCalendar: (_parent, args, { prisma }) => {
      return prisma.calendar.create(args);
    },
    Users_updateOneCalendar: (_parent, args, { prisma }) => {
      return prisma.calendar.update(args);
    },
    Users_deleteOneCalendar: async (_parent, args, { prisma }) => {
      return prisma.calendar.delete(args);
    },
    Users_upsertOneCalendar: async (_parent, args, { prisma }) => {
      return prisma.calendar.upsert(args);
    },
    Users_deleteManyCalendar: async (_parent, args, { prisma }) => {
      return prisma.calendar.deleteMany(args);
    },
    Users_updateManyCalendar: (_parent, args, { prisma }) => {
      return prisma.calendar.updateMany(args);
    },
  },
  Calendar: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(
        (e) => e[0] !== '__typename',
      );
      return prisma.calendar.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
