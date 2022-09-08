import gql from 'graphql-tag';

export default gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable"]
    )

  type Comment {
    id: Int!
    contain: String!
    post: Post!
    postId: Int!
    author: User
    authorId: Int
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    findUniqueComment(where: CommentWhereUniqueInput!): Comment
    findFirstComment(
      where: CommentWhereInput
      orderBy: [CommentOrderByWithRelationInput]
      cursor: CommentWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CommentScalarFieldEnum]
    ): Comment
    findManyComment(
      where: CommentWhereInput
      orderBy: [CommentOrderByWithRelationInput]
      cursor: CommentWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CommentScalarFieldEnum]
    ): [Comment!]
    findManyCommentCount(
      where: CommentWhereInput
      orderBy: [CommentOrderByWithRelationInput]
      cursor: CommentWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CommentScalarFieldEnum]
    ): Int!
    aggregateComment(
      where: CommentWhereInput
      orderBy: [CommentOrderByWithRelationInput]
      cursor: CommentWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateComment
  }

  type Mutation {
    createOneComment(data: CommentCreateInput!): Comment!
    updateOneComment(
      data: CommentUpdateInput!
      where: CommentWhereUniqueInput!
    ): Comment!
    deleteOneComment(where: CommentWhereUniqueInput!): Comment
    upsertOneComment(
      where: CommentWhereUniqueInput!
      create: CommentCreateInput!
      update: CommentUpdateInput!
    ): Comment
    deleteManyComment(where: CommentWhereInput): BatchPayload
    updateManyComment(
      data: CommentUpdateManyMutationInput!
      where: CommentWhereInput
    ): BatchPayload
  }
`;
