import { Resolvers } from '../../resolversTypes';
import { GraphQLError } from 'graphql/error';

const resolvers: Resolvers = {
  Query: {
    Users_findUniqueCalendarEventsOnCalendars: (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.findUnique(args);
    },
    Users_findUniqueCalendarEventsOnCalendarsOrThrow: (
      _parent,
      args,
      { prisma },
    ) => {
      return prisma.calendarEventsOnCalendars.findUniqueOrThrow(args);
    },
    Users_findFirstCalendarEventsOnCalendars: (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.findFirst(args);
    },
    Users_findFirstCalendarEventsOnCalendarsOrThrow: (
      _parent,
      args,
      { prisma },
    ) => {
      return prisma.calendarEventsOnCalendars.findFirstOrThrow(args);
    },
    Users_findManyCalendarEventsOnCalendars: (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.findMany(args);
    },
    Users_findManyCalendarEventsOnCalendarsCount: (
      _parent,
      args,
      { prisma },
    ) => {
      return prisma.calendarEventsOnCalendars.count(args);
    },
    Users_aggregateCalendarEventsOnCalendars: (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.aggregate(args);
    },
    Users_groupByCalendarEventsOnCalendars: async (
      _parent,
      args,
      { prisma },
    ) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.calendarEventsOnCalendars.groupBy(args);
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
    Users_createOneCalendarEventsOnCalendars: (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.create(args);
    },
    Users_updateOneCalendarEventsOnCalendars: (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.update(args);
    },
    Users_deleteOneCalendarEventsOnCalendars: async (
      _parent,
      args,
      { prisma },
    ) => {
      return prisma.calendarEventsOnCalendars.delete(args);
    },
    Users_upsertOneCalendarEventsOnCalendars: async (
      _parent,
      args,
      { prisma },
    ) => {
      return prisma.calendarEventsOnCalendars.upsert(args);
    },
    Users_deleteManyCalendarEventsOnCalendars: async (
      _parent,
      args,
      { prisma },
    ) => {
      return prisma.calendarEventsOnCalendars.deleteMany(args);
    },
    //updateMany for this model cannot exist as this model contains only unique fields or relations.
  },
  CalendarEventsOnCalendars: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(
        (e) => e[0] !== '__typename',
      );
      return prisma.calendareventsoncalendars.findUnique({
        where: { [field]: value },
      });
    },
  },
};
export default resolvers;
