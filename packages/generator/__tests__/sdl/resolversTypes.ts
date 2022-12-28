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
  Profile?: Profile;
  UsersOnTeams?: UsersOnTeams;
  Team?: Team;
  Query?: Query;
  Mutation?: Mutation;
  AggregateUser?: AggregateUser;
  UserGroupByOutputType?: UserGroupByOutputType;
  AggregateProfile?: AggregateProfile;
  ProfileGroupByOutputType?: ProfileGroupByOutputType;
  AggregateUsersOnTeams?: AggregateUsersOnTeams;
  UsersOnTeamsGroupByOutputType?: UsersOnTeamsGroupByOutputType;
  AggregateTeam?: AggregateTeam;
  TeamGroupByOutputType?: TeamGroupByOutputType;
  AffectedRowsOutput?: AffectedRowsOutput;
  UserCountOutputType?: UserCountOutputType;
  UserCountAggregateOutputType?: UserCountAggregateOutputType;
  UserAvgAggregateOutputType?: UserAvgAggregateOutputType;
  UserSumAggregateOutputType?: UserSumAggregateOutputType;
  UserMinAggregateOutputType?: UserMinAggregateOutputType;
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType;
  ProfileCountAggregateOutputType?: ProfileCountAggregateOutputType;
  ProfileAvgAggregateOutputType?: ProfileAvgAggregateOutputType;
  ProfileSumAggregateOutputType?: ProfileSumAggregateOutputType;
  ProfileMinAggregateOutputType?: ProfileMinAggregateOutputType;
  ProfileMaxAggregateOutputType?: ProfileMaxAggregateOutputType;
  UsersOnTeamsCountAggregateOutputType?: UsersOnTeamsCountAggregateOutputType;
  UsersOnTeamsAvgAggregateOutputType?: UsersOnTeamsAvgAggregateOutputType;
  UsersOnTeamsSumAggregateOutputType?: UsersOnTeamsSumAggregateOutputType;
  UsersOnTeamsMinAggregateOutputType?: UsersOnTeamsMinAggregateOutputType;
  UsersOnTeamsMaxAggregateOutputType?: UsersOnTeamsMaxAggregateOutputType;
  TeamCountOutputType?: TeamCountOutputType;
  TeamCountAggregateOutputType?: TeamCountAggregateOutputType;
  TeamMinAggregateOutputType?: TeamMinAggregateOutputType;
  TeamMaxAggregateOutputType?: TeamMaxAggregateOutputType;
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
  lastName?: Resolver<Client.User, {}, string | null>;
  firstName?: Resolver<Client.User, {}, string | null>;
  profile?: Resolver<Client.User, {}, Client.Profile | null>;
  teams?: Resolver<
    Client.User,
    Users_UserTeamsArgs,
    Client.UsersOnTeams[] | null
  >;
  _count?: Resolver<Client.User, {}, Client.Prisma.UserCountOutputType>;

  __resolveReference?: any;
}

export interface Profile {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Profile, {}, number>;
  user?: Resolver<Client.Profile, {}, Client.User>;
  location?: Resolver<Client.Profile, {}, string | null>;
  joiningDate?: Resolver<Client.Profile, {}, Date | null>;
  designation?: Resolver<Client.Profile, {}, string | null>;
  profileImg?: Resolver<Client.Profile, {}, string | null>;
  designationIcon?: Resolver<Client.Profile, {}, string | null>;
  coverImg?: Resolver<Client.Profile, {}, string | null>;

  __resolveReference?: any;
}

export interface UsersOnTeams {
  [key: string]: Resolver<any, any, any>;
  team?: Resolver<Client.UsersOnTeams, {}, Client.Team>;
  teamName?: Resolver<Client.UsersOnTeams, {}, string>;
  user?: Resolver<Client.UsersOnTeams, {}, Client.User>;
  userId?: Resolver<Client.UsersOnTeams, {}, number>;
  assignedAt?: Resolver<Client.UsersOnTeams, {}, Date>;

  __resolveReference?: any;
}

export interface Team {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Team, {}, string>;
  users?: Resolver<
    Client.Team,
    Users_TeamUsersArgs,
    Client.UsersOnTeams[] | null
  >;
  _count?: Resolver<Client.Team, {}, Client.Prisma.TeamCountOutputType>;

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
  Users_findFirstProfile?: Resolver<
    {},
    Users_FindFirstProfileArgs,
    Client.Profile | null
  >;
  Users_findFirstProfileOrThrow?: Resolver<
    {},
    Users_FindFirstProfileOrThrowArgs,
    Client.Profile | null
  >;
  Users_findManyProfile?: Resolver<
    {},
    Users_FindManyProfileArgs,
    Client.Profile[]
  >;
  Users_findManyProfileCount?: Resolver<{}, Users_FindManyProfileArgs, number>;
  Users_aggregateProfile?: Resolver<
    {},
    Users_AggregateProfileArgs,
    Client.Prisma.GetProfileAggregateType<Users_AggregateProfileArgs>
  >;
  //Users_groupByProfile is not generated because model has only unique fields or relations.
  Users_groupByProfile?: Resolver<
    {},
    any,
    | Client.Prisma.GetProfileGroupByPayload<Users_GroupByProfileArgs>
    | GroupByError
  >;
  Users_findUniqueProfile?: Resolver<
    {},
    Users_FindUniqueProfileArgs,
    Client.Profile | null
  >;
  Users_findUniqueProfileOrThrow?: Resolver<
    {},
    Users_FindUniqueProfileOrThrowArgs,
    Client.Profile | null
  >;
  Users_findFirstUsersOnTeams?: Resolver<
    {},
    Users_FindFirstUsersOnTeamsArgs,
    Client.UsersOnTeams | null
  >;
  Users_findFirstUsersOnTeamsOrThrow?: Resolver<
    {},
    Users_FindFirstUsersOnTeamsOrThrowArgs,
    Client.UsersOnTeams | null
  >;
  Users_findManyUsersOnTeams?: Resolver<
    {},
    Users_FindManyUsersOnTeamsArgs,
    Client.UsersOnTeams[]
  >;
  Users_findManyUsersOnTeamsCount?: Resolver<
    {},
    Users_FindManyUsersOnTeamsArgs,
    number
  >;
  Users_aggregateUsersOnTeams?: Resolver<
    {},
    Users_AggregateUsersOnTeamsArgs,
    Client.Prisma.GetUsersOnTeamsAggregateType<Users_AggregateUsersOnTeamsArgs>
  >;
  //Users_groupByUsersOnTeams is not generated because model has only unique fields or relations.
  Users_groupByUsersOnTeams?: Resolver<
    {},
    any,
    | Client.Prisma.GetUsersOnTeamsGroupByPayload<Users_GroupByUsersOnTeamsArgs>
    | GroupByError
  >;
  Users_findUniqueUsersOnTeams?: Resolver<
    {},
    Users_FindUniqueUsersOnTeamsArgs,
    Client.UsersOnTeams | null
  >;
  Users_findUniqueUsersOnTeamsOrThrow?: Resolver<
    {},
    Users_FindUniqueUsersOnTeamsOrThrowArgs,
    Client.UsersOnTeams | null
  >;
  Users_findFirstTeam?: Resolver<
    {},
    Users_FindFirstTeamArgs,
    Client.Team | null
  >;
  Users_findFirstTeamOrThrow?: Resolver<
    {},
    Users_FindFirstTeamOrThrowArgs,
    Client.Team | null
  >;
  Users_findManyTeam?: Resolver<{}, Users_FindManyTeamArgs, Client.Team[]>;
  Users_findManyTeamCount?: Resolver<{}, Users_FindManyTeamArgs, number>;
  Users_aggregateTeam?: Resolver<
    {},
    Users_AggregateTeamArgs,
    Client.Prisma.GetTeamAggregateType<Users_AggregateTeamArgs>
  >;
  //Users_groupByTeam is not generated because model has only unique fields or relations.
  Users_groupByTeam?: Resolver<
    {},
    any,
    Client.Prisma.GetTeamGroupByPayload<Users_GroupByTeamArgs> | GroupByError
  >;
  Users_findUniqueTeam?: Resolver<
    {},
    Users_FindUniqueTeamArgs,
    Client.Team | null
  >;
  Users_findUniqueTeamOrThrow?: Resolver<
    {},
    Users_FindUniqueTeamOrThrowArgs,
    Client.Team | null
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
  //Users_updateManyUser is not generated because model has only unique fields or relations.
  Users_deleteManyUser?: Resolver<
    {},
    Users_DeleteManyUserArgs,
    Client.Prisma.BatchPayload
  >;
  Users_createOneProfile?: Resolver<
    {},
    Users_CreateOneProfileArgs,
    Client.Profile
  >;
  Users_upsertOneProfile?: Resolver<
    {},
    Users_UpsertOneProfileArgs,
    Client.Profile
  >;
  Users_createManyProfile?: Resolver<
    {},
    Users_CreateManyProfileArgs,
    Client.Prisma.BatchPayload
  >;
  Users_deleteOneProfile?: Resolver<
    {},
    Users_DeleteOneProfileArgs,
    Client.Profile | null
  >;
  Users_updateOneProfile?: Resolver<
    {},
    Users_UpdateOneProfileArgs,
    Client.Profile | null
  >;
  //Users_updateManyProfile is not generated because model has only unique fields or relations.
  Users_deleteManyProfile?: Resolver<
    {},
    Users_DeleteManyProfileArgs,
    Client.Prisma.BatchPayload
  >;
  Users_createOneUsersOnTeams?: Resolver<
    {},
    Users_CreateOneUsersOnTeamsArgs,
    Client.UsersOnTeams
  >;
  Users_upsertOneUsersOnTeams?: Resolver<
    {},
    Users_UpsertOneUsersOnTeamsArgs,
    Client.UsersOnTeams
  >;
  Users_createManyUsersOnTeams?: Resolver<
    {},
    Users_CreateManyUsersOnTeamsArgs,
    Client.Prisma.BatchPayload
  >;
  Users_deleteOneUsersOnTeams?: Resolver<
    {},
    Users_DeleteOneUsersOnTeamsArgs,
    Client.UsersOnTeams | null
  >;
  Users_updateOneUsersOnTeams?: Resolver<
    {},
    Users_UpdateOneUsersOnTeamsArgs,
    Client.UsersOnTeams | null
  >;
  //Users_updateManyUsersOnTeams is not generated because model has only unique fields or relations.
  Users_deleteManyUsersOnTeams?: Resolver<
    {},
    Users_DeleteManyUsersOnTeamsArgs,
    Client.Prisma.BatchPayload
  >;
  Users_createOneTeam?: Resolver<{}, Users_CreateOneTeamArgs, Client.Team>;
  Users_upsertOneTeam?: Resolver<{}, Users_UpsertOneTeamArgs, Client.Team>;
  Users_createManyTeam?: Resolver<
    {},
    Users_CreateManyTeamArgs,
    Client.Prisma.BatchPayload
  >;
  Users_deleteOneTeam?: Resolver<
    {},
    Users_DeleteOneTeamArgs,
    Client.Team | null
  >;
  Users_updateOneTeam?: Resolver<
    {},
    Users_UpdateOneTeamArgs,
    Client.Team | null
  >;
  //Users_updateManyTeam is not generated because model has only unique fields or relations.
  Users_deleteManyTeam?: Resolver<
    {},
    Users_DeleteManyTeamArgs,
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
  lastName?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  firstName?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
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

export interface AggregateProfile {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateProfile,
    {},
    Client.Prisma.ProfileCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateProfile,
    {},
    Client.Prisma.ProfileAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateProfile,
    {},
    Client.Prisma.ProfileSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateProfile,
    {},
    Client.Prisma.ProfileMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateProfile,
    {},
    Client.Prisma.ProfileMaxAggregateOutputType | null
  >;
}

export interface ProfileGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, number>;
  location?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    string | null
  >;
  joiningDate?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Date | null
  >;
  designation?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    string | null
  >;
  profileImg?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    string | null
  >;
  designationIcon?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    string | null
  >;
  coverImg?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    string | null
  >;
  _count?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Client.Prisma.ProfileCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Client.Prisma.ProfileAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Client.Prisma.ProfileSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Client.Prisma.ProfileMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Client.Prisma.ProfileMaxAggregateOutputType | null
  >;
}

export interface AggregateUsersOnTeams {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateUsersOnTeams,
    {},
    Client.Prisma.UsersOnTeamsCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateUsersOnTeams,
    {},
    Client.Prisma.UsersOnTeamsAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateUsersOnTeams,
    {},
    Client.Prisma.UsersOnTeamsSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateUsersOnTeams,
    {},
    Client.Prisma.UsersOnTeamsMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateUsersOnTeams,
    {},
    Client.Prisma.UsersOnTeamsMaxAggregateOutputType | null
  >;
}

export interface UsersOnTeamsGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.UsersOnTeamsGroupByOutputType, {}, string>;
  userId?: Resolver<Client.Prisma.UsersOnTeamsGroupByOutputType, {}, number>;
  assignedAt?: Resolver<Client.Prisma.UsersOnTeamsGroupByOutputType, {}, Date>;
  _count?: Resolver<
    Client.Prisma.UsersOnTeamsGroupByOutputType,
    {},
    Client.Prisma.UsersOnTeamsCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.UsersOnTeamsGroupByOutputType,
    {},
    Client.Prisma.UsersOnTeamsAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.UsersOnTeamsGroupByOutputType,
    {},
    Client.Prisma.UsersOnTeamsSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.UsersOnTeamsGroupByOutputType,
    {},
    Client.Prisma.UsersOnTeamsMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.UsersOnTeamsGroupByOutputType,
    {},
    Client.Prisma.UsersOnTeamsMaxAggregateOutputType | null
  >;
}

export interface AggregateTeam {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateTeam,
    {},
    Client.Prisma.TeamCountAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateTeam,
    {},
    Client.Prisma.TeamMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateTeam,
    {},
    Client.Prisma.TeamMaxAggregateOutputType | null
  >;
}

export interface TeamGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.TeamGroupByOutputType, {}, string>;
  _count?: Resolver<
    Client.Prisma.TeamGroupByOutputType,
    {},
    Client.Prisma.TeamCountAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.TeamGroupByOutputType,
    {},
    Client.Prisma.TeamMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.TeamGroupByOutputType,
    {},
    Client.Prisma.TeamMaxAggregateOutputType | null
  >;
}

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>;
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>;
}

export interface UserCountOutputType {
  [key: string]: Resolver<any, any, any>;
  teams?: Resolver<Client.Prisma.UserCountOutputType, {}, number>;
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
  lastName?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  firstName?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
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
  lastName?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >;
  firstName?: Resolver<
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
  lastName?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >;
  firstName?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >;
}

export interface ProfileCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  location?: Resolver<
    Client.Prisma.ProfileCountAggregateOutputType,
    {},
    number
  >;
  joiningDate?: Resolver<
    Client.Prisma.ProfileCountAggregateOutputType,
    {},
    number
  >;
  designation?: Resolver<
    Client.Prisma.ProfileCountAggregateOutputType,
    {},
    number
  >;
  profileImg?: Resolver<
    Client.Prisma.ProfileCountAggregateOutputType,
    {},
    number
  >;
  designationIcon?: Resolver<
    Client.Prisma.ProfileCountAggregateOutputType,
    {},
    number
  >;
  coverImg?: Resolver<
    Client.Prisma.ProfileCountAggregateOutputType,
    {},
    number
  >;
  _all?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
}

export interface ProfileAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<
    Client.Prisma.ProfileAvgAggregateOutputType,
    {},
    number | null
  >;
}

export interface ProfileSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<
    Client.Prisma.ProfileSumAggregateOutputType,
    {},
    number | null
  >;
}

export interface ProfileMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<
    Client.Prisma.ProfileMinAggregateOutputType,
    {},
    number | null
  >;
  location?: Resolver<
    Client.Prisma.ProfileMinAggregateOutputType,
    {},
    string | null
  >;
  joiningDate?: Resolver<
    Client.Prisma.ProfileMinAggregateOutputType,
    {},
    Date | null
  >;
  designation?: Resolver<
    Client.Prisma.ProfileMinAggregateOutputType,
    {},
    string | null
  >;
  profileImg?: Resolver<
    Client.Prisma.ProfileMinAggregateOutputType,
    {},
    string | null
  >;
  designationIcon?: Resolver<
    Client.Prisma.ProfileMinAggregateOutputType,
    {},
    string | null
  >;
  coverImg?: Resolver<
    Client.Prisma.ProfileMinAggregateOutputType,
    {},
    string | null
  >;
}

export interface ProfileMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<
    Client.Prisma.ProfileMaxAggregateOutputType,
    {},
    number | null
  >;
  location?: Resolver<
    Client.Prisma.ProfileMaxAggregateOutputType,
    {},
    string | null
  >;
  joiningDate?: Resolver<
    Client.Prisma.ProfileMaxAggregateOutputType,
    {},
    Date | null
  >;
  designation?: Resolver<
    Client.Prisma.ProfileMaxAggregateOutputType,
    {},
    string | null
  >;
  profileImg?: Resolver<
    Client.Prisma.ProfileMaxAggregateOutputType,
    {},
    string | null
  >;
  designationIcon?: Resolver<
    Client.Prisma.ProfileMaxAggregateOutputType,
    {},
    string | null
  >;
  coverImg?: Resolver<
    Client.Prisma.ProfileMaxAggregateOutputType,
    {},
    string | null
  >;
}

export interface UsersOnTeamsCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<
    Client.Prisma.UsersOnTeamsCountAggregateOutputType,
    {},
    number
  >;
  userId?: Resolver<
    Client.Prisma.UsersOnTeamsCountAggregateOutputType,
    {},
    number
  >;
  assignedAt?: Resolver<
    Client.Prisma.UsersOnTeamsCountAggregateOutputType,
    {},
    number
  >;
  _all?: Resolver<
    Client.Prisma.UsersOnTeamsCountAggregateOutputType,
    {},
    number
  >;
}

export interface UsersOnTeamsAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<
    Client.Prisma.UsersOnTeamsAvgAggregateOutputType,
    {},
    number | null
  >;
}

export interface UsersOnTeamsSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<
    Client.Prisma.UsersOnTeamsSumAggregateOutputType,
    {},
    number | null
  >;
}

export interface UsersOnTeamsMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<
    Client.Prisma.UsersOnTeamsMinAggregateOutputType,
    {},
    string | null
  >;
  userId?: Resolver<
    Client.Prisma.UsersOnTeamsMinAggregateOutputType,
    {},
    number | null
  >;
  assignedAt?: Resolver<
    Client.Prisma.UsersOnTeamsMinAggregateOutputType,
    {},
    Date | null
  >;
}

export interface UsersOnTeamsMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<
    Client.Prisma.UsersOnTeamsMaxAggregateOutputType,
    {},
    string | null
  >;
  userId?: Resolver<
    Client.Prisma.UsersOnTeamsMaxAggregateOutputType,
    {},
    number | null
  >;
  assignedAt?: Resolver<
    Client.Prisma.UsersOnTeamsMaxAggregateOutputType,
    {},
    Date | null
  >;
}

export interface TeamCountOutputType {
  [key: string]: Resolver<any, any, any>;
  users?: Resolver<Client.Prisma.TeamCountOutputType, {}, number>;
}

export interface TeamCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.TeamCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.TeamCountAggregateOutputType, {}, number>;
}

export interface TeamMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<
    Client.Prisma.TeamMinAggregateOutputType,
    {},
    string | null
  >;
}

export interface TeamMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<
    Client.Prisma.TeamMaxAggregateOutputType,
    {},
    string | null
  >;
}

export interface Users_UserTeamsArgs {
  where?: Users_UsersOnTeamsWhereInput | null;
  orderBy?: Users_UsersOnTeamsOrderByWithRelationInput[] | null;
  cursor?: Users_UsersOnTeamsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnTeamsScalarFieldEnum[] | null;
}

export interface Users_TeamUsersArgs {
  where?: Users_UsersOnTeamsWhereInput | null;
  orderBy?: Users_UsersOnTeamsOrderByWithRelationInput[] | null;
  cursor?: Users_UsersOnTeamsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnTeamsScalarFieldEnum[] | null;
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

export interface Users_FindFirstProfileArgs {
  where?: Users_ProfileWhereInput | null;
  orderBy?: Users_ProfileOrderByWithRelationInput[] | null;
  cursor?: Users_ProfileWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: ProfileScalarFieldEnum[] | null;
}

export interface Users_FindFirstProfileOrThrowArgs {
  where?: Users_ProfileWhereInput | null;
  orderBy?: Users_ProfileOrderByWithRelationInput[] | null;
  cursor?: Users_ProfileWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: ProfileScalarFieldEnum[] | null;
}

export interface Users_FindManyProfileArgs {
  where?: Users_ProfileWhereInput;
  orderBy?: Users_ProfileOrderByWithRelationInput[];
  cursor?: Users_ProfileWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ProfileScalarFieldEnum[];
}

export interface Users_AggregateProfileArgs {
  where?: Users_ProfileWhereInput;
  orderBy?: Users_ProfileOrderByWithRelationInput[];
  cursor?: Users_ProfileWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.ProfileCountAggregateInputType;
  _avg?: Client.Prisma.ProfileAvgAggregateInputType;
  _sum?: Client.Prisma.ProfileSumAggregateInputType;
  _min?: Client.Prisma.ProfileMinAggregateInputType;
  _max?: Client.Prisma.ProfileMaxAggregateInputType;
}

export interface Users_GroupByProfileArgs {
  where?: Users_ProfileWhereInput;
  orderBy?: Users_ProfileOrderByWithAggregationInput[];
  by: ProfileScalarFieldEnum[];
  having?: Users_ProfileScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Users_FindUniqueProfileArgs {
  where: Users_ProfileWhereUniqueInput | null;
}

export interface Users_FindUniqueProfileOrThrowArgs {
  where: Users_ProfileWhereUniqueInput | null;
}

export interface Users_FindFirstUsersOnTeamsArgs {
  where?: Users_UsersOnTeamsWhereInput | null;
  orderBy?: Users_UsersOnTeamsOrderByWithRelationInput[] | null;
  cursor?: Users_UsersOnTeamsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnTeamsScalarFieldEnum[] | null;
}

export interface Users_FindFirstUsersOnTeamsOrThrowArgs {
  where?: Users_UsersOnTeamsWhereInput | null;
  orderBy?: Users_UsersOnTeamsOrderByWithRelationInput[] | null;
  cursor?: Users_UsersOnTeamsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnTeamsScalarFieldEnum[] | null;
}

export interface Users_FindManyUsersOnTeamsArgs {
  where?: Users_UsersOnTeamsWhereInput;
  orderBy?: Users_UsersOnTeamsOrderByWithRelationInput[];
  cursor?: Users_UsersOnTeamsWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UsersOnTeamsScalarFieldEnum[];
}

export interface Users_AggregateUsersOnTeamsArgs {
  where?: Users_UsersOnTeamsWhereInput;
  orderBy?: Users_UsersOnTeamsOrderByWithRelationInput[];
  cursor?: Users_UsersOnTeamsWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.UsersOnTeamsCountAggregateInputType;
  _avg?: Client.Prisma.UsersOnTeamsAvgAggregateInputType;
  _sum?: Client.Prisma.UsersOnTeamsSumAggregateInputType;
  _min?: Client.Prisma.UsersOnTeamsMinAggregateInputType;
  _max?: Client.Prisma.UsersOnTeamsMaxAggregateInputType;
}

export interface Users_GroupByUsersOnTeamsArgs {
  where?: Users_UsersOnTeamsWhereInput;
  orderBy?: Users_UsersOnTeamsOrderByWithAggregationInput[];
  by: UsersOnTeamsScalarFieldEnum[];
  having?: Users_UsersOnTeamsScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Users_FindUniqueUsersOnTeamsArgs {
  where: Users_UsersOnTeamsWhereUniqueInput | null;
}

export interface Users_FindUniqueUsersOnTeamsOrThrowArgs {
  where: Users_UsersOnTeamsWhereUniqueInput | null;
}

export interface Users_FindFirstTeamArgs {
  where?: Users_TeamWhereInput | null;
  orderBy?: Users_TeamOrderByWithRelationInput[] | null;
  cursor?: Users_TeamWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: TeamScalarFieldEnum[] | null;
}

export interface Users_FindFirstTeamOrThrowArgs {
  where?: Users_TeamWhereInput | null;
  orderBy?: Users_TeamOrderByWithRelationInput[] | null;
  cursor?: Users_TeamWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: TeamScalarFieldEnum[] | null;
}

export interface Users_FindManyTeamArgs {
  where?: Users_TeamWhereInput;
  orderBy?: Users_TeamOrderByWithRelationInput[];
  cursor?: Users_TeamWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: TeamScalarFieldEnum[];
}

export interface Users_AggregateTeamArgs {
  where?: Users_TeamWhereInput;
  orderBy?: Users_TeamOrderByWithRelationInput[];
  cursor?: Users_TeamWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.TeamCountAggregateInputType;
  _min?: Client.Prisma.TeamMinAggregateInputType;
  _max?: Client.Prisma.TeamMaxAggregateInputType;
}

export interface Users_GroupByTeamArgs {
  where?: Users_TeamWhereInput;
  orderBy?: Users_TeamOrderByWithAggregationInput[];
  by: TeamScalarFieldEnum[];
  having?: Users_TeamScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Users_FindUniqueTeamArgs {
  where: Users_TeamWhereUniqueInput | null;
}

export interface Users_FindUniqueTeamOrThrowArgs {
  where: Users_TeamWhereUniqueInput | null;
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

export interface Users_CreateOneProfileArgs {
  data: Users_ProfileCreateInput;
}

export interface Users_UpsertOneProfileArgs {
  where: Users_ProfileWhereUniqueInput;
  create: Users_ProfileCreateInput;
  update: Users_ProfileUpdateInput;
}

export interface Users_CreateManyProfileArgs {
  data: Users_ProfileCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Users_DeleteOneProfileArgs {
  where: Users_ProfileWhereUniqueInput | null;
}

export interface Users_UpdateOneProfileArgs {
  data: Users_ProfileUpdateInput | null;
  where: Users_ProfileWhereUniqueInput | null;
}

export interface Users_UpdateManyProfileArgs {
  data: Users_ProfileUpdateManyMutationInput;
  where?: Users_ProfileWhereInput;
}

export interface Users_DeleteManyProfileArgs {
  where?: Users_ProfileWhereInput;
}

export interface Users_CreateOneUsersOnTeamsArgs {
  data: Users_UsersOnTeamsCreateInput;
}

export interface Users_UpsertOneUsersOnTeamsArgs {
  where: Users_UsersOnTeamsWhereUniqueInput;
  create: Users_UsersOnTeamsCreateInput;
  update: Users_UsersOnTeamsUpdateInput;
}

export interface Users_CreateManyUsersOnTeamsArgs {
  data: Users_UsersOnTeamsCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Users_DeleteOneUsersOnTeamsArgs {
  where: Users_UsersOnTeamsWhereUniqueInput | null;
}

export interface Users_UpdateOneUsersOnTeamsArgs {
  data: Users_UsersOnTeamsUpdateInput | null;
  where: Users_UsersOnTeamsWhereUniqueInput | null;
}

export interface Users_UpdateManyUsersOnTeamsArgs {
  data: Users_UsersOnTeamsUpdateManyMutationInput;
  where?: Users_UsersOnTeamsWhereInput;
}

export interface Users_DeleteManyUsersOnTeamsArgs {
  where?: Users_UsersOnTeamsWhereInput;
}

export interface Users_CreateOneTeamArgs {
  data: Users_TeamCreateInput;
}

export interface Users_UpsertOneTeamArgs {
  where: Users_TeamWhereUniqueInput;
  create: Users_TeamCreateInput;
  update: Users_TeamUpdateInput;
}

export interface Users_CreateManyTeamArgs {
  data: Users_TeamCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Users_DeleteOneTeamArgs {
  where: Users_TeamWhereUniqueInput | null;
}

export interface Users_UpdateOneTeamArgs {
  data: Users_TeamUpdateInput | null;
  where: Users_TeamWhereUniqueInput | null;
}

//UpdateManyTeamArgs is not generated as the related model contains only unique or relation fields

export interface Users_DeleteManyTeamArgs {
  where?: Users_TeamWhereInput;
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
  lastName?: StringNullableFilter | null;
  firstName?: StringNullableFilter | null;
  profile?: Users_ProfileWhereInput | null;
  teams?: Users_UsersOnTeamsListRelationFilter;
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
  lastName?: SortOrder;
  firstName?: SortOrder;
  profile?: Users_ProfileOrderByWithRelationInput;
  teams?: Users_UsersOnTeamsOrderByRelationAggregateInput;
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
    lastName?: StringNullableFilter | null;
    firstName?: StringNullableFilter | null;
    profile?: Users_ProfileWhereInput | null;
    teams?: Users_UsersOnTeamsListRelationFilter;
  },
  'id' | 'username' | 'email' | 'googleId'
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
  lastName?: SortOrder;
  firstName?: SortOrder;
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
  lastName?: StringNullableWithAggregatesFilter | null;
  firstName?: StringNullableWithAggregatesFilter | null;
}

export interface Users_ProfileWhereInput {
  AND?: Users_ProfileWhereInput[];
  OR?: Users_ProfileWhereInput[];
  NOT?: Users_ProfileWhereInput[];
  userId?: IntFilter;
  user?: Users_UserWhereInput;
  location?: StringNullableFilter | null;
  joiningDate?: DateTimeNullableFilter | null;
  designation?: StringNullableFilter | null;
  profileImg?: StringNullableFilter | null;
  designationIcon?: StringNullableFilter | null;
  coverImg?: StringNullableFilter | null;
}

export interface Users_ProfileOrderByWithRelationInput {
  userId?: SortOrder;
  user?: Users_UserOrderByWithRelationInput;
  location?: SortOrder;
  joiningDate?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
}

export type Users_ProfileWhereUniqueInput = AtLeast<
  {
    userId?: number;
    AND?: Users_ProfileWhereInput[];
    OR?: Users_ProfileWhereInput[];
    NOT?: Users_ProfileWhereInput[];
    user?: Users_UserWhereInput;
    location?: StringNullableFilter | null;
    joiningDate?: DateTimeNullableFilter | null;
    designation?: StringNullableFilter | null;
    profileImg?: StringNullableFilter | null;
    designationIcon?: StringNullableFilter | null;
    coverImg?: StringNullableFilter | null;
  },
  'userId'
>;

export interface Users_ProfileOrderByWithAggregationInput {
  userId?: SortOrder;
  location?: SortOrder;
  joiningDate?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
  _count?: Users_ProfileCountOrderByAggregateInput;
  _avg?: Users_ProfileAvgOrderByAggregateInput;
  _max?: Users_ProfileMaxOrderByAggregateInput;
  _min?: Users_ProfileMinOrderByAggregateInput;
  _sum?: Users_ProfileSumOrderByAggregateInput;
}

export interface Users_ProfileScalarWhereWithAggregatesInput {
  AND?: Users_ProfileScalarWhereWithAggregatesInput[];
  OR?: Users_ProfileScalarWhereWithAggregatesInput[];
  NOT?: Users_ProfileScalarWhereWithAggregatesInput[];
  userId?: IntWithAggregatesFilter;
  location?: StringNullableWithAggregatesFilter | null;
  joiningDate?: DateTimeNullableWithAggregatesFilter | null;
  designation?: StringNullableWithAggregatesFilter | null;
  profileImg?: StringNullableWithAggregatesFilter | null;
  designationIcon?: StringNullableWithAggregatesFilter | null;
  coverImg?: StringNullableWithAggregatesFilter | null;
}

export interface Users_UsersOnTeamsWhereInput {
  AND?: Users_UsersOnTeamsWhereInput[];
  OR?: Users_UsersOnTeamsWhereInput[];
  NOT?: Users_UsersOnTeamsWhereInput[];
  team?: Users_TeamWhereInput;
  teamName?: StringFilter;
  user?: Users_UserWhereInput;
  userId?: IntFilter;
  assignedAt?: DateTimeFilter;
}

export interface Users_UsersOnTeamsOrderByWithRelationInput {
  team?: Users_TeamOrderByWithRelationInput;
  teamName?: SortOrder;
  user?: Users_UserOrderByWithRelationInput;
  userId?: SortOrder;
  assignedAt?: SortOrder;
}

export type Users_UsersOnTeamsWhereUniqueInput = AtLeast<
  {
    teamName_userId?: UsersOnTeamsTeamNameUserIdCompoundUniqueInput;
    AND?: Users_UsersOnTeamsWhereInput[];
    OR?: Users_UsersOnTeamsWhereInput[];
    NOT?: Users_UsersOnTeamsWhereInput[];
    team?: Users_TeamWhereInput;
    teamName?: StringFilter;
    user?: Users_UserWhereInput;
    userId?: IntFilter;
    assignedAt?: DateTimeFilter;
  },
  'teamName_userId'
>;

export interface Users_UsersOnTeamsOrderByWithAggregationInput {
  teamName?: SortOrder;
  userId?: SortOrder;
  assignedAt?: SortOrder;
  _count?: Users_UsersOnTeamsCountOrderByAggregateInput;
  _avg?: Users_UsersOnTeamsAvgOrderByAggregateInput;
  _max?: Users_UsersOnTeamsMaxOrderByAggregateInput;
  _min?: Users_UsersOnTeamsMinOrderByAggregateInput;
  _sum?: Users_UsersOnTeamsSumOrderByAggregateInput;
}

export interface Users_UsersOnTeamsScalarWhereWithAggregatesInput {
  AND?: Users_UsersOnTeamsScalarWhereWithAggregatesInput[];
  OR?: Users_UsersOnTeamsScalarWhereWithAggregatesInput[];
  NOT?: Users_UsersOnTeamsScalarWhereWithAggregatesInput[];
  teamName?: StringWithAggregatesFilter;
  userId?: IntWithAggregatesFilter;
  assignedAt?: DateTimeWithAggregatesFilter;
}

export interface Users_TeamWhereInput {
  AND?: Users_TeamWhereInput[];
  OR?: Users_TeamWhereInput[];
  NOT?: Users_TeamWhereInput[];
  teamName?: StringFilter;
  users?: Users_UsersOnTeamsListRelationFilter;
}

export interface Users_TeamOrderByWithRelationInput {
  teamName?: SortOrder;
  users?: Users_UsersOnTeamsOrderByRelationAggregateInput;
}

export type Users_TeamWhereUniqueInput = AtLeast<
  {
    teamName?: string;
    AND?: Users_TeamWhereInput[];
    OR?: Users_TeamWhereInput[];
    NOT?: Users_TeamWhereInput[];
    users?: Users_UsersOnTeamsListRelationFilter;
  },
  'teamName'
>;

export interface Users_TeamOrderByWithAggregationInput {
  teamName?: SortOrder;
  _count?: Users_TeamCountOrderByAggregateInput;
  _max?: Users_TeamMaxOrderByAggregateInput;
  _min?: Users_TeamMinOrderByAggregateInput;
}

export interface Users_TeamScalarWhereWithAggregatesInput {
  AND?: Users_TeamScalarWhereWithAggregatesInput[];
  OR?: Users_TeamScalarWhereWithAggregatesInput[];
  NOT?: Users_TeamScalarWhereWithAggregatesInput[];
  teamName?: StringWithAggregatesFilter;
}

export interface Users_UserCreateInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Users_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Users_ProfileCreateNestedOneWithoutUserInput;
  teams?: Users_UsersOnTeamsCreateNestedManyWithoutUserInput;
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
  lastName?: string | null;
  firstName?: string | null;
  profile?: Users_ProfileUncheckedCreateNestedOneWithoutUserInput;
  teams?: Users_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput;
}

export interface Users_UserUpdateInput {
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: Users_UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: NullableStringFieldUpdateOperationsInput | null;
  firstName?: NullableStringFieldUpdateOperationsInput | null;
  profile?: Users_ProfileUpdateOneWithoutUserNestedInput;
  teams?: Users_UsersOnTeamsUpdateManyWithoutUserNestedInput;
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
  lastName?: NullableStringFieldUpdateOperationsInput | null;
  firstName?: NullableStringFieldUpdateOperationsInput | null;
  profile?: Users_ProfileUncheckedUpdateOneWithoutUserNestedInput;
  teams?: Users_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput;
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
  lastName?: string | null;
  firstName?: string | null;
}

export interface Users_UserUpdateManyMutationInput {
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: Users_UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: NullableStringFieldUpdateOperationsInput | null;
  firstName?: NullableStringFieldUpdateOperationsInput | null;
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
  lastName?: NullableStringFieldUpdateOperationsInput | null;
  firstName?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_ProfileCreateInput {
  user: Users_UserCreateNestedOneWithoutProfileInput;
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Users_ProfileUncheckedCreateInput {
  userId: number;
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Users_ProfileUpdateInput {
  user?: Users_UserUpdateOneRequiredWithoutProfileNestedInput;
  location?: NullableStringFieldUpdateOperationsInput | null;
  joiningDate?: NullableDateTimeFieldUpdateOperationsInput | null;
  designation?: NullableStringFieldUpdateOperationsInput | null;
  profileImg?: NullableStringFieldUpdateOperationsInput | null;
  designationIcon?: NullableStringFieldUpdateOperationsInput | null;
  coverImg?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_ProfileUncheckedUpdateInput {
  userId?: IntFieldUpdateOperationsInput;
  location?: NullableStringFieldUpdateOperationsInput | null;
  joiningDate?: NullableDateTimeFieldUpdateOperationsInput | null;
  designation?: NullableStringFieldUpdateOperationsInput | null;
  profileImg?: NullableStringFieldUpdateOperationsInput | null;
  designationIcon?: NullableStringFieldUpdateOperationsInput | null;
  coverImg?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_ProfileCreateManyInput {
  userId: number;
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Users_ProfileUpdateManyMutationInput {
  location?: NullableStringFieldUpdateOperationsInput | null;
  joiningDate?: NullableDateTimeFieldUpdateOperationsInput | null;
  designation?: NullableStringFieldUpdateOperationsInput | null;
  profileImg?: NullableStringFieldUpdateOperationsInput | null;
  designationIcon?: NullableStringFieldUpdateOperationsInput | null;
  coverImg?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_ProfileUncheckedUpdateManyInput {
  userId?: IntFieldUpdateOperationsInput;
  location?: NullableStringFieldUpdateOperationsInput | null;
  joiningDate?: NullableDateTimeFieldUpdateOperationsInput | null;
  designation?: NullableStringFieldUpdateOperationsInput | null;
  profileImg?: NullableStringFieldUpdateOperationsInput | null;
  designationIcon?: NullableStringFieldUpdateOperationsInput | null;
  coverImg?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_UsersOnTeamsCreateInput {
  team: Users_TeamCreateNestedOneWithoutUsersInput;
  user: Users_UserCreateNestedOneWithoutTeamsInput;
  assignedAt?: Date;
}

export interface Users_UsersOnTeamsUncheckedCreateInput {
  teamName: string;
  userId: number;
  assignedAt?: Date;
}

export interface Users_UsersOnTeamsUpdateInput {
  team?: Users_TeamUpdateOneRequiredWithoutUsersNestedInput;
  user?: Users_UserUpdateOneRequiredWithoutTeamsNestedInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface Users_UsersOnTeamsUncheckedUpdateInput {
  teamName?: StringFieldUpdateOperationsInput;
  userId?: IntFieldUpdateOperationsInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface Users_UsersOnTeamsCreateManyInput {
  teamName: string;
  userId: number;
  assignedAt?: Date;
}

export interface Users_UsersOnTeamsUpdateManyMutationInput {
  assignedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface Users_UsersOnTeamsUncheckedUpdateManyInput {
  teamName?: StringFieldUpdateOperationsInput;
  userId?: IntFieldUpdateOperationsInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface Users_TeamCreateInput {
  teamName: string;
  users?: Users_UsersOnTeamsCreateNestedManyWithoutTeamInput;
}

export interface Users_TeamUncheckedCreateInput {
  teamName: string;
  users?: Users_UsersOnTeamsUncheckedCreateNestedManyWithoutTeamInput;
}

export interface Users_TeamUpdateInput {
  teamName?: StringFieldUpdateOperationsInput;
  users?: Users_UsersOnTeamsUpdateManyWithoutTeamNestedInput;
}

export interface Users_TeamUncheckedUpdateInput {
  teamName?: StringFieldUpdateOperationsInput;
  users?: Users_UsersOnTeamsUncheckedUpdateManyWithoutTeamNestedInput;
}

export interface Users_TeamCreateManyInput {
  teamName: string;
}

export interface Users_TeamUpdateManyMutationInput {
  teamName?: StringFieldUpdateOperationsInput;
}

export interface Users_TeamUncheckedUpdateManyInput {
  teamName?: StringFieldUpdateOperationsInput;
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

export interface Users_ProfileRelationFilter {
  is?: Users_ProfileWhereInput | null;
  isNot?: Users_ProfileWhereInput | null;
}

export interface Users_UsersOnTeamsListRelationFilter {
  every?: Users_UsersOnTeamsWhereInput;
  some?: Users_UsersOnTeamsWhereInput;
  none?: Users_UsersOnTeamsWhereInput;
}

export interface Users_UsersOnTeamsOrderByRelationAggregateInput {
  _count?: SortOrder;
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
  lastName?: SortOrder;
  firstName?: SortOrder;
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
  lastName?: SortOrder;
  firstName?: SortOrder;
}

export interface Users_UserMinOrderByAggregateInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  googleId?: SortOrder;
  lastName?: SortOrder;
  firstName?: SortOrder;
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

export interface Users_UserRelationFilter {
  is?: Users_UserWhereInput;
  isNot?: Users_UserWhereInput;
}

export interface DateTimeNullableFilter {
  equals?: Date | null;
  in?: Date[] | null;
  notIn?: Date[] | null;
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeNullableFilter | null;
}

export interface Users_ProfileCountOrderByAggregateInput {
  userId?: SortOrder;
  location?: SortOrder;
  joiningDate?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
}

export interface Users_ProfileAvgOrderByAggregateInput {
  userId?: SortOrder;
}

export interface Users_ProfileMaxOrderByAggregateInput {
  userId?: SortOrder;
  location?: SortOrder;
  joiningDate?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
}

export interface Users_ProfileMinOrderByAggregateInput {
  userId?: SortOrder;
  location?: SortOrder;
  joiningDate?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
}

export interface Users_ProfileSumOrderByAggregateInput {
  userId?: SortOrder;
}

export interface DateTimeNullableWithAggregatesFilter {
  equals?: Date | null;
  in?: Date[] | null;
  notIn?: Date[] | null;
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedDateTimeNullableFilter;
  _max?: NestedDateTimeNullableFilter;
}

export interface Users_TeamRelationFilter {
  is?: Users_TeamWhereInput;
  isNot?: Users_TeamWhereInput;
}

export interface UsersOnTeamsTeamNameUserIdCompoundUniqueInput {
  teamName: string;
  userId: number;
}

export interface Users_UsersOnTeamsCountOrderByAggregateInput {
  teamName?: SortOrder;
  userId?: SortOrder;
  assignedAt?: SortOrder;
}

export interface Users_UsersOnTeamsAvgOrderByAggregateInput {
  userId?: SortOrder;
}

export interface Users_UsersOnTeamsMaxOrderByAggregateInput {
  teamName?: SortOrder;
  userId?: SortOrder;
  assignedAt?: SortOrder;
}

export interface Users_UsersOnTeamsMinOrderByAggregateInput {
  teamName?: SortOrder;
  userId?: SortOrder;
  assignedAt?: SortOrder;
}

export interface Users_UsersOnTeamsSumOrderByAggregateInput {
  userId?: SortOrder;
}

export interface Users_TeamCountOrderByAggregateInput {
  teamName?: SortOrder;
}

export interface Users_TeamMaxOrderByAggregateInput {
  teamName?: SortOrder;
}

export interface Users_TeamMinOrderByAggregateInput {
  teamName?: SortOrder;
}

export interface Users_UserCreaterolesInput {
  set: string[];
}

export interface Users_ProfileCreateNestedOneWithoutUserInput {
  create?: Users_ProfileUncheckedCreateWithoutUserInput;
  connectOrCreate?: Users_ProfileCreateOrConnectWithoutUserInput;
  connect?: Users_ProfileWhereUniqueInput;
}

export interface Users_UsersOnTeamsCreateNestedManyWithoutUserInput {
  create?: Users_UsersOnTeamsCreateWithoutUserInput[];
  connectOrCreate?: Users_UsersOnTeamsCreateOrConnectWithoutUserInput[];
  createMany?: Users_UsersOnTeamsCreateManyUserInputEnvelope;
  connect?: Users_UsersOnTeamsWhereUniqueInput[];
}

export interface Users_ProfileUncheckedCreateNestedOneWithoutUserInput {
  create?: Users_ProfileUncheckedCreateWithoutUserInput;
  connectOrCreate?: Users_ProfileCreateOrConnectWithoutUserInput;
  connect?: Users_ProfileWhereUniqueInput;
}

export interface Users_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput {
  create?: Users_UsersOnTeamsCreateWithoutUserInput[];
  connectOrCreate?: Users_UsersOnTeamsCreateOrConnectWithoutUserInput[];
  createMany?: Users_UsersOnTeamsCreateManyUserInputEnvelope;
  connect?: Users_UsersOnTeamsWhereUniqueInput[];
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

export interface Users_ProfileUpdateOneWithoutUserNestedInput {
  create?: Users_ProfileUncheckedCreateWithoutUserInput;
  connectOrCreate?: Users_ProfileCreateOrConnectWithoutUserInput;
  upsert?: Users_ProfileUpsertWithoutUserInput;
  disconnect?: Users_ProfileWhereInput;
  delete?: Users_ProfileWhereInput;
  connect?: Users_ProfileWhereUniqueInput;
  update?: Users_ProfileUpdateWithoutUserInput;
}

export interface Users_UsersOnTeamsUpdateManyWithoutUserNestedInput {
  create?: Users_UsersOnTeamsCreateWithoutUserInput[];
  connectOrCreate?: Users_UsersOnTeamsCreateOrConnectWithoutUserInput[];
  upsert?: Users_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: Users_UsersOnTeamsCreateManyUserInputEnvelope;
  set?: Users_UsersOnTeamsWhereUniqueInput[];
  disconnect?: Users_UsersOnTeamsWhereUniqueInput[];
  delete?: Users_UsersOnTeamsWhereUniqueInput[];
  connect?: Users_UsersOnTeamsWhereUniqueInput[];
  update?: Users_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: Users_UsersOnTeamsUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: Users_UsersOnTeamsScalarWhereInput[];
}

export interface IntFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface Users_ProfileUncheckedUpdateOneWithoutUserNestedInput {
  create?: Users_ProfileUncheckedCreateWithoutUserInput;
  connectOrCreate?: Users_ProfileCreateOrConnectWithoutUserInput;
  upsert?: Users_ProfileUpsertWithoutUserInput;
  disconnect?: Users_ProfileWhereInput;
  delete?: Users_ProfileWhereInput;
  connect?: Users_ProfileWhereUniqueInput;
  update?: Users_ProfileUpdateWithoutUserInput;
}

export interface Users_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput {
  create?: Users_UsersOnTeamsCreateWithoutUserInput[];
  connectOrCreate?: Users_UsersOnTeamsCreateOrConnectWithoutUserInput[];
  upsert?: Users_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: Users_UsersOnTeamsCreateManyUserInputEnvelope;
  set?: Users_UsersOnTeamsWhereUniqueInput[];
  disconnect?: Users_UsersOnTeamsWhereUniqueInput[];
  delete?: Users_UsersOnTeamsWhereUniqueInput[];
  connect?: Users_UsersOnTeamsWhereUniqueInput[];
  update?: Users_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: Users_UsersOnTeamsUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: Users_UsersOnTeamsScalarWhereInput[];
}

export interface Users_UserCreateNestedOneWithoutProfileInput {
  create?: Users_UserUncheckedCreateWithoutProfileInput;
  connectOrCreate?: Users_UserCreateOrConnectWithoutProfileInput;
  connect?: Users_UserWhereUniqueInput;
}

export interface Users_UserUpdateOneRequiredWithoutProfileNestedInput {
  create?: Users_UserUncheckedCreateWithoutProfileInput;
  connectOrCreate?: Users_UserCreateOrConnectWithoutProfileInput;
  upsert?: Users_UserUpsertWithoutProfileInput;
  connect?: Users_UserWhereUniqueInput;
  update?: Users_UserUpdateWithoutProfileInput;
}

export interface NullableDateTimeFieldUpdateOperationsInput {
  set?: Date | null;
}

export interface Users_TeamCreateNestedOneWithoutUsersInput {
  create?: Users_TeamUncheckedCreateWithoutUsersInput;
  connectOrCreate?: Users_TeamCreateOrConnectWithoutUsersInput;
  connect?: Users_TeamWhereUniqueInput;
}

export interface Users_UserCreateNestedOneWithoutTeamsInput {
  create?: Users_UserUncheckedCreateWithoutTeamsInput;
  connectOrCreate?: Users_UserCreateOrConnectWithoutTeamsInput;
  connect?: Users_UserWhereUniqueInput;
}

export interface Users_TeamUpdateOneRequiredWithoutUsersNestedInput {
  create?: Users_TeamUncheckedCreateWithoutUsersInput;
  connectOrCreate?: Users_TeamCreateOrConnectWithoutUsersInput;
  upsert?: Users_TeamUpsertWithoutUsersInput;
  connect?: Users_TeamWhereUniqueInput;
  update?: Users_TeamUpdateWithoutUsersInput;
}

export interface Users_UserUpdateOneRequiredWithoutTeamsNestedInput {
  create?: Users_UserUncheckedCreateWithoutTeamsInput;
  connectOrCreate?: Users_UserCreateOrConnectWithoutTeamsInput;
  upsert?: Users_UserUpsertWithoutTeamsInput;
  connect?: Users_UserWhereUniqueInput;
  update?: Users_UserUpdateWithoutTeamsInput;
}

export interface Users_UsersOnTeamsCreateNestedManyWithoutTeamInput {
  create?: Users_UsersOnTeamsCreateWithoutTeamInput[];
  connectOrCreate?: Users_UsersOnTeamsCreateOrConnectWithoutTeamInput[];
  createMany?: Users_UsersOnTeamsCreateManyTeamInputEnvelope;
  connect?: Users_UsersOnTeamsWhereUniqueInput[];
}

export interface Users_UsersOnTeamsUncheckedCreateNestedManyWithoutTeamInput {
  create?: Users_UsersOnTeamsCreateWithoutTeamInput[];
  connectOrCreate?: Users_UsersOnTeamsCreateOrConnectWithoutTeamInput[];
  createMany?: Users_UsersOnTeamsCreateManyTeamInputEnvelope;
  connect?: Users_UsersOnTeamsWhereUniqueInput[];
}

export interface Users_UsersOnTeamsUpdateManyWithoutTeamNestedInput {
  create?: Users_UsersOnTeamsCreateWithoutTeamInput[];
  connectOrCreate?: Users_UsersOnTeamsCreateOrConnectWithoutTeamInput[];
  upsert?: Users_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput[];
  createMany?: Users_UsersOnTeamsCreateManyTeamInputEnvelope;
  set?: Users_UsersOnTeamsWhereUniqueInput[];
  disconnect?: Users_UsersOnTeamsWhereUniqueInput[];
  delete?: Users_UsersOnTeamsWhereUniqueInput[];
  connect?: Users_UsersOnTeamsWhereUniqueInput[];
  update?: Users_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput[];
  updateMany?: Users_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput[];
  deleteMany?: Users_UsersOnTeamsScalarWhereInput[];
}

export interface Users_UsersOnTeamsUncheckedUpdateManyWithoutTeamNestedInput {
  create?: Users_UsersOnTeamsCreateWithoutTeamInput[];
  connectOrCreate?: Users_UsersOnTeamsCreateOrConnectWithoutTeamInput[];
  upsert?: Users_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput[];
  createMany?: Users_UsersOnTeamsCreateManyTeamInputEnvelope;
  set?: Users_UsersOnTeamsWhereUniqueInput[];
  disconnect?: Users_UsersOnTeamsWhereUniqueInput[];
  delete?: Users_UsersOnTeamsWhereUniqueInput[];
  connect?: Users_UsersOnTeamsWhereUniqueInput[];
  update?: Users_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput[];
  updateMany?: Users_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput[];
  deleteMany?: Users_UsersOnTeamsScalarWhereInput[];
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

export interface NestedDateTimeNullableFilter {
  equals?: Date | null;
  in?: Date[] | null;
  notIn?: Date[] | null;
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeNullableFilter | null;
}

export interface NestedDateTimeNullableWithAggregatesFilter {
  equals?: Date | null;
  in?: Date[] | null;
  notIn?: Date[] | null;
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedDateTimeNullableFilter;
  _max?: NestedDateTimeNullableFilter;
}

export interface Users_ProfileCreateWithoutUserInput {
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Users_ProfileUncheckedCreateWithoutUserInput {
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Users_ProfileCreateOrConnectWithoutUserInput {
  where: Users_ProfileWhereUniqueInput;
  create: Users_ProfileUncheckedCreateWithoutUserInput;
}

export interface Users_UsersOnTeamsCreateWithoutUserInput {
  team: Users_TeamCreateNestedOneWithoutUsersInput;
  assignedAt?: Date;
}

export interface Users_UsersOnTeamsUncheckedCreateWithoutUserInput {
  teamName: string;
  assignedAt?: Date;
}

export interface Users_UsersOnTeamsCreateOrConnectWithoutUserInput {
  where: Users_UsersOnTeamsWhereUniqueInput;
  create: Users_UsersOnTeamsUncheckedCreateWithoutUserInput;
}

export interface Users_UsersOnTeamsCreateManyUserInputEnvelope {
  data: Users_UsersOnTeamsCreateManyUserInput[];
  skipDuplicates?: boolean;
}

export interface Users_ProfileUpsertWithoutUserInput {
  update: Users_ProfileUncheckedUpdateWithoutUserInput;
  create: Users_ProfileUncheckedCreateWithoutUserInput;
  where?: Users_ProfileWhereInput;
}

export interface Users_ProfileUpdateToOneWithWhereWithoutUserInput {
  where?: Users_ProfileWhereInput;
  data: Users_ProfileUncheckedUpdateWithoutUserInput;
}

export interface Users_ProfileUpdateWithoutUserInput {
  location?: NullableStringFieldUpdateOperationsInput | null;
  joiningDate?: NullableDateTimeFieldUpdateOperationsInput | null;
  designation?: NullableStringFieldUpdateOperationsInput | null;
  profileImg?: NullableStringFieldUpdateOperationsInput | null;
  designationIcon?: NullableStringFieldUpdateOperationsInput | null;
  coverImg?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_ProfileUncheckedUpdateWithoutUserInput {
  location?: NullableStringFieldUpdateOperationsInput | null;
  joiningDate?: NullableDateTimeFieldUpdateOperationsInput | null;
  designation?: NullableStringFieldUpdateOperationsInput | null;
  profileImg?: NullableStringFieldUpdateOperationsInput | null;
  designationIcon?: NullableStringFieldUpdateOperationsInput | null;
  coverImg?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput {
  where: Users_UsersOnTeamsWhereUniqueInput;
  update: Users_UsersOnTeamsUncheckedUpdateWithoutUserInput;
  create: Users_UsersOnTeamsUncheckedCreateWithoutUserInput;
}

export interface Users_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput {
  where: Users_UsersOnTeamsWhereUniqueInput;
  data: Users_UsersOnTeamsUncheckedUpdateWithoutUserInput;
}

export interface Users_UsersOnTeamsUpdateManyWithWhereWithoutUserInput {
  where: Users_UsersOnTeamsScalarWhereInput;
  data: Users_UsersOnTeamsUncheckedUpdateManyWithoutTeamsInput;
}

export interface Users_UsersOnTeamsScalarWhereInput {
  AND?: Users_UsersOnTeamsScalarWhereInput[];
  OR?: Users_UsersOnTeamsScalarWhereInput[];
  NOT?: Users_UsersOnTeamsScalarWhereInput[];
  teamName?: StringFilter;
  userId?: IntFilter;
  assignedAt?: DateTimeFilter;
}

export interface Users_UserCreateWithoutProfileInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Users_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  teams?: Users_UsersOnTeamsCreateNestedManyWithoutUserInput;
}

export interface Users_UserUncheckedCreateWithoutProfileInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Users_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  teams?: Users_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput;
}

export interface Users_UserCreateOrConnectWithoutProfileInput {
  where: Users_UserWhereUniqueInput;
  create: Users_UserUncheckedCreateWithoutProfileInput;
}

export interface Users_UserUpsertWithoutProfileInput {
  update: Users_UserUncheckedUpdateWithoutProfileInput;
  create: Users_UserUncheckedCreateWithoutProfileInput;
  where?: Users_UserWhereInput;
}

export interface Users_UserUpdateToOneWithWhereWithoutProfileInput {
  where?: Users_UserWhereInput;
  data: Users_UserUncheckedUpdateWithoutProfileInput;
}

export interface Users_UserUpdateWithoutProfileInput {
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: Users_UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: NullableStringFieldUpdateOperationsInput | null;
  firstName?: NullableStringFieldUpdateOperationsInput | null;
  teams?: Users_UsersOnTeamsUpdateManyWithoutUserNestedInput;
}

export interface Users_UserUncheckedUpdateWithoutProfileInput {
  id?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: Users_UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: NullableStringFieldUpdateOperationsInput | null;
  firstName?: NullableStringFieldUpdateOperationsInput | null;
  teams?: Users_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput;
}

export interface Users_TeamCreateWithoutUsersInput {
  teamName: string;
}

export interface Users_TeamUncheckedCreateWithoutUsersInput {
  teamName: string;
}

export interface Users_TeamCreateOrConnectWithoutUsersInput {
  where: Users_TeamWhereUniqueInput;
  create: Users_TeamUncheckedCreateWithoutUsersInput;
}

export interface Users_UserCreateWithoutTeamsInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Users_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Users_ProfileCreateNestedOneWithoutUserInput;
}

export interface Users_UserUncheckedCreateWithoutTeamsInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Users_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Users_ProfileUncheckedCreateNestedOneWithoutUserInput;
}

export interface Users_UserCreateOrConnectWithoutTeamsInput {
  where: Users_UserWhereUniqueInput;
  create: Users_UserUncheckedCreateWithoutTeamsInput;
}

export interface Users_TeamUpsertWithoutUsersInput {
  update: Users_TeamUncheckedUpdateWithoutUsersInput;
  create: Users_TeamUncheckedCreateWithoutUsersInput;
  where?: Users_TeamWhereInput;
}

export interface Users_TeamUpdateToOneWithWhereWithoutUsersInput {
  where?: Users_TeamWhereInput;
  data: Users_TeamUncheckedUpdateWithoutUsersInput;
}

export interface Users_TeamUpdateWithoutUsersInput {
  teamName?: StringFieldUpdateOperationsInput;
}

export interface Users_TeamUncheckedUpdateWithoutUsersInput {
  teamName?: StringFieldUpdateOperationsInput;
}

export interface Users_UserUpsertWithoutTeamsInput {
  update: Users_UserUncheckedUpdateWithoutTeamsInput;
  create: Users_UserUncheckedCreateWithoutTeamsInput;
  where?: Users_UserWhereInput;
}

export interface Users_UserUpdateToOneWithWhereWithoutTeamsInput {
  where?: Users_UserWhereInput;
  data: Users_UserUncheckedUpdateWithoutTeamsInput;
}

export interface Users_UserUpdateWithoutTeamsInput {
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: Users_UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: NullableStringFieldUpdateOperationsInput | null;
  firstName?: NullableStringFieldUpdateOperationsInput | null;
  profile?: Users_ProfileUpdateOneWithoutUserNestedInput;
}

export interface Users_UserUncheckedUpdateWithoutTeamsInput {
  id?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  username?: NullableStringFieldUpdateOperationsInput | null;
  password?: NullableStringFieldUpdateOperationsInput | null;
  email?: StringFieldUpdateOperationsInput;
  roles?: Users_UserUpdaterolesInput;
  googleId?: NullableStringFieldUpdateOperationsInput | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: NullableStringFieldUpdateOperationsInput | null;
  firstName?: NullableStringFieldUpdateOperationsInput | null;
  profile?: Users_ProfileUncheckedUpdateOneWithoutUserNestedInput;
}

export interface Users_UsersOnTeamsCreateWithoutTeamInput {
  user: Users_UserCreateNestedOneWithoutTeamsInput;
  assignedAt?: Date;
}

export interface Users_UsersOnTeamsUncheckedCreateWithoutTeamInput {
  userId: number;
  assignedAt?: Date;
}

export interface Users_UsersOnTeamsCreateOrConnectWithoutTeamInput {
  where: Users_UsersOnTeamsWhereUniqueInput;
  create: Users_UsersOnTeamsUncheckedCreateWithoutTeamInput;
}

export interface Users_UsersOnTeamsCreateManyTeamInputEnvelope {
  data: Users_UsersOnTeamsCreateManyTeamInput[];
  skipDuplicates?: boolean;
}

export interface Users_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput {
  where: Users_UsersOnTeamsWhereUniqueInput;
  update: Users_UsersOnTeamsUncheckedUpdateWithoutTeamInput;
  create: Users_UsersOnTeamsUncheckedCreateWithoutTeamInput;
}

export interface Users_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput {
  where: Users_UsersOnTeamsWhereUniqueInput;
  data: Users_UsersOnTeamsUncheckedUpdateWithoutTeamInput;
}

export interface Users_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput {
  where: Users_UsersOnTeamsScalarWhereInput;
  data: Users_UsersOnTeamsUncheckedUpdateManyWithoutUsersInput;
}

export interface Users_UsersOnTeamsCreateManyUserInput {
  teamName: string;
  assignedAt?: Date;
}

export interface Users_UsersOnTeamsUpdateWithoutUserInput {
  team?: Users_TeamUpdateOneRequiredWithoutUsersNestedInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface Users_UsersOnTeamsUncheckedUpdateWithoutUserInput {
  teamName?: StringFieldUpdateOperationsInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface Users_UsersOnTeamsUncheckedUpdateManyWithoutTeamsInput {
  teamName?: StringFieldUpdateOperationsInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface Users_UsersOnTeamsCreateManyTeamInput {
  userId: number;
  assignedAt?: Date;
}

export interface Users_UsersOnTeamsUpdateWithoutTeamInput {
  user?: Users_UserUpdateOneRequiredWithoutTeamsNestedInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface Users_UsersOnTeamsUncheckedUpdateWithoutTeamInput {
  userId?: IntFieldUpdateOperationsInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface Users_UsersOnTeamsUncheckedUpdateManyWithoutUsersInput {
  userId?: IntFieldUpdateOperationsInput;
  assignedAt?: DateTimeFieldUpdateOperationsInput;
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
export enum ProfileScalarFieldEnum {
  userId = 'userId',
  location = 'location',
  joiningDate = 'joiningDate',
  designation = 'designation',
  profileImg = 'profileImg',
  designationIcon = 'designationIcon',
  coverImg = 'coverImg',
}
export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum TeamScalarFieldEnum {
  teamName = 'teamName',
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
  lastName = 'lastName',
  firstName = 'firstName',
}
export enum UsersOnTeamsScalarFieldEnum {
  teamName = 'teamName',
  userId = 'userId',
  assignedAt = 'assignedAt',
}

export interface Users_TransactionalMutationInput {
  Users_CreateOneUser: Users_CreateOneUserArgs;
  Users_UpsertOneUser: Users_UpsertOneUserArgs;
  Users_CreateManyUser: Users_CreateManyUserArgs;
  Users_DeleteOneUser: Users_DeleteOneUserArgs;
  Users_UpdateOneUser: Users_UpdateOneUserArgs;
  Users_DeleteManyUser: Users_DeleteManyUserArgs;
  Users_CreateOneProfile: Users_CreateOneProfileArgs;
  Users_UpsertOneProfile: Users_UpsertOneProfileArgs;
  Users_CreateManyProfile: Users_CreateManyProfileArgs;
  Users_DeleteOneProfile: Users_DeleteOneProfileArgs;
  Users_UpdateOneProfile: Users_UpdateOneProfileArgs;
  Users_DeleteManyProfile: Users_DeleteManyProfileArgs;
  Users_CreateOneUsersOnTeams: Users_CreateOneUsersOnTeamsArgs;
  Users_UpsertOneUsersOnTeams: Users_UpsertOneUsersOnTeamsArgs;
  Users_CreateManyUsersOnTeams: Users_CreateManyUsersOnTeamsArgs;
  Users_DeleteOneUsersOnTeams: Users_DeleteOneUsersOnTeamsArgs;
  Users_UpdateOneUsersOnTeams: Users_UpdateOneUsersOnTeamsArgs;
  Users_DeleteManyUsersOnTeams: Users_DeleteManyUsersOnTeamsArgs;
  Users_CreateOneTeam: Users_CreateOneTeamArgs;
  Users_UpsertOneTeam: Users_UpsertOneTeamArgs;
  Users_CreateManyTeam: Users_CreateManyTeamArgs;
  Users_DeleteOneTeam: Users_DeleteOneTeamArgs;
  Users_UpdateOneTeam: Users_UpdateOneTeamArgs;
  Users_DeleteManyTeam: Users_DeleteManyTeamArgs;
}

export interface Users_TransactionalBatchMutationArgs {
  mutations: Users_TransactionalMutationInput[];
}

export interface TransactionSucceeded {
  transactionSucceeded: boolean;
}
