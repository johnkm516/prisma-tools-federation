import Order from './Order/resolvers';
import CalendarEventsOnCalendars from './CalendarEventsOnCalendars/resolvers';
import Calendar from './Calendar/resolvers';
import CalendarsOnUsers from './CalendarsOnUsers/resolvers';
import CalendarEvent from './CalendarEvent/resolvers';
import Team from './Team/resolvers';
import UsersOnTeams from './UsersOnTeams/resolvers';
import Profile from './Profile/resolvers';
import TransactionalBatchMutation from './extended-resolvers';
import Product from './Product/resolvers';
import Review from './Review/resolvers';
import User from './User/resolvers';
export default [
  User,
  Review,
  Product,
  TransactionalBatchMutation,
  Profile,
  UsersOnTeams,
  Team,
  ,
  CalendarEvent,
  CalendarsOnUsers,
  Calendar,
  ,
  CalendarEventsOnCalendars,
  ,
  Order,
];
