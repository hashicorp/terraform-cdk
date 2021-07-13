import * as fs from "fs-extra";
import * as path from "path";
import { CodeMaker } from "codemaker";
import { mkdtemp } from "../util";
import * as srcmak from "jsii-srcmak";
import {
  TerraformModuleConstraint,
  TerraformDependencyConstraint,
} from "../config";
import { ProviderSchema, readSchema } from "./generator/provider-schema";
import { TerraformProviderGenerator } from "./generator/provider-generator";
import { ModuleGenerator } from "./generator/module-generator";
import { ModuleSchema } from "./generator/module-schema";
import { versionNumber } from "../../bin/cmds/version-check";
import { ReportParams, ReportRequest } from "../checkpoint";
import { Errors } from "../errors";

const VERSION = versionNumber();

export enum Language {
  TYPESCRIPT = "typescript",
  PYTHON = "python",
  CSHARP = "csharp",
  JAVA = "java",
  GO = "go",
}

export const LANGUAGES = [
  Language.TYPESCRIPT,
  Language.PYTHON,
  Language.JAVA,
  Language.CSHARP,
  Language.GO,
];

export interface GetOptions {
  readonly targetLanguage: Language;
  readonly codeMakerOutput: string;
  /**
   * Path to copy the output .jsii file.
   * @default - jsii file is not emitted
   */
  readonly outputJsii?: string;
}

export abstract class ConstructsMakerTarget {
  public readonly fileName: string;

  constructor(
    public readonly constraint: TerraformDependencyConstraint,
    public readonly targetLanguage: Language
  ) {
    if (this.constraint instanceof TerraformModuleConstraint) {
      this.fileName = `${this.typesPath(this.constraint.fqn)}.ts`;
    } else {
      this.fileName = `${this.typesPath(this.constraint.name)}.ts`;
    }
  }

  public static from(
    constraint: TerraformDependencyConstraint,
    targetLanguage: Language
  ) {
    if (constraint instanceof TerraformModuleConstraint) {
      return new ConstructsMakerModuleTarget(constraint, targetLanguage);
    } else {
      return new ConstructsMakerProviderTarget(constraint, targetLanguage);
    }
  }

  public get version() {
    return this.constraint.version;
  }

  public get source() {
    return this.constraint.source;
  }

  public get name() {
    return this.constraint.name;
  }

  public get fqn() {
    return this.constraint.fqn;
  }

  public get namespace() {
    return this.constraint.namespace;
  }

  public get moduleKey() {
    return this.fqn.replace(/\//gi, "_");
  }

  public abstract get srcMakName(): string;
  public abstract get isModule(): boolean;
  public abstract get isProvider(): boolean;
  public abstract get trackingPayload(): Record<string, any>;
  protected abstract get simplifiedName(): string;

  protected abstract typesPath(name: string): string;
}

export class ConstructsMakerModuleTarget extends ConstructsMakerTarget {
  public spec?: ModuleSchema;

  public get isModule() {
    return true;
  }

  public get isProvider() {
    return false;
  }

  public get srcMakName(): string {
    switch (this.targetLanguage) {
      case Language.PYTHON:
      case Language.GO:
        return this.simplifiedName;
      case Language.JAVA:
      case Language.CSHARP:
      default:
        return this.constraint.fqn;
    }
  }

  public get trackingPayload() {
    return {
      name: this.name,
      fullName: this.source,
      version: this.version,
      type: "module",
    };
  }

  protected typesPath(name: string): string {
    return `modules/${name}`;
  }

  protected get simplifiedName(): string {
    return this.fqn.replace(/\//gi, ".").replace(/-/gi, "_");
  }
}

export class ConstructsMakerProviderTarget extends ConstructsMakerTarget {
  public spec?: ProviderSchema;

  public get isModule() {
    return false;
  }

  public get isProvider() {
    return true;
  }

  public get srcMakName(): string {
    switch (this.targetLanguage) {
      case Language.JAVA:
        // "null" is a reserved keyword and can't be used as a package name
        return this.isNullProvider ? "nullprovider" : this.simplifiedName;
      case Language.CSHARP:
        // "null" is a reserved keyword and can't be used as a namespace
        return this.isNullProvider ? "Providers.Null" : this.simplifiedName;
      case Language.PYTHON:
        return this.simplifiedName;
      case Language.GO:
        return this.name;
      default:
        return this.constraint.fqn;
    }
  }

  public get trackingPayload() {
    return {
      name: this.name,
      fullName: this.source,
      version: this.version,
      type: "provider",
    };
  }

  protected typesPath(name: string): string {
    return `providers/${name}/index`;
  }

  private get isNullProvider() {
    return this.constraint.name === "null";
  }

  protected get simplifiedName(): string {
    return this.name.replace(/\//gi, ".").replace(/-/gi, "_");
  }
}

export class ConstructsMaker {
  private readonly codeMakerOutdir: string;
  private readonly code: CodeMaker;
  private readonly targets: ConstructsMakerTarget[];

  constructor(
    private readonly options: GetOptions,
    private readonly constraints: TerraformDependencyConstraint[]
  ) {
    this.codeMakerOutdir = path.resolve(this.options.codeMakerOutput);
    fs.mkdirpSync(this.codeMakerOutdir);
    this.code = new CodeMaker();
    this.targets = this.constraints.map((constraint) =>
      ConstructsMakerTarget.from(constraint, this.options.targetLanguage)
    );
  }

  private async generateTypeScript() {
    const schema = await readSchema(this.targets);

    const moduleTargets: ConstructsMakerModuleTarget[] = this.targets.filter(
      (target) => target instanceof ConstructsMakerModuleTarget
    ) as ConstructsMakerModuleTarget[];
    for (const target of moduleTargets) {
      target.spec = schema.moduleSchema[target.moduleKey];
    }

    const providerTargets: ConstructsMakerProviderTarget[] =
      this.targets.filter(
        (target) => target instanceof ConstructsMakerProviderTarget
      ) as ConstructsMakerProviderTarget[];

    if (providerTargets.length > 0) {
      new TerraformProviderGenerator(
        this.code,
        schema.providerSchema,
        providerTargets
      );
    }

    if (moduleTargets.length > 0) {
      new ModuleGenerator(this.code, moduleTargets);
    }
  }

  public async generate() {
    await this.generateTypeScript();

    if (this.isJavascriptTarget) {
      await this.save();
    }

    if (!this.isJavascriptTarget || this.options.outputJsii) {
      for (const target of this.targets) {
        await mkdtemp(async (staging) => {
          // this is not typescript, so we generate in a staging directory and
          // use jsii-srcmak to compile and extract the language-specific source
          // into our project.
          await this.save(staging);

          // these are the module dependencies we compile against
          const deps = ["@types/node", "constructs", "cdktf"];

          const opts: srcmak.Options = {
            entrypoint: target.fileName,
            deps: deps.map((dep) =>
              path.dirname(require.resolve(`${dep}/package.json`))
            ),
            moduleKey: target.moduleKey,
          };

          // used for testing.
          if (this.options.outputJsii) {
            opts.jsii = { path: this.options.outputJsii };
          }

          if (this.isPythonTarget) {
            opts.python = {
              outdir: this.codeMakerOutdir,
              moduleName: target.srcMakName,
            };
          }

          if (this.isJavaTarget) {
            opts.java = {
              outdir: ".", // generated java files aren't packaged, so just include directly in app
              package: `imports.${target.srcMakName}`,
            };
          }

          if (this.isCsharpTarget) {
            opts.csharp = {
              outdir: this.codeMakerOutdir,
              namespace: target.srcMakName,
            };
          }

          if (this.isGoTarget) {
            // TODO: check if needed for modules somehow
            // const targetType = target.isProvider ? 'provider' : 'module';

            // jsii-srcmac will produce a folder inside this dir named after "packageName"
            // so this results in e.g. .gen/hashicorp/random
            const outdir = path.join(
              this.codeMakerOutdir,
              target.namespace ?? ""
            );

            opts.golang = {
              outdir,
              moduleName: await determineGoModuleName(outdir), // e.g. `github.com/org/userproject/.gen/hashicorp`
              packageName: target.srcMakName, // package will be named e.g. random for hashicorp/random
            };
          }

          if (
            process.env.NODE_OPTIONS &&
            !process.env.NODE_OPTIONS.includes(`--max-old-space-size`)
          ) {
            console.warn(`found NODE_OPTIONS environment variable without a setting for --max-old-space-size.
The provider generation needs a substantial amount of memory (~6-7GB) for some providers and languages.
So cdktf-cli sets it to NODE_OPTIONS="--max-old-space-size=8192" by default. As your environment already contains
a NODE_OPTIONS variable, we won't override it. Hence, the provider generation might fail with an out of memory error.`);
          } else {
            // increase memory to allow generating large providers (i.e. aws for Go)
            // srcmak is going to spawn a childprocess (for jsii-pacmak) which is going to be affected by this env var
            process.env.NODE_OPTIONS = "--max-old-space-size=8192";
          }

          await srcmak.srcmak(staging, opts);
        });
      }
    }

    for (const target of this.targets) {
      await report(target);
    }
  }

  private async save(outdir = this.codeMakerOutdir) {
    await this.code.save(outdir);
  }

  private get isJavascriptTarget() {
    return this.options.targetLanguage === Language.TYPESCRIPT;
  }

  private get isPythonTarget() {
    return this.options.targetLanguage === Language.PYTHON;
  }

  private get isJavaTarget() {
    return this.options.targetLanguage === Language.JAVA;
  }

  private get isCsharpTarget() {
    return this.options.targetLanguage === Language.CSHARP;
  }

  private get isGoTarget() {
    return this.options.targetLanguage === Language.GO;
  }
}

const report = async (target: ConstructsMakerTarget): Promise<void> => {
  const reportParams: ReportParams = {
    command: "get",
    product: "cdktf",
    version: VERSION,
    dateTime: new Date(),
    payload: target.trackingPayload,
    language: target.targetLanguage,
  };
  await ReportRequest(reportParams);
};

/**
 * searches for the closest `go.mod` file and returns the nested go module name for `dir`
 * e.g. (/dir/.gen/) => cdk.tf/stack/.gen if the parent dir of .gen has a go.mod for "module cdk.tf/stack"
 *
 * @param dir the directory to start the search from (searches upwards)
 * @returns the package name for `dir`
 * @throws an Error if no go.mod was found
 */
export const determineGoModuleName = async (dir: string): Promise<string> => {
  let previousDir;
  let currentDir = path.resolve(dir);

  do {
    let files: string[] = [];
    try {
      files = await fs.readdir(currentDir);
    } catch (e) {
      // directory might not exist yet, but we still walk upwards from there, so ignore 'ENOENT'
      if (e.code !== "ENOENT") {
        throw e;
      }
    }
    if (files.includes("go.mod")) {
      const file = path.resolve(currentDir, "go.mod");
      const gomod = await fs.readFile(file);
      const match = /^module\s*(\S*)\s*$/m.exec(gomod.toString());
      if (match && match[1]) {
        const childdir = path.relative(currentDir, dir).replace(/\\/g, "/"); // replace '\' with '/' for windows paths
        return childdir.length > 0 ? `${match[1]}/${childdir}` : match[1];
      }
      throw await Errors.Internal(
        "get",
        `Could not determine the root Go module name. Found ${file} but failed to regex match the module name directive`,
        { gomod }
      );
    }
    // go up one directory. As dirname('/') will return '/' we cancel the loop
    // as soon as the dir does not change anymore.
    previousDir = currentDir;
    currentDir = path.dirname(currentDir);
  } while (currentDir !== previousDir);

  throw await Errors.Usage(
    "get",
    `Could not determine the root Go module name. No go.mod found in ${dir} and any parent directories`,
    {}
  );
};
