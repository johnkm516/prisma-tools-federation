import gql from 'graphql-tag';

export default gql`
  type Product @key(fields: "id") @shareable {
    id: Int!
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
    Users_findFirstProduct(
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
  }

  type Mutation {
    Users_createOneProduct(data: Users_ProductCreateInput!): Product!
    Users_updateOneProduct(
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
    # updateMany for this model cannot exist as this model contains only unique fields or relations.
  }
`;
