import gql from 'graphql-tag';

export default gql`
  type CategoriesOnPosts @key(fields: "postId categoryId") {
    post: Post!
    postId: Int!
    category: Category!
    categoryId: Int!
    assignedAt: DateTime!
    assignedBy: String!
  }

  type Query {
    findUniqueCategoriesOnPosts(
      where: CategoriesOnPostsWhereUniqueInput!
    ): CategoriesOnPosts
    findFirstCategoriesOnPosts(
      where: CategoriesOnPostsWhereInput
      orderBy: [CategoriesOnPostsOrderByWithRelationInput]
      cursor: CategoriesOnPostsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CategoriesOnPostsScalarFieldEnum]
    ): CategoriesOnPosts
    findManyCategoriesOnPosts(
      where: CategoriesOnPostsWhereInput
      orderBy: [CategoriesOnPostsOrderByWithRelationInput]
      cursor: CategoriesOnPostsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CategoriesOnPostsScalarFieldEnum]
    ): [CategoriesOnPosts!]
    findManyCategoriesOnPostsCount(
      where: CategoriesOnPostsWhereInput
      orderBy: [CategoriesOnPostsOrderByWithRelationInput]
      cursor: CategoriesOnPostsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CategoriesOnPostsScalarFieldEnum]
    ): Int!
    aggregateCategoriesOnPosts(
      where: CategoriesOnPostsWhereInput
      orderBy: [CategoriesOnPostsOrderByWithRelationInput]
      cursor: CategoriesOnPostsWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCategoriesOnPosts
  }

  type Mutation {
    createOneCategoriesOnPosts(
      data: CategoriesOnPostsCreateInput!
    ): CategoriesOnPosts!
    updateOneCategoriesOnPosts(
      data: CategoriesOnPostsUpdateInput!
      where: CategoriesOnPostsWhereUniqueInput!
    ): CategoriesOnPosts!
    deleteOneCategoriesOnPosts(
      where: CategoriesOnPostsWhereUniqueInput!
    ): CategoriesOnPosts
    upsertOneCategoriesOnPosts(
      where: CategoriesOnPostsWhereUniqueInput!
      create: CategoriesOnPostsCreateInput!
      update: CategoriesOnPostsUpdateInput!
    ): CategoriesOnPosts
    deleteManyCategoriesOnPosts(
      where: CategoriesOnPostsWhereInput
    ): BatchPayload
    updateManyCategoriesOnPosts(
      data: CategoriesOnPostsUpdateManyMutationInput!
      where: CategoriesOnPostsWhereInput
    ): BatchPayload
  }
`;
