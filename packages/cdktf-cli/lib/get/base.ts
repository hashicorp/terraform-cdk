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
  readonly targetLanguage: Language;
  readonly outdir: string;
  readonly targetNames: string[];
}

export abstract class GetBase {
  protected abstract async generateTypeScript(code: CodeMaker, targetNames: string[]): Promise<void>;

  public async get(options: GetOptions) {
    const code = new CodeMaker();

    const outdir = path.resolve(options.outdir);
    await fs.mkdirp(outdir);
    const isTypescript = options.targetLanguage === Language.TYPESCRIPT
    await this.generateTypeScript(code, options.targetNames);

    if (isTypescript) {
      await code.save(outdir);
      return
    }

    for (const name of options.targetNames) {
      // this is not typescript, so we generate in a staging directory and harvest the code
      await withTempDir('get', async () => {
        const [ source ] = name.split('@');
        await code.save('.');
        await jsiiCompile('.', {
          main: source,
          name: source,
          stdout: true
        });

        const pacmak = require.resolve('jsii-pacmak/bin/jsii-pacmak');
        await shell(pacmak, [ '--target', options.targetLanguage, '--code-only' ]);
        await this.harvestCode(options, outdir, name);
      });
    }
  }

  private async harvestCode(options: GetOptions, targetdir: string, targetName: string) {
    switch (options.targetLanguage) {
      case Language.TYPESCRIPT:
        throw new Error('no op for typescript');

      case Language.PYTHON:
        await this.harvestPython(targetdir, targetName);
        break;

      default:
        throw new Error(`unsupported language ${options.targetLanguage} (yet)`);
    }
  }

  private async harvestPython(targetdir: string, targetName: string) {
    const target = path.join(targetdir, targetName);
    await fs.move(`dist/python/src/${targetName}`, target, { overwrite: true });
  }
}
