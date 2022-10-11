import CategoriesOnPosts from './CategoriesOnPosts/typeDefs';
import Category from './Category/typeDefs';
import Post from './Post/typeDefs';
import User from './User/typeDefs';
import Product from './Product/typeDefs';
import { mergeTypeDefs } from '@graphql-tools/merge';
import SDLInputs from './sdl-inputs';

export default mergeTypeDefs([
  SDLInputs,
  Product,
  User,
  Post,
  Category,
  CategoriesOnPosts,
]);
