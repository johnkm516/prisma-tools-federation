import gql from 'graphql-tag';

export default gql`
  type Product @key(fields: "id") @shareable {
    id: Int!
    price: Float!
    review(
      where: Users_ReviewWhereInput
      orderBy: Users_ReviewOrderByWithRelationInput
      cursor: Users_ReviewWhereUniqueInput
      take: Int
      skip: Int
      distinct: ReviewScalarFieldEnum
    ): [Review!]!
    _count: ProductCountOutputType!
  }

  type Query {
    Users_findUniqueProduct(where: Users_ProductWhereUniqueInput!): Product
    Users_findUniqueProductOrThrow(
      where: Users_ProductWhereUniqueInput!
    ): Product
    Users_findFirstProduct(
      where: Users_ProductWhereInput
      orderBy: [Users_ProductOrderByWithRelationInput]
      cursor: Users_ProductWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProductScalarFieldEnum]
    ): Product
    Users_findFirstProductOrThrow(
      where: Users_ProductWhereInput
      orderBy: [Users_ProductOrderByWithRelationInput]
      cursor: Users_ProductWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProductScalarFieldEnum]
    ): Product
    Users_findManyProduct(
      where: Users_ProductWhereInput
      orderBy: [Users_ProductOrderByWithRelationInput]
      cursor: Users_ProductWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProductScalarFieldEnum]
    ): [Product!]
    Users_findManyProductCount(
      where: Users_ProductWhereInput
      orderBy: [Users_ProductOrderByWithRelationInput]
      cursor: Users_ProductWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProductScalarFieldEnum]
    ): Int!
    Users_aggregateProduct(
      where: Users_ProductWhereInput
      orderBy: [Users_ProductOrderByWithRelationInput]
      cursor: Users_ProductWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateProduct
    Users_groupByProduct(
      where: Users_ProductWhereInput
      orderBy: [Users_ProductOrderByWithAggregationInput]
      by: [ProductScalarFieldEnum!]
      having: Users_ProductScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): groupByProduct
  }

  type Mutation {
    Users_createOneProduct(data: Users_ProductCreateInput!): Product!
    Users_updateOneProduct(
      data: Users_ProductUpdateInput!
      where: Users_ProductWhereUniqueInput!
    ): Product!
    Users_updateOneProductSaga(
      data: Users_ProductUpdateInput!
      where: Users_ProductWhereUniqueInput!
    ): Product!
    Users_deleteOneProduct(where: Users_ProductWhereUniqueInput!): Product
    Users_upsertOneProduct(
      where: Users_ProductWhereUniqueInput!
      create: Users_ProductCreateInput!
      update: Users_ProductUpdateInput!
    ): Product
    Users_deleteManyProduct(where: Users_ProductWhereInput): BatchPayload
    Users_updateManyProduct(
      data: Users_ProductUpdateManyMutationInput!
      where: Users_ProductWhereInput
    ): BatchPayload
  }
`;
