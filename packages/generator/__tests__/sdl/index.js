const { join } = require('path');
const { Generator } = require('../../dist/index.cjs');


async function main() {
  try {
    
    const generator = new Generator(
      {
        name: 'sdl',
        schemaPath: './schema.prisma',
        
      },
      { 
        output: join(process.cwd(), './graphql'),
        federation: "Users"
      },
    );
    let dmmf = await generator.run();
    
    //console.log(dmmf);
    //console.table(dmmf.schema.inputObjectTypes.prisma);
    //console.log(dmmf.schema.outputObjectTypes.prisma);
    //console.log(dmmf.mappings.modelOperations);
    
  } catch (error) {
    console.log(error);
  }
}
main();
