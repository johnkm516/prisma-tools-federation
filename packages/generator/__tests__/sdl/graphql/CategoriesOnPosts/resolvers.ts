import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    findUniqueCategoriesOnPosts: (_parent, args, { prisma }) => {
      return prisma.categoriesOnPosts.findUnique(args);
    },
    findFirstCategoriesOnPosts: (_parent, args, { prisma }) => {
      return prisma.categoriesOnPosts.findFirst(args);
    },
    findManyCategoriesOnPosts: (_parent, args, { prisma }) => {
      return prisma.categoriesOnPosts.findMany(args);
    },
    findManyCategoriesOnPostsCount: (_parent, args, { prisma }) => {
      return prisma.categoriesOnPosts.count(args);
    },
    aggregateCategoriesOnPosts: (_parent, args, { prisma }) => {
      return prisma.categoriesOnPosts.aggregate(args);
    },
  },
  Mutation: {
    createOneCategoriesOnPosts: (_parent, args, { prisma }) => {
      return prisma.categoriesOnPosts.create(args);
    },
    updateOneCategoriesOnPosts: (_parent, args, { prisma }) => {
      return prisma.categoriesOnPosts.update(args);
    },
    deleteOneCategoriesOnPosts: async (_parent, args, { prisma }) => {
      return prisma.categoriesOnPosts.delete(args);
    },
    upsertOneCategoriesOnPosts: async (_parent, args, { prisma }) => {
      return prisma.categoriesOnPosts.upsert(args);
    },
    deleteManyCategoriesOnPosts: async (_parent, args, { prisma }) => {
      return prisma.categoriesOnPosts.deleteMany(args);
    },
    updateManyCategoriesOnPosts: (_parent, args, { prisma }) => {
      return prisma.categoriesOnPosts.updateMany(args);
    },
  },
  CategoriesOnPosts: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(
        (e) => e[0] !== '__typename',
      );
      return prisma.categoriesonposts.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
