import gql from 'graphql-tag';

export default gql`
  type Post @key(fields: "id") @key(fields: "user_id") {
    id: Int!
    user: User!
    user_id: Int!
    title: String!
    categories(
      where: CategoriesOnPostsWhereInput
      orderBy: CategoriesOnPostsOrderByWithRelationInput
      cursor: CategoriesOnPostsWhereUniqueInput
      take: Int
      skip: Int
      distinct: CategoriesOnPostsScalarFieldEnum
    ): [CategoriesOnPosts!]!
    _count: PostCountOutputType!
  }

  type Query {
    findUniquePost(where: PostWhereUniqueInput!): Post
    findFirstPost(
      where: PostWhereInput
      orderBy: [PostOrderByWithRelationInput]
      cursor: PostWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PostScalarFieldEnum]
    ): Post
    findManyPost(
      where: PostWhereInput
      orderBy: [PostOrderByWithRelationInput]
      cursor: PostWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PostScalarFieldEnum]
    ): [Post!]
    findManyPostCount(
      where: PostWhereInput
      orderBy: [PostOrderByWithRelationInput]
      cursor: PostWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PostScalarFieldEnum]
    ): Int!
    aggregatePost(
      where: PostWhereInput
      orderBy: [PostOrderByWithRelationInput]
      cursor: PostWhereUniqueInput
      take: Int
      skip: Int
    ): AggregatePost
  }

  type Mutation {
    createOnePost(data: PostCreateInput!): Post!
    updateOnePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post!
    deleteOnePost(where: PostWhereUniqueInput!): Post
    upsertOnePost(
      where: PostWhereUniqueInput!
      create: PostCreateInput!
      update: PostUpdateInput!
    ): Post
    deleteManyPost(where: PostWhereInput): BatchPayload
    updateManyPost(
      data: PostUpdateManyMutationInput!
      where: PostWhereInput
    ): BatchPayload
  }
`;
