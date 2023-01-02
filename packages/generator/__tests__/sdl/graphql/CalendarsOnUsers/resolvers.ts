import { Resolvers } from '../../resolversTypes';
import { GraphQLError } from 'graphql/error';

const resolvers: Resolvers = {
  Query: {
    Users_findUniqueCalendarsOnUsers: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.findUnique(args);
    },
    Users_findUniqueCalendarsOnUsersOrThrow: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.findUniqueOrThrow(args);
    },
    Users_findFirstCalendarsOnUsers: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.findFirst(args);
    },
    Users_findFirstCalendarsOnUsersOrThrow: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.findFirstOrThrow(args);
    },
    Users_findManyCalendarsOnUsers: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.findMany(args);
    },
    Users_findManyCalendarsOnUsersCount: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.count(args);
    },
    Users_aggregateCalendarsOnUsers: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.aggregate(args);
    },
    Users_groupByCalendarsOnUsers: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.calendarsOnUsers.groupBy(args);
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
    Users_createOneCalendarsOnUsers: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.create(args);
    },
    Users_updateOneCalendarsOnUsers: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.update(args);
    },
    Users_deleteOneCalendarsOnUsers: async (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.delete(args);
    },
    Users_upsertOneCalendarsOnUsers: async (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.upsert(args);
    },
    Users_deleteManyCalendarsOnUsers: async (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.deleteMany(args);
    },
    //updateMany for this model cannot exist as this model contains only unique fields or relations.
  },
  CalendarsOnUsers: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(
        (e) => e[0] !== '__typename',
      );
      return prisma.calendarsonusers.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
