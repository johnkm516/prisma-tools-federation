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
    lastName: String
    firstName: String
    profile: Profile
    teams(
      where: Users_UsersOnTeamsWhereInput
      orderBy: Users_UsersOnTeamsOrderByWithRelationInput
      cursor: Users_UsersOnTeamsWhereUniqueInput
      take: Int
      skip: Int
      distinct: UsersOnTeamsScalarFieldEnum
    ): [UsersOnTeams!]!
    calendars(
      where: Users_CalendarsOnUsersWhereInput
      orderBy: Users_CalendarsOnUsersOrderByWithRelationInput
      cursor: Users_CalendarsOnUsersWhereUniqueInput
      take: Int
      skip: Int
      distinct: CalendarsOnUsersScalarFieldEnum
    ): [CalendarsOnUsers!]!
    contacted(
      where: Users_UserWhereInput
      orderBy: Users_UserOrderByWithRelationInput
      cursor: Users_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: UserScalarFieldEnum
    ): [User!]!
    contactedBy(
      where: Users_UserWhereInput
      orderBy: Users_UserOrderByWithRelationInput
      cursor: Users_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: UserScalarFieldEnum
    ): [User!]!
    _count: UserCountOutputType!
  }

  type Query {
    Users_findUniqueUser(where: Users_UserWhereUniqueInput!): User
    Users_findUniqueUserOrThrow(where: Users_UserWhereUniqueInput!): User
    Users_findFirstUser(
      where: Users_UserWhereInput
      orderBy: [Users_UserOrderByWithRelationInput]
      cursor: Users_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): User
    Users_findFirstUserOrThrow(
      where: Users_UserWhereInput
      orderBy: [Users_UserOrderByWithRelationInput]
      cursor: Users_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): User
    Users_findManyUser(
      where: Users_UserWhereInput
      orderBy: [Users_UserOrderByWithRelationInput]
      cursor: Users_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): [User!]
    Users_findManyUserCount(
      where: Users_UserWhereInput
      orderBy: [Users_UserOrderByWithRelationInput]
      cursor: Users_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): Int!
    Users_aggregateUser(
      where: Users_UserWhereInput
      orderBy: [Users_UserOrderByWithRelationInput]
      cursor: Users_UserWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateUser
    Users_groupByUser(
      where: Users_UserWhereInput
      orderBy: [Users_UserOrderByWithAggregationInput]
      by: [UserScalarFieldEnum!]
      having: Users_UserScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [UserGroupByOutputType]
  }

  type Mutation {
    Users_createOneUser(data: Users_UserCreateInput!): User!
    Users_updateOneUser(
      data: Users_UserUpdateInput!
      where: Users_UserWhereUniqueInput!
    ): User!
    Users_deleteOneUser(where: Users_UserWhereUniqueInput!): User
    Users_upsertOneUser(
      where: Users_UserWhereUniqueInput!
      create: Users_UserCreateInput!
      update: Users_UserUpdateInput!
    ): User
    Users_deleteManyUser(where: Users_UserWhereInput): BatchPayload
    Users_updateManyUser(
      data: Users_UserUpdateManyMutationInput!
      where: Users_UserWhereInput
    ): BatchPayload
  }
`;
