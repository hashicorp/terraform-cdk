import * as fs from 'fs-extra';
import * as path from 'path';
import { CodeMaker } from 'codemaker';
import { mkdtemp } from '../util';
import * as srcmak from 'jsii-srcmak';
import { TerraformProviderConstraint } from './generator/provider-generator';

export enum Language {
  TYPESCRIPT = 'typescript',
  PYTHON = 'python',
  CSHARP = 'csharp',
  JAVA = 'java',
}

export const LANGUAGES = [ Language.TYPESCRIPT, Language.PYTHON, Language.JAVA, Language.CSHARP ];

export interface GetOptions {
  readonly targetLanguage: Language;
  readonly codeMakerOutput: string;
  readonly targetNames: string[];
  readonly isModule?: boolean;

  /**
   * Path to copy the output .jsii file.
   * @default - jsii file is not emitted
   */
  readonly outputJsii?: string;
}

export abstract class GetBase {
  protected abstract async generateTypeScript(code: CodeMaker, targetNames: string[], output: string): Promise<void>;

  public async get(options: GetOptions) {
    const code = new CodeMaker();

    const { isModule = false } = options;
    const codeMakerOutdir = path.resolve(options.codeMakerOutput);
    await fs.mkdirp(codeMakerOutdir);
    const isTypescript = options.targetLanguage === Language.TYPESCRIPT
    await this.generateTypeScript(code, options.targetNames, codeMakerOutdir);

    if (isTypescript) {
      await code.save(codeMakerOutdir);
    }

    if (!isTypescript || options.outputJsii) {
      for (const name of options.targetNames) {
        const terraformProvider = new TerraformProviderConstraint(name)
        const source = isModule ? terraformProvider.fqn : terraformProvider.name;
        const providerPath = this.typesPath(source);
        const fileName = `${path.join(providerPath)}.ts`

        await mkdtemp(async staging => {

          // this is not typescript, so we generate in a staging directory and
          // use jsii-srcmak to compile and extract the language-specific source
          // into our project.
          await code.save(staging);

          // these are the module dependencies we compile against
          const deps = ['@types/node', 'constructs', 'cdktf'];

          const opts: srcmak.Options = {
            entrypoint: fileName,
            deps: deps.map(dep => path.dirname(require.resolve(`${dep}/package.json`))),
            moduleKey: source.replace(/\//gi, '_')
          };

          // used for testing.
          if (options.outputJsii) {
            opts.jsii = { path: options.outputJsii };
          }

          const cleanSource = GetBase.sanitizeSource(source, options.targetLanguage, isModule);

          // python!
          if (options.targetLanguage === Language.PYTHON) {
            opts.python = {
              outdir: codeMakerOutdir,
              moduleName: cleanSource
            };
          }

          // java
          if (options.targetLanguage === Language.JAVA) {
            opts.java = {
              outdir: '.', // generated java files aren't packaged, so just include directly in app
              package: `imports.${cleanSource}`
            }
          }

          // dotnet
          if (options.targetLanguage === Language.CSHARP) {
            opts.csharp = {
              outdir: codeMakerOutdir,
              namespace: cleanSource
            }
          }

          await srcmak.srcmak(staging, opts);
        });
      }
    }
  }

  private static sanitizeSource(source: string, language: Language, isModule: boolean): string {
    switch (language) {
      case Language.JAVA:
        // "null" is a reserved keyword and can't be used as a package name
        return !isModule && source === "null" ? "nullprovider" : GetBase.replaceSlashAndDash(source);
      case Language.CSHARP:
        // "null" is a reserved keyword and can't be used as a namespace
        return !isModule && source === "null" ? "Providers.Null" : GetBase.replaceSlashAndDash(source);
      case Language.PYTHON:
        return GetBase.replaceSlashAndDash(source);
      default:
        return source;
    }
  }

  private static replaceSlashAndDash(source: string): string {
    return source.replace(/\//gi, '.').replace(/-/gi, '_');
  }

  protected abstract typesPath(name: string): string;
}
