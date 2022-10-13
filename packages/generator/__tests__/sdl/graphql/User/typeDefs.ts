import gql from 'graphql-tag';

export default gql`
  type User @key(fields: "id") @key(fields: "email") @shareable {
    id: Int!
    createdAt: DateTime!
    username: String
    password: String
    email: String!
    roles: [String!]!
    googleId: String
    googleProfile: Json
  }

  type Query {
    Users_findUniqueUser(where: UserWhereUniqueInput!): User
    Users_findFirstUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): User
    Users_findManyUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): [User!]
    Users_findManyUserCount(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): Int!
    Users_aggregateUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateUser
  }

  type Mutation {
    Users_createOneUser(data: UserCreateInput!): User!
    Users_updateOneUser(
      data: UserUpdateInput!
      where: UserWhereUniqueInput!
    ): User!
    Users_deleteOneUser(where: UserWhereUniqueInput!): User
    Users_upsertOneUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User
    Users_deleteManyUser(where: UserWhereInput): BatchPayload
    Users_updateManyUser(
      data: UserUpdateManyMutationInput!
      where: UserWhereInput
    ): BatchPayload
  }
`;
