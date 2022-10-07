import Group from './Group/typeDefs';
import Comment from './Comment/typeDefs';
import Post from './Post/typeDefs';
import User from './User/typeDefs';
import Apple from './Apple/typeDefs';
import { mergeTypeDefs } from '@graphql-tools/merge';
import SDLInputs from './sdl-inputs';

export default mergeTypeDefs([SDLInputs, Apple, User, Post, Comment, Group]);
