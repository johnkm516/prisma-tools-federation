import { wrapSchema, RenameTypes } from '@graphql-tools/wrap';
import { GraphQLSchema } from 'graphql';

export const modelNames = ['Apple', 'User', 'Post', 'Comment', 'Group'];

export function checkIfStringStartsWithAny(
  compareString: string,
  listOfSubstrings: string[],
) {
  return listOfSubstrings.some((substr) => compareString.startsWith(substr));
}

//This subgraph's name is set to "Users".
//Input type args is modified to be preceded by "Users_" because inputs are merged using the intersection strategy in the current version of Apollo Federation and directives are not supported with input types.
export const renamedInputTypesSchema = async (schema: GraphQLSchema) => {
  const typeMap = schema.getTypeMap();
  const inputTypes = Object.keys(typeMap).filter((type) => {
    return (
      type.endsWith('Input') && checkIfStringStartsWithAny(type, modelNames)
    );
  });

  return wrapSchema({
    schema: schema,
    transforms: [
      new RenameTypes((name) =>
        inputTypes.includes(name) ? `Users_${name}` : name,
      ),
    ],
  });
};
