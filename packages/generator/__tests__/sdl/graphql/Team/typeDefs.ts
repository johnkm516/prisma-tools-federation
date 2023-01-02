import gql from 'graphql-tag';

export default gql`
  type Team @key(fields: "teamName") @shareable {
    teamName: String!
    users(
      where: Users_UsersOnTeamsWhereInput
      orderBy: Users_UsersOnTeamsOrderByWithRelationInput
      cursor: Users_UsersOnTeamsWhereUniqueInput
      take: Int
      skip: Int
      distinct: UsersOnTeamsScalarFieldEnum
    ): [UsersOnTeams!]!
    teamType: String
    teamIcon: String
    _count: TeamCountOutputType!
  }

  type Query {
    Users_findUniqueTeam(where: Users_TeamWhereUniqueInput!): Team
    Users_findUniqueTeamOrThrow(where: Users_TeamWhereUniqueInput!): Team
    Users_findFirstTeam(
      where: Users_TeamWhereInput
      orderBy: [Users_TeamOrderByWithRelationInput]
      cursor: Users_TeamWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TeamScalarFieldEnum]
    ): Team
    Users_findFirstTeamOrThrow(
      where: Users_TeamWhereInput
      orderBy: [Users_TeamOrderByWithRelationInput]
      cursor: Users_TeamWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TeamScalarFieldEnum]
    ): Team
    Users_findManyTeam(
      where: Users_TeamWhereInput
      orderBy: [Users_TeamOrderByWithRelationInput]
      cursor: Users_TeamWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TeamScalarFieldEnum]
    ): [Team!]
    Users_findManyTeamCount(
      where: Users_TeamWhereInput
      orderBy: [Users_TeamOrderByWithRelationInput]
      cursor: Users_TeamWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TeamScalarFieldEnum]
    ): Int!
    Users_aggregateTeam(
      where: Users_TeamWhereInput
      orderBy: [Users_TeamOrderByWithRelationInput]
      cursor: Users_TeamWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateTeam
    Users_groupByTeam(
      where: Users_TeamWhereInput
      orderBy: [Users_TeamOrderByWithAggregationInput]
      by: [TeamScalarFieldEnum!]
      having: Users_TeamScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [TeamGroupByOutputType]
  }

  type Mutation {
    Users_createOneTeam(data: Users_TeamCreateInput!): Team!
    Users_updateOneTeam(
      data: Users_TeamUpdateInput!
      where: Users_TeamWhereUniqueInput!
    ): Team!
    Users_deleteOneTeam(where: Users_TeamWhereUniqueInput!): Team
    Users_upsertOneTeam(
      where: Users_TeamWhereUniqueInput!
      create: Users_TeamCreateInput!
      update: Users_TeamUpdateInput!
    ): Team
    Users_deleteManyTeam(where: Users_TeamWhereInput): BatchPayload
    Users_updateManyTeam(
      data: Users_TeamUpdateManyMutationInput!
      where: Users_TeamWhereInput
    ): BatchPayload
  }
`;
