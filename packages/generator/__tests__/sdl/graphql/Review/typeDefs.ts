import gql from 'graphql-tag';

export default gql`
  type Review @key(fields: "id") @key(fields: "product_id") {
    id: Int!
    product: Product!
    product_id: Int!
    score: Int!
  }

  type Query {
    findUniqueReview(where: ReviewWhereUniqueInput!): Review
    findFirstReview(
      where: ReviewWhereInput
      orderBy: [ReviewOrderByWithRelationInput]
      cursor: ReviewWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ReviewScalarFieldEnum]
    ): Review
    findManyReview(
      where: ReviewWhereInput
      orderBy: [ReviewOrderByWithRelationInput]
      cursor: ReviewWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ReviewScalarFieldEnum]
    ): [Review!]
    findManyReviewCount(
      where: ReviewWhereInput
      orderBy: [ReviewOrderByWithRelationInput]
      cursor: ReviewWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ReviewScalarFieldEnum]
    ): Int!
    aggregateReview(
      where: ReviewWhereInput
      orderBy: [ReviewOrderByWithRelationInput]
      cursor: ReviewWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateReview
  }

  type Mutation {
    createOneReview(data: ReviewCreateInput!): Review!
    updateOneReview(
      data: ReviewUpdateInput!
      where: ReviewWhereUniqueInput!
    ): Review!
    deleteOneReview(where: ReviewWhereUniqueInput!): Review
    upsertOneReview(
      where: ReviewWhereUniqueInput!
      create: ReviewCreateInput!
      update: ReviewUpdateInput!
    ): Review
    deleteManyReview(where: ReviewWhereInput): BatchPayload
    updateManyReview(
      data: ReviewUpdateManyMutationInput!
      where: ReviewWhereInput
    ): BatchPayload
  }
`;
