import { wrapSchema, RenameTypes, RenameRootFields } from '@graphql-tools/wrap';
import { GraphQLSchema } from 'graphql';

export const modelNames = ['User', 'Review', 'Product'];

//This subgraph's name is set to "Users".
//Input type args is modified to be preceded by "Users_" because inputs are merged using the intersection strategy in the current version of Apollo Federation and directives are not supported with input types.
export const renamedInputTypesSchema = async (schema: GraphQLSchema) => {
  const typeMap = schema.getTypeMap();
  const models: string = modelNames.join('|');
  const inputTypes = Object.keys(typeMap).filter((type) => {
    const inputTypesRegex = new RegExp(
      `(${models})(WhereInput|OrderByWithRelationInput|WhereUniqueInput|OrderByWithAggregationInput|ScalarWhereWithAggregatesInput|CreateInput|UncheckedCreateInput|UpdateInput|UncheckedUpdateInput|CreateManyInput|UpdateManyMutationInput|UncheckedUpdateManyInput|CountOrderByAggregateInput|AvgOrderByAggregateInput|MaxOrderByAggregateInput|MinOrderByAggregateInput|SumOrderByAggregateInput|Create.*?Input|Update.*?Input|Unchecked.*?Input)`,
    );
    return type.match(inputTypesRegex)?.input;
  });

  return wrapSchema({
    schema: schema,
    transforms: [
      new RenameTypes((name) =>
        inputTypes.includes(name) ? `Users_${name}` : name,
      ),
      new RenameRootFields((operation, fieldName) =>
        (operation == 'Query' || operation == 'Mutation') &&
        fieldName != '_entities' &&
        fieldName != '_service' &&
        fieldName != 'sampleUpload' &&
        fieldName != 'sampleUploadMany'
          ? `Product_${fieldName}`
          : fieldName,
      ),
    ],
  });
};
