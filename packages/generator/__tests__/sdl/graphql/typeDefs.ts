import Calendar from './Calendar/typeDefs';
import CalendarsOnUsers from './CalendarsOnUsers/typeDefs';
import CalendarEvent from './CalendarEvent/typeDefs';
import Team from './Team/typeDefs';
import UsersOnTeams from './UsersOnTeams/typeDefs';
import Profile from './Profile/typeDefs';
import Product from './Product/typeDefs';
import Review from './Review/typeDefs';
import User from './User/typeDefs';
import { mergeTypeDefs } from '@graphql-tools/merge';
import SDLInputs from './sdl-inputs';

import typeDefsExtensions from './extended-typeDefs';

export default mergeTypeDefs([
  SDLInputs,
  typeDefsExtensions,
  User,
  Review,
  Product,
  ,
  Profile,
  UsersOnTeams,
  Team,
  ,
  CalendarEvent,
  CalendarsOnUsers,
  Calendar,
]);
