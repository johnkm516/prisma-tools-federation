import gql from 'graphql-tag';

export default gql`
  type CalendarEventsOnCalendars
    @key(fields: "calendarId calendarEventId")
    @shareable {
    calendar: Calendar!
    calendarId: Int!
    calendarEvent: CalendarEvent!
    calendarEventId: Int!
  }

  type Query {
    Users_findUniqueCalendarEventsOnCalendars(
      where: Users_CalendarEventsOnCalendarsWhereUniqueInput!
    ): CalendarEventsOnCalendars
    Users_findUniqueCalendarEventsOnCalendarsOrThrow(
      where: Users_CalendarEventsOnCalendarsWhereUniqueInput!
    ): CalendarEventsOnCalendars
    Users_findFirstCalendarEventsOnCalendars(
      where: Users_CalendarEventsOnCalendarsWhereInput
      orderBy: [Users_CalendarEventsOnCalendarsOrderByWithRelationInput]
      cursor: Users_CalendarEventsOnCalendarsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventsOnCalendarsScalarFieldEnum]
    ): CalendarEventsOnCalendars
    Users_findFirstCalendarEventsOnCalendarsOrThrow(
      where: Users_CalendarEventsOnCalendarsWhereInput
      orderBy: [Users_CalendarEventsOnCalendarsOrderByWithRelationInput]
      cursor: Users_CalendarEventsOnCalendarsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventsOnCalendarsScalarFieldEnum]
    ): CalendarEventsOnCalendars
    Users_findManyCalendarEventsOnCalendars(
      where: Users_CalendarEventsOnCalendarsWhereInput
      orderBy: [Users_CalendarEventsOnCalendarsOrderByWithRelationInput]
      cursor: Users_CalendarEventsOnCalendarsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventsOnCalendarsScalarFieldEnum]
    ): [CalendarEventsOnCalendars!]
    Users_findManyCalendarEventsOnCalendarsCount(
      where: Users_CalendarEventsOnCalendarsWhereInput
      orderBy: [Users_CalendarEventsOnCalendarsOrderByWithRelationInput]
      cursor: Users_CalendarEventsOnCalendarsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventsOnCalendarsScalarFieldEnum]
    ): Int!
    Users_aggregateCalendarEventsOnCalendars(
      where: Users_CalendarEventsOnCalendarsWhereInput
      orderBy: [Users_CalendarEventsOnCalendarsOrderByWithRelationInput]
      cursor: Users_CalendarEventsOnCalendarsWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCalendarEventsOnCalendars
    Users_groupByCalendarEventsOnCalendars(
      where: Users_CalendarEventsOnCalendarsWhereInput
      orderBy: [Users_CalendarEventsOnCalendarsOrderByWithAggregationInput]
      by: [CalendarEventsOnCalendarsScalarFieldEnum!]
      having: Users_CalendarEventsOnCalendarsScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [CalendarEventsOnCalendarsGroupByOutputType]
  }

  type Mutation {
    Users_createOneCalendarEventsOnCalendars(
      data: Users_CalendarEventsOnCalendarsCreateInput!
    ): CalendarEventsOnCalendars!
    Users_updateOneCalendarEventsOnCalendars(
      data: Users_CalendarEventsOnCalendarsUpdateInput!
      where: Users_CalendarEventsOnCalendarsWhereUniqueInput!
    ): CalendarEventsOnCalendars!
    Users_deleteOneCalendarEventsOnCalendars(
      where: Users_CalendarEventsOnCalendarsWhereUniqueInput!
    ): CalendarEventsOnCalendars
    Users_upsertOneCalendarEventsOnCalendars(
      where: Users_CalendarEventsOnCalendarsWhereUniqueInput!
      create: Users_CalendarEventsOnCalendarsCreateInput!
      update: Users_CalendarEventsOnCalendarsUpdateInput!
    ): CalendarEventsOnCalendars
    Users_deleteManyCalendarEventsOnCalendars(
      where: Users_CalendarEventsOnCalendarsWhereInput
    ): BatchPayload
    # updateMany for this model cannot exist as this model contains only unique fields or relations.
  }
`;
