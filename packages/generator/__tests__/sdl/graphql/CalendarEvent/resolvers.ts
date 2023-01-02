import { Resolvers } from '../../resolversTypes';
import { GraphQLError } from 'graphql/error';

const resolvers: Resolvers = {
  Query: {
    Users_findUniqueCalendarEvent: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.findUnique(args);
    },
    Users_findUniqueCalendarEventOrThrow: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.findUniqueOrThrow(args);
    },
    Users_findFirstCalendarEvent: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.findFirst(args);
    },
    Users_findFirstCalendarEventOrThrow: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.findFirstOrThrow(args);
    },
    Users_findManyCalendarEvent: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.findMany(args);
    },
    Users_findManyCalendarEventCount: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.count(args);
    },
    Users_aggregateCalendarEvent: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.aggregate(args);
    },
    Users_groupByCalendarEvent: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.calendarEvent.groupBy(args);
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
    Users_createOneCalendarEvent: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.create(args);
    },
    Users_updateOneCalendarEvent: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.update(args);
    },
    Users_deleteOneCalendarEvent: async (_parent, args, { prisma }) => {
      return prisma.calendarEvent.delete(args);
    },
    Users_upsertOneCalendarEvent: async (_parent, args, { prisma }) => {
      return prisma.calendarEvent.upsert(args);
    },
    Users_deleteManyCalendarEvent: async (_parent, args, { prisma }) => {
      return prisma.calendarEvent.deleteMany(args);
    },
    Users_updateManyCalendarEvent: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.updateMany(args);
    },
  },
  CalendarEvent: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(
        (e) => e[0] !== '__typename',
      );
      return prisma.calendarevent.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
