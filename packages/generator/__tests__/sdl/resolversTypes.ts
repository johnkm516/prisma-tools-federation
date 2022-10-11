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
  Post?: Post;
  Category?: Category;
  CategoriesOnPosts?: CategoriesOnPosts;
  Query?: Query;
  Mutation?: Mutation;
  AggregateUser?: AggregateUser;
  UserGroupByOutputType?: UserGroupByOutputType;
  AggregatePost?: AggregatePost;
  PostGroupByOutputType?: PostGroupByOutputType;
  AggregateCategory?: AggregateCategory;
  CategoryGroupByOutputType?: CategoryGroupByOutputType;
  AggregateCategoriesOnPosts?: AggregateCategoriesOnPosts;
  CategoriesOnPostsGroupByOutputType?: CategoriesOnPostsGroupByOutputType;
  AffectedRowsOutput?: AffectedRowsOutput;
  UserCountOutputType?: UserCountOutputType;
  UserCountAggregateOutputType?: UserCountAggregateOutputType;
  UserAvgAggregateOutputType?: UserAvgAggregateOutputType;
  UserSumAggregateOutputType?: UserSumAggregateOutputType;
  UserMinAggregateOutputType?: UserMinAggregateOutputType;
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType;
  PostCountOutputType?: PostCountOutputType;
  PostCountAggregateOutputType?: PostCountAggregateOutputType;
  PostAvgAggregateOutputType?: PostAvgAggregateOutputType;
  PostSumAggregateOutputType?: PostSumAggregateOutputType;
  PostMinAggregateOutputType?: PostMinAggregateOutputType;
  PostMaxAggregateOutputType?: PostMaxAggregateOutputType;
  CategoryCountOutputType?: CategoryCountOutputType;
  CategoryCountAggregateOutputType?: CategoryCountAggregateOutputType;
  CategoryAvgAggregateOutputType?: CategoryAvgAggregateOutputType;
  CategorySumAggregateOutputType?: CategorySumAggregateOutputType;
  CategoryMinAggregateOutputType?: CategoryMinAggregateOutputType;
  CategoryMaxAggregateOutputType?: CategoryMaxAggregateOutputType;
  CategoriesOnPostsCountAggregateOutputType?: CategoriesOnPostsCountAggregateOutputType;
  CategoriesOnPostsAvgAggregateOutputType?: CategoriesOnPostsAvgAggregateOutputType;
  CategoriesOnPostsSumAggregateOutputType?: CategoriesOnPostsSumAggregateOutputType;
  CategoriesOnPostsMinAggregateOutputType?: CategoriesOnPostsMinAggregateOutputType;
  CategoriesOnPostsMaxAggregateOutputType?: CategoriesOnPostsMaxAggregateOutputType;
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
  posts?: Resolver<Client.User, UserPostsArgs, Client.Post[] | null>;
  number2?: Resolver<Client.User, {}, undefined[] | null>;
  number?: Resolver<Client.User, {}, undefined>;
  _count?: Resolver<Client.User, {}, Client.Prisma.UserCountOutputType>;

  __resolveReference?: any;
}

export interface Post {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Post, {}, number>;
  user?: Resolver<Client.Post, {}, Client.User>;
  user_id?: Resolver<Client.Post, {}, number>;
  title?: Resolver<Client.Post, {}, string>;
  categories?: Resolver<
    Client.Post,
    PostCategoriesArgs,
    Client.CategoriesOnPosts[] | null
  >;
  _count?: Resolver<Client.Post, {}, Client.Prisma.PostCountOutputType>;

  __resolveReference?: any;
}

export interface Category {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Category, {}, number>;
  name?: Resolver<Client.Category, {}, string>;
  posts?: Resolver<
    Client.Category,
    CategoryPostsArgs,
    Client.CategoriesOnPosts[] | null
  >;
  _count?: Resolver<Client.Category, {}, Client.Prisma.CategoryCountOutputType>;

  __resolveReference?: any;
}

export interface CategoriesOnPosts {
  [key: string]: Resolver<any, any, any>;
  post?: Resolver<Client.CategoriesOnPosts, {}, Client.Post>;
  postId?: Resolver<Client.CategoriesOnPosts, {}, number>;
  category?: Resolver<Client.CategoriesOnPosts, {}, Client.Category>;
  categoryId?: Resolver<Client.CategoriesOnPosts, {}, number>;
  assignedAt?: Resolver<Client.CategoriesOnPosts, {}, Date>;
  assignedBy?: Resolver<Client.CategoriesOnPosts, {}, string>;

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
  findFirstPost?: Resolver<{}, FindFirstPostArgs, Client.Post | null>;
  findManyPost?: Resolver<{}, FindManyPostArgs, Client.Post[]>;
  findManyPostCount?: Resolver<{}, FindManyPostArgs, number>;
  aggregatePost?: Resolver<
    {},
    AggregatePostArgs,
    Client.Prisma.GetPostAggregateType<AggregatePostArgs>
  >;
  groupByPost?: Resolver<
    {},
    GroupByPostArgs,
    Client.Prisma.PostGroupByOutputType[]
  >;
  findUniquePost?: Resolver<{}, FindUniquePostArgs, Client.Post | null>;
  findFirstCategory?: Resolver<
    {},
    FindFirstCategoryArgs,
    Client.Category | null
  >;
  findManyCategory?: Resolver<{}, FindManyCategoryArgs, Client.Category[]>;
  findManyCategoryCount?: Resolver<{}, FindManyCategoryArgs, number>;
  aggregateCategory?: Resolver<
    {},
    AggregateCategoryArgs,
    Client.Prisma.GetCategoryAggregateType<AggregateCategoryArgs>
  >;
  groupByCategory?: Resolver<
    {},
    GroupByCategoryArgs,
    Client.Prisma.CategoryGroupByOutputType[]
  >;
  findUniqueCategory?: Resolver<
    {},
    FindUniqueCategoryArgs,
    Client.Category | null
  >;
  findFirstCategoriesOnPosts?: Resolver<
    {},
    FindFirstCategoriesOnPostsArgs,
    Client.CategoriesOnPosts | null
  >;
  findManyCategoriesOnPosts?: Resolver<
    {},
    FindManyCategoriesOnPostsArgs,
    Client.CategoriesOnPosts[]
  >;
  findManyCategoriesOnPostsCount?: Resolver<
    {},
    FindManyCategoriesOnPostsArgs,
    number
  >;
  aggregateCategoriesOnPosts?: Resolver<
    {},
    AggregateCategoriesOnPostsArgs,
    Client.Prisma.GetCategoriesOnPostsAggregateType<AggregateCategoriesOnPostsArgs>
  >;
  groupByCategoriesOnPosts?: Resolver<
    {},
    GroupByCategoriesOnPostsArgs,
    Client.Prisma.CategoriesOnPostsGroupByOutputType[]
  >;
  findUniqueCategoriesOnPosts?: Resolver<
    {},
    FindUniqueCategoriesOnPostsArgs,
    Client.CategoriesOnPosts | null
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
  createOnePost?: Resolver<{}, CreateOnePostArgs, Client.Post>;
  upsertOnePost?: Resolver<{}, UpsertOnePostArgs, Client.Post>;
  createManyPost?: Resolver<{}, CreateManyPostArgs, Client.Prisma.BatchPayload>;
  deleteOnePost?: Resolver<{}, DeleteOnePostArgs, Client.Post | null>;
  updateOnePost?: Resolver<{}, UpdateOnePostArgs, Client.Post | null>;
  updateManyPost?: Resolver<{}, UpdateManyPostArgs, Client.Prisma.BatchPayload>;
  deleteManyPost?: Resolver<{}, DeleteManyPostArgs, Client.Prisma.BatchPayload>;
  createOneCategory?: Resolver<{}, CreateOneCategoryArgs, Client.Category>;
  upsertOneCategory?: Resolver<{}, UpsertOneCategoryArgs, Client.Category>;
  createManyCategory?: Resolver<
    {},
    CreateManyCategoryArgs,
    Client.Prisma.BatchPayload
  >;
  deleteOneCategory?: Resolver<
    {},
    DeleteOneCategoryArgs,
    Client.Category | null
  >;
  updateOneCategory?: Resolver<
    {},
    UpdateOneCategoryArgs,
    Client.Category | null
  >;
  updateManyCategory?: Resolver<
    {},
    UpdateManyCategoryArgs,
    Client.Prisma.BatchPayload
  >;
  deleteManyCategory?: Resolver<
    {},
    DeleteManyCategoryArgs,
    Client.Prisma.BatchPayload
  >;
  createOneCategoriesOnPosts?: Resolver<
    {},
    CreateOneCategoriesOnPostsArgs,
    Client.CategoriesOnPosts
  >;
  upsertOneCategoriesOnPosts?: Resolver<
    {},
    UpsertOneCategoriesOnPostsArgs,
    Client.CategoriesOnPosts
  >;
  createManyCategoriesOnPosts?: Resolver<
    {},
    CreateManyCategoriesOnPostsArgs,
    Client.Prisma.BatchPayload
  >;
  deleteOneCategoriesOnPosts?: Resolver<
    {},
    DeleteOneCategoriesOnPostsArgs,
    Client.CategoriesOnPosts | null
  >;
  updateOneCategoriesOnPosts?: Resolver<
    {},
    UpdateOneCategoriesOnPostsArgs,
    Client.CategoriesOnPosts | null
  >;
  updateManyCategoriesOnPosts?: Resolver<
    {},
    UpdateManyCategoriesOnPostsArgs,
    Client.Prisma.BatchPayload
  >;
  deleteManyCategoriesOnPosts?: Resolver<
    {},
    DeleteManyCategoriesOnPostsArgs,
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
  number2?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    undefined[] | null
  >;
  number?: Resolver<Client.Prisma.UserGroupByOutputType, {}, undefined>;
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

export interface AggregatePost {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMaxAggregateOutputType | null
  >;
}

export interface PostGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.PostGroupByOutputType, {}, number>;
  user_id?: Resolver<Client.Prisma.PostGroupByOutputType, {}, number>;
  title?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>;
  _count?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostMaxAggregateOutputType | null
  >;
}

export interface AggregateCategory {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateCategory,
    {},
    Client.Prisma.CategoryCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateCategory,
    {},
    Client.Prisma.CategoryAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateCategory,
    {},
    Client.Prisma.CategorySumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateCategory,
    {},
    Client.Prisma.CategoryMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateCategory,
    {},
    Client.Prisma.CategoryMaxAggregateOutputType | null
  >;
}

export interface CategoryGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.CategoryGroupByOutputType, {}, number>;
  name?: Resolver<Client.Prisma.CategoryGroupByOutputType, {}, string>;
  _count?: Resolver<
    Client.Prisma.CategoryGroupByOutputType,
    {},
    Client.Prisma.CategoryCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.CategoryGroupByOutputType,
    {},
    Client.Prisma.CategoryAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.CategoryGroupByOutputType,
    {},
    Client.Prisma.CategorySumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.CategoryGroupByOutputType,
    {},
    Client.Prisma.CategoryMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.CategoryGroupByOutputType,
    {},
    Client.Prisma.CategoryMaxAggregateOutputType | null
  >;
}

export interface AggregateCategoriesOnPosts {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateCategoriesOnPosts,
    {},
    Client.Prisma.CategoriesOnPostsCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateCategoriesOnPosts,
    {},
    Client.Prisma.CategoriesOnPostsAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateCategoriesOnPosts,
    {},
    Client.Prisma.CategoriesOnPostsSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateCategoriesOnPosts,
    {},
    Client.Prisma.CategoriesOnPostsMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateCategoriesOnPosts,
    {},
    Client.Prisma.CategoriesOnPostsMaxAggregateOutputType | null
  >;
}

export interface CategoriesOnPostsGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  postId?: Resolver<
    Client.Prisma.CategoriesOnPostsGroupByOutputType,
    {},
    number
  >;
  categoryId?: Resolver<
    Client.Prisma.CategoriesOnPostsGroupByOutputType,
    {},
    number
  >;
  assignedAt?: Resolver<
    Client.Prisma.CategoriesOnPostsGroupByOutputType,
    {},
    Date
  >;
  assignedBy?: Resolver<
    Client.Prisma.CategoriesOnPostsGroupByOutputType,
    {},
    string
  >;
  _count?: Resolver<
    Client.Prisma.CategoriesOnPostsGroupByOutputType,
    {},
    Client.Prisma.CategoriesOnPostsCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.CategoriesOnPostsGroupByOutputType,
    {},
    Client.Prisma.CategoriesOnPostsAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.CategoriesOnPostsGroupByOutputType,
    {},
    Client.Prisma.CategoriesOnPostsSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.CategoriesOnPostsGroupByOutputType,
    {},
    Client.Prisma.CategoriesOnPostsMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.CategoriesOnPostsGroupByOutputType,
    {},
    Client.Prisma.CategoriesOnPostsMaxAggregateOutputType | null
  >;
}

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>;
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>;
}

export interface UserCountOutputType {
  [key: string]: Resolver<any, any, any>;
  posts?: Resolver<Client.Prisma.UserCountOutputType, {}, number>;
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
  number2?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  number?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
}

export interface UserAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserAvgAggregateOutputType, {}, number | null>;
  number2?: Resolver<
    Client.Prisma.UserAvgAggregateOutputType,
    {},
    undefined | null
  >;
  number?: Resolver<
    Client.Prisma.UserAvgAggregateOutputType,
    {},
    undefined | null
  >;
}

export interface UserSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserSumAggregateOutputType, {}, number | null>;
  number2?: Resolver<
    Client.Prisma.UserSumAggregateOutputType,
    {},
    undefined[] | null
  >;
  number?: Resolver<
    Client.Prisma.UserSumAggregateOutputType,
    {},
    undefined | null
  >;
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
  number?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    undefined | null
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
  number?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    undefined | null
  >;
}

export interface PostCountOutputType {
  [key: string]: Resolver<any, any, any>;
  categories?: Resolver<Client.Prisma.PostCountOutputType, {}, number>;
}

export interface PostCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>;
  user_id?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>;
  title?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>;
}

export interface PostAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.PostAvgAggregateOutputType, {}, number | null>;
  user_id?: Resolver<
    Client.Prisma.PostAvgAggregateOutputType,
    {},
    number | null
  >;
}

export interface PostSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.PostSumAggregateOutputType, {}, number | null>;
  user_id?: Resolver<
    Client.Prisma.PostSumAggregateOutputType,
    {},
    number | null
  >;
}

export interface PostMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, number | null>;
  user_id?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    number | null
  >;
  title?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, string | null>;
}

export interface PostMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, number | null>;
  user_id?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    number | null
  >;
  title?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, string | null>;
}

export interface CategoryCountOutputType {
  [key: string]: Resolver<any, any, any>;
  posts?: Resolver<Client.Prisma.CategoryCountOutputType, {}, number>;
}

export interface CategoryCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.CategoryCountAggregateOutputType, {}, number>;
  name?: Resolver<Client.Prisma.CategoryCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.CategoryCountAggregateOutputType, {}, number>;
}

export interface CategoryAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<
    Client.Prisma.CategoryAvgAggregateOutputType,
    {},
    number | null
  >;
}

export interface CategorySumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<
    Client.Prisma.CategorySumAggregateOutputType,
    {},
    number | null
  >;
}

export interface CategoryMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<
    Client.Prisma.CategoryMinAggregateOutputType,
    {},
    number | null
  >;
  name?: Resolver<
    Client.Prisma.CategoryMinAggregateOutputType,
    {},
    string | null
  >;
}

export interface CategoryMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<
    Client.Prisma.CategoryMaxAggregateOutputType,
    {},
    number | null
  >;
  name?: Resolver<
    Client.Prisma.CategoryMaxAggregateOutputType,
    {},
    string | null
  >;
}

export interface CategoriesOnPostsCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  postId?: Resolver<
    Client.Prisma.CategoriesOnPostsCountAggregateOutputType,
    {},
    number
  >;
  categoryId?: Resolver<
    Client.Prisma.CategoriesOnPostsCountAggregateOutputType,
    {},
    number
  >;
  assignedAt?: Resolver<
    Client.Prisma.CategoriesOnPostsCountAggregateOutputType,
    {},
    number
  >;
  assignedBy?: Resolver<
    Client.Prisma.CategoriesOnPostsCountAggregateOutputType,
    {},
    number
  >;
  _all?: Resolver<
    Client.Prisma.CategoriesOnPostsCountAggregateOutputType,
    {},
    number
  >;
}

export interface CategoriesOnPostsAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  postId?: Resolver<
    Client.Prisma.CategoriesOnPostsAvgAggregateOutputType,
    {},
    number | null
  >;
  categoryId?: Resolver<
    Client.Prisma.CategoriesOnPostsAvgAggregateOutputType,
    {},
    number | null
  >;
}

export interface CategoriesOnPostsSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  postId?: Resolver<
    Client.Prisma.CategoriesOnPostsSumAggregateOutputType,
    {},
    number | null
  >;
  categoryId?: Resolver<
    Client.Prisma.CategoriesOnPostsSumAggregateOutputType,
    {},
    number | null
  >;
}

export interface CategoriesOnPostsMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  postId?: Resolver<
    Client.Prisma.CategoriesOnPostsMinAggregateOutputType,
    {},
    number | null
  >;
  categoryId?: Resolver<
    Client.Prisma.CategoriesOnPostsMinAggregateOutputType,
    {},
    number | null
  >;
  assignedAt?: Resolver<
    Client.Prisma.CategoriesOnPostsMinAggregateOutputType,
    {},
    Date | null
  >;
  assignedBy?: Resolver<
    Client.Prisma.CategoriesOnPostsMinAggregateOutputType,
    {},
    string | null
  >;
}

export interface CategoriesOnPostsMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  postId?: Resolver<
    Client.Prisma.CategoriesOnPostsMaxAggregateOutputType,
    {},
    number | null
  >;
  categoryId?: Resolver<
    Client.Prisma.CategoriesOnPostsMaxAggregateOutputType,
    {},
    number | null
  >;
  assignedAt?: Resolver<
    Client.Prisma.CategoriesOnPostsMaxAggregateOutputType,
    {},
    Date | null
  >;
  assignedBy?: Resolver<
    Client.Prisma.CategoriesOnPostsMaxAggregateOutputType,
    {},
    string | null
  >;
}

export interface UserPostsArgs {
  where?: PostWhereInput | null;
  orderBy?: PostOrderByWithRelationInput[] | null;
  cursor?: PostWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: PostScalarFieldEnum[] | null;
}

export interface PostCategoriesArgs {
  where?: CategoriesOnPostsWhereInput | null;
  orderBy?: CategoriesOnPostsOrderByWithRelationInput[] | null;
  cursor?: CategoriesOnPostsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CategoriesOnPostsScalarFieldEnum[] | null;
}

export interface CategoryPostsArgs {
  where?: CategoriesOnPostsWhereInput | null;
  orderBy?: CategoriesOnPostsOrderByWithRelationInput[] | null;
  cursor?: CategoriesOnPostsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CategoriesOnPostsScalarFieldEnum[] | null;
}

export interface FindFirstUserArgs {
  where?: UserWhereInput | null;
  orderBy?: UserOrderByWithRelationInput[] | null;
  cursor?: UserWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UserScalarFieldEnum[] | null;
}

export interface FindManyUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface AggregateUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.UserCountAggregateInputType;
  _avg?: Client.Prisma.UserAvgAggregateInputType;
  _sum?: Client.Prisma.UserSumAggregateInputType;
  _min?: Client.Prisma.UserMinAggregateInputType;
  _max?: Client.Prisma.UserMaxAggregateInputType;
}

export interface GroupByUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithAggregationInput[];
  by: UserScalarFieldEnum[];
  having?: UserScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface FindUniqueUserArgs {
  where: UserWhereUniqueInput | null;
}

export interface FindFirstPostArgs {
  where?: PostWhereInput | null;
  orderBy?: PostOrderByWithRelationInput[] | null;
  cursor?: PostWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: PostScalarFieldEnum[] | null;
}

export interface FindManyPostArgs {
  where?: PostWhereInput;
  orderBy?: PostOrderByWithRelationInput[];
  cursor?: PostWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: PostScalarFieldEnum[];
}

export interface AggregatePostArgs {
  where?: PostWhereInput;
  orderBy?: PostOrderByWithRelationInput[];
  cursor?: PostWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.PostCountAggregateInputType;
  _avg?: Client.Prisma.PostAvgAggregateInputType;
  _sum?: Client.Prisma.PostSumAggregateInputType;
  _min?: Client.Prisma.PostMinAggregateInputType;
  _max?: Client.Prisma.PostMaxAggregateInputType;
}

export interface GroupByPostArgs {
  where?: PostWhereInput;
  orderBy?: PostOrderByWithAggregationInput[];
  by: PostScalarFieldEnum[];
  having?: PostScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface FindUniquePostArgs {
  where: PostWhereUniqueInput | null;
}

export interface FindFirstCategoryArgs {
  where?: CategoryWhereInput | null;
  orderBy?: CategoryOrderByWithRelationInput[] | null;
  cursor?: CategoryWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CategoryScalarFieldEnum[] | null;
}

export interface FindManyCategoryArgs {
  where?: CategoryWhereInput;
  orderBy?: CategoryOrderByWithRelationInput[];
  cursor?: CategoryWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CategoryScalarFieldEnum[];
}

export interface AggregateCategoryArgs {
  where?: CategoryWhereInput;
  orderBy?: CategoryOrderByWithRelationInput[];
  cursor?: CategoryWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.CategoryCountAggregateInputType;
  _avg?: Client.Prisma.CategoryAvgAggregateInputType;
  _sum?: Client.Prisma.CategorySumAggregateInputType;
  _min?: Client.Prisma.CategoryMinAggregateInputType;
  _max?: Client.Prisma.CategoryMaxAggregateInputType;
}

export interface GroupByCategoryArgs {
  where?: CategoryWhereInput;
  orderBy?: CategoryOrderByWithAggregationInput[];
  by: CategoryScalarFieldEnum[];
  having?: CategoryScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface FindUniqueCategoryArgs {
  where: CategoryWhereUniqueInput | null;
}

export interface FindFirstCategoriesOnPostsArgs {
  where?: CategoriesOnPostsWhereInput | null;
  orderBy?: CategoriesOnPostsOrderByWithRelationInput[] | null;
  cursor?: CategoriesOnPostsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CategoriesOnPostsScalarFieldEnum[] | null;
}

export interface FindManyCategoriesOnPostsArgs {
  where?: CategoriesOnPostsWhereInput;
  orderBy?: CategoriesOnPostsOrderByWithRelationInput[];
  cursor?: CategoriesOnPostsWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CategoriesOnPostsScalarFieldEnum[];
}

export interface AggregateCategoriesOnPostsArgs {
  where?: CategoriesOnPostsWhereInput;
  orderBy?: CategoriesOnPostsOrderByWithRelationInput[];
  cursor?: CategoriesOnPostsWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.CategoriesOnPostsCountAggregateInputType;
  _avg?: Client.Prisma.CategoriesOnPostsAvgAggregateInputType;
  _sum?: Client.Prisma.CategoriesOnPostsSumAggregateInputType;
  _min?: Client.Prisma.CategoriesOnPostsMinAggregateInputType;
  _max?: Client.Prisma.CategoriesOnPostsMaxAggregateInputType;
}

export interface GroupByCategoriesOnPostsArgs {
  where?: CategoriesOnPostsWhereInput;
  orderBy?: CategoriesOnPostsOrderByWithAggregationInput[];
  by: CategoriesOnPostsScalarFieldEnum[];
  having?: CategoriesOnPostsScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface FindUniqueCategoriesOnPostsArgs {
  where: CategoriesOnPostsWhereUniqueInput | null;
}

export interface CreateOneUserArgs {
  data: UserCreateInput;
}

export interface UpsertOneUserArgs {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
}

export interface CreateManyUserArgs {
  data: UserCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface DeleteOneUserArgs {
  where: UserWhereUniqueInput | null;
}

export interface UpdateOneUserArgs {
  data: UserUpdateInput | null;
  where: UserWhereUniqueInput | null;
}

export interface UpdateManyUserArgs {
  data: UserUpdateManyMutationInput;
  where?: UserWhereInput;
}

export interface DeleteManyUserArgs {
  where?: UserWhereInput;
}

export interface CreateOnePostArgs {
  data: PostCreateInput;
}

export interface UpsertOnePostArgs {
  where: PostWhereUniqueInput;
  create: PostCreateInput;
  update: PostUpdateInput;
}

export interface CreateManyPostArgs {
  data: PostCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface DeleteOnePostArgs {
  where: PostWhereUniqueInput | null;
}

export interface UpdateOnePostArgs {
  data: PostUpdateInput | null;
  where: PostWhereUniqueInput | null;
}

export interface UpdateManyPostArgs {
  data: PostUpdateManyMutationInput;
  where?: PostWhereInput;
}

export interface DeleteManyPostArgs {
  where?: PostWhereInput;
}

export interface CreateOneCategoryArgs {
  data: CategoryCreateInput;
}

export interface UpsertOneCategoryArgs {
  where: CategoryWhereUniqueInput;
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
}

export interface CreateManyCategoryArgs {
  data: CategoryCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface DeleteOneCategoryArgs {
  where: CategoryWhereUniqueInput | null;
}

export interface UpdateOneCategoryArgs {
  data: CategoryUpdateInput | null;
  where: CategoryWhereUniqueInput | null;
}

export interface UpdateManyCategoryArgs {
  data: CategoryUpdateManyMutationInput;
  where?: CategoryWhereInput;
}

export interface DeleteManyCategoryArgs {
  where?: CategoryWhereInput;
}

export interface CreateOneCategoriesOnPostsArgs {
  data: CategoriesOnPostsCreateInput;
}

export interface UpsertOneCategoriesOnPostsArgs {
  where: CategoriesOnPostsWhereUniqueInput;
  create: CategoriesOnPostsCreateInput;
  update: CategoriesOnPostsUpdateInput;
}

export interface CreateManyCategoriesOnPostsArgs {
  data: CategoriesOnPostsCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface DeleteOneCategoriesOnPostsArgs {
  where: CategoriesOnPostsWhereUniqueInput | null;
}

export interface UpdateOneCategoriesOnPostsArgs {
  data: CategoriesOnPostsUpdateInput | null;
  where: CategoriesOnPostsWhereUniqueInput | null;
}

export interface UpdateManyCategoriesOnPostsArgs {
  data: CategoriesOnPostsUpdateManyMutationInput;
  where?: CategoriesOnPostsWhereInput;
}

export interface DeleteManyCategoriesOnPostsArgs {
  where?: CategoriesOnPostsWhereInput;
}

export interface ExecuteRawArgs {
  query: string;
  parameters?: any;
}

export interface QueryRawArgs {
  query: string;
  parameters?: any;
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
  posts?: PostListRelationFilter;
  number2?: DecimalNullableListFilter;
  number?: DecimalFilter;
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
  posts?: PostOrderByRelationAggregateInput;
  number2?: SortOrder;
  number?: SortOrder;
}

export interface UserWhereUniqueInput {
  id?: number;
  createdAt?: Date;
  username?: string;
  email?: string;
  googleId?: string;
  number?: undefined;
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
  number2?: SortOrder;
  number?: SortOrder;
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
  number2?: DecimalNullableListFilter;
  number?: DecimalWithAggregatesFilter;
}

export interface PostWhereInput {
  AND?: PostWhereInput[];
  OR?: PostWhereInput[];
  NOT?: PostWhereInput[];
  id?: IntFilter;
  user?: UserWhereInput;
  user_id?: IntFilter;
  title?: StringFilter;
  categories?: CategoriesOnPostsListRelationFilter;
}

export interface PostOrderByWithRelationInput {
  id?: SortOrder;
  user?: UserOrderByWithRelationInput;
  user_id?: SortOrder;
  title?: SortOrder;
  categories?: CategoriesOnPostsOrderByRelationAggregateInput;
}

export interface PostWhereUniqueInput {
  id?: number;
  user_id?: number;
}

export interface PostOrderByWithAggregationInput {
  id?: SortOrder;
  user_id?: SortOrder;
  title?: SortOrder;
  _count?: PostCountOrderByAggregateInput;
  _avg?: PostAvgOrderByAggregateInput;
  _max?: PostMaxOrderByAggregateInput;
  _min?: PostMinOrderByAggregateInput;
  _sum?: PostSumOrderByAggregateInput;
}

export interface PostScalarWhereWithAggregatesInput {
  AND?: PostScalarWhereWithAggregatesInput[];
  OR?: PostScalarWhereWithAggregatesInput[];
  NOT?: PostScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  user_id?: IntWithAggregatesFilter;
  title?: StringWithAggregatesFilter;
}

export interface CategoryWhereInput {
  AND?: CategoryWhereInput[];
  OR?: CategoryWhereInput[];
  NOT?: CategoryWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  posts?: CategoriesOnPostsListRelationFilter;
}

export interface CategoryOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  posts?: CategoriesOnPostsOrderByRelationAggregateInput;
}

export interface CategoryWhereUniqueInput {
  id?: number;
}

export interface CategoryOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  _count?: CategoryCountOrderByAggregateInput;
  _avg?: CategoryAvgOrderByAggregateInput;
  _max?: CategoryMaxOrderByAggregateInput;
  _min?: CategoryMinOrderByAggregateInput;
  _sum?: CategorySumOrderByAggregateInput;
}

export interface CategoryScalarWhereWithAggregatesInput {
  AND?: CategoryScalarWhereWithAggregatesInput[];
  OR?: CategoryScalarWhereWithAggregatesInput[];
  NOT?: CategoryScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
}

export interface CategoriesOnPostsWhereInput {
  AND?: CategoriesOnPostsWhereInput[];
  OR?: CategoriesOnPostsWhereInput[];
  NOT?: CategoriesOnPostsWhereInput[];
  post?: PostWhereInput;
  postId?: IntFilter;
  category?: CategoryWhereInput;
  categoryId?: IntFilter;
  assignedAt?: DateTimeFilter;
  assignedBy?: StringFilter;
}

export interface CategoriesOnPostsOrderByWithRelationInput {
  post?: PostOrderByWithRelationInput;
  postId?: SortOrder;
  category?: CategoryOrderByWithRelationInput;
  categoryId?: SortOrder;
  assignedAt?: SortOrder;
  assignedBy?: SortOrder;
}

export interface CategoriesOnPostsWhereUniqueInput {
  postId_categoryId?: CategoriesOnPostsPostIdCategoryIdCompoundUniqueInput;
}

export interface CategoriesOnPostsOrderByWithAggregationInput {
  postId?: SortOrder;
  categoryId?: SortOrder;
  assignedAt?: SortOrder;
  assignedBy?: SortOrder;
  _count?: CategoriesOnPostsCountOrderByAggregateInput;
  _avg?: CategoriesOnPostsAvgOrderByAggregateInput;
  _max?: CategoriesOnPostsMaxOrderByAggregateInput;
  _min?: CategoriesOnPostsMinOrderByAggregateInput;
  _sum?: CategoriesOnPostsSumOrderByAggregateInput;
}

export interface CategoriesOnPostsScalarWhereWithAggregatesInput {
  AND?: CategoriesOnPostsScalarWhereWithAggregatesInput[];
  OR?: CategoriesOnPostsScalarWhereWithAggregatesInput[];
  NOT?: CategoriesOnPostsScalarWhereWithAggregatesInput[];
  postId?: IntWithAggregatesFilter;
  categoryId?: IntWithAggregatesFilter;
  assignedAt?: DateTimeWithAggregatesFilter;
  assignedBy?: StringWithAggregatesFilter;
}

export interface UserCreateInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  posts?: PostCreateNestedManyWithoutUserInput;
  number2?: UserCreatenumber2Input;
  number: undefined;
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
  posts?: PostUncheckedCreateNestedManyWithoutUserInput;
  number2?: UserCreatenumber2Input;
  number: undefined;
}

export interface UserUpdateInput {
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
  posts?: PostUpdateManyWithoutUserNestedInput;
  number2?: UserUpdatenumber2Input;
  number?: DecimalFieldUpdateOperationsInput;
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
  posts?: PostUncheckedUpdateManyWithoutUserNestedInput;
  number2?: UserUpdatenumber2Input;
  number?: DecimalFieldUpdateOperationsInput;
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
  number2?: UserCreatenumber2Input;
  number: undefined;
}

export interface UserUpdateManyMutationInput {
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
  number2?: UserUpdatenumber2Input;
  number?: DecimalFieldUpdateOperationsInput;
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
  number2?: UserUpdatenumber2Input;
  number?: DecimalFieldUpdateOperationsInput;
}

export interface PostCreateInput {
  user: UserCreateNestedOneWithoutPostsInput;
  title: string;
  categories?: CategoriesOnPostsCreateNestedManyWithoutPostInput;
}

export interface PostUncheckedCreateInput {
  id?: number;
  user_id: number;
  title: string;
  categories?: CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput;
}

export interface PostUpdateInput {
  user?: UserUpdateOneRequiredWithoutPostsNestedInput;
  title?: StringFieldUpdateOperationsInput;
  categories?: CategoriesOnPostsUpdateManyWithoutPostNestedInput;
}

export interface PostUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  user_id?: IntFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  categories?: CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput;
}

export interface PostCreateManyInput {
  id?: number;
  user_id: number;
  title: string;
}

export interface PostUpdateManyMutationInput {
  title?: StringFieldUpdateOperationsInput;
}

export interface PostUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  user_id?: IntFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
}

export interface CategoryCreateInput {
  name: string;
  posts?: CategoriesOnPostsCreateNestedManyWithoutCategoryInput;
}

export interface CategoryUncheckedCreateInput {
  id?: number;
  name: string;
  posts?: CategoriesOnPostsUncheckedCreateNestedManyWithoutCategoryInput;
}

export interface CategoryUpdateInput {
  name?: StringFieldUpdateOperationsInput;
  posts?: CategoriesOnPostsUpdateManyWithoutCategoryNestedInput;
}

export interface CategoryUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  posts?: CategoriesOnPostsUncheckedUpdateManyWithoutCategoryNestedInput;
}

export interface CategoryCreateManyInput {
  id?: number;
  name: string;
}

export interface CategoryUpdateManyMutationInput {
  name?: StringFieldUpdateOperationsInput;
}

export interface CategoryUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
}

export interface CategoriesOnPostsCreateInput {
  post: PostCreateNestedOneWithoutCategoriesInput;
  category: CategoryCreateNestedOneWithoutPostsInput;
  assignedAt?: Date;
  assignedBy: string;
}

export interface CategoriesOnPostsUncheckedCreateInput {
  postId: number;
  categoryId: number;
  assignedAt?: Date;
  assignedBy: string;
}

export interface CategoriesOnPostsUpdateInput {
  post?: PostUpdateOneRequiredWithoutCategoriesNestedInput;
  category?: CategoryUpdateOneRequiredWithoutPostsNestedInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
  assignedBy?: StringFieldUpdateOperationsInput;
}

export interface CategoriesOnPostsUncheckedUpdateInput {
  postId?: IntFieldUpdateOperationsInput;
  categoryId?: IntFieldUpdateOperationsInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
  assignedBy?: StringFieldUpdateOperationsInput;
}

export interface CategoriesOnPostsCreateManyInput {
  postId: number;
  categoryId: number;
  assignedAt?: Date;
  assignedBy: string;
}

export interface CategoriesOnPostsUpdateManyMutationInput {
  assignedAt?: DateTimeFieldUpdateOperationsInput;
  assignedBy?: StringFieldUpdateOperationsInput;
}

export interface CategoriesOnPostsUncheckedUpdateManyInput {
  postId?: IntFieldUpdateOperationsInput;
  categoryId?: IntFieldUpdateOperationsInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
  assignedBy?: StringFieldUpdateOperationsInput;
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

export interface PostListRelationFilter {
  every?: PostWhereInput;
  some?: PostWhereInput;
  none?: PostWhereInput;
}

export interface DecimalNullableListFilter {
  equals?: undefined[] | null;
  has?: undefined | null;
  hasEvery?: undefined[];
  hasSome?: undefined[];
  isEmpty?: boolean;
}

export interface DecimalFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDecimalFilter;
}

export interface PostOrderByRelationAggregateInput {
  _count?: SortOrder;
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
  number2?: SortOrder;
  number?: SortOrder;
}

export interface UserAvgOrderByAggregateInput {
  id?: SortOrder;
  number2?: SortOrder;
  number?: SortOrder;
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  googleId?: SortOrder;
  number?: SortOrder;
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  googleId?: SortOrder;
  number?: SortOrder;
}

export interface UserSumOrderByAggregateInput {
  id?: SortOrder;
  number2?: SortOrder;
  number?: SortOrder;
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

export interface DecimalWithAggregatesFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDecimalWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedDecimalFilter;
  _sum?: NestedDecimalFilter;
  _min?: NestedDecimalFilter;
  _max?: NestedDecimalFilter;
}

export interface UserRelationFilter {
  is?: UserWhereInput;
  isNot?: UserWhereInput;
}

export interface CategoriesOnPostsListRelationFilter {
  every?: CategoriesOnPostsWhereInput;
  some?: CategoriesOnPostsWhereInput;
  none?: CategoriesOnPostsWhereInput;
}

export interface CategoriesOnPostsOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface PostCountOrderByAggregateInput {
  id?: SortOrder;
  user_id?: SortOrder;
  title?: SortOrder;
}

export interface PostAvgOrderByAggregateInput {
  id?: SortOrder;
  user_id?: SortOrder;
}

export interface PostMaxOrderByAggregateInput {
  id?: SortOrder;
  user_id?: SortOrder;
  title?: SortOrder;
}

export interface PostMinOrderByAggregateInput {
  id?: SortOrder;
  user_id?: SortOrder;
  title?: SortOrder;
}

export interface PostSumOrderByAggregateInput {
  id?: SortOrder;
  user_id?: SortOrder;
}

export interface CategoryCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
}

export interface CategoryAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface CategoryMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
}

export interface CategoryMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
}

export interface CategorySumOrderByAggregateInput {
  id?: SortOrder;
}

export interface PostRelationFilter {
  is?: PostWhereInput;
  isNot?: PostWhereInput;
}

export interface CategoryRelationFilter {
  is?: CategoryWhereInput;
  isNot?: CategoryWhereInput;
}

export interface CategoriesOnPostsPostIdCategoryIdCompoundUniqueInput {
  postId: number;
  categoryId: number;
}

export interface CategoriesOnPostsCountOrderByAggregateInput {
  postId?: SortOrder;
  categoryId?: SortOrder;
  assignedAt?: SortOrder;
  assignedBy?: SortOrder;
}

export interface CategoriesOnPostsAvgOrderByAggregateInput {
  postId?: SortOrder;
  categoryId?: SortOrder;
}

export interface CategoriesOnPostsMaxOrderByAggregateInput {
  postId?: SortOrder;
  categoryId?: SortOrder;
  assignedAt?: SortOrder;
  assignedBy?: SortOrder;
}

export interface CategoriesOnPostsMinOrderByAggregateInput {
  postId?: SortOrder;
  categoryId?: SortOrder;
  assignedAt?: SortOrder;
  assignedBy?: SortOrder;
}

export interface CategoriesOnPostsSumOrderByAggregateInput {
  postId?: SortOrder;
  categoryId?: SortOrder;
}

export interface UserCreaterolesInput {
  set: string[];
}

export interface PostCreateNestedManyWithoutUserInput {
  create?: PostCreateWithoutUserInput[];
  connectOrCreate?: PostCreateOrConnectWithoutUserInput[];
  createMany?: PostCreateManyUserInputEnvelope;
  connect?: PostWhereUniqueInput[];
}

export interface UserCreatenumber2Input {
  set: undefined[];
}

export interface PostUncheckedCreateNestedManyWithoutUserInput {
  create?: PostCreateWithoutUserInput[];
  connectOrCreate?: PostCreateOrConnectWithoutUserInput[];
  createMany?: PostCreateManyUserInputEnvelope;
  connect?: PostWhereUniqueInput[];
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

export interface PostUpdateManyWithoutUserNestedInput {
  create?: PostCreateWithoutUserInput[];
  connectOrCreate?: PostCreateOrConnectWithoutUserInput[];
  upsert?: PostUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: PostCreateManyUserInputEnvelope;
  set?: PostWhereUniqueInput[];
  disconnect?: PostWhereUniqueInput[];
  delete?: PostWhereUniqueInput[];
  connect?: PostWhereUniqueInput[];
  update?: PostUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: PostUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: PostScalarWhereInput[];
}

export interface UserUpdatenumber2Input {
  set?: undefined[];
  push?: undefined;
}

export interface DecimalFieldUpdateOperationsInput {
  set?: undefined;
  increment?: undefined;
  decrement?: undefined;
  multiply?: undefined;
  divide?: undefined;
}

export interface IntFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface PostUncheckedUpdateManyWithoutUserNestedInput {
  create?: PostCreateWithoutUserInput[];
  connectOrCreate?: PostCreateOrConnectWithoutUserInput[];
  upsert?: PostUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: PostCreateManyUserInputEnvelope;
  set?: PostWhereUniqueInput[];
  disconnect?: PostWhereUniqueInput[];
  delete?: PostWhereUniqueInput[];
  connect?: PostWhereUniqueInput[];
  update?: PostUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: PostUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: PostScalarWhereInput[];
}

export interface UserCreateNestedOneWithoutPostsInput {
  create?: UserUncheckedCreateWithoutPostsInput;
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput;
  connect?: UserWhereUniqueInput;
}

export interface CategoriesOnPostsCreateNestedManyWithoutPostInput {
  create?: CategoriesOnPostsCreateWithoutPostInput[];
  connectOrCreate?: CategoriesOnPostsCreateOrConnectWithoutPostInput[];
  createMany?: CategoriesOnPostsCreateManyPostInputEnvelope;
  connect?: CategoriesOnPostsWhereUniqueInput[];
}

export interface CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput {
  create?: CategoriesOnPostsCreateWithoutPostInput[];
  connectOrCreate?: CategoriesOnPostsCreateOrConnectWithoutPostInput[];
  createMany?: CategoriesOnPostsCreateManyPostInputEnvelope;
  connect?: CategoriesOnPostsWhereUniqueInput[];
}

export interface UserUpdateOneRequiredWithoutPostsNestedInput {
  create?: UserUncheckedCreateWithoutPostsInput;
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput;
  upsert?: UserUpsertWithoutPostsInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutPostsInput;
}

export interface CategoriesOnPostsUpdateManyWithoutPostNestedInput {
  create?: CategoriesOnPostsCreateWithoutPostInput[];
  connectOrCreate?: CategoriesOnPostsCreateOrConnectWithoutPostInput[];
  upsert?: CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput[];
  createMany?: CategoriesOnPostsCreateManyPostInputEnvelope;
  set?: CategoriesOnPostsWhereUniqueInput[];
  disconnect?: CategoriesOnPostsWhereUniqueInput[];
  delete?: CategoriesOnPostsWhereUniqueInput[];
  connect?: CategoriesOnPostsWhereUniqueInput[];
  update?: CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput[];
  updateMany?: CategoriesOnPostsUpdateManyWithWhereWithoutPostInput[];
  deleteMany?: CategoriesOnPostsScalarWhereInput[];
}

export interface CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput {
  create?: CategoriesOnPostsCreateWithoutPostInput[];
  connectOrCreate?: CategoriesOnPostsCreateOrConnectWithoutPostInput[];
  upsert?: CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput[];
  createMany?: CategoriesOnPostsCreateManyPostInputEnvelope;
  set?: CategoriesOnPostsWhereUniqueInput[];
  disconnect?: CategoriesOnPostsWhereUniqueInput[];
  delete?: CategoriesOnPostsWhereUniqueInput[];
  connect?: CategoriesOnPostsWhereUniqueInput[];
  update?: CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput[];
  updateMany?: CategoriesOnPostsUpdateManyWithWhereWithoutPostInput[];
  deleteMany?: CategoriesOnPostsScalarWhereInput[];
}

export interface CategoriesOnPostsCreateNestedManyWithoutCategoryInput {
  create?: CategoriesOnPostsCreateWithoutCategoryInput[];
  connectOrCreate?: CategoriesOnPostsCreateOrConnectWithoutCategoryInput[];
  createMany?: CategoriesOnPostsCreateManyCategoryInputEnvelope;
  connect?: CategoriesOnPostsWhereUniqueInput[];
}

export interface CategoriesOnPostsUncheckedCreateNestedManyWithoutCategoryInput {
  create?: CategoriesOnPostsCreateWithoutCategoryInput[];
  connectOrCreate?: CategoriesOnPostsCreateOrConnectWithoutCategoryInput[];
  createMany?: CategoriesOnPostsCreateManyCategoryInputEnvelope;
  connect?: CategoriesOnPostsWhereUniqueInput[];
}

export interface CategoriesOnPostsUpdateManyWithoutCategoryNestedInput {
  create?: CategoriesOnPostsCreateWithoutCategoryInput[];
  connectOrCreate?: CategoriesOnPostsCreateOrConnectWithoutCategoryInput[];
  upsert?: CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput[];
  createMany?: CategoriesOnPostsCreateManyCategoryInputEnvelope;
  set?: CategoriesOnPostsWhereUniqueInput[];
  disconnect?: CategoriesOnPostsWhereUniqueInput[];
  delete?: CategoriesOnPostsWhereUniqueInput[];
  connect?: CategoriesOnPostsWhereUniqueInput[];
  update?: CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput[];
  updateMany?: CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput[];
  deleteMany?: CategoriesOnPostsScalarWhereInput[];
}

export interface CategoriesOnPostsUncheckedUpdateManyWithoutCategoryNestedInput {
  create?: CategoriesOnPostsCreateWithoutCategoryInput[];
  connectOrCreate?: CategoriesOnPostsCreateOrConnectWithoutCategoryInput[];
  upsert?: CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput[];
  createMany?: CategoriesOnPostsCreateManyCategoryInputEnvelope;
  set?: CategoriesOnPostsWhereUniqueInput[];
  disconnect?: CategoriesOnPostsWhereUniqueInput[];
  delete?: CategoriesOnPostsWhereUniqueInput[];
  connect?: CategoriesOnPostsWhereUniqueInput[];
  update?: CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput[];
  updateMany?: CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput[];
  deleteMany?: CategoriesOnPostsScalarWhereInput[];
}

export interface PostCreateNestedOneWithoutCategoriesInput {
  create?: PostUncheckedCreateWithoutCategoriesInput;
  connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput;
  connect?: PostWhereUniqueInput;
}

export interface CategoryCreateNestedOneWithoutPostsInput {
  create?: CategoryUncheckedCreateWithoutPostsInput;
  connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput;
  connect?: CategoryWhereUniqueInput;
}

export interface PostUpdateOneRequiredWithoutCategoriesNestedInput {
  create?: PostUncheckedCreateWithoutCategoriesInput;
  connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput;
  upsert?: PostUpsertWithoutCategoriesInput;
  connect?: PostWhereUniqueInput;
  update?: PostUncheckedUpdateWithoutCategoriesInput;
}

export interface CategoryUpdateOneRequiredWithoutPostsNestedInput {
  create?: CategoryUncheckedCreateWithoutPostsInput;
  connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput;
  upsert?: CategoryUpsertWithoutPostsInput;
  connect?: CategoryWhereUniqueInput;
  update?: CategoryUncheckedUpdateWithoutPostsInput;
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

export interface NestedDecimalFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDecimalFilter;
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

export interface NestedDecimalWithAggregatesFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDecimalWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedDecimalFilter;
  _sum?: NestedDecimalFilter;
  _min?: NestedDecimalFilter;
  _max?: NestedDecimalFilter;
}

export interface PostCreateWithoutUserInput {
  title: string;
  categories?: CategoriesOnPostsCreateNestedManyWithoutPostInput;
}

export interface PostUncheckedCreateWithoutUserInput {
  id?: number;
  title: string;
  categories?: CategoriesOnPostsUncheckedCreateNestedManyWithoutPostInput;
}

export interface PostCreateOrConnectWithoutUserInput {
  where: PostWhereUniqueInput;
  create: PostUncheckedCreateWithoutUserInput;
}

export interface PostCreateManyUserInputEnvelope {
  data: PostCreateManyUserInput[];
  skipDuplicates?: boolean;
}

export interface PostUpsertWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput;
  update: PostUncheckedUpdateWithoutUserInput;
  create: PostUncheckedCreateWithoutUserInput;
}

export interface PostUpdateWithWhereUniqueWithoutUserInput {
  where: PostWhereUniqueInput;
  data: PostUncheckedUpdateWithoutUserInput;
}

export interface PostUpdateManyWithWhereWithoutUserInput {
  where: PostScalarWhereInput;
  data: PostUncheckedUpdateManyWithoutPostsInput;
}

export interface PostScalarWhereInput {
  AND?: PostScalarWhereInput[];
  OR?: PostScalarWhereInput[];
  NOT?: PostScalarWhereInput[];
  id?: IntFilter;
  user_id?: IntFilter;
  title?: StringFilter;
}

export interface UserCreateWithoutPostsInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  number2?: UserCreatenumber2Input;
  number: undefined;
}

export interface UserUncheckedCreateWithoutPostsInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  number2?: UserCreatenumber2Input;
  number: undefined;
}

export interface UserCreateOrConnectWithoutPostsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutPostsInput;
}

export interface CategoriesOnPostsCreateWithoutPostInput {
  category: CategoryCreateNestedOneWithoutPostsInput;
  assignedAt?: Date;
  assignedBy: string;
}

export interface CategoriesOnPostsUncheckedCreateWithoutPostInput {
  categoryId: number;
  assignedAt?: Date;
  assignedBy: string;
}

export interface CategoriesOnPostsCreateOrConnectWithoutPostInput {
  where: CategoriesOnPostsWhereUniqueInput;
  create: CategoriesOnPostsUncheckedCreateWithoutPostInput;
}

export interface CategoriesOnPostsCreateManyPostInputEnvelope {
  data: CategoriesOnPostsCreateManyPostInput[];
  skipDuplicates?: boolean;
}

export interface UserUpsertWithoutPostsInput {
  update: UserUncheckedUpdateWithoutPostsInput;
  create: UserUncheckedCreateWithoutPostsInput;
}

export interface UserUpdateWithoutPostsInput {
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
  number2?: UserUpdatenumber2Input;
  number?: DecimalFieldUpdateOperationsInput;
}

export interface UserUncheckedUpdateWithoutPostsInput {
  id?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
  number2?: UserUpdatenumber2Input;
  number?: DecimalFieldUpdateOperationsInput;
}

export interface CategoriesOnPostsUpsertWithWhereUniqueWithoutPostInput {
  where: CategoriesOnPostsWhereUniqueInput;
  update: CategoriesOnPostsUncheckedUpdateWithoutPostInput;
  create: CategoriesOnPostsUncheckedCreateWithoutPostInput;
}

export interface CategoriesOnPostsUpdateWithWhereUniqueWithoutPostInput {
  where: CategoriesOnPostsWhereUniqueInput;
  data: CategoriesOnPostsUncheckedUpdateWithoutPostInput;
}

export interface CategoriesOnPostsUpdateManyWithWhereWithoutPostInput {
  where: CategoriesOnPostsScalarWhereInput;
  data: CategoriesOnPostsUncheckedUpdateManyWithoutCategoriesInput;
}

export interface CategoriesOnPostsScalarWhereInput {
  AND?: CategoriesOnPostsScalarWhereInput[];
  OR?: CategoriesOnPostsScalarWhereInput[];
  NOT?: CategoriesOnPostsScalarWhereInput[];
  postId?: IntFilter;
  categoryId?: IntFilter;
  assignedAt?: DateTimeFilter;
  assignedBy?: StringFilter;
}

export interface CategoriesOnPostsCreateWithoutCategoryInput {
  post: PostCreateNestedOneWithoutCategoriesInput;
  assignedAt?: Date;
  assignedBy: string;
}

export interface CategoriesOnPostsUncheckedCreateWithoutCategoryInput {
  postId: number;
  assignedAt?: Date;
  assignedBy: string;
}

export interface CategoriesOnPostsCreateOrConnectWithoutCategoryInput {
  where: CategoriesOnPostsWhereUniqueInput;
  create: CategoriesOnPostsUncheckedCreateWithoutCategoryInput;
}

export interface CategoriesOnPostsCreateManyCategoryInputEnvelope {
  data: CategoriesOnPostsCreateManyCategoryInput[];
  skipDuplicates?: boolean;
}

export interface CategoriesOnPostsUpsertWithWhereUniqueWithoutCategoryInput {
  where: CategoriesOnPostsWhereUniqueInput;
  update: CategoriesOnPostsUncheckedUpdateWithoutCategoryInput;
  create: CategoriesOnPostsUncheckedCreateWithoutCategoryInput;
}

export interface CategoriesOnPostsUpdateWithWhereUniqueWithoutCategoryInput {
  where: CategoriesOnPostsWhereUniqueInput;
  data: CategoriesOnPostsUncheckedUpdateWithoutCategoryInput;
}

export interface CategoriesOnPostsUpdateManyWithWhereWithoutCategoryInput {
  where: CategoriesOnPostsScalarWhereInput;
  data: CategoriesOnPostsUncheckedUpdateManyWithoutPostsInput;
}

export interface PostCreateWithoutCategoriesInput {
  user: UserCreateNestedOneWithoutPostsInput;
  title: string;
}

export interface PostUncheckedCreateWithoutCategoriesInput {
  id?: number;
  user_id: number;
  title: string;
}

export interface PostCreateOrConnectWithoutCategoriesInput {
  where: PostWhereUniqueInput;
  create: PostUncheckedCreateWithoutCategoriesInput;
}

export interface CategoryCreateWithoutPostsInput {
  name: string;
}

export interface CategoryUncheckedCreateWithoutPostsInput {
  id?: number;
  name: string;
}

export interface CategoryCreateOrConnectWithoutPostsInput {
  where: CategoryWhereUniqueInput;
  create: CategoryUncheckedCreateWithoutPostsInput;
}

export interface PostUpsertWithoutCategoriesInput {
  update: PostUncheckedUpdateWithoutCategoriesInput;
  create: PostUncheckedCreateWithoutCategoriesInput;
}

export interface PostUpdateWithoutCategoriesInput {
  user?: UserUpdateOneRequiredWithoutPostsNestedInput;
  title?: StringFieldUpdateOperationsInput;
}

export interface PostUncheckedUpdateWithoutCategoriesInput {
  id?: IntFieldUpdateOperationsInput;
  user_id?: IntFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
}

export interface CategoryUpsertWithoutPostsInput {
  update: CategoryUncheckedUpdateWithoutPostsInput;
  create: CategoryUncheckedCreateWithoutPostsInput;
}

export interface CategoryUpdateWithoutPostsInput {
  name?: StringFieldUpdateOperationsInput;
}

export interface CategoryUncheckedUpdateWithoutPostsInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
}

export interface PostCreateManyUserInput {
  id?: number;
  title: string;
}

export interface PostUpdateWithoutUserInput {
  title?: StringFieldUpdateOperationsInput;
  categories?: CategoriesOnPostsUpdateManyWithoutPostNestedInput;
}

export interface PostUncheckedUpdateWithoutUserInput {
  id?: IntFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  categories?: CategoriesOnPostsUncheckedUpdateManyWithoutPostNestedInput;
}

export interface PostUncheckedUpdateManyWithoutPostsInput {
  id?: IntFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
}

export interface CategoriesOnPostsCreateManyPostInput {
  categoryId: number;
  assignedAt?: Date;
  assignedBy: string;
}

export interface CategoriesOnPostsUpdateWithoutPostInput {
  category?: CategoryUpdateOneRequiredWithoutPostsNestedInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
  assignedBy?: StringFieldUpdateOperationsInput;
}

export interface CategoriesOnPostsUncheckedUpdateWithoutPostInput {
  categoryId?: IntFieldUpdateOperationsInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
  assignedBy?: StringFieldUpdateOperationsInput;
}

export interface CategoriesOnPostsUncheckedUpdateManyWithoutCategoriesInput {
  categoryId?: IntFieldUpdateOperationsInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
  assignedBy?: StringFieldUpdateOperationsInput;
}

export interface CategoriesOnPostsCreateManyCategoryInput {
  postId: number;
  assignedAt?: Date;
  assignedBy: string;
}

export interface CategoriesOnPostsUpdateWithoutCategoryInput {
  post?: PostUpdateOneRequiredWithoutCategoriesNestedInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
  assignedBy?: StringFieldUpdateOperationsInput;
}

export interface CategoriesOnPostsUncheckedUpdateWithoutCategoryInput {
  postId?: IntFieldUpdateOperationsInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
  assignedBy?: StringFieldUpdateOperationsInput;
}

export interface CategoriesOnPostsUncheckedUpdateManyWithoutPostsInput {
  postId?: IntFieldUpdateOperationsInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
  assignedBy?: StringFieldUpdateOperationsInput;
}

export enum CategoriesOnPostsScalarFieldEnum {
  postId = 'postId',
  categoryId = 'categoryId',
  assignedAt = 'assignedAt',
  assignedBy = 'assignedBy',
}
export enum CategoryScalarFieldEnum {
  id = 'id',
  name = 'name',
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
export enum PostScalarFieldEnum {
  id = 'id',
  user_id = 'user_id',
  title = 'title',
}
export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
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
  number2 = 'number2',
  number = 'number',
}
