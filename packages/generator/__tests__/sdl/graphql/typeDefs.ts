import Cart from './Cart/typeDefs';
import Group from './Group/typeDefs';
import Comment from './Comment/typeDefs';
import Post from './Post/typeDefs';
import User from './User/typeDefs';
import Apple from './Apple/typeDefs';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { sdlInputs } from '@paljs/plugins';

export default mergeTypeDefs([
  sdlInputs(),
  Apple,
  User,
  Post,
  Comment,
  Group,
  Cart,
]);
