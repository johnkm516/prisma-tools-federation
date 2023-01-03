import gql from 'graphql-tag';

export default gql`
  type Order
    @key(fields: "styleNumber purchaseOrderNumber")
    @key(fields: "styleNumber")
    @key(fields: "purchaseOrderNumber")
    @shareable {
    styleNumber: String!
    purchaseOrderNumber: String!
    author: User!
    authorId: Int!
  }

  type Query {
    Users_findUniqueOrder(where: Users_OrderWhereUniqueInput!): Order
    Users_findUniqueOrderOrThrow(where: Users_OrderWhereUniqueInput!): Order
    Users_findFirstOrder(
      where: Users_OrderWhereInput
      orderBy: [Users_OrderOrderByWithRelationInput]
      cursor: Users_OrderWhereUniqueInput
      take: Int
      skip: Int
      distinct: [OrderScalarFieldEnum]
    ): Order
    Users_findFirstOrderOrThrow(
      where: Users_OrderWhereInput
      orderBy: [Users_OrderOrderByWithRelationInput]
      cursor: Users_OrderWhereUniqueInput
      take: Int
      skip: Int
      distinct: [OrderScalarFieldEnum]
    ): Order
    Users_findManyOrder(
      where: Users_OrderWhereInput
      orderBy: [Users_OrderOrderByWithRelationInput]
      cursor: Users_OrderWhereUniqueInput
      take: Int
      skip: Int
      distinct: [OrderScalarFieldEnum]
    ): [Order!]
    Users_findManyOrderCount(
      where: Users_OrderWhereInput
      orderBy: [Users_OrderOrderByWithRelationInput]
      cursor: Users_OrderWhereUniqueInput
      take: Int
      skip: Int
      distinct: [OrderScalarFieldEnum]
    ): Int!
    Users_aggregateOrder(
      where: Users_OrderWhereInput
      orderBy: [Users_OrderOrderByWithRelationInput]
      cursor: Users_OrderWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateOrder
    Users_groupByOrder(
      where: Users_OrderWhereInput
      orderBy: [Users_OrderOrderByWithAggregationInput]
      by: [OrderScalarFieldEnum!]
      having: Users_OrderScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [OrderGroupByOutputType]
  }

  type Mutation {
    Users_createOneOrder(data: Users_OrderCreateInput!): Order!
    Users_updateOneOrder(
      data: Users_OrderUpdateInput!
      where: Users_OrderWhereUniqueInput!
    ): Order!
    Users_deleteOneOrder(where: Users_OrderWhereUniqueInput!): Order
    Users_upsertOneOrder(
      where: Users_OrderWhereUniqueInput!
      create: Users_OrderCreateInput!
      update: Users_OrderUpdateInput!
    ): Order
    Users_deleteManyOrder(where: Users_OrderWhereInput): BatchPayload
    Users_updateManyOrder(
      data: Users_OrderUpdateManyMutationInput!
      where: Users_OrderWhereInput
    ): BatchPayload
  }
`;
