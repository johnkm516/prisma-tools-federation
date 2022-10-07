import User from './User/typeDefs';
import Product from './Product/typeDefs';
import { mergeTypeDefs } from '@graphql-tools/merge';
import SDLInputs from './sdl-inputs';

export default mergeTypeDefs([SDLInputs, Product, User]);
