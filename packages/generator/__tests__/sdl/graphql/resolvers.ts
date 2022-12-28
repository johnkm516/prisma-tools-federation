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
];
