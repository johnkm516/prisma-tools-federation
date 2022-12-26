import { GenerateNexusPrismaPlugin } from './nexus-prisma-plugin';
import { GeneratorsType, Options } from '@paljs/types';
import { GenerateSdl } from './sdl';
import { GenerateModules } from './graphql-modules';

export class Generator {
  generators: {
    [key in GeneratorsType]:
      | GenerateSdl
      | GenerateModules
      | GenerateNexusPrismaPlugin;
  };

  constructor(
    private generator: { name: GeneratorsType; schemaPath: string },
    private options?: Partial<Options>,
  ) {
    this.generators = {
      sdl: new GenerateSdl(this.generator.schemaPath, this.options),
      'graphql-modules': new GenerateModules(
        this.generator.schemaPath,
        this.options,
      ),
      'nexus-plugin-prisma': new GenerateNexusPrismaPlugin(
        this.generator.schemaPath,
        this.options,
      ),
    };
  }

  async run() {
    if (this.generators[this.generator.name]) {
      return await this.generators[this.generator.name].run();
    } else {
      console.error(
        `Your generator name: "${this.generator.name}" not correct.\nPlease use one of this`,
        Object.keys(this.generators),
      );
    }
    return undefined;
  }
}
