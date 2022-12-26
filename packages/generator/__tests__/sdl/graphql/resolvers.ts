import Product from './Product/resolvers';
import Review from './Review/resolvers';
import User from './User/resolvers';
import TransactionalBatchMutation from './extended-resolvers';
export default [User, Review, Product, TransactionalBatchMutation];
