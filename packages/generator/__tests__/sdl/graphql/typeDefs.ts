import Product from './Product/typeDefs';
import Review from './Review/typeDefs';
import User from './User/typeDefs';
import { mergeTypeDefs } from '@graphql-tools/merge';
import SDLInputs from './sdl-inputs';

export default mergeTypeDefs([SDLInputs, User, Review, Product]);
