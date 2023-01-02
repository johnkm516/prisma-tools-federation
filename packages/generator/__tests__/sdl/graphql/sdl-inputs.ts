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
    id: Users_IntFilter
    createdAt: Users_DateTimeFilter
    username: Users_StringNullableFilter
    password: Users_StringNullableFilter
    email: Users_StringFilter
    roles: Users_StringNullableListFilter
    googleId: Users_StringNullableFilter
    googleProfile: Users_JsonNullableFilter
    lastName: Users_StringNullableFilter
    firstName: Users_StringNullableFilter
    profile: Users_ProfileWhereInput
    teams: Users_UsersOnTeamsListRelationFilter
    calendars: Users_CalendarsOnUsersListRelationFilter
    contacted: Users_UserListRelationFilter
    contactedBy: Users_UserListRelationFilter
  }

  input Users_UserOrderByWithRelationInput {
    id: Users_SortOrder
    createdAt: Users_SortOrder
    username: Users_SortOrder
    password: Users_SortOrder
    email: Users_SortOrder
    roles: Users_SortOrder
    googleId: Users_SortOrder
    googleProfile: Users_SortOrder
    lastName: Users_SortOrder
    firstName: Users_SortOrder
    profile: Users_ProfileOrderByWithRelationInput
    teams: Users_UsersOnTeamsOrderByRelationAggregateInput
    calendars: Users_CalendarsOnUsersOrderByRelationAggregateInput
    contacted: Users_UserOrderByRelationAggregateInput
    contactedBy: Users_UserOrderByRelationAggregateInput
  }

  input Users_UserWhereUniqueInput {
    id: Users_Int
    username: Users_String
    email: Users_String
    googleId: Users_String
    AND: [Users_UserWhereInput!]
    OR: [Users_UserWhereInput!]
    NOT: [Users_UserWhereInput!]
    createdAt: Users_DateTimeFilter
    password: Users_StringNullableFilter
    roles: Users_StringNullableListFilter
    googleProfile: Users_JsonNullableFilter
    lastName: Users_StringNullableFilter
    firstName: Users_StringNullableFilter
    profile: Users_ProfileWhereInput
    teams: Users_UsersOnTeamsListRelationFilter
    calendars: Users_CalendarsOnUsersListRelationFilter
    contacted: Users_UserListRelationFilter
    contactedBy: Users_UserListRelationFilter
  }

  input Users_UserOrderByWithAggregationInput {
    id: Users_SortOrder
    createdAt: Users_SortOrder
    username: Users_SortOrder
    password: Users_SortOrder
    email: Users_SortOrder
    roles: Users_SortOrder
    googleId: Users_SortOrder
    googleProfile: Users_SortOrder
    lastName: Users_SortOrder
    firstName: Users_SortOrder
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
    id: Users_IntWithAggregatesFilter
    createdAt: Users_DateTimeWithAggregatesFilter
    username: Users_StringNullableWithAggregatesFilter
    password: Users_StringNullableWithAggregatesFilter
    email: Users_StringWithAggregatesFilter
    roles: Users_StringNullableListFilter
    googleId: Users_StringNullableWithAggregatesFilter
    googleProfile: Users_JsonNullableWithAggregatesFilter
    lastName: Users_StringNullableWithAggregatesFilter
    firstName: Users_StringNullableWithAggregatesFilter
  }

  input Users_ProfileWhereInput {
    AND: [Users_ProfileWhereInput!]
    OR: [Users_ProfileWhereInput!]
    NOT: [Users_ProfileWhereInput!]
    userId: Users_IntFilter
    user: Users_UserWhereInput
    location: Users_StringNullableFilter
    joiningDate: Users_DateTimeNullableFilter
    businessPhone: Users_StringNullableFilter
    mobilePhone: Users_StringNullableFilter
    kakaoTalkId: Users_StringNullableFilter
    designation: Users_StringNullableFilter
    profileImg: Users_StringNullableFilter
    designationIcon: Users_StringNullableFilter
    coverImg: Users_StringNullableFilter
  }

  input Users_ProfileOrderByWithRelationInput {
    userId: Users_SortOrder
    user: Users_UserOrderByWithRelationInput
    location: Users_SortOrder
    joiningDate: Users_SortOrder
    businessPhone: Users_SortOrder
    mobilePhone: Users_SortOrder
    kakaoTalkId: Users_SortOrder
    designation: Users_SortOrder
    profileImg: Users_SortOrder
    designationIcon: Users_SortOrder
    coverImg: Users_SortOrder
  }

  input Users_ProfileWhereUniqueInput {
    userId: Users_Int
    businessPhone: Users_String
    mobilePhone: Users_String
    kakaoTalkId: Users_String
    AND: [Users_ProfileWhereInput!]
    OR: [Users_ProfileWhereInput!]
    NOT: [Users_ProfileWhereInput!]
    user: Users_UserWhereInput
    location: Users_StringNullableFilter
    joiningDate: Users_DateTimeNullableFilter
    designation: Users_StringNullableFilter
    profileImg: Users_StringNullableFilter
    designationIcon: Users_StringNullableFilter
    coverImg: Users_StringNullableFilter
  }

  input Users_ProfileOrderByWithAggregationInput {
    userId: Users_SortOrder
    location: Users_SortOrder
    joiningDate: Users_SortOrder
    businessPhone: Users_SortOrder
    mobilePhone: Users_SortOrder
    kakaoTalkId: Users_SortOrder
    designation: Users_SortOrder
    profileImg: Users_SortOrder
    designationIcon: Users_SortOrder
    coverImg: Users_SortOrder
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
    userId: Users_IntWithAggregatesFilter
    location: Users_StringNullableWithAggregatesFilter
    joiningDate: Users_DateTimeNullableWithAggregatesFilter
    businessPhone: Users_StringNullableWithAggregatesFilter
    mobilePhone: Users_StringNullableWithAggregatesFilter
    kakaoTalkId: Users_StringNullableWithAggregatesFilter
    designation: Users_StringNullableWithAggregatesFilter
    profileImg: Users_StringNullableWithAggregatesFilter
    designationIcon: Users_StringNullableWithAggregatesFilter
    coverImg: Users_StringNullableWithAggregatesFilter
  }

  input Users_UsersOnTeamsWhereInput {
    AND: [Users_UsersOnTeamsWhereInput!]
    OR: [Users_UsersOnTeamsWhereInput!]
    NOT: [Users_UsersOnTeamsWhereInput!]
    team: Users_TeamWhereInput
    teamName: Users_StringFilter
    user: Users_UserWhereInput
    userId: Users_IntFilter
    assignedAt: Users_DateTimeFilter
  }

  input Users_UsersOnTeamsOrderByWithRelationInput {
    team: Users_TeamOrderByWithRelationInput
    teamName: Users_SortOrder
    user: Users_UserOrderByWithRelationInput
    userId: Users_SortOrder
    assignedAt: Users_SortOrder
  }

  input Users_UsersOnTeamsWhereUniqueInput {
    teamName_userId: Users_UsersOnTeamsTeamNameUserIdCompoundUniqueInput
    AND: [Users_UsersOnTeamsWhereInput!]
    OR: [Users_UsersOnTeamsWhereInput!]
    NOT: [Users_UsersOnTeamsWhereInput!]
    team: Users_TeamWhereInput
    teamName: Users_StringFilter
    user: Users_UserWhereInput
    userId: Users_IntFilter
    assignedAt: Users_DateTimeFilter
  }

  input Users_UsersOnTeamsOrderByWithAggregationInput {
    teamName: Users_SortOrder
    userId: Users_SortOrder
    assignedAt: Users_SortOrder
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
    teamName: Users_StringWithAggregatesFilter
    userId: Users_IntWithAggregatesFilter
    assignedAt: Users_DateTimeWithAggregatesFilter
  }

  input Users_TeamWhereInput {
    AND: [Users_TeamWhereInput!]
    OR: [Users_TeamWhereInput!]
    NOT: [Users_TeamWhereInput!]
    teamName: Users_StringFilter
    users: Users_UsersOnTeamsListRelationFilter
    teamType: Users_StringNullableFilter
    teamIcon: Users_StringNullableFilter
  }

  input Users_TeamOrderByWithRelationInput {
    teamName: Users_SortOrder
    users: Users_UsersOnTeamsOrderByRelationAggregateInput
    teamType: Users_SortOrder
    teamIcon: Users_SortOrder
  }

  input Users_TeamWhereUniqueInput {
    teamName: Users_String
    AND: [Users_TeamWhereInput!]
    OR: [Users_TeamWhereInput!]
    NOT: [Users_TeamWhereInput!]
    users: Users_UsersOnTeamsListRelationFilter
    teamType: Users_StringNullableFilter
    teamIcon: Users_StringNullableFilter
  }

  input Users_TeamOrderByWithAggregationInput {
    teamName: Users_SortOrder
    teamType: Users_SortOrder
    teamIcon: Users_SortOrder
    _count: Users_TeamCountOrderByAggregateInput
    _max: Users_TeamMaxOrderByAggregateInput
    _min: Users_TeamMinOrderByAggregateInput
  }

  input Users_TeamScalarWhereWithAggregatesInput {
    AND: [Users_TeamScalarWhereWithAggregatesInput!]
    OR: [Users_TeamScalarWhereWithAggregatesInput!]
    NOT: [Users_TeamScalarWhereWithAggregatesInput!]
    teamName: Users_StringWithAggregatesFilter
    teamType: Users_StringNullableWithAggregatesFilter
    teamIcon: Users_StringNullableWithAggregatesFilter
  }

  input Users_CalendarEventWhereInput {
    AND: [Users_CalendarEventWhereInput!]
    OR: [Users_CalendarEventWhereInput!]
    NOT: [Users_CalendarEventWhereInput!]
    id: Users_IntFilter
    url: Users_StringNullableFilter
    title: Users_StringFilter
    start: Users_DateTimeFilter
    end: Users_DateTimeFilter
    allDay: Users_BoolFilter
    calendarId: Users_IntFilter
    calendar: Users_CalendarWhereInput
  }

  input Users_CalendarEventOrderByWithRelationInput {
    id: Users_SortOrder
    url: Users_SortOrder
    title: Users_SortOrder
    start: Users_SortOrder
    end: Users_SortOrder
    allDay: Users_SortOrder
    calendarId: Users_SortOrder
    calendar: Users_CalendarOrderByWithRelationInput
  }

  input Users_CalendarEventWhereUniqueInput {
    id: Users_Int
    AND: [Users_CalendarEventWhereInput!]
    OR: [Users_CalendarEventWhereInput!]
    NOT: [Users_CalendarEventWhereInput!]
    url: Users_StringNullableFilter
    title: Users_StringFilter
    start: Users_DateTimeFilter
    end: Users_DateTimeFilter
    allDay: Users_BoolFilter
    calendarId: Users_IntFilter
    calendar: Users_CalendarWhereInput
  }

  input Users_CalendarEventOrderByWithAggregationInput {
    id: Users_SortOrder
    url: Users_SortOrder
    title: Users_SortOrder
    start: Users_SortOrder
    end: Users_SortOrder
    allDay: Users_SortOrder
    calendarId: Users_SortOrder
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
    id: Users_IntWithAggregatesFilter
    url: Users_StringNullableWithAggregatesFilter
    title: Users_StringWithAggregatesFilter
    start: Users_DateTimeWithAggregatesFilter
    end: Users_DateTimeWithAggregatesFilter
    allDay: Users_BoolWithAggregatesFilter
    calendarId: Users_IntWithAggregatesFilter
  }

  input Users_CalendarsOnUsersWhereInput {
    AND: [Users_CalendarsOnUsersWhereInput!]
    OR: [Users_CalendarsOnUsersWhereInput!]
    NOT: [Users_CalendarsOnUsersWhereInput!]
    user: Users_UserWhereInput
    userId: Users_IntFilter
    calendar: Users_CalendarWhereInput
    calendarId: Users_IntFilter
  }

  input Users_CalendarsOnUsersOrderByWithRelationInput {
    user: Users_UserOrderByWithRelationInput
    userId: Users_SortOrder
    calendar: Users_CalendarOrderByWithRelationInput
    calendarId: Users_SortOrder
  }

  input Users_CalendarsOnUsersWhereUniqueInput {
    userId_calendarId: Users_CalendarsOnUsersUserIdCalendarIdCompoundUniqueInput
    AND: [Users_CalendarsOnUsersWhereInput!]
    OR: [Users_CalendarsOnUsersWhereInput!]
    NOT: [Users_CalendarsOnUsersWhereInput!]
    user: Users_UserWhereInput
    userId: Users_IntFilter
    calendar: Users_CalendarWhereInput
    calendarId: Users_IntFilter
  }

  input Users_CalendarsOnUsersOrderByWithAggregationInput {
    userId: Users_SortOrder
    calendarId: Users_SortOrder
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
    userId: Users_IntWithAggregatesFilter
    calendarId: Users_IntWithAggregatesFilter
  }

  input Users_CalendarWhereInput {
    AND: [Users_CalendarWhereInput!]
    OR: [Users_CalendarWhereInput!]
    NOT: [Users_CalendarWhereInput!]
    id: Users_IntFilter
    calendarType: Users_StringFilter
    users: Users_CalendarsOnUsersListRelationFilter
    calendarEvents: Users_CalendarEventListRelationFilter
  }

  input Users_CalendarOrderByWithRelationInput {
    id: Users_SortOrder
    calendarType: Users_SortOrder
    users: Users_CalendarsOnUsersOrderByRelationAggregateInput
    calendarEvents: Users_CalendarEventOrderByRelationAggregateInput
  }

  input Users_CalendarWhereUniqueInput {
    id: Users_Int
    AND: [Users_CalendarWhereInput!]
    OR: [Users_CalendarWhereInput!]
    NOT: [Users_CalendarWhereInput!]
    calendarType: Users_StringFilter
    users: Users_CalendarsOnUsersListRelationFilter
    calendarEvents: Users_CalendarEventListRelationFilter
  }

  input Users_CalendarOrderByWithAggregationInput {
    id: Users_SortOrder
    calendarType: Users_SortOrder
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
    id: Users_IntWithAggregatesFilter
    calendarType: Users_StringWithAggregatesFilter
  }

  input Users_UserCreateInput {
    createdAt: Users_DateTime
    username: Users_String
    password: Users_String
    email: Users_String!
    roles: [Users_String!]
    googleId: Users_String
    googleProfile: Users_Json
    lastName: Users_String
    firstName: Users_String
    profile: Users_ProfileCreateNestedOneWithoutUserInput
    teams: Users_UsersOnTeamsCreateNestedManyWithoutUserInput
    calendars: Users_CalendarsOnUsersCreateNestedManyWithoutUserInput
    contacted: Users_UserCreateNestedManyWithoutContactedByInput
    contactedBy: Users_UserCreateNestedManyWithoutContactedInput
  }

  input Users_UserUncheckedCreateInput {
    id: Users_Int
    createdAt: Users_DateTime
    username: Users_String
    password: Users_String
    email: Users_String!
    roles: [Users_String!]
    googleId: Users_String
    googleProfile: Users_Json
    lastName: Users_String
    firstName: Users_String
    profile: Users_ProfileUncheckedCreateNestedOneWithoutUserInput
    teams: Users_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput
    calendars: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput
    contacted: Users_UserUncheckedCreateNestedManyWithoutContactedByInput
    contactedBy: Users_UserUncheckedCreateNestedManyWithoutContactedInput
  }

  input Users_UserUpdateInput {
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUpdateOneWithoutUserNestedInput
    teams: Users_UsersOnTeamsUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput
    contacted: Users_UserUpdateManyWithoutContactedByNestedInput
    contactedBy: Users_UserUpdateManyWithoutContactedNestedInput
  }

  input Users_UserUncheckedUpdateInput {
    id: Users_IntFieldUpdateOperationsInput
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUncheckedUpdateOneWithoutUserNestedInput
    teams: Users_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    contacted: Users_UserUncheckedUpdateManyWithoutContactedByNestedInput
    contactedBy: Users_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Users_UserCreateManyInput {
    id: Users_Int
    createdAt: Users_DateTime
    username: Users_String
    password: Users_String
    email: Users_String!
    roles: [Users_String!]
    googleId: Users_String
    googleProfile: Users_Json
    lastName: Users_String
    firstName: Users_String
  }

  input Users_UserUpdateManyMutationInput {
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
  }

  input Users_UserUncheckedUpdateManyInput {
    id: Users_IntFieldUpdateOperationsInput
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
  }

  input Users_ProfileCreateInput {
    user: Users_UserCreateNestedOneWithoutProfileInput!
    location: Users_String
    joiningDate: Users_DateTime
    businessPhone: Users_String
    mobilePhone: Users_String
    kakaoTalkId: Users_String
    designation: Users_String
    profileImg: Users_String
    designationIcon: Users_String
    coverImg: Users_String
  }

  input Users_ProfileUncheckedCreateInput {
    userId: Users_Int!
    location: Users_String
    joiningDate: Users_DateTime
    businessPhone: Users_String
    mobilePhone: Users_String
    kakaoTalkId: Users_String
    designation: Users_String
    profileImg: Users_String
    designationIcon: Users_String
    coverImg: Users_String
  }

  input Users_ProfileUpdateInput {
    user: Users_UserUpdateOneRequiredWithoutProfileNestedInput
    location: Users_NullableStringFieldUpdateOperationsInput
    joiningDate: Users_NullableDateTimeFieldUpdateOperationsInput
    businessPhone: Users_NullableStringFieldUpdateOperationsInput
    mobilePhone: Users_NullableStringFieldUpdateOperationsInput
    kakaoTalkId: Users_NullableStringFieldUpdateOperationsInput
    designation: Users_NullableStringFieldUpdateOperationsInput
    profileImg: Users_NullableStringFieldUpdateOperationsInput
    designationIcon: Users_NullableStringFieldUpdateOperationsInput
    coverImg: Users_NullableStringFieldUpdateOperationsInput
  }

  input Users_ProfileUncheckedUpdateInput {
    userId: Users_IntFieldUpdateOperationsInput
    location: Users_NullableStringFieldUpdateOperationsInput
    joiningDate: Users_NullableDateTimeFieldUpdateOperationsInput
    businessPhone: Users_NullableStringFieldUpdateOperationsInput
    mobilePhone: Users_NullableStringFieldUpdateOperationsInput
    kakaoTalkId: Users_NullableStringFieldUpdateOperationsInput
    designation: Users_NullableStringFieldUpdateOperationsInput
    profileImg: Users_NullableStringFieldUpdateOperationsInput
    designationIcon: Users_NullableStringFieldUpdateOperationsInput
    coverImg: Users_NullableStringFieldUpdateOperationsInput
  }

  input Users_ProfileCreateManyInput {
    userId: Users_Int!
    location: Users_String
    joiningDate: Users_DateTime
    businessPhone: Users_String
    mobilePhone: Users_String
    kakaoTalkId: Users_String
    designation: Users_String
    profileImg: Users_String
    designationIcon: Users_String
    coverImg: Users_String
  }

  input Users_ProfileUpdateManyMutationInput {
    location: Users_NullableStringFieldUpdateOperationsInput
    joiningDate: Users_NullableDateTimeFieldUpdateOperationsInput
    businessPhone: Users_NullableStringFieldUpdateOperationsInput
    mobilePhone: Users_NullableStringFieldUpdateOperationsInput
    kakaoTalkId: Users_NullableStringFieldUpdateOperationsInput
    designation: Users_NullableStringFieldUpdateOperationsInput
    profileImg: Users_NullableStringFieldUpdateOperationsInput
    designationIcon: Users_NullableStringFieldUpdateOperationsInput
    coverImg: Users_NullableStringFieldUpdateOperationsInput
  }

  input Users_ProfileUncheckedUpdateManyInput {
    userId: Users_IntFieldUpdateOperationsInput
    location: Users_NullableStringFieldUpdateOperationsInput
    joiningDate: Users_NullableDateTimeFieldUpdateOperationsInput
    businessPhone: Users_NullableStringFieldUpdateOperationsInput
    mobilePhone: Users_NullableStringFieldUpdateOperationsInput
    kakaoTalkId: Users_NullableStringFieldUpdateOperationsInput
    designation: Users_NullableStringFieldUpdateOperationsInput
    profileImg: Users_NullableStringFieldUpdateOperationsInput
    designationIcon: Users_NullableStringFieldUpdateOperationsInput
    coverImg: Users_NullableStringFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsCreateInput {
    team: Users_TeamCreateNestedOneWithoutUsersInput!
    user: Users_UserCreateNestedOneWithoutTeamsInput!
    assignedAt: Users_DateTime
  }

  input Users_UsersOnTeamsUncheckedCreateInput {
    teamName: Users_String!
    userId: Users_Int!
    assignedAt: Users_DateTime
  }

  input Users_UsersOnTeamsUpdateInput {
    team: Users_TeamUpdateOneRequiredWithoutUsersNestedInput
    user: Users_UserUpdateOneRequiredWithoutTeamsNestedInput
    assignedAt: Users_DateTimeFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsUncheckedUpdateInput {
    teamName: Users_StringFieldUpdateOperationsInput
    userId: Users_IntFieldUpdateOperationsInput
    assignedAt: Users_DateTimeFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsCreateManyInput {
    teamName: Users_String!
    userId: Users_Int!
    assignedAt: Users_DateTime
  }

  input Users_UsersOnTeamsUpdateManyMutationInput {
    assignedAt: Users_DateTimeFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsUncheckedUpdateManyInput {
    teamName: Users_StringFieldUpdateOperationsInput
    userId: Users_IntFieldUpdateOperationsInput
    assignedAt: Users_DateTimeFieldUpdateOperationsInput
  }

  input Users_TeamCreateInput {
    teamName: Users_String!
    users: Users_UsersOnTeamsCreateNestedManyWithoutTeamInput
    teamType: Users_String
    teamIcon: Users_String
  }

  input Users_TeamUncheckedCreateInput {
    teamName: Users_String!
    users: Users_UsersOnTeamsUncheckedCreateNestedManyWithoutTeamInput
    teamType: Users_String
    teamIcon: Users_String
  }

  input Users_TeamUpdateInput {
    teamName: Users_StringFieldUpdateOperationsInput
    users: Users_UsersOnTeamsUpdateManyWithoutTeamNestedInput
    teamType: Users_NullableStringFieldUpdateOperationsInput
    teamIcon: Users_NullableStringFieldUpdateOperationsInput
  }

  input Users_TeamUncheckedUpdateInput {
    teamName: Users_StringFieldUpdateOperationsInput
    users: Users_UsersOnTeamsUncheckedUpdateManyWithoutTeamNestedInput
    teamType: Users_NullableStringFieldUpdateOperationsInput
    teamIcon: Users_NullableStringFieldUpdateOperationsInput
  }

  input Users_TeamCreateManyInput {
    teamName: Users_String!
    teamType: Users_String
    teamIcon: Users_String
  }

  input Users_TeamUpdateManyMutationInput {
    teamName: Users_StringFieldUpdateOperationsInput
    teamType: Users_NullableStringFieldUpdateOperationsInput
    teamIcon: Users_NullableStringFieldUpdateOperationsInput
  }

  input Users_TeamUncheckedUpdateManyInput {
    teamName: Users_StringFieldUpdateOperationsInput
    teamType: Users_NullableStringFieldUpdateOperationsInput
    teamIcon: Users_NullableStringFieldUpdateOperationsInput
  }

  input Users_CalendarEventCreateInput {
    url: Users_String
    title: Users_String!
    start: Users_DateTime!
    end: Users_DateTime!
    allDay: Users_Boolean!
    calendar: Users_CalendarCreateNestedOneWithoutCalendarEventsInput!
  }

  input Users_CalendarEventUncheckedCreateInput {
    id: Users_Int
    url: Users_String
    title: Users_String!
    start: Users_DateTime!
    end: Users_DateTime!
    allDay: Users_Boolean!
    calendarId: Users_Int!
  }

  input Users_CalendarEventUpdateInput {
    url: Users_NullableStringFieldUpdateOperationsInput
    title: Users_StringFieldUpdateOperationsInput
    start: Users_DateTimeFieldUpdateOperationsInput
    end: Users_DateTimeFieldUpdateOperationsInput
    allDay: Users_BoolFieldUpdateOperationsInput
    calendar: Users_CalendarUpdateOneRequiredWithoutCalendarEventsNestedInput
  }

  input Users_CalendarEventUncheckedUpdateInput {
    id: Users_IntFieldUpdateOperationsInput
    url: Users_NullableStringFieldUpdateOperationsInput
    title: Users_StringFieldUpdateOperationsInput
    start: Users_DateTimeFieldUpdateOperationsInput
    end: Users_DateTimeFieldUpdateOperationsInput
    allDay: Users_BoolFieldUpdateOperationsInput
    calendarId: Users_IntFieldUpdateOperationsInput
  }

  input Users_CalendarEventCreateManyInput {
    id: Users_Int
    url: Users_String
    title: Users_String!
    start: Users_DateTime!
    end: Users_DateTime!
    allDay: Users_Boolean!
    calendarId: Users_Int!
  }

  input Users_CalendarEventUpdateManyMutationInput {
    url: Users_NullableStringFieldUpdateOperationsInput
    title: Users_StringFieldUpdateOperationsInput
    start: Users_DateTimeFieldUpdateOperationsInput
    end: Users_DateTimeFieldUpdateOperationsInput
    allDay: Users_BoolFieldUpdateOperationsInput
  }

  input Users_CalendarEventUncheckedUpdateManyInput {
    id: Users_IntFieldUpdateOperationsInput
    url: Users_NullableStringFieldUpdateOperationsInput
    title: Users_StringFieldUpdateOperationsInput
    start: Users_DateTimeFieldUpdateOperationsInput
    end: Users_DateTimeFieldUpdateOperationsInput
    allDay: Users_BoolFieldUpdateOperationsInput
    calendarId: Users_IntFieldUpdateOperationsInput
  }

  input Users_CalendarsOnUsersCreateInput {
    user: Users_UserCreateNestedOneWithoutCalendarsInput!
    calendar: Users_CalendarCreateNestedOneWithoutUsersInput!
  }

  input Users_CalendarsOnUsersUncheckedCreateInput {
    userId: Users_Int!
    calendarId: Users_Int!
  }

  input Users_CalendarsOnUsersUpdateInput {
    user: Users_UserUpdateOneRequiredWithoutCalendarsNestedInput
    calendar: Users_CalendarUpdateOneRequiredWithoutUsersNestedInput
  }

  input Users_CalendarsOnUsersUncheckedUpdateInput {
    userId: Users_IntFieldUpdateOperationsInput
    calendarId: Users_IntFieldUpdateOperationsInput
  }

  input Users_CalendarsOnUsersCreateManyInput {
    userId: Users_Int!
    calendarId: Users_Int!
  }

  input Users_CalendarsOnUsersUncheckedUpdateManyInput {
    userId: Users_IntFieldUpdateOperationsInput
    calendarId: Users_IntFieldUpdateOperationsInput
  }

  input Users_CalendarCreateInput {
    calendarType: Users_String!
    users: Users_CalendarsOnUsersCreateNestedManyWithoutCalendarInput
    calendarEvents: Users_CalendarEventCreateNestedManyWithoutCalendarInput
  }

  input Users_CalendarUncheckedCreateInput {
    id: Users_Int
    calendarType: Users_String!
    users: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarInput
    calendarEvents: Users_CalendarEventUncheckedCreateNestedManyWithoutCalendarInput
  }

  input Users_CalendarUpdateInput {
    calendarType: Users_StringFieldUpdateOperationsInput
    users: Users_CalendarsOnUsersUpdateManyWithoutCalendarNestedInput
    calendarEvents: Users_CalendarEventUpdateManyWithoutCalendarNestedInput
  }

  input Users_CalendarUncheckedUpdateInput {
    id: Users_IntFieldUpdateOperationsInput
    calendarType: Users_StringFieldUpdateOperationsInput
    users: Users_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarNestedInput
    calendarEvents: Users_CalendarEventUncheckedUpdateManyWithoutCalendarNestedInput
  }

  input Users_CalendarCreateManyInput {
    id: Users_Int
    calendarType: Users_String!
  }

  input Users_CalendarUpdateManyMutationInput {
    calendarType: Users_StringFieldUpdateOperationsInput
  }

  input Users_CalendarUncheckedUpdateManyInput {
    id: Users_IntFieldUpdateOperationsInput
    calendarType: Users_StringFieldUpdateOperationsInput
  }

  input Users_IntFilter {
    equals: Users_Int
    in: [Users_Int!]
    notIn: [Users_Int!]
    lt: Users_Int
    lte: Users_Int
    gt: Users_Int
    gte: Users_Int
    not: Users_NestedIntFilter
  }

  input Users_DateTimeFilter {
    equals: Users_DateTime
    in: [Users_DateTime!]
    notIn: [Users_DateTime!]
    lt: Users_DateTime
    lte: Users_DateTime
    gt: Users_DateTime
    gte: Users_DateTime
    not: Users_NestedDateTimeFilter
  }

  input Users_StringNullableFilter {
    equals: Users_String
    in: [Users_String!]
    notIn: [Users_String!]
    lt: Users_String
    lte: Users_String
    gt: Users_String
    gte: Users_String
    contains: Users_String
    startsWith: Users_String
    endsWith: Users_String
    mode: Users_QueryMode
    not: Users_NestedStringNullableFilter
  }

  input Users_StringFilter {
    equals: Users_String
    in: [Users_String!]
    notIn: [Users_String!]
    lt: Users_String
    lte: Users_String
    gt: Users_String
    gte: Users_String
    contains: Users_String
    startsWith: Users_String
    endsWith: Users_String
    mode: Users_QueryMode
    not: Users_NestedStringFilter
  }

  input Users_StringNullableListFilter {
    equals: [Users_String!]
    has: Users_String
    hasEvery: [Users_String!]
    hasSome: [Users_String!]
    isEmpty: Users_Boolean
  }

  input Users_JsonNullableFilter {
    equals: Users_Json
    path: [Users_String!]
    string_contains: Users_String
    string_starts_with: Users_String
    string_ends_with: Users_String
    array_contains: Users_Json
    array_starts_with: Users_Json
    array_ends_with: Users_Json
    lt: Users_Json
    lte: Users_Json
    gt: Users_Json
    gte: Users_Json
    not: Users_Json
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
    _count: Users_SortOrder
  }

  input Users_CalendarsOnUsersOrderByRelationAggregateInput {
    _count: Users_SortOrder
  }

  input Users_UserOrderByRelationAggregateInput {
    _count: Users_SortOrder
  }

  input Users_UserCountOrderByAggregateInput {
    id: Users_SortOrder
    createdAt: Users_SortOrder
    username: Users_SortOrder
    password: Users_SortOrder
    email: Users_SortOrder
    roles: Users_SortOrder
    googleId: Users_SortOrder
    googleProfile: Users_SortOrder
    lastName: Users_SortOrder
    firstName: Users_SortOrder
  }

  input Users_UserAvgOrderByAggregateInput {
    id: Users_SortOrder
  }

  input Users_UserMaxOrderByAggregateInput {
    id: Users_SortOrder
    createdAt: Users_SortOrder
    username: Users_SortOrder
    password: Users_SortOrder
    email: Users_SortOrder
    googleId: Users_SortOrder
    lastName: Users_SortOrder
    firstName: Users_SortOrder
  }

  input Users_UserMinOrderByAggregateInput {
    id: Users_SortOrder
    createdAt: Users_SortOrder
    username: Users_SortOrder
    password: Users_SortOrder
    email: Users_SortOrder
    googleId: Users_SortOrder
    lastName: Users_SortOrder
    firstName: Users_SortOrder
  }

  input Users_UserSumOrderByAggregateInput {
    id: Users_SortOrder
  }

  input Users_IntWithAggregatesFilter {
    equals: Users_Int
    in: [Users_Int!]
    notIn: [Users_Int!]
    lt: Users_Int
    lte: Users_Int
    gt: Users_Int
    gte: Users_Int
    not: Users_NestedIntWithAggregatesFilter
    _count: Users_NestedIntFilter
    _avg: Users_NestedFloatFilter
    _sum: Users_NestedIntFilter
    _min: Users_NestedIntFilter
    _max: Users_NestedIntFilter
  }

  input Users_DateTimeWithAggregatesFilter {
    equals: Users_DateTime
    in: [Users_DateTime!]
    notIn: [Users_DateTime!]
    lt: Users_DateTime
    lte: Users_DateTime
    gt: Users_DateTime
    gte: Users_DateTime
    not: Users_NestedDateTimeWithAggregatesFilter
    _count: Users_NestedIntFilter
    _min: Users_NestedDateTimeFilter
    _max: Users_NestedDateTimeFilter
  }

  input Users_StringNullableWithAggregatesFilter {
    equals: Users_String
    in: [Users_String!]
    notIn: [Users_String!]
    lt: Users_String
    lte: Users_String
    gt: Users_String
    gte: Users_String
    contains: Users_String
    startsWith: Users_String
    endsWith: Users_String
    mode: Users_QueryMode
    not: Users_NestedStringNullableWithAggregatesFilter
    _count: Users_NestedIntNullableFilter
    _min: Users_NestedStringNullableFilter
    _max: Users_NestedStringNullableFilter
  }

  input Users_StringWithAggregatesFilter {
    equals: Users_String
    in: [Users_String!]
    notIn: [Users_String!]
    lt: Users_String
    lte: Users_String
    gt: Users_String
    gte: Users_String
    contains: Users_String
    startsWith: Users_String
    endsWith: Users_String
    mode: Users_QueryMode
    not: Users_NestedStringWithAggregatesFilter
    _count: Users_NestedIntFilter
    _min: Users_NestedStringFilter
    _max: Users_NestedStringFilter
  }

  input Users_JsonNullableWithAggregatesFilter {
    equals: Users_Json
    path: [Users_String!]
    string_contains: Users_String
    string_starts_with: Users_String
    string_ends_with: Users_String
    array_contains: Users_Json
    array_starts_with: Users_Json
    array_ends_with: Users_Json
    lt: Users_Json
    lte: Users_Json
    gt: Users_Json
    gte: Users_Json
    not: Users_Json
    _count: Users_NestedIntNullableFilter
    _min: Users_NestedJsonNullableFilter
    _max: Users_NestedJsonNullableFilter
  }

  input Users_UserRelationFilter {
    is: Users_UserWhereInput
    isNot: Users_UserWhereInput
  }

  input Users_DateTimeNullableFilter {
    equals: Users_DateTime
    in: [Users_DateTime!]
    notIn: [Users_DateTime!]
    lt: Users_DateTime
    lte: Users_DateTime
    gt: Users_DateTime
    gte: Users_DateTime
    not: Users_NestedDateTimeNullableFilter
  }

  input Users_ProfileCountOrderByAggregateInput {
    userId: Users_SortOrder
    location: Users_SortOrder
    joiningDate: Users_SortOrder
    businessPhone: Users_SortOrder
    mobilePhone: Users_SortOrder
    kakaoTalkId: Users_SortOrder
    designation: Users_SortOrder
    profileImg: Users_SortOrder
    designationIcon: Users_SortOrder
    coverImg: Users_SortOrder
  }

  input Users_ProfileAvgOrderByAggregateInput {
    userId: Users_SortOrder
  }

  input Users_ProfileMaxOrderByAggregateInput {
    userId: Users_SortOrder
    location: Users_SortOrder
    joiningDate: Users_SortOrder
    businessPhone: Users_SortOrder
    mobilePhone: Users_SortOrder
    kakaoTalkId: Users_SortOrder
    designation: Users_SortOrder
    profileImg: Users_SortOrder
    designationIcon: Users_SortOrder
    coverImg: Users_SortOrder
  }

  input Users_ProfileMinOrderByAggregateInput {
    userId: Users_SortOrder
    location: Users_SortOrder
    joiningDate: Users_SortOrder
    businessPhone: Users_SortOrder
    mobilePhone: Users_SortOrder
    kakaoTalkId: Users_SortOrder
    designation: Users_SortOrder
    profileImg: Users_SortOrder
    designationIcon: Users_SortOrder
    coverImg: Users_SortOrder
  }

  input Users_ProfileSumOrderByAggregateInput {
    userId: Users_SortOrder
  }

  input Users_DateTimeNullableWithAggregatesFilter {
    equals: Users_DateTime
    in: [Users_DateTime!]
    notIn: [Users_DateTime!]
    lt: Users_DateTime
    lte: Users_DateTime
    gt: Users_DateTime
    gte: Users_DateTime
    not: Users_NestedDateTimeNullableWithAggregatesFilter
    _count: Users_NestedIntNullableFilter
    _min: Users_NestedDateTimeNullableFilter
    _max: Users_NestedDateTimeNullableFilter
  }

  input Users_TeamRelationFilter {
    is: Users_TeamWhereInput
    isNot: Users_TeamWhereInput
  }

  input Users_UsersOnTeamsTeamNameUserIdCompoundUniqueInput {
    teamName: Users_String!
    userId: Users_Int!
  }

  input Users_UsersOnTeamsCountOrderByAggregateInput {
    teamName: Users_SortOrder
    userId: Users_SortOrder
    assignedAt: Users_SortOrder
  }

  input Users_UsersOnTeamsAvgOrderByAggregateInput {
    userId: Users_SortOrder
  }

  input Users_UsersOnTeamsMaxOrderByAggregateInput {
    teamName: Users_SortOrder
    userId: Users_SortOrder
    assignedAt: Users_SortOrder
  }

  input Users_UsersOnTeamsMinOrderByAggregateInput {
    teamName: Users_SortOrder
    userId: Users_SortOrder
    assignedAt: Users_SortOrder
  }

  input Users_UsersOnTeamsSumOrderByAggregateInput {
    userId: Users_SortOrder
  }

  input Users_TeamCountOrderByAggregateInput {
    teamName: Users_SortOrder
    teamType: Users_SortOrder
    teamIcon: Users_SortOrder
  }

  input Users_TeamMaxOrderByAggregateInput {
    teamName: Users_SortOrder
    teamType: Users_SortOrder
    teamIcon: Users_SortOrder
  }

  input Users_TeamMinOrderByAggregateInput {
    teamName: Users_SortOrder
    teamType: Users_SortOrder
    teamIcon: Users_SortOrder
  }

  input Users_BoolFilter {
    equals: Users_Boolean
    not: Users_NestedBoolFilter
  }

  input Users_CalendarRelationFilter {
    is: Users_CalendarWhereInput
    isNot: Users_CalendarWhereInput
  }

  input Users_CalendarEventCountOrderByAggregateInput {
    id: Users_SortOrder
    url: Users_SortOrder
    title: Users_SortOrder
    start: Users_SortOrder
    end: Users_SortOrder
    allDay: Users_SortOrder
    calendarId: Users_SortOrder
  }

  input Users_CalendarEventAvgOrderByAggregateInput {
    id: Users_SortOrder
    calendarId: Users_SortOrder
  }

  input Users_CalendarEventMaxOrderByAggregateInput {
    id: Users_SortOrder
    url: Users_SortOrder
    title: Users_SortOrder
    start: Users_SortOrder
    end: Users_SortOrder
    allDay: Users_SortOrder
    calendarId: Users_SortOrder
  }

  input Users_CalendarEventMinOrderByAggregateInput {
    id: Users_SortOrder
    url: Users_SortOrder
    title: Users_SortOrder
    start: Users_SortOrder
    end: Users_SortOrder
    allDay: Users_SortOrder
    calendarId: Users_SortOrder
  }

  input Users_CalendarEventSumOrderByAggregateInput {
    id: Users_SortOrder
    calendarId: Users_SortOrder
  }

  input Users_BoolWithAggregatesFilter {
    equals: Users_Boolean
    not: Users_NestedBoolWithAggregatesFilter
    _count: Users_NestedIntFilter
    _min: Users_NestedBoolFilter
    _max: Users_NestedBoolFilter
  }

  input Users_CalendarsOnUsersUserIdCalendarIdCompoundUniqueInput {
    userId: Users_Int!
    calendarId: Users_Int!
  }

  input Users_CalendarsOnUsersCountOrderByAggregateInput {
    userId: Users_SortOrder
    calendarId: Users_SortOrder
  }

  input Users_CalendarsOnUsersAvgOrderByAggregateInput {
    userId: Users_SortOrder
    calendarId: Users_SortOrder
  }

  input Users_CalendarsOnUsersMaxOrderByAggregateInput {
    userId: Users_SortOrder
    calendarId: Users_SortOrder
  }

  input Users_CalendarsOnUsersMinOrderByAggregateInput {
    userId: Users_SortOrder
    calendarId: Users_SortOrder
  }

  input Users_CalendarsOnUsersSumOrderByAggregateInput {
    userId: Users_SortOrder
    calendarId: Users_SortOrder
  }

  input Users_CalendarEventListRelationFilter {
    every: Users_CalendarEventWhereInput
    some: Users_CalendarEventWhereInput
    none: Users_CalendarEventWhereInput
  }

  input Users_CalendarEventOrderByRelationAggregateInput {
    _count: Users_SortOrder
  }

  input Users_CalendarCountOrderByAggregateInput {
    id: Users_SortOrder
    calendarType: Users_SortOrder
  }

  input Users_CalendarAvgOrderByAggregateInput {
    id: Users_SortOrder
  }

  input Users_CalendarMaxOrderByAggregateInput {
    id: Users_SortOrder
    calendarType: Users_SortOrder
  }

  input Users_CalendarMinOrderByAggregateInput {
    id: Users_SortOrder
    calendarType: Users_SortOrder
  }

  input Users_CalendarSumOrderByAggregateInput {
    id: Users_SortOrder
  }

  input Users_UserCreaterolesInput {
    set: [Users_String!]!
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

  input Users_DateTimeFieldUpdateOperationsInput {
    set: Users_DateTime
  }

  input Users_NullableStringFieldUpdateOperationsInput {
    set: Users_String
  }

  input Users_StringFieldUpdateOperationsInput {
    set: Users_String
  }

  input Users_UserUpdaterolesInput {
    set: [Users_String!]
    push: [Users_String!]
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

  input Users_IntFieldUpdateOperationsInput {
    set: Users_Int
    increment: Users_Int
    decrement: Users_Int
    multiply: Users_Int
    divide: Users_Int
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

  input Users_NullableDateTimeFieldUpdateOperationsInput {
    set: Users_DateTime
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

  input Users_BoolFieldUpdateOperationsInput {
    set: Users_Boolean
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

  input Users_NestedIntFilter {
    equals: Users_Int
    in: [Users_Int!]
    notIn: [Users_Int!]
    lt: Users_Int
    lte: Users_Int
    gt: Users_Int
    gte: Users_Int
    not: Users_NestedIntFilter
  }

  input Users_NestedDateTimeFilter {
    equals: Users_DateTime
    in: [Users_DateTime!]
    notIn: [Users_DateTime!]
    lt: Users_DateTime
    lte: Users_DateTime
    gt: Users_DateTime
    gte: Users_DateTime
    not: Users_NestedDateTimeFilter
  }

  input Users_NestedStringNullableFilter {
    equals: Users_String
    in: [Users_String!]
    notIn: [Users_String!]
    lt: Users_String
    lte: Users_String
    gt: Users_String
    gte: Users_String
    contains: Users_String
    startsWith: Users_String
    endsWith: Users_String
    not: Users_NestedStringNullableFilter
  }

  input Users_NestedStringFilter {
    equals: Users_String
    in: [Users_String!]
    notIn: [Users_String!]
    lt: Users_String
    lte: Users_String
    gt: Users_String
    gte: Users_String
    contains: Users_String
    startsWith: Users_String
    endsWith: Users_String
    not: Users_NestedStringFilter
  }

  input Users_NestedIntWithAggregatesFilter {
    equals: Users_Int
    in: [Users_Int!]
    notIn: [Users_Int!]
    lt: Users_Int
    lte: Users_Int
    gt: Users_Int
    gte: Users_Int
    not: Users_NestedIntWithAggregatesFilter
    _count: Users_NestedIntFilter
    _avg: Users_NestedFloatFilter
    _sum: Users_NestedIntFilter
    _min: Users_NestedIntFilter
    _max: Users_NestedIntFilter
  }

  input Users_NestedFloatFilter {
    equals: Users_Float
    in: [Users_Float!]
    notIn: [Users_Float!]
    lt: Users_Float
    lte: Users_Float
    gt: Users_Float
    gte: Users_Float
    not: Users_NestedFloatFilter
  }

  input Users_NestedDateTimeWithAggregatesFilter {
    equals: Users_DateTime
    in: [Users_DateTime!]
    notIn: [Users_DateTime!]
    lt: Users_DateTime
    lte: Users_DateTime
    gt: Users_DateTime
    gte: Users_DateTime
    not: Users_NestedDateTimeWithAggregatesFilter
    _count: Users_NestedIntFilter
    _min: Users_NestedDateTimeFilter
    _max: Users_NestedDateTimeFilter
  }

  input Users_NestedStringNullableWithAggregatesFilter {
    equals: Users_String
    in: [Users_String!]
    notIn: [Users_String!]
    lt: Users_String
    lte: Users_String
    gt: Users_String
    gte: Users_String
    contains: Users_String
    startsWith: Users_String
    endsWith: Users_String
    not: Users_NestedStringNullableWithAggregatesFilter
    _count: Users_NestedIntNullableFilter
    _min: Users_NestedStringNullableFilter
    _max: Users_NestedStringNullableFilter
  }

  input Users_NestedIntNullableFilter {
    equals: Users_Int
    in: [Users_Int!]
    notIn: [Users_Int!]
    lt: Users_Int
    lte: Users_Int
    gt: Users_Int
    gte: Users_Int
    not: Users_NestedIntNullableFilter
  }

  input Users_NestedStringWithAggregatesFilter {
    equals: Users_String
    in: [Users_String!]
    notIn: [Users_String!]
    lt: Users_String
    lte: Users_String
    gt: Users_String
    gte: Users_String
    contains: Users_String
    startsWith: Users_String
    endsWith: Users_String
    not: Users_NestedStringWithAggregatesFilter
    _count: Users_NestedIntFilter
    _min: Users_NestedStringFilter
    _max: Users_NestedStringFilter
  }

  input Users_NestedJsonNullableFilter {
    equals: Users_Json
    path: [Users_String!]
    string_contains: Users_String
    string_starts_with: Users_String
    string_ends_with: Users_String
    array_contains: Users_Json
    array_starts_with: Users_Json
    array_ends_with: Users_Json
    lt: Users_Json
    lte: Users_Json
    gt: Users_Json
    gte: Users_Json
    not: Users_Json
  }

  input Users_NestedDateTimeNullableFilter {
    equals: Users_DateTime
    in: [Users_DateTime!]
    notIn: [Users_DateTime!]
    lt: Users_DateTime
    lte: Users_DateTime
    gt: Users_DateTime
    gte: Users_DateTime
    not: Users_NestedDateTimeNullableFilter
  }

  input Users_NestedDateTimeNullableWithAggregatesFilter {
    equals: Users_DateTime
    in: [Users_DateTime!]
    notIn: [Users_DateTime!]
    lt: Users_DateTime
    lte: Users_DateTime
    gt: Users_DateTime
    gte: Users_DateTime
    not: Users_NestedDateTimeNullableWithAggregatesFilter
    _count: Users_NestedIntNullableFilter
    _min: Users_NestedDateTimeNullableFilter
    _max: Users_NestedDateTimeNullableFilter
  }

  input Users_NestedBoolFilter {
    equals: Users_Boolean
    not: Users_NestedBoolFilter
  }

  input Users_NestedBoolWithAggregatesFilter {
    equals: Users_Boolean
    not: Users_NestedBoolWithAggregatesFilter
    _count: Users_NestedIntFilter
    _min: Users_NestedBoolFilter
    _max: Users_NestedBoolFilter
  }

  input Users_ProfileCreateWithoutUserInput {
    location: Users_String
    joiningDate: Users_DateTime
    businessPhone: Users_String
    mobilePhone: Users_String
    kakaoTalkId: Users_String
    designation: Users_String
    profileImg: Users_String
    designationIcon: Users_String
    coverImg: Users_String
  }

  input Users_ProfileUncheckedCreateWithoutUserInput {
    location: Users_String
    joiningDate: Users_DateTime
    businessPhone: Users_String
    mobilePhone: Users_String
    kakaoTalkId: Users_String
    designation: Users_String
    profileImg: Users_String
    designationIcon: Users_String
    coverImg: Users_String
  }

  input Users_ProfileCreateOrConnectWithoutUserInput {
    where: Users_ProfileWhereUniqueInput!
    create: Users_ProfileUncheckedCreateWithoutUserInput!
  }

  input Users_UsersOnTeamsCreateWithoutUserInput {
    team: Users_TeamCreateNestedOneWithoutUsersInput!
    assignedAt: Users_DateTime
  }

  input Users_UsersOnTeamsUncheckedCreateWithoutUserInput {
    teamName: Users_String!
    assignedAt: Users_DateTime
  }

  input Users_UsersOnTeamsCreateOrConnectWithoutUserInput {
    where: Users_UsersOnTeamsWhereUniqueInput!
    create: Users_UsersOnTeamsUncheckedCreateWithoutUserInput!
  }

  input Users_UsersOnTeamsCreateManyUserInputEnvelope {
    data: [Users_UsersOnTeamsCreateManyUserInput!]!
    skipDuplicates: Users_Boolean
  }

  input Users_CalendarsOnUsersCreateWithoutUserInput {
    calendar: Users_CalendarCreateNestedOneWithoutUsersInput!
  }

  input Users_CalendarsOnUsersUncheckedCreateWithoutUserInput {
    calendarId: Users_Int!
  }

  input Users_CalendarsOnUsersCreateOrConnectWithoutUserInput {
    where: Users_CalendarsOnUsersWhereUniqueInput!
    create: Users_CalendarsOnUsersUncheckedCreateWithoutUserInput!
  }

  input Users_CalendarsOnUsersCreateManyUserInputEnvelope {
    data: [Users_CalendarsOnUsersCreateManyUserInput!]!
    skipDuplicates: Users_Boolean
  }

  input Users_UserCreateWithoutContactedByInput {
    createdAt: Users_DateTime
    username: Users_String
    password: Users_String
    email: Users_String!
    roles: [Users_String!]
    googleId: Users_String
    googleProfile: Users_Json
    lastName: Users_String
    firstName: Users_String
    profile: Users_ProfileCreateNestedOneWithoutUserInput
    teams: Users_UsersOnTeamsCreateNestedManyWithoutUserInput
    calendars: Users_CalendarsOnUsersCreateNestedManyWithoutUserInput
    contacted: Users_UserCreateNestedManyWithoutContactedByInput
  }

  input Users_UserUncheckedCreateWithoutContactedByInput {
    id: Users_Int
    createdAt: Users_DateTime
    username: Users_String
    password: Users_String
    email: Users_String!
    roles: [Users_String!]
    googleId: Users_String
    googleProfile: Users_Json
    lastName: Users_String
    firstName: Users_String
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
    createdAt: Users_DateTime
    username: Users_String
    password: Users_String
    email: Users_String!
    roles: [Users_String!]
    googleId: Users_String
    googleProfile: Users_Json
    lastName: Users_String
    firstName: Users_String
    profile: Users_ProfileCreateNestedOneWithoutUserInput
    teams: Users_UsersOnTeamsCreateNestedManyWithoutUserInput
    calendars: Users_CalendarsOnUsersCreateNestedManyWithoutUserInput
    contactedBy: Users_UserCreateNestedManyWithoutContactedInput
  }

  input Users_UserUncheckedCreateWithoutContactedInput {
    id: Users_Int
    createdAt: Users_DateTime
    username: Users_String
    password: Users_String
    email: Users_String!
    roles: [Users_String!]
    googleId: Users_String
    googleProfile: Users_Json
    lastName: Users_String
    firstName: Users_String
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
    location: Users_NullableStringFieldUpdateOperationsInput
    joiningDate: Users_NullableDateTimeFieldUpdateOperationsInput
    businessPhone: Users_NullableStringFieldUpdateOperationsInput
    mobilePhone: Users_NullableStringFieldUpdateOperationsInput
    kakaoTalkId: Users_NullableStringFieldUpdateOperationsInput
    designation: Users_NullableStringFieldUpdateOperationsInput
    profileImg: Users_NullableStringFieldUpdateOperationsInput
    designationIcon: Users_NullableStringFieldUpdateOperationsInput
    coverImg: Users_NullableStringFieldUpdateOperationsInput
  }

  input Users_ProfileUncheckedUpdateWithoutUserInput {
    location: Users_NullableStringFieldUpdateOperationsInput
    joiningDate: Users_NullableDateTimeFieldUpdateOperationsInput
    businessPhone: Users_NullableStringFieldUpdateOperationsInput
    mobilePhone: Users_NullableStringFieldUpdateOperationsInput
    kakaoTalkId: Users_NullableStringFieldUpdateOperationsInput
    designation: Users_NullableStringFieldUpdateOperationsInput
    profileImg: Users_NullableStringFieldUpdateOperationsInput
    designationIcon: Users_NullableStringFieldUpdateOperationsInput
    coverImg: Users_NullableStringFieldUpdateOperationsInput
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
    teamName: Users_StringFilter
    userId: Users_IntFilter
    assignedAt: Users_DateTimeFilter
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
    userId: Users_IntFilter
    calendarId: Users_IntFilter
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
    id: Users_IntFilter
    createdAt: Users_DateTimeFilter
    username: Users_StringNullableFilter
    password: Users_StringNullableFilter
    email: Users_StringFilter
    roles: Users_StringNullableListFilter
    googleId: Users_StringNullableFilter
    googleProfile: Users_JsonNullableFilter
    lastName: Users_StringNullableFilter
    firstName: Users_StringNullableFilter
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
    createdAt: Users_DateTime
    username: Users_String
    password: Users_String
    email: Users_String!
    roles: [Users_String!]
    googleId: Users_String
    googleProfile: Users_Json
    lastName: Users_String
    firstName: Users_String
    teams: Users_UsersOnTeamsCreateNestedManyWithoutUserInput
    calendars: Users_CalendarsOnUsersCreateNestedManyWithoutUserInput
    contacted: Users_UserCreateNestedManyWithoutContactedByInput
    contactedBy: Users_UserCreateNestedManyWithoutContactedInput
  }

  input Users_UserUncheckedCreateWithoutProfileInput {
    id: Users_Int
    createdAt: Users_DateTime
    username: Users_String
    password: Users_String
    email: Users_String!
    roles: [Users_String!]
    googleId: Users_String
    googleProfile: Users_Json
    lastName: Users_String
    firstName: Users_String
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
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
    teams: Users_UsersOnTeamsUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput
    contacted: Users_UserUpdateManyWithoutContactedByNestedInput
    contactedBy: Users_UserUpdateManyWithoutContactedNestedInput
  }

  input Users_UserUncheckedUpdateWithoutProfileInput {
    id: Users_IntFieldUpdateOperationsInput
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
    teams: Users_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    contacted: Users_UserUncheckedUpdateManyWithoutContactedByNestedInput
    contactedBy: Users_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Users_TeamCreateWithoutUsersInput {
    teamName: Users_String!
    teamType: Users_String
    teamIcon: Users_String
  }

  input Users_TeamUncheckedCreateWithoutUsersInput {
    teamName: Users_String!
    teamType: Users_String
    teamIcon: Users_String
  }

  input Users_TeamCreateOrConnectWithoutUsersInput {
    where: Users_TeamWhereUniqueInput!
    create: Users_TeamUncheckedCreateWithoutUsersInput!
  }

  input Users_UserCreateWithoutTeamsInput {
    createdAt: Users_DateTime
    username: Users_String
    password: Users_String
    email: Users_String!
    roles: [Users_String!]
    googleId: Users_String
    googleProfile: Users_Json
    lastName: Users_String
    firstName: Users_String
    profile: Users_ProfileCreateNestedOneWithoutUserInput
    calendars: Users_CalendarsOnUsersCreateNestedManyWithoutUserInput
    contacted: Users_UserCreateNestedManyWithoutContactedByInput
    contactedBy: Users_UserCreateNestedManyWithoutContactedInput
  }

  input Users_UserUncheckedCreateWithoutTeamsInput {
    id: Users_Int
    createdAt: Users_DateTime
    username: Users_String
    password: Users_String
    email: Users_String!
    roles: [Users_String!]
    googleId: Users_String
    googleProfile: Users_Json
    lastName: Users_String
    firstName: Users_String
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
    teamName: Users_StringFieldUpdateOperationsInput
    teamType: Users_NullableStringFieldUpdateOperationsInput
    teamIcon: Users_NullableStringFieldUpdateOperationsInput
  }

  input Users_TeamUncheckedUpdateWithoutUsersInput {
    teamName: Users_StringFieldUpdateOperationsInput
    teamType: Users_NullableStringFieldUpdateOperationsInput
    teamIcon: Users_NullableStringFieldUpdateOperationsInput
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
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUpdateOneWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput
    contacted: Users_UserUpdateManyWithoutContactedByNestedInput
    contactedBy: Users_UserUpdateManyWithoutContactedNestedInput
  }

  input Users_UserUncheckedUpdateWithoutTeamsInput {
    id: Users_IntFieldUpdateOperationsInput
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUncheckedUpdateOneWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    contacted: Users_UserUncheckedUpdateManyWithoutContactedByNestedInput
    contactedBy: Users_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Users_UsersOnTeamsCreateWithoutTeamInput {
    user: Users_UserCreateNestedOneWithoutTeamsInput!
    assignedAt: Users_DateTime
  }

  input Users_UsersOnTeamsUncheckedCreateWithoutTeamInput {
    userId: Users_Int!
    assignedAt: Users_DateTime
  }

  input Users_UsersOnTeamsCreateOrConnectWithoutTeamInput {
    where: Users_UsersOnTeamsWhereUniqueInput!
    create: Users_UsersOnTeamsUncheckedCreateWithoutTeamInput!
  }

  input Users_UsersOnTeamsCreateManyTeamInputEnvelope {
    data: [Users_UsersOnTeamsCreateManyTeamInput!]!
    skipDuplicates: Users_Boolean
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
    calendarType: Users_String!
    users: Users_CalendarsOnUsersCreateNestedManyWithoutCalendarInput
  }

  input Users_CalendarUncheckedCreateWithoutCalendarEventsInput {
    id: Users_Int
    calendarType: Users_String!
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
    calendarType: Users_StringFieldUpdateOperationsInput
    users: Users_CalendarsOnUsersUpdateManyWithoutCalendarNestedInput
  }

  input Users_CalendarUncheckedUpdateWithoutCalendarEventsInput {
    id: Users_IntFieldUpdateOperationsInput
    calendarType: Users_StringFieldUpdateOperationsInput
    users: Users_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarNestedInput
  }

  input Users_UserCreateWithoutCalendarsInput {
    createdAt: Users_DateTime
    username: Users_String
    password: Users_String
    email: Users_String!
    roles: [Users_String!]
    googleId: Users_String
    googleProfile: Users_Json
    lastName: Users_String
    firstName: Users_String
    profile: Users_ProfileCreateNestedOneWithoutUserInput
    teams: Users_UsersOnTeamsCreateNestedManyWithoutUserInput
    contacted: Users_UserCreateNestedManyWithoutContactedByInput
    contactedBy: Users_UserCreateNestedManyWithoutContactedInput
  }

  input Users_UserUncheckedCreateWithoutCalendarsInput {
    id: Users_Int
    createdAt: Users_DateTime
    username: Users_String
    password: Users_String
    email: Users_String!
    roles: [Users_String!]
    googleId: Users_String
    googleProfile: Users_Json
    lastName: Users_String
    firstName: Users_String
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
    calendarType: Users_String!
    calendarEvents: Users_CalendarEventCreateNestedManyWithoutCalendarInput
  }

  input Users_CalendarUncheckedCreateWithoutUsersInput {
    id: Users_Int
    calendarType: Users_String!
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
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUpdateOneWithoutUserNestedInput
    teams: Users_UsersOnTeamsUpdateManyWithoutUserNestedInput
    contacted: Users_UserUpdateManyWithoutContactedByNestedInput
    contactedBy: Users_UserUpdateManyWithoutContactedNestedInput
  }

  input Users_UserUncheckedUpdateWithoutCalendarsInput {
    id: Users_IntFieldUpdateOperationsInput
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
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
    calendarType: Users_StringFieldUpdateOperationsInput
    calendarEvents: Users_CalendarEventUpdateManyWithoutCalendarNestedInput
  }

  input Users_CalendarUncheckedUpdateWithoutUsersInput {
    id: Users_IntFieldUpdateOperationsInput
    calendarType: Users_StringFieldUpdateOperationsInput
    calendarEvents: Users_CalendarEventUncheckedUpdateManyWithoutCalendarNestedInput
  }

  input Users_CalendarsOnUsersCreateWithoutCalendarInput {
    user: Users_UserCreateNestedOneWithoutCalendarsInput!
  }

  input Users_CalendarsOnUsersUncheckedCreateWithoutCalendarInput {
    userId: Users_Int!
  }

  input Users_CalendarsOnUsersCreateOrConnectWithoutCalendarInput {
    where: Users_CalendarsOnUsersWhereUniqueInput!
    create: Users_CalendarsOnUsersUncheckedCreateWithoutCalendarInput!
  }

  input Users_CalendarsOnUsersCreateManyCalendarInputEnvelope {
    data: [Users_CalendarsOnUsersCreateManyCalendarInput!]!
    skipDuplicates: Users_Boolean
  }

  input Users_CalendarEventCreateWithoutCalendarInput {
    url: Users_String
    title: Users_String!
    start: Users_DateTime!
    end: Users_DateTime!
    allDay: Users_Boolean!
  }

  input Users_CalendarEventUncheckedCreateWithoutCalendarInput {
    id: Users_Int
    url: Users_String
    title: Users_String!
    start: Users_DateTime!
    end: Users_DateTime!
    allDay: Users_Boolean!
  }

  input Users_CalendarEventCreateOrConnectWithoutCalendarInput {
    where: Users_CalendarEventWhereUniqueInput!
    create: Users_CalendarEventUncheckedCreateWithoutCalendarInput!
  }

  input Users_CalendarEventCreateManyCalendarInputEnvelope {
    data: [Users_CalendarEventCreateManyCalendarInput!]!
    skipDuplicates: Users_Boolean
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
    id: Users_IntFilter
    url: Users_StringNullableFilter
    title: Users_StringFilter
    start: Users_DateTimeFilter
    end: Users_DateTimeFilter
    allDay: Users_BoolFilter
    calendarId: Users_IntFilter
  }

  input Users_UsersOnTeamsCreateManyUserInput {
    teamName: Users_String!
    assignedAt: Users_DateTime
  }

  input Users_CalendarsOnUsersCreateManyUserInput {
    calendarId: Users_Int!
  }

  input Users_UsersOnTeamsUpdateWithoutUserInput {
    team: Users_TeamUpdateOneRequiredWithoutUsersNestedInput
    assignedAt: Users_DateTimeFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsUncheckedUpdateWithoutUserInput {
    teamName: Users_StringFieldUpdateOperationsInput
    assignedAt: Users_DateTimeFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsUncheckedUpdateManyWithoutTeamsInput {
    teamName: Users_StringFieldUpdateOperationsInput
    assignedAt: Users_DateTimeFieldUpdateOperationsInput
  }

  input Users_CalendarsOnUsersUpdateWithoutUserInput {
    calendar: Users_CalendarUpdateOneRequiredWithoutUsersNestedInput
  }

  input Users_CalendarsOnUsersUncheckedUpdateWithoutUserInput {
    calendarId: Users_IntFieldUpdateOperationsInput
  }

  input Users_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarsInput {
    calendarId: Users_IntFieldUpdateOperationsInput
  }

  input Users_UserUpdateWithoutContactedByInput {
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUpdateOneWithoutUserNestedInput
    teams: Users_UsersOnTeamsUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput
    contacted: Users_UserUpdateManyWithoutContactedByNestedInput
  }

  input Users_UserUncheckedUpdateWithoutContactedByInput {
    id: Users_IntFieldUpdateOperationsInput
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUncheckedUpdateOneWithoutUserNestedInput
    teams: Users_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    contacted: Users_UserUncheckedUpdateManyWithoutContactedByNestedInput
  }

  input Users_UserUncheckedUpdateManyWithoutContactedInput {
    id: Users_IntFieldUpdateOperationsInput
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
  }

  input Users_UserUpdateWithoutContactedInput {
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUpdateOneWithoutUserNestedInput
    teams: Users_UsersOnTeamsUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput
    contactedBy: Users_UserUpdateManyWithoutContactedNestedInput
  }

  input Users_UserUncheckedUpdateWithoutContactedInput {
    id: Users_IntFieldUpdateOperationsInput
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
    profile: Users_ProfileUncheckedUpdateOneWithoutUserNestedInput
    teams: Users_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    calendars: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput
    contactedBy: Users_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Users_UserUncheckedUpdateManyWithoutContactedByInput {
    id: Users_IntFieldUpdateOperationsInput
    createdAt: Users_DateTimeFieldUpdateOperationsInput
    username: Users_NullableStringFieldUpdateOperationsInput
    password: Users_NullableStringFieldUpdateOperationsInput
    email: Users_StringFieldUpdateOperationsInput
    roles: [Users_String!]
    googleId: Users_NullableStringFieldUpdateOperationsInput
    googleProfile: Users_Json
    lastName: Users_NullableStringFieldUpdateOperationsInput
    firstName: Users_NullableStringFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsCreateManyTeamInput {
    userId: Users_Int!
    assignedAt: Users_DateTime
  }

  input Users_UsersOnTeamsUpdateWithoutTeamInput {
    user: Users_UserUpdateOneRequiredWithoutTeamsNestedInput
    assignedAt: Users_DateTimeFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsUncheckedUpdateWithoutTeamInput {
    userId: Users_IntFieldUpdateOperationsInput
    assignedAt: Users_DateTimeFieldUpdateOperationsInput
  }

  input Users_UsersOnTeamsUncheckedUpdateManyWithoutUsersInput {
    userId: Users_IntFieldUpdateOperationsInput
    assignedAt: Users_DateTimeFieldUpdateOperationsInput
  }

  input Users_CalendarsOnUsersCreateManyCalendarInput {
    userId: Users_Int!
  }

  input Users_CalendarEventCreateManyCalendarInput {
    id: Users_Int
    url: Users_String
    title: Users_String!
    start: Users_DateTime!
    end: Users_DateTime!
    allDay: Users_Boolean!
  }

  input Users_CalendarsOnUsersUpdateWithoutCalendarInput {
    user: Users_UserUpdateOneRequiredWithoutCalendarsNestedInput
  }

  input Users_CalendarsOnUsersUncheckedUpdateWithoutCalendarInput {
    userId: Users_IntFieldUpdateOperationsInput
  }

  input Users_CalendarsOnUsersUncheckedUpdateManyWithoutUsersInput {
    userId: Users_IntFieldUpdateOperationsInput
  }

  input Users_CalendarEventUpdateWithoutCalendarInput {
    url: Users_NullableStringFieldUpdateOperationsInput
    title: Users_StringFieldUpdateOperationsInput
    start: Users_DateTimeFieldUpdateOperationsInput
    end: Users_DateTimeFieldUpdateOperationsInput
    allDay: Users_BoolFieldUpdateOperationsInput
  }

  input Users_CalendarEventUncheckedUpdateWithoutCalendarInput {
    id: Users_IntFieldUpdateOperationsInput
    url: Users_NullableStringFieldUpdateOperationsInput
    title: Users_StringFieldUpdateOperationsInput
    start: Users_DateTimeFieldUpdateOperationsInput
    end: Users_DateTimeFieldUpdateOperationsInput
    allDay: Users_BoolFieldUpdateOperationsInput
  }

  input Users_CalendarEventUncheckedUpdateManyWithoutCalendarEventsInput {
    id: Users_IntFieldUpdateOperationsInput
    url: Users_NullableStringFieldUpdateOperationsInput
    title: Users_StringFieldUpdateOperationsInput
    start: Users_DateTimeFieldUpdateOperationsInput
    end: Users_DateTimeFieldUpdateOperationsInput
    allDay: Users_BoolFieldUpdateOperationsInput
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
