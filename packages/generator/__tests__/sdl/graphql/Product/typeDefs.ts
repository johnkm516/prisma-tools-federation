import gql from 'graphql-tag';

export default gql`
  type Product @key(fields: "id") @shareable {
    id: Int!
    review(
      where: ReviewWhereInput
      orderBy: ReviewOrderByWithRelationInput
      cursor: ReviewWhereUniqueInput
      take: Int
      skip: Int
      distinct: ReviewScalarFieldEnum
    ): [Review!]!
    _count: ProductCountOutputType!
  }

  type Query {
    Users_findUniqueProduct(where: ProductWhereUniqueInput!): Product
    Users_findFirstProduct(
      where: ProductWhereInput
      orderBy: [ProductOrderByWithRelationInput]
      cursor: ProductWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProductScalarFieldEnum]
    ): Product
    Users_findManyProduct(
      where: ProductWhereInput
      orderBy: [ProductOrderByWithRelationInput]
      cursor: ProductWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProductScalarFieldEnum]
    ): [Product!]
    Users_findManyProductCount(
      where: ProductWhereInput
      orderBy: [ProductOrderByWithRelationInput]
      cursor: ProductWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProductScalarFieldEnum]
    ): Int!
    Users_aggregateProduct(
      where: ProductWhereInput
      orderBy: [ProductOrderByWithRelationInput]
      cursor: ProductWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateProduct
  }

  type Mutation {
    Users_createOneProduct(data: ProductCreateInput!): Product!
    Users_updateOneProduct(
      data: ProductUpdateInput!
      where: ProductWhereUniqueInput!
    ): Product!
    Users_deleteOneProduct(where: ProductWhereUniqueInput!): Product
    Users_upsertOneProduct(
      where: ProductWhereUniqueInput!
      create: ProductCreateInput!
      update: ProductUpdateInput!
    ): Product
    Users_deleteManyProduct(where: ProductWhereInput): BatchPayload
    # updateMany for this model cannot exist as this model contains only unique fields or relations.
  }
`;
