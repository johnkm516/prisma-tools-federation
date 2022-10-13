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
  }

  input Users_UserWhereUniqueInput {
    id: Int
    username: String
    email: String
    googleId: String
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
  }

  input Users_ReviewWhereInput {
    AND: [Users_ReviewWhereInput!]
    OR: [Users_ReviewWhereInput!]
    NOT: [Users_ReviewWhereInput!]
    id: IntFilter
    product: Users_ProductWhereInput
    product_id: IntFilter
    score: IntFilter
  }

  input Users_ReviewOrderByWithRelationInput {
    id: SortOrder
    product: Users_ProductOrderByWithRelationInput
    product_id: SortOrder
    score: SortOrder
  }

  input Users_ReviewWhereUniqueInput {
    id: Int
    product_id: Int
  }

  input Users_ReviewOrderByWithAggregationInput {
    id: SortOrder
    product_id: SortOrder
    score: SortOrder
    _count: Users_ReviewCountOrderByAggregateInput
    _avg: Users_ReviewAvgOrderByAggregateInput
    _max: Users_ReviewMaxOrderByAggregateInput
    _min: Users_ReviewMinOrderByAggregateInput
    _sum: Users_ReviewSumOrderByAggregateInput
  }

  input Users_ReviewScalarWhereWithAggregatesInput {
    AND: [Users_ReviewScalarWhereWithAggregatesInput!]
    OR: [Users_ReviewScalarWhereWithAggregatesInput!]
    NOT: [Users_ReviewScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    product_id: IntWithAggregatesFilter
    score: IntWithAggregatesFilter
  }

  input Users_ProductWhereInput {
    AND: [Users_ProductWhereInput!]
    OR: [Users_ProductWhereInput!]
    NOT: [Users_ProductWhereInput!]
    id: IntFilter
    review: Users_ReviewListRelationFilter
  }

  input Users_ProductOrderByWithRelationInput {
    id: SortOrder
    review: Users_ReviewOrderByRelationAggregateInput
  }

  input Users_ProductWhereUniqueInput {
    id: Int
  }

  input Users_ProductOrderByWithAggregationInput {
    id: SortOrder
    _count: Users_ProductCountOrderByAggregateInput
    _avg: Users_ProductAvgOrderByAggregateInput
    _max: Users_ProductMaxOrderByAggregateInput
    _min: Users_ProductMinOrderByAggregateInput
    _sum: Users_ProductSumOrderByAggregateInput
  }

  input Users_ProductScalarWhereWithAggregatesInput {
    AND: [Users_ProductScalarWhereWithAggregatesInput!]
    OR: [Users_ProductScalarWhereWithAggregatesInput!]
    NOT: [Users_ProductScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
  }

  input Users_UserCreateInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
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
  }

  input Users_UserUpdateInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
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
  }

  input Users_UserUpdateManyMutationInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    username: NullableStringFieldUpdateOperationsInput
    password: NullableStringFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    roles: [String!]
    googleId: NullableStringFieldUpdateOperationsInput
    googleProfile: Json
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
  }

  input Users_ReviewCreateInput {
    product: Users_ProductCreateNestedOneWithoutReviewInput!
    score: Int!
  }

  input Users_ReviewUncheckedCreateInput {
    id: Int
    product_id: Int!
    score: Int!
  }

  input Users_ReviewUpdateInput {
    product: Users_ProductUpdateOneRequiredWithoutReviewNestedInput
    score: IntFieldUpdateOperationsInput
  }

  input Users_ReviewUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    product_id: IntFieldUpdateOperationsInput
    score: IntFieldUpdateOperationsInput
  }

  input Users_ReviewCreateManyInput {
    id: Int
    product_id: Int!
    score: Int!
  }

  input Users_ReviewUpdateManyMutationInput {
    score: IntFieldUpdateOperationsInput
  }

  input Users_ReviewUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    product_id: IntFieldUpdateOperationsInput
    score: IntFieldUpdateOperationsInput
  }

  input Users_ProductCreateInput {
    review: Users_ReviewCreateNestedManyWithoutProductInput
  }

  input Users_ProductUncheckedCreateInput {
    id: Int
    review: Users_ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  input Users_ProductUpdateInput {
    review: Users_ReviewUpdateManyWithoutProductNestedInput
  }

  input Users_ProductUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    review: Users_ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  input Users_ProductCreateManyInput {
    id: Int
  }

  input Users_ProductUncheckedUpdateManyInput {
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

  input Users_UserCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
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
  }

  input Users_UserMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    googleId: SortOrder
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

  input Users_ProductRelationFilter {
    is: Users_ProductWhereInput
    isNot: Users_ProductWhereInput
  }

  input Users_ReviewCountOrderByAggregateInput {
    id: SortOrder
    product_id: SortOrder
    score: SortOrder
  }

  input Users_ReviewAvgOrderByAggregateInput {
    id: SortOrder
    product_id: SortOrder
    score: SortOrder
  }

  input Users_ReviewMaxOrderByAggregateInput {
    id: SortOrder
    product_id: SortOrder
    score: SortOrder
  }

  input Users_ReviewMinOrderByAggregateInput {
    id: SortOrder
    product_id: SortOrder
    score: SortOrder
  }

  input Users_ReviewSumOrderByAggregateInput {
    id: SortOrder
    product_id: SortOrder
    score: SortOrder
  }

  input Users_ReviewListRelationFilter {
    every: Users_ReviewWhereInput
    some: Users_ReviewWhereInput
    none: Users_ReviewWhereInput
  }

  input Users_ReviewOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input Users_ProductCountOrderByAggregateInput {
    id: SortOrder
  }

  input Users_ProductAvgOrderByAggregateInput {
    id: SortOrder
  }

  input Users_ProductMaxOrderByAggregateInput {
    id: SortOrder
  }

  input Users_ProductMinOrderByAggregateInput {
    id: SortOrder
  }

  input Users_ProductSumOrderByAggregateInput {
    id: SortOrder
  }

  input Users_UserCreaterolesInput {
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

  input Users_UserUpdaterolesInput {
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

  input Users_ProductCreateNestedOneWithoutReviewInput {
    create: Users_ProductUncheckedCreateWithoutReviewInput
    connectOrCreate: Users_ProductCreateOrConnectWithoutReviewInput
    connect: Users_ProductWhereUniqueInput
  }

  input Users_ProductUpdateOneRequiredWithoutReviewNestedInput {
    create: Users_ProductUncheckedCreateWithoutReviewInput
    connectOrCreate: Users_ProductCreateOrConnectWithoutReviewInput
    upsert: Users_ProductUpsertWithoutReviewInput
    connect: Users_ProductWhereUniqueInput
    update: Users_ProductUncheckedUpdateWithoutReviewInput
  }

  input Users_ReviewCreateNestedManyWithoutProductInput {
    create: [Users_ReviewCreateWithoutProductInput!]
    connectOrCreate: [Users_ReviewCreateOrConnectWithoutProductInput!]
    createMany: Users_ReviewCreateManyProductInputEnvelope
    connect: [Users_ReviewWhereUniqueInput!]
  }

  input Users_ReviewUncheckedCreateNestedManyWithoutProductInput {
    create: [Users_ReviewCreateWithoutProductInput!]
    connectOrCreate: [Users_ReviewCreateOrConnectWithoutProductInput!]
    createMany: Users_ReviewCreateManyProductInputEnvelope
    connect: [Users_ReviewWhereUniqueInput!]
  }

  input Users_ReviewUpdateManyWithoutProductNestedInput {
    create: [Users_ReviewCreateWithoutProductInput!]
    connectOrCreate: [Users_ReviewCreateOrConnectWithoutProductInput!]
    upsert: [Users_ReviewUpsertWithWhereUniqueWithoutProductInput!]
    createMany: Users_ReviewCreateManyProductInputEnvelope
    set: [Users_ReviewWhereUniqueInput!]
    disconnect: [Users_ReviewWhereUniqueInput!]
    delete: [Users_ReviewWhereUniqueInput!]
    connect: [Users_ReviewWhereUniqueInput!]
    update: [Users_ReviewUpdateWithWhereUniqueWithoutProductInput!]
    updateMany: [Users_ReviewUpdateManyWithWhereWithoutProductInput!]
    deleteMany: [Users_ReviewScalarWhereInput!]
  }

  input Users_ReviewUncheckedUpdateManyWithoutProductNestedInput {
    create: [Users_ReviewCreateWithoutProductInput!]
    connectOrCreate: [Users_ReviewCreateOrConnectWithoutProductInput!]
    upsert: [Users_ReviewUpsertWithWhereUniqueWithoutProductInput!]
    createMany: Users_ReviewCreateManyProductInputEnvelope
    set: [Users_ReviewWhereUniqueInput!]
    disconnect: [Users_ReviewWhereUniqueInput!]
    delete: [Users_ReviewWhereUniqueInput!]
    connect: [Users_ReviewWhereUniqueInput!]
    update: [Users_ReviewUpdateWithWhereUniqueWithoutProductInput!]
    updateMany: [Users_ReviewUpdateManyWithWhereWithoutProductInput!]
    deleteMany: [Users_ReviewScalarWhereInput!]
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

  input Users_ProductUncheckedCreateWithoutReviewInput {
    id: Int
  }

  input Users_ProductCreateOrConnectWithoutReviewInput {
    where: Users_ProductWhereUniqueInput!
    create: Users_ProductUncheckedCreateWithoutReviewInput!
  }

  input Users_ProductUpsertWithoutReviewInput {
    update: Users_ProductUncheckedUpdateWithoutReviewInput!
    create: Users_ProductUncheckedCreateWithoutReviewInput!
  }

  input Users_ProductUncheckedUpdateWithoutReviewInput {
    id: IntFieldUpdateOperationsInput
  }

  input Users_ReviewCreateWithoutProductInput {
    score: Int!
  }

  input Users_ReviewUncheckedCreateWithoutProductInput {
    id: Int
    score: Int!
  }

  input Users_ReviewCreateOrConnectWithoutProductInput {
    where: Users_ReviewWhereUniqueInput!
    create: Users_ReviewUncheckedCreateWithoutProductInput!
  }

  input Users_ReviewCreateManyProductInputEnvelope {
    data: [Users_ReviewCreateManyProductInput!]!
    skipDuplicates: Boolean
  }

  input Users_ReviewUpsertWithWhereUniqueWithoutProductInput {
    where: Users_ReviewWhereUniqueInput!
    update: Users_ReviewUncheckedUpdateWithoutProductInput!
    create: Users_ReviewUncheckedCreateWithoutProductInput!
  }

  input Users_ReviewUpdateWithWhereUniqueWithoutProductInput {
    where: Users_ReviewWhereUniqueInput!
    data: Users_ReviewUncheckedUpdateWithoutProductInput!
  }

  input Users_ReviewUpdateManyWithWhereWithoutProductInput {
    where: Users_ReviewScalarWhereInput!
    data: Users_ReviewUncheckedUpdateManyWithoutReviewInput!
  }

  input Users_ReviewScalarWhereInput {
    AND: [Users_ReviewScalarWhereInput!]
    OR: [Users_ReviewScalarWhereInput!]
    NOT: [Users_ReviewScalarWhereInput!]
    id: IntFilter
    product_id: IntFilter
    score: IntFilter
  }

  input Users_ReviewCreateManyProductInput {
    id: Int
    score: Int!
  }

  input Users_ReviewUpdateWithoutProductInput {
    score: IntFieldUpdateOperationsInput
  }

  input Users_ReviewUncheckedUpdateWithoutProductInput {
    id: IntFieldUpdateOperationsInput
    score: IntFieldUpdateOperationsInput
  }

  input Users_ReviewUncheckedUpdateManyWithoutReviewInput {
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
    @key(fields: "product_id")
    @shareable {
    id: Int
    product_id: Int
    score: Int
  }

  type ReviewMaxAggregateOutputType
    @key(fields: "id")
    @key(fields: "product_id")
    @shareable {
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

  type ProductMinAggregateOutputType @key(fields: "id") @shareable {
    id: Int
  }

  type ProductMaxAggregateOutputType @key(fields: "id") @shareable {
    id: Int
  }
`;
