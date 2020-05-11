import { ModuleGenerator } from './generator/module-generator';
import { getModule } from './registry-client';
import { CodeMaker } from 'codemaker';
import { GetBase } from './base'

export class GetModule extends GetBase {
  protected async generateTypeScript(code: CodeMaker, modules: string[]): Promise<void> {
    for (const module of modules) {
      const [ source, version ] = module.split('@');

      const spec = await getModule(source, version);
      new ModuleGenerator(code, spec);
    }
  }

  protected typesPath(name: string): string {
    return `modules/${name}`;
  }
}