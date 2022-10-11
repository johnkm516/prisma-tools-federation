import gql from 'graphql-tag';

export default gql`
  type Category @key(fields: "id") {
    id: Int!
    name: String!
    posts(
      where: CategoriesOnPostsWhereInput
      orderBy: CategoriesOnPostsOrderByWithRelationInput
      cursor: CategoriesOnPostsWhereUniqueInput
      take: Int
      skip: Int
      distinct: CategoriesOnPostsScalarFieldEnum
    ): [CategoriesOnPosts!]!
    _count: CategoryCountOutputType!
  }

  type Query {
    findUniqueCategory(where: CategoryWhereUniqueInput!): Category
    findFirstCategory(
      where: CategoryWhereInput
      orderBy: [CategoryOrderByWithRelationInput]
      cursor: CategoryWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CategoryScalarFieldEnum]
    ): Category
    findManyCategory(
      where: CategoryWhereInput
      orderBy: [CategoryOrderByWithRelationInput]
      cursor: CategoryWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CategoryScalarFieldEnum]
    ): [Category!]
    findManyCategoryCount(
      where: CategoryWhereInput
      orderBy: [CategoryOrderByWithRelationInput]
      cursor: CategoryWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CategoryScalarFieldEnum]
    ): Int!
    aggregateCategory(
      where: CategoryWhereInput
      orderBy: [CategoryOrderByWithRelationInput]
      cursor: CategoryWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCategory
  }

  type Mutation {
    createOneCategory(data: CategoryCreateInput!): Category!
    updateOneCategory(
      data: CategoryUpdateInput!
      where: CategoryWhereUniqueInput!
    ): Category!
    deleteOneCategory(where: CategoryWhereUniqueInput!): Category
    upsertOneCategory(
      where: CategoryWhereUniqueInput!
      create: CategoryCreateInput!
      update: CategoryUpdateInput!
    ): Category
    deleteManyCategory(where: CategoryWhereInput): BatchPayload
    updateManyCategory(
      data: CategoryUpdateManyMutationInput!
      where: CategoryWhereInput
    ): BatchPayload
  }
`;
