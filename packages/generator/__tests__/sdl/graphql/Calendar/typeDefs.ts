import gql from 'graphql-tag';

export default gql`
  type Calendar @key(fields: "id") @shareable {
    id: Int!
    calendarType: String!
    users(
      where: Users_CalendarsOnUsersWhereInput
      orderBy: Users_CalendarsOnUsersOrderByWithRelationInput
      cursor: Users_CalendarsOnUsersWhereUniqueInput
      take: Int
      skip: Int
      distinct: CalendarsOnUsersScalarFieldEnum
    ): [CalendarsOnUsers!]!
    calendarEvents(
      where: Users_CalendarEventsOnCalendarsWhereInput
      orderBy: Users_CalendarEventsOnCalendarsOrderByWithRelationInput
      cursor: Users_CalendarEventsOnCalendarsWhereUniqueInput
      take: Int
      skip: Int
      distinct: CalendarEventsOnCalendarsScalarFieldEnum
    ): [CalendarEventsOnCalendars!]!
    _count: CalendarCountOutputType!
  }

  type Query {
    Users_findUniqueCalendar(where: Users_CalendarWhereUniqueInput!): Calendar
    Users_findUniqueCalendarOrThrow(
      where: Users_CalendarWhereUniqueInput!
    ): Calendar
    Users_findFirstCalendar(
      where: Users_CalendarWhereInput
      orderBy: [Users_CalendarOrderByWithRelationInput]
      cursor: Users_CalendarWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarScalarFieldEnum]
    ): Calendar
    Users_findFirstCalendarOrThrow(
      where: Users_CalendarWhereInput
      orderBy: [Users_CalendarOrderByWithRelationInput]
      cursor: Users_CalendarWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarScalarFieldEnum]
    ): Calendar
    Users_findManyCalendar(
      where: Users_CalendarWhereInput
      orderBy: [Users_CalendarOrderByWithRelationInput]
      cursor: Users_CalendarWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarScalarFieldEnum]
    ): [Calendar!]
    Users_findManyCalendarCount(
      where: Users_CalendarWhereInput
      orderBy: [Users_CalendarOrderByWithRelationInput]
      cursor: Users_CalendarWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarScalarFieldEnum]
    ): Int!
    Users_aggregateCalendar(
      where: Users_CalendarWhereInput
      orderBy: [Users_CalendarOrderByWithRelationInput]
      cursor: Users_CalendarWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCalendar
    Users_groupByCalendar(
      where: Users_CalendarWhereInput
      orderBy: [Users_CalendarOrderByWithAggregationInput]
      by: [CalendarScalarFieldEnum!]
      having: Users_CalendarScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [CalendarGroupByOutputType]
  }

  type Mutation {
    Users_createOneCalendar(data: Users_CalendarCreateInput!): Calendar!
    Users_updateOneCalendar(
      data: Users_CalendarUpdateInput!
      where: Users_CalendarWhereUniqueInput!
    ): Calendar!
    Users_deleteOneCalendar(where: Users_CalendarWhereUniqueInput!): Calendar
    Users_upsertOneCalendar(
      where: Users_CalendarWhereUniqueInput!
      create: Users_CalendarCreateInput!
      update: Users_CalendarUpdateInput!
    ): Calendar
    Users_deleteManyCalendar(where: Users_CalendarWhereInput): BatchPayload
    Users_updateManyCalendar(
      data: Users_CalendarUpdateManyMutationInput!
      where: Users_CalendarWhereInput
    ): BatchPayload
  }
`;
