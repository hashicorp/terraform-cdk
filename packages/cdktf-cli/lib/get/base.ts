import * as fs from 'fs-extra';
import * as path from 'path';
import { CodeMaker } from 'codemaker';
import { withTempDir, shell } from '../util';
import { jsiiCompile } from './jsii';

export enum Language {
  TYPESCRIPT = 'typescript',
  PYTHON = 'python',
  DOTNET = 'dotnet',
  JAVA = 'java',
}

export const LANGUAGES = [ Language.TYPESCRIPT, Language.PYTHON ];

export interface GetOptions {
  readonly moduleNamePrefix?: string;
  readonly targetLanguage: Language;
  readonly outdir: string;
  readonly moduleNames: string[];
}

export abstract class GetBase {
  protected abstract async generateTypeScript(code: CodeMaker, moduleName: string[]): Promise<void>;

  public async get(options: GetOptions) {
    const code = new CodeMaker();

    const outdir = path.resolve(options.outdir);
    await fs.mkdirp(outdir);
    const isTypescript = options.targetLanguage === Language.TYPESCRIPT
    await this.generateTypeScript(code, options.moduleNames);

    if (isTypescript) {
      await code.save(outdir);
      return
    }

    for (const name of options.moduleNames) {
      // this is not typescript, so we generate in a staging directory and harvest the code
      await withTempDir('get', async () => {
        await code.save('.');
        await jsiiCompile('.', {
          main: name,
          name,
        });

        const pacmak = require.resolve('jsii-pacmak/bin/jsii-pacmak');
        await shell(pacmak, [ '--target', options.targetLanguage, '--code-only' ]);
        await this.harvestCode(options, outdir, name);
      });
    }
  }

  private async harvestCode(options: GetOptions, targetdir: string, moduleName: string) {
    const { moduleNamePrefix } = options
    switch (options.targetLanguage) {
      case Language.TYPESCRIPT:
        throw new Error('no op for typescript');

      case Language.PYTHON:
        if (moduleNamePrefix != null) {
          // logging error instead of throwing, so it doesn't interrupt other imports
          console.error(`Name overriding of imports is not yet supported in python. Named import: ${moduleNamePrefix}`);
          break;
        }
        await this.harvestPython(targetdir, moduleName);
        break;

      default:
        throw new Error(`unsupported language ${options.targetLanguage} (yet)`);
    }
  }

  private async harvestPython(targetdir: string, moduleName: string) {
    const target = path.join(targetdir, moduleName);
    await fs.move(`dist/python/src/${moduleName}`, target, { overwrite: true });
  }
}
