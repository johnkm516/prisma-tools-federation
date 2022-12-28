import { Resolvers } from '../../resolversTypes';
import { GraphQLError } from 'graphql/error';

const resolvers: Resolvers = {
  Query: {
    Users_findUniqueTeam: (_parent, args, { prisma }) => {
      return prisma.team.findUnique(args);
    },
    Users_findUniqueTeamOrThrow: (_parent, args, { prisma }) => {
      return prisma.team.findUniqueOrThrow(args);
    },
    Users_findFirstTeam: (_parent, args, { prisma }) => {
      return prisma.team.findFirst(args);
    },
    Users_findFirstTeamOrThrow: (_parent, args, { prisma }) => {
      return prisma.team.findFirstOrThrow(args);
    },
    Users_findManyTeam: (_parent, args, { prisma }) => {
      return prisma.team.findMany(args);
    },
    Users_findManyTeamCount: (_parent, args, { prisma }) => {
      return prisma.team.count(args);
    },
    Users_aggregateTeam: (_parent, args, { prisma }) => {
      return prisma.team.aggregate(args);
    },
    Users_groupByTeam: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.team.groupBy(args);
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
    Users_createOneTeam: (_parent, args, { prisma }) => {
      return prisma.team.create(args);
    },
    Users_updateOneTeam: (_parent, args, { prisma }) => {
      return prisma.team.update(args);
    },
    Users_deleteOneTeam: async (_parent, args, { prisma }) => {
      return prisma.team.delete(args);
    },
    Users_upsertOneTeam: async (_parent, args, { prisma }) => {
      return prisma.team.upsert(args);
    },
    Users_deleteManyTeam: async (_parent, args, { prisma }) => {
      return prisma.team.deleteMany(args);
    },
    //updateMany for this model cannot exist as this model contains only unique fields or relations.
  },
  Team: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(
        (e) => e[0] !== '__typename',
      );
      return prisma.team.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
