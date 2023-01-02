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
  CalendarEvent?: CalendarEvent;
  CalendarsOnUsers?: CalendarsOnUsers;
  Calendar?: Calendar;
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
  AggregateCalendarEvent?: AggregateCalendarEvent;
  CalendarEventGroupByOutputType?: CalendarEventGroupByOutputType;
  AggregateCalendarsOnUsers?: AggregateCalendarsOnUsers;
  CalendarsOnUsersGroupByOutputType?: CalendarsOnUsersGroupByOutputType;
  AggregateCalendar?: AggregateCalendar;
  CalendarGroupByOutputType?: CalendarGroupByOutputType;
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
  CalendarEventCountAggregateOutputType?: CalendarEventCountAggregateOutputType;
  CalendarEventAvgAggregateOutputType?: CalendarEventAvgAggregateOutputType;
  CalendarEventSumAggregateOutputType?: CalendarEventSumAggregateOutputType;
  CalendarEventMinAggregateOutputType?: CalendarEventMinAggregateOutputType;
  CalendarEventMaxAggregateOutputType?: CalendarEventMaxAggregateOutputType;
  CalendarsOnUsersCountAggregateOutputType?: CalendarsOnUsersCountAggregateOutputType;
  CalendarsOnUsersAvgAggregateOutputType?: CalendarsOnUsersAvgAggregateOutputType;
  CalendarsOnUsersSumAggregateOutputType?: CalendarsOnUsersSumAggregateOutputType;
  CalendarsOnUsersMinAggregateOutputType?: CalendarsOnUsersMinAggregateOutputType;
  CalendarsOnUsersMaxAggregateOutputType?: CalendarsOnUsersMaxAggregateOutputType;
  CalendarCountOutputType?: CalendarCountOutputType;
  CalendarCountAggregateOutputType?: CalendarCountAggregateOutputType;
  CalendarAvgAggregateOutputType?: CalendarAvgAggregateOutputType;
  CalendarSumAggregateOutputType?: CalendarSumAggregateOutputType;
  CalendarMinAggregateOutputType?: CalendarMinAggregateOutputType;
  CalendarMaxAggregateOutputType?: CalendarMaxAggregateOutputType;
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
  calendars?: Resolver<
    Client.User,
    Users_UserCalendarsArgs,
    Client.CalendarsOnUsers[] | null
  >;
  contacted?: Resolver<
    Client.User,
    Users_UserContactedArgs,
    Client.User[] | null
  >;
  contactedBy?: Resolver<
    Client.User,
    Users_UserContactedByArgs,
    Client.User[] | null
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
  businessPhone?: Resolver<Client.Profile, {}, string | null>;
  mobilePhone?: Resolver<Client.Profile, {}, string | null>;
  kakaoTalkId?: Resolver<Client.Profile, {}, string | null>;
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
  teamType?: Resolver<Client.Team, {}, string | null>;
  teamIcon?: Resolver<Client.Team, {}, string | null>;
  _count?: Resolver<Client.Team, {}, Client.Prisma.TeamCountOutputType>;

  __resolveReference?: any;
}

export interface CalendarEvent {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.CalendarEvent, {}, number>;
  url?: Resolver<Client.CalendarEvent, {}, string | null>;
  title?: Resolver<Client.CalendarEvent, {}, string>;
  start?: Resolver<Client.CalendarEvent, {}, Date>;
  end?: Resolver<Client.CalendarEvent, {}, Date>;
  allDay?: Resolver<Client.CalendarEvent, {}, boolean>;
  calendarId?: Resolver<Client.CalendarEvent, {}, number>;
  calendar?: Resolver<Client.CalendarEvent, {}, Client.Calendar>;

  __resolveReference?: any;
}

export interface CalendarsOnUsers {
  [key: string]: Resolver<any, any, any>;
  user?: Resolver<Client.CalendarsOnUsers, {}, Client.User>;
  userId?: Resolver<Client.CalendarsOnUsers, {}, number>;
  calendar?: Resolver<Client.CalendarsOnUsers, {}, Client.Calendar>;
  calendarId?: Resolver<Client.CalendarsOnUsers, {}, number>;

  __resolveReference?: any;
}

export interface Calendar {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Calendar, {}, number>;
  calendarType?: Resolver<Client.Calendar, {}, string>;
  users?: Resolver<
    Client.Calendar,
    Users_CalendarUsersArgs,
    Client.CalendarsOnUsers[] | null
  >;
  calendarEvents?: Resolver<
    Client.Calendar,
    Users_CalendarCalendarEventsArgs,
    Client.CalendarEvent[] | null
  >;
  _count?: Resolver<Client.Calendar, {}, Client.Prisma.CalendarCountOutputType>;

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
  Users_findFirstCalendarEvent?: Resolver<
    {},
    Users_FindFirstCalendarEventArgs,
    Client.CalendarEvent | null
  >;
  Users_findFirstCalendarEventOrThrow?: Resolver<
    {},
    Users_FindFirstCalendarEventOrThrowArgs,
    Client.CalendarEvent | null
  >;
  Users_findManyCalendarEvent?: Resolver<
    {},
    Users_FindManyCalendarEventArgs,
    Client.CalendarEvent[]
  >;
  Users_findManyCalendarEventCount?: Resolver<
    {},
    Users_FindManyCalendarEventArgs,
    number
  >;
  Users_aggregateCalendarEvent?: Resolver<
    {},
    Users_AggregateCalendarEventArgs,
    Client.Prisma.GetCalendarEventAggregateType<Users_AggregateCalendarEventArgs>
  >;
  //Users_groupByCalendarEvent is not generated because model has only unique fields or relations.
  Users_groupByCalendarEvent?: Resolver<
    {},
    any,
    | Client.Prisma.GetCalendarEventGroupByPayload<Users_GroupByCalendarEventArgs>
    | GroupByError
  >;
  Users_findUniqueCalendarEvent?: Resolver<
    {},
    Users_FindUniqueCalendarEventArgs,
    Client.CalendarEvent | null
  >;
  Users_findUniqueCalendarEventOrThrow?: Resolver<
    {},
    Users_FindUniqueCalendarEventOrThrowArgs,
    Client.CalendarEvent | null
  >;
  Users_findFirstCalendarsOnUsers?: Resolver<
    {},
    Users_FindFirstCalendarsOnUsersArgs,
    Client.CalendarsOnUsers | null
  >;
  Users_findFirstCalendarsOnUsersOrThrow?: Resolver<
    {},
    Users_FindFirstCalendarsOnUsersOrThrowArgs,
    Client.CalendarsOnUsers | null
  >;
  Users_findManyCalendarsOnUsers?: Resolver<
    {},
    Users_FindManyCalendarsOnUsersArgs,
    Client.CalendarsOnUsers[]
  >;
  Users_findManyCalendarsOnUsersCount?: Resolver<
    {},
    Users_FindManyCalendarsOnUsersArgs,
    number
  >;
  Users_aggregateCalendarsOnUsers?: Resolver<
    {},
    Users_AggregateCalendarsOnUsersArgs,
    Client.Prisma.GetCalendarsOnUsersAggregateType<Users_AggregateCalendarsOnUsersArgs>
  >;
  //Users_groupByCalendarsOnUsers is not generated because model has only unique fields or relations.
  Users_groupByCalendarsOnUsers?: Resolver<
    {},
    any,
    | Client.Prisma.GetCalendarsOnUsersGroupByPayload<Users_GroupByCalendarsOnUsersArgs>
    | GroupByError
  >;
  Users_findUniqueCalendarsOnUsers?: Resolver<
    {},
    Users_FindUniqueCalendarsOnUsersArgs,
    Client.CalendarsOnUsers | null
  >;
  Users_findUniqueCalendarsOnUsersOrThrow?: Resolver<
    {},
    Users_FindUniqueCalendarsOnUsersOrThrowArgs,
    Client.CalendarsOnUsers | null
  >;
  Users_findFirstCalendar?: Resolver<
    {},
    Users_FindFirstCalendarArgs,
    Client.Calendar | null
  >;
  Users_findFirstCalendarOrThrow?: Resolver<
    {},
    Users_FindFirstCalendarOrThrowArgs,
    Client.Calendar | null
  >;
  Users_findManyCalendar?: Resolver<
    {},
    Users_FindManyCalendarArgs,
    Client.Calendar[]
  >;
  Users_findManyCalendarCount?: Resolver<
    {},
    Users_FindManyCalendarArgs,
    number
  >;
  Users_aggregateCalendar?: Resolver<
    {},
    Users_AggregateCalendarArgs,
    Client.Prisma.GetCalendarAggregateType<Users_AggregateCalendarArgs>
  >;
  //Users_groupByCalendar is not generated because model has only unique fields or relations.
  Users_groupByCalendar?: Resolver<
    {},
    any,
    | Client.Prisma.GetCalendarGroupByPayload<Users_GroupByCalendarArgs>
    | GroupByError
  >;
  Users_findUniqueCalendar?: Resolver<
    {},
    Users_FindUniqueCalendarArgs,
    Client.Calendar | null
  >;
  Users_findUniqueCalendarOrThrow?: Resolver<
    {},
    Users_FindUniqueCalendarOrThrowArgs,
    Client.Calendar | null
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
  Users_createOneCalendarEvent?: Resolver<
    {},
    Users_CreateOneCalendarEventArgs,
    Client.CalendarEvent
  >;
  Users_upsertOneCalendarEvent?: Resolver<
    {},
    Users_UpsertOneCalendarEventArgs,
    Client.CalendarEvent
  >;
  Users_createManyCalendarEvent?: Resolver<
    {},
    Users_CreateManyCalendarEventArgs,
    Client.Prisma.BatchPayload
  >;
  Users_deleteOneCalendarEvent?: Resolver<
    {},
    Users_DeleteOneCalendarEventArgs,
    Client.CalendarEvent | null
  >;
  Users_updateOneCalendarEvent?: Resolver<
    {},
    Users_UpdateOneCalendarEventArgs,
    Client.CalendarEvent | null
  >;
  //Users_updateManyCalendarEvent is not generated because model has only unique fields or relations.
  Users_deleteManyCalendarEvent?: Resolver<
    {},
    Users_DeleteManyCalendarEventArgs,
    Client.Prisma.BatchPayload
  >;
  Users_createOneCalendarsOnUsers?: Resolver<
    {},
    Users_CreateOneCalendarsOnUsersArgs,
    Client.CalendarsOnUsers
  >;
  Users_upsertOneCalendarsOnUsers?: Resolver<
    {},
    Users_UpsertOneCalendarsOnUsersArgs,
    Client.CalendarsOnUsers
  >;
  Users_createManyCalendarsOnUsers?: Resolver<
    {},
    Users_CreateManyCalendarsOnUsersArgs,
    Client.Prisma.BatchPayload
  >;
  Users_deleteOneCalendarsOnUsers?: Resolver<
    {},
    Users_DeleteOneCalendarsOnUsersArgs,
    Client.CalendarsOnUsers | null
  >;
  Users_updateOneCalendarsOnUsers?: Resolver<
    {},
    Users_UpdateOneCalendarsOnUsersArgs,
    Client.CalendarsOnUsers | null
  >;
  //Users_updateManyCalendarsOnUsers is not generated because model has only unique fields or relations.
  Users_deleteManyCalendarsOnUsers?: Resolver<
    {},
    Users_DeleteManyCalendarsOnUsersArgs,
    Client.Prisma.BatchPayload
  >;
  Users_createOneCalendar?: Resolver<
    {},
    Users_CreateOneCalendarArgs,
    Client.Calendar
  >;
  Users_upsertOneCalendar?: Resolver<
    {},
    Users_UpsertOneCalendarArgs,
    Client.Calendar
  >;
  Users_createManyCalendar?: Resolver<
    {},
    Users_CreateManyCalendarArgs,
    Client.Prisma.BatchPayload
  >;
  Users_deleteOneCalendar?: Resolver<
    {},
    Users_DeleteOneCalendarArgs,
    Client.Calendar | null
  >;
  Users_updateOneCalendar?: Resolver<
    {},
    Users_UpdateOneCalendarArgs,
    Client.Calendar | null
  >;
  //Users_updateManyCalendar is not generated because model has only unique fields or relations.
  Users_deleteManyCalendar?: Resolver<
    {},
    Users_DeleteManyCalendarArgs,
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
  businessPhone?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    string | null
  >;
  mobilePhone?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    string | null
  >;
  kakaoTalkId?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    string | null
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
  teamType?: Resolver<Client.Prisma.TeamGroupByOutputType, {}, string | null>;
  teamIcon?: Resolver<Client.Prisma.TeamGroupByOutputType, {}, string | null>;
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

export interface AggregateCalendarEvent {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateCalendarEvent,
    {},
    Client.Prisma.CalendarEventCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateCalendarEvent,
    {},
    Client.Prisma.CalendarEventAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateCalendarEvent,
    {},
    Client.Prisma.CalendarEventSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateCalendarEvent,
    {},
    Client.Prisma.CalendarEventMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateCalendarEvent,
    {},
    Client.Prisma.CalendarEventMaxAggregateOutputType | null
  >;
}

export interface CalendarEventGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.CalendarEventGroupByOutputType, {}, number>;
  url?: Resolver<
    Client.Prisma.CalendarEventGroupByOutputType,
    {},
    string | null
  >;
  title?: Resolver<Client.Prisma.CalendarEventGroupByOutputType, {}, string>;
  start?: Resolver<Client.Prisma.CalendarEventGroupByOutputType, {}, Date>;
  end?: Resolver<Client.Prisma.CalendarEventGroupByOutputType, {}, Date>;
  allDay?: Resolver<Client.Prisma.CalendarEventGroupByOutputType, {}, boolean>;
  calendarId?: Resolver<
    Client.Prisma.CalendarEventGroupByOutputType,
    {},
    number
  >;
  _count?: Resolver<
    Client.Prisma.CalendarEventGroupByOutputType,
    {},
    Client.Prisma.CalendarEventCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.CalendarEventGroupByOutputType,
    {},
    Client.Prisma.CalendarEventAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.CalendarEventGroupByOutputType,
    {},
    Client.Prisma.CalendarEventSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.CalendarEventGroupByOutputType,
    {},
    Client.Prisma.CalendarEventMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.CalendarEventGroupByOutputType,
    {},
    Client.Prisma.CalendarEventMaxAggregateOutputType | null
  >;
}

export interface AggregateCalendarsOnUsers {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateCalendarsOnUsers,
    {},
    Client.Prisma.CalendarsOnUsersCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateCalendarsOnUsers,
    {},
    Client.Prisma.CalendarsOnUsersAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateCalendarsOnUsers,
    {},
    Client.Prisma.CalendarsOnUsersSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateCalendarsOnUsers,
    {},
    Client.Prisma.CalendarsOnUsersMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateCalendarsOnUsers,
    {},
    Client.Prisma.CalendarsOnUsersMaxAggregateOutputType | null
  >;
}

export interface CalendarsOnUsersGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<
    Client.Prisma.CalendarsOnUsersGroupByOutputType,
    {},
    number
  >;
  calendarId?: Resolver<
    Client.Prisma.CalendarsOnUsersGroupByOutputType,
    {},
    number
  >;
  _count?: Resolver<
    Client.Prisma.CalendarsOnUsersGroupByOutputType,
    {},
    Client.Prisma.CalendarsOnUsersCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.CalendarsOnUsersGroupByOutputType,
    {},
    Client.Prisma.CalendarsOnUsersAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.CalendarsOnUsersGroupByOutputType,
    {},
    Client.Prisma.CalendarsOnUsersSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.CalendarsOnUsersGroupByOutputType,
    {},
    Client.Prisma.CalendarsOnUsersMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.CalendarsOnUsersGroupByOutputType,
    {},
    Client.Prisma.CalendarsOnUsersMaxAggregateOutputType | null
  >;
}

export interface AggregateCalendar {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateCalendar,
    {},
    Client.Prisma.CalendarCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateCalendar,
    {},
    Client.Prisma.CalendarAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateCalendar,
    {},
    Client.Prisma.CalendarSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateCalendar,
    {},
    Client.Prisma.CalendarMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateCalendar,
    {},
    Client.Prisma.CalendarMaxAggregateOutputType | null
  >;
}

export interface CalendarGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.CalendarGroupByOutputType, {}, number>;
  calendarType?: Resolver<Client.Prisma.CalendarGroupByOutputType, {}, string>;
  _count?: Resolver<
    Client.Prisma.CalendarGroupByOutputType,
    {},
    Client.Prisma.CalendarCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.CalendarGroupByOutputType,
    {},
    Client.Prisma.CalendarAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.CalendarGroupByOutputType,
    {},
    Client.Prisma.CalendarSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.CalendarGroupByOutputType,
    {},
    Client.Prisma.CalendarMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.CalendarGroupByOutputType,
    {},
    Client.Prisma.CalendarMaxAggregateOutputType | null
  >;
}

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>;
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>;
}

export interface UserCountOutputType {
  [key: string]: Resolver<any, any, any>;
  teams?: Resolver<Client.Prisma.UserCountOutputType, {}, number>;
  calendars?: Resolver<Client.Prisma.UserCountOutputType, {}, number>;
  contacted?: Resolver<Client.Prisma.UserCountOutputType, {}, number>;
  contactedBy?: Resolver<Client.Prisma.UserCountOutputType, {}, number>;
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
  businessPhone?: Resolver<
    Client.Prisma.ProfileCountAggregateOutputType,
    {},
    number
  >;
  mobilePhone?: Resolver<
    Client.Prisma.ProfileCountAggregateOutputType,
    {},
    number
  >;
  kakaoTalkId?: Resolver<
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
  businessPhone?: Resolver<
    Client.Prisma.ProfileMinAggregateOutputType,
    {},
    string | null
  >;
  mobilePhone?: Resolver<
    Client.Prisma.ProfileMinAggregateOutputType,
    {},
    string | null
  >;
  kakaoTalkId?: Resolver<
    Client.Prisma.ProfileMinAggregateOutputType,
    {},
    string | null
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
  businessPhone?: Resolver<
    Client.Prisma.ProfileMaxAggregateOutputType,
    {},
    string | null
  >;
  mobilePhone?: Resolver<
    Client.Prisma.ProfileMaxAggregateOutputType,
    {},
    string | null
  >;
  kakaoTalkId?: Resolver<
    Client.Prisma.ProfileMaxAggregateOutputType,
    {},
    string | null
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
  teamType?: Resolver<Client.Prisma.TeamCountAggregateOutputType, {}, number>;
  teamIcon?: Resolver<Client.Prisma.TeamCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.TeamCountAggregateOutputType, {}, number>;
}

export interface TeamMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<
    Client.Prisma.TeamMinAggregateOutputType,
    {},
    string | null
  >;
  teamType?: Resolver<
    Client.Prisma.TeamMinAggregateOutputType,
    {},
    string | null
  >;
  teamIcon?: Resolver<
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
  teamType?: Resolver<
    Client.Prisma.TeamMaxAggregateOutputType,
    {},
    string | null
  >;
  teamIcon?: Resolver<
    Client.Prisma.TeamMaxAggregateOutputType,
    {},
    string | null
  >;
}

export interface CalendarEventCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<
    Client.Prisma.CalendarEventCountAggregateOutputType,
    {},
    number
  >;
  url?: Resolver<
    Client.Prisma.CalendarEventCountAggregateOutputType,
    {},
    number
  >;
  title?: Resolver<
    Client.Prisma.CalendarEventCountAggregateOutputType,
    {},
    number
  >;
  start?: Resolver<
    Client.Prisma.CalendarEventCountAggregateOutputType,
    {},
    number
  >;
  end?: Resolver<
    Client.Prisma.CalendarEventCountAggregateOutputType,
    {},
    number
  >;
  allDay?: Resolver<
    Client.Prisma.CalendarEventCountAggregateOutputType,
    {},
    number
  >;
  calendarId?: Resolver<
    Client.Prisma.CalendarEventCountAggregateOutputType,
    {},
    number
  >;
  _all?: Resolver<
    Client.Prisma.CalendarEventCountAggregateOutputType,
    {},
    number
  >;
}

export interface CalendarEventAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<
    Client.Prisma.CalendarEventAvgAggregateOutputType,
    {},
    number | null
  >;
  calendarId?: Resolver<
    Client.Prisma.CalendarEventAvgAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarEventSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<
    Client.Prisma.CalendarEventSumAggregateOutputType,
    {},
    number | null
  >;
  calendarId?: Resolver<
    Client.Prisma.CalendarEventSumAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarEventMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<
    Client.Prisma.CalendarEventMinAggregateOutputType,
    {},
    number | null
  >;
  url?: Resolver<
    Client.Prisma.CalendarEventMinAggregateOutputType,
    {},
    string | null
  >;
  title?: Resolver<
    Client.Prisma.CalendarEventMinAggregateOutputType,
    {},
    string | null
  >;
  start?: Resolver<
    Client.Prisma.CalendarEventMinAggregateOutputType,
    {},
    Date | null
  >;
  end?: Resolver<
    Client.Prisma.CalendarEventMinAggregateOutputType,
    {},
    Date | null
  >;
  allDay?: Resolver<
    Client.Prisma.CalendarEventMinAggregateOutputType,
    {},
    boolean | null
  >;
  calendarId?: Resolver<
    Client.Prisma.CalendarEventMinAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarEventMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<
    Client.Prisma.CalendarEventMaxAggregateOutputType,
    {},
    number | null
  >;
  url?: Resolver<
    Client.Prisma.CalendarEventMaxAggregateOutputType,
    {},
    string | null
  >;
  title?: Resolver<
    Client.Prisma.CalendarEventMaxAggregateOutputType,
    {},
    string | null
  >;
  start?: Resolver<
    Client.Prisma.CalendarEventMaxAggregateOutputType,
    {},
    Date | null
  >;
  end?: Resolver<
    Client.Prisma.CalendarEventMaxAggregateOutputType,
    {},
    Date | null
  >;
  allDay?: Resolver<
    Client.Prisma.CalendarEventMaxAggregateOutputType,
    {},
    boolean | null
  >;
  calendarId?: Resolver<
    Client.Prisma.CalendarEventMaxAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarsOnUsersCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<
    Client.Prisma.CalendarsOnUsersCountAggregateOutputType,
    {},
    number
  >;
  calendarId?: Resolver<
    Client.Prisma.CalendarsOnUsersCountAggregateOutputType,
    {},
    number
  >;
  _all?: Resolver<
    Client.Prisma.CalendarsOnUsersCountAggregateOutputType,
    {},
    number
  >;
}

export interface CalendarsOnUsersAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<
    Client.Prisma.CalendarsOnUsersAvgAggregateOutputType,
    {},
    number | null
  >;
  calendarId?: Resolver<
    Client.Prisma.CalendarsOnUsersAvgAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarsOnUsersSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<
    Client.Prisma.CalendarsOnUsersSumAggregateOutputType,
    {},
    number | null
  >;
  calendarId?: Resolver<
    Client.Prisma.CalendarsOnUsersSumAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarsOnUsersMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<
    Client.Prisma.CalendarsOnUsersMinAggregateOutputType,
    {},
    number | null
  >;
  calendarId?: Resolver<
    Client.Prisma.CalendarsOnUsersMinAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarsOnUsersMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<
    Client.Prisma.CalendarsOnUsersMaxAggregateOutputType,
    {},
    number | null
  >;
  calendarId?: Resolver<
    Client.Prisma.CalendarsOnUsersMaxAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarCountOutputType {
  [key: string]: Resolver<any, any, any>;
  users?: Resolver<Client.Prisma.CalendarCountOutputType, {}, number>;
  calendarEvents?: Resolver<Client.Prisma.CalendarCountOutputType, {}, number>;
}

export interface CalendarCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.CalendarCountAggregateOutputType, {}, number>;
  calendarType?: Resolver<
    Client.Prisma.CalendarCountAggregateOutputType,
    {},
    number
  >;
  _all?: Resolver<Client.Prisma.CalendarCountAggregateOutputType, {}, number>;
}

export interface CalendarAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<
    Client.Prisma.CalendarAvgAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<
    Client.Prisma.CalendarSumAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<
    Client.Prisma.CalendarMinAggregateOutputType,
    {},
    number | null
  >;
  calendarType?: Resolver<
    Client.Prisma.CalendarMinAggregateOutputType,
    {},
    string | null
  >;
}

export interface CalendarMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<
    Client.Prisma.CalendarMaxAggregateOutputType,
    {},
    number | null
  >;
  calendarType?: Resolver<
    Client.Prisma.CalendarMaxAggregateOutputType,
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

export interface Users_UserCalendarsArgs {
  where?: Users_CalendarsOnUsersWhereInput | null;
  orderBy?: Users_CalendarsOnUsersOrderByWithRelationInput[] | null;
  cursor?: Users_CalendarsOnUsersWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarsOnUsersScalarFieldEnum[] | null;
}

export interface Users_UserContactedArgs {
  where?: Users_UserWhereInput | null;
  orderBy?: Users_UserOrderByWithRelationInput[] | null;
  cursor?: Users_UserWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UserScalarFieldEnum[] | null;
}

export interface Users_UserContactedByArgs {
  where?: Users_UserWhereInput | null;
  orderBy?: Users_UserOrderByWithRelationInput[] | null;
  cursor?: Users_UserWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UserScalarFieldEnum[] | null;
}

export interface Users_TeamUsersArgs {
  where?: Users_UsersOnTeamsWhereInput | null;
  orderBy?: Users_UsersOnTeamsOrderByWithRelationInput[] | null;
  cursor?: Users_UsersOnTeamsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnTeamsScalarFieldEnum[] | null;
}

export interface Users_CalendarUsersArgs {
  where?: Users_CalendarsOnUsersWhereInput | null;
  orderBy?: Users_CalendarsOnUsersOrderByWithRelationInput[] | null;
  cursor?: Users_CalendarsOnUsersWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarsOnUsersScalarFieldEnum[] | null;
}

export interface Users_CalendarCalendarEventsArgs {
  where?: Users_CalendarEventWhereInput | null;
  orderBy?: Users_CalendarEventOrderByWithRelationInput[] | null;
  cursor?: Users_CalendarEventWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarEventScalarFieldEnum[] | null;
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

export interface Users_FindFirstCalendarEventArgs {
  where?: Users_CalendarEventWhereInput | null;
  orderBy?: Users_CalendarEventOrderByWithRelationInput[] | null;
  cursor?: Users_CalendarEventWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarEventScalarFieldEnum[] | null;
}

export interface Users_FindFirstCalendarEventOrThrowArgs {
  where?: Users_CalendarEventWhereInput | null;
  orderBy?: Users_CalendarEventOrderByWithRelationInput[] | null;
  cursor?: Users_CalendarEventWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarEventScalarFieldEnum[] | null;
}

export interface Users_FindManyCalendarEventArgs {
  where?: Users_CalendarEventWhereInput;
  orderBy?: Users_CalendarEventOrderByWithRelationInput[];
  cursor?: Users_CalendarEventWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CalendarEventScalarFieldEnum[];
}

export interface Users_AggregateCalendarEventArgs {
  where?: Users_CalendarEventWhereInput;
  orderBy?: Users_CalendarEventOrderByWithRelationInput[];
  cursor?: Users_CalendarEventWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.CalendarEventCountAggregateInputType;
  _avg?: Client.Prisma.CalendarEventAvgAggregateInputType;
  _sum?: Client.Prisma.CalendarEventSumAggregateInputType;
  _min?: Client.Prisma.CalendarEventMinAggregateInputType;
  _max?: Client.Prisma.CalendarEventMaxAggregateInputType;
}

export interface Users_GroupByCalendarEventArgs {
  where?: Users_CalendarEventWhereInput;
  orderBy?: Users_CalendarEventOrderByWithAggregationInput[];
  by: CalendarEventScalarFieldEnum[];
  having?: Users_CalendarEventScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Users_FindUniqueCalendarEventArgs {
  where: Users_CalendarEventWhereUniqueInput | null;
}

export interface Users_FindUniqueCalendarEventOrThrowArgs {
  where: Users_CalendarEventWhereUniqueInput | null;
}

export interface Users_FindFirstCalendarsOnUsersArgs {
  where?: Users_CalendarsOnUsersWhereInput | null;
  orderBy?: Users_CalendarsOnUsersOrderByWithRelationInput[] | null;
  cursor?: Users_CalendarsOnUsersWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarsOnUsersScalarFieldEnum[] | null;
}

export interface Users_FindFirstCalendarsOnUsersOrThrowArgs {
  where?: Users_CalendarsOnUsersWhereInput | null;
  orderBy?: Users_CalendarsOnUsersOrderByWithRelationInput[] | null;
  cursor?: Users_CalendarsOnUsersWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarsOnUsersScalarFieldEnum[] | null;
}

export interface Users_FindManyCalendarsOnUsersArgs {
  where?: Users_CalendarsOnUsersWhereInput;
  orderBy?: Users_CalendarsOnUsersOrderByWithRelationInput[];
  cursor?: Users_CalendarsOnUsersWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CalendarsOnUsersScalarFieldEnum[];
}

export interface Users_AggregateCalendarsOnUsersArgs {
  where?: Users_CalendarsOnUsersWhereInput;
  orderBy?: Users_CalendarsOnUsersOrderByWithRelationInput[];
  cursor?: Users_CalendarsOnUsersWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.CalendarsOnUsersCountAggregateInputType;
  _avg?: Client.Prisma.CalendarsOnUsersAvgAggregateInputType;
  _sum?: Client.Prisma.CalendarsOnUsersSumAggregateInputType;
  _min?: Client.Prisma.CalendarsOnUsersMinAggregateInputType;
  _max?: Client.Prisma.CalendarsOnUsersMaxAggregateInputType;
}

export interface Users_GroupByCalendarsOnUsersArgs {
  where?: Users_CalendarsOnUsersWhereInput;
  orderBy?: Users_CalendarsOnUsersOrderByWithAggregationInput[];
  by: CalendarsOnUsersScalarFieldEnum[];
  having?: Users_CalendarsOnUsersScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Users_FindUniqueCalendarsOnUsersArgs {
  where: Users_CalendarsOnUsersWhereUniqueInput | null;
}

export interface Users_FindUniqueCalendarsOnUsersOrThrowArgs {
  where: Users_CalendarsOnUsersWhereUniqueInput | null;
}

export interface Users_FindFirstCalendarArgs {
  where?: Users_CalendarWhereInput | null;
  orderBy?: Users_CalendarOrderByWithRelationInput[] | null;
  cursor?: Users_CalendarWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarScalarFieldEnum[] | null;
}

export interface Users_FindFirstCalendarOrThrowArgs {
  where?: Users_CalendarWhereInput | null;
  orderBy?: Users_CalendarOrderByWithRelationInput[] | null;
  cursor?: Users_CalendarWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarScalarFieldEnum[] | null;
}

export interface Users_FindManyCalendarArgs {
  where?: Users_CalendarWhereInput;
  orderBy?: Users_CalendarOrderByWithRelationInput[];
  cursor?: Users_CalendarWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CalendarScalarFieldEnum[];
}

export interface Users_AggregateCalendarArgs {
  where?: Users_CalendarWhereInput;
  orderBy?: Users_CalendarOrderByWithRelationInput[];
  cursor?: Users_CalendarWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.CalendarCountAggregateInputType;
  _avg?: Client.Prisma.CalendarAvgAggregateInputType;
  _sum?: Client.Prisma.CalendarSumAggregateInputType;
  _min?: Client.Prisma.CalendarMinAggregateInputType;
  _max?: Client.Prisma.CalendarMaxAggregateInputType;
}

export interface Users_GroupByCalendarArgs {
  where?: Users_CalendarWhereInput;
  orderBy?: Users_CalendarOrderByWithAggregationInput[];
  by: CalendarScalarFieldEnum[];
  having?: Users_CalendarScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Users_FindUniqueCalendarArgs {
  where: Users_CalendarWhereUniqueInput | null;
}

export interface Users_FindUniqueCalendarOrThrowArgs {
  where: Users_CalendarWhereUniqueInput | null;
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

export interface Users_UpdateManyTeamArgs {
  data: Users_TeamUpdateManyMutationInput;
  where?: Users_TeamWhereInput;
}

export interface Users_DeleteManyTeamArgs {
  where?: Users_TeamWhereInput;
}

export interface Users_CreateOneCalendarEventArgs {
  data: Users_CalendarEventCreateInput;
}

export interface Users_UpsertOneCalendarEventArgs {
  where: Users_CalendarEventWhereUniqueInput;
  create: Users_CalendarEventCreateInput;
  update: Users_CalendarEventUpdateInput;
}

export interface Users_CreateManyCalendarEventArgs {
  data: Users_CalendarEventCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Users_DeleteOneCalendarEventArgs {
  where: Users_CalendarEventWhereUniqueInput | null;
}

export interface Users_UpdateOneCalendarEventArgs {
  data: Users_CalendarEventUpdateInput | null;
  where: Users_CalendarEventWhereUniqueInput | null;
}

export interface Users_UpdateManyCalendarEventArgs {
  data: Users_CalendarEventUpdateManyMutationInput;
  where?: Users_CalendarEventWhereInput;
}

export interface Users_DeleteManyCalendarEventArgs {
  where?: Users_CalendarEventWhereInput;
}

export interface Users_CreateOneCalendarsOnUsersArgs {
  data: Users_CalendarsOnUsersCreateInput;
}

export interface Users_UpsertOneCalendarsOnUsersArgs {
  where: Users_CalendarsOnUsersWhereUniqueInput;
  create: Users_CalendarsOnUsersCreateInput;
  update: Users_CalendarsOnUsersUpdateInput;
}

export interface Users_CreateManyCalendarsOnUsersArgs {
  data: Users_CalendarsOnUsersCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Users_DeleteOneCalendarsOnUsersArgs {
  where: Users_CalendarsOnUsersWhereUniqueInput | null;
}

export interface Users_UpdateOneCalendarsOnUsersArgs {
  data: Users_CalendarsOnUsersUpdateInput | null;
  where: Users_CalendarsOnUsersWhereUniqueInput | null;
}

//UpdateManyCalendarsOnUsersArgs is not generated as the related model contains only unique or relation fields

export interface Users_DeleteManyCalendarsOnUsersArgs {
  where?: Users_CalendarsOnUsersWhereInput;
}

export interface Users_CreateOneCalendarArgs {
  data: Users_CalendarCreateInput;
}

export interface Users_UpsertOneCalendarArgs {
  where: Users_CalendarWhereUniqueInput;
  create: Users_CalendarCreateInput;
  update: Users_CalendarUpdateInput;
}

export interface Users_CreateManyCalendarArgs {
  data: Users_CalendarCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Users_DeleteOneCalendarArgs {
  where: Users_CalendarWhereUniqueInput | null;
}

export interface Users_UpdateOneCalendarArgs {
  data: Users_CalendarUpdateInput | null;
  where: Users_CalendarWhereUniqueInput | null;
}

export interface Users_UpdateManyCalendarArgs {
  data: Users_CalendarUpdateManyMutationInput;
  where?: Users_CalendarWhereInput;
}

export interface Users_DeleteManyCalendarArgs {
  where?: Users_CalendarWhereInput;
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
  calendars?: Users_CalendarsOnUsersListRelationFilter;
  contacted?: Users_UserListRelationFilter;
  contactedBy?: Users_UserListRelationFilter;
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
  calendars?: Users_CalendarsOnUsersOrderByRelationAggregateInput;
  contacted?: Users_UserOrderByRelationAggregateInput;
  contactedBy?: Users_UserOrderByRelationAggregateInput;
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
    calendars?: Users_CalendarsOnUsersListRelationFilter;
    contacted?: Users_UserListRelationFilter;
    contactedBy?: Users_UserListRelationFilter;
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
  businessPhone?: StringNullableFilter | null;
  mobilePhone?: StringNullableFilter | null;
  kakaoTalkId?: StringNullableFilter | null;
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
  businessPhone?: SortOrder;
  mobilePhone?: SortOrder;
  kakaoTalkId?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
}

export type Users_ProfileWhereUniqueInput = AtLeast<
  {
    userId?: number;
    businessPhone?: string;
    mobilePhone?: string;
    kakaoTalkId?: string;
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
  'userId' | 'businessPhone' | 'mobilePhone' | 'kakaoTalkId'
>;

export interface Users_ProfileOrderByWithAggregationInput {
  userId?: SortOrder;
  location?: SortOrder;
  joiningDate?: SortOrder;
  businessPhone?: SortOrder;
  mobilePhone?: SortOrder;
  kakaoTalkId?: SortOrder;
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
  businessPhone?: StringNullableWithAggregatesFilter | null;
  mobilePhone?: StringNullableWithAggregatesFilter | null;
  kakaoTalkId?: StringNullableWithAggregatesFilter | null;
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
  teamType?: StringNullableFilter | null;
  teamIcon?: StringNullableFilter | null;
}

export interface Users_TeamOrderByWithRelationInput {
  teamName?: SortOrder;
  users?: Users_UsersOnTeamsOrderByRelationAggregateInput;
  teamType?: SortOrder;
  teamIcon?: SortOrder;
}

export type Users_TeamWhereUniqueInput = AtLeast<
  {
    teamName?: string;
    AND?: Users_TeamWhereInput[];
    OR?: Users_TeamWhereInput[];
    NOT?: Users_TeamWhereInput[];
    users?: Users_UsersOnTeamsListRelationFilter;
    teamType?: StringNullableFilter | null;
    teamIcon?: StringNullableFilter | null;
  },
  'teamName'
>;

export interface Users_TeamOrderByWithAggregationInput {
  teamName?: SortOrder;
  teamType?: SortOrder;
  teamIcon?: SortOrder;
  _count?: Users_TeamCountOrderByAggregateInput;
  _max?: Users_TeamMaxOrderByAggregateInput;
  _min?: Users_TeamMinOrderByAggregateInput;
}

export interface Users_TeamScalarWhereWithAggregatesInput {
  AND?: Users_TeamScalarWhereWithAggregatesInput[];
  OR?: Users_TeamScalarWhereWithAggregatesInput[];
  NOT?: Users_TeamScalarWhereWithAggregatesInput[];
  teamName?: StringWithAggregatesFilter;
  teamType?: StringNullableWithAggregatesFilter | null;
  teamIcon?: StringNullableWithAggregatesFilter | null;
}

export interface Users_CalendarEventWhereInput {
  AND?: Users_CalendarEventWhereInput[];
  OR?: Users_CalendarEventWhereInput[];
  NOT?: Users_CalendarEventWhereInput[];
  id?: IntFilter;
  url?: StringNullableFilter | null;
  title?: StringFilter;
  start?: DateTimeFilter;
  end?: DateTimeFilter;
  allDay?: BoolFilter;
  calendarId?: IntFilter;
  calendar?: Users_CalendarWhereInput;
}

export interface Users_CalendarEventOrderByWithRelationInput {
  id?: SortOrder;
  url?: SortOrder;
  title?: SortOrder;
  start?: SortOrder;
  end?: SortOrder;
  allDay?: SortOrder;
  calendarId?: SortOrder;
  calendar?: Users_CalendarOrderByWithRelationInput;
}

export type Users_CalendarEventWhereUniqueInput = AtLeast<
  {
    id?: number;
    AND?: Users_CalendarEventWhereInput[];
    OR?: Users_CalendarEventWhereInput[];
    NOT?: Users_CalendarEventWhereInput[];
    url?: StringNullableFilter | null;
    title?: StringFilter;
    start?: DateTimeFilter;
    end?: DateTimeFilter;
    allDay?: BoolFilter;
    calendarId?: IntFilter;
    calendar?: Users_CalendarWhereInput;
  },
  'id'
>;

export interface Users_CalendarEventOrderByWithAggregationInput {
  id?: SortOrder;
  url?: SortOrder;
  title?: SortOrder;
  start?: SortOrder;
  end?: SortOrder;
  allDay?: SortOrder;
  calendarId?: SortOrder;
  _count?: Users_CalendarEventCountOrderByAggregateInput;
  _avg?: Users_CalendarEventAvgOrderByAggregateInput;
  _max?: Users_CalendarEventMaxOrderByAggregateInput;
  _min?: Users_CalendarEventMinOrderByAggregateInput;
  _sum?: Users_CalendarEventSumOrderByAggregateInput;
}

export interface Users_CalendarEventScalarWhereWithAggregatesInput {
  AND?: Users_CalendarEventScalarWhereWithAggregatesInput[];
  OR?: Users_CalendarEventScalarWhereWithAggregatesInput[];
  NOT?: Users_CalendarEventScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  url?: StringNullableWithAggregatesFilter | null;
  title?: StringWithAggregatesFilter;
  start?: DateTimeWithAggregatesFilter;
  end?: DateTimeWithAggregatesFilter;
  allDay?: BoolWithAggregatesFilter;
  calendarId?: IntWithAggregatesFilter;
}

export interface Users_CalendarsOnUsersWhereInput {
  AND?: Users_CalendarsOnUsersWhereInput[];
  OR?: Users_CalendarsOnUsersWhereInput[];
  NOT?: Users_CalendarsOnUsersWhereInput[];
  user?: Users_UserWhereInput;
  userId?: IntFilter;
  calendar?: Users_CalendarWhereInput;
  calendarId?: IntFilter;
}

export interface Users_CalendarsOnUsersOrderByWithRelationInput {
  user?: Users_UserOrderByWithRelationInput;
  userId?: SortOrder;
  calendar?: Users_CalendarOrderByWithRelationInput;
  calendarId?: SortOrder;
}

export type Users_CalendarsOnUsersWhereUniqueInput = AtLeast<
  {
    userId_calendarId?: CalendarsOnUsersUserIdCalendarIdCompoundUniqueInput;
    AND?: Users_CalendarsOnUsersWhereInput[];
    OR?: Users_CalendarsOnUsersWhereInput[];
    NOT?: Users_CalendarsOnUsersWhereInput[];
    user?: Users_UserWhereInput;
    userId?: IntFilter;
    calendar?: Users_CalendarWhereInput;
    calendarId?: IntFilter;
  },
  'userId_calendarId'
>;

export interface Users_CalendarsOnUsersOrderByWithAggregationInput {
  userId?: SortOrder;
  calendarId?: SortOrder;
  _count?: Users_CalendarsOnUsersCountOrderByAggregateInput;
  _avg?: Users_CalendarsOnUsersAvgOrderByAggregateInput;
  _max?: Users_CalendarsOnUsersMaxOrderByAggregateInput;
  _min?: Users_CalendarsOnUsersMinOrderByAggregateInput;
  _sum?: Users_CalendarsOnUsersSumOrderByAggregateInput;
}

export interface Users_CalendarsOnUsersScalarWhereWithAggregatesInput {
  AND?: Users_CalendarsOnUsersScalarWhereWithAggregatesInput[];
  OR?: Users_CalendarsOnUsersScalarWhereWithAggregatesInput[];
  NOT?: Users_CalendarsOnUsersScalarWhereWithAggregatesInput[];
  userId?: IntWithAggregatesFilter;
  calendarId?: IntWithAggregatesFilter;
}

export interface Users_CalendarWhereInput {
  AND?: Users_CalendarWhereInput[];
  OR?: Users_CalendarWhereInput[];
  NOT?: Users_CalendarWhereInput[];
  id?: IntFilter;
  calendarType?: StringFilter;
  users?: Users_CalendarsOnUsersListRelationFilter;
  calendarEvents?: Users_CalendarEventListRelationFilter;
}

export interface Users_CalendarOrderByWithRelationInput {
  id?: SortOrder;
  calendarType?: SortOrder;
  users?: Users_CalendarsOnUsersOrderByRelationAggregateInput;
  calendarEvents?: Users_CalendarEventOrderByRelationAggregateInput;
}

export type Users_CalendarWhereUniqueInput = AtLeast<
  {
    id?: number;
    AND?: Users_CalendarWhereInput[];
    OR?: Users_CalendarWhereInput[];
    NOT?: Users_CalendarWhereInput[];
    calendarType?: StringFilter;
    users?: Users_CalendarsOnUsersListRelationFilter;
    calendarEvents?: Users_CalendarEventListRelationFilter;
  },
  'id'
>;

export interface Users_CalendarOrderByWithAggregationInput {
  id?: SortOrder;
  calendarType?: SortOrder;
  _count?: Users_CalendarCountOrderByAggregateInput;
  _avg?: Users_CalendarAvgOrderByAggregateInput;
  _max?: Users_CalendarMaxOrderByAggregateInput;
  _min?: Users_CalendarMinOrderByAggregateInput;
  _sum?: Users_CalendarSumOrderByAggregateInput;
}

export interface Users_CalendarScalarWhereWithAggregatesInput {
  AND?: Users_CalendarScalarWhereWithAggregatesInput[];
  OR?: Users_CalendarScalarWhereWithAggregatesInput[];
  NOT?: Users_CalendarScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  calendarType?: StringWithAggregatesFilter;
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
  calendars?: Users_CalendarsOnUsersCreateNestedManyWithoutUserInput;
  contacted?: Users_UserCreateNestedManyWithoutContactedByInput;
  contactedBy?: Users_UserCreateNestedManyWithoutContactedInput;
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
  calendars?: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput;
  contacted?: Users_UserUncheckedCreateNestedManyWithoutContactedByInput;
  contactedBy?: Users_UserUncheckedCreateNestedManyWithoutContactedInput;
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
  calendars?: Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput;
  contacted?: Users_UserUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Users_UserUpdateManyWithoutContactedNestedInput;
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
  calendars?: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput;
  contacted?: Users_UserUncheckedUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Users_UserUncheckedUpdateManyWithoutContactedNestedInput;
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
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Users_ProfileUncheckedCreateInput {
  userId: number;
  location?: string | null;
  joiningDate?: Date | null;
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Users_ProfileUpdateInput {
  user?: Users_UserUpdateOneRequiredWithoutProfileNestedInput;
  location?: NullableStringFieldUpdateOperationsInput | null;
  joiningDate?: NullableDateTimeFieldUpdateOperationsInput | null;
  businessPhone?: NullableStringFieldUpdateOperationsInput | null;
  mobilePhone?: NullableStringFieldUpdateOperationsInput | null;
  kakaoTalkId?: NullableStringFieldUpdateOperationsInput | null;
  designation?: NullableStringFieldUpdateOperationsInput | null;
  profileImg?: NullableStringFieldUpdateOperationsInput | null;
  designationIcon?: NullableStringFieldUpdateOperationsInput | null;
  coverImg?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_ProfileUncheckedUpdateInput {
  userId?: IntFieldUpdateOperationsInput;
  location?: NullableStringFieldUpdateOperationsInput | null;
  joiningDate?: NullableDateTimeFieldUpdateOperationsInput | null;
  businessPhone?: NullableStringFieldUpdateOperationsInput | null;
  mobilePhone?: NullableStringFieldUpdateOperationsInput | null;
  kakaoTalkId?: NullableStringFieldUpdateOperationsInput | null;
  designation?: NullableStringFieldUpdateOperationsInput | null;
  profileImg?: NullableStringFieldUpdateOperationsInput | null;
  designationIcon?: NullableStringFieldUpdateOperationsInput | null;
  coverImg?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_ProfileCreateManyInput {
  userId: number;
  location?: string | null;
  joiningDate?: Date | null;
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Users_ProfileUpdateManyMutationInput {
  location?: NullableStringFieldUpdateOperationsInput | null;
  joiningDate?: NullableDateTimeFieldUpdateOperationsInput | null;
  businessPhone?: NullableStringFieldUpdateOperationsInput | null;
  mobilePhone?: NullableStringFieldUpdateOperationsInput | null;
  kakaoTalkId?: NullableStringFieldUpdateOperationsInput | null;
  designation?: NullableStringFieldUpdateOperationsInput | null;
  profileImg?: NullableStringFieldUpdateOperationsInput | null;
  designationIcon?: NullableStringFieldUpdateOperationsInput | null;
  coverImg?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_ProfileUncheckedUpdateManyInput {
  userId?: IntFieldUpdateOperationsInput;
  location?: NullableStringFieldUpdateOperationsInput | null;
  joiningDate?: NullableDateTimeFieldUpdateOperationsInput | null;
  businessPhone?: NullableStringFieldUpdateOperationsInput | null;
  mobilePhone?: NullableStringFieldUpdateOperationsInput | null;
  kakaoTalkId?: NullableStringFieldUpdateOperationsInput | null;
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
  teamType?: string | null;
  teamIcon?: string | null;
}

export interface Users_TeamUncheckedCreateInput {
  teamName: string;
  users?: Users_UsersOnTeamsUncheckedCreateNestedManyWithoutTeamInput;
  teamType?: string | null;
  teamIcon?: string | null;
}

export interface Users_TeamUpdateInput {
  teamName?: StringFieldUpdateOperationsInput;
  users?: Users_UsersOnTeamsUpdateManyWithoutTeamNestedInput;
  teamType?: NullableStringFieldUpdateOperationsInput | null;
  teamIcon?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_TeamUncheckedUpdateInput {
  teamName?: StringFieldUpdateOperationsInput;
  users?: Users_UsersOnTeamsUncheckedUpdateManyWithoutTeamNestedInput;
  teamType?: NullableStringFieldUpdateOperationsInput | null;
  teamIcon?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_TeamCreateManyInput {
  teamName: string;
  teamType?: string | null;
  teamIcon?: string | null;
}

export interface Users_TeamUpdateManyMutationInput {
  teamName?: StringFieldUpdateOperationsInput;
  teamType?: NullableStringFieldUpdateOperationsInput | null;
  teamIcon?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_TeamUncheckedUpdateManyInput {
  teamName?: StringFieldUpdateOperationsInput;
  teamType?: NullableStringFieldUpdateOperationsInput | null;
  teamIcon?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_CalendarEventCreateInput {
  url?: string | null;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  calendar: Users_CalendarCreateNestedOneWithoutCalendarEventsInput;
}

export interface Users_CalendarEventUncheckedCreateInput {
  id?: number;
  url?: string | null;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  calendarId: number;
}

export interface Users_CalendarEventUpdateInput {
  url?: NullableStringFieldUpdateOperationsInput | null;
  title?: StringFieldUpdateOperationsInput;
  start?: DateTimeFieldUpdateOperationsInput;
  end?: DateTimeFieldUpdateOperationsInput;
  allDay?: BoolFieldUpdateOperationsInput;
  calendar?: Users_CalendarUpdateOneRequiredWithoutCalendarEventsNestedInput;
}

export interface Users_CalendarEventUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  url?: NullableStringFieldUpdateOperationsInput | null;
  title?: StringFieldUpdateOperationsInput;
  start?: DateTimeFieldUpdateOperationsInput;
  end?: DateTimeFieldUpdateOperationsInput;
  allDay?: BoolFieldUpdateOperationsInput;
  calendarId?: IntFieldUpdateOperationsInput;
}

export interface Users_CalendarEventCreateManyInput {
  id?: number;
  url?: string | null;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  calendarId: number;
}

export interface Users_CalendarEventUpdateManyMutationInput {
  url?: NullableStringFieldUpdateOperationsInput | null;
  title?: StringFieldUpdateOperationsInput;
  start?: DateTimeFieldUpdateOperationsInput;
  end?: DateTimeFieldUpdateOperationsInput;
  allDay?: BoolFieldUpdateOperationsInput;
}

export interface Users_CalendarEventUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  url?: NullableStringFieldUpdateOperationsInput | null;
  title?: StringFieldUpdateOperationsInput;
  start?: DateTimeFieldUpdateOperationsInput;
  end?: DateTimeFieldUpdateOperationsInput;
  allDay?: BoolFieldUpdateOperationsInput;
  calendarId?: IntFieldUpdateOperationsInput;
}

export interface Users_CalendarsOnUsersCreateInput {
  user: Users_UserCreateNestedOneWithoutCalendarsInput;
  calendar: Users_CalendarCreateNestedOneWithoutUsersInput;
}

export interface Users_CalendarsOnUsersUncheckedCreateInput {
  userId: number;
  calendarId: number;
}

export interface Users_CalendarsOnUsersUpdateInput {
  user?: Users_UserUpdateOneRequiredWithoutCalendarsNestedInput;
  calendar?: Users_CalendarUpdateOneRequiredWithoutUsersNestedInput;
}

export interface Users_CalendarsOnUsersUncheckedUpdateInput {
  userId?: IntFieldUpdateOperationsInput;
  calendarId?: IntFieldUpdateOperationsInput;
}

export interface Users_CalendarsOnUsersCreateManyInput {
  userId: number;
  calendarId: number;
}

export interface Users_CalendarsOnUsersUncheckedUpdateManyInput {
  userId?: IntFieldUpdateOperationsInput;
  calendarId?: IntFieldUpdateOperationsInput;
}

export interface Users_CalendarCreateInput {
  calendarType: string;
  users?: Users_CalendarsOnUsersCreateNestedManyWithoutCalendarInput;
  calendarEvents?: Users_CalendarEventCreateNestedManyWithoutCalendarInput;
}

export interface Users_CalendarUncheckedCreateInput {
  id?: number;
  calendarType: string;
  users?: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarInput;
  calendarEvents?: Users_CalendarEventUncheckedCreateNestedManyWithoutCalendarInput;
}

export interface Users_CalendarUpdateInput {
  calendarType?: StringFieldUpdateOperationsInput;
  users?: Users_CalendarsOnUsersUpdateManyWithoutCalendarNestedInput;
  calendarEvents?: Users_CalendarEventUpdateManyWithoutCalendarNestedInput;
}

export interface Users_CalendarUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  calendarType?: StringFieldUpdateOperationsInput;
  users?: Users_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarNestedInput;
  calendarEvents?: Users_CalendarEventUncheckedUpdateManyWithoutCalendarNestedInput;
}

export interface Users_CalendarCreateManyInput {
  id?: number;
  calendarType: string;
}

export interface Users_CalendarUpdateManyMutationInput {
  calendarType?: StringFieldUpdateOperationsInput;
}

export interface Users_CalendarUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  calendarType?: StringFieldUpdateOperationsInput;
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

export interface Users_CalendarsOnUsersListRelationFilter {
  every?: Users_CalendarsOnUsersWhereInput;
  some?: Users_CalendarsOnUsersWhereInput;
  none?: Users_CalendarsOnUsersWhereInput;
}

export interface Users_UserListRelationFilter {
  every?: Users_UserWhereInput;
  some?: Users_UserWhereInput;
  none?: Users_UserWhereInput;
}

export interface Users_UsersOnTeamsOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface Users_CalendarsOnUsersOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface Users_UserOrderByRelationAggregateInput {
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
  businessPhone?: SortOrder;
  mobilePhone?: SortOrder;
  kakaoTalkId?: SortOrder;
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
  businessPhone?: SortOrder;
  mobilePhone?: SortOrder;
  kakaoTalkId?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
}

export interface Users_ProfileMinOrderByAggregateInput {
  userId?: SortOrder;
  location?: SortOrder;
  joiningDate?: SortOrder;
  businessPhone?: SortOrder;
  mobilePhone?: SortOrder;
  kakaoTalkId?: SortOrder;
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
  teamType?: SortOrder;
  teamIcon?: SortOrder;
}

export interface Users_TeamMaxOrderByAggregateInput {
  teamName?: SortOrder;
  teamType?: SortOrder;
  teamIcon?: SortOrder;
}

export interface Users_TeamMinOrderByAggregateInput {
  teamName?: SortOrder;
  teamType?: SortOrder;
  teamIcon?: SortOrder;
}

export interface BoolFilter {
  equals?: boolean;
  not?: NestedBoolFilter;
}

export interface Users_CalendarRelationFilter {
  is?: Users_CalendarWhereInput;
  isNot?: Users_CalendarWhereInput;
}

export interface Users_CalendarEventCountOrderByAggregateInput {
  id?: SortOrder;
  url?: SortOrder;
  title?: SortOrder;
  start?: SortOrder;
  end?: SortOrder;
  allDay?: SortOrder;
  calendarId?: SortOrder;
}

export interface Users_CalendarEventAvgOrderByAggregateInput {
  id?: SortOrder;
  calendarId?: SortOrder;
}

export interface Users_CalendarEventMaxOrderByAggregateInput {
  id?: SortOrder;
  url?: SortOrder;
  title?: SortOrder;
  start?: SortOrder;
  end?: SortOrder;
  allDay?: SortOrder;
  calendarId?: SortOrder;
}

export interface Users_CalendarEventMinOrderByAggregateInput {
  id?: SortOrder;
  url?: SortOrder;
  title?: SortOrder;
  start?: SortOrder;
  end?: SortOrder;
  allDay?: SortOrder;
  calendarId?: SortOrder;
}

export interface Users_CalendarEventSumOrderByAggregateInput {
  id?: SortOrder;
  calendarId?: SortOrder;
}

export interface BoolWithAggregatesFilter {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
}

export interface CalendarsOnUsersUserIdCalendarIdCompoundUniqueInput {
  userId: number;
  calendarId: number;
}

export interface Users_CalendarsOnUsersCountOrderByAggregateInput {
  userId?: SortOrder;
  calendarId?: SortOrder;
}

export interface Users_CalendarsOnUsersAvgOrderByAggregateInput {
  userId?: SortOrder;
  calendarId?: SortOrder;
}

export interface Users_CalendarsOnUsersMaxOrderByAggregateInput {
  userId?: SortOrder;
  calendarId?: SortOrder;
}

export interface Users_CalendarsOnUsersMinOrderByAggregateInput {
  userId?: SortOrder;
  calendarId?: SortOrder;
}

export interface Users_CalendarsOnUsersSumOrderByAggregateInput {
  userId?: SortOrder;
  calendarId?: SortOrder;
}

export interface Users_CalendarEventListRelationFilter {
  every?: Users_CalendarEventWhereInput;
  some?: Users_CalendarEventWhereInput;
  none?: Users_CalendarEventWhereInput;
}

export interface Users_CalendarEventOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface Users_CalendarCountOrderByAggregateInput {
  id?: SortOrder;
  calendarType?: SortOrder;
}

export interface Users_CalendarAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface Users_CalendarMaxOrderByAggregateInput {
  id?: SortOrder;
  calendarType?: SortOrder;
}

export interface Users_CalendarMinOrderByAggregateInput {
  id?: SortOrder;
  calendarType?: SortOrder;
}

export interface Users_CalendarSumOrderByAggregateInput {
  id?: SortOrder;
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

export interface Users_CalendarsOnUsersCreateNestedManyWithoutUserInput {
  create?: Users_CalendarsOnUsersCreateWithoutUserInput[];
  connectOrCreate?: Users_CalendarsOnUsersCreateOrConnectWithoutUserInput[];
  createMany?: Users_CalendarsOnUsersCreateManyUserInputEnvelope;
  connect?: Users_CalendarsOnUsersWhereUniqueInput[];
}

export interface Users_UserCreateNestedManyWithoutContactedByInput {
  create?: Users_UserCreateWithoutContactedByInput[];
  connectOrCreate?: Users_UserCreateOrConnectWithoutContactedByInput[];
  connect?: Users_UserWhereUniqueInput[];
}

export interface Users_UserCreateNestedManyWithoutContactedInput {
  create?: Users_UserCreateWithoutContactedInput[];
  connectOrCreate?: Users_UserCreateOrConnectWithoutContactedInput[];
  connect?: Users_UserWhereUniqueInput[];
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

export interface Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput {
  create?: Users_CalendarsOnUsersCreateWithoutUserInput[];
  connectOrCreate?: Users_CalendarsOnUsersCreateOrConnectWithoutUserInput[];
  createMany?: Users_CalendarsOnUsersCreateManyUserInputEnvelope;
  connect?: Users_CalendarsOnUsersWhereUniqueInput[];
}

export interface Users_UserUncheckedCreateNestedManyWithoutContactedByInput {
  create?: Users_UserCreateWithoutContactedByInput[];
  connectOrCreate?: Users_UserCreateOrConnectWithoutContactedByInput[];
  connect?: Users_UserWhereUniqueInput[];
}

export interface Users_UserUncheckedCreateNestedManyWithoutContactedInput {
  create?: Users_UserCreateWithoutContactedInput[];
  connectOrCreate?: Users_UserCreateOrConnectWithoutContactedInput[];
  connect?: Users_UserWhereUniqueInput[];
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

export interface Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput {
  create?: Users_CalendarsOnUsersCreateWithoutUserInput[];
  connectOrCreate?: Users_CalendarsOnUsersCreateOrConnectWithoutUserInput[];
  upsert?: Users_CalendarsOnUsersUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: Users_CalendarsOnUsersCreateManyUserInputEnvelope;
  set?: Users_CalendarsOnUsersWhereUniqueInput[];
  disconnect?: Users_CalendarsOnUsersWhereUniqueInput[];
  delete?: Users_CalendarsOnUsersWhereUniqueInput[];
  connect?: Users_CalendarsOnUsersWhereUniqueInput[];
  update?: Users_CalendarsOnUsersUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: Users_CalendarsOnUsersUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: Users_CalendarsOnUsersScalarWhereInput[];
}

export interface Users_UserUpdateManyWithoutContactedByNestedInput {
  create?: Users_UserCreateWithoutContactedByInput[];
  connectOrCreate?: Users_UserCreateOrConnectWithoutContactedByInput[];
  upsert?: Users_UserUpsertWithWhereUniqueWithoutContactedByInput[];
  set?: Users_UserWhereUniqueInput[];
  disconnect?: Users_UserWhereUniqueInput[];
  delete?: Users_UserWhereUniqueInput[];
  connect?: Users_UserWhereUniqueInput[];
  update?: Users_UserUpdateWithWhereUniqueWithoutContactedByInput[];
  updateMany?: Users_UserUpdateManyWithWhereWithoutContactedByInput[];
  deleteMany?: Users_UserScalarWhereInput[];
}

export interface Users_UserUpdateManyWithoutContactedNestedInput {
  create?: Users_UserCreateWithoutContactedInput[];
  connectOrCreate?: Users_UserCreateOrConnectWithoutContactedInput[];
  upsert?: Users_UserUpsertWithWhereUniqueWithoutContactedInput[];
  set?: Users_UserWhereUniqueInput[];
  disconnect?: Users_UserWhereUniqueInput[];
  delete?: Users_UserWhereUniqueInput[];
  connect?: Users_UserWhereUniqueInput[];
  update?: Users_UserUpdateWithWhereUniqueWithoutContactedInput[];
  updateMany?: Users_UserUpdateManyWithWhereWithoutContactedInput[];
  deleteMany?: Users_UserScalarWhereInput[];
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

export interface Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput {
  create?: Users_CalendarsOnUsersCreateWithoutUserInput[];
  connectOrCreate?: Users_CalendarsOnUsersCreateOrConnectWithoutUserInput[];
  upsert?: Users_CalendarsOnUsersUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: Users_CalendarsOnUsersCreateManyUserInputEnvelope;
  set?: Users_CalendarsOnUsersWhereUniqueInput[];
  disconnect?: Users_CalendarsOnUsersWhereUniqueInput[];
  delete?: Users_CalendarsOnUsersWhereUniqueInput[];
  connect?: Users_CalendarsOnUsersWhereUniqueInput[];
  update?: Users_CalendarsOnUsersUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: Users_CalendarsOnUsersUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: Users_CalendarsOnUsersScalarWhereInput[];
}

export interface Users_UserUncheckedUpdateManyWithoutContactedByNestedInput {
  create?: Users_UserCreateWithoutContactedByInput[];
  connectOrCreate?: Users_UserCreateOrConnectWithoutContactedByInput[];
  upsert?: Users_UserUpsertWithWhereUniqueWithoutContactedByInput[];
  set?: Users_UserWhereUniqueInput[];
  disconnect?: Users_UserWhereUniqueInput[];
  delete?: Users_UserWhereUniqueInput[];
  connect?: Users_UserWhereUniqueInput[];
  update?: Users_UserUpdateWithWhereUniqueWithoutContactedByInput[];
  updateMany?: Users_UserUpdateManyWithWhereWithoutContactedByInput[];
  deleteMany?: Users_UserScalarWhereInput[];
}

export interface Users_UserUncheckedUpdateManyWithoutContactedNestedInput {
  create?: Users_UserCreateWithoutContactedInput[];
  connectOrCreate?: Users_UserCreateOrConnectWithoutContactedInput[];
  upsert?: Users_UserUpsertWithWhereUniqueWithoutContactedInput[];
  set?: Users_UserWhereUniqueInput[];
  disconnect?: Users_UserWhereUniqueInput[];
  delete?: Users_UserWhereUniqueInput[];
  connect?: Users_UserWhereUniqueInput[];
  update?: Users_UserUpdateWithWhereUniqueWithoutContactedInput[];
  updateMany?: Users_UserUpdateManyWithWhereWithoutContactedInput[];
  deleteMany?: Users_UserScalarWhereInput[];
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

export interface Users_CalendarCreateNestedOneWithoutCalendarEventsInput {
  create?: Users_CalendarUncheckedCreateWithoutCalendarEventsInput;
  connectOrCreate?: Users_CalendarCreateOrConnectWithoutCalendarEventsInput;
  connect?: Users_CalendarWhereUniqueInput;
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean;
}

export interface Users_CalendarUpdateOneRequiredWithoutCalendarEventsNestedInput {
  create?: Users_CalendarUncheckedCreateWithoutCalendarEventsInput;
  connectOrCreate?: Users_CalendarCreateOrConnectWithoutCalendarEventsInput;
  upsert?: Users_CalendarUpsertWithoutCalendarEventsInput;
  connect?: Users_CalendarWhereUniqueInput;
  update?: Users_CalendarUpdateWithoutCalendarEventsInput;
}

export interface Users_UserCreateNestedOneWithoutCalendarsInput {
  create?: Users_UserUncheckedCreateWithoutCalendarsInput;
  connectOrCreate?: Users_UserCreateOrConnectWithoutCalendarsInput;
  connect?: Users_UserWhereUniqueInput;
}

export interface Users_CalendarCreateNestedOneWithoutUsersInput {
  create?: Users_CalendarUncheckedCreateWithoutUsersInput;
  connectOrCreate?: Users_CalendarCreateOrConnectWithoutUsersInput;
  connect?: Users_CalendarWhereUniqueInput;
}

export interface Users_UserUpdateOneRequiredWithoutCalendarsNestedInput {
  create?: Users_UserUncheckedCreateWithoutCalendarsInput;
  connectOrCreate?: Users_UserCreateOrConnectWithoutCalendarsInput;
  upsert?: Users_UserUpsertWithoutCalendarsInput;
  connect?: Users_UserWhereUniqueInput;
  update?: Users_UserUpdateWithoutCalendarsInput;
}

export interface Users_CalendarUpdateOneRequiredWithoutUsersNestedInput {
  create?: Users_CalendarUncheckedCreateWithoutUsersInput;
  connectOrCreate?: Users_CalendarCreateOrConnectWithoutUsersInput;
  upsert?: Users_CalendarUpsertWithoutUsersInput;
  connect?: Users_CalendarWhereUniqueInput;
  update?: Users_CalendarUpdateWithoutUsersInput;
}

export interface Users_CalendarsOnUsersCreateNestedManyWithoutCalendarInput {
  create?: Users_CalendarsOnUsersCreateWithoutCalendarInput[];
  connectOrCreate?: Users_CalendarsOnUsersCreateOrConnectWithoutCalendarInput[];
  createMany?: Users_CalendarsOnUsersCreateManyCalendarInputEnvelope;
  connect?: Users_CalendarsOnUsersWhereUniqueInput[];
}

export interface Users_CalendarEventCreateNestedManyWithoutCalendarInput {
  create?: Users_CalendarEventCreateWithoutCalendarInput[];
  connectOrCreate?: Users_CalendarEventCreateOrConnectWithoutCalendarInput[];
  createMany?: Users_CalendarEventCreateManyCalendarInputEnvelope;
  connect?: Users_CalendarEventWhereUniqueInput[];
}

export interface Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarInput {
  create?: Users_CalendarsOnUsersCreateWithoutCalendarInput[];
  connectOrCreate?: Users_CalendarsOnUsersCreateOrConnectWithoutCalendarInput[];
  createMany?: Users_CalendarsOnUsersCreateManyCalendarInputEnvelope;
  connect?: Users_CalendarsOnUsersWhereUniqueInput[];
}

export interface Users_CalendarEventUncheckedCreateNestedManyWithoutCalendarInput {
  create?: Users_CalendarEventCreateWithoutCalendarInput[];
  connectOrCreate?: Users_CalendarEventCreateOrConnectWithoutCalendarInput[];
  createMany?: Users_CalendarEventCreateManyCalendarInputEnvelope;
  connect?: Users_CalendarEventWhereUniqueInput[];
}

export interface Users_CalendarsOnUsersUpdateManyWithoutCalendarNestedInput {
  create?: Users_CalendarsOnUsersCreateWithoutCalendarInput[];
  connectOrCreate?: Users_CalendarsOnUsersCreateOrConnectWithoutCalendarInput[];
  upsert?: Users_CalendarsOnUsersUpsertWithWhereUniqueWithoutCalendarInput[];
  createMany?: Users_CalendarsOnUsersCreateManyCalendarInputEnvelope;
  set?: Users_CalendarsOnUsersWhereUniqueInput[];
  disconnect?: Users_CalendarsOnUsersWhereUniqueInput[];
  delete?: Users_CalendarsOnUsersWhereUniqueInput[];
  connect?: Users_CalendarsOnUsersWhereUniqueInput[];
  update?: Users_CalendarsOnUsersUpdateWithWhereUniqueWithoutCalendarInput[];
  updateMany?: Users_CalendarsOnUsersUpdateManyWithWhereWithoutCalendarInput[];
  deleteMany?: Users_CalendarsOnUsersScalarWhereInput[];
}

export interface Users_CalendarEventUpdateManyWithoutCalendarNestedInput {
  create?: Users_CalendarEventCreateWithoutCalendarInput[];
  connectOrCreate?: Users_CalendarEventCreateOrConnectWithoutCalendarInput[];
  upsert?: Users_CalendarEventUpsertWithWhereUniqueWithoutCalendarInput[];
  createMany?: Users_CalendarEventCreateManyCalendarInputEnvelope;
  set?: Users_CalendarEventWhereUniqueInput[];
  disconnect?: Users_CalendarEventWhereUniqueInput[];
  delete?: Users_CalendarEventWhereUniqueInput[];
  connect?: Users_CalendarEventWhereUniqueInput[];
  update?: Users_CalendarEventUpdateWithWhereUniqueWithoutCalendarInput[];
  updateMany?: Users_CalendarEventUpdateManyWithWhereWithoutCalendarInput[];
  deleteMany?: Users_CalendarEventScalarWhereInput[];
}

export interface Users_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarNestedInput {
  create?: Users_CalendarsOnUsersCreateWithoutCalendarInput[];
  connectOrCreate?: Users_CalendarsOnUsersCreateOrConnectWithoutCalendarInput[];
  upsert?: Users_CalendarsOnUsersUpsertWithWhereUniqueWithoutCalendarInput[];
  createMany?: Users_CalendarsOnUsersCreateManyCalendarInputEnvelope;
  set?: Users_CalendarsOnUsersWhereUniqueInput[];
  disconnect?: Users_CalendarsOnUsersWhereUniqueInput[];
  delete?: Users_CalendarsOnUsersWhereUniqueInput[];
  connect?: Users_CalendarsOnUsersWhereUniqueInput[];
  update?: Users_CalendarsOnUsersUpdateWithWhereUniqueWithoutCalendarInput[];
  updateMany?: Users_CalendarsOnUsersUpdateManyWithWhereWithoutCalendarInput[];
  deleteMany?: Users_CalendarsOnUsersScalarWhereInput[];
}

export interface Users_CalendarEventUncheckedUpdateManyWithoutCalendarNestedInput {
  create?: Users_CalendarEventCreateWithoutCalendarInput[];
  connectOrCreate?: Users_CalendarEventCreateOrConnectWithoutCalendarInput[];
  upsert?: Users_CalendarEventUpsertWithWhereUniqueWithoutCalendarInput[];
  createMany?: Users_CalendarEventCreateManyCalendarInputEnvelope;
  set?: Users_CalendarEventWhereUniqueInput[];
  disconnect?: Users_CalendarEventWhereUniqueInput[];
  delete?: Users_CalendarEventWhereUniqueInput[];
  connect?: Users_CalendarEventWhereUniqueInput[];
  update?: Users_CalendarEventUpdateWithWhereUniqueWithoutCalendarInput[];
  updateMany?: Users_CalendarEventUpdateManyWithWhereWithoutCalendarInput[];
  deleteMany?: Users_CalendarEventScalarWhereInput[];
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

export interface NestedBoolFilter {
  equals?: boolean;
  not?: NestedBoolFilter;
}

export interface NestedBoolWithAggregatesFilter {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
}

export interface Users_ProfileCreateWithoutUserInput {
  location?: string | null;
  joiningDate?: Date | null;
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Users_ProfileUncheckedCreateWithoutUserInput {
  location?: string | null;
  joiningDate?: Date | null;
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
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

export interface Users_CalendarsOnUsersCreateWithoutUserInput {
  calendar: Users_CalendarCreateNestedOneWithoutUsersInput;
}

export interface Users_CalendarsOnUsersUncheckedCreateWithoutUserInput {
  calendarId: number;
}

export interface Users_CalendarsOnUsersCreateOrConnectWithoutUserInput {
  where: Users_CalendarsOnUsersWhereUniqueInput;
  create: Users_CalendarsOnUsersUncheckedCreateWithoutUserInput;
}

export interface Users_CalendarsOnUsersCreateManyUserInputEnvelope {
  data: Users_CalendarsOnUsersCreateManyUserInput[];
  skipDuplicates?: boolean;
}

export interface Users_UserCreateWithoutContactedByInput {
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
  calendars?: Users_CalendarsOnUsersCreateNestedManyWithoutUserInput;
  contacted?: Users_UserCreateNestedManyWithoutContactedByInput;
}

export interface Users_UserUncheckedCreateWithoutContactedByInput {
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
  calendars?: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput;
  contacted?: Users_UserUncheckedCreateNestedManyWithoutContactedByInput;
}

export interface Users_UserCreateOrConnectWithoutContactedByInput {
  where: Users_UserWhereUniqueInput;
  create: Users_UserUncheckedCreateWithoutContactedByInput;
}

export interface Users_UserCreateWithoutContactedInput {
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
  calendars?: Users_CalendarsOnUsersCreateNestedManyWithoutUserInput;
  contactedBy?: Users_UserCreateNestedManyWithoutContactedInput;
}

export interface Users_UserUncheckedCreateWithoutContactedInput {
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
  calendars?: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput;
  contactedBy?: Users_UserUncheckedCreateNestedManyWithoutContactedInput;
}

export interface Users_UserCreateOrConnectWithoutContactedInput {
  where: Users_UserWhereUniqueInput;
  create: Users_UserUncheckedCreateWithoutContactedInput;
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
  businessPhone?: NullableStringFieldUpdateOperationsInput | null;
  mobilePhone?: NullableStringFieldUpdateOperationsInput | null;
  kakaoTalkId?: NullableStringFieldUpdateOperationsInput | null;
  designation?: NullableStringFieldUpdateOperationsInput | null;
  profileImg?: NullableStringFieldUpdateOperationsInput | null;
  designationIcon?: NullableStringFieldUpdateOperationsInput | null;
  coverImg?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_ProfileUncheckedUpdateWithoutUserInput {
  location?: NullableStringFieldUpdateOperationsInput | null;
  joiningDate?: NullableDateTimeFieldUpdateOperationsInput | null;
  businessPhone?: NullableStringFieldUpdateOperationsInput | null;
  mobilePhone?: NullableStringFieldUpdateOperationsInput | null;
  kakaoTalkId?: NullableStringFieldUpdateOperationsInput | null;
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

export interface Users_CalendarsOnUsersUpsertWithWhereUniqueWithoutUserInput {
  where: Users_CalendarsOnUsersWhereUniqueInput;
  update: Users_CalendarsOnUsersUncheckedUpdateWithoutUserInput;
  create: Users_CalendarsOnUsersUncheckedCreateWithoutUserInput;
}

export interface Users_CalendarsOnUsersUpdateWithWhereUniqueWithoutUserInput {
  where: Users_CalendarsOnUsersWhereUniqueInput;
  data: Users_CalendarsOnUsersUncheckedUpdateWithoutUserInput;
}

export interface Users_CalendarsOnUsersUpdateManyWithWhereWithoutUserInput {
  where: Users_CalendarsOnUsersScalarWhereInput;
  data: Users_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarsInput;
}

export interface Users_CalendarsOnUsersScalarWhereInput {
  AND?: Users_CalendarsOnUsersScalarWhereInput[];
  OR?: Users_CalendarsOnUsersScalarWhereInput[];
  NOT?: Users_CalendarsOnUsersScalarWhereInput[];
  userId?: IntFilter;
  calendarId?: IntFilter;
}

export interface Users_UserUpsertWithWhereUniqueWithoutContactedByInput {
  where: Users_UserWhereUniqueInput;
  update: Users_UserUncheckedUpdateWithoutContactedByInput;
  create: Users_UserUncheckedCreateWithoutContactedByInput;
}

export interface Users_UserUpdateWithWhereUniqueWithoutContactedByInput {
  where: Users_UserWhereUniqueInput;
  data: Users_UserUncheckedUpdateWithoutContactedByInput;
}

export interface Users_UserUpdateManyWithWhereWithoutContactedByInput {
  where: Users_UserScalarWhereInput;
  data: Users_UserUncheckedUpdateManyWithoutContactedInput;
}

export interface Users_UserScalarWhereInput {
  AND?: Users_UserScalarWhereInput[];
  OR?: Users_UserScalarWhereInput[];
  NOT?: Users_UserScalarWhereInput[];
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
}

export interface Users_UserUpsertWithWhereUniqueWithoutContactedInput {
  where: Users_UserWhereUniqueInput;
  update: Users_UserUncheckedUpdateWithoutContactedInput;
  create: Users_UserUncheckedCreateWithoutContactedInput;
}

export interface Users_UserUpdateWithWhereUniqueWithoutContactedInput {
  where: Users_UserWhereUniqueInput;
  data: Users_UserUncheckedUpdateWithoutContactedInput;
}

export interface Users_UserUpdateManyWithWhereWithoutContactedInput {
  where: Users_UserScalarWhereInput;
  data: Users_UserUncheckedUpdateManyWithoutContactedByInput;
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
  calendars?: Users_CalendarsOnUsersCreateNestedManyWithoutUserInput;
  contacted?: Users_UserCreateNestedManyWithoutContactedByInput;
  contactedBy?: Users_UserCreateNestedManyWithoutContactedInput;
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
  calendars?: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput;
  contacted?: Users_UserUncheckedCreateNestedManyWithoutContactedByInput;
  contactedBy?: Users_UserUncheckedCreateNestedManyWithoutContactedInput;
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
  calendars?: Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput;
  contacted?: Users_UserUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Users_UserUpdateManyWithoutContactedNestedInput;
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
  calendars?: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput;
  contacted?: Users_UserUncheckedUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Users_UserUncheckedUpdateManyWithoutContactedNestedInput;
}

export interface Users_TeamCreateWithoutUsersInput {
  teamName: string;
  teamType?: string | null;
  teamIcon?: string | null;
}

export interface Users_TeamUncheckedCreateWithoutUsersInput {
  teamName: string;
  teamType?: string | null;
  teamIcon?: string | null;
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
  calendars?: Users_CalendarsOnUsersCreateNestedManyWithoutUserInput;
  contacted?: Users_UserCreateNestedManyWithoutContactedByInput;
  contactedBy?: Users_UserCreateNestedManyWithoutContactedInput;
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
  calendars?: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutUserInput;
  contacted?: Users_UserUncheckedCreateNestedManyWithoutContactedByInput;
  contactedBy?: Users_UserUncheckedCreateNestedManyWithoutContactedInput;
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
  teamType?: NullableStringFieldUpdateOperationsInput | null;
  teamIcon?: NullableStringFieldUpdateOperationsInput | null;
}

export interface Users_TeamUncheckedUpdateWithoutUsersInput {
  teamName?: StringFieldUpdateOperationsInput;
  teamType?: NullableStringFieldUpdateOperationsInput | null;
  teamIcon?: NullableStringFieldUpdateOperationsInput | null;
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
  calendars?: Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput;
  contacted?: Users_UserUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Users_UserUpdateManyWithoutContactedNestedInput;
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
  calendars?: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput;
  contacted?: Users_UserUncheckedUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Users_UserUncheckedUpdateManyWithoutContactedNestedInput;
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

export interface Users_CalendarCreateWithoutCalendarEventsInput {
  calendarType: string;
  users?: Users_CalendarsOnUsersCreateNestedManyWithoutCalendarInput;
}

export interface Users_CalendarUncheckedCreateWithoutCalendarEventsInput {
  id?: number;
  calendarType: string;
  users?: Users_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarInput;
}

export interface Users_CalendarCreateOrConnectWithoutCalendarEventsInput {
  where: Users_CalendarWhereUniqueInput;
  create: Users_CalendarUncheckedCreateWithoutCalendarEventsInput;
}

export interface Users_CalendarUpsertWithoutCalendarEventsInput {
  update: Users_CalendarUncheckedUpdateWithoutCalendarEventsInput;
  create: Users_CalendarUncheckedCreateWithoutCalendarEventsInput;
  where?: Users_CalendarWhereInput;
}

export interface Users_CalendarUpdateToOneWithWhereWithoutCalendarEventsInput {
  where?: Users_CalendarWhereInput;
  data: Users_CalendarUncheckedUpdateWithoutCalendarEventsInput;
}

export interface Users_CalendarUpdateWithoutCalendarEventsInput {
  calendarType?: StringFieldUpdateOperationsInput;
  users?: Users_CalendarsOnUsersUpdateManyWithoutCalendarNestedInput;
}

export interface Users_CalendarUncheckedUpdateWithoutCalendarEventsInput {
  id?: IntFieldUpdateOperationsInput;
  calendarType?: StringFieldUpdateOperationsInput;
  users?: Users_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarNestedInput;
}

export interface Users_UserCreateWithoutCalendarsInput {
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
  contacted?: Users_UserCreateNestedManyWithoutContactedByInput;
  contactedBy?: Users_UserCreateNestedManyWithoutContactedInput;
}

export interface Users_UserUncheckedCreateWithoutCalendarsInput {
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
  contacted?: Users_UserUncheckedCreateNestedManyWithoutContactedByInput;
  contactedBy?: Users_UserUncheckedCreateNestedManyWithoutContactedInput;
}

export interface Users_UserCreateOrConnectWithoutCalendarsInput {
  where: Users_UserWhereUniqueInput;
  create: Users_UserUncheckedCreateWithoutCalendarsInput;
}

export interface Users_CalendarCreateWithoutUsersInput {
  calendarType: string;
  calendarEvents?: Users_CalendarEventCreateNestedManyWithoutCalendarInput;
}

export interface Users_CalendarUncheckedCreateWithoutUsersInput {
  id?: number;
  calendarType: string;
  calendarEvents?: Users_CalendarEventUncheckedCreateNestedManyWithoutCalendarInput;
}

export interface Users_CalendarCreateOrConnectWithoutUsersInput {
  where: Users_CalendarWhereUniqueInput;
  create: Users_CalendarUncheckedCreateWithoutUsersInput;
}

export interface Users_UserUpsertWithoutCalendarsInput {
  update: Users_UserUncheckedUpdateWithoutCalendarsInput;
  create: Users_UserUncheckedCreateWithoutCalendarsInput;
  where?: Users_UserWhereInput;
}

export interface Users_UserUpdateToOneWithWhereWithoutCalendarsInput {
  where?: Users_UserWhereInput;
  data: Users_UserUncheckedUpdateWithoutCalendarsInput;
}

export interface Users_UserUpdateWithoutCalendarsInput {
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
  contacted?: Users_UserUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Users_UserUpdateManyWithoutContactedNestedInput;
}

export interface Users_UserUncheckedUpdateWithoutCalendarsInput {
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
  contacted?: Users_UserUncheckedUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Users_UserUncheckedUpdateManyWithoutContactedNestedInput;
}

export interface Users_CalendarUpsertWithoutUsersInput {
  update: Users_CalendarUncheckedUpdateWithoutUsersInput;
  create: Users_CalendarUncheckedCreateWithoutUsersInput;
  where?: Users_CalendarWhereInput;
}

export interface Users_CalendarUpdateToOneWithWhereWithoutUsersInput {
  where?: Users_CalendarWhereInput;
  data: Users_CalendarUncheckedUpdateWithoutUsersInput;
}

export interface Users_CalendarUpdateWithoutUsersInput {
  calendarType?: StringFieldUpdateOperationsInput;
  calendarEvents?: Users_CalendarEventUpdateManyWithoutCalendarNestedInput;
}

export interface Users_CalendarUncheckedUpdateWithoutUsersInput {
  id?: IntFieldUpdateOperationsInput;
  calendarType?: StringFieldUpdateOperationsInput;
  calendarEvents?: Users_CalendarEventUncheckedUpdateManyWithoutCalendarNestedInput;
}

export interface Users_CalendarsOnUsersCreateWithoutCalendarInput {
  user: Users_UserCreateNestedOneWithoutCalendarsInput;
}

export interface Users_CalendarsOnUsersUncheckedCreateWithoutCalendarInput {
  userId: number;
}

export interface Users_CalendarsOnUsersCreateOrConnectWithoutCalendarInput {
  where: Users_CalendarsOnUsersWhereUniqueInput;
  create: Users_CalendarsOnUsersUncheckedCreateWithoutCalendarInput;
}

export interface Users_CalendarsOnUsersCreateManyCalendarInputEnvelope {
  data: Users_CalendarsOnUsersCreateManyCalendarInput[];
  skipDuplicates?: boolean;
}

export interface Users_CalendarEventCreateWithoutCalendarInput {
  url?: string | null;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
}

export interface Users_CalendarEventUncheckedCreateWithoutCalendarInput {
  id?: number;
  url?: string | null;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
}

export interface Users_CalendarEventCreateOrConnectWithoutCalendarInput {
  where: Users_CalendarEventWhereUniqueInput;
  create: Users_CalendarEventUncheckedCreateWithoutCalendarInput;
}

export interface Users_CalendarEventCreateManyCalendarInputEnvelope {
  data: Users_CalendarEventCreateManyCalendarInput[];
  skipDuplicates?: boolean;
}

export interface Users_CalendarsOnUsersUpsertWithWhereUniqueWithoutCalendarInput {
  where: Users_CalendarsOnUsersWhereUniqueInput;
  update: Users_CalendarsOnUsersUncheckedUpdateWithoutCalendarInput;
  create: Users_CalendarsOnUsersUncheckedCreateWithoutCalendarInput;
}

export interface Users_CalendarsOnUsersUpdateWithWhereUniqueWithoutCalendarInput {
  where: Users_CalendarsOnUsersWhereUniqueInput;
  data: Users_CalendarsOnUsersUncheckedUpdateWithoutCalendarInput;
}

export interface Users_CalendarsOnUsersUpdateManyWithWhereWithoutCalendarInput {
  where: Users_CalendarsOnUsersScalarWhereInput;
  data: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUsersInput;
}

export interface Users_CalendarEventUpsertWithWhereUniqueWithoutCalendarInput {
  where: Users_CalendarEventWhereUniqueInput;
  update: Users_CalendarEventUncheckedUpdateWithoutCalendarInput;
  create: Users_CalendarEventUncheckedCreateWithoutCalendarInput;
}

export interface Users_CalendarEventUpdateWithWhereUniqueWithoutCalendarInput {
  where: Users_CalendarEventWhereUniqueInput;
  data: Users_CalendarEventUncheckedUpdateWithoutCalendarInput;
}

export interface Users_CalendarEventUpdateManyWithWhereWithoutCalendarInput {
  where: Users_CalendarEventScalarWhereInput;
  data: Users_CalendarEventUncheckedUpdateManyWithoutCalendarEventsInput;
}

export interface Users_CalendarEventScalarWhereInput {
  AND?: Users_CalendarEventScalarWhereInput[];
  OR?: Users_CalendarEventScalarWhereInput[];
  NOT?: Users_CalendarEventScalarWhereInput[];
  id?: IntFilter;
  url?: StringNullableFilter | null;
  title?: StringFilter;
  start?: DateTimeFilter;
  end?: DateTimeFilter;
  allDay?: BoolFilter;
  calendarId?: IntFilter;
}

export interface Users_UsersOnTeamsCreateManyUserInput {
  teamName: string;
  assignedAt?: Date;
}

export interface Users_CalendarsOnUsersCreateManyUserInput {
  calendarId: number;
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

export interface Users_CalendarsOnUsersUpdateWithoutUserInput {
  calendar?: Users_CalendarUpdateOneRequiredWithoutUsersNestedInput;
}

export interface Users_CalendarsOnUsersUncheckedUpdateWithoutUserInput {
  calendarId?: IntFieldUpdateOperationsInput;
}

export interface Users_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarsInput {
  calendarId?: IntFieldUpdateOperationsInput;
}

export interface Users_UserUpdateWithoutContactedByInput {
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
  calendars?: Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput;
  contacted?: Users_UserUpdateManyWithoutContactedByNestedInput;
}

export interface Users_UserUncheckedUpdateWithoutContactedByInput {
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
  calendars?: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput;
  contacted?: Users_UserUncheckedUpdateManyWithoutContactedByNestedInput;
}

export interface Users_UserUncheckedUpdateManyWithoutContactedInput {
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

export interface Users_UserUpdateWithoutContactedInput {
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
  calendars?: Users_CalendarsOnUsersUpdateManyWithoutUserNestedInput;
  contactedBy?: Users_UserUpdateManyWithoutContactedNestedInput;
}

export interface Users_UserUncheckedUpdateWithoutContactedInput {
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
  calendars?: Users_CalendarsOnUsersUncheckedUpdateManyWithoutUserNestedInput;
  contactedBy?: Users_UserUncheckedUpdateManyWithoutContactedNestedInput;
}

export interface Users_UserUncheckedUpdateManyWithoutContactedByInput {
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

export interface Users_CalendarsOnUsersCreateManyCalendarInput {
  userId: number;
}

export interface Users_CalendarEventCreateManyCalendarInput {
  id?: number;
  url?: string | null;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
}

export interface Users_CalendarsOnUsersUpdateWithoutCalendarInput {
  user?: Users_UserUpdateOneRequiredWithoutCalendarsNestedInput;
}

export interface Users_CalendarsOnUsersUncheckedUpdateWithoutCalendarInput {
  userId?: IntFieldUpdateOperationsInput;
}

export interface Users_CalendarsOnUsersUncheckedUpdateManyWithoutUsersInput {
  userId?: IntFieldUpdateOperationsInput;
}

export interface Users_CalendarEventUpdateWithoutCalendarInput {
  url?: NullableStringFieldUpdateOperationsInput | null;
  title?: StringFieldUpdateOperationsInput;
  start?: DateTimeFieldUpdateOperationsInput;
  end?: DateTimeFieldUpdateOperationsInput;
  allDay?: BoolFieldUpdateOperationsInput;
}

export interface Users_CalendarEventUncheckedUpdateWithoutCalendarInput {
  id?: IntFieldUpdateOperationsInput;
  url?: NullableStringFieldUpdateOperationsInput | null;
  title?: StringFieldUpdateOperationsInput;
  start?: DateTimeFieldUpdateOperationsInput;
  end?: DateTimeFieldUpdateOperationsInput;
  allDay?: BoolFieldUpdateOperationsInput;
}

export interface Users_CalendarEventUncheckedUpdateManyWithoutCalendarEventsInput {
  id?: IntFieldUpdateOperationsInput;
  url?: NullableStringFieldUpdateOperationsInput | null;
  title?: StringFieldUpdateOperationsInput;
  start?: DateTimeFieldUpdateOperationsInput;
  end?: DateTimeFieldUpdateOperationsInput;
  allDay?: BoolFieldUpdateOperationsInput;
}

export enum CalendarEventScalarFieldEnum {
  id = 'id',
  url = 'url',
  title = 'title',
  start = 'start',
  end = 'end',
  allDay = 'allDay',
  calendarId = 'calendarId',
}
export enum CalendarScalarFieldEnum {
  id = 'id',
  calendarType = 'calendarType',
}
export enum CalendarsOnUsersScalarFieldEnum {
  userId = 'userId',
  calendarId = 'calendarId',
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
  businessPhone = 'businessPhone',
  mobilePhone = 'mobilePhone',
  kakaoTalkId = 'kakaoTalkId',
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
  teamType = 'teamType',
  teamIcon = 'teamIcon',
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
  Users_CreateOneCalendarEvent: Users_CreateOneCalendarEventArgs;
  Users_UpsertOneCalendarEvent: Users_UpsertOneCalendarEventArgs;
  Users_CreateManyCalendarEvent: Users_CreateManyCalendarEventArgs;
  Users_DeleteOneCalendarEvent: Users_DeleteOneCalendarEventArgs;
  Users_UpdateOneCalendarEvent: Users_UpdateOneCalendarEventArgs;
  Users_DeleteManyCalendarEvent: Users_DeleteManyCalendarEventArgs;
  Users_CreateOneCalendarsOnUsers: Users_CreateOneCalendarsOnUsersArgs;
  Users_UpsertOneCalendarsOnUsers: Users_UpsertOneCalendarsOnUsersArgs;
  Users_CreateManyCalendarsOnUsers: Users_CreateManyCalendarsOnUsersArgs;
  Users_DeleteOneCalendarsOnUsers: Users_DeleteOneCalendarsOnUsersArgs;
  Users_UpdateOneCalendarsOnUsers: Users_UpdateOneCalendarsOnUsersArgs;
  Users_DeleteManyCalendarsOnUsers: Users_DeleteManyCalendarsOnUsersArgs;
  Users_CreateOneCalendar: Users_CreateOneCalendarArgs;
  Users_UpsertOneCalendar: Users_UpsertOneCalendarArgs;
  Users_CreateManyCalendar: Users_CreateManyCalendarArgs;
  Users_DeleteOneCalendar: Users_DeleteOneCalendarArgs;
  Users_UpdateOneCalendar: Users_UpdateOneCalendarArgs;
  Users_DeleteManyCalendar: Users_DeleteManyCalendarArgs;
}

export interface Users_TransactionalBatchMutationArgs {
  mutations: Users_TransactionalMutationInput[];
}

export interface TransactionSucceeded {
  transactionSucceeded: boolean;
}
