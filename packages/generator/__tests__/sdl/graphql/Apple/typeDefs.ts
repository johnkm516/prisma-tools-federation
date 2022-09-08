import gql from 'graphql-tag';

export default gql`
  extend schema
    @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable"]
    )

  type Apple @key(fields: "core") {
    seeds: Int!
    core: String!
  }

  type Query {
    findUniqueApple(where: AppleWhereUniqueInput!): Apple
    findFirstApple(
      where: AppleWhereInput
      orderBy: [AppleOrderByWithRelationInput]
      cursor: AppleWhereUniqueInput
      take: Int
      skip: Int
      distinct: [AppleScalarFieldEnum]
    ): Apple
    findManyApple(
      where: AppleWhereInput
      orderBy: [AppleOrderByWithRelationInput]
      cursor: AppleWhereUniqueInput
      take: Int
      skip: Int
      distinct: [AppleScalarFieldEnum]
    ): [Apple!]
    findManyAppleCount(
      where: AppleWhereInput
      orderBy: [AppleOrderByWithRelationInput]
      cursor: AppleWhereUniqueInput
      take: Int
      skip: Int
      distinct: [AppleScalarFieldEnum]
    ): Int!
    aggregateApple(
      where: AppleWhereInput
      orderBy: [AppleOrderByWithRelationInput]
      cursor: AppleWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateApple
  }

  type Mutation {
    createOneApple(data: AppleCreateInput!): Apple!
    updateOneApple(
      data: AppleUpdateInput!
      where: AppleWhereUniqueInput!
    ): Apple!
    deleteOneApple(where: AppleWhereUniqueInput!): Apple
    upsertOneApple(
      where: AppleWhereUniqueInput!
      create: AppleCreateInput!
      update: AppleUpdateInput!
    ): Apple
    deleteManyApple(where: AppleWhereInput): BatchPayload
    updateManyApple(
      data: AppleUpdateManyMutationInput!
      where: AppleWhereInput
    ): BatchPayload
  }
`;
