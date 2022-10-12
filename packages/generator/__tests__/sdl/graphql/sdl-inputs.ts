import gql from 'graphql-tag';

export default gql`
  scalar DateTime

  type BatchPayload {
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

  enum ProductScalarFieldEnum {
    id
  }

  enum QueryMode {
    default
    insensitive
  }

  enum ReviewScalarFieldEnum {
    id
    product_id
    score
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
  }

  input UserWhereUniqueInput {
    id: Int
    username: String
    email: String
    googleId: String
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
  }

  input ReviewWhereInput {
    AND: [ReviewWhereInput!]
    OR: [ReviewWhereInput!]
    NOT: [ReviewWhereInput!]
    id: IntFilter
    product: ProductWhereInput
    product_id: IntFilter
    score: IntFilter
  }

  input ReviewOrderByWithRelationInput {
    id: SortOrder
    product: ProductOrderByWithRelationInput
    product_id: SortOrder
    score: SortOrder
  }

  input ReviewWhereUniqueInput {
    id: Int
    product_id: Int
  }

  input ReviewOrderByWithAggregationInput {
    id: SortOrder
    product_id: SortOrder
    score: SortOrder
    _count: ReviewCountOrderByAggregateInput
    _avg: ReviewAvgOrderByAggregateInput
    _max: ReviewMaxOrderByAggregateInput
    _min: ReviewMinOrderByAggregateInput
    _sum: ReviewSumOrderByAggregateInput
  }

  input ReviewScalarWhereWithAggregatesInput {
    AND: [ReviewScalarWhereWithAggregatesInput!]
    OR: [ReviewScalarWhereWithAggregatesInput!]
    NOT: [ReviewScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    product_id: IntWithAggregatesFilter
    score: IntWithAggregatesFilter
  }

  input ProductWhereInput {
    AND: [ProductWhereInput!]
    OR: [ProductWhereInput!]
    NOT: [ProductWhereInput!]
    id: IntFilter
    review: ReviewListRelationFilter
  }

  input ProductOrderByWithRelationInput {
    id: SortOrder
    review: ReviewOrderByRelationAggregateInput
  }

  input ProductWhereUniqueInput {
    id: Int
  }

  input ProductOrderByWithAggregationInput {
    id: SortOrder
    _count: ProductCountOrderByAggregateInput
    _avg: ProductAvgOrderByAggregateInput
    _max: ProductMaxOrderByAggregateInput
    _min: ProductMinOrderByAggregateInput
    _sum: ProductSumOrderByAggregateInput
  }

  input ProductScalarWhereWithAggregatesInput {
    AND: [ProductScalarWhereWithAggregatesInput!]
    OR: [ProductScalarWhereWithAggregatesInput!]
    NOT: [ProductScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
  }

  input UserCreateInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
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
  }

  input UserUpdateInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
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
  }

  input UserUpdateManyMutationInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
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
  }

  input ReviewCreateInput {
    product: ProductCreateNestedOneWithoutReviewInput!
    score: Int!
  }

  input ReviewUncheckedCreateInput {
    id: Int
    product_id: Int!
    score: Int!
  }

  input ReviewUpdateInput {
    product: ProductUpdateOneRequiredWithoutReviewNestedInput
    score: IntFieldUpdateOperationsInput
  }

  input ReviewUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    product_id: IntFieldUpdateOperationsInput
    score: IntFieldUpdateOperationsInput
  }

  input ReviewCreateManyInput {
    id: Int
    product_id: Int!
    score: Int!
  }

  input ReviewUpdateManyMutationInput {
    score: IntFieldUpdateOperationsInput
  }

  input ReviewUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    product_id: IntFieldUpdateOperationsInput
    score: IntFieldUpdateOperationsInput
  }

  input ProductCreateInput {
    review: ReviewCreateNestedManyWithoutProductInput
  }

  input ProductUncheckedCreateInput {
    id: Int
    review: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  input ProductUpdateInput {
    review: ReviewUpdateManyWithoutProductNestedInput
  }

  input ProductUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    review: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  input ProductCreateManyInput {
    id: Int
  }

  input ProductUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
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

  input UserCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
  }

  input UserAvgOrderByAggregateInput {
    id: SortOrder
  }

  input UserMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    googleId: SortOrder
  }

  input UserMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    googleId: SortOrder
  }

  input UserSumOrderByAggregateInput {
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

  input ProductRelationFilter {
    is: ProductWhereInput
    isNot: ProductWhereInput
  }

  input ReviewCountOrderByAggregateInput {
    id: SortOrder
    product_id: SortOrder
    score: SortOrder
  }

  input ReviewAvgOrderByAggregateInput {
    id: SortOrder
    product_id: SortOrder
    score: SortOrder
  }

  input ReviewMaxOrderByAggregateInput {
    id: SortOrder
    product_id: SortOrder
    score: SortOrder
  }

  input ReviewMinOrderByAggregateInput {
    id: SortOrder
    product_id: SortOrder
    score: SortOrder
  }

  input ReviewSumOrderByAggregateInput {
    id: SortOrder
    product_id: SortOrder
    score: SortOrder
  }

  input ReviewListRelationFilter {
    every: ReviewWhereInput
    some: ReviewWhereInput
    none: ReviewWhereInput
  }

  input ReviewOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input ProductCountOrderByAggregateInput {
    id: SortOrder
  }

  input ProductAvgOrderByAggregateInput {
    id: SortOrder
  }

  input ProductMaxOrderByAggregateInput {
    id: SortOrder
  }

  input ProductMinOrderByAggregateInput {
    id: SortOrder
  }

  input ProductSumOrderByAggregateInput {
    id: SortOrder
  }

  input UserCreaterolesInput {
    set: [String!]!
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

  input IntFieldUpdateOperationsInput {
    set: Int
    increment: Int
    decrement: Int
    multiply: Int
    divide: Int
  }

  input ProductCreateNestedOneWithoutReviewInput {
    create: ProductUncheckedCreateWithoutReviewInput
    connectOrCreate: ProductCreateOrConnectWithoutReviewInput
    connect: ProductWhereUniqueInput
  }

  input ProductUpdateOneRequiredWithoutReviewNestedInput {
    create: ProductUncheckedCreateWithoutReviewInput
    connectOrCreate: ProductCreateOrConnectWithoutReviewInput
    upsert: ProductUpsertWithoutReviewInput
    connect: ProductWhereUniqueInput
    update: ProductUncheckedUpdateWithoutReviewInput
  }

  input ReviewCreateNestedManyWithoutProductInput {
    create: [ReviewCreateWithoutProductInput!]
    connectOrCreate: [ReviewCreateOrConnectWithoutProductInput!]
    createMany: ReviewCreateManyProductInputEnvelope
    connect: [ReviewWhereUniqueInput!]
  }

  input ReviewUncheckedCreateNestedManyWithoutProductInput {
    create: [ReviewCreateWithoutProductInput!]
    connectOrCreate: [ReviewCreateOrConnectWithoutProductInput!]
    createMany: ReviewCreateManyProductInputEnvelope
    connect: [ReviewWhereUniqueInput!]
  }

  input ReviewUpdateManyWithoutProductNestedInput {
    create: [ReviewCreateWithoutProductInput!]
    connectOrCreate: [ReviewCreateOrConnectWithoutProductInput!]
    upsert: [ReviewUpsertWithWhereUniqueWithoutProductInput!]
    createMany: ReviewCreateManyProductInputEnvelope
    set: [ReviewWhereUniqueInput!]
    disconnect: [ReviewWhereUniqueInput!]
    delete: [ReviewWhereUniqueInput!]
    connect: [ReviewWhereUniqueInput!]
    update: [ReviewUpdateWithWhereUniqueWithoutProductInput!]
    updateMany: [ReviewUpdateManyWithWhereWithoutProductInput!]
    deleteMany: [ReviewScalarWhereInput!]
  }

  input ReviewUncheckedUpdateManyWithoutProductNestedInput {
    create: [ReviewCreateWithoutProductInput!]
    connectOrCreate: [ReviewCreateOrConnectWithoutProductInput!]
    upsert: [ReviewUpsertWithWhereUniqueWithoutProductInput!]
    createMany: ReviewCreateManyProductInputEnvelope
    set: [ReviewWhereUniqueInput!]
    disconnect: [ReviewWhereUniqueInput!]
    delete: [ReviewWhereUniqueInput!]
    connect: [ReviewWhereUniqueInput!]
    update: [ReviewUpdateWithWhereUniqueWithoutProductInput!]
    updateMany: [ReviewUpdateManyWithWhereWithoutProductInput!]
    deleteMany: [ReviewScalarWhereInput!]
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

  input ProductUncheckedCreateWithoutReviewInput {
    id: Int
  }

  input ProductCreateOrConnectWithoutReviewInput {
    where: ProductWhereUniqueInput!
    create: ProductUncheckedCreateWithoutReviewInput!
  }

  input ProductUpsertWithoutReviewInput {
    update: ProductUncheckedUpdateWithoutReviewInput!
    create: ProductUncheckedCreateWithoutReviewInput!
  }

  input ProductUncheckedUpdateWithoutReviewInput {
    id: IntFieldUpdateOperationsInput
  }

  input ReviewCreateWithoutProductInput {
    score: Int!
  }

  input ReviewUncheckedCreateWithoutProductInput {
    id: Int
    score: Int!
  }

  input ReviewCreateOrConnectWithoutProductInput {
    where: ReviewWhereUniqueInput!
    create: ReviewUncheckedCreateWithoutProductInput!
  }

  input ReviewCreateManyProductInputEnvelope {
    data: [ReviewCreateManyProductInput!]!
    skipDuplicates: Boolean
  }

  input ReviewUpsertWithWhereUniqueWithoutProductInput {
    where: ReviewWhereUniqueInput!
    update: ReviewUncheckedUpdateWithoutProductInput!
    create: ReviewUncheckedCreateWithoutProductInput!
  }

  input ReviewUpdateWithWhereUniqueWithoutProductInput {
    where: ReviewWhereUniqueInput!
    data: ReviewUncheckedUpdateWithoutProductInput!
  }

  input ReviewUpdateManyWithWhereWithoutProductInput {
    where: ReviewScalarWhereInput!
    data: ReviewUncheckedUpdateManyWithoutReviewInput!
  }

  input ReviewScalarWhereInput {
    AND: [ReviewScalarWhereInput!]
    OR: [ReviewScalarWhereInput!]
    NOT: [ReviewScalarWhereInput!]
    id: IntFilter
    product_id: IntFilter
    score: IntFilter
  }

  input ReviewCreateManyProductInput {
    id: Int
    score: Int!
  }

  input ReviewUpdateWithoutProductInput {
    score: IntFieldUpdateOperationsInput
  }

  input ReviewUncheckedUpdateWithoutProductInput {
    id: IntFieldUpdateOperationsInput
    score: IntFieldUpdateOperationsInput
  }

  input ReviewUncheckedUpdateManyWithoutReviewInput {
    id: IntFieldUpdateOperationsInput
    score: IntFieldUpdateOperationsInput
  }

  type AggregateUser @shareable {
    _count: UserCountAggregateOutputType
    _avg: UserAvgAggregateOutputType
    _sum: UserSumAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type AggregateReview @shareable {
    _count: ReviewCountAggregateOutputType
    _avg: ReviewAvgAggregateOutputType
    _sum: ReviewSumAggregateOutputType
    _min: ReviewMinAggregateOutputType
    _max: ReviewMaxAggregateOutputType
  }

  type AggregateProduct @shareable {
    _count: ProductCountAggregateOutputType
    _avg: ProductAvgAggregateOutputType
    _sum: ProductSumAggregateOutputType
    _min: ProductMinAggregateOutputType
    _max: ProductMaxAggregateOutputType
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
    _all: Int!
  }

  type UserAvgAggregateOutputType @shareable {
    id: Float
  }

  type UserSumAggregateOutputType @shareable {
    id: Int
  }

  type UserMinAggregateOutputType @key(fields: "id") @key(fields: "email") {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    googleId: String
  }

  type UserMaxAggregateOutputType @key(fields: "id") @key(fields: "email") {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    googleId: String
  }

  type ReviewCountAggregateOutputType @shareable {
    id: Int!
    product_id: Int!
    score: Int!
    _all: Int!
  }

  type ReviewAvgAggregateOutputType @shareable {
    id: Float
    product_id: Float
    score: Float
  }

  type ReviewSumAggregateOutputType @shareable {
    id: Int
    product_id: Int
    score: Int
  }

  type ReviewMinAggregateOutputType
    @key(fields: "id")
    @key(fields: "product_id") {
    id: Int
    product_id: Int
    score: Int
  }

  type ReviewMaxAggregateOutputType
    @key(fields: "id")
    @key(fields: "product_id") {
    id: Int
    product_id: Int
    score: Int
  }

  type ProductCountOutputType @shareable {
    review: Int!
  }

  type ProductCountAggregateOutputType @shareable {
    id: Int!
    _all: Int!
  }

  type ProductAvgAggregateOutputType @shareable {
    id: Float
  }

  type ProductSumAggregateOutputType @shareable {
    id: Int
  }

  type ProductMinAggregateOutputType @key(fields: "id") {
    id: Int
  }

  type ProductMaxAggregateOutputType @key(fields: "id") {
    id: Int
  }
`;
