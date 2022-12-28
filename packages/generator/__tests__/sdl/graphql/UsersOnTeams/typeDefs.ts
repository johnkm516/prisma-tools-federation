import gql from 'graphql-tag';

export default gql`
  type UsersOnTeams @key(fields: "teamName userId") @shareable {
    team: Team!
    teamName: String!
    user: User!
    userId: Int!
    assignedAt: DateTime!
  }

  type Query {
    Users_findUniqueUsersOnTeams(
      where: Users_UsersOnTeamsWhereUniqueInput!
    ): UsersOnTeams
    Users_findUniqueUsersOnTeamsOrThrow(
      where: Users_UsersOnTeamsWhereUniqueInput!
    ): UsersOnTeams
    Users_findFirstUsersOnTeams(
      where: Users_UsersOnTeamsWhereInput
      orderBy: [Users_UsersOnTeamsOrderByWithRelationInput]
      cursor: Users_UsersOnTeamsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UsersOnTeamsScalarFieldEnum]
    ): UsersOnTeams
    Users_findFirstUsersOnTeamsOrThrow(
      where: Users_UsersOnTeamsWhereInput
      orderBy: [Users_UsersOnTeamsOrderByWithRelationInput]
      cursor: Users_UsersOnTeamsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UsersOnTeamsScalarFieldEnum]
    ): UsersOnTeams
    Users_findManyUsersOnTeams(
      where: Users_UsersOnTeamsWhereInput
      orderBy: [Users_UsersOnTeamsOrderByWithRelationInput]
      cursor: Users_UsersOnTeamsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UsersOnTeamsScalarFieldEnum]
    ): [UsersOnTeams!]
    Users_findManyUsersOnTeamsCount(
      where: Users_UsersOnTeamsWhereInput
      orderBy: [Users_UsersOnTeamsOrderByWithRelationInput]
      cursor: Users_UsersOnTeamsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UsersOnTeamsScalarFieldEnum]
    ): Int!
    Users_aggregateUsersOnTeams(
      where: Users_UsersOnTeamsWhereInput
      orderBy: [Users_UsersOnTeamsOrderByWithRelationInput]
      cursor: Users_UsersOnTeamsWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateUsersOnTeams
    Users_groupByUsersOnTeams(
      where: Users_UsersOnTeamsWhereInput
      orderBy: [Users_UsersOnTeamsOrderByWithAggregationInput]
      by: [UsersOnTeamsScalarFieldEnum!]
      having: Users_UsersOnTeamsScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [UsersOnTeamsGroupByOutputType]
  }

  type Mutation {
    Users_createOneUsersOnTeams(
      data: Users_UsersOnTeamsCreateInput!
    ): UsersOnTeams!
    Users_updateOneUsersOnTeams(
      data: Users_UsersOnTeamsUpdateInput!
      where: Users_UsersOnTeamsWhereUniqueInput!
    ): UsersOnTeams!
    Users_deleteOneUsersOnTeams(
      where: Users_UsersOnTeamsWhereUniqueInput!
    ): UsersOnTeams
    Users_upsertOneUsersOnTeams(
      where: Users_UsersOnTeamsWhereUniqueInput!
      create: Users_UsersOnTeamsCreateInput!
      update: Users_UsersOnTeamsUpdateInput!
    ): UsersOnTeams
    Users_deleteManyUsersOnTeams(
      where: Users_UsersOnTeamsWhereInput
    ): BatchPayload
    Users_updateManyUsersOnTeams(
      data: Users_UsersOnTeamsUpdateManyMutationInput!
      where: Users_UsersOnTeamsWhereInput
    ): BatchPayload
  }
`;
