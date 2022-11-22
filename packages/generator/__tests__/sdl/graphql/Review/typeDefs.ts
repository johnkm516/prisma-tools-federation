import gql from 'graphql-tag';

export default gql`
  type Review @key(fields: "id") @key(fields: "product_id") @shareable {
    id: Int!
    product: Product!
    product_id: Int!
    score: Int!
  }

  type Query {
    Users_findUniqueReview(where: Users_ReviewWhereUniqueInput!): Review
    Users_findUniqueReviewOrThrow(where: Users_ReviewWhereUniqueInput!): Review
    Users_findFirstReview(
      where: Users_ReviewWhereInput
      orderBy: [Users_ReviewOrderByWithRelationInput]
      cursor: Users_ReviewWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ReviewScalarFieldEnum]
    ): Review
    Users_findFirstReviewOrThrow(
      where: Users_ReviewWhereInput
      orderBy: [Users_ReviewOrderByWithRelationInput]
      cursor: Users_ReviewWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ReviewScalarFieldEnum]
    ): Review
    Users_findManyReview(
      where: Users_ReviewWhereInput
      orderBy: [Users_ReviewOrderByWithRelationInput]
      cursor: Users_ReviewWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ReviewScalarFieldEnum]
    ): [Review!]
    Users_findManyReviewCount(
      where: Users_ReviewWhereInput
      orderBy: [Users_ReviewOrderByWithRelationInput]
      cursor: Users_ReviewWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ReviewScalarFieldEnum]
    ): Int!
    Users_aggregateReview(
      where: Users_ReviewWhereInput
      orderBy: [Users_ReviewOrderByWithRelationInput]
      cursor: Users_ReviewWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateReview
    Users_groupByReview(
      where: Users_ReviewWhereInput
      orderBy: [Users_ReviewOrderByWithAggregationInput]
      by: [ReviewScalarFieldEnum!]
      having: Users_ReviewScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [ReviewGroupByOutputType]
  }

  type Mutation {
    Users_createOneReview(data: Users_ReviewCreateInput!): Review!
    Users_updateOneReview(
      data: Users_ReviewUpdateInput!
      where: Users_ReviewWhereUniqueInput!
    ): Review!
    Users_updateOneReviewSaga(
      data: Users_ReviewUpdateInput!
      where: Users_ReviewWhereUniqueInput!
    ): Review!
    Users_deleteOneReview(where: Users_ReviewWhereUniqueInput!): Review
    Users_upsertOneReview(
      where: Users_ReviewWhereUniqueInput!
      create: Users_ReviewCreateInput!
      update: Users_ReviewUpdateInput!
    ): Review
    Users_deleteManyReview(where: Users_ReviewWhereInput): BatchPayload
    Users_updateManyReview(
      data: Users_ReviewUpdateManyMutationInput!
      where: Users_ReviewWhereInput
    ): BatchPayload
  }
`;
