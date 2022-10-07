export const modelNamesExport = (modelNames: string[], federation?: string) => {
  let fileContent: string = `import { wrapSchema, RenameTypes } from '@graphql-tools/wrap'\nimport { GraphQLSchema } from 'graphql';\n\nexport const modelNames = [`;
  fileContent += modelNames
    .map((model) => {
      return `"${model}"`;
    })
    .join(`, `);
  fileContent += `];\n\n`;
  fileContent += `export function checkIfStringStartsWithAny(compareString: string, listOfSubstrings: string[]) {
    return listOfSubstrings.some(substr => compareString.startsWith(substr));
}\n\n`;

  if (federation) {
    fileContent += `//This subgraph's name is set to "${federation}". 
//Input type args is modified to be preceded by "${federation}_" because inputs are merged using the intersection strategy in the current version of Apollo Federation and directives are not supported with input types.
export const renamedInputTypesSchema = async (schema: GraphQLSchema) => {
    const typeMap = schema.getTypeMap();
    const inputTypes = Object.keys(typeMap).filter(type => {
    return type.endsWith("Input") && checkIfStringStartsWithAny(type, modelNames);
    });

    return wrapSchema({
        schema: schema,
        transforms: [
            new RenameTypes(
                name => inputTypes.includes(name) ? \`${federation}_\${name}\` : name
            )
        ]
    });
};`;
  } else {
    fileContent += `//No input types are renamed because federation option for paljs/generator is not set!\nexport const renamedInputTypesSchema = async (schema: GraphQLSchema) => { return schema }`;
  }

  return fileContent;
};

/*
import { wrapSchema, RenameTypes } from '@graphql-tools/wrap'
import { GraphQLSchema } from 'graphql';
  

export const modelNames = ["Product"];
export function checkIfStringStartsWithAny(compareString: string, listOfSubstrings: string[]) {
  return listOfSubstrings.some(substr => compareString.startsWith(substr));
}

export const renamedInputTypesSchema = async (schema: GraphQLSchema) => {
    const typeMap = schema.getTypeMap();
    const inputTypes = Object.keys(typeMap).filter(type => {
      return type.endsWith("Input") && checkIfStringStartsWithAny(type, modelNames);
    });
    console.log(inputTypes);

    return wrapSchema({
        schema: schema,
        transforms: [
            new RenameTypes(
                name => inputTypes.includes(name) ? `Product_${name}` : name
              )
        ]
    });
}*/
