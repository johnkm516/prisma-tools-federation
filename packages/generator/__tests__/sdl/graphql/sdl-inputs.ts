import gql from 'graphql-tag';

export default gql`
  scalar DateTime

  type BatchPayload @shareable {
    count: Int!
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
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
  }

  input Users_ProfileWhereUniqueInput {
    userId: Int
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
  }

  input Users_TeamOrderByWithRelationInput {
    teamName: SortOrder
    users: Users_UsersOnTeamsOrderByRelationAggregateInput
  }

  input Users_TeamWhereUniqueInput {
    teamName: String
    AND: [Users_TeamWhereInput!]
    OR: [Users_TeamWhereInput!]
    NOT: [Users_TeamWhereInput!]
    users: Users_UsersOnTeamsListRelationFilter
  }

  input Users_TeamOrderByWithAggregationInput {
    teamName: SortOrder
    _count: Users_TeamCountOrderByAggregateInput
    _max: Users_TeamMaxOrderByAggregateInput
    _min: Users_TeamMinOrderByAggregateInput
  }

  input Users_TeamScalarWhereWithAggregatesInput {
    AND: [Users_TeamScalarWhereWithAggregatesInput!]
    OR: [Users_TeamScalarWhereWithAggregatesInput!]
    NOT: [Users_TeamScalarWhereWithAggregatesInput!]
    teamName: StringWithAggregatesFilter
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
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Users_ProfileUncheckedCreateInput {
    userId: Int!
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Users_ProfileUpdateInput {
    user: Users_UserUpdateOneRequiredWithoutProfileNestedInput
    location: NullableStringFieldUpdateOperationsInput
    joiningDate: NullableDateTimeFieldUpdateOperationsInput
    designation: NullableStringFieldUpdateOperationsInput
    profileImg: NullableStringFieldUpdateOperationsInput
    designationIcon: NullableStringFieldUpdateOperationsInput
    coverImg: NullableStringFieldUpdateOperationsInput
  }

  input Users_ProfileUncheckedUpdateInput {
    userId: IntFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    joiningDate: NullableDateTimeFieldUpdateOperationsInput
    designation: NullableStringFieldUpdateOperationsInput
    profileImg: NullableStringFieldUpdateOperationsInput
    designationIcon: NullableStringFieldUpdateOperationsInput
    coverImg: NullableStringFieldUpdateOperationsInput
  }

  input Users_ProfileCreateManyInput {
    userId: Int!
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Users_ProfileUpdateManyMutationInput {
    location: NullableStringFieldUpdateOperationsInput
    joiningDate: NullableDateTimeFieldUpdateOperationsInput
    designation: NullableStringFieldUpdateOperationsInput
    profileImg: NullableStringFieldUpdateOperationsInput
    designationIcon: NullableStringFieldUpdateOperationsInput
    coverImg: NullableStringFieldUpdateOperationsInput
  }

  input Users_ProfileUncheckedUpdateManyInput {
    userId: IntFieldUpdateOperationsInput
    location: NullableStringFieldUpdateOperationsInput
    joiningDate: NullableDateTimeFieldUpdateOperationsInput
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
  }

  input Users_TeamUncheckedCreateInput {
    teamName: String!
    users: Users_UsersOnTeamsUncheckedCreateNestedManyWithoutTeamInput
  }

  input Users_TeamUpdateInput {
    teamName: StringFieldUpdateOperationsInput
    users: Users_UsersOnTeamsUpdateManyWithoutTeamNestedInput
  }

  input Users_TeamUncheckedUpdateInput {
    teamName: StringFieldUpdateOperationsInput
    users: Users_UsersOnTeamsUncheckedUpdateManyWithoutTeamNestedInput
  }

  input Users_TeamCreateManyInput {
    teamName: String!
  }

  input Users_TeamUpdateManyMutationInput {
    teamName: StringFieldUpdateOperationsInput
  }

  input Users_TeamUncheckedUpdateManyInput {
    teamName: StringFieldUpdateOperationsInput
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

  input Users_UsersOnTeamsOrderByRelationAggregateInput {
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
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
  }

  input Users_ProfileMinOrderByAggregateInput {
    userId: SortOrder
    location: SortOrder
    joiningDate: SortOrder
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
  }

  input Users_TeamMaxOrderByAggregateInput {
    teamName: SortOrder
  }

  input Users_TeamMinOrderByAggregateInput {
    teamName: SortOrder
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

  input Users_ProfileCreateWithoutUserInput {
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Users_ProfileUncheckedCreateWithoutUserInput {
    location: String
    joiningDate: DateTime
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
    designation: NullableStringFieldUpdateOperationsInput
    profileImg: NullableStringFieldUpdateOperationsInput
    designationIcon: NullableStringFieldUpdateOperationsInput
    coverImg: NullableStringFieldUpdateOperationsInput
  }

  input Users_ProfileUncheckedUpdateWithoutUserInput {
    location: NullableStringFieldUpdateOperationsInput
    joiningDate: NullableDateTimeFieldUpdateOperationsInput
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
  }

  input Users_TeamCreateWithoutUsersInput {
    teamName: String!
  }

  input Users_TeamUncheckedCreateWithoutUsersInput {
    teamName: String!
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
  }

  input Users_TeamUncheckedUpdateWithoutUsersInput {
    teamName: StringFieldUpdateOperationsInput
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

  input Users_UsersOnTeamsCreateManyUserInput {
    teamName: String!
    assignedAt: DateTime
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

  type AggregateUsersOnTeams @key(fields: "teamName") @shareable {
    _count: UsersOnTeamsCountAggregateOutputType
    _avg: UsersOnTeamsAvgAggregateOutputType
    _sum: UsersOnTeamsSumAggregateOutputType
    _min: UsersOnTeamsMinAggregateOutputType
    _max: UsersOnTeamsMaxAggregateOutputType
  }

  type UsersOnTeamsGroupByOutputType @key(fields: "teamName") @shareable {
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
    _count: TeamCountAggregateOutputType
    _min: TeamMinAggregateOutputType
    _max: TeamMaxAggregateOutputType
  }

  type UserCountOutputType @shareable {
    teams: Int!
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
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  type ProfileMaxAggregateOutputType @key(fields: "userId") @shareable {
    userId: Int
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  type UsersOnTeamsCountAggregateOutputType
    @key(fields: "teamName")
    @shareable {
    teamName: Int!
    userId: Int!
    assignedAt: Int!
    _all: Int!
  }

  type UsersOnTeamsAvgAggregateOutputType @key(fields: "teamName") @shareable {
    userId: Float
  }

  type UsersOnTeamsSumAggregateOutputType @key(fields: "teamName") @shareable {
    userId: Int
  }

  type UsersOnTeamsMinAggregateOutputType @key(fields: "teamName") @shareable {
    teamName: String
    userId: Int
    assignedAt: DateTime
  }

  type UsersOnTeamsMaxAggregateOutputType @key(fields: "teamName") @shareable {
    teamName: String
    userId: Int
    assignedAt: DateTime
  }

  type TeamCountOutputType @shareable {
    users: Int!
  }

  type TeamCountAggregateOutputType @key(fields: "teamName") @shareable {
    teamName: Int!
    _all: Int!
  }

  type TeamMinAggregateOutputType @key(fields: "teamName") @shareable {
    teamName: String
  }

  type TeamMaxAggregateOutputType @key(fields: "teamName") @shareable {
    teamName: String
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
  }
`;
