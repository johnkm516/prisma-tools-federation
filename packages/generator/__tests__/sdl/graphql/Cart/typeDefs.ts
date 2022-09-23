import gql from 'graphql-tag';

export default gql`
  type Cart @key(fields: "id") {
    id: Int!
    users(
      where: UserWhereInput
      orderBy: UserOrderByWithRelationInput
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: UserScalarFieldEnum
    ): [User!]!
    _count: CartCountOutputType!
  }

  type Query {
    findUniqueCart(where: CartWhereUniqueInput!): Cart
    findFirstCart(
      where: CartWhereInput
      orderBy: [CartOrderByWithRelationInput]
      cursor: CartWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CartScalarFieldEnum]
    ): Cart
    findManyCart(
      where: CartWhereInput
      orderBy: [CartOrderByWithRelationInput]
      cursor: CartWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CartScalarFieldEnum]
    ): [Cart!]
    findManyCartCount(
      where: CartWhereInput
      orderBy: [CartOrderByWithRelationInput]
      cursor: CartWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CartScalarFieldEnum]
    ): Int!
    aggregateCart(
      where: CartWhereInput
      orderBy: [CartOrderByWithRelationInput]
      cursor: CartWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCart
  }

  type Mutation {
    createOneCart(data: CartCreateInput!): Cart!
    updateOneCart(data: CartUpdateInput!, where: CartWhereUniqueInput!): Cart!
    deleteOneCart(where: CartWhereUniqueInput!): Cart
    upsertOneCart(
      where: CartWhereUniqueInput!
      create: CartCreateInput!
      update: CartUpdateInput!
    ): Cart
    deleteManyCart(where: CartWhereInput): BatchPayload
    updateManyCart(
      data: CartUpdateManyMutationInput!
      where: CartWhereInput
    ): BatchPayload
  }
`;
