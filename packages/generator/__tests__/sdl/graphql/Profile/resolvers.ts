import { Resolvers } from '../../resolversTypes';
import { GraphQLError } from 'graphql/error';

const resolvers: Resolvers = {
  Query: {
    Users_findUniqueProfile: (_parent, args, { prisma }) => {
      return prisma.profile.findUnique(args);
    },
    Users_findUniqueProfileOrThrow: (_parent, args, { prisma }) => {
      return prisma.profile.findUniqueOrThrow(args);
    },
    Users_findFirstProfile: (_parent, args, { prisma }) => {
      return prisma.profile.findFirst(args);
    },
    Users_findFirstProfileOrThrow: (_parent, args, { prisma }) => {
      return prisma.profile.findFirstOrThrow(args);
    },
    Users_findManyProfile: (_parent, args, { prisma }) => {
      return prisma.profile.findMany(args);
    },
    Users_findManyProfileCount: (_parent, args, { prisma }) => {
      return prisma.profile.count(args);
    },
    Users_aggregateProfile: (_parent, args, { prisma }) => {
      return prisma.profile.aggregate(args);
    },
    Users_groupByProfile: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.profile.groupBy(args);
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
    Users_createOneProfile: (_parent, args, { prisma }) => {
      return prisma.profile.create(args);
    },
    Users_updateOneProfile: (_parent, args, { prisma }) => {
      return prisma.profile.update(args);
    },
    Users_deleteOneProfile: async (_parent, args, { prisma }) => {
      return prisma.profile.delete(args);
    },
    Users_upsertOneProfile: async (_parent, args, { prisma }) => {
      return prisma.profile.upsert(args);
    },
    Users_deleteManyProfile: async (_parent, args, { prisma }) => {
      return prisma.profile.deleteMany(args);
    },
    Users_updateManyProfile: (_parent, args, { prisma }) => {
      return prisma.profile.updateMany(args);
    },
  },
  Profile: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(
        (e) => e[0] !== '__typename',
      );
      return prisma.profile.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
