import { Resolvers } from '../../resolversTypes';
import { GraphQLError } from 'graphql/error';

const resolvers: Resolvers = {
  Query: {
    Users_findUniqueUsersOnTeams: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.findUnique(args);
    },
    Users_findUniqueUsersOnTeamsOrThrow: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.findUniqueOrThrow(args);
    },
    Users_findFirstUsersOnTeams: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.findFirst(args);
    },
    Users_findFirstUsersOnTeamsOrThrow: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.findFirstOrThrow(args);
    },
    Users_findManyUsersOnTeams: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.findMany(args);
    },
    Users_findManyUsersOnTeamsCount: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.count(args);
    },
    Users_aggregateUsersOnTeams: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.aggregate(args);
    },
    Users_groupByUsersOnTeams: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.usersOnTeams.groupBy(args);
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
    Users_createOneUsersOnTeams: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.create(args);
    },
    Users_updateOneUsersOnTeams: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.update(args);
    },
    Users_deleteOneUsersOnTeams: async (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.delete(args);
    },
    Users_upsertOneUsersOnTeams: async (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.upsert(args);
    },
    Users_deleteManyUsersOnTeams: async (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.deleteMany(args);
    },
    Users_updateManyUsersOnTeams: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.updateMany(args);
    },
  },
  UsersOnTeams: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(
        (e) => e[0] !== '__typename',
      );
      return prisma.usersonteams.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
