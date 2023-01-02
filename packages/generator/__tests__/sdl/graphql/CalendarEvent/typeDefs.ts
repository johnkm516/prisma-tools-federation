import gql from 'graphql-tag';

export default gql`
  type CalendarEvent @key(fields: "id") @shareable {
    id: Int!
    url: String
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
    calendarId: Int!
    calendar: Calendar!
  }

  type Query {
    Users_findUniqueCalendarEvent(
      where: Users_CalendarEventWhereUniqueInput!
    ): CalendarEvent
    Users_findUniqueCalendarEventOrThrow(
      where: Users_CalendarEventWhereUniqueInput!
    ): CalendarEvent
    Users_findFirstCalendarEvent(
      where: Users_CalendarEventWhereInput
      orderBy: [Users_CalendarEventOrderByWithRelationInput]
      cursor: Users_CalendarEventWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventScalarFieldEnum]
    ): CalendarEvent
    Users_findFirstCalendarEventOrThrow(
      where: Users_CalendarEventWhereInput
      orderBy: [Users_CalendarEventOrderByWithRelationInput]
      cursor: Users_CalendarEventWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventScalarFieldEnum]
    ): CalendarEvent
    Users_findManyCalendarEvent(
      where: Users_CalendarEventWhereInput
      orderBy: [Users_CalendarEventOrderByWithRelationInput]
      cursor: Users_CalendarEventWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventScalarFieldEnum]
    ): [CalendarEvent!]
    Users_findManyCalendarEventCount(
      where: Users_CalendarEventWhereInput
      orderBy: [Users_CalendarEventOrderByWithRelationInput]
      cursor: Users_CalendarEventWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventScalarFieldEnum]
    ): Int!
    Users_aggregateCalendarEvent(
      where: Users_CalendarEventWhereInput
      orderBy: [Users_CalendarEventOrderByWithRelationInput]
      cursor: Users_CalendarEventWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCalendarEvent
    Users_groupByCalendarEvent(
      where: Users_CalendarEventWhereInput
      orderBy: [Users_CalendarEventOrderByWithAggregationInput]
      by: [CalendarEventScalarFieldEnum!]
      having: Users_CalendarEventScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [CalendarEventGroupByOutputType]
  }

  type Mutation {
    Users_createOneCalendarEvent(
      data: Users_CalendarEventCreateInput!
    ): CalendarEvent!
    Users_updateOneCalendarEvent(
      data: Users_CalendarEventUpdateInput!
      where: Users_CalendarEventWhereUniqueInput!
    ): CalendarEvent!
    Users_deleteOneCalendarEvent(
      where: Users_CalendarEventWhereUniqueInput!
    ): CalendarEvent
    Users_upsertOneCalendarEvent(
      where: Users_CalendarEventWhereUniqueInput!
      create: Users_CalendarEventCreateInput!
      update: Users_CalendarEventUpdateInput!
    ): CalendarEvent
    Users_deleteManyCalendarEvent(
      where: Users_CalendarEventWhereInput
    ): BatchPayload
    Users_updateManyCalendarEvent(
      data: Users_CalendarEventUpdateManyMutationInput!
      where: Users_CalendarEventWhereInput
    ): BatchPayload
  }
`;
