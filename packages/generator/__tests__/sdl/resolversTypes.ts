import * as Client from '@prisma/client';

import { Context } from './context';

import { GraphQLResolveInfo } from 'graphql';

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<R>;

export interface Resolvers {
  [key: string]: { [key: string]: Resolver<any, any, any> };
  User?: User;
  Review?: Review;
  Product?: Product;
  Query?: Query;
  Mutation?: Mutation;
  AggregateUser?: AggregateUser;
  UserGroupByOutputType?: UserGroupByOutputType;
  AggregateReview?: AggregateReview;
  ReviewGroupByOutputType?: ReviewGroupByOutputType;
  AggregateProduct?: AggregateProduct;
  ProductGroupByOutputType?: ProductGroupByOutputType;
  AffectedRowsOutput?: AffectedRowsOutput;
  UserCountAggregateOutputType?: UserCountAggregateOutputType;
  UserAvgAggregateOutputType?: UserAvgAggregateOutputType;
  UserSumAggregateOutputType?: UserSumAggregateOutputType;
  UserMinAggregateOutputType?: UserMinAggregateOutputType;
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType;
  ReviewCountAggregateOutputType?: ReviewCountAggregateOutputType;
  ReviewAvgAggregateOutputType?: ReviewAvgAggregateOutputType;
  ReviewSumAggregateOutputType?: ReviewSumAggregateOutputType;
  ReviewMinAggregateOutputType?: ReviewMinAggregateOutputType;
  ReviewMaxAggregateOutputType?: ReviewMaxAggregateOutputType;
  ProductCountOutputType?: ProductCountOutputType;
  ProductCountAggregateOutputType?: ProductCountAggregateOutputType;
  ProductAvgAggregateOutputType?: ProductAvgAggregateOutputType;
  ProductSumAggregateOutputType?: ProductSumAggregateOutputType;
  ProductMinAggregateOutputType?: ProductMinAggregateOutputType;
  ProductMaxAggregateOutputType?: ProductMaxAggregateOutputType;
}

export interface User {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.User, {}, number>;
  createdAt?: Resolver<Client.User, {}, Date>;
  username?: Resolver<Client.User, {}, string | null>;
  password?: Resolver<Client.User, {}, string | null>;
  email?: Resolver<Client.User, {}, string>;
  roles?: Resolver<Client.User, {}, string[] | null>;
  googleId?: Resolver<Client.User, {}, string | null>;
  googleProfile?: Resolver<Client.User, {}, any | null>;

  __resolveReference?: any;
}

export interface Review {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Review, {}, number>;
  product?: Resolver<Client.Review, {}, Client.Product>;
  product_id?: Resolver<Client.Review, {}, number>;
  score?: Resolver<Client.Review, {}, number>;

  __resolveReference?: any;
}

export interface Product {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Product, {}, number>;
  review?: Resolver<Client.Product, ProductReviewArgs, Client.Review[] | null>;
  _count?: Resolver<Client.Product, {}, Client.Prisma.ProductCountOutputType>;

  __resolveReference?: any;
}

export interface Query {
  [key: string]: Resolver<any, any, any>;
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>;
  findManyUser?: Resolver<{}, FindManyUserArgs, Client.User[]>;
  findManyUserCount?: Resolver<{}, FindManyUserArgs, number>;
  aggregateUser?: Resolver<
    {},
    AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<AggregateUserArgs>
  >;
  groupByUser?: Resolver<
    {},
    GroupByUserArgs,
    Client.Prisma.UserGroupByOutputType[]
  >;
  findUniqueUser?: Resolver<{}, FindUniqueUserArgs, Client.User | null>;
  findFirstReview?: Resolver<{}, FindFirstReviewArgs, Client.Review | null>;
  findManyReview?: Resolver<{}, FindManyReviewArgs, Client.Review[]>;
  findManyReviewCount?: Resolver<{}, FindManyReviewArgs, number>;
  aggregateReview?: Resolver<
    {},
    AggregateReviewArgs,
    Client.Prisma.GetReviewAggregateType<AggregateReviewArgs>
  >;
  groupByReview?: Resolver<
    {},
    GroupByReviewArgs,
    Client.Prisma.ReviewGroupByOutputType[]
  >;
  findUniqueReview?: Resolver<{}, FindUniqueReviewArgs, Client.Review | null>;
  findFirstProduct?: Resolver<{}, FindFirstProductArgs, Client.Product | null>;
  findManyProduct?: Resolver<{}, FindManyProductArgs, Client.Product[]>;
  findManyProductCount?: Resolver<{}, FindManyProductArgs, number>;
  aggregateProduct?: Resolver<
    {},
    AggregateProductArgs,
    Client.Prisma.GetProductAggregateType<AggregateProductArgs>
  >;
  groupByProduct?: Resolver<
    {},
    GroupByProductArgs,
    Client.Prisma.ProductGroupByOutputType[]
  >;
  findUniqueProduct?: Resolver<
    {},
    FindUniqueProductArgs,
    Client.Product | null
  >;
}

export interface Mutation {
  [key: string]: Resolver<any, any, any>;
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>;
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>;
  createManyUser?: Resolver<{}, CreateManyUserArgs, Client.Prisma.BatchPayload>;
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>;
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>;
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>;
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>;
  createOneReview?: Resolver<{}, CreateOneReviewArgs, Client.Review>;
  upsertOneReview?: Resolver<{}, UpsertOneReviewArgs, Client.Review>;
  createManyReview?: Resolver<
    {},
    CreateManyReviewArgs,
    Client.Prisma.BatchPayload
  >;
  deleteOneReview?: Resolver<{}, DeleteOneReviewArgs, Client.Review | null>;
  updateOneReview?: Resolver<{}, UpdateOneReviewArgs, Client.Review | null>;
  updateManyReview?: Resolver<
    {},
    UpdateManyReviewArgs,
    Client.Prisma.BatchPayload
  >;
  deleteManyReview?: Resolver<
    {},
    DeleteManyReviewArgs,
    Client.Prisma.BatchPayload
  >;
  createOneProduct?: Resolver<{}, CreateOneProductArgs, Client.Product>;
  upsertOneProduct?: Resolver<{}, UpsertOneProductArgs, Client.Product>;
  createManyProduct?: Resolver<
    {},
    CreateManyProductArgs,
    Client.Prisma.BatchPayload
  >;
  deleteOneProduct?: Resolver<{}, DeleteOneProductArgs, Client.Product | null>;
  updateOneProduct?: Resolver<{}, UpdateOneProductArgs, Client.Product | null>;
  //updateManyProduct is not generated because model has only unique fields or relations.
  deleteManyProduct?: Resolver<
    {},
    DeleteManyProductArgs,
    Client.Prisma.BatchPayload
  >;
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>;
  queryRaw?: Resolver<{}, QueryRawArgs, any>;
}

export interface AggregateUser {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >;
}

export interface UserGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, number>;
  createdAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>;
  username?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  password?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  email?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>;
  roles?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string[] | null>;
  googleId?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  googleProfile?: Resolver<Client.Prisma.UserGroupByOutputType, {}, any | null>;
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >;
}

export interface AggregateReview {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateReview,
    {},
    Client.Prisma.ReviewCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateReview,
    {},
    Client.Prisma.ReviewAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateReview,
    {},
    Client.Prisma.ReviewSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateReview,
    {},
    Client.Prisma.ReviewMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateReview,
    {},
    Client.Prisma.ReviewMaxAggregateOutputType | null
  >;
}

export interface ReviewGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ReviewGroupByOutputType, {}, number>;
  product_id?: Resolver<Client.Prisma.ReviewGroupByOutputType, {}, number>;
  score?: Resolver<Client.Prisma.ReviewGroupByOutputType, {}, number>;
  _count?: Resolver<
    Client.Prisma.ReviewGroupByOutputType,
    {},
    Client.Prisma.ReviewCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.ReviewGroupByOutputType,
    {},
    Client.Prisma.ReviewAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.ReviewGroupByOutputType,
    {},
    Client.Prisma.ReviewSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.ReviewGroupByOutputType,
    {},
    Client.Prisma.ReviewMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.ReviewGroupByOutputType,
    {},
    Client.Prisma.ReviewMaxAggregateOutputType | null
  >;
}

export interface AggregateProduct {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateProduct,
    {},
    Client.Prisma.ProductCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateProduct,
    {},
    Client.Prisma.ProductAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateProduct,
    {},
    Client.Prisma.ProductSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateProduct,
    {},
    Client.Prisma.ProductMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateProduct,
    {},
    Client.Prisma.ProductMaxAggregateOutputType | null
  >;
}

export interface ProductGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ProductGroupByOutputType, {}, number>;
  _count?: Resolver<
    Client.Prisma.ProductGroupByOutputType,
    {},
    Client.Prisma.ProductCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.ProductGroupByOutputType,
    {},
    Client.Prisma.ProductAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.ProductGroupByOutputType,
    {},
    Client.Prisma.ProductSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.ProductGroupByOutputType,
    {},
    Client.Prisma.ProductMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.ProductGroupByOutputType,
    {},
    Client.Prisma.ProductMaxAggregateOutputType | null
  >;
}

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>;
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>;
}

export interface UserCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  createdAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  username?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  password?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  email?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  roles?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  googleId?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  googleProfile?: Resolver<
    Client.Prisma.UserCountAggregateOutputType,
    {},
    number
  >;
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
}

export interface UserAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserAvgAggregateOutputType, {}, number | null>;
}

export interface UserSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserSumAggregateOutputType, {}, number | null>;
}

export interface UserMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, number | null>;
  createdAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >;
  username?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >;
  password?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >;
  email?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  googleId?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >;
}

export interface UserMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, number | null>;
  createdAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >;
  username?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >;
  password?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >;
  email?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  googleId?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >;
}

export interface ReviewCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ReviewCountAggregateOutputType, {}, number>;
  product_id?: Resolver<
    Client.Prisma.ReviewCountAggregateOutputType,
    {},
    number
  >;
  score?: Resolver<Client.Prisma.ReviewCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.ReviewCountAggregateOutputType, {}, number>;
}

export interface ReviewAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ReviewAvgAggregateOutputType, {}, number | null>;
  product_id?: Resolver<
    Client.Prisma.ReviewAvgAggregateOutputType,
    {},
    number | null
  >;
  score?: Resolver<
    Client.Prisma.ReviewAvgAggregateOutputType,
    {},
    number | null
  >;
}

export interface ReviewSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ReviewSumAggregateOutputType, {}, number | null>;
  product_id?: Resolver<
    Client.Prisma.ReviewSumAggregateOutputType,
    {},
    number | null
  >;
  score?: Resolver<
    Client.Prisma.ReviewSumAggregateOutputType,
    {},
    number | null
  >;
}

export interface ReviewMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ReviewMinAggregateOutputType, {}, number | null>;
  product_id?: Resolver<
    Client.Prisma.ReviewMinAggregateOutputType,
    {},
    number | null
  >;
  score?: Resolver<
    Client.Prisma.ReviewMinAggregateOutputType,
    {},
    number | null
  >;
}

export interface ReviewMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ReviewMaxAggregateOutputType, {}, number | null>;
  product_id?: Resolver<
    Client.Prisma.ReviewMaxAggregateOutputType,
    {},
    number | null
  >;
  score?: Resolver<
    Client.Prisma.ReviewMaxAggregateOutputType,
    {},
    number | null
  >;
}

export interface ProductCountOutputType {
  [key: string]: Resolver<any, any, any>;
  review?: Resolver<Client.Prisma.ProductCountOutputType, {}, number>;
}

export interface ProductCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ProductCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.ProductCountAggregateOutputType, {}, number>;
}

export interface ProductAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ProductAvgAggregateOutputType, {}, number | null>;
}

export interface ProductSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ProductSumAggregateOutputType, {}, number | null>;
}

export interface ProductMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ProductMinAggregateOutputType, {}, number | null>;
}

export interface ProductMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ProductMaxAggregateOutputType, {}, number | null>;
}

export interface UserWhereInput {
  AND?: UserWhereInput[];
  OR?: UserWhereInput[];
  NOT?: UserWhereInput[];
  id?: IntFilter;
  createdAt?: DateTimeFilter;
  username?: StringNullableFilter | null;
  password?: StringNullableFilter | null;
  email?: StringFilter;
  roles?: StringNullableListFilter;
  googleId?: StringNullableFilter | null;
  googleProfile?: JsonNullableFilter;
}

export interface UserOrderByWithRelationInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  roles?: SortOrder;
  googleId?: SortOrder;
  googleProfile?: SortOrder;
}

export interface UserWhereUniqueInput {
  id?: number;
  username?: string;
  email?: string;
  googleId?: string;
}

export interface UserOrderByWithAggregationInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  roles?: SortOrder;
  googleId?: SortOrder;
  googleProfile?: SortOrder;
  _count?: UserCountOrderByAggregateInput;
  _avg?: UserAvgOrderByAggregateInput;
  _max?: UserMaxOrderByAggregateInput;
  _min?: UserMinOrderByAggregateInput;
  _sum?: UserSumOrderByAggregateInput;
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[];
  OR?: UserScalarWhereWithAggregatesInput[];
  NOT?: UserScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  username?: StringNullableWithAggregatesFilter | null;
  password?: StringNullableWithAggregatesFilter | null;
  email?: StringWithAggregatesFilter;
  roles?: StringNullableListFilter;
  googleId?: StringNullableWithAggregatesFilter | null;
  googleProfile?: JsonNullableWithAggregatesFilter;
}

export interface ReviewWhereInput {
  AND?: ReviewWhereInput[];
  OR?: ReviewWhereInput[];
  NOT?: ReviewWhereInput[];
  id?: IntFilter;
  product?: ProductWhereInput;
  product_id?: IntFilter;
  score?: IntFilter;
}

export interface ReviewOrderByWithRelationInput {
  id?: SortOrder;
  product?: ProductOrderByWithRelationInput;
  product_id?: SortOrder;
  score?: SortOrder;
}

export interface ReviewWhereUniqueInput {
  id?: number;
  product_id?: number;
}

export interface ReviewOrderByWithAggregationInput {
  id?: SortOrder;
  product_id?: SortOrder;
  score?: SortOrder;
  _count?: ReviewCountOrderByAggregateInput;
  _avg?: ReviewAvgOrderByAggregateInput;
  _max?: ReviewMaxOrderByAggregateInput;
  _min?: ReviewMinOrderByAggregateInput;
  _sum?: ReviewSumOrderByAggregateInput;
}

export interface ReviewScalarWhereWithAggregatesInput {
  AND?: ReviewScalarWhereWithAggregatesInput[];
  OR?: ReviewScalarWhereWithAggregatesInput[];
  NOT?: ReviewScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  product_id?: IntWithAggregatesFilter;
  score?: IntWithAggregatesFilter;
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[];
  OR?: ProductWhereInput[];
  NOT?: ProductWhereInput[];
  id?: IntFilter;
  review?: ReviewListRelationFilter;
}

export interface ProductOrderByWithRelationInput {
  id?: SortOrder;
  review?: ReviewOrderByRelationAggregateInput;
}

export interface ProductWhereUniqueInput {
  id?: number;
}

export interface ProductOrderByWithAggregationInput {
  id?: SortOrder;
  _count?: ProductCountOrderByAggregateInput;
  _avg?: ProductAvgOrderByAggregateInput;
  _max?: ProductMaxOrderByAggregateInput;
  _min?: ProductMinOrderByAggregateInput;
  _sum?: ProductSumOrderByAggregateInput;
}

export interface ProductScalarWhereWithAggregatesInput {
  AND?: ProductScalarWhereWithAggregatesInput[];
  OR?: ProductScalarWhereWithAggregatesInput[];
  NOT?: ProductScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
}

export interface UserCreateInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
}

export interface UserUncheckedCreateInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
}

export interface UserUpdateInput {
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
}

export interface UserUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
}

export interface UserCreateManyInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
}

export interface UserUpdateManyMutationInput {
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
}

export interface UserUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
}

export interface ReviewCreateInput {
  product: ProductCreateNestedOneWithoutReviewInput;
  score: number;
}

export interface ReviewUncheckedCreateInput {
  id?: number;
  product_id: number;
  score: number;
}

export interface ReviewUpdateInput {
  product?: ProductUpdateOneRequiredWithoutReviewNestedInput;
  score?: IntFieldUpdateOperationsInput;
}

export interface ReviewUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  product_id?: IntFieldUpdateOperationsInput;
  score?: IntFieldUpdateOperationsInput;
}

export interface ReviewCreateManyInput {
  id?: number;
  product_id: number;
  score: number;
}

export interface ReviewUpdateManyMutationInput {
  score?: IntFieldUpdateOperationsInput;
}

export interface ReviewUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  product_id?: IntFieldUpdateOperationsInput;
  score?: IntFieldUpdateOperationsInput;
}

export interface ProductCreateInput {
  review?: ReviewCreateNestedManyWithoutProductInput;
}

export interface ProductUncheckedCreateInput {
  id?: number;
  review?: ReviewUncheckedCreateNestedManyWithoutProductInput;
}

export interface ProductUpdateInput {
  review?: ReviewUpdateManyWithoutProductNestedInput;
}

export interface ProductUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  review?: ReviewUncheckedUpdateManyWithoutProductNestedInput;
}

export interface ProductCreateManyInput {
  id?: number;
}

export interface ProductUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
}

export interface IntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface DateTimeFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeFilter;
}

export interface StringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableFilter | null;
}

export interface StringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringFilter;
}

export interface StringNullableListFilter {
  equals?: string[] | null;
  has?: string | null;
  hasEvery?: string[];
  hasSome?: string[];
  isEmpty?: boolean;
}

export interface JsonNullableFilter {
  equals?: any;
  path?: string[];
  string_contains?: string;
  string_starts_with?: string;
  string_ends_with?: string;
  array_contains?: any | null;
  array_starts_with?: any | null;
  array_ends_with?: any | null;
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
}

export interface UserCountOrderByAggregateInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  roles?: SortOrder;
  googleId?: SortOrder;
  googleProfile?: SortOrder;
}

export interface UserAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  googleId?: SortOrder;
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  googleId?: SortOrder;
}

export interface UserSumOrderByAggregateInput {
  id?: SortOrder;
}

export interface IntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface DateTimeWithAggregatesFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface StringNullableWithAggregatesFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface StringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface JsonNullableWithAggregatesFilter {
  equals?: any;
  path?: string[];
  string_contains?: string;
  string_starts_with?: string;
  string_ends_with?: string;
  array_contains?: any | null;
  array_starts_with?: any | null;
  array_ends_with?: any | null;
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
  _count?: NestedIntNullableFilter;
  _min?: NestedJsonNullableFilter;
  _max?: NestedJsonNullableFilter;
}

export interface ProductRelationFilter {
  is?: ProductWhereInput;
  isNot?: ProductWhereInput;
}

export interface ReviewCountOrderByAggregateInput {
  id?: SortOrder;
  product_id?: SortOrder;
  score?: SortOrder;
}

export interface ReviewAvgOrderByAggregateInput {
  id?: SortOrder;
  product_id?: SortOrder;
  score?: SortOrder;
}

export interface ReviewMaxOrderByAggregateInput {
  id?: SortOrder;
  product_id?: SortOrder;
  score?: SortOrder;
}

export interface ReviewMinOrderByAggregateInput {
  id?: SortOrder;
  product_id?: SortOrder;
  score?: SortOrder;
}

export interface ReviewSumOrderByAggregateInput {
  id?: SortOrder;
  product_id?: SortOrder;
  score?: SortOrder;
}

export interface ReviewListRelationFilter {
  every?: ReviewWhereInput;
  some?: ReviewWhereInput;
  none?: ReviewWhereInput;
}

export interface ReviewOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface ProductCountOrderByAggregateInput {
  id?: SortOrder;
}

export interface ProductAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface ProductMaxOrderByAggregateInput {
  id?: SortOrder;
}

export interface ProductMinOrderByAggregateInput {
  id?: SortOrder;
}

export interface ProductSumOrderByAggregateInput {
  id?: SortOrder;
}

export interface UserCreaterolesInput {
  set: string[];
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: Date;
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null;
}

export interface StringFieldUpdateOperationsInput {
  set?: string;
}

export interface UserUpdaterolesInput {
  set?: string[];
  push?: string;
}

export interface IntFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface ProductCreateNestedOneWithoutReviewInput {
  create?: ProductUncheckedCreateWithoutReviewInput;
  connectOrCreate?: ProductCreateOrConnectWithoutReviewInput;
  connect?: ProductWhereUniqueInput;
}

export interface ProductUpdateOneRequiredWithoutReviewNestedInput {
  create?: ProductUncheckedCreateWithoutReviewInput;
  connectOrCreate?: ProductCreateOrConnectWithoutReviewInput;
  upsert?: ProductUpsertWithoutReviewInput;
  connect?: ProductWhereUniqueInput;
  update?: ProductUncheckedUpdateWithoutReviewInput;
}

export interface ReviewCreateNestedManyWithoutProductInput {
  create?: ReviewCreateWithoutProductInput[];
  connectOrCreate?: ReviewCreateOrConnectWithoutProductInput[];
  createMany?: ReviewCreateManyProductInputEnvelope;
  connect?: ReviewWhereUniqueInput[];
}

export interface ReviewUncheckedCreateNestedManyWithoutProductInput {
  create?: ReviewCreateWithoutProductInput[];
  connectOrCreate?: ReviewCreateOrConnectWithoutProductInput[];
  createMany?: ReviewCreateManyProductInputEnvelope;
  connect?: ReviewWhereUniqueInput[];
}

export interface ReviewUpdateManyWithoutProductNestedInput {
  create?: ReviewCreateWithoutProductInput[];
  connectOrCreate?: ReviewCreateOrConnectWithoutProductInput[];
  upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput[];
  createMany?: ReviewCreateManyProductInputEnvelope;
  set?: ReviewWhereUniqueInput[];
  disconnect?: ReviewWhereUniqueInput[];
  delete?: ReviewWhereUniqueInput[];
  connect?: ReviewWhereUniqueInput[];
  update?: ReviewUpdateWithWhereUniqueWithoutProductInput[];
  updateMany?: ReviewUpdateManyWithWhereWithoutProductInput[];
  deleteMany?: ReviewScalarWhereInput[];
}

export interface ReviewUncheckedUpdateManyWithoutProductNestedInput {
  create?: ReviewCreateWithoutProductInput[];
  connectOrCreate?: ReviewCreateOrConnectWithoutProductInput[];
  upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput[];
  createMany?: ReviewCreateManyProductInputEnvelope;
  set?: ReviewWhereUniqueInput[];
  disconnect?: ReviewWhereUniqueInput[];
  delete?: ReviewWhereUniqueInput[];
  connect?: ReviewWhereUniqueInput[];
  update?: ReviewUpdateWithWhereUniqueWithoutProductInput[];
  updateMany?: ReviewUpdateManyWithWhereWithoutProductInput[];
  deleteMany?: ReviewScalarWhereInput[];
}

export interface NestedIntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface NestedDateTimeFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeFilter;
}

export interface NestedStringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableFilter | null;
}

export interface NestedStringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringFilter;
}

export interface NestedIntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface NestedFloatFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter;
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface NestedIntNullableFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableFilter | null;
}

export interface NestedStringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface NestedJsonNullableFilter {
  equals?: any;
  path?: string[];
  string_contains?: string;
  string_starts_with?: string;
  string_ends_with?: string;
  array_contains?: any | null;
  array_starts_with?: any | null;
  array_ends_with?: any | null;
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
}

export interface ProductUncheckedCreateWithoutReviewInput {
  id?: number;
}

export interface ProductCreateOrConnectWithoutReviewInput {
  where: ProductWhereUniqueInput;
  create: ProductUncheckedCreateWithoutReviewInput;
}

export interface ProductUpsertWithoutReviewInput {
  update: ProductUncheckedUpdateWithoutReviewInput;
  create: ProductUncheckedCreateWithoutReviewInput;
}

export interface ProductUncheckedUpdateWithoutReviewInput {
  id?: IntFieldUpdateOperationsInput;
}

export interface ReviewCreateWithoutProductInput {
  score: number;
}

export interface ReviewUncheckedCreateWithoutProductInput {
  id?: number;
  score: number;
}

export interface ReviewCreateOrConnectWithoutProductInput {
  where: ReviewWhereUniqueInput;
  create: ReviewUncheckedCreateWithoutProductInput;
}

export interface ReviewCreateManyProductInputEnvelope {
  data: ReviewCreateManyProductInput[];
  skipDuplicates?: boolean;
}

export interface ReviewUpsertWithWhereUniqueWithoutProductInput {
  where: ReviewWhereUniqueInput;
  update: ReviewUncheckedUpdateWithoutProductInput;
  create: ReviewUncheckedCreateWithoutProductInput;
}

export interface ReviewUpdateWithWhereUniqueWithoutProductInput {
  where: ReviewWhereUniqueInput;
  data: ReviewUncheckedUpdateWithoutProductInput;
}

export interface ReviewUpdateManyWithWhereWithoutProductInput {
  where: ReviewScalarWhereInput;
  data: ReviewUncheckedUpdateManyWithoutReviewInput;
}

export interface ReviewScalarWhereInput {
  AND?: ReviewScalarWhereInput[];
  OR?: ReviewScalarWhereInput[];
  NOT?: ReviewScalarWhereInput[];
  id?: IntFilter;
  product_id?: IntFilter;
  score?: IntFilter;
}

export interface ReviewCreateManyProductInput {
  id?: number;
  score: number;
}

export interface ReviewUpdateWithoutProductInput {
  score?: IntFieldUpdateOperationsInput;
}

export interface ReviewUncheckedUpdateWithoutProductInput {
  id?: IntFieldUpdateOperationsInput;
  score?: IntFieldUpdateOperationsInput;
}

export interface ReviewUncheckedUpdateManyWithoutReviewInput {
  id?: IntFieldUpdateOperationsInput;
  score?: IntFieldUpdateOperationsInput;
}

export enum JsonNullValueFilter {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull',
  AnyNull = 'AnyNull',
}
export enum NullableJsonNullValueInput {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull',
}
export enum ProductScalarFieldEnum {
  id = 'id',
}
export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
export enum ReviewScalarFieldEnum {
  id = 'id',
  product_id = 'product_id',
  score = 'score',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}
export enum UserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  username = 'username',
  password = 'password',
  email = 'email',
  roles = 'roles',
  googleId = 'googleId',
  googleProfile = 'googleProfile',
}
