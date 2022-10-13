import gql from 'graphql-tag';

export default gql`
  type Review @key(fields: "id") @key(fields: "product_id") @shareable {
    id: Int!
    product: Product!
    product_id: Int!
    score: Int!
  }

  type Query {
    Users_findUniqueReview(where: ReviewWhereUniqueInput!): Review
    Users_findFirstReview(
      where: ReviewWhereInput
      orderBy: [ReviewOrderByWithRelationInput]
      cursor: ReviewWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ReviewScalarFieldEnum]
    ): Review
    Users_findManyReview(
      where: ReviewWhereInput
      orderBy: [ReviewOrderByWithRelationInput]
      cursor: ReviewWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ReviewScalarFieldEnum]
    ): [Review!]
    Users_findManyReviewCount(
      where: ReviewWhereInput
      orderBy: [ReviewOrderByWithRelationInput]
      cursor: ReviewWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ReviewScalarFieldEnum]
    ): Int!
    Users_aggregateReview(
      where: ReviewWhereInput
      orderBy: [ReviewOrderByWithRelationInput]
      cursor: ReviewWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateReview
  }

  type Mutation {
    Users_createOneReview(data: ReviewCreateInput!): Review!
    Users_updateOneReview(
      data: ReviewUpdateInput!
      where: ReviewWhereUniqueInput!
    ): Review!
    Users_deleteOneReview(where: ReviewWhereUniqueInput!): Review
    Users_upsertOneReview(
      where: ReviewWhereUniqueInput!
      create: ReviewCreateInput!
      update: ReviewUpdateInput!
    ): Review
    Users_deleteManyReview(where: ReviewWhereInput): BatchPayload
    Users_updateManyReview(
      data: ReviewUpdateManyMutationInput!
      where: ReviewWhereInput
    ): BatchPayload
  }
`;
