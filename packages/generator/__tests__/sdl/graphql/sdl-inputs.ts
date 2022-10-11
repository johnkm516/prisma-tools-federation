import gql from 'graphql-tag';

export default gql`
  scalar DateTime

  type BatchPayload {
    count: Int!
  }
  enum CategoriesOnPostsScalarFieldEnum {
    postId
    categoryId
    assignedAt
    assignedBy
  }

  enum CategoryScalarFieldEnum {
    id
    name
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

  enum PostScalarFieldEnum {
    id
    user_id
    title
  }

  enum QueryMode {
    default
    insensitive
  }

  enum SortOrder {
    asc
    desc
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
    number2
    number
  }

  input UserWhereInput {
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    id: IntFilter
    createdAt: DateTimeFilter
    username: StringNullableFilter
    password: StringNullableFilter
    email: StringFilter
    roles: StringNullableListFilter
    googleId: StringNullableFilter
    googleProfile: JsonNullableFilter
    posts: PostListRelationFilter
    number2: DecimalNullableListFilter
    number: DecimalFilter
  }

  input UserOrderByWithRelationInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
    posts: PostOrderByRelationAggregateInput
    number2: SortOrder
    number: SortOrder
  }

  input UserWhereUniqueInput {
    id: Int
    createdAt: DateTime
    username: String
    email: String
    googleId: String
    number: Decimal
  }

  input UserOrderByWithAggregationInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
    number2: SortOrder
    number: SortOrder
    _count: UserCountOrderByAggregateInput
    _avg: UserAvgOrderByAggregateInput
    _max: UserMaxOrderByAggregateInput
    _min: UserMinOrderByAggregateInput
    _sum: UserSumOrderByAggregateInput
  }

  input UserScalarWhereWithAggregatesInput {
    AND: [UserScalarWhereWithAggregatesInput!]
    OR: [UserScalarWhereWithAggregatesInput!]
    NOT: [UserScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    username: StringNullableWithAggregatesFilter
    password: StringNullableWithAggregatesFilter
    email: StringWithAggregatesFilter
    roles: StringNullableListFilter
    googleId: StringNullableWithAggregatesFilter
    googleProfile: JsonNullableWithAggregatesFilter
    number2: DecimalNullableListFilter
    number: DecimalWithAggregatesFilter
  }

  input PostWhereInput {
    AND: [PostWhereInput!]
    OR: [PostWhereInput!]
    NOT: [PostWhereInput!]
    id: IntFilter
    user: UserWhereInput
    user_id: IntFilter
    title: StringFilter
    categories: CategoriesOnPostsListRelationFilter
  }

  input PostOrderByWithRelationInput {
    id: SortOrder
    user: UserOrderByWithRelationInput
    user_id: SortOrder
    title: SortOrder
    categories: CategoriesOnPostsOrderByRelationAggregateInput
  }

  input PostWhereUniqueInput {
    id: Int
    user_id: Int
  }

  input PostOrderByWithAggregationInput {
    id: SortOrder
    user_id: SortOrder
    title: SortOrder
    _count: PostCountOrderByAggregateInput
    _avg: PostAvgOrderByAggregateInput
    _max: PostMaxOrderByAggregateInput
    _min: PostMinOrderByAggregateInput
    _sum: PostSumOrderByAggregateInput
  }

  input PostScalarWhereWithAggregatesInput {
    AND: [PostScalarWhereWithAggregatesInput!]
    OR: [PostScalarWhereWithAggregatesInput!]
    NOT: [PostScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    user_id: IntWithAggregatesFilter
    title: StringWithAggregatesFilter
  }

  input CategoryWhereInput {
    AND: [CategoryWhereInput!]
    OR: [CategoryWhereInput!]
    NOT: [CategoryWhereInput!]
    id: IntFilter
    name: StringFilter
    posts: CategoriesOnPostsListRelationFilter
  }

  input CategoryOrderByWithRelationInput {
    id: SortOrder
    name: SortOrder
    posts: CategoriesOnPostsOrderByRelationAggregateInput
  }

  input CategoryWhereUniqueInput {
    id: Int
  }

  input CategoryOrderByWithAggregationInput {
    id: SortOrder
    name: SortOrder
    _count: CategoryCountOrderByAggregateInput
    _avg: CategoryAvgOrderByAggregateInput
    _max: CategoryMaxOrderByAggregateInput
    _min: CategoryMinOrderByAggregateInput
    _sum: CategorySumOrderByAggregateInput
  }

  input CategoryScalarWhereWithAggregatesInput {
    AND: [CategoryScalarWhereWithAggregatesInput!]
    OR: [CategoryScalarWhereWithAggregatesInput!]
    NOT: [CategoryScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    name: StringWithAggregatesFilter
  }

  input CategoriesOnPostsWhereInput {
    AND: [CategoriesOnPostsWhereInput!]
    OR: [CategoriesOnPostsWhereInput!]
    NOT: [CategoriesOnPostsWhereInput!]
    post: PostWhereInput
    postId: IntFilter
    category: CategoryWhereInput
    categoryId: IntFilter
    assignedAt: DateTimeFilter
    assignedBy: StringFilter
  }

  input CategoriesOnPostsOrderByWithRelationInput {
    post: PostOrderByWithRelationInput
    postId: SortOrder
    category: CategoryOrderByWithRelationInput
    categoryId: SortOrder
    assignedAt: SortOrder
    assignedBy: SortOrder
  }

  input CategoriesOnPostsWhereUniqueInput {
    postId_categoryId: CategoriesOnPostsPostIdCategoryIdCompoundUniqueInput
  }

  input CategoriesOnPostsOrderByWithAggregationInput {
    postId: SortOrder
    categoryId: SortOrder
    assignedAt: SortOrder
    assignedBy: SortOrder
    _count: CategoriesOnPostsCountOrderByAggregateInput
    _avg: CategoriesOnPostsAvgOrderByAggregateInput
    _max: CategoriesOnPostsMaxOrderByAggregateInput
    _min: CategoriesOnPostsMinOrderByAggregateInput
    _sum: CategoriesOnPostsSumOrderByAggregateInput
  }

  input CategoriesOnPostsScalarWhereWithAggregatesInput {
    AND: [CategoriesOnPostsScalarWhereWithAggregatesInput!]
    OR: [CategoriesOnPostsScalarWhereWithAggregatesInput!]
    NOT: [CategoriesOnPostsScalarWhereWithAggregatesInput!]
    postId: IntWithAggregatesFilter
    categoryId: IntWithAggregatesFilter
    assignedAt: DateTimeWithAggregatesFilter
    assignedBy: StringWithAggregatesFilter
  }

  input UserCreateInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    posts: PostCreateNestedManyWithoutUserInput
    number2: [Decimal!]
    number: Decimal!
  }

  input UserUncheckedCreateInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    posts: PostUncheckedCreateNestedManyWithoutUserInput
    number2: [Decimal!]
    number: Decimal!
  }

  input UserUpdateInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    posts: PostUpdateManyWithoutUserNestedInput
    number2: [Decimal!]
    number: DecimalFieldUpdateOperationsInput
  }

  input UserUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    posts: PostUncheckedUpdateManyWithoutUserNestedInput
    number2: [Decimal!]
    number: DecimalFieldUpdateOperationsInput
  }

  input UserCreateManyInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    number2: [Decimal!]
    number: Decimal!
  }

  input UserUpdateManyMutationInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    number2: [Decimal!]
    number: DecimalFieldUpdateOperationsInput
  }

  input UserUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    number2: [Decimal!]
    number: DecimalFieldUpdateOperationsInput
  }

  input PostCreateInput {
    user: UserCreateNestedOneWithoutPostsInput!
    title: String!
    categories: CategoriesOnPostsCreateNestedManyWithoutPostInput
  }

  input PostUncheckedCreateInput {
    id: Int
    user_id: Int!
    title: String!
    categories: CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput
  }

  input PostUpdateInput {
    user: UserUpdateOneRequiredWithoutPostsNestedInput
    title: StringFieldUpdateOperationsInput
    categories: CategoriesOnPostsUpdateManyWithoutPostNestedInput
  }

  input PostUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    user_id: IntFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    categories: CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput
  }

  input PostCreateManyInput {
    id: Int
    user_id: Int!
    title: String!
  }

  input PostUpdateManyMutationInput {
    title: StringFieldUpdateOperationsInput
  }

  input PostUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    user_id: IntFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
  }

  input CategoryCreateInput {
    name: String!
    posts: CategoriesOnPostsCreateNestedManyWithoutCategoryInput
  }

  input CategoryUncheckedCreateInput {
    id: Int
    name: String!
    posts: CategoriesOnPostsUncheckedCreateNestedManyWithoutCategoryInput
  }

  input CategoryUpdateInput {
    name: StringFieldUpdateOperationsInput
    posts: CategoriesOnPostsUpdateManyWithoutCategoryNestedInput
  }

  input CategoryUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    posts: CategoriesOnPostsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  input CategoryCreateManyInput {
    id: Int
    name: String!
  }

  input CategoryUpdateManyMutationInput {
    name: StringFieldUpdateOperationsInput
  }

  input CategoryUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
  }

  input CategoriesOnPostsCreateInput {
    post: PostCreateNestedOneWithoutCategoriesInput!
    category: CategoryCreateNestedOneWithoutPostsInput!
    assignedAt: DateTime
    assignedBy: String!
  }

  input CategoriesOnPostsUncheckedCreateInput {
    postId: Int!
    categoryId: Int!
    assignedAt: DateTime
    assignedBy: String!
  }

  input CategoriesOnPostsUpdateInput {
    post: PostUpdateOneRequiredWithoutCategoriesNestedInput
    category: CategoryUpdateOneRequiredWithoutPostsNestedInput
    assignedAt: DateTimeFieldUpdateOperationsInput
    assignedBy: StringFieldUpdateOperationsInput
  }

  input CategoriesOnPostsUncheckedUpdateInput {
    postId: IntFieldUpdateOperationsInput
    categoryId: IntFieldUpdateOperationsInput
    assignedAt: DateTimeFieldUpdateOperationsInput
    assignedBy: StringFieldUpdateOperationsInput
  }

  input CategoriesOnPostsCreateManyInput {
    postId: Int!
    categoryId: Int!
    assignedAt: DateTime
    assignedBy: String!
  }

  input CategoriesOnPostsUpdateManyMutationInput {
    assignedAt: DateTimeFieldUpdateOperationsInput
    assignedBy: StringFieldUpdateOperationsInput
  }

  input CategoriesOnPostsUncheckedUpdateManyInput {
    postId: IntFieldUpdateOperationsInput
    categoryId: IntFieldUpdateOperationsInput
    assignedAt: DateTimeFieldUpdateOperationsInput
    assignedBy: StringFieldUpdateOperationsInput
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

  input PostListRelationFilter {
    every: PostWhereInput
    some: PostWhereInput
    none: PostWhereInput
  }

  input DecimalNullableListFilter {
    equals: [Decimal!]
    has: Decimal
    hasEvery: [Decimal!]
    hasSome: [Decimal!]
    isEmpty: Boolean
  }

  input DecimalFilter {
    equals: Decimal
    in: [Decimal!]
    notIn: [Decimal!]
    lt: Decimal
    lte: Decimal
    gt: Decimal
    gte: Decimal
    not: NestedDecimalFilter
  }

  input PostOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input UserCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
    number2: SortOrder
    number: SortOrder
  }

  input UserAvgOrderByAggregateInput {
    id: SortOrder
    number2: SortOrder
    number: SortOrder
  }

  input UserMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    googleId: SortOrder
    number: SortOrder
  }

  input UserMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    googleId: SortOrder
    number: SortOrder
  }

  input UserSumOrderByAggregateInput {
    id: SortOrder
    number2: SortOrder
    number: SortOrder
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

  input DecimalWithAggregatesFilter {
    equals: Decimal
    in: [Decimal!]
    notIn: [Decimal!]
    lt: Decimal
    lte: Decimal
    gt: Decimal
    gte: Decimal
    not: NestedDecimalWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedDecimalFilter
    _sum: NestedDecimalFilter
    _min: NestedDecimalFilter
    _max: NestedDecimalFilter
  }

  input UserRelationFilter {
    is: UserWhereInput
    isNot: UserWhereInput
  }

  input CategoriesOnPostsListRelationFilter {
    every: CategoriesOnPostsWhereInput
    some: CategoriesOnPostsWhereInput
    none: CategoriesOnPostsWhereInput
  }

  input CategoriesOnPostsOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input PostCountOrderByAggregateInput {
    id: SortOrder
    user_id: SortOrder
    title: SortOrder
  }

  input PostAvgOrderByAggregateInput {
    id: SortOrder
    user_id: SortOrder
  }

  input PostMaxOrderByAggregateInput {
    id: SortOrder
    user_id: SortOrder
    title: SortOrder
  }

  input PostMinOrderByAggregateInput {
    id: SortOrder
    user_id: SortOrder
    title: SortOrder
  }

  input PostSumOrderByAggregateInput {
    id: SortOrder
    user_id: SortOrder
  }

  input CategoryCountOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
  }

  input CategoryAvgOrderByAggregateInput {
    id: SortOrder
  }

  input CategoryMaxOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
  }

  input CategoryMinOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
  }

  input CategorySumOrderByAggregateInput {
    id: SortOrder
  }

  input PostRelationFilter {
    is: PostWhereInput
    isNot: PostWhereInput
  }

  input CategoryRelationFilter {
    is: CategoryWhereInput
    isNot: CategoryWhereInput
  }

  input CategoriesOnPostsPostIdCategoryIdCompoundUniqueInput {
    postId: Int!
    categoryId: Int!
  }

  input CategoriesOnPostsCountOrderByAggregateInput {
    postId: SortOrder
    categoryId: SortOrder
    assignedAt: SortOrder
    assignedBy: SortOrder
  }

  input CategoriesOnPostsAvgOrderByAggregateInput {
    postId: SortOrder
    categoryId: SortOrder
  }

  input CategoriesOnPostsMaxOrderByAggregateInput {
    postId: SortOrder
    categoryId: SortOrder
    assignedAt: SortOrder
    assignedBy: SortOrder
  }

  input CategoriesOnPostsMinOrderByAggregateInput {
    postId: SortOrder
    categoryId: SortOrder
    assignedAt: SortOrder
    assignedBy: SortOrder
  }

  input CategoriesOnPostsSumOrderByAggregateInput {
    postId: SortOrder
    categoryId: SortOrder
  }

  input UserCreaterolesInput {
    set: [String!]!
  }

  input PostCreateNestedManyWithoutUserInput {
    create: [PostCreateWithoutUserInput!]
    connectOrCreate: [PostCreateOrConnectWithoutUserInput!]
    createMany: PostCreateManyUserInputEnvelope
    connect: [PostWhereUniqueInput!]
  }

  input UserCreatenumber2Input {
    set: [Decimal!]!
  }

  input PostUncheckedCreateNestedManyWithoutUserInput {
    create: [PostCreateWithoutUserInput!]
    connectOrCreate: [PostCreateOrConnectWithoutUserInput!]
    createMany: PostCreateManyUserInputEnvelope
    connect: [PostWhereUniqueInput!]
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

  input UserUpdaterolesInput {
    set: [String!]
    push: [String!]
  }

  input PostUpdateManyWithoutUserNestedInput {
    create: [PostCreateWithoutUserInput!]
    connectOrCreate: [PostCreateOrConnectWithoutUserInput!]
    upsert: [PostUpsertWithWhereUniqueWithoutUserInput!]
    createMany: PostCreateManyUserInputEnvelope
    set: [PostWhereUniqueInput!]
    disconnect: [PostWhereUniqueInput!]
    delete: [PostWhereUniqueInput!]
    connect: [PostWhereUniqueInput!]
    update: [PostUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [PostUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [PostScalarWhereInput!]
  }

  input UserUpdatenumber2Input {
    set: [Decimal!]
    push: [Decimal!]
  }

  input DecimalFieldUpdateOperationsInput {
    set: Decimal
    increment: Decimal
    decrement: Decimal
    multiply: Decimal
    divide: Decimal
  }

  input IntFieldUpdateOperationsInput {
    set: Int
    increment: Int
    decrement: Int
    multiply: Int
    divide: Int
  }

  input PostUncheckedUpdateManyWithoutUserNestedInput {
    create: [PostCreateWithoutUserInput!]
    connectOrCreate: [PostCreateOrConnectWithoutUserInput!]
    upsert: [PostUpsertWithWhereUniqueWithoutUserInput!]
    createMany: PostCreateManyUserInputEnvelope
    set: [PostWhereUniqueInput!]
    disconnect: [PostWhereUniqueInput!]
    delete: [PostWhereUniqueInput!]
    connect: [PostWhereUniqueInput!]
    update: [PostUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [PostUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [PostScalarWhereInput!]
  }

  input UserCreateNestedOneWithoutPostsInput {
    create: UserUncheckedCreateWithoutPostsInput
    connectOrCreate: UserCreateOrConnectWithoutPostsInput
    connect: UserWhereUniqueInput
  }

  input CategoriesOnPostsCreateNestedManyWithoutPostInput {
    create: [CategoriesOnPostsCreateWithoutPostInput!]
    connectOrCreate: [CategoriesOnPostsCreateOrConnectWithoutPostInput!]
    createMany: CategoriesOnPostsCreateManyPostInputEnvelope
    connect: [CategoriesOnPostsWhereUniqueInput!]
  }

  input CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput {
    create: [CategoriesOnPostsCreateWithoutPostInput!]
    connectOrCreate: [CategoriesOnPostsCreateOrConnectWithoutPostInput!]
    createMany: CategoriesOnPostsCreateManyPostInputEnvelope
    connect: [CategoriesOnPostsWhereUniqueInput!]
  }

  input UserUpdateOneRequiredWithoutPostsNestedInput {
    create: UserUncheckedCreateWithoutPostsInput
    connectOrCreate: UserCreateOrConnectWithoutPostsInput
    upsert: UserUpsertWithoutPostsInput
    connect: UserWhereUniqueInput
    update: UserUncheckedUpdateWithoutPostsInput
  }

  input CategoriesOnPostsUpdateManyWithoutPostNestedInput {
    create: [CategoriesOnPostsCreateWithoutPostInput!]
    connectOrCreate: [CategoriesOnPostsCreateOrConnectWithoutPostInput!]
    upsert: [CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput!]
    createMany: CategoriesOnPostsCreateManyPostInputEnvelope
    set: [CategoriesOnPostsWhereUniqueInput!]
    disconnect: [CategoriesOnPostsWhereUniqueInput!]
    delete: [CategoriesOnPostsWhereUniqueInput!]
    connect: [CategoriesOnPostsWhereUniqueInput!]
    update: [CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput!]
    updateMany: [CategoriesOnPostsUpdateManyWithWhereWithoutPostInput!]
    deleteMany: [CategoriesOnPostsScalarWhereInput!]
  }

  input CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput {
    create: [CategoriesOnPostsCreateWithoutPostInput!]
    connectOrCreate: [CategoriesOnPostsCreateOrConnectWithoutPostInput!]
    upsert: [CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput!]
    createMany: CategoriesOnPostsCreateManyPostInputEnvelope
    set: [CategoriesOnPostsWhereUniqueInput!]
    disconnect: [CategoriesOnPostsWhereUniqueInput!]
    delete: [CategoriesOnPostsWhereUniqueInput!]
    connect: [CategoriesOnPostsWhereUniqueInput!]
    update: [CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput!]
    updateMany: [CategoriesOnPostsUpdateManyWithWhereWithoutPostInput!]
    deleteMany: [CategoriesOnPostsScalarWhereInput!]
  }

  input CategoriesOnPostsCreateNestedManyWithoutCategoryInput {
    create: [CategoriesOnPostsCreateWithoutCategoryInput!]
    connectOrCreate: [CategoriesOnPostsCreateOrConnectWithoutCategoryInput!]
    createMany: CategoriesOnPostsCreateManyCategoryInputEnvelope
    connect: [CategoriesOnPostsWhereUniqueInput!]
  }

  input CategoriesOnPostsUncheckedCreateNestedManyWithoutCategoryInput {
    create: [CategoriesOnPostsCreateWithoutCategoryInput!]
    connectOrCreate: [CategoriesOnPostsCreateOrConnectWithoutCategoryInput!]
    createMany: CategoriesOnPostsCreateManyCategoryInputEnvelope
    connect: [CategoriesOnPostsWhereUniqueInput!]
  }

  input CategoriesOnPostsUpdateManyWithoutCategoryNestedInput {
    create: [CategoriesOnPostsCreateWithoutCategoryInput!]
    connectOrCreate: [CategoriesOnPostsCreateOrConnectWithoutCategoryInput!]
    upsert: [CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput!]
    createMany: CategoriesOnPostsCreateManyCategoryInputEnvelope
    set: [CategoriesOnPostsWhereUniqueInput!]
    disconnect: [CategoriesOnPostsWhereUniqueInput!]
    delete: [CategoriesOnPostsWhereUniqueInput!]
    connect: [CategoriesOnPostsWhereUniqueInput!]
    update: [CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput!]
    updateMany: [CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput!]
    deleteMany: [CategoriesOnPostsScalarWhereInput!]
  }

  input CategoriesOnPostsUncheckedUpdateManyWithoutCategoryNestedInput {
    create: [CategoriesOnPostsCreateWithoutCategoryInput!]
    connectOrCreate: [CategoriesOnPostsCreateOrConnectWithoutCategoryInput!]
    upsert: [CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput!]
    createMany: CategoriesOnPostsCreateManyCategoryInputEnvelope
    set: [CategoriesOnPostsWhereUniqueInput!]
    disconnect: [CategoriesOnPostsWhereUniqueInput!]
    delete: [CategoriesOnPostsWhereUniqueInput!]
    connect: [CategoriesOnPostsWhereUniqueInput!]
    update: [CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput!]
    updateMany: [CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput!]
    deleteMany: [CategoriesOnPostsScalarWhereInput!]
  }

  input PostCreateNestedOneWithoutCategoriesInput {
    create: PostUncheckedCreateWithoutCategoriesInput
    connectOrCreate: PostCreateOrConnectWithoutCategoriesInput
    connect: PostWhereUniqueInput
  }

  input CategoryCreateNestedOneWithoutPostsInput {
    create: CategoryUncheckedCreateWithoutPostsInput
    connectOrCreate: CategoryCreateOrConnectWithoutPostsInput
    connect: CategoryWhereUniqueInput
  }

  input PostUpdateOneRequiredWithoutCategoriesNestedInput {
    create: PostUncheckedCreateWithoutCategoriesInput
    connectOrCreate: PostCreateOrConnectWithoutCategoriesInput
    upsert: PostUpsertWithoutCategoriesInput
    connect: PostWhereUniqueInput
    update: PostUncheckedUpdateWithoutCategoriesInput
  }

  input CategoryUpdateOneRequiredWithoutPostsNestedInput {
    create: CategoryUncheckedCreateWithoutPostsInput
    connectOrCreate: CategoryCreateOrConnectWithoutPostsInput
    upsert: CategoryUpsertWithoutPostsInput
    connect: CategoryWhereUniqueInput
    update: CategoryUncheckedUpdateWithoutPostsInput
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

  input NestedDecimalFilter {
    equals: Decimal
    in: [Decimal!]
    notIn: [Decimal!]
    lt: Decimal
    lte: Decimal
    gt: Decimal
    gte: Decimal
    not: NestedDecimalFilter
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

  input NestedDecimalWithAggregatesFilter {
    equals: Decimal
    in: [Decimal!]
    notIn: [Decimal!]
    lt: Decimal
    lte: Decimal
    gt: Decimal
    gte: Decimal
    not: NestedDecimalWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedDecimalFilter
    _sum: NestedDecimalFilter
    _min: NestedDecimalFilter
    _max: NestedDecimalFilter
  }

  input PostCreateWithoutUserInput {
    title: String!
    categories: CategoriesOnPostsCreateNestedManyWithoutPostInput
  }

  input PostUncheckedCreateWithoutUserInput {
    id: Int
    title: String!
    categories: CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput
  }

  input PostCreateOrConnectWithoutUserInput {
    where: PostWhereUniqueInput!
    create: PostUncheckedCreateWithoutUserInput!
  }

  input PostCreateManyUserInputEnvelope {
    data: [PostCreateManyUserInput!]!
    skipDuplicates: Boolean
  }

  input PostUpsertWithWhereUniqueWithoutUserInput {
    where: PostWhereUniqueInput!
    update: PostUncheckedUpdateWithoutUserInput!
    create: PostUncheckedCreateWithoutUserInput!
  }

  input PostUpdateWithWhereUniqueWithoutUserInput {
    where: PostWhereUniqueInput!
    data: PostUncheckedUpdateWithoutUserInput!
  }

  input PostUpdateManyWithWhereWithoutUserInput {
    where: PostScalarWhereInput!
    data: PostUncheckedUpdateManyWithoutPostsInput!
  }

  input PostScalarWhereInput {
    AND: [PostScalarWhereInput!]
    OR: [PostScalarWhereInput!]
    NOT: [PostScalarWhereInput!]
    id: IntFilter
    user_id: IntFilter
    title: StringFilter
  }

  input UserCreateWithoutPostsInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    number2: [Decimal!]
    number: Decimal!
  }

  input UserUncheckedCreateWithoutPostsInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    number2: [Decimal!]
    number: Decimal!
  }

  input UserCreateOrConnectWithoutPostsInput {
    where: UserWhereUniqueInput!
    create: UserUncheckedCreateWithoutPostsInput!
  }

  input CategoriesOnPostsCreateWithoutPostInput {
    category: CategoryCreateNestedOneWithoutPostsInput!
    assignedAt: DateTime
    assignedBy: String!
  }

  input CategoriesOnPostsUncheckedCreateWithoutPostInput {
    categoryId: Int!
    assignedAt: DateTime
    assignedBy: String!
  }

  input CategoriesOnPostsCreateOrConnectWithoutPostInput {
    where: CategoriesOnPostsWhereUniqueInput!
    create: CategoriesOnPostsUncheckedCreateWithoutPostInput!
  }

  input CategoriesOnPostsCreateManyPostInputEnvelope {
    data: [CategoriesOnPostsCreateManyPostInput!]!
    skipDuplicates: Boolean
  }

  input UserUpsertWithoutPostsInput {
    update: UserUncheckedUpdateWithoutPostsInput!
    create: UserUncheckedCreateWithoutPostsInput!
  }

  input UserUpdateWithoutPostsInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    number2: [Decimal!]
    number: DecimalFieldUpdateOperationsInput
  }

  input UserUncheckedUpdateWithoutPostsInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
    number2: [Decimal!]
    number: DecimalFieldUpdateOperationsInput
  }

  input CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput {
    where: CategoriesOnPostsWhereUniqueInput!
    update: CategoriesOnPostsUncheckedUpdateWithoutPostInput!
    create: CategoriesOnPostsUncheckedCreateWithoutPostInput!
  }

  input CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput {
    where: CategoriesOnPostsWhereUniqueInput!
    data: CategoriesOnPostsUncheckedUpdateWithoutPostInput!
  }

  input CategoriesOnPostsUpdateManyWithWhereWithoutPostInput {
    where: CategoriesOnPostsScalarWhereInput!
    data: CategoriesOnPostsUncheckedUpdateManyWithoutCategoriesInput!
  }

  input CategoriesOnPostsScalarWhereInput {
    AND: [CategoriesOnPostsScalarWhereInput!]
    OR: [CategoriesOnPostsScalarWhereInput!]
    NOT: [CategoriesOnPostsScalarWhereInput!]
    postId: IntFilter
    categoryId: IntFilter
    assignedAt: DateTimeFilter
    assignedBy: StringFilter
  }

  input CategoriesOnPostsCreateWithoutCategoryInput {
    post: PostCreateNestedOneWithoutCategoriesInput!
    assignedAt: DateTime
    assignedBy: String!
  }

  input CategoriesOnPostsUncheckedCreateWithoutCategoryInput {
    postId: Int!
    assignedAt: DateTime
    assignedBy: String!
  }

  input CategoriesOnPostsCreateOrConnectWithoutCategoryInput {
    where: CategoriesOnPostsWhereUniqueInput!
    create: CategoriesOnPostsUncheckedCreateWithoutCategoryInput!
  }

  input CategoriesOnPostsCreateManyCategoryInputEnvelope {
    data: [CategoriesOnPostsCreateManyCategoryInput!]!
    skipDuplicates: Boolean
  }

  input CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput {
    where: CategoriesOnPostsWhereUniqueInput!
    update: CategoriesOnPostsUncheckedUpdateWithoutCategoryInput!
    create: CategoriesOnPostsUncheckedCreateWithoutCategoryInput!
  }

  input CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput {
    where: CategoriesOnPostsWhereUniqueInput!
    data: CategoriesOnPostsUncheckedUpdateWithoutCategoryInput!
  }

  input CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput {
    where: CategoriesOnPostsScalarWhereInput!
    data: CategoriesOnPostsUncheckedUpdateManyWithoutPostsInput!
  }

  input PostCreateWithoutCategoriesInput {
    user: UserCreateNestedOneWithoutPostsInput!
    title: String!
  }

  input PostUncheckedCreateWithoutCategoriesInput {
    id: Int
    user_id: Int!
    title: String!
  }

  input PostCreateOrConnectWithoutCategoriesInput {
    where: PostWhereUniqueInput!
    create: PostUncheckedCreateWithoutCategoriesInput!
  }

  input CategoryCreateWithoutPostsInput {
    name: String!
  }

  input CategoryUncheckedCreateWithoutPostsInput {
    id: Int
    name: String!
  }

  input CategoryCreateOrConnectWithoutPostsInput {
    where: CategoryWhereUniqueInput!
    create: CategoryUncheckedCreateWithoutPostsInput!
  }

  input PostUpsertWithoutCategoriesInput {
    update: PostUncheckedUpdateWithoutCategoriesInput!
    create: PostUncheckedCreateWithoutCategoriesInput!
  }

  input PostUpdateWithoutCategoriesInput {
    user: UserUpdateOneRequiredWithoutPostsNestedInput
    title: StringFieldUpdateOperationsInput
  }

  input PostUncheckedUpdateWithoutCategoriesInput {
    id: IntFieldUpdateOperationsInput
    user_id: IntFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
  }

  input CategoryUpsertWithoutPostsInput {
    update: CategoryUncheckedUpdateWithoutPostsInput!
    create: CategoryUncheckedCreateWithoutPostsInput!
  }

  input CategoryUpdateWithoutPostsInput {
    name: StringFieldUpdateOperationsInput
  }

  input CategoryUncheckedUpdateWithoutPostsInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
  }

  input PostCreateManyUserInput {
    id: Int
    title: String!
  }

  input PostUpdateWithoutUserInput {
    title: StringFieldUpdateOperationsInput
    categories: CategoriesOnPostsUpdateManyWithoutPostNestedInput
  }

  input PostUncheckedUpdateWithoutUserInput {
    id: IntFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    categories: CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput
  }

  input PostUncheckedUpdateManyWithoutPostsInput {
    id: IntFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
  }

  input CategoriesOnPostsCreateManyPostInput {
    categoryId: Int!
    assignedAt: DateTime
    assignedBy: String!
  }

  input CategoriesOnPostsUpdateWithoutPostInput {
    category: CategoryUpdateOneRequiredWithoutPostsNestedInput
    assignedAt: DateTimeFieldUpdateOperationsInput
    assignedBy: StringFieldUpdateOperationsInput
  }

  input CategoriesOnPostsUncheckedUpdateWithoutPostInput {
    categoryId: IntFieldUpdateOperationsInput
    assignedAt: DateTimeFieldUpdateOperationsInput
    assignedBy: StringFieldUpdateOperationsInput
  }

  input CategoriesOnPostsUncheckedUpdateManyWithoutCategoriesInput {
    categoryId: IntFieldUpdateOperationsInput
    assignedAt: DateTimeFieldUpdateOperationsInput
    assignedBy: StringFieldUpdateOperationsInput
  }

  input CategoriesOnPostsCreateManyCategoryInput {
    postId: Int!
    assignedAt: DateTime
    assignedBy: String!
  }

  input CategoriesOnPostsUpdateWithoutCategoryInput {
    post: PostUpdateOneRequiredWithoutCategoriesNestedInput
    assignedAt: DateTimeFieldUpdateOperationsInput
    assignedBy: StringFieldUpdateOperationsInput
  }

  input CategoriesOnPostsUncheckedUpdateWithoutCategoryInput {
    postId: IntFieldUpdateOperationsInput
    assignedAt: DateTimeFieldUpdateOperationsInput
    assignedBy: StringFieldUpdateOperationsInput
  }

  input CategoriesOnPostsUncheckedUpdateManyWithoutPostsInput {
    postId: IntFieldUpdateOperationsInput
    assignedAt: DateTimeFieldUpdateOperationsInput
    assignedBy: StringFieldUpdateOperationsInput
  }

  type AggregateUser @shareable {
    _count: UserCountAggregateOutputType
    _avg: UserAvgAggregateOutputType
    _sum: UserSumAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type AggregatePost @shareable {
    _count: PostCountAggregateOutputType
    _avg: PostAvgAggregateOutputType
    _sum: PostSumAggregateOutputType
    _min: PostMinAggregateOutputType
    _max: PostMaxAggregateOutputType
  }

  type AggregateCategory @shareable {
    _count: CategoryCountAggregateOutputType
    _avg: CategoryAvgAggregateOutputType
    _sum: CategorySumAggregateOutputType
    _min: CategoryMinAggregateOutputType
    _max: CategoryMaxAggregateOutputType
  }

  type AggregateCategoriesOnPosts @shareable {
    _count: CategoriesOnPostsCountAggregateOutputType
    _avg: CategoriesOnPostsAvgAggregateOutputType
    _sum: CategoriesOnPostsSumAggregateOutputType
    _min: CategoriesOnPostsMinAggregateOutputType
    _max: CategoriesOnPostsMaxAggregateOutputType
  }

  type UserCountOutputType @shareable {
    posts: Int!
  }

  type UserCountAggregateOutputType @shareable {
    id: Int!
    createdAt: Int!
    username: Int!
    password: Int!
    email: Int!
    roles: Int!
    googleId: Int!
    googleProfile: Int!
    number2: Int!
    number: Int!
    _all: Int!
  }

  type UserAvgAggregateOutputType @shareable {
    id: Float
    number2: Decimal
    number: Decimal
  }

  type UserSumAggregateOutputType @shareable {
    id: Int
    number2: [Decimal!]
    number: Decimal
  }

  type UserMinAggregateOutputType
    @key(fields: "id")
    @key(fields: "createdAt")
    @key(fields: "email")
    @key(fields: "number") {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    googleId: String
    number: Decimal
  }

  type UserMaxAggregateOutputType
    @key(fields: "id")
    @key(fields: "createdAt")
    @key(fields: "email")
    @key(fields: "number") {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    googleId: String
    number: Decimal
  }

  type PostCountOutputType @shareable {
    categories: Int!
  }

  type PostCountAggregateOutputType @shareable {
    id: Int!
    user_id: Int!
    title: Int!
    _all: Int!
  }

  type PostAvgAggregateOutputType @shareable {
    id: Float
    user_id: Float
  }

  type PostSumAggregateOutputType @shareable {
    id: Int
    user_id: Int
  }

  type PostMinAggregateOutputType @key(fields: "id") @key(fields: "user_id") {
    id: Int
    user_id: Int
    title: String
  }

  type PostMaxAggregateOutputType @key(fields: "id") @key(fields: "user_id") {
    id: Int
    user_id: Int
    title: String
  }

  type CategoryCountOutputType @shareable {
    posts: Int!
  }

  type CategoryCountAggregateOutputType @shareable {
    id: Int!
    name: Int!
    _all: Int!
  }

  type CategoryAvgAggregateOutputType @shareable {
    id: Float
  }

  type CategorySumAggregateOutputType @shareable {
    id: Int
  }

  type CategoryMinAggregateOutputType @key(fields: "id") {
    id: Int
    name: String
  }

  type CategoryMaxAggregateOutputType @key(fields: "id") {
    id: Int
    name: String
  }

  type CategoriesOnPostsCountAggregateOutputType @shareable {
    postId: Int!
    categoryId: Int!
    assignedAt: Int!
    assignedBy: Int!
    _all: Int!
  }

  type CategoriesOnPostsAvgAggregateOutputType @shareable {
    postId: Float
    categoryId: Float
  }

  type CategoriesOnPostsSumAggregateOutputType @shareable {
    postId: Int
    categoryId: Int
  }

  type CategoriesOnPostsMinAggregateOutputType
    @key(fields: "postId categoryId") {
    postId: Int
    categoryId: Int
    assignedAt: DateTime
    assignedBy: String
  }

  type CategoriesOnPostsMaxAggregateOutputType
    @key(fields: "postId categoryId") {
    postId: Int
    categoryId: Int
    assignedAt: DateTime
    assignedBy: String
  }
`;
