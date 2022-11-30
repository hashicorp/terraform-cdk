// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs-extra";
import * as path from "path";
import { CodeMaker } from "codemaker";
import { mkdtemp } from "../util";
import * as srcmak from "jsii-srcmak";
import {
  TerraformModuleConstraint,
  TerraformDependencyConstraint,
  logger,
  logTimespan,
} from "@cdktf/commons";
import { DISPLAY_VERSION, Language } from "@cdktf/commons";
import {
  ProviderSchema,
  readProviderSchema,
  readModuleSchema,
} from "./generator/provider-schema";
import { TerraformProviderGenerator } from "./generator/provider-generator";
import { ModuleGenerator } from "./generator/module-generator";
import { ModuleSchema } from "./generator/module-schema";

export async function generateJsiiLanguage(
  code: CodeMaker,
  opts: srcmak.Options,
  outputPath: string
) {
  await mkdtemp(async (staging) => {
    // this is not typescript, so we generate in a staging directory and
    // use jsii-srcmak to compile and extract the language-specific source
    // into our project.
    await code.save(staging);
    await srcmak.srcmak(staging, opts);
    ["versions.json", "constraints.json"].forEach((file) => {
      try {
        fs.copySync(
          path.resolve(staging, file),
          path.resolve(outputPath, file)
        );
      } catch (e) {
        logger.debug(`Failed to copy ${file}: ${e}`);
      }
    });
  });
}

type ConstraintFile = { providers: Record<string, string>; cdktf: string };

export interface GetOptions {
  readonly targetLanguage: Language;
  readonly codeMakerOutput: string;
  readonly jsiiParallelism?: number;
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
      this.fileName = `${this.typesPath(this.constraint.fileName)}.ts`;
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
      case Language.GO:
        return this.name.replace(/-/gi, "_");
      case Language.JAVA:
      case Language.CSHARP:
      case Language.PYTHON:
      default:
        return this.simplifiedName;
    }
  }

  public get trackingPayload() {
    return {
      name: this.name,
      fullName: this.fqn,
      version: this.version,
      type: "module",
    };
  }

  protected typesPath(name: string): string {
    return `modules/${name}`;
  }

  protected get simplifiedName(): string {
    return (
      this.namespace?.replace(/\//gi, ".").replace(/-/gi, "_") ?? this.name
    );
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
        return this.name.replace(/-/gi, "_");
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
  private versions: { [providerName: string]: string | undefined };

  constructor(
    private readonly options: GetOptions,
    private readonly reportTelemetry: (params: any) => void = () => {}
  ) {
    this.codeMakerOutdir = path.resolve(this.options.codeMakerOutput);
    fs.mkdirpSync(this.codeMakerOutdir);
    this.code = new CodeMaker();
    this.versions = {};
  }
  private async generateTypescriptProvider(
    target: ConstructsMakerProviderTarget
  ) {
    const endSchemaReadTimer = logTimespan(`Reading Schema for ${target.name}`);
    const schema = await readProviderSchema(target);
    endSchemaReadTimer();

    const endTSTimer = logTimespan(`Generate Typescript for ${target.name}`);
    const generator = new TerraformProviderGenerator(this.code, schema);
    generator.generate(target);

    this.versions = { ...this.versions, ...generator.versions };
    endTSTimer();
  }

  public async filterAlreadyGenerated(
    constraints: TerraformDependencyConstraint[]
  ) {
    let constraintsFile = "{}";
    try {
      constraintsFile = await fs.readFile(
        path.join(this.codeMakerOutdir, "constraints.json"),
        "utf8"
      );
    } catch (e) {
      logger.info(
        `Could not find constraints.json file while filtering: ${e}. This means no providers were generated, so all constraints need to be generated.`
      );
      return constraints;
    }
    logger.debug(`Found constraints.json file: ${constraintsFile}`);

    let previousConstraints: Partial<ConstraintFile> = {};
    try {
      previousConstraints = JSON.parse(constraintsFile);
    } catch (e) {
      logger.info(
        `Could not parse constraints.json file while filtering: ${e}. Generating all constraints.`
      );
      return constraints;
    }

    logger.debug(
      `Found previous constraints: ${JSON.stringify(
        previousConstraints,
        null,
        2
      )}`
    );

    if (
      !previousConstraints.providers ||
      typeof previousConstraints.providers !== "object"
    ) {
      logger.info(
        `Could not find providers in constraints.json file, generating all constraints. The constraints file was ${JSON.stringify(
          previousConstraints,
          null,
          2
        )}`
      );
      return constraints;
    }

    if (previousConstraints.cdktf !== DISPLAY_VERSION) {
      logger.info(
        `The CDKTF version has changed, generating all constraints. The previous version was ${previousConstraints.cdktf}, the current version is ${DISPLAY_VERSION}`
      );
      return constraints;
    }

    const constraintsToGenerate = constraints.filter((constraint) => {
      const constraintMatches =
        previousConstraints.providers![constraint.fqn] === constraint.version;
      let providerFolderExists = false;

      switch (this.options.targetLanguage) {
        case Language.TYPESCRIPT:
          providerFolderExists = fs.existsSync(
            path.join(this.codeMakerOutdir, "providers", constraint.name)
          );
          break;
        case Language.PYTHON:
        case Language.JAVA:
        case Language.CSHARP:
          providerFolderExists = fs.existsSync(
            path.join(this.codeMakerOutdir, constraint.name)
          );
          break;
        case Language.GO:
          providerFolderExists = fs.existsSync(
            path.join(
              this.codeMakerOutdir,
              constraint.namespace || "hashicorp",
              constraint.name
            )
          );
          break;
      }

      const providerExists = constraintMatches && providerFolderExists;
      return !providerExists;
    });

    logger.debug(
      `Constraints to generate: ${JSON.stringify(
        constraintsToGenerate,
        null,
        2
      )}`
    );

    return constraintsToGenerate;
  }

  private async generateTypescriptModule(target: ConstructsMakerModuleTarget) {
    const endSchemaReadTimer = logTimespan(`Reading Schema for ${target.name}`);
    const schema = await readModuleSchema(target);
    endSchemaReadTimer();

    const endTSTimer = logTimespan(`Generate Typescript for ${target.name}`);
    target.spec = schema[target.moduleKey];
    new ModuleGenerator(this.code, [target]);
    endTSTimer();
  }

  private async generateTypescript(target: ConstructsMakerTarget) {
    if (target.isModule) {
      await this.generateTypescriptModule(
        target as ConstructsMakerModuleTarget
      );
    } else if (target.isProvider) {
      await this.generateTypescriptProvider(
        target as ConstructsMakerProviderTarget
      );
    } else {
      throw new Error(
        `Unknown target type used to generate bindings: ${target.name}`
      );
    }
  }

  // emits a versions.json file with a map of the used version for each provider fqpn
  private updateVersionsFile(
    allowedConstraints: TerraformDependencyConstraint[]
  ) {
    logger.debug(
      `Updating versions file with generated versions ${JSON.stringify(
        this.versions,
        null,
        2
      )} with allowed constraints ${JSON.stringify(
        allowedConstraints,
        null,
        2
      )}`
    );
    const filePath = "versions.json";
    let previousVersions: Record<string, string> = {};
    try {
      previousVersions = JSON.parse(
        fs.readFileSync(path.resolve(this.codeMakerOutdir, filePath), "utf8")
      );

      logger.debug(
        `Read existing versions file: ${JSON.stringify(
          previousVersions,
          null,
          2
        )}`
      );
    } catch (e) {
      // ignore
      logger.debug(
        `Could not read versions file, this is expected if there are no pre-existing local providers: ${e}`
      );
    }

    const versions = allowedConstraints.reduce((acc, constraint) => {
      const provider = Object.entries(previousVersions).find(([name]) =>
        // This could be more refined, but it's good enough for now
        name.endsWith(constraint.fqn)
      );

      if (provider) {
        const [name, version] = provider;
        return { ...acc, [name]: version };
      }

      return acc;
    }, {});

    logger.debug(
      `Writing versions file (${filePath}): ${JSON.stringify(
        versions,
        null,
        2
      )}`
    );

    this.code.openFile(filePath);
    this.code.line(JSON.stringify({ ...versions, ...this.versions }, null, 2));
    this.code.closeFile(filePath);
    return filePath;
  }

  public async removeFoldersThatShouldNotExist(
    constraintsThatShouldExist: TerraformDependencyConstraint[]
  ) {
    logger.debug(
      `Removing providers except for ${JSON.stringify(
        constraintsThatShouldExist,
        null,
        2
      )}`
    );

    // All languages besides TS keep their providers in the same folders as modules
    // this makes it impossible for us to distinguish a no longer required provider
    // from a manually written construct or a module
    if (!this.isJavascriptTarget) {
      return;
    }

    let filesInProviders: string[] = [];
    const providersFolder = path.resolve(this.codeMakerOutdir, "providers");
    try {
      filesInProviders = await fs.readdir(providersFolder);
    } catch (e) {
      logger.debug(
        `Error listing files in providers folder '${providersFolder}': ${e}`
      );
    }

    const folders = filesInProviders.filter((file) =>
      fs
        .statSync(path.resolve(this.codeMakerOutdir, "providers", file))
        .isDirectory()
    );

    return folders.forEach((folder) => {
      const shouldExist = constraintsThatShouldExist.some(
        (constraint) => constraint.name === folder
      );

      if (!shouldExist) {
        logger.debug(`Removing folder ${folder} from providers`);
        fs.removeSync(path.resolve(this.codeMakerOutdir, "providers", folder));
      }
    });
  }

  // emits a constraints.json file with a map of the used provider fqpns and version constraints
  // this is used for caching purposes
  private emitConstraintsFile(
    allowedConstraints: TerraformDependencyConstraint[]
  ) {
    const filePath = "constraints.json";

    const content: ConstraintFile = {
      cdktf: DISPLAY_VERSION,
      providers: allowedConstraints
        .sort((a, b) => a.fqn.localeCompare(b.fqn))
        .reduce(
          (carry, item) => ({
            ...carry,
            [item.fqn]: item.version,
          }),
          {}
        ),
    };

    this.code.openFile(filePath);
    this.code.line(JSON.stringify(content, null, 2));
    this.code.closeFile(filePath);
    return filePath;
  }

  private async generateJsiiLanguage(target: ConstructsMakerTarget) {
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
      const outdir = path.join(this.codeMakerOutdir, target.namespace ?? "");

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
      logger.warn(`found NODE_OPTIONS environment variable without a setting for --max-old-space-size.
The provider generation needs a substantial amount of memory (~13GB) for some providers and languages.
So cdktf-cli sets it to NODE_OPTIONS="--max-old-space-size=16384" by default. As your environment already contains
a NODE_OPTIONS variable, we won't override it. Hence, the provider generation might fail with an out of memory error.`);
    } else {
      // increase memory to allow generating large providers (i.e. aws or azurerm for Go)
      // srcmak is going to spawn a childprocess (for jsii-pacmak) which is going to be affected by this env var
      process.env.NODE_OPTIONS = "--max-old-space-size=16384";
    }

    const jsiiTimer = logTimespan("JSII");
    await generateJsiiLanguage(this.code, opts, this.codeMakerOutdir);
    jsiiTimer();
  }

  public async generate(
    allConstraints: TerraformDependencyConstraint[],
    constraintsToGenerate = allConstraints
  ) {
    const targets = constraintsToGenerate.map((constraint) =>
      ConstructsMakerTarget.from(constraint, this.options.targetLanguage)
    );
    const endGenerateTimer = logTimespan("Generate TS");
    await Promise.all(targets.map((target) => this.generateTypescript(target)));
    endGenerateTimer();

    this.updateVersionsFile(allConstraints);
    this.emitConstraintsFile(allConstraints);

    if (this.isJavascriptTarget) {
      await this.save();
    }

    if (!this.isJavascriptTarget || this.options.outputJsii) {
      const numberOfWorkers = Math.max(
        1,
        this.options.jsiiParallelism === -1
          ? targets.length
          : this.options.jsiiParallelism || 1
      );

      const work = [...targets];
      const workers = new Array(numberOfWorkers).fill(async () => {
        let target: ConstructsMakerTarget | undefined;
        while ((target = work.pop())) {
          const endJsiiTarget = logTimespan(
            `Generating JSII bindings for ${target.name}`
          );
          await this.generateJsiiLanguage(target);
          endJsiiTarget();
        }
      });

      await Promise.all(workers.map((fn) => fn()));
    }

    for (const target of targets) {
      await this.reportTelemetry({
        payload: target.trackingPayload,
        language: target.targetLanguage,
      });
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
      throw new Error(
        `Could not determine the root Go module name. Found ${file} but failed to regex match the module name directive`
      );
    }
    // go up one directory. As dirname('/') will return '/' we cancel the loop
    // as soon as the dir does not change anymore.
    previousDir = currentDir;
    currentDir = path.dirname(currentDir);
  } while (currentDir !== previousDir);

  throw new Error(
    `Could not determine the root Go module name. No go.mod found in ${dir} and any parent directories`
  );
};
