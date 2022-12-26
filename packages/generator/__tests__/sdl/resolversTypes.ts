import * as Client from '@prisma/client';

import { Context } from './context';

import { GraphQLResolveInfo } from 'graphql';

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<R>;

// cause typescript not to expand types and preserve names
type NoExpand<T> = T extends unknown ? T : never;

// this type assumes the passed object is entirely optional
type AtLeast<O extends object, K extends string> = NoExpand<
  O extends unknown
    ?
        | (K extends keyof O ? { [P in K]: O[P] } & O : O)
        | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
    : never
>;

export type GroupByError =
  | `Error: Field "${any}" used in "having" needs to be provided in "by".`
  | [Error, 'Field ', any, ' in "having" needs to be provided in "by"'];

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
  price?: Resolver<Client.Product, {}, number>;
  review?: Resolver<
    Client.Product,
    Users_ProductReviewArgs,
    Client.Review[] | null
  >;
  _count?: Resolver<Client.Product, {}, Client.Prisma.ProductCountOutputType>;

  __resolveReference?: any;
}

export interface Query {
  [key: string]: Resolver<any, any, any>;
  Users_findFirstUser?: Resolver<
    {},
    Users_FindFirstUserArgs,
    Client.User | null
  >;
  Users_findFirstUserOrThrow?: Resolver<
    {},
    Users_FindFirstUserOrThrowArgs,
    Client.User | null
  >;
  Users_findManyUser?: Resolver<{}, Users_FindManyUserArgs, Client.User[]>;
  Users_findManyUserCount?: Resolver<{}, Users_FindManyUserArgs, number>;
  Users_aggregateUser?: Resolver<
    {},
    Users_AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<Users_AggregateUserArgs>
  >;
  //Users_groupByUser is not generated because model has only unique fields or relations.
  Users_groupByUser?: Resolver<
    {},
    any,
    Client.Prisma.GetUserGroupByPayload<Users_GroupByUserArgs> | GroupByError
  >;
  Users_findUniqueUser?: Resolver<
    {},
    Users_FindUniqueUserArgs,
    Client.User | null
  >;
  Users_findUniqueUserOrThrow?: Resolver<
    {},
    Users_FindUniqueUserOrThrowArgs,
    Client.User | null
  >;
  Users_findFirstReview?: Resolver<
    {},
    Users_FindFirstReviewArgs,
    Client.Review | null
  >;
  Users_findFirstReviewOrThrow?: Resolver<
    {},
    Users_FindFirstReviewOrThrowArgs,
    Client.Review | null
  >;
  Users_findManyReview?: Resolver<
    {},
    Users_FindManyReviewArgs,
    Client.Review[]
  >;
  Users_findManyReviewCount?: Resolver<{}, Users_FindManyReviewArgs, number>;
  Users_aggregateReview?: Resolver<
    {},
    Users_AggregateReviewArgs,
    Client.Prisma.GetReviewAggregateType<Users_AggregateReviewArgs>
  >;
  //Users_groupByReview is not generated because model has only unique fields or relations.
  Users_groupByReview?: Resolver<
    {},
    any,
    | Client.Prisma.GetReviewGroupByPayload<Users_GroupByReviewArgs>
    | GroupByError
  >;
  Users_findUniqueReview?: Resolver<
    {},
    Users_FindUniqueReviewArgs,
    Client.Review | null
  >;
  Users_findUniqueReviewOrThrow?: Resolver<
    {},
    Users_FindUniqueReviewOrThrowArgs,
    Client.Review | null
  >;
  Users_findFirstProduct?: Resolver<
    {},
    Users_FindFirstProductArgs,
    Client.Product | null
  >;
  Users_findFirstProductOrThrow?: Resolver<
    {},
    Users_FindFirstProductOrThrowArgs,
    Client.Product | null
  >;
  Users_findManyProduct?: Resolver<
    {},
    Users_FindManyProductArgs,
    Client.Product[]
  >;
  Users_findManyProductCount?: Resolver<{}, Users_FindManyProductArgs, number>;
  Users_aggregateProduct?: Resolver<
    {},
    Users_AggregateProductArgs,
    Client.Prisma.GetProductAggregateType<Users_AggregateProductArgs>
  >;
  //Users_groupByProduct is not generated because model has only unique fields or relations.
  Users_groupByProduct?: Resolver<
    {},
    any,
    | Client.Prisma.GetProductGroupByPayload<Users_GroupByProductArgs>
    | GroupByError
  >;
  Users_findUniqueProduct?: Resolver<
    {},
    Users_FindUniqueProductArgs,
    Client.Product | null
  >;
  Users_findUniqueProductOrThrow?: Resolver<
    {},
    Users_FindUniqueProductOrThrowArgs,
    Client.Product | null
  >;
}

export interface Mutation {
  [key: string]: Resolver<any, any, any>;
  Users_createOneUser?: Resolver<{}, Users_CreateOneUserArgs, Client.User>;
  Users_upsertOneUser?: Resolver<{}, Users_UpsertOneUserArgs, Client.User>;
  Users_createManyUser?: Resolver<
    {},
    Users_CreateManyUserArgs,
    Client.Prisma.BatchPayload
  >;
  Users_deleteOneUser?: Resolver<
    {},
    Users_DeleteOneUserArgs,
    Client.User | null
  >;
  Users_updateOneUser?: Resolver<
    {},
    Users_UpdateOneUserArgs,
    Client.User | null
  >;
  Users_updateManyUser?: Resolver<
    {},
    Users_UpdateManyUserArgs,
    Client.Prisma.BatchPayload
  >;
  Users_deleteManyUser?: Resolver<
    {},
    Users_DeleteManyUserArgs,
    Client.Prisma.BatchPayload
  >;
  Users_createOneReview?: Resolver<
    {},
    Users_CreateOneReviewArgs,
    Client.Review
  >;
  Users_upsertOneReview?: Resolver<
    {},
    Users_UpsertOneReviewArgs,
    Client.Review
  >;
  Users_createManyReview?: Resolver<
    {},
    Users_CreateManyReviewArgs,
    Client.Prisma.BatchPayload
  >;
  Users_deleteOneReview?: Resolver<
    {},
    Users_DeleteOneReviewArgs,
    Client.Review | null
  >;
  Users_updateOneReview?: Resolver<
    {},
    Users_UpdateOneReviewArgs,
    Client.Review | null
  >;
  Users_updateManyReview?: Resolver<
    {},
    Users_UpdateManyReviewArgs,
    Client.Prisma.BatchPayload
  >;
  Users_deleteManyReview?: Resolver<
    {},
    Users_DeleteManyReviewArgs,
    Client.Prisma.BatchPayload
  >;
  Users_createOneProduct?: Resolver<
    {},
    Users_CreateOneProductArgs,
    Client.Product
  >;
  Users_upsertOneProduct?: Resolver<
    {},
    Users_UpsertOneProductArgs,
    Client.Product
  >;
  Users_createManyProduct?: Resolver<
    {},
    Users_CreateManyProductArgs,
    Client.Prisma.BatchPayload
  >;
  Users_deleteOneProduct?: Resolver<
    {},
    Users_DeleteOneProductArgs,
    Client.Product | null
  >;
  Users_updateOneProduct?: Resolver<
    {},
    Users_UpdateOneProductArgs,
    Client.Product | null
  >;
  Users_updateManyProduct?: Resolver<
    {},
    Users_UpdateManyProductArgs,
    Client.Prisma.BatchPayload
  >;
  Users_deleteManyProduct?: Resolver<
    {},
    Users_DeleteManyProductArgs,
    Client.Prisma.BatchPayload
  >;
  Users_executeRaw?: Resolver<{}, Users_ExecuteRawArgs, any>;
  Users_queryRaw?: Resolver<{}, Users_QueryRawArgs, any>;
  Users_transactionalBatchMutation?: Resolver<
    {},
    Users_TransactionalBatchMutationArgs,
    any
  >;
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
  price?: Resolver<Client.Prisma.ProductGroupByOutputType, {}, number>;
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
  price?: Resolver<Client.Prisma.ProductCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.ProductCountAggregateOutputType, {}, number>;
}

export interface ProductAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ProductAvgAggregateOutputType, {}, number | null>;
  price?: Resolver<
    Client.Prisma.ProductAvgAggregateOutputType,
    {},
    number | null
  >;
}

export interface ProductSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ProductSumAggregateOutputType, {}, number | null>;
  price?: Resolver<
    Client.Prisma.ProductSumAggregateOutputType,
    {},
    number | null
  >;
}

export interface ProductMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ProductMinAggregateOutputType, {}, number | null>;
  price?: Resolver<
    Client.Prisma.ProductMinAggregateOutputType,
    {},
    number | null
  >;
}

export interface ProductMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.ProductMaxAggregateOutputType, {}, number | null>;
  price?: Resolver<
    Client.Prisma.ProductMaxAggregateOutputType,
    {},
    number | null
  >;
}

export interface Users_ProductReviewArgs {
  where?: Users_ReviewWhereInput | null;
  orderBy?: Users_ReviewOrderByWithRelationInput[] | null;
  cursor?: Users_ReviewWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: ReviewScalarFieldEnum[] | null;
}

export interface Users_FindFirstUserArgs {
  where?: Users_UserWhereInput | null;
  orderBy?: Users_UserOrderByWithRelationInput[] | null;
  cursor?: Users_UserWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UserScalarFieldEnum[] | null;
}

export interface Users_FindFirstUserOrThrowArgs {
  where?: Users_UserWhereInput | null;
  orderBy?: Users_UserOrderByWithRelationInput[] | null;
  cursor?: Users_UserWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UserScalarFieldEnum[] | null;
}

export interface Users_FindManyUserArgs {
  where?: Users_UserWhereInput;
  orderBy?: Users_UserOrderByWithRelationInput[];
  cursor?: Users_UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface Users_AggregateUserArgs {
  where?: Users_UserWhereInput;
  orderBy?: Users_UserOrderByWithRelationInput[];
  cursor?: Users_UserWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.UserCountAggregateInputType;
  _avg?: Client.Prisma.UserAvgAggregateInputType;
  _sum?: Client.Prisma.UserSumAggregateInputType;
  _min?: Client.Prisma.UserMinAggregateInputType;
  _max?: Client.Prisma.UserMaxAggregateInputType;
}

export interface Users_GroupByUserArgs {
  where?: Users_UserWhereInput;
  orderBy?: Users_UserOrderByWithAggregationInput[];
  by: UserScalarFieldEnum[];
  having?: Users_UserScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Users_FindUniqueUserArgs {
  where: Users_UserWhereUniqueInput | null;
}

export interface Users_FindUniqueUserOrThrowArgs {
  where: Users_UserWhereUniqueInput | null;
}

export interface Users_FindFirstReviewArgs {
  where?: Users_ReviewWhereInput | null;
  orderBy?: Users_ReviewOrderByWithRelationInput[] | null;
  cursor?: Users_ReviewWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: ReviewScalarFieldEnum[] | null;
}

export interface Users_FindFirstReviewOrThrowArgs {
  where?: Users_ReviewWhereInput | null;
  orderBy?: Users_ReviewOrderByWithRelationInput[] | null;
  cursor?: Users_ReviewWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: ReviewScalarFieldEnum[] | null;
}

export interface Users_FindManyReviewArgs {
  where?: Users_ReviewWhereInput;
  orderBy?: Users_ReviewOrderByWithRelationInput[];
  cursor?: Users_ReviewWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ReviewScalarFieldEnum[];
}

export interface Users_AggregateReviewArgs {
  where?: Users_ReviewWhereInput;
  orderBy?: Users_ReviewOrderByWithRelationInput[];
  cursor?: Users_ReviewWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.ReviewCountAggregateInputType;
  _avg?: Client.Prisma.ReviewAvgAggregateInputType;
  _sum?: Client.Prisma.ReviewSumAggregateInputType;
  _min?: Client.Prisma.ReviewMinAggregateInputType;
  _max?: Client.Prisma.ReviewMaxAggregateInputType;
}

export interface Users_GroupByReviewArgs {
  where?: Users_ReviewWhereInput;
  orderBy?: Users_ReviewOrderByWithAggregationInput[];
  by: ReviewScalarFieldEnum[];
  having?: Users_ReviewScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Users_FindUniqueReviewArgs {
  where: Users_ReviewWhereUniqueInput | null;
}

export interface Users_FindUniqueReviewOrThrowArgs {
  where: Users_ReviewWhereUniqueInput | null;
}

export interface Users_FindFirstProductArgs {
  where?: Users_ProductWhereInput | null;
  orderBy?: Users_ProductOrderByWithRelationInput[] | null;
  cursor?: Users_ProductWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: ProductScalarFieldEnum[] | null;
}

export interface Users_FindFirstProductOrThrowArgs {
  where?: Users_ProductWhereInput | null;
  orderBy?: Users_ProductOrderByWithRelationInput[] | null;
  cursor?: Users_ProductWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: ProductScalarFieldEnum[] | null;
}

export interface Users_FindManyProductArgs {
  where?: Users_ProductWhereInput;
  orderBy?: Users_ProductOrderByWithRelationInput[];
  cursor?: Users_ProductWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ProductScalarFieldEnum[];
}

export interface Users_AggregateProductArgs {
  where?: Users_ProductWhereInput;
  orderBy?: Users_ProductOrderByWithRelationInput[];
  cursor?: Users_ProductWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.ProductCountAggregateInputType;
  _avg?: Client.Prisma.ProductAvgAggregateInputType;
  _sum?: Client.Prisma.ProductSumAggregateInputType;
  _min?: Client.Prisma.ProductMinAggregateInputType;
  _max?: Client.Prisma.ProductMaxAggregateInputType;
}

export interface Users_GroupByProductArgs {
  where?: Users_ProductWhereInput;
  orderBy?: Users_ProductOrderByWithAggregationInput[];
  by: ProductScalarFieldEnum[];
  having?: Users_ProductScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Users_FindUniqueProductArgs {
  where: Users_ProductWhereUniqueInput | null;
}

export interface Users_FindUniqueProductOrThrowArgs {
  where: Users_ProductWhereUniqueInput | null;
}

export interface Users_CreateOneUserArgs {
  data: Users_UserCreateInput;
}

export interface Users_UpsertOneUserArgs {
  where: Users_UserWhereUniqueInput;
  create: Users_UserCreateInput;
  update: Users_UserUpdateInput;
}

export interface Users_CreateManyUserArgs {
  data: Users_UserCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Users_DeleteOneUserArgs {
  where: Users_UserWhereUniqueInput | null;
}

export interface Users_UpdateOneUserArgs {
  data: Users_UserUpdateInput | null;
  where: Users_UserWhereUniqueInput | null;
}

export interface Users_UpdateManyUserArgs {
  data: Users_UserUpdateManyMutationInput;
  where?: Users_UserWhereInput;
}

export interface Users_DeleteManyUserArgs {
  where?: Users_UserWhereInput;
}

export interface Users_CreateOneReviewArgs {
  data: Users_ReviewCreateInput;
}

export interface Users_UpsertOneReviewArgs {
  where: Users_ReviewWhereUniqueInput;
  create: Users_ReviewCreateInput;
  update: Users_ReviewUpdateInput;
}

export interface Users_CreateManyReviewArgs {
  data: Users_ReviewCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Users_DeleteOneReviewArgs {
  where: Users_ReviewWhereUniqueInput | null;
}

export interface Users_UpdateOneReviewArgs {
  data: Users_ReviewUpdateInput | null;
  where: Users_ReviewWhereUniqueInput | null;
}

export interface Users_UpdateManyReviewArgs {
  data: Users_ReviewUpdateManyMutationInput;
  where?: Users_ReviewWhereInput;
}

export interface Users_DeleteManyReviewArgs {
  where?: Users_ReviewWhereInput;
}

export interface Users_CreateOneProductArgs {
  data: Users_ProductCreateInput;
}

export interface Users_UpsertOneProductArgs {
  where: Users_ProductWhereUniqueInput;
  create: Users_ProductCreateInput;
  update: Users_ProductUpdateInput;
}

export interface Users_CreateManyProductArgs {
  data: Users_ProductCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Users_DeleteOneProductArgs {
  where: Users_ProductWhereUniqueInput | null;
}

export interface Users_UpdateOneProductArgs {
  data: Users_ProductUpdateInput | null;
  where: Users_ProductWhereUniqueInput | null;
}

export interface Users_UpdateManyProductArgs {
  data: Users_ProductUpdateManyMutationInput;
  where?: Users_ProductWhereInput;
}

export interface Users_DeleteManyProductArgs {
  where?: Users_ProductWhereInput;
}

export interface Users_ExecuteRawArgs {
  query: string;
  parameters?: any;
}

export interface Users_QueryRawArgs {
  query: string;
  parameters?: any;
}

export interface Users_UserWhereInput {
  AND?: Users_UserWhereInput[];
  OR?: Users_UserWhereInput[];
  NOT?: Users_UserWhereInput[];
  id?: IntFilter;
  createdAt?: DateTimeFilter;
  username?: StringNullableFilter | null;
  password?: StringNullableFilter | null;
  email?: StringFilter;
  roles?: StringNullableListFilter;
  googleId?: StringNullableFilter | null;
  googleProfile?: JsonNullableFilter;
}

export interface Users_UserOrderByWithRelationInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  roles?: SortOrder;
  googleId?: SortOrder;
  googleProfile?: SortOrder;
}

export type Users_UserWhereUniqueInput = AtLeast<
  {
    id?: number;
    username?: string;
    email?: string;
    googleId?: string;
    AND?: Users_UserWhereInput[];
    OR?: Users_UserWhereInput[];
    NOT?: Users_UserWhereInput[];
    createdAt?: DateTimeFilter;
    password?: StringNullableFilter | null;
    roles?: StringNullableListFilter;
    googleProfile?: JsonNullableFilter;
  },
  'id' | 'email'
>;

export interface Users_UserOrderByWithAggregationInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  roles?: SortOrder;
  googleId?: SortOrder;
  googleProfile?: SortOrder;
  _count?: Users_UserCountOrderByAggregateInput;
  _avg?: Users_UserAvgOrderByAggregateInput;
  _max?: Users_UserMaxOrderByAggregateInput;
  _min?: Users_UserMinOrderByAggregateInput;
  _sum?: Users_UserSumOrderByAggregateInput;
}

export interface Users_UserScalarWhereWithAggregatesInput {
  AND?: Users_UserScalarWhereWithAggregatesInput[];
  OR?: Users_UserScalarWhereWithAggregatesInput[];
  NOT?: Users_UserScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  username?: StringNullableWithAggregatesFilter | null;
  password?: StringNullableWithAggregatesFilter | null;
  email?: StringWithAggregatesFilter;
  roles?: StringNullableListFilter;
  googleId?: StringNullableWithAggregatesFilter | null;
  googleProfile?: JsonNullableWithAggregatesFilter;
}

export interface Users_ReviewWhereInput {
  AND?: Users_ReviewWhereInput[];
  OR?: Users_ReviewWhereInput[];
  NOT?: Users_ReviewWhereInput[];
  id?: IntFilter;
  product?: Users_ProductWhereInput;
  product_id?: IntFilter;
  score?: IntFilter;
}

export interface Users_ReviewOrderByWithRelationInput {
  id?: SortOrder;
  product?: Users_ProductOrderByWithRelationInput;
  product_id?: SortOrder;
  score?: SortOrder;
}

export type Users_ReviewWhereUniqueInput = AtLeast<
  {
    id?: number;
    product_id?: number;
    AND?: Users_ReviewWhereInput[];
    OR?: Users_ReviewWhereInput[];
    NOT?: Users_ReviewWhereInput[];
    product?: Users_ProductWhereInput;
    score?: IntFilter;
  },
  'id' | 'product_id'
>;

export interface Users_ReviewOrderByWithAggregationInput {
  id?: SortOrder;
  product_id?: SortOrder;
  score?: SortOrder;
  _count?: Users_ReviewCountOrderByAggregateInput;
  _avg?: Users_ReviewAvgOrderByAggregateInput;
  _max?: Users_ReviewMaxOrderByAggregateInput;
  _min?: Users_ReviewMinOrderByAggregateInput;
  _sum?: Users_ReviewSumOrderByAggregateInput;
}

export interface Users_ReviewScalarWhereWithAggregatesInput {
  AND?: Users_ReviewScalarWhereWithAggregatesInput[];
  OR?: Users_ReviewScalarWhereWithAggregatesInput[];
  NOT?: Users_ReviewScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  product_id?: IntWithAggregatesFilter;
  score?: IntWithAggregatesFilter;
}

export interface Users_ProductWhereInput {
  AND?: Users_ProductWhereInput[];
  OR?: Users_ProductWhereInput[];
  NOT?: Users_ProductWhereInput[];
  id?: IntFilter;
  price?: FloatFilter;
  review?: Users_ReviewListRelationFilter;
}

export interface Users_ProductOrderByWithRelationInput {
  id?: SortOrder;
  price?: SortOrder;
  review?: Users_ReviewOrderByRelationAggregateInput;
}

export type Users_ProductWhereUniqueInput = AtLeast<
  {
    id?: number;
    AND?: Users_ProductWhereInput[];
    OR?: Users_ProductWhereInput[];
    NOT?: Users_ProductWhereInput[];
    price?: FloatFilter;
    review?: Users_ReviewListRelationFilter;
  },
  'id'
>;

export interface Users_ProductOrderByWithAggregationInput {
  id?: SortOrder;
  price?: SortOrder;
  _count?: Users_ProductCountOrderByAggregateInput;
  _avg?: Users_ProductAvgOrderByAggregateInput;
  _max?: Users_ProductMaxOrderByAggregateInput;
  _min?: Users_ProductMinOrderByAggregateInput;
  _sum?: Users_ProductSumOrderByAggregateInput;
}

export interface Users_ProductScalarWhereWithAggregatesInput {
  AND?: Users_ProductScalarWhereWithAggregatesInput[];
  OR?: Users_ProductScalarWhereWithAggregatesInput[];
  NOT?: Users_ProductScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  price?: FloatWithAggregatesFilter;
}

export interface Users_UserCreateInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Users_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
}

export interface Users_UserUncheckedCreateInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Users_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
}

export interface Users_UserUpdateInput {
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: Users_UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
}

export interface Users_UserUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: Users_UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
}

export interface Users_UserCreateManyInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Users_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
}

export interface Users_UserUpdateManyMutationInput {
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: Users_UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
}

export interface Users_UserUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: Users_UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
}

export interface Users_ReviewCreateInput {
  product: Users_ProductCreateNestedOneWithoutReviewInput;
  score: number;
}

export interface Users_ReviewUncheckedCreateInput {
  id?: number;
  product_id: number;
  score: number;
}

export interface Users_ReviewUpdateInput {
  product?: Users_ProductUpdateOneRequiredWithoutReviewNestedInput;
  score?: IntFieldUpdateOperationsInput;
}

export interface Users_ReviewUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  product_id?: IntFieldUpdateOperationsInput;
  score?: IntFieldUpdateOperationsInput;
}

export interface Users_ReviewCreateManyInput {
  id?: number;
  product_id: number;
  score: number;
}

export interface Users_ReviewUpdateManyMutationInput {
  score?: IntFieldUpdateOperationsInput;
}

export interface Users_ReviewUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  product_id?: IntFieldUpdateOperationsInput;
  score?: IntFieldUpdateOperationsInput;
}

export interface Users_ProductCreateInput {
  price: number;
  review?: Users_ReviewCreateNestedManyWithoutProductInput;
}

export interface Users_ProductUncheckedCreateInput {
  id?: number;
  price: number;
  review?: Users_ReviewUncheckedCreateNestedManyWithoutProductInput;
}

export interface Users_ProductUpdateInput {
  price?: FloatFieldUpdateOperationsInput;
  review?: Users_ReviewUpdateManyWithoutProductNestedInput;
}

export interface Users_ProductUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  price?: FloatFieldUpdateOperationsInput;
  review?: Users_ReviewUncheckedUpdateManyWithoutProductNestedInput;
}

export interface Users_ProductCreateManyInput {
  id?: number;
  price: number;
}

export interface Users_ProductUpdateManyMutationInput {
  price?: FloatFieldUpdateOperationsInput;
}

export interface Users_ProductUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  price?: FloatFieldUpdateOperationsInput;
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

export interface Users_UserCountOrderByAggregateInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  roles?: SortOrder;
  googleId?: SortOrder;
  googleProfile?: SortOrder;
}

export interface Users_UserAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface Users_UserMaxOrderByAggregateInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  googleId?: SortOrder;
}

export interface Users_UserMinOrderByAggregateInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  googleId?: SortOrder;
}

export interface Users_UserSumOrderByAggregateInput {
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

export interface Users_ProductRelationFilter {
  is?: Users_ProductWhereInput;
  isNot?: Users_ProductWhereInput;
}

export interface Users_ReviewCountOrderByAggregateInput {
  id?: SortOrder;
  product_id?: SortOrder;
  score?: SortOrder;
}

export interface Users_ReviewAvgOrderByAggregateInput {
  id?: SortOrder;
  product_id?: SortOrder;
  score?: SortOrder;
}

export interface Users_ReviewMaxOrderByAggregateInput {
  id?: SortOrder;
  product_id?: SortOrder;
  score?: SortOrder;
}

export interface Users_ReviewMinOrderByAggregateInput {
  id?: SortOrder;
  product_id?: SortOrder;
  score?: SortOrder;
}

export interface Users_ReviewSumOrderByAggregateInput {
  id?: SortOrder;
  product_id?: SortOrder;
  score?: SortOrder;
}

export interface FloatFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter;
}

export interface Users_ReviewListRelationFilter {
  every?: Users_ReviewWhereInput;
  some?: Users_ReviewWhereInput;
  none?: Users_ReviewWhereInput;
}

export interface Users_ReviewOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface Users_ProductCountOrderByAggregateInput {
  id?: SortOrder;
  price?: SortOrder;
}

export interface Users_ProductAvgOrderByAggregateInput {
  id?: SortOrder;
  price?: SortOrder;
}

export interface Users_ProductMaxOrderByAggregateInput {
  id?: SortOrder;
  price?: SortOrder;
}

export interface Users_ProductMinOrderByAggregateInput {
  id?: SortOrder;
  price?: SortOrder;
}

export interface Users_ProductSumOrderByAggregateInput {
  id?: SortOrder;
  price?: SortOrder;
}

export interface FloatWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedFloatFilter;
  _min?: NestedFloatFilter;
  _max?: NestedFloatFilter;
}

export interface Users_UserCreaterolesInput {
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

export interface Users_UserUpdaterolesInput {
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

export interface Users_ProductCreateNestedOneWithoutReviewInput {
  create?: Users_ProductUncheckedCreateWithoutReviewInput;
  connectOrCreate?: Users_ProductCreateOrConnectWithoutReviewInput;
  connect?: Users_ProductWhereUniqueInput;
}

export interface Users_ProductUpdateOneRequiredWithoutReviewNestedInput {
  create?: Users_ProductUncheckedCreateWithoutReviewInput;
  connectOrCreate?: Users_ProductCreateOrConnectWithoutReviewInput;
  upsert?: Users_ProductUpsertWithoutReviewInput;
  connect?: Users_ProductWhereUniqueInput;
  update?: Users_ProductUpdateWithoutReviewInput;
}

export interface Users_ReviewCreateNestedManyWithoutProductInput {
  create?: Users_ReviewCreateWithoutProductInput[];
  connectOrCreate?: Users_ReviewCreateOrConnectWithoutProductInput[];
  createMany?: Users_ReviewCreateManyProductInputEnvelope;
  connect?: Users_ReviewWhereUniqueInput[];
}

export interface Users_ReviewUncheckedCreateNestedManyWithoutProductInput {
  create?: Users_ReviewCreateWithoutProductInput[];
  connectOrCreate?: Users_ReviewCreateOrConnectWithoutProductInput[];
  createMany?: Users_ReviewCreateManyProductInputEnvelope;
  connect?: Users_ReviewWhereUniqueInput[];
}

export interface FloatFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface Users_ReviewUpdateManyWithoutProductNestedInput {
  create?: Users_ReviewCreateWithoutProductInput[];
  connectOrCreate?: Users_ReviewCreateOrConnectWithoutProductInput[];
  upsert?: Users_ReviewUpsertWithWhereUniqueWithoutProductInput[];
  createMany?: Users_ReviewCreateManyProductInputEnvelope;
  set?: Users_ReviewWhereUniqueInput[];
  disconnect?: Users_ReviewWhereUniqueInput[];
  delete?: Users_ReviewWhereUniqueInput[];
  connect?: Users_ReviewWhereUniqueInput[];
  update?: Users_ReviewUpdateWithWhereUniqueWithoutProductInput[];
  updateMany?: Users_ReviewUpdateManyWithWhereWithoutProductInput[];
  deleteMany?: Users_ReviewScalarWhereInput[];
}

export interface Users_ReviewUncheckedUpdateManyWithoutProductNestedInput {
  create?: Users_ReviewCreateWithoutProductInput[];
  connectOrCreate?: Users_ReviewCreateOrConnectWithoutProductInput[];
  upsert?: Users_ReviewUpsertWithWhereUniqueWithoutProductInput[];
  createMany?: Users_ReviewCreateManyProductInputEnvelope;
  set?: Users_ReviewWhereUniqueInput[];
  disconnect?: Users_ReviewWhereUniqueInput[];
  delete?: Users_ReviewWhereUniqueInput[];
  connect?: Users_ReviewWhereUniqueInput[];
  update?: Users_ReviewUpdateWithWhereUniqueWithoutProductInput[];
  updateMany?: Users_ReviewUpdateManyWithWhereWithoutProductInput[];
  deleteMany?: Users_ReviewScalarWhereInput[];
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

export interface NestedFloatWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedFloatFilter;
  _min?: NestedFloatFilter;
  _max?: NestedFloatFilter;
}

export interface Users_ProductCreateWithoutReviewInput {
  price: number;
}

export interface Users_ProductUncheckedCreateWithoutReviewInput {
  id?: number;
  price: number;
}

export interface Users_ProductCreateOrConnectWithoutReviewInput {
  where: Users_ProductWhereUniqueInput;
  create: Users_ProductUncheckedCreateWithoutReviewInput;
}

export interface Users_ProductUpsertWithoutReviewInput {
  update: Users_ProductUncheckedUpdateWithoutReviewInput;
  create: Users_ProductUncheckedCreateWithoutReviewInput;
  where?: Users_ProductWhereInput;
}

export interface Users_ProductUpdateToOneWithWhereWithoutReviewInput {
  where?: Users_ProductWhereInput;
  data: Users_ProductUncheckedUpdateWithoutReviewInput;
}

export interface Users_ProductUpdateWithoutReviewInput {
  price?: FloatFieldUpdateOperationsInput;
}

export interface Users_ProductUncheckedUpdateWithoutReviewInput {
  id?: IntFieldUpdateOperationsInput;
  price?: FloatFieldUpdateOperationsInput;
}

export interface Users_ReviewCreateWithoutProductInput {
  score: number;
}

export interface Users_ReviewUncheckedCreateWithoutProductInput {
  id?: number;
  score: number;
}

export interface Users_ReviewCreateOrConnectWithoutProductInput {
  where: Users_ReviewWhereUniqueInput;
  create: Users_ReviewUncheckedCreateWithoutProductInput;
}

export interface Users_ReviewCreateManyProductInputEnvelope {
  data: Users_ReviewCreateManyProductInput[];
  skipDuplicates?: boolean;
}

export interface Users_ReviewUpsertWithWhereUniqueWithoutProductInput {
  where: Users_ReviewWhereUniqueInput;
  update: Users_ReviewUncheckedUpdateWithoutProductInput;
  create: Users_ReviewUncheckedCreateWithoutProductInput;
}

export interface Users_ReviewUpdateWithWhereUniqueWithoutProductInput {
  where: Users_ReviewWhereUniqueInput;
  data: Users_ReviewUncheckedUpdateWithoutProductInput;
}

export interface Users_ReviewUpdateManyWithWhereWithoutProductInput {
  where: Users_ReviewScalarWhereInput;
  data: Users_ReviewUncheckedUpdateManyWithoutReviewInput;
}

export interface Users_ReviewScalarWhereInput {
  AND?: Users_ReviewScalarWhereInput[];
  OR?: Users_ReviewScalarWhereInput[];
  NOT?: Users_ReviewScalarWhereInput[];
  id?: IntFilter;
  product_id?: IntFilter;
  score?: IntFilter;
}

export interface Users_ReviewCreateManyProductInput {
  id?: number;
  score: number;
}

export interface Users_ReviewUpdateWithoutProductInput {
  score?: IntFieldUpdateOperationsInput;
}

export interface Users_ReviewUncheckedUpdateWithoutProductInput {
  id?: IntFieldUpdateOperationsInput;
  score?: IntFieldUpdateOperationsInput;
}

export interface Users_ReviewUncheckedUpdateManyWithoutReviewInput {
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
  price = 'price',
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

export interface Users_TransactionalMutationInput {
  Users_CreateOneUser: Users_CreateOneUserArgs;
  Users_UpsertOneUser: Users_UpsertOneUserArgs;
  Users_CreateManyUser: Users_CreateManyUserArgs;
  Users_DeleteOneUser: Users_DeleteOneUserArgs;
  Users_UpdateOneUser: Users_UpdateOneUserArgs;
  Users_UpdateManyUser: Users_UpdateManyUserArgs;
  Users_DeleteManyUser: Users_DeleteManyUserArgs;
  Users_CreateOneReview: Users_CreateOneReviewArgs;
  Users_UpsertOneReview: Users_UpsertOneReviewArgs;
  Users_CreateManyReview: Users_CreateManyReviewArgs;
  Users_DeleteOneReview: Users_DeleteOneReviewArgs;
  Users_UpdateOneReview: Users_UpdateOneReviewArgs;
  Users_UpdateManyReview: Users_UpdateManyReviewArgs;
  Users_DeleteManyReview: Users_DeleteManyReviewArgs;
  Users_CreateOneProduct: Users_CreateOneProductArgs;
  Users_UpsertOneProduct: Users_UpsertOneProductArgs;
  Users_CreateManyProduct: Users_CreateManyProductArgs;
  Users_DeleteOneProduct: Users_DeleteOneProductArgs;
  Users_UpdateOneProduct: Users_UpdateOneProductArgs;
  Users_UpdateManyProduct: Users_UpdateManyProductArgs;
  Users_DeleteManyProduct: Users_DeleteManyProductArgs;
}

export interface Users_TransactionalBatchMutationArgs {
  mutations: Users_TransactionalMutationInput[];
}
