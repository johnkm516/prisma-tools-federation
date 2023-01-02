import gql from 'graphql-tag';

export default gql`
  scalar DateTime

  type BatchPayload @shareable {
    count: Int!
  }
  enum CalendarEventScalarFieldEnum {
    id
    url
    title
    start
    end
    allDay
    calendarId
  }

  enum CalendarScalarFieldEnum {
    id
    calendarType
  }

  enum CalendarsOnUsersScalarFieldEnum {
    userId
    calendarId
  }

  enum JsonNullValueFilter {
    DbNull
    JsonNull
    AnyNull
  }

  enum NullableJsonNullValueInput {
    DbNull
    JsonNull
  }

  enum ProfileScalarFieldEnum {
    userId
    location
    joiningDate
    businessPhone
    mobilePhone
    kakaoTalkId
    designation
    profileImg
    designationIcon
    coverImg
  }

  enum QueryMode {
    default
    insensitive
  }

  enum SortOrder {
    asc
    desc
  }

  enum TeamScalarFieldEnum {
    teamName
    teamType
    teamIcon
  }

  enum TransactionIsolationLevel {
    ReadUncommitted
    ReadCommitted
    RepeatableRead
    Serializable
  }

  enum UserScalarFieldEnum {
    id
    createdAt
    username
    password
    email
    roles
    googleId
    googleProfile
    lastName
    firstName
  }

  enum UsersOnTeamsScalarFieldEnum {
    teamName
    userId
    assignedAt
  }

  input Users_UserWhereInput {
    AND: [Users_UserWhereInput!]
    OR: [Users_UserWhereInput!]
    NOT: [Users_UserWhereInput!]
    id: IntFilter
    createdAt: DateTimeFilter
    username: StringNullableFilter
    password: StringNullableFilter
    email: StringFilter
    roles: StringNullableListFilter
    googleId: StringNullableFilter
    googleProfile: JsonNullableFilter
    lastName: StringNullableFilter
    firstName: StringNullableFilter
    profile: Users_ProfileWhereInput
    teams: Users_UsersOnTeamsListRelationFilter
    calendars: Users_CalendarsOnUsersListRelationFilter
    contacted: Users_UserListRelationFilter
    contactedBy: Users_UserListRelationFilter
  }

  input Users_UserOrderByWithRelationInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
    lastName: SortOrder
    firstName: SortOrder
    profile: Users_ProfileOrderByWithRelationInput
    teams: Users_UsersOnTeamsOrderByRelationAggregateInput
    calendars: Users_CalendarsOnUsersOrderByRelationAggregateInput
    contacted: Users_UserOrderByRelationAggregateInput
    contactedBy: Users_UserOrderByRelationAggregateInput
  }

  input Users_UserWhereUniqueInput {
    id: Int
    username: String
    email: String
    googleId: String
    AND: [Users_UserWhereInput!]
    OR: [Users_UserWhereInput!]
    NOT: [Users_UserWhereInput!]
    createdAt: DateTimeFilter
    password: StringNullableFilter
    roles: StringNullableListFilter
    googleProfile: JsonNullableFilter
    lastName: StringNullableFilter
    firstName: StringNullableFilter
    profile: Users_ProfileWhereInput
    teams: Users_UsersOnTeamsListRelationFilter
    calendars: Users_CalendarsOnUsersListRelationFilter
    contacted: Users_UserListRelationFilter
    contactedBy: Users_UserListRelationFilter
  }

  input Users_UserOrderByWithAggregationInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
    lastName: SortOrder
    firstName: SortOrder
    _count: Users_UserCountOrderByAggregateInput
    _avg: Users_UserAvgOrderByAggregateInput
    _max: Users_UserMaxOrderByAggregateInput
    _min: Users_UserMinOrderByAggregateInput
    _sum: Users_UserSumOrderByAggregateInput
  }

  input Users_UserScalarWhereWithAggregatesInput {
    AND: [Users_UserScalarWhereWithAggregatesInput!]
    OR: [Users_UserScalarWhereWithAggregatesInput!]
    NOT: [Users_UserScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    username: StringNullableWithAggregatesFilter
    password: StringNullableWithAggregatesFilter
    email: StringWithAggregatesFilter
    roles: StringNullableListFilter
    googleId: StringNullableWithAggregatesFilter
    googleProfile: JsonNullableWithAggregatesFilter
    lastName: StringNullableWithAggregatesFilter
    firstName: StringNullableWithAggregatesFilter
  }

  input Users_ProfileWhereInput {
    AND: [Users_ProfileWhereInput!]
    OR: [Users_ProfileWhereInput!]
    NOT: [Users_ProfileWhereInput!]
    userId: IntFilter
    user: Users_UserWhereInput
    location: StringNullableFilter
    joiningDate: DateTimeNullableFilter
    businessPhone: StringNullableFilter
    mobilePhone: StringNullableFilter
    kakaoTalkId: StringNullableFilter
    designation: StringNullableFilter
    profileImg: StringNullableFilter
    designationIcon: StringNullableFilter
    coverImg: StringNullableFilter
  }

  input Users_ProfileOrderByWithRelationInput {
    userId: SortOrder
    user: Users_UserOrderByWithRelationInput
    location: SortOrder
    joiningDate: SortOrder
    businessPhone: SortOrder
    mobilePhone: SortOrder
    kakaoTalkId: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
  }

  input Users_ProfileWhereUniqueInput {
    userId: Int
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    AND: [Users_ProfileWhereInput!]
    OR: [Users_ProfileWhereInput!]
    NOT: [Users_ProfileWhereInput!]
    user: Users_UserWhereInput
    location: StringNullableFilter
    joiningDate: DateTimeNullableFilter
    designation: StringNullableFilter
    profileImg: StringNullableFilter
    designationIcon: StringNullableFilter
    coverImg: StringNullableFilter
  }

  input Users_ProfileOrderByWithAggregationInput {
    userId: SortOrder
    location: SortOrder
    joiningDate: SortOrder
    businessPhone: SortOrder
    mobilePhone: SortOrder
    kakaoTalkId: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
    _count: Users_ProfileCountOrderByAggregateInput
    _avg: Users_ProfileAvgOrderByAggregateInput
    _max: Users_ProfileMaxOrderByAggregateInput
    _min: Users_ProfileMinOrderByAggregateInput
    _sum: Users_ProfileSumOrderByAggregateInput
  }

  input Users_ProfileScalarWhereWithAggregatesInput {
    AND: [Users_ProfileScalarWhereWithAggregatesInput!]
    OR: [Users_ProfileScalarWhereWithAggregatesInput!]
    NOT: [Users_ProfileScalarWhereWithAggregatesInput!]
    userId: IntWithAggregatesFilter
    location: StringNullableWithAggregatesFilter
    joiningDate: DateTimeNullableWithAggregatesFilter
    businessPhone: StringNullableWithAggregatesFilter
    mobilePhone: StringNullableWithAggregatesFilter
    kakaoTalkId: StringNullableWithAggregatesFilter
    designation: StringNullableWithAggregatesFilter
    profileImg: StringNullableWithAggregatesFilter
    designationIcon: StringNullableWithAggregatesFilter
    coverImg: StringNullableWithAggregatesFilter
  }

  input Users_UsersOnTeamsWhereInput {
    AND: [Users_UsersOnTeamsWhereInput!]
    OR: [Users_UsersOnTeamsWhereInput!]
    NOT: [Users_UsersOnTeamsWhereInput!]
    team: Users_TeamWhereInput
    teamName: StringFilter
    user: Users_UserWhereInput
    userId: IntFilter
    assignedAt: DateTimeFilter
  }

  input Users_UsersOnTeamsOrderByWithRelationInput {
    team: Users_TeamOrderByWithRelationInput
    teamName: SortOrder
    user: Users_UserOrderByWithRelationInput
    userId: SortOrder
    assignedAt: SortOrder
  }

  input Users_UsersOnTeamsWhereUniqueInput {
    teamName_userId: UsersOnTeamsTeamNameUserIdCompoundUniqueInput
    AND: [Users_UsersOnTeamsWhereInput!]
    OR: [Users_UsersOnTeamsWhereInput!]
    NOT: [Users_UsersOnTeamsWhereInput!]
    team: Users_TeamWhereInput
    teamName: StringFilter
    user: Users_UserWhereInput
    userId: IntFilter
    assignedAt: DateTimeFilter
  }

  input Users_UsersOnTeamsOrderByWithAggregationInput {
    teamName: SortOrder
    userId: SortOrder
    assignedAt: SortOrder
    _count: Users_UsersOnTeamsCountOrderByAggregateInput
    _avg: Users_UsersOnTeamsAvgOrderByAggregateInput
    _max: Users_UsersOnTeamsMaxOrderByAggregateInput
    _min: Users_UsersOnTeamsMinOrderByAggregateInput
    _sum: Users_UsersOnTeamsSumOrderByAggregateInput
  }

  input Users_UsersOnTeamsScalarWhereWithAggregatesInput {
    AND: [Users_UsersOnTeamsScalarWhereWithAggregatesInput!]
    OR: [Users_UsersOnTeamsScalarWhereWithAggregatesInput!]
    NOT: [Users_UsersOnTeamsScalarWhereWithAggregatesInput!]
    teamName: StringWithAggregatesFilter
    userId: IntWithAggregatesFilter
    assignedAt: DateTimeWithAggregatesFilter
  }

  input Users_TeamWhereInput {
    AND: [Users_TeamWhereInput!]
    OR: [Users_TeamWhereInput!]
    NOT: [Users_TeamWhereInput!]
    teamName: StringFilter
    users: Users_UsersOnTeamsListRelationFilter
    teamType: StringNullableFilter
    teamIcon: StringNullableFilter
  }

  input Users_TeamOrderByWithRelationInput {
    teamName: SortOrder
    users: Users_UsersOnTeamsOrderByRelationAggregateInput
    teamType: SortOrder
    teamIcon: SortOrder
  }

  input Users_TeamWhereUniqueInput {
    teamName: String
    AND: [Users_TeamWhereInput!]
    OR: [Users_TeamWhereInput!]
    NOT: [Users_TeamWhereInput!]
    users: Users_UsersOnTeamsListRelationFilter
    teamType: StringNullableFilter
    teamIcon: StringNullableFilter
  }

  input Users_TeamOrderByWithAggregationInput {
    teamName: SortOrder
    teamType: SortOrder
    teamIcon: SortOrder
    _count: Users_TeamCountOrderByAggregateInput
    _max: Users_TeamMaxOrderByAggregateInput
    _min: Users_TeamMinOrderByAggregateInput
  }

  input Users_TeamScalarWhereWithAggregatesInput {
    AND: [Users_TeamScalarWhereWithAggregatesInput!]
    OR: [Users_TeamScalarWhereWithAggregatesInput!]
    NOT: [Users_TeamScalarWhereWithAggregatesInput!]
    teamName: StringWithAggregatesFilter
    teamType: StringNullableWithAggregatesFilter
    teamIcon: StringNullableWithAggregatesFilter
  }

  input Users_CalendarEventWhereInput {
    AND: [Users_CalendarEventWhereInput!]
    OR: [Users_CalendarEventWhereInput!]
    NOT: [Users_CalendarEventWhereInput!]
    id: IntFilter
    url: StringNullableFilter
    title: StringFilter
    start: DateTimeFilter
    end: DateTimeFilter
    allDay: BoolFilter
    calendarId: IntFilter
    calendar: Users_CalendarWhereInput
  }

  input Users_CalendarEventOrderByWithRelationInput {
    id: SortOrder
    url: SortOrder
    title: SortOrder
    start: SortOrder
    end: SortOrder
    allDay: SortOrder
    calendarId: SortOrder
    calendar: Users_CalendarOrderByWithRelationInput
  }

  input Users_CalendarEventWhereUniqueInput {
    id: Int
    AND: [Users_CalendarEventWhereInput!]
    OR: [Users_CalendarEventWhereInput!]
    NOT: [Users_CalendarEventWhereInput!]
    url: StringNullableFilter
    title: StringFilter
    start: DateTimeFilter
    end: DateTimeFilter
    allDay: BoolFilter
    calendarId: IntFilter
    calendar: Users_CalendarWhereInput
  }

  input Users_CalendarEventOrderByWithAggregationInput {
    id: SortOrder
    url: SortOrder
    title: SortOrder
    start: SortOrder
    end: SortOrder
    allDay: SortOrder
    calendarId: SortOrder
    _count: Users_CalendarEventCountOrderByAggregateInput
    _avg: Users_CalendarEventAvgOrderByAggregateInput
    _max: Users_CalendarEventMaxOrderByAggregateInput
    _min: Users_CalendarEventMinOrderByAggregateInput
    _sum: Users_CalendarEventSumOrderByAggregateInput
  }

  input Users_CalendarEventScalarWhereWithAggregatesInput {
    AND: [Users_CalendarEventScalarWhereWithAggregatesInput!]
    OR: [Users_CalendarEventScalarWhereWithAggregatesInput!]
    NOT: [Users_CalendarEventScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    url: StringNullableWithAggregatesFilter
    title: StringWithAggregatesFilter
    start: DateTimeWithAggregatesFilter
    end: DateTimeWithAggregatesFilter
    allDay: BoolWithAggregatesFilter
    calendarId: IntWithAggregatesFilter
  }

  input Users_CalendarsOnUsersWhereInput {
    AND: [Users_CalendarsOnUsersWhereInput!]
    OR: [Users_CalendarsOnUsersWhereInput!]
    NOT: [Users_CalendarsOnUsersWhereInput!]
    user: Users_UserWhereInput
    userId: IntFilter
    calendar: Users_CalendarWhereInput
    calendarId: IntFilter
  }

  input Users_CalendarsOnUsersOrderByWithRelationInput {
    user: Users_UserOrderByWithRelationInput
    userId: SortOrder
    calendar: Users_CalendarOrderByWithRelationInput
    calendarId: SortOrder
  }

  input Users_CalendarsOnUsersWhereUniqueInput {
    userId_calendarId: CalendarsOnUsersUserIdCalendarIdCompoundUniqueInput
    AND: [Users_CalendarsOnUsersWhereInput!]
    OR: [Users_CalendarsOnUsersWhereInput!]
    NOT: [Users_CalendarsOnUsersWhereInput!]
    user: Users_UserWhereInput
    userId: IntFilter
    calendar: Users_CalendarWhereInput
    calendarId: IntFilter
  }

  input Users_CalendarsOnUsersOrderByWithAggregationInput {
    userId: SortOrder
    calendarId: SortOrder
    _count: Users_CalendarsOnUsersCountOrderByAggregateInput
    _avg: Users_CalendarsOnUsersAvgOrderByAggregateInput
    _max: Users_CalendarsOnUsersMaxOrderByAggregateInput
    _min: Users_CalendarsOnUsersMinOrderByAggregateInput
    _sum: Users_CalendarsOnUsersSumOrderByAggregateInput
  }

  input Users_CalendarsOnUsersScalarWhereWithAggregatesInput {
    AND: [Users_CalendarsOnUsersScalarWhereWithAggregatesInput!]
    OR: [Users_CalendarsOnUsersScalarWhereWithAggregatesInput!]
    NOT: [Users_CalendarsOnUsersScalarWhereWithAggregatesInput!]
    userId: IntWithAggregatesFilter
    calendarId: IntWithAggregatesFilter
  }

  input Users_CalendarWhereInput {
    AND: [Users_CalendarWhereInput!]
    OR: [Users_CalendarWhereInput!]
    NOT: [Users_CalendarWhereInput!]
    id: IntFilter
    calendarType: StringFilter
    users: Users_CalendarsOnUsersListRelationFilter
    calendarEvents: Users_CalendarEventListRelationFilter
  }

  input Users_CalendarOrderByWithRelationInput {
    id: SortOrder
    calendarType: SortOrder
    users: Users_CalendarsOnUsersOrderByRelationAggregateInput
    calendarEvents: Users_CalendarEventOrderByRelationAggregateInput
  }

  input Users_CalendarWhereUniqueInput {
    id: Int
    AND: [Users_CalendarWhereInput!]
    OR: [Users_CalendarWhereInput!]
    NOT: [Users_CalendarWhereInput!]
    calendarType: StringFilter
    users: Users_CalendarsOnUsersListRelationFilter
    calendarEvents: Users_CalendarEventListRelationFilter
  }

  input Users_CalendarOrderByWithAggregationInput {
    id: SortOrder
    calendarType: SortOrder
    _count: Users_CalendarCountOrderByAggregateInput
    _avg: Users_CalendarAvgOrderByAggregateInput
    _max: Users_CalendarMaxOrderByAggregateInput
    _min: Users_CalendarMinOrderByAggregateInput
    _sum: Users_CalendarSumOrderByAggregateInput
  }

  input Users_CalendarScalarWhereWithAggregatesInput {
    AND: [Users_CalendarScalarWhereWithAggregatesInput!]
    OR: [Users_CalendarScalarWhereWithAggregatesInput!]
    NOT: [Users_CalendarScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    calendarType: StringWithAggregatesFilter
  }

  input Users_UserCreateInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Users_ProfileCreateNestedOneWithoutUserInput
    teams: Users_UsersOnTeamsCreateNestedManyWithoutUserInput
    calendars: Users_CalendarsOnUsersCreateNestedManyWithoutUserInput
    contacted: Users_UserCreateNestedManyWithoutContactedByInput
    contactedBy: Users_UserCreateNestedManyWithoutContactedInput
  }

  input Users_UserUncheckedCreateInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Users_ProfileUncheckedCreateNestedOneWithoutUserInput
    teams: Users_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput
    calendars: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput
    contacted: Users_UserUncheckedCreateNestedManyWithoutContactedByInput
    contactedBy: Users_UserUncheckedCreateNestedManyWithoutContactedInput
  }

  input Users_UserUpdateInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUpdateOneWithoutUserNestedInput
    teams: Users_UsersOnTeamsUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput
    contacted: Users_UserUpdateManyWithoutContactedByNestedInput
    contactedBy: Users_UserUpdateManyWithoutContactedNestedInput
  }

  input Users_UserUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUncheckedUpdateOneWithoutUserNestedInput
    teams: Users_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    contacted: Users_UserUncheckedUpdateManyWithoutContactedByNestedInput
    contactedBy: Users_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Users_UserCreateManyInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
  }

  input Users_UserUpdateManyMutationInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
  }

  input Users_UserUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
  }

  input Users_ProfileCreateInput {
    user: Users_UserCreateNestedOneWithoutProfileInput!
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Users_ProfileUncheckedCreateInput {
    userId: Int!
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Users_ProfileUpdateInput {
    user: Users_UserUpdateOneRequiredWithoutProfileNestedInput
    location: NullableStringFieldUpdateOperationsInput
    joiningDate: NullableDateTimeFieldUpdateOperationsInput
    businessPhone: NullableStringFieldUpdateOperationsInput
    mobilePhone: NullableStringFieldUpdateOperationsInput
    kakaoTalkId: NullableStringFieldUpdateOperationsInput
    designation: NullableStringFieldUpdateOperationsInput
    profileImg: NullableStringFieldUpdateOperationsInput
    designationIcon: NullableStringFieldUpdateOperationsInput
    coverImg: NullableStringFieldUpdateOperationsInput
  }

  input Users_ProfileUncheckedUpdateInput {
    userId: IntFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    joiningDate: NullableDateTimeFieldUpdateOperationsInput
    businessPhone: NullableStringFieldUpdateOperationsInput
    mobilePhone: NullableStringFieldUpdateOperationsInput
    kakaoTalkId: NullableStringFieldUpdateOperationsInput
    designation: NullableStringFieldUpdateOperationsInput
    profileImg: NullableStringFieldUpdateOperationsInput
    designationIcon: NullableStringFieldUpdateOperationsInput
    coverImg: NullableStringFieldUpdateOperationsInput
  }

  input Users_ProfileCreateManyInput {
    userId: Int!
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Users_ProfileUpdateManyMutationInput {
    location: NullableStringFieldUpdateOperationsInput
    joiningDate: NullableDateTimeFieldUpdateOperationsInput
    businessPhone: NullableStringFieldUpdateOperationsInput
    mobilePhone: NullableStringFieldUpdateOperationsInput
    kakaoTalkId: NullableStringFieldUpdateOperationsInput
    designation: NullableStringFieldUpdateOperationsInput
    profileImg: NullableStringFieldUpdateOperationsInput
    designationIcon: NullableStringFieldUpdateOperationsInput
    coverImg: NullableStringFieldUpdateOperationsInput
  }

  input Users_ProfileUncheckedUpdateManyInput {
    userId: IntFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    joiningDate: NullableDateTimeFieldUpdateOperationsInput
    businessPhone: NullableStringFieldUpdateOperationsInput
    mobilePhone: NullableStringFieldUpdateOperationsInput
    kakaoTalkId: NullableStringFieldUpdateOperationsInput
    designation: NullableStringFieldUpdateOperationsInput
    profileImg: NullableStringFieldUpdateOperationsInput
    designationIcon: NullableStringFieldUpdateOperationsInput
    coverImg: NullableStringFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsCreateInput {
    team: Users_TeamCreateNestedOneWithoutUsersInput!
    user: Users_UserCreateNestedOneWithoutTeamsInput!
    assignedAt: DateTime
  }

  input Users_UsersOnTeamsUncheckedCreateInput {
    teamName: String!
    userId: Int!
    assignedAt: DateTime
  }

  input Users_UsersOnTeamsUpdateInput {
    team: Users_TeamUpdateOneRequiredWithoutUsersNestedInput
    user: Users_UserUpdateOneRequiredWithoutTeamsNestedInput
    assignedAt: DateTimeFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsUncheckedUpdateInput {
    teamName: StringFieldUpdateOperationsInput
    userId: IntFieldUpdateOperationsInput
    assignedAt: DateTimeFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsCreateManyInput {
    teamName: String!
    userId: Int!
    assignedAt: DateTime
  }

  input Users_UsersOnTeamsUpdateManyMutationInput {
    assignedAt: DateTimeFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsUncheckedUpdateManyInput {
    teamName: StringFieldUpdateOperationsInput
    userId: IntFieldUpdateOperationsInput
    assignedAt: DateTimeFieldUpdateOperationsInput
  }

  input Users_TeamCreateInput {
    teamName: String!
    users: Users_UsersOnTeamsCreateNestedManyWithoutTeamInput
    teamType: String
    teamIcon: String
  }

  input Users_TeamUncheckedCreateInput {
    teamName: String!
    users: Users_UsersOnTeamsUncheckedCreateNestedManyWithoutTeamInput
    teamType: String
    teamIcon: String
  }

  input Users_TeamUpdateInput {
    teamName: StringFieldUpdateOperationsInput
    users: Users_UsersOnTeamsUpdateManyWithoutTeamNestedInput
    teamType: NullableStringFieldUpdateOperationsInput
    teamIcon: NullableStringFieldUpdateOperationsInput
  }

  input Users_TeamUncheckedUpdateInput {
    teamName: StringFieldUpdateOperationsInput
    users: Users_UsersOnTeamsUncheckedUpdateManyWithoutTeamNestedInput
    teamType: NullableStringFieldUpdateOperationsInput
    teamIcon: NullableStringFieldUpdateOperationsInput
  }

  input Users_TeamCreateManyInput {
    teamName: String!
    teamType: String
    teamIcon: String
  }

  input Users_TeamUpdateManyMutationInput {
    teamName: StringFieldUpdateOperationsInput
    teamType: NullableStringFieldUpdateOperationsInput
    teamIcon: NullableStringFieldUpdateOperationsInput
  }

  input Users_TeamUncheckedUpdateManyInput {
    teamName: StringFieldUpdateOperationsInput
    teamType: NullableStringFieldUpdateOperationsInput
    teamIcon: NullableStringFieldUpdateOperationsInput
  }

  input Users_CalendarEventCreateInput {
    url: String
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
    calendar: Users_CalendarCreateNestedOneWithoutCalendarEventsInput!
  }

  input Users_CalendarEventUncheckedCreateInput {
    id: Int
    url: String
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
    calendarId: Int!
  }

  input Users_CalendarEventUpdateInput {
    url: NullableStringFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    start: DateTimeFieldUpdateOperationsInput
    end: DateTimeFieldUpdateOperationsInput
    allDay: BoolFieldUpdateOperationsInput
    calendar: Users_CalendarUpdateOneRequiredWithoutCalendarEventsNestedInput
  }

  input Users_CalendarEventUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    url: NullableStringFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    start: DateTimeFieldUpdateOperationsInput
    end: DateTimeFieldUpdateOperationsInput
    allDay: BoolFieldUpdateOperationsInput
    calendarId: IntFieldUpdateOperationsInput
  }

  input Users_CalendarEventCreateManyInput {
    id: Int
    url: String
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
    calendarId: Int!
  }

  input Users_CalendarEventUpdateManyMutationInput {
    url: NullableStringFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    start: DateTimeFieldUpdateOperationsInput
    end: DateTimeFieldUpdateOperationsInput
    allDay: BoolFieldUpdateOperationsInput
  }

  input Users_CalendarEventUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    url: NullableStringFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    start: DateTimeFieldUpdateOperationsInput
    end: DateTimeFieldUpdateOperationsInput
    allDay: BoolFieldUpdateOperationsInput
    calendarId: IntFieldUpdateOperationsInput
  }

  input Users_CalendarsOnUsersCreateInput {
    user: Users_UserCreateNestedOneWithoutCalendarsInput!
    calendar: Users_CalendarCreateNestedOneWithoutUsersInput!
  }

  input Users_CalendarsOnUsersUncheckedCreateInput {
    userId: Int!
    calendarId: Int!
  }

  input Users_CalendarsOnUsersUpdateInput {
    user: Users_UserUpdateOneRequiredWithoutCalendarsNestedInput
    calendar: Users_CalendarUpdateOneRequiredWithoutUsersNestedInput
  }

  input Users_CalendarsOnUsersUncheckedUpdateInput {
    userId: IntFieldUpdateOperationsInput
    calendarId: IntFieldUpdateOperationsInput
  }

  input Users_CalendarsOnUsersCreateManyInput {
    userId: Int!
    calendarId: Int!
  }

  input Users_CalendarsOnUsersUncheckedUpdateManyInput {
    userId: IntFieldUpdateOperationsInput
    calendarId: IntFieldUpdateOperationsInput
  }

  input Users_CalendarCreateInput {
    calendarType: String!
    users: Users_CalendarsOnUsersCreateNestedManyWithoutCalendarInput
    calendarEvents: Users_CalendarEventCreateNestedManyWithoutCalendarInput
  }

  input Users_CalendarUncheckedCreateInput {
    id: Int
    calendarType: String!
    users: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarInput
    calendarEvents: Users_CalendarEventUncheckedCreateNestedManyWithoutCalendarInput
  }

  input Users_CalendarUpdateInput {
    calendarType: StringFieldUpdateOperationsInput
    users: Users_CalendarsOnUsersUpdateManyWithoutCalendarNestedInput
    calendarEvents: Users_CalendarEventUpdateManyWithoutCalendarNestedInput
  }

  input Users_CalendarUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    calendarType: StringFieldUpdateOperationsInput
    users: Users_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarNestedInput
    calendarEvents: Users_CalendarEventUncheckedUpdateManyWithoutCalendarNestedInput
  }

  input Users_CalendarCreateManyInput {
    id: Int
    calendarType: String!
  }

  input Users_CalendarUpdateManyMutationInput {
    calendarType: StringFieldUpdateOperationsInput
  }

  input Users_CalendarUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    calendarType: StringFieldUpdateOperationsInput
  }

  input IntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input DateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input StringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableFilter
  }

  input StringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringFilter
  }

  input StringNullableListFilter {
    equals: [String!]
    has: String
    hasEvery: [String!]
    hasSome: [String!]
    isEmpty: Boolean
  }

  input JsonNullableFilter {
    equals: Json
    path: [String!]
    string_contains: String
    string_starts_with: String
    string_ends_with: String
    array_contains: Json
    array_starts_with: Json
    array_ends_with: Json
    lt: Json
    lte: Json
    gt: Json
    gte: Json
    not: Json
  }

  input Users_ProfileRelationFilter {
    is: Users_ProfileWhereInput
    isNot: Users_ProfileWhereInput
  }

  input Users_UsersOnTeamsListRelationFilter {
    every: Users_UsersOnTeamsWhereInput
    some: Users_UsersOnTeamsWhereInput
    none: Users_UsersOnTeamsWhereInput
  }

  input Users_CalendarsOnUsersListRelationFilter {
    every: Users_CalendarsOnUsersWhereInput
    some: Users_CalendarsOnUsersWhereInput
    none: Users_CalendarsOnUsersWhereInput
  }

  input Users_UserListRelationFilter {
    every: Users_UserWhereInput
    some: Users_UserWhereInput
    none: Users_UserWhereInput
  }

  input Users_UsersOnTeamsOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input Users_CalendarsOnUsersOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input Users_UserOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input Users_UserCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
    lastName: SortOrder
    firstName: SortOrder
  }

  input Users_UserAvgOrderByAggregateInput {
    id: SortOrder
  }

  input Users_UserMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    googleId: SortOrder
    lastName: SortOrder
    firstName: SortOrder
  }

  input Users_UserMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    googleId: SortOrder
    lastName: SortOrder
    firstName: SortOrder
  }

  input Users_UserSumOrderByAggregateInput {
    id: SortOrder
  }

  input IntWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedFloatFilter
    _sum: NestedIntFilter
    _min: NestedIntFilter
    _max: NestedIntFilter
  }

  input DateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input StringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input StringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input JsonNullableWithAggregatesFilter {
    equals: Json
    path: [String!]
    string_contains: String
    string_starts_with: String
    string_ends_with: String
    array_contains: Json
    array_starts_with: Json
    array_ends_with: Json
    lt: Json
    lte: Json
    gt: Json
    gte: Json
    not: Json
    _count: NestedIntNullableFilter
    _min: NestedJsonNullableFilter
    _max: NestedJsonNullableFilter
  }

  input Users_UserRelationFilter {
    is: Users_UserWhereInput
    isNot: Users_UserWhereInput
  }

  input DateTimeNullableFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeNullableFilter
  }

  input Users_ProfileCountOrderByAggregateInput {
    userId: SortOrder
    location: SortOrder
    joiningDate: SortOrder
    businessPhone: SortOrder
    mobilePhone: SortOrder
    kakaoTalkId: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
  }

  input Users_ProfileAvgOrderByAggregateInput {
    userId: SortOrder
  }

  input Users_ProfileMaxOrderByAggregateInput {
    userId: SortOrder
    location: SortOrder
    joiningDate: SortOrder
    businessPhone: SortOrder
    mobilePhone: SortOrder
    kakaoTalkId: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
  }

  input Users_ProfileMinOrderByAggregateInput {
    userId: SortOrder
    location: SortOrder
    joiningDate: SortOrder
    businessPhone: SortOrder
    mobilePhone: SortOrder
    kakaoTalkId: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
  }

  input Users_ProfileSumOrderByAggregateInput {
    userId: SortOrder
  }

  input DateTimeNullableWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedDateTimeNullableFilter
    _max: NestedDateTimeNullableFilter
  }

  input Users_TeamRelationFilter {
    is: Users_TeamWhereInput
    isNot: Users_TeamWhereInput
  }

  input UsersOnTeamsTeamNameUserIdCompoundUniqueInput {
    teamName: String!
    userId: Int!
  }

  input Users_UsersOnTeamsCountOrderByAggregateInput {
    teamName: SortOrder
    userId: SortOrder
    assignedAt: SortOrder
  }

  input Users_UsersOnTeamsAvgOrderByAggregateInput {
    userId: SortOrder
  }

  input Users_UsersOnTeamsMaxOrderByAggregateInput {
    teamName: SortOrder
    userId: SortOrder
    assignedAt: SortOrder
  }

  input Users_UsersOnTeamsMinOrderByAggregateInput {
    teamName: SortOrder
    userId: SortOrder
    assignedAt: SortOrder
  }

  input Users_UsersOnTeamsSumOrderByAggregateInput {
    userId: SortOrder
  }

  input Users_TeamCountOrderByAggregateInput {
    teamName: SortOrder
    teamType: SortOrder
    teamIcon: SortOrder
  }

  input Users_TeamMaxOrderByAggregateInput {
    teamName: SortOrder
    teamType: SortOrder
    teamIcon: SortOrder
  }

  input Users_TeamMinOrderByAggregateInput {
    teamName: SortOrder
    teamType: SortOrder
    teamIcon: SortOrder
  }

  input BoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input Users_CalendarRelationFilter {
    is: Users_CalendarWhereInput
    isNot: Users_CalendarWhereInput
  }

  input Users_CalendarEventCountOrderByAggregateInput {
    id: SortOrder
    url: SortOrder
    title: SortOrder
    start: SortOrder
    end: SortOrder
    allDay: SortOrder
    calendarId: SortOrder
  }

  input Users_CalendarEventAvgOrderByAggregateInput {
    id: SortOrder
    calendarId: SortOrder
  }

  input Users_CalendarEventMaxOrderByAggregateInput {
    id: SortOrder
    url: SortOrder
    title: SortOrder
    start: SortOrder
    end: SortOrder
    allDay: SortOrder
    calendarId: SortOrder
  }

  input Users_CalendarEventMinOrderByAggregateInput {
    id: SortOrder
    url: SortOrder
    title: SortOrder
    start: SortOrder
    end: SortOrder
    allDay: SortOrder
    calendarId: SortOrder
  }

  input Users_CalendarEventSumOrderByAggregateInput {
    id: SortOrder
    calendarId: SortOrder
  }

  input BoolWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedBoolFilter
    _max: NestedBoolFilter
  }

  input CalendarsOnUsersUserIdCalendarIdCompoundUniqueInput {
    userId: Int!
    calendarId: Int!
  }

  input Users_CalendarsOnUsersCountOrderByAggregateInput {
    userId: SortOrder
    calendarId: SortOrder
  }

  input Users_CalendarsOnUsersAvgOrderByAggregateInput {
    userId: SortOrder
    calendarId: SortOrder
  }

  input Users_CalendarsOnUsersMaxOrderByAggregateInput {
    userId: SortOrder
    calendarId: SortOrder
  }

  input Users_CalendarsOnUsersMinOrderByAggregateInput {
    userId: SortOrder
    calendarId: SortOrder
  }

  input Users_CalendarsOnUsersSumOrderByAggregateInput {
    userId: SortOrder
    calendarId: SortOrder
  }

  input Users_CalendarEventListRelationFilter {
    every: Users_CalendarEventWhereInput
    some: Users_CalendarEventWhereInput
    none: Users_CalendarEventWhereInput
  }

  input Users_CalendarEventOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input Users_CalendarCountOrderByAggregateInput {
    id: SortOrder
    calendarType: SortOrder
  }

  input Users_CalendarAvgOrderByAggregateInput {
    id: SortOrder
  }

  input Users_CalendarMaxOrderByAggregateInput {
    id: SortOrder
    calendarType: SortOrder
  }

  input Users_CalendarMinOrderByAggregateInput {
    id: SortOrder
    calendarType: SortOrder
  }

  input Users_CalendarSumOrderByAggregateInput {
    id: SortOrder
  }

  input Users_UserCreaterolesInput {
    set: [String!]!
  }

  input Users_ProfileCreateNestedOneWithoutUserInput {
    create: Users_ProfileUncheckedCreateWithoutUserInput
    connectOrCreate: Users_ProfileCreateOrConnectWithoutUserInput
    connect: Users_ProfileWhereUniqueInput
  }

  input Users_UsersOnTeamsCreateNestedManyWithoutUserInput {
    create: [Users_UsersOnTeamsCreateWithoutUserInput!]
    connectOrCreate: [Users_UsersOnTeamsCreateOrConnectWithoutUserInput!]
    createMany: Users_UsersOnTeamsCreateManyUserInputEnvelope
    connect: [Users_UsersOnTeamsWhereUniqueInput!]
  }

  input Users_CalendarsOnUsersCreateNestedManyWithoutUserInput {
    create: [Users_CalendarsOnUsersCreateWithoutUserInput!]
    connectOrCreate: [Users_CalendarsOnUsersCreateOrConnectWithoutUserInput!]
    createMany: Users_CalendarsOnUsersCreateManyUserInputEnvelope
    connect: [Users_CalendarsOnUsersWhereUniqueInput!]
  }

  input Users_UserCreateNestedManyWithoutContactedByInput {
    create: [Users_UserCreateWithoutContactedByInput!]
    connectOrCreate: [Users_UserCreateOrConnectWithoutContactedByInput!]
    connect: [Users_UserWhereUniqueInput!]
  }

  input Users_UserCreateNestedManyWithoutContactedInput {
    create: [Users_UserCreateWithoutContactedInput!]
    connectOrCreate: [Users_UserCreateOrConnectWithoutContactedInput!]
    connect: [Users_UserWhereUniqueInput!]
  }

  input Users_ProfileUncheckedCreateNestedOneWithoutUserInput {
    create: Users_ProfileUncheckedCreateWithoutUserInput
    connectOrCreate: Users_ProfileCreateOrConnectWithoutUserInput
    connect: Users_ProfileWhereUniqueInput
  }

  input Users_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput {
    create: [Users_UsersOnTeamsCreateWithoutUserInput!]
    connectOrCreate: [Users_UsersOnTeamsCreateOrConnectWithoutUserInput!]
    createMany: Users_UsersOnTeamsCreateManyUserInputEnvelope
    connect: [Users_UsersOnTeamsWhereUniqueInput!]
  }

  input Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput {
    create: [Users_CalendarsOnUsersCreateWithoutUserInput!]
    connectOrCreate: [Users_CalendarsOnUsersCreateOrConnectWithoutUserInput!]
    createMany: Users_CalendarsOnUsersCreateManyUserInputEnvelope
    connect: [Users_CalendarsOnUsersWhereUniqueInput!]
  }

  input Users_UserUncheckedCreateNestedManyWithoutContactedByInput {
    create: [Users_UserCreateWithoutContactedByInput!]
    connectOrCreate: [Users_UserCreateOrConnectWithoutContactedByInput!]
    connect: [Users_UserWhereUniqueInput!]
  }

  input Users_UserUncheckedCreateNestedManyWithoutContactedInput {
    create: [Users_UserCreateWithoutContactedInput!]
    connectOrCreate: [Users_UserCreateOrConnectWithoutContactedInput!]
    connect: [Users_UserWhereUniqueInput!]
  }

  input DateTimeFieldUpdateOperationsInput {
    set: DateTime
  }

  input NullableStringFieldUpdateOperationsInput {
    set: String
  }

  input StringFieldUpdateOperationsInput {
    set: String
  }

  input Users_UserUpdaterolesInput {
    set: [String!]
    push: [String!]
  }

  input Users_ProfileUpdateOneWithoutUserNestedInput {
    create: Users_ProfileUncheckedCreateWithoutUserInput
    connectOrCreate: Users_ProfileCreateOrConnectWithoutUserInput
    upsert: Users_ProfileUpsertWithoutUserInput
    disconnect: Users_ProfileWhereInput
    delete: Users_ProfileWhereInput
    connect: Users_ProfileWhereUniqueInput
    update: Users_ProfileUpdateWithoutUserInput
  }

  input Users_UsersOnTeamsUpdateManyWithoutUserNestedInput {
    create: [Users_UsersOnTeamsCreateWithoutUserInput!]
    connectOrCreate: [Users_UsersOnTeamsCreateOrConnectWithoutUserInput!]
    upsert: [Users_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput!]
    createMany: Users_UsersOnTeamsCreateManyUserInputEnvelope
    set: [Users_UsersOnTeamsWhereUniqueInput!]
    disconnect: [Users_UsersOnTeamsWhereUniqueInput!]
    delete: [Users_UsersOnTeamsWhereUniqueInput!]
    connect: [Users_UsersOnTeamsWhereUniqueInput!]
    update: [Users_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [Users_UsersOnTeamsUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [Users_UsersOnTeamsScalarWhereInput!]
  }

  input Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput {
    create: [Users_CalendarsOnUsersCreateWithoutUserInput!]
    connectOrCreate: [Users_CalendarsOnUsersCreateOrConnectWithoutUserInput!]
    upsert: [Users_CalendarsOnUsersUpsertWithWhereUniqueWithoutUserInput!]
    createMany: Users_CalendarsOnUsersCreateManyUserInputEnvelope
    set: [Users_CalendarsOnUsersWhereUniqueInput!]
    disconnect: [Users_CalendarsOnUsersWhereUniqueInput!]
    delete: [Users_CalendarsOnUsersWhereUniqueInput!]
    connect: [Users_CalendarsOnUsersWhereUniqueInput!]
    update: [Users_CalendarsOnUsersUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [Users_CalendarsOnUsersUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [Users_CalendarsOnUsersScalarWhereInput!]
  }

  input Users_UserUpdateManyWithoutContactedByNestedInput {
    create: [Users_UserCreateWithoutContactedByInput!]
    connectOrCreate: [Users_UserCreateOrConnectWithoutContactedByInput!]
    upsert: [Users_UserUpsertWithWhereUniqueWithoutContactedByInput!]
    set: [Users_UserWhereUniqueInput!]
    disconnect: [Users_UserWhereUniqueInput!]
    delete: [Users_UserWhereUniqueInput!]
    connect: [Users_UserWhereUniqueInput!]
    update: [Users_UserUpdateWithWhereUniqueWithoutContactedByInput!]
    updateMany: [Users_UserUpdateManyWithWhereWithoutContactedByInput!]
    deleteMany: [Users_UserScalarWhereInput!]
  }

  input Users_UserUpdateManyWithoutContactedNestedInput {
    create: [Users_UserCreateWithoutContactedInput!]
    connectOrCreate: [Users_UserCreateOrConnectWithoutContactedInput!]
    upsert: [Users_UserUpsertWithWhereUniqueWithoutContactedInput!]
    set: [Users_UserWhereUniqueInput!]
    disconnect: [Users_UserWhereUniqueInput!]
    delete: [Users_UserWhereUniqueInput!]
    connect: [Users_UserWhereUniqueInput!]
    update: [Users_UserUpdateWithWhereUniqueWithoutContactedInput!]
    updateMany: [Users_UserUpdateManyWithWhereWithoutContactedInput!]
    deleteMany: [Users_UserScalarWhereInput!]
  }

  input IntFieldUpdateOperationsInput {
    set: Int
    increment: Int
    decrement: Int
    multiply: Int
    divide: Int
  }

  input Users_ProfileUncheckedUpdateOneWithoutUserNestedInput {
    create: Users_ProfileUncheckedCreateWithoutUserInput
    connectOrCreate: Users_ProfileCreateOrConnectWithoutUserInput
    upsert: Users_ProfileUpsertWithoutUserInput
    disconnect: Users_ProfileWhereInput
    delete: Users_ProfileWhereInput
    connect: Users_ProfileWhereUniqueInput
    update: Users_ProfileUpdateWithoutUserInput
  }

  input Users_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput {
    create: [Users_UsersOnTeamsCreateWithoutUserInput!]
    connectOrCreate: [Users_UsersOnTeamsCreateOrConnectWithoutUserInput!]
    upsert: [Users_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput!]
    createMany: Users_UsersOnTeamsCreateManyUserInputEnvelope
    set: [Users_UsersOnTeamsWhereUniqueInput!]
    disconnect: [Users_UsersOnTeamsWhereUniqueInput!]
    delete: [Users_UsersOnTeamsWhereUniqueInput!]
    connect: [Users_UsersOnTeamsWhereUniqueInput!]
    update: [Users_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [Users_UsersOnTeamsUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [Users_UsersOnTeamsScalarWhereInput!]
  }

  input Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput {
    create: [Users_CalendarsOnUsersCreateWithoutUserInput!]
    connectOrCreate: [Users_CalendarsOnUsersCreateOrConnectWithoutUserInput!]
    upsert: [Users_CalendarsOnUsersUpsertWithWhereUniqueWithoutUserInput!]
    createMany: Users_CalendarsOnUsersCreateManyUserInputEnvelope
    set: [Users_CalendarsOnUsersWhereUniqueInput!]
    disconnect: [Users_CalendarsOnUsersWhereUniqueInput!]
    delete: [Users_CalendarsOnUsersWhereUniqueInput!]
    connect: [Users_CalendarsOnUsersWhereUniqueInput!]
    update: [Users_CalendarsOnUsersUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [Users_CalendarsOnUsersUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [Users_CalendarsOnUsersScalarWhereInput!]
  }

  input Users_UserUncheckedUpdateManyWithoutContactedByNestedInput {
    create: [Users_UserCreateWithoutContactedByInput!]
    connectOrCreate: [Users_UserCreateOrConnectWithoutContactedByInput!]
    upsert: [Users_UserUpsertWithWhereUniqueWithoutContactedByInput!]
    set: [Users_UserWhereUniqueInput!]
    disconnect: [Users_UserWhereUniqueInput!]
    delete: [Users_UserWhereUniqueInput!]
    connect: [Users_UserWhereUniqueInput!]
    update: [Users_UserUpdateWithWhereUniqueWithoutContactedByInput!]
    updateMany: [Users_UserUpdateManyWithWhereWithoutContactedByInput!]
    deleteMany: [Users_UserScalarWhereInput!]
  }

  input Users_UserUncheckedUpdateManyWithoutContactedNestedInput {
    create: [Users_UserCreateWithoutContactedInput!]
    connectOrCreate: [Users_UserCreateOrConnectWithoutContactedInput!]
    upsert: [Users_UserUpsertWithWhereUniqueWithoutContactedInput!]
    set: [Users_UserWhereUniqueInput!]
    disconnect: [Users_UserWhereUniqueInput!]
    delete: [Users_UserWhereUniqueInput!]
    connect: [Users_UserWhereUniqueInput!]
    update: [Users_UserUpdateWithWhereUniqueWithoutContactedInput!]
    updateMany: [Users_UserUpdateManyWithWhereWithoutContactedInput!]
    deleteMany: [Users_UserScalarWhereInput!]
  }

  input Users_UserCreateNestedOneWithoutProfileInput {
    create: Users_UserUncheckedCreateWithoutProfileInput
    connectOrCreate: Users_UserCreateOrConnectWithoutProfileInput
    connect: Users_UserWhereUniqueInput
  }

  input Users_UserUpdateOneRequiredWithoutProfileNestedInput {
    create: Users_UserUncheckedCreateWithoutProfileInput
    connectOrCreate: Users_UserCreateOrConnectWithoutProfileInput
    upsert: Users_UserUpsertWithoutProfileInput
    connect: Users_UserWhereUniqueInput
    update: Users_UserUpdateWithoutProfileInput
  }

  input NullableDateTimeFieldUpdateOperationsInput {
    set: DateTime
  }

  input Users_TeamCreateNestedOneWithoutUsersInput {
    create: Users_TeamUncheckedCreateWithoutUsersInput
    connectOrCreate: Users_TeamCreateOrConnectWithoutUsersInput
    connect: Users_TeamWhereUniqueInput
  }

  input Users_UserCreateNestedOneWithoutTeamsInput {
    create: Users_UserUncheckedCreateWithoutTeamsInput
    connectOrCreate: Users_UserCreateOrConnectWithoutTeamsInput
    connect: Users_UserWhereUniqueInput
  }

  input Users_TeamUpdateOneRequiredWithoutUsersNestedInput {
    create: Users_TeamUncheckedCreateWithoutUsersInput
    connectOrCreate: Users_TeamCreateOrConnectWithoutUsersInput
    upsert: Users_TeamUpsertWithoutUsersInput
    connect: Users_TeamWhereUniqueInput
    update: Users_TeamUpdateWithoutUsersInput
  }

  input Users_UserUpdateOneRequiredWithoutTeamsNestedInput {
    create: Users_UserUncheckedCreateWithoutTeamsInput
    connectOrCreate: Users_UserCreateOrConnectWithoutTeamsInput
    upsert: Users_UserUpsertWithoutTeamsInput
    connect: Users_UserWhereUniqueInput
    update: Users_UserUpdateWithoutTeamsInput
  }

  input Users_UsersOnTeamsCreateNestedManyWithoutTeamInput {
    create: [Users_UsersOnTeamsCreateWithoutTeamInput!]
    connectOrCreate: [Users_UsersOnTeamsCreateOrConnectWithoutTeamInput!]
    createMany: Users_UsersOnTeamsCreateManyTeamInputEnvelope
    connect: [Users_UsersOnTeamsWhereUniqueInput!]
  }

  input Users_UsersOnTeamsUncheckedCreateNestedManyWithoutTeamInput {
    create: [Users_UsersOnTeamsCreateWithoutTeamInput!]
    connectOrCreate: [Users_UsersOnTeamsCreateOrConnectWithoutTeamInput!]
    createMany: Users_UsersOnTeamsCreateManyTeamInputEnvelope
    connect: [Users_UsersOnTeamsWhereUniqueInput!]
  }

  input Users_UsersOnTeamsUpdateManyWithoutTeamNestedInput {
    create: [Users_UsersOnTeamsCreateWithoutTeamInput!]
    connectOrCreate: [Users_UsersOnTeamsCreateOrConnectWithoutTeamInput!]
    upsert: [Users_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput!]
    createMany: Users_UsersOnTeamsCreateManyTeamInputEnvelope
    set: [Users_UsersOnTeamsWhereUniqueInput!]
    disconnect: [Users_UsersOnTeamsWhereUniqueInput!]
    delete: [Users_UsersOnTeamsWhereUniqueInput!]
    connect: [Users_UsersOnTeamsWhereUniqueInput!]
    update: [Users_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput!]
    updateMany: [Users_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput!]
    deleteMany: [Users_UsersOnTeamsScalarWhereInput!]
  }

  input Users_UsersOnTeamsUncheckedUpdateManyWithoutTeamNestedInput {
    create: [Users_UsersOnTeamsCreateWithoutTeamInput!]
    connectOrCreate: [Users_UsersOnTeamsCreateOrConnectWithoutTeamInput!]
    upsert: [Users_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput!]
    createMany: Users_UsersOnTeamsCreateManyTeamInputEnvelope
    set: [Users_UsersOnTeamsWhereUniqueInput!]
    disconnect: [Users_UsersOnTeamsWhereUniqueInput!]
    delete: [Users_UsersOnTeamsWhereUniqueInput!]
    connect: [Users_UsersOnTeamsWhereUniqueInput!]
    update: [Users_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput!]
    updateMany: [Users_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput!]
    deleteMany: [Users_UsersOnTeamsScalarWhereInput!]
  }

  input Users_CalendarCreateNestedOneWithoutCalendarEventsInput {
    create: Users_CalendarUncheckedCreateWithoutCalendarEventsInput
    connectOrCreate: Users_CalendarCreateOrConnectWithoutCalendarEventsInput
    connect: Users_CalendarWhereUniqueInput
  }

  input BoolFieldUpdateOperationsInput {
    set: Boolean
  }

  input Users_CalendarUpdateOneRequiredWithoutCalendarEventsNestedInput {
    create: Users_CalendarUncheckedCreateWithoutCalendarEventsInput
    connectOrCreate: Users_CalendarCreateOrConnectWithoutCalendarEventsInput
    upsert: Users_CalendarUpsertWithoutCalendarEventsInput
    connect: Users_CalendarWhereUniqueInput
    update: Users_CalendarUpdateWithoutCalendarEventsInput
  }

  input Users_UserCreateNestedOneWithoutCalendarsInput {
    create: Users_UserUncheckedCreateWithoutCalendarsInput
    connectOrCreate: Users_UserCreateOrConnectWithoutCalendarsInput
    connect: Users_UserWhereUniqueInput
  }

  input Users_CalendarCreateNestedOneWithoutUsersInput {
    create: Users_CalendarUncheckedCreateWithoutUsersInput
    connectOrCreate: Users_CalendarCreateOrConnectWithoutUsersInput
    connect: Users_CalendarWhereUniqueInput
  }

  input Users_UserUpdateOneRequiredWithoutCalendarsNestedInput {
    create: Users_UserUncheckedCreateWithoutCalendarsInput
    connectOrCreate: Users_UserCreateOrConnectWithoutCalendarsInput
    upsert: Users_UserUpsertWithoutCalendarsInput
    connect: Users_UserWhereUniqueInput
    update: Users_UserUpdateWithoutCalendarsInput
  }

  input Users_CalendarUpdateOneRequiredWithoutUsersNestedInput {
    create: Users_CalendarUncheckedCreateWithoutUsersInput
    connectOrCreate: Users_CalendarCreateOrConnectWithoutUsersInput
    upsert: Users_CalendarUpsertWithoutUsersInput
    connect: Users_CalendarWhereUniqueInput
    update: Users_CalendarUpdateWithoutUsersInput
  }

  input Users_CalendarsOnUsersCreateNestedManyWithoutCalendarInput {
    create: [Users_CalendarsOnUsersCreateWithoutCalendarInput!]
    connectOrCreate: [Users_CalendarsOnUsersCreateOrConnectWithoutCalendarInput!]
    createMany: Users_CalendarsOnUsersCreateManyCalendarInputEnvelope
    connect: [Users_CalendarsOnUsersWhereUniqueInput!]
  }

  input Users_CalendarEventCreateNestedManyWithoutCalendarInput {
    create: [Users_CalendarEventCreateWithoutCalendarInput!]
    connectOrCreate: [Users_CalendarEventCreateOrConnectWithoutCalendarInput!]
    createMany: Users_CalendarEventCreateManyCalendarInputEnvelope
    connect: [Users_CalendarEventWhereUniqueInput!]
  }

  input Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarInput {
    create: [Users_CalendarsOnUsersCreateWithoutCalendarInput!]
    connectOrCreate: [Users_CalendarsOnUsersCreateOrConnectWithoutCalendarInput!]
    createMany: Users_CalendarsOnUsersCreateManyCalendarInputEnvelope
    connect: [Users_CalendarsOnUsersWhereUniqueInput!]
  }

  input Users_CalendarEventUncheckedCreateNestedManyWithoutCalendarInput {
    create: [Users_CalendarEventCreateWithoutCalendarInput!]
    connectOrCreate: [Users_CalendarEventCreateOrConnectWithoutCalendarInput!]
    createMany: Users_CalendarEventCreateManyCalendarInputEnvelope
    connect: [Users_CalendarEventWhereUniqueInput!]
  }

  input Users_CalendarsOnUsersUpdateManyWithoutCalendarNestedInput {
    create: [Users_CalendarsOnUsersCreateWithoutCalendarInput!]
    connectOrCreate: [Users_CalendarsOnUsersCreateOrConnectWithoutCalendarInput!]
    upsert: [Users_CalendarsOnUsersUpsertWithWhereUniqueWithoutCalendarInput!]
    createMany: Users_CalendarsOnUsersCreateManyCalendarInputEnvelope
    set: [Users_CalendarsOnUsersWhereUniqueInput!]
    disconnect: [Users_CalendarsOnUsersWhereUniqueInput!]
    delete: [Users_CalendarsOnUsersWhereUniqueInput!]
    connect: [Users_CalendarsOnUsersWhereUniqueInput!]
    update: [Users_CalendarsOnUsersUpdateWithWhereUniqueWithoutCalendarInput!]
    updateMany: [Users_CalendarsOnUsersUpdateManyWithWhereWithoutCalendarInput!]
    deleteMany: [Users_CalendarsOnUsersScalarWhereInput!]
  }

  input Users_CalendarEventUpdateManyWithoutCalendarNestedInput {
    create: [Users_CalendarEventCreateWithoutCalendarInput!]
    connectOrCreate: [Users_CalendarEventCreateOrConnectWithoutCalendarInput!]
    upsert: [Users_CalendarEventUpsertWithWhereUniqueWithoutCalendarInput!]
    createMany: Users_CalendarEventCreateManyCalendarInputEnvelope
    set: [Users_CalendarEventWhereUniqueInput!]
    disconnect: [Users_CalendarEventWhereUniqueInput!]
    delete: [Users_CalendarEventWhereUniqueInput!]
    connect: [Users_CalendarEventWhereUniqueInput!]
    update: [Users_CalendarEventUpdateWithWhereUniqueWithoutCalendarInput!]
    updateMany: [Users_CalendarEventUpdateManyWithWhereWithoutCalendarInput!]
    deleteMany: [Users_CalendarEventScalarWhereInput!]
  }

  input Users_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarNestedInput {
    create: [Users_CalendarsOnUsersCreateWithoutCalendarInput!]
    connectOrCreate: [Users_CalendarsOnUsersCreateOrConnectWithoutCalendarInput!]
    upsert: [Users_CalendarsOnUsersUpsertWithWhereUniqueWithoutCalendarInput!]
    createMany: Users_CalendarsOnUsersCreateManyCalendarInputEnvelope
    set: [Users_CalendarsOnUsersWhereUniqueInput!]
    disconnect: [Users_CalendarsOnUsersWhereUniqueInput!]
    delete: [Users_CalendarsOnUsersWhereUniqueInput!]
    connect: [Users_CalendarsOnUsersWhereUniqueInput!]
    update: [Users_CalendarsOnUsersUpdateWithWhereUniqueWithoutCalendarInput!]
    updateMany: [Users_CalendarsOnUsersUpdateManyWithWhereWithoutCalendarInput!]
    deleteMany: [Users_CalendarsOnUsersScalarWhereInput!]
  }

  input Users_CalendarEventUncheckedUpdateManyWithoutCalendarNestedInput {
    create: [Users_CalendarEventCreateWithoutCalendarInput!]
    connectOrCreate: [Users_CalendarEventCreateOrConnectWithoutCalendarInput!]
    upsert: [Users_CalendarEventUpsertWithWhereUniqueWithoutCalendarInput!]
    createMany: Users_CalendarEventCreateManyCalendarInputEnvelope
    set: [Users_CalendarEventWhereUniqueInput!]
    disconnect: [Users_CalendarEventWhereUniqueInput!]
    delete: [Users_CalendarEventWhereUniqueInput!]
    connect: [Users_CalendarEventWhereUniqueInput!]
    update: [Users_CalendarEventUpdateWithWhereUniqueWithoutCalendarInput!]
    updateMany: [Users_CalendarEventUpdateManyWithWhereWithoutCalendarInput!]
    deleteMany: [Users_CalendarEventScalarWhereInput!]
  }

  input NestedIntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input NestedDateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input NestedStringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableFilter
  }

  input NestedStringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input NestedIntWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedFloatFilter
    _sum: NestedIntFilter
    _min: NestedIntFilter
    _max: NestedIntFilter
  }

  input NestedFloatFilter {
    equals: Float
    in: [Float!]
    notIn: [Float!]
    lt: Float
    lte: Float
    gt: Float
    gte: Float
    not: NestedFloatFilter
  }

  input NestedDateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input NestedStringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input NestedIntNullableFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableFilter
  }

  input NestedStringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input NestedJsonNullableFilter {
    equals: Json
    path: [String!]
    string_contains: String
    string_starts_with: String
    string_ends_with: String
    array_contains: Json
    array_starts_with: Json
    array_ends_with: Json
    lt: Json
    lte: Json
    gt: Json
    gte: Json
    not: Json
  }

  input NestedDateTimeNullableFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeNullableFilter
  }

  input NestedDateTimeNullableWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedDateTimeNullableFilter
    _max: NestedDateTimeNullableFilter
  }

  input NestedBoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input NestedBoolWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedBoolFilter
    _max: NestedBoolFilter
  }

  input Users_ProfileCreateWithoutUserInput {
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Users_ProfileUncheckedCreateWithoutUserInput {
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Users_ProfileCreateOrConnectWithoutUserInput {
    where: Users_ProfileWhereUniqueInput!
    create: Users_ProfileUncheckedCreateWithoutUserInput!
  }

  input Users_UsersOnTeamsCreateWithoutUserInput {
    team: Users_TeamCreateNestedOneWithoutUsersInput!
    assignedAt: DateTime
  }

  input Users_UsersOnTeamsUncheckedCreateWithoutUserInput {
    teamName: String!
    assignedAt: DateTime
  }

  input Users_UsersOnTeamsCreateOrConnectWithoutUserInput {
    where: Users_UsersOnTeamsWhereUniqueInput!
    create: Users_UsersOnTeamsUncheckedCreateWithoutUserInput!
  }

  input Users_UsersOnTeamsCreateManyUserInputEnvelope {
    data: [Users_UsersOnTeamsCreateManyUserInput!]!
    skipDuplicates: Boolean
  }

  input Users_CalendarsOnUsersCreateWithoutUserInput {
    calendar: Users_CalendarCreateNestedOneWithoutUsersInput!
  }

  input Users_CalendarsOnUsersUncheckedCreateWithoutUserInput {
    calendarId: Int!
  }

  input Users_CalendarsOnUsersCreateOrConnectWithoutUserInput {
    where: Users_CalendarsOnUsersWhereUniqueInput!
    create: Users_CalendarsOnUsersUncheckedCreateWithoutUserInput!
  }

  input Users_CalendarsOnUsersCreateManyUserInputEnvelope {
    data: [Users_CalendarsOnUsersCreateManyUserInput!]!
    skipDuplicates: Boolean
  }

  input Users_UserCreateWithoutContactedByInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Users_ProfileCreateNestedOneWithoutUserInput
    teams: Users_UsersOnTeamsCreateNestedManyWithoutUserInput
    calendars: Users_CalendarsOnUsersCreateNestedManyWithoutUserInput
    contacted: Users_UserCreateNestedManyWithoutContactedByInput
  }

  input Users_UserUncheckedCreateWithoutContactedByInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Users_ProfileUncheckedCreateNestedOneWithoutUserInput
    teams: Users_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput
    calendars: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput
    contacted: Users_UserUncheckedCreateNestedManyWithoutContactedByInput
  }

  input Users_UserCreateOrConnectWithoutContactedByInput {
    where: Users_UserWhereUniqueInput!
    create: Users_UserUncheckedCreateWithoutContactedByInput!
  }

  input Users_UserCreateWithoutContactedInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Users_ProfileCreateNestedOneWithoutUserInput
    teams: Users_UsersOnTeamsCreateNestedManyWithoutUserInput
    calendars: Users_CalendarsOnUsersCreateNestedManyWithoutUserInput
    contactedBy: Users_UserCreateNestedManyWithoutContactedInput
  }

  input Users_UserUncheckedCreateWithoutContactedInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Users_ProfileUncheckedCreateNestedOneWithoutUserInput
    teams: Users_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput
    calendars: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput
    contactedBy: Users_UserUncheckedCreateNestedManyWithoutContactedInput
  }

  input Users_UserCreateOrConnectWithoutContactedInput {
    where: Users_UserWhereUniqueInput!
    create: Users_UserUncheckedCreateWithoutContactedInput!
  }

  input Users_ProfileUpsertWithoutUserInput {
    update: Users_ProfileUncheckedUpdateWithoutUserInput!
    create: Users_ProfileUncheckedCreateWithoutUserInput!
    where: Users_ProfileWhereInput
  }

  input Users_ProfileUpdateToOneWithWhereWithoutUserInput {
    where: Users_ProfileWhereInput
    data: Users_ProfileUncheckedUpdateWithoutUserInput!
  }

  input Users_ProfileUpdateWithoutUserInput {
    location: NullableStringFieldUpdateOperationsInput
    joiningDate: NullableDateTimeFieldUpdateOperationsInput
    businessPhone: NullableStringFieldUpdateOperationsInput
    mobilePhone: NullableStringFieldUpdateOperationsInput
    kakaoTalkId: NullableStringFieldUpdateOperationsInput
    designation: NullableStringFieldUpdateOperationsInput
    profileImg: NullableStringFieldUpdateOperationsInput
    designationIcon: NullableStringFieldUpdateOperationsInput
    coverImg: NullableStringFieldUpdateOperationsInput
  }

  input Users_ProfileUncheckedUpdateWithoutUserInput {
    location: NullableStringFieldUpdateOperationsInput
    joiningDate: NullableDateTimeFieldUpdateOperationsInput
    businessPhone: NullableStringFieldUpdateOperationsInput
    mobilePhone: NullableStringFieldUpdateOperationsInput
    kakaoTalkId: NullableStringFieldUpdateOperationsInput
    designation: NullableStringFieldUpdateOperationsInput
    profileImg: NullableStringFieldUpdateOperationsInput
    designationIcon: NullableStringFieldUpdateOperationsInput
    coverImg: NullableStringFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput {
    where: Users_UsersOnTeamsWhereUniqueInput!
    update: Users_UsersOnTeamsUncheckedUpdateWithoutUserInput!
    create: Users_UsersOnTeamsUncheckedCreateWithoutUserInput!
  }

  input Users_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput {
    where: Users_UsersOnTeamsWhereUniqueInput!
    data: Users_UsersOnTeamsUncheckedUpdateWithoutUserInput!
  }

  input Users_UsersOnTeamsUpdateManyWithWhereWithoutUserInput {
    where: Users_UsersOnTeamsScalarWhereInput!
    data: Users_UsersOnTeamsUncheckedUpdateManyWithoutTeamsInput!
  }

  input Users_UsersOnTeamsScalarWhereInput {
    AND: [Users_UsersOnTeamsScalarWhereInput!]
    OR: [Users_UsersOnTeamsScalarWhereInput!]
    NOT: [Users_UsersOnTeamsScalarWhereInput!]
    teamName: StringFilter
    userId: IntFilter
    assignedAt: DateTimeFilter
  }

  input Users_CalendarsOnUsersUpsertWithWhereUniqueWithoutUserInput {
    where: Users_CalendarsOnUsersWhereUniqueInput!
    update: Users_CalendarsOnUsersUncheckedUpdateWithoutUserInput!
    create: Users_CalendarsOnUsersUncheckedCreateWithoutUserInput!
  }

  input Users_CalendarsOnUsersUpdateWithWhereUniqueWithoutUserInput {
    where: Users_CalendarsOnUsersWhereUniqueInput!
    data: Users_CalendarsOnUsersUncheckedUpdateWithoutUserInput!
  }

  input Users_CalendarsOnUsersUpdateManyWithWhereWithoutUserInput {
    where: Users_CalendarsOnUsersScalarWhereInput!
    data: Users_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarsInput!
  }

  input Users_CalendarsOnUsersScalarWhereInput {
    AND: [Users_CalendarsOnUsersScalarWhereInput!]
    OR: [Users_CalendarsOnUsersScalarWhereInput!]
    NOT: [Users_CalendarsOnUsersScalarWhereInput!]
    userId: IntFilter
    calendarId: IntFilter
  }

  input Users_UserUpsertWithWhereUniqueWithoutContactedByInput {
    where: Users_UserWhereUniqueInput!
    update: Users_UserUncheckedUpdateWithoutContactedByInput!
    create: Users_UserUncheckedCreateWithoutContactedByInput!
  }

  input Users_UserUpdateWithWhereUniqueWithoutContactedByInput {
    where: Users_UserWhereUniqueInput!
    data: Users_UserUncheckedUpdateWithoutContactedByInput!
  }

  input Users_UserUpdateManyWithWhereWithoutContactedByInput {
    where: Users_UserScalarWhereInput!
    data: Users_UserUncheckedUpdateManyWithoutContactedInput!
  }

  input Users_UserScalarWhereInput {
    AND: [Users_UserScalarWhereInput!]
    OR: [Users_UserScalarWhereInput!]
    NOT: [Users_UserScalarWhereInput!]
    id: IntFilter
    createdAt: DateTimeFilter
    username: StringNullableFilter
    password: StringNullableFilter
    email: StringFilter
    roles: StringNullableListFilter
    googleId: StringNullableFilter
    googleProfile: JsonNullableFilter
    lastName: StringNullableFilter
    firstName: StringNullableFilter
  }

  input Users_UserUpsertWithWhereUniqueWithoutContactedInput {
    where: Users_UserWhereUniqueInput!
    update: Users_UserUncheckedUpdateWithoutContactedInput!
    create: Users_UserUncheckedCreateWithoutContactedInput!
  }

  input Users_UserUpdateWithWhereUniqueWithoutContactedInput {
    where: Users_UserWhereUniqueInput!
    data: Users_UserUncheckedUpdateWithoutContactedInput!
  }

  input Users_UserUpdateManyWithWhereWithoutContactedInput {
    where: Users_UserScalarWhereInput!
    data: Users_UserUncheckedUpdateManyWithoutContactedByInput!
  }

  input Users_UserCreateWithoutProfileInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    teams: Users_UsersOnTeamsCreateNestedManyWithoutUserInput
    calendars: Users_CalendarsOnUsersCreateNestedManyWithoutUserInput
    contacted: Users_UserCreateNestedManyWithoutContactedByInput
    contactedBy: Users_UserCreateNestedManyWithoutContactedInput
  }

  input Users_UserUncheckedCreateWithoutProfileInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    teams: Users_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput
    calendars: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput
    contacted: Users_UserUncheckedCreateNestedManyWithoutContactedByInput
    contactedBy: Users_UserUncheckedCreateNestedManyWithoutContactedInput
  }

  input Users_UserCreateOrConnectWithoutProfileInput {
    where: Users_UserWhereUniqueInput!
    create: Users_UserUncheckedCreateWithoutProfileInput!
  }

  input Users_UserUpsertWithoutProfileInput {
    update: Users_UserUncheckedUpdateWithoutProfileInput!
    create: Users_UserUncheckedCreateWithoutProfileInput!
    where: Users_UserWhereInput
  }

  input Users_UserUpdateToOneWithWhereWithoutProfileInput {
    where: Users_UserWhereInput
    data: Users_UserUncheckedUpdateWithoutProfileInput!
  }

  input Users_UserUpdateWithoutProfileInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
    teams: Users_UsersOnTeamsUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput
    contacted: Users_UserUpdateManyWithoutContactedByNestedInput
    contactedBy: Users_UserUpdateManyWithoutContactedNestedInput
  }

  input Users_UserUncheckedUpdateWithoutProfileInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
    teams: Users_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    contacted: Users_UserUncheckedUpdateManyWithoutContactedByNestedInput
    contactedBy: Users_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Users_TeamCreateWithoutUsersInput {
    teamName: String!
    teamType: String
    teamIcon: String
  }

  input Users_TeamUncheckedCreateWithoutUsersInput {
    teamName: String!
    teamType: String
    teamIcon: String
  }

  input Users_TeamCreateOrConnectWithoutUsersInput {
    where: Users_TeamWhereUniqueInput!
    create: Users_TeamUncheckedCreateWithoutUsersInput!
  }

  input Users_UserCreateWithoutTeamsInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Users_ProfileCreateNestedOneWithoutUserInput
    calendars: Users_CalendarsOnUsersCreateNestedManyWithoutUserInput
    contacted: Users_UserCreateNestedManyWithoutContactedByInput
    contactedBy: Users_UserCreateNestedManyWithoutContactedInput
  }

  input Users_UserUncheckedCreateWithoutTeamsInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Users_ProfileUncheckedCreateNestedOneWithoutUserInput
    calendars: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput
    contacted: Users_UserUncheckedCreateNestedManyWithoutContactedByInput
    contactedBy: Users_UserUncheckedCreateNestedManyWithoutContactedInput
  }

  input Users_UserCreateOrConnectWithoutTeamsInput {
    where: Users_UserWhereUniqueInput!
    create: Users_UserUncheckedCreateWithoutTeamsInput!
  }

  input Users_TeamUpsertWithoutUsersInput {
    update: Users_TeamUncheckedUpdateWithoutUsersInput!
    create: Users_TeamUncheckedCreateWithoutUsersInput!
    where: Users_TeamWhereInput
  }

  input Users_TeamUpdateToOneWithWhereWithoutUsersInput {
    where: Users_TeamWhereInput
    data: Users_TeamUncheckedUpdateWithoutUsersInput!
  }

  input Users_TeamUpdateWithoutUsersInput {
    teamName: StringFieldUpdateOperationsInput
    teamType: NullableStringFieldUpdateOperationsInput
    teamIcon: NullableStringFieldUpdateOperationsInput
  }

  input Users_TeamUncheckedUpdateWithoutUsersInput {
    teamName: StringFieldUpdateOperationsInput
    teamType: NullableStringFieldUpdateOperationsInput
    teamIcon: NullableStringFieldUpdateOperationsInput
  }

  input Users_UserUpsertWithoutTeamsInput {
    update: Users_UserUncheckedUpdateWithoutTeamsInput!
    create: Users_UserUncheckedCreateWithoutTeamsInput!
    where: Users_UserWhereInput
  }

  input Users_UserUpdateToOneWithWhereWithoutTeamsInput {
    where: Users_UserWhereInput
    data: Users_UserUncheckedUpdateWithoutTeamsInput!
  }

  input Users_UserUpdateWithoutTeamsInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUpdateOneWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput
    contacted: Users_UserUpdateManyWithoutContactedByNestedInput
    contactedBy: Users_UserUpdateManyWithoutContactedNestedInput
  }

  input Users_UserUncheckedUpdateWithoutTeamsInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUncheckedUpdateOneWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    contacted: Users_UserUncheckedUpdateManyWithoutContactedByNestedInput
    contactedBy: Users_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Users_UsersOnTeamsCreateWithoutTeamInput {
    user: Users_UserCreateNestedOneWithoutTeamsInput!
    assignedAt: DateTime
  }

  input Users_UsersOnTeamsUncheckedCreateWithoutTeamInput {
    userId: Int!
    assignedAt: DateTime
  }

  input Users_UsersOnTeamsCreateOrConnectWithoutTeamInput {
    where: Users_UsersOnTeamsWhereUniqueInput!
    create: Users_UsersOnTeamsUncheckedCreateWithoutTeamInput!
  }

  input Users_UsersOnTeamsCreateManyTeamInputEnvelope {
    data: [Users_UsersOnTeamsCreateManyTeamInput!]!
    skipDuplicates: Boolean
  }

  input Users_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput {
    where: Users_UsersOnTeamsWhereUniqueInput!
    update: Users_UsersOnTeamsUncheckedUpdateWithoutTeamInput!
    create: Users_UsersOnTeamsUncheckedCreateWithoutTeamInput!
  }

  input Users_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput {
    where: Users_UsersOnTeamsWhereUniqueInput!
    data: Users_UsersOnTeamsUncheckedUpdateWithoutTeamInput!
  }

  input Users_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput {
    where: Users_UsersOnTeamsScalarWhereInput!
    data: Users_UsersOnTeamsUncheckedUpdateManyWithoutUsersInput!
  }

  input Users_CalendarCreateWithoutCalendarEventsInput {
    calendarType: String!
    users: Users_CalendarsOnUsersCreateNestedManyWithoutCalendarInput
  }

  input Users_CalendarUncheckedCreateWithoutCalendarEventsInput {
    id: Int
    calendarType: String!
    users: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarInput
  }

  input Users_CalendarCreateOrConnectWithoutCalendarEventsInput {
    where: Users_CalendarWhereUniqueInput!
    create: Users_CalendarUncheckedCreateWithoutCalendarEventsInput!
  }

  input Users_CalendarUpsertWithoutCalendarEventsInput {
    update: Users_CalendarUncheckedUpdateWithoutCalendarEventsInput!
    create: Users_CalendarUncheckedCreateWithoutCalendarEventsInput!
    where: Users_CalendarWhereInput
  }

  input Users_CalendarUpdateToOneWithWhereWithoutCalendarEventsInput {
    where: Users_CalendarWhereInput
    data: Users_CalendarUncheckedUpdateWithoutCalendarEventsInput!
  }

  input Users_CalendarUpdateWithoutCalendarEventsInput {
    calendarType: StringFieldUpdateOperationsInput
    users: Users_CalendarsOnUsersUpdateManyWithoutCalendarNestedInput
  }

  input Users_CalendarUncheckedUpdateWithoutCalendarEventsInput {
    id: IntFieldUpdateOperationsInput
    calendarType: StringFieldUpdateOperationsInput
    users: Users_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarNestedInput
  }

  input Users_UserCreateWithoutCalendarsInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Users_ProfileCreateNestedOneWithoutUserInput
    teams: Users_UsersOnTeamsCreateNestedManyWithoutUserInput
    contacted: Users_UserCreateNestedManyWithoutContactedByInput
    contactedBy: Users_UserCreateNestedManyWithoutContactedInput
  }

  input Users_UserUncheckedCreateWithoutCalendarsInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Users_ProfileUncheckedCreateNestedOneWithoutUserInput
    teams: Users_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput
    contacted: Users_UserUncheckedCreateNestedManyWithoutContactedByInput
    contactedBy: Users_UserUncheckedCreateNestedManyWithoutContactedInput
  }

  input Users_UserCreateOrConnectWithoutCalendarsInput {
    where: Users_UserWhereUniqueInput!
    create: Users_UserUncheckedCreateWithoutCalendarsInput!
  }

  input Users_CalendarCreateWithoutUsersInput {
    calendarType: String!
    calendarEvents: Users_CalendarEventCreateNestedManyWithoutCalendarInput
  }

  input Users_CalendarUncheckedCreateWithoutUsersInput {
    id: Int
    calendarType: String!
    calendarEvents: Users_CalendarEventUncheckedCreateNestedManyWithoutCalendarInput
  }

  input Users_CalendarCreateOrConnectWithoutUsersInput {
    where: Users_CalendarWhereUniqueInput!
    create: Users_CalendarUncheckedCreateWithoutUsersInput!
  }

  input Users_UserUpsertWithoutCalendarsInput {
    update: Users_UserUncheckedUpdateWithoutCalendarsInput!
    create: Users_UserUncheckedCreateWithoutCalendarsInput!
    where: Users_UserWhereInput
  }

  input Users_UserUpdateToOneWithWhereWithoutCalendarsInput {
    where: Users_UserWhereInput
    data: Users_UserUncheckedUpdateWithoutCalendarsInput!
  }

  input Users_UserUpdateWithoutCalendarsInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUpdateOneWithoutUserNestedInput
    teams: Users_UsersOnTeamsUpdateManyWithoutUserNestedInput
    contacted: Users_UserUpdateManyWithoutContactedByNestedInput
    contactedBy: Users_UserUpdateManyWithoutContactedNestedInput
  }

  input Users_UserUncheckedUpdateWithoutCalendarsInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUncheckedUpdateOneWithoutUserNestedInput
    teams: Users_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    contacted: Users_UserUncheckedUpdateManyWithoutContactedByNestedInput
    contactedBy: Users_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Users_CalendarUpsertWithoutUsersInput {
    update: Users_CalendarUncheckedUpdateWithoutUsersInput!
    create: Users_CalendarUncheckedCreateWithoutUsersInput!
    where: Users_CalendarWhereInput
  }

  input Users_CalendarUpdateToOneWithWhereWithoutUsersInput {
    where: Users_CalendarWhereInput
    data: Users_CalendarUncheckedUpdateWithoutUsersInput!
  }

  input Users_CalendarUpdateWithoutUsersInput {
    calendarType: StringFieldUpdateOperationsInput
    calendarEvents: Users_CalendarEventUpdateManyWithoutCalendarNestedInput
  }

  input Users_CalendarUncheckedUpdateWithoutUsersInput {
    id: IntFieldUpdateOperationsInput
    calendarType: StringFieldUpdateOperationsInput
    calendarEvents: Users_CalendarEventUncheckedUpdateManyWithoutCalendarNestedInput
  }

  input Users_CalendarsOnUsersCreateWithoutCalendarInput {
    user: Users_UserCreateNestedOneWithoutCalendarsInput!
  }

  input Users_CalendarsOnUsersUncheckedCreateWithoutCalendarInput {
    userId: Int!
  }

  input Users_CalendarsOnUsersCreateOrConnectWithoutCalendarInput {
    where: Users_CalendarsOnUsersWhereUniqueInput!
    create: Users_CalendarsOnUsersUncheckedCreateWithoutCalendarInput!
  }

  input Users_CalendarsOnUsersCreateManyCalendarInputEnvelope {
    data: [Users_CalendarsOnUsersCreateManyCalendarInput!]!
    skipDuplicates: Boolean
  }

  input Users_CalendarEventCreateWithoutCalendarInput {
    url: String
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
  }

  input Users_CalendarEventUncheckedCreateWithoutCalendarInput {
    id: Int
    url: String
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
  }

  input Users_CalendarEventCreateOrConnectWithoutCalendarInput {
    where: Users_CalendarEventWhereUniqueInput!
    create: Users_CalendarEventUncheckedCreateWithoutCalendarInput!
  }

  input Users_CalendarEventCreateManyCalendarInputEnvelope {
    data: [Users_CalendarEventCreateManyCalendarInput!]!
    skipDuplicates: Boolean
  }

  input Users_CalendarsOnUsersUpsertWithWhereUniqueWithoutCalendarInput {
    where: Users_CalendarsOnUsersWhereUniqueInput!
    update: Users_CalendarsOnUsersUncheckedUpdateWithoutCalendarInput!
    create: Users_CalendarsOnUsersUncheckedCreateWithoutCalendarInput!
  }

  input Users_CalendarsOnUsersUpdateWithWhereUniqueWithoutCalendarInput {
    where: Users_CalendarsOnUsersWhereUniqueInput!
    data: Users_CalendarsOnUsersUncheckedUpdateWithoutCalendarInput!
  }

  input Users_CalendarsOnUsersUpdateManyWithWhereWithoutCalendarInput {
    where: Users_CalendarsOnUsersScalarWhereInput!
    data: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUsersInput!
  }

  input Users_CalendarEventUpsertWithWhereUniqueWithoutCalendarInput {
    where: Users_CalendarEventWhereUniqueInput!
    update: Users_CalendarEventUncheckedUpdateWithoutCalendarInput!
    create: Users_CalendarEventUncheckedCreateWithoutCalendarInput!
  }

  input Users_CalendarEventUpdateWithWhereUniqueWithoutCalendarInput {
    where: Users_CalendarEventWhereUniqueInput!
    data: Users_CalendarEventUncheckedUpdateWithoutCalendarInput!
  }

  input Users_CalendarEventUpdateManyWithWhereWithoutCalendarInput {
    where: Users_CalendarEventScalarWhereInput!
    data: Users_CalendarEventUncheckedUpdateManyWithoutCalendarEventsInput!
  }

  input Users_CalendarEventScalarWhereInput {
    AND: [Users_CalendarEventScalarWhereInput!]
    OR: [Users_CalendarEventScalarWhereInput!]
    NOT: [Users_CalendarEventScalarWhereInput!]
    id: IntFilter
    url: StringNullableFilter
    title: StringFilter
    start: DateTimeFilter
    end: DateTimeFilter
    allDay: BoolFilter
    calendarId: IntFilter
  }

  input Users_UsersOnTeamsCreateManyUserInput {
    teamName: String!
    assignedAt: DateTime
  }

  input Users_CalendarsOnUsersCreateManyUserInput {
    calendarId: Int!
  }

  input Users_UsersOnTeamsUpdateWithoutUserInput {
    team: Users_TeamUpdateOneRequiredWithoutUsersNestedInput
    assignedAt: DateTimeFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsUncheckedUpdateWithoutUserInput {
    teamName: StringFieldUpdateOperationsInput
    assignedAt: DateTimeFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsUncheckedUpdateManyWithoutTeamsInput {
    teamName: StringFieldUpdateOperationsInput
    assignedAt: DateTimeFieldUpdateOperationsInput
  }

  input Users_CalendarsOnUsersUpdateWithoutUserInput {
    calendar: Users_CalendarUpdateOneRequiredWithoutUsersNestedInput
  }

  input Users_CalendarsOnUsersUncheckedUpdateWithoutUserInput {
    calendarId: IntFieldUpdateOperationsInput
  }

  input Users_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarsInput {
    calendarId: IntFieldUpdateOperationsInput
  }

  input Users_UserUpdateWithoutContactedByInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUpdateOneWithoutUserNestedInput
    teams: Users_UsersOnTeamsUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput
    contacted: Users_UserUpdateManyWithoutContactedByNestedInput
  }

  input Users_UserUncheckedUpdateWithoutContactedByInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUncheckedUpdateOneWithoutUserNestedInput
    teams: Users_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    contacted: Users_UserUncheckedUpdateManyWithoutContactedByNestedInput
  }

  input Users_UserUncheckedUpdateManyWithoutContactedInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
  }

  input Users_UserUpdateWithoutContactedInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUpdateOneWithoutUserNestedInput
    teams: Users_UsersOnTeamsUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput
    contactedBy: Users_UserUpdateManyWithoutContactedNestedInput
  }

  input Users_UserUncheckedUpdateWithoutContactedInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUncheckedUpdateOneWithoutUserNestedInput
    teams: Users_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    contactedBy: Users_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Users_UserUncheckedUpdateManyWithoutContactedByInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    lastName: NullableStringFieldUpdateOperationsInput
    firstName: NullableStringFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsCreateManyTeamInput {
    userId: Int!
    assignedAt: DateTime
  }

  input Users_UsersOnTeamsUpdateWithoutTeamInput {
    user: Users_UserUpdateOneRequiredWithoutTeamsNestedInput
    assignedAt: DateTimeFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsUncheckedUpdateWithoutTeamInput {
    userId: IntFieldUpdateOperationsInput
    assignedAt: DateTimeFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsUncheckedUpdateManyWithoutUsersInput {
    userId: IntFieldUpdateOperationsInput
    assignedAt: DateTimeFieldUpdateOperationsInput
  }

  input Users_CalendarsOnUsersCreateManyCalendarInput {
    userId: Int!
  }

  input Users_CalendarEventCreateManyCalendarInput {
    id: Int
    url: String
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
  }

  input Users_CalendarsOnUsersUpdateWithoutCalendarInput {
    user: Users_UserUpdateOneRequiredWithoutCalendarsNestedInput
  }

  input Users_CalendarsOnUsersUncheckedUpdateWithoutCalendarInput {
    userId: IntFieldUpdateOperationsInput
  }

  input Users_CalendarsOnUsersUncheckedUpdateManyWithoutUsersInput {
    userId: IntFieldUpdateOperationsInput
  }

  input Users_CalendarEventUpdateWithoutCalendarInput {
    url: NullableStringFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    start: DateTimeFieldUpdateOperationsInput
    end: DateTimeFieldUpdateOperationsInput
    allDay: BoolFieldUpdateOperationsInput
  }

  input Users_CalendarEventUncheckedUpdateWithoutCalendarInput {
    id: IntFieldUpdateOperationsInput
    url: NullableStringFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    start: DateTimeFieldUpdateOperationsInput
    end: DateTimeFieldUpdateOperationsInput
    allDay: BoolFieldUpdateOperationsInput
  }

  input Users_CalendarEventUncheckedUpdateManyWithoutCalendarEventsInput {
    id: IntFieldUpdateOperationsInput
    url: NullableStringFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    start: DateTimeFieldUpdateOperationsInput
    end: DateTimeFieldUpdateOperationsInput
    allDay: BoolFieldUpdateOperationsInput
  }

  type AggregateUser @shareable {
    _count: UserCountAggregateOutputType
    _avg: UserAvgAggregateOutputType
    _sum: UserSumAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type UserGroupByOutputType
    @key(fields: "id")
    @key(fields: "email")
    @shareable {
    id: Int!
    createdAt: DateTime!
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    _count: UserCountAggregateOutputType
    _avg: UserAvgAggregateOutputType
    _sum: UserSumAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type AggregateProfile @shareable {
    _count: ProfileCountAggregateOutputType
    _avg: ProfileAvgAggregateOutputType
    _sum: ProfileSumAggregateOutputType
    _min: ProfileMinAggregateOutputType
    _max: ProfileMaxAggregateOutputType
  }

  type ProfileGroupByOutputType @key(fields: "userId") @shareable {
    userId: Int!
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
    _count: ProfileCountAggregateOutputType
    _avg: ProfileAvgAggregateOutputType
    _sum: ProfileSumAggregateOutputType
    _min: ProfileMinAggregateOutputType
    _max: ProfileMaxAggregateOutputType
  }

  type AggregateUsersOnTeams @shareable {
    _count: UsersOnTeamsCountAggregateOutputType
    _avg: UsersOnTeamsAvgAggregateOutputType
    _sum: UsersOnTeamsSumAggregateOutputType
    _min: UsersOnTeamsMinAggregateOutputType
    _max: UsersOnTeamsMaxAggregateOutputType
  }

  type UsersOnTeamsGroupByOutputType
    @key(fields: "teamName userId")
    @shareable {
    teamName: String!
    userId: Int!
    assignedAt: DateTime!
    _count: UsersOnTeamsCountAggregateOutputType
    _avg: UsersOnTeamsAvgAggregateOutputType
    _sum: UsersOnTeamsSumAggregateOutputType
    _min: UsersOnTeamsMinAggregateOutputType
    _max: UsersOnTeamsMaxAggregateOutputType
  }

  type AggregateTeam @shareable {
    _count: TeamCountAggregateOutputType
    _min: TeamMinAggregateOutputType
    _max: TeamMaxAggregateOutputType
  }

  type TeamGroupByOutputType @key(fields: "teamName") @shareable {
    teamName: String!
    teamType: String
    teamIcon: String
    _count: TeamCountAggregateOutputType
    _min: TeamMinAggregateOutputType
    _max: TeamMaxAggregateOutputType
  }

  type AggregateCalendarEvent @shareable {
    _count: CalendarEventCountAggregateOutputType
    _avg: CalendarEventAvgAggregateOutputType
    _sum: CalendarEventSumAggregateOutputType
    _min: CalendarEventMinAggregateOutputType
    _max: CalendarEventMaxAggregateOutputType
  }

  type CalendarEventGroupByOutputType @key(fields: "id") @shareable {
    id: Int!
    url: String
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
    calendarId: Int!
    _count: CalendarEventCountAggregateOutputType
    _avg: CalendarEventAvgAggregateOutputType
    _sum: CalendarEventSumAggregateOutputType
    _min: CalendarEventMinAggregateOutputType
    _max: CalendarEventMaxAggregateOutputType
  }

  type AggregateCalendarsOnUsers @shareable {
    _count: CalendarsOnUsersCountAggregateOutputType
    _avg: CalendarsOnUsersAvgAggregateOutputType
    _sum: CalendarsOnUsersSumAggregateOutputType
    _min: CalendarsOnUsersMinAggregateOutputType
    _max: CalendarsOnUsersMaxAggregateOutputType
  }

  type CalendarsOnUsersGroupByOutputType
    @key(fields: "userId calendarId")
    @shareable {
    userId: Int!
    calendarId: Int!
    _count: CalendarsOnUsersCountAggregateOutputType
    _avg: CalendarsOnUsersAvgAggregateOutputType
    _sum: CalendarsOnUsersSumAggregateOutputType
    _min: CalendarsOnUsersMinAggregateOutputType
    _max: CalendarsOnUsersMaxAggregateOutputType
  }

  type AggregateCalendar @shareable {
    _count: CalendarCountAggregateOutputType
    _avg: CalendarAvgAggregateOutputType
    _sum: CalendarSumAggregateOutputType
    _min: CalendarMinAggregateOutputType
    _max: CalendarMaxAggregateOutputType
  }

  type CalendarGroupByOutputType @key(fields: "id") @shareable {
    id: Int!
    calendarType: String!
    _count: CalendarCountAggregateOutputType
    _avg: CalendarAvgAggregateOutputType
    _sum: CalendarSumAggregateOutputType
    _min: CalendarMinAggregateOutputType
    _max: CalendarMaxAggregateOutputType
  }

  type UserCountOutputType @shareable {
    teams: Int!
    calendars: Int!
    contacted: Int!
    contactedBy: Int!
  }

  type UserCountAggregateOutputType
    @key(fields: "id")
    @key(fields: "email")
    @shareable {
    id: Int!
    createdAt: Int!
    username: Int!
    password: Int!
    email: Int!
    roles: Int!
    googleId: Int!
    googleProfile: Int!
    lastName: Int!
    firstName: Int!
    _all: Int!
  }

  type UserAvgAggregateOutputType @key(fields: "id") @shareable {
    id: Float
  }

  type UserSumAggregateOutputType @key(fields: "id") @shareable {
    id: Int
  }

  type UserMinAggregateOutputType
    @key(fields: "id")
    @key(fields: "email")
    @shareable {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    googleId: String
    lastName: String
    firstName: String
  }

  type UserMaxAggregateOutputType
    @key(fields: "id")
    @key(fields: "email")
    @shareable {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    googleId: String
    lastName: String
    firstName: String
  }

  type ProfileCountAggregateOutputType @key(fields: "userId") @shareable {
    userId: Int!
    location: Int!
    joiningDate: Int!
    businessPhone: Int!
    mobilePhone: Int!
    kakaoTalkId: Int!
    designation: Int!
    profileImg: Int!
    designationIcon: Int!
    coverImg: Int!
    _all: Int!
  }

  type ProfileAvgAggregateOutputType @key(fields: "userId") @shareable {
    userId: Float
  }

  type ProfileSumAggregateOutputType @key(fields: "userId") @shareable {
    userId: Int
  }

  type ProfileMinAggregateOutputType @key(fields: "userId") @shareable {
    userId: Int
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  type ProfileMaxAggregateOutputType @key(fields: "userId") @shareable {
    userId: Int
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  type UsersOnTeamsCountAggregateOutputType
    @key(fields: "teamName userId")
    @shareable {
    teamName: Int!
    userId: Int!
    assignedAt: Int!
    _all: Int!
  }

  type UsersOnTeamsAvgAggregateOutputType @shareable {
    userId: Float
  }

  type UsersOnTeamsSumAggregateOutputType @shareable {
    userId: Int
  }

  type UsersOnTeamsMinAggregateOutputType
    @key(fields: "teamName userId")
    @shareable {
    teamName: String
    userId: Int
    assignedAt: DateTime
  }

  type UsersOnTeamsMaxAggregateOutputType
    @key(fields: "teamName userId")
    @shareable {
    teamName: String
    userId: Int
    assignedAt: DateTime
  }

  type TeamCountOutputType @shareable {
    users: Int!
  }

  type TeamCountAggregateOutputType @key(fields: "teamName") @shareable {
    teamName: Int!
    teamType: Int!
    teamIcon: Int!
    _all: Int!
  }

  type TeamMinAggregateOutputType @key(fields: "teamName") @shareable {
    teamName: String
    teamType: String
    teamIcon: String
  }

  type TeamMaxAggregateOutputType @key(fields: "teamName") @shareable {
    teamName: String
    teamType: String
    teamIcon: String
  }

  type CalendarEventCountAggregateOutputType @key(fields: "id") @shareable {
    id: Int!
    url: Int!
    title: Int!
    start: Int!
    end: Int!
    allDay: Int!
    calendarId: Int!
    _all: Int!
  }

  type CalendarEventAvgAggregateOutputType @key(fields: "id") @shareable {
    id: Float
    calendarId: Float
  }

  type CalendarEventSumAggregateOutputType @key(fields: "id") @shareable {
    id: Int
    calendarId: Int
  }

  type CalendarEventMinAggregateOutputType @key(fields: "id") @shareable {
    id: Int
    url: String
    title: String
    start: DateTime
    end: DateTime
    allDay: Boolean
    calendarId: Int
  }

  type CalendarEventMaxAggregateOutputType @key(fields: "id") @shareable {
    id: Int
    url: String
    title: String
    start: DateTime
    end: DateTime
    allDay: Boolean
    calendarId: Int
  }

  type CalendarsOnUsersCountAggregateOutputType
    @key(fields: "userId calendarId")
    @shareable {
    userId: Int!
    calendarId: Int!
    _all: Int!
  }

  type CalendarsOnUsersAvgAggregateOutputType
    @key(fields: "userId calendarId")
    @shareable {
    userId: Float
    calendarId: Float
  }

  type CalendarsOnUsersSumAggregateOutputType
    @key(fields: "userId calendarId")
    @shareable {
    userId: Int
    calendarId: Int
  }

  type CalendarsOnUsersMinAggregateOutputType
    @key(fields: "userId calendarId")
    @shareable {
    userId: Int
    calendarId: Int
  }

  type CalendarsOnUsersMaxAggregateOutputType
    @key(fields: "userId calendarId")
    @shareable {
    userId: Int
    calendarId: Int
  }

  type CalendarCountOutputType @shareable {
    users: Int!
    calendarEvents: Int!
  }

  type CalendarCountAggregateOutputType @key(fields: "id") @shareable {
    id: Int!
    calendarType: Int!
    _all: Int!
  }

  type CalendarAvgAggregateOutputType @key(fields: "id") @shareable {
    id: Float
  }

  type CalendarSumAggregateOutputType @key(fields: "id") @shareable {
    id: Int
  }

  type CalendarMinAggregateOutputType @key(fields: "id") @shareable {
    id: Int
    calendarType: String
  }

  type CalendarMaxAggregateOutputType @key(fields: "id") @shareable {
    id: Int
    calendarType: String
  }

  type TransactionSucceeded @shareable {
    transactionSucceeded: Boolean!
  }

  input Users_createOneUserInput {
    data: Users_UserCreateInput
  }

  input Users_upsertOneUserInput {
    where: Users_UserWhereUniqueInput
    create: Users_UserCreateInput
    update: Users_UserUpdateInput
  }

  input Users_createManyUserInput {
    data: [Users_UserCreateManyInput]
    skipDuplicates: Boolean
  }

  input Users_deleteOneUserInput {
    where: Users_UserWhereUniqueInput
  }

  input Users_updateOneUserInput {
    data: Users_UserUpdateInput
    where: Users_UserWhereUniqueInput
  }

  input Users_updateManyUserInput {
    data: Users_UserUpdateManyMutationInput
    where: Users_UserWhereInput
  }

  input Users_deleteManyUserInput {
    where: Users_UserWhereInput
  }

  input Users_createOneProfileInput {
    data: Users_ProfileCreateInput
  }

  input Users_upsertOneProfileInput {
    where: Users_ProfileWhereUniqueInput
    create: Users_ProfileCreateInput
    update: Users_ProfileUpdateInput
  }

  input Users_createManyProfileInput {
    data: [Users_ProfileCreateManyInput]
    skipDuplicates: Boolean
  }

  input Users_deleteOneProfileInput {
    where: Users_ProfileWhereUniqueInput
  }

  input Users_updateOneProfileInput {
    data: Users_ProfileUpdateInput
    where: Users_ProfileWhereUniqueInput
  }

  input Users_updateManyProfileInput {
    data: Users_ProfileUpdateManyMutationInput
    where: Users_ProfileWhereInput
  }

  input Users_deleteManyProfileInput {
    where: Users_ProfileWhereInput
  }

  input Users_createOneUsersOnTeamsInput {
    data: Users_UsersOnTeamsCreateInput
  }

  input Users_upsertOneUsersOnTeamsInput {
    where: Users_UsersOnTeamsWhereUniqueInput
    create: Users_UsersOnTeamsCreateInput
    update: Users_UsersOnTeamsUpdateInput
  }

  input Users_createManyUsersOnTeamsInput {
    data: [Users_UsersOnTeamsCreateManyInput]
    skipDuplicates: Boolean
  }

  input Users_deleteOneUsersOnTeamsInput {
    where: Users_UsersOnTeamsWhereUniqueInput
  }

  input Users_updateOneUsersOnTeamsInput {
    data: Users_UsersOnTeamsUpdateInput
    where: Users_UsersOnTeamsWhereUniqueInput
  }

  input Users_updateManyUsersOnTeamsInput {
    data: Users_UsersOnTeamsUpdateManyMutationInput
    where: Users_UsersOnTeamsWhereInput
  }

  input Users_deleteManyUsersOnTeamsInput {
    where: Users_UsersOnTeamsWhereInput
  }

  input Users_createOneTeamInput {
    data: Users_TeamCreateInput
  }

  input Users_upsertOneTeamInput {
    where: Users_TeamWhereUniqueInput
    create: Users_TeamCreateInput
    update: Users_TeamUpdateInput
  }

  input Users_createManyTeamInput {
    data: [Users_TeamCreateManyInput]
    skipDuplicates: Boolean
  }

  input Users_deleteOneTeamInput {
    where: Users_TeamWhereUniqueInput
  }

  input Users_updateOneTeamInput {
    data: Users_TeamUpdateInput
    where: Users_TeamWhereUniqueInput
  }

  input Users_updateManyTeamInput {
    data: Users_TeamUpdateManyMutationInput
    where: Users_TeamWhereInput
  }

  input Users_deleteManyTeamInput {
    where: Users_TeamWhereInput
  }

  input Users_createOneCalendarEventInput {
    data: Users_CalendarEventCreateInput
  }

  input Users_upsertOneCalendarEventInput {
    where: Users_CalendarEventWhereUniqueInput
    create: Users_CalendarEventCreateInput
    update: Users_CalendarEventUpdateInput
  }

  input Users_createManyCalendarEventInput {
    data: [Users_CalendarEventCreateManyInput]
    skipDuplicates: Boolean
  }

  input Users_deleteOneCalendarEventInput {
    where: Users_CalendarEventWhereUniqueInput
  }

  input Users_updateOneCalendarEventInput {
    data: Users_CalendarEventUpdateInput
    where: Users_CalendarEventWhereUniqueInput
  }

  input Users_updateManyCalendarEventInput {
    data: Users_CalendarEventUpdateManyMutationInput
    where: Users_CalendarEventWhereInput
  }

  input Users_deleteManyCalendarEventInput {
    where: Users_CalendarEventWhereInput
  }

  input Users_createOneCalendarsOnUsersInput {
    data: Users_CalendarsOnUsersCreateInput
  }

  input Users_upsertOneCalendarsOnUsersInput {
    where: Users_CalendarsOnUsersWhereUniqueInput
    create: Users_CalendarsOnUsersCreateInput
    update: Users_CalendarsOnUsersUpdateInput
  }

  input Users_createManyCalendarsOnUsersInput {
    data: [Users_CalendarsOnUsersCreateManyInput]
    skipDuplicates: Boolean
  }

  input Users_deleteOneCalendarsOnUsersInput {
    where: Users_CalendarsOnUsersWhereUniqueInput
  }

  input Users_updateOneCalendarsOnUsersInput {
    data: Users_CalendarsOnUsersUpdateInput
    where: Users_CalendarsOnUsersWhereUniqueInput
  }

  input Users_deleteManyCalendarsOnUsersInput {
    where: Users_CalendarsOnUsersWhereInput
  }

  input Users_createOneCalendarInput {
    data: Users_CalendarCreateInput
  }

  input Users_upsertOneCalendarInput {
    where: Users_CalendarWhereUniqueInput
    create: Users_CalendarCreateInput
    update: Users_CalendarUpdateInput
  }

  input Users_createManyCalendarInput {
    data: [Users_CalendarCreateManyInput]
    skipDuplicates: Boolean
  }

  input Users_deleteOneCalendarInput {
    where: Users_CalendarWhereUniqueInput
  }

  input Users_updateOneCalendarInput {
    data: Users_CalendarUpdateInput
    where: Users_CalendarWhereUniqueInput
  }

  input Users_updateManyCalendarInput {
    data: Users_CalendarUpdateManyMutationInput
    where: Users_CalendarWhereInput
  }

  input Users_deleteManyCalendarInput {
    where: Users_CalendarWhereInput
  }

  input Users_transactionalMutationInput {
    Users_createOneUser: Users_createOneUserInput
    Users_upsertOneUser: Users_upsertOneUserInput
    Users_createManyUser: Users_createManyUserInput
    Users_deleteOneUser: Users_deleteOneUserInput
    Users_updateOneUser: Users_updateOneUserInput
    Users_updateManyUser: Users_updateManyUserInput
    Users_deleteManyUser: Users_deleteManyUserInput
    Users_createOneProfile: Users_createOneProfileInput
    Users_upsertOneProfile: Users_upsertOneProfileInput
    Users_createManyProfile: Users_createManyProfileInput
    Users_deleteOneProfile: Users_deleteOneProfileInput
    Users_updateOneProfile: Users_updateOneProfileInput
    Users_updateManyProfile: Users_updateManyProfileInput
    Users_deleteManyProfile: Users_deleteManyProfileInput
    Users_createOneUsersOnTeams: Users_createOneUsersOnTeamsInput
    Users_upsertOneUsersOnTeams: Users_upsertOneUsersOnTeamsInput
    Users_createManyUsersOnTeams: Users_createManyUsersOnTeamsInput
    Users_deleteOneUsersOnTeams: Users_deleteOneUsersOnTeamsInput
    Users_updateOneUsersOnTeams: Users_updateOneUsersOnTeamsInput
    Users_updateManyUsersOnTeams: Users_updateManyUsersOnTeamsInput
    Users_deleteManyUsersOnTeams: Users_deleteManyUsersOnTeamsInput
    Users_createOneTeam: Users_createOneTeamInput
    Users_upsertOneTeam: Users_upsertOneTeamInput
    Users_createManyTeam: Users_createManyTeamInput
    Users_deleteOneTeam: Users_deleteOneTeamInput
    Users_updateOneTeam: Users_updateOneTeamInput
    Users_updateManyTeam: Users_updateManyTeamInput
    Users_deleteManyTeam: Users_deleteManyTeamInput
    Users_createOneCalendarEvent: Users_createOneCalendarEventInput
    Users_upsertOneCalendarEvent: Users_upsertOneCalendarEventInput
    Users_createManyCalendarEvent: Users_createManyCalendarEventInput
    Users_deleteOneCalendarEvent: Users_deleteOneCalendarEventInput
    Users_updateOneCalendarEvent: Users_updateOneCalendarEventInput
    Users_updateManyCalendarEvent: Users_updateManyCalendarEventInput
    Users_deleteManyCalendarEvent: Users_deleteManyCalendarEventInput
    Users_createOneCalendarsOnUsers: Users_createOneCalendarsOnUsersInput
    Users_upsertOneCalendarsOnUsers: Users_upsertOneCalendarsOnUsersInput
    Users_createManyCalendarsOnUsers: Users_createManyCalendarsOnUsersInput
    Users_deleteOneCalendarsOnUsers: Users_deleteOneCalendarsOnUsersInput
    Users_updateOneCalendarsOnUsers: Users_updateOneCalendarsOnUsersInput
    Users_deleteManyCalendarsOnUsers: Users_deleteManyCalendarsOnUsersInput
    Users_createOneCalendar: Users_createOneCalendarInput
    Users_upsertOneCalendar: Users_upsertOneCalendarInput
    Users_createManyCalendar: Users_createManyCalendarInput
    Users_deleteOneCalendar: Users_deleteOneCalendarInput
    Users_updateOneCalendar: Users_updateOneCalendarInput
    Users_updateManyCalendar: Users_updateManyCalendarInput
    Users_deleteManyCalendar: Users_deleteManyCalendarInput
  }
`;
