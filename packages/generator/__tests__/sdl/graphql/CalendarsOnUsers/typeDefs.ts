import gql from 'graphql-tag';

export default gql`
  type CalendarsOnUsers @key(fields: "userId calendarId") @shareable {
    user: User!
    userId: Int!
    calendar: Calendar!
    calendarId: Int!
  }

  type Query {
    Users_findUniqueCalendarsOnUsers(
      where: Users_CalendarsOnUsersWhereUniqueInput!
    ): CalendarsOnUsers
    Users_findUniqueCalendarsOnUsersOrThrow(
      where: Users_CalendarsOnUsersWhereUniqueInput!
    ): CalendarsOnUsers
    Users_findFirstCalendarsOnUsers(
      where: Users_CalendarsOnUsersWhereInput
      orderBy: [Users_CalendarsOnUsersOrderByWithRelationInput]
      cursor: Users_CalendarsOnUsersWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarsOnUsersScalarFieldEnum]
    ): CalendarsOnUsers
    Users_findFirstCalendarsOnUsersOrThrow(
      where: Users_CalendarsOnUsersWhereInput
      orderBy: [Users_CalendarsOnUsersOrderByWithRelationInput]
      cursor: Users_CalendarsOnUsersWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarsOnUsersScalarFieldEnum]
    ): CalendarsOnUsers
    Users_findManyCalendarsOnUsers(
      where: Users_CalendarsOnUsersWhereInput
      orderBy: [Users_CalendarsOnUsersOrderByWithRelationInput]
      cursor: Users_CalendarsOnUsersWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarsOnUsersScalarFieldEnum]
    ): [CalendarsOnUsers!]
    Users_findManyCalendarsOnUsersCount(
      where: Users_CalendarsOnUsersWhereInput
      orderBy: [Users_CalendarsOnUsersOrderByWithRelationInput]
      cursor: Users_CalendarsOnUsersWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarsOnUsersScalarFieldEnum]
    ): Int!
    Users_aggregateCalendarsOnUsers(
      where: Users_CalendarsOnUsersWhereInput
      orderBy: [Users_CalendarsOnUsersOrderByWithRelationInput]
      cursor: Users_CalendarsOnUsersWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCalendarsOnUsers
    Users_groupByCalendarsOnUsers(
      where: Users_CalendarsOnUsersWhereInput
      orderBy: [Users_CalendarsOnUsersOrderByWithAggregationInput]
      by: [CalendarsOnUsersScalarFieldEnum!]
      having: Users_CalendarsOnUsersScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [CalendarsOnUsersGroupByOutputType]
  }

  type Mutation {
    Users_createOneCalendarsOnUsers(
      data: Users_CalendarsOnUsersCreateInput!
    ): CalendarsOnUsers!
    Users_updateOneCalendarsOnUsers(
      data: Users_CalendarsOnUsersUpdateInput!
      where: Users_CalendarsOnUsersWhereUniqueInput!
    ): CalendarsOnUsers!
    Users_deleteOneCalendarsOnUsers(
      where: Users_CalendarsOnUsersWhereUniqueInput!
    ): CalendarsOnUsers
    Users_upsertOneCalendarsOnUsers(
      where: Users_CalendarsOnUsersWhereUniqueInput!
      create: Users_CalendarsOnUsersCreateInput!
      update: Users_CalendarsOnUsersUpdateInput!
    ): CalendarsOnUsers
    Users_deleteManyCalendarsOnUsers(
      where: Users_CalendarsOnUsersWhereInput
    ): BatchPayload
    # updateMany for this model cannot exist as this model contains only unique fields or relations.
  }
`;
