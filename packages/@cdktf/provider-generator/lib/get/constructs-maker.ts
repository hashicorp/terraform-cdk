// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs-extra";
import * as path from "path";
import { CodeMaker } from "codemaker";
import { exec, mkdtemp } from "@cdktf/commons";
import {
  TerraformDependencyConstraint,
  logger,
  logTimespan,
  ConstructsMakerProviderTarget,
  ConstructsMakerModuleTarget,
  ConstructsMakerTarget,
  ProviderSchema,
  ModuleSchema,
  Errors,
} from "@cdktf/commons";
import { DISPLAY_VERSION, Language } from "@cdktf/commons";
import { TerraformProviderGenerator } from "./generator/provider-generator";
import { ModuleGenerator } from "./generator/module-generator";
import { glob } from "glob";
import { readSchema } from "@cdktf/provider-schema";

const pacmakModule = require.resolve("jsii-pacmak/bin/jsii-pacmak");
const jsiiModule = require.resolve("jsii/bin/jsii");

export interface GenerateJSIIOptions {
  entrypoint: string;
  deps: string[];
  moduleKey: string;
  exports?: Record<string, ExportDefinition | string>;
  jsii?: JsiiOutputOptions;
  python?: PythonOutputOptions;
  java?: JavaOutputOptions;
  csharp?: CSharpOutputOptions;
  golang?: GoLangOutputOptions;
}

export interface JsiiOutputOptions {
  path: string;
}

export interface PythonOutputOptions {
  outdir: string;
  moduleName: string;
}

export interface JavaOutputOptions {
  outdir: string;
  package: string;
}

export interface CSharpOutputOptions {
  outdir: string;
  namespace: string;
}

export interface GoLangOutputOptions {
  outdir: string;
  moduleName: string;
  packageName: string;
}

/**
 * See https://nodejs.org/api/packages.html#conditional-exports for more information
 */
export interface ExportDefinition {
  node?: string;
  import?: string;
  require?: string;
  default?: string;
}

export async function generateJsiiLanguage(
  code: CodeMaker,
  opts: GenerateJSIIOptions,
  outputPath: string,
  disallowedFileGlobs: string[] = [],
) {
  await mkdtemp(async (staging) => {
    // this is not typescript, so we generate in a staging directory and
    // use jsii-srcmak to compile and extract the language-specific source
    // into our project.
    await code.save(staging);

    // as the above generated the Typescript code for all providers and modules,
    // we need to filter out the ones we don't need so they don't end up in the JSII bundle over and over again.
    const filesToDelete = disallowedFileGlobs.flatMap((pattern) =>
      glob.sync(pattern, { cwd: staging }),
    );
    await Promise.all(
      filesToDelete.map((file) => fs.remove(path.join(staging, file))),
    );

    // Compile with JSII
    const jsiiArgs = ["--silence-warnings", "reserved-word"];
    const jsiiEntrypoint = opts.entrypoint;
    const basepath = path.join(
      path.dirname(jsiiEntrypoint),
      path.basename(jsiiEntrypoint, ".ts"),
    );

    const moduleKey = opts.moduleKey.replace(/\./g, "").replace(/\//g, "");
    const moduleDirs = opts.deps;
    const targets: Record<string, any> = {};
    const deps: Record<string, string> = {};
    for (const dir of moduleDirs) {
      // read module metadata
      const metadata = await fs.readJson(path.join(dir, "package.json"));
      const moduleName: string = metadata.name;
      const moduleVersion: string = metadata.version;

      const targetdir = path.join(
        path.join(staging, "node_modules"),
        moduleName,
      );
      await fs.mkdirp(path.dirname(targetdir));
      await fs.copy(dir, targetdir);

      // add to "deps" and "peer deps"
      if (!moduleName.startsWith("@types/")) {
        deps[moduleName] = moduleVersion;
      }
    }
    const pkg = {
      name: moduleKey,
      version: "0.0.0",
      author: "generated@generated.com",
      main: `${basepath}.js`,
      types: `${basepath}.d.ts`,
      license: "UNLICENSED",
      repository: { url: "http://generated", type: "git" },
      jsii: {
        outdir: "dist",
        targets: targets,
      },
      dependencies: deps,
      peerDependencies: deps,
    };

    if (opts.exports) {
      (pkg as Record<string, any>).exports = opts.exports;
    }
    if (opts.python) {
      targets.python = {
        distName: "generated",
        module: opts.python.moduleName,
      };
    }

    if (opts.java) {
      targets.java = {
        package: opts.java.package,
        maven: {
          groupId: "generated",
          artifactId: "generated",
        },
      };
    }

    if (opts.csharp) {
      targets.dotnet = {
        namespace: opts.csharp.namespace,
        packageId: opts.csharp.namespace,
      };
    }

    if (opts.golang) {
      targets.go = {
        moduleName: opts.golang.moduleName,
        packageName: opts.golang.packageName,
      };
    }

    await fs.writeFile(
      path.join(staging, "package.json"),
      JSON.stringify(pkg, undefined, 2),
    );

    const endJsiiTimer = logTimespan("jsii");
    await exec(jsiiModule, jsiiArgs, {
      cwd: staging,
    });
    endJsiiTimer();

    // extract .jsii if requested
    if (opts.jsii) {
      await fs.copy(path.join(staging, ".jsii"), opts.jsii.path);
    }

    // run pacmak to generate code
    const endJsiiPacmakTimer = logTimespan("jsii-pacmak");
    await exec(pacmakModule, ["--code-only"], { cwd: staging });
    endJsiiPacmakTimer();

    if (opts.python) {
      const reldir = opts.python.moduleName.replace(/\./g, "/"); // jsii replaces "." with "/"
      const source = path.resolve(
        path.join(staging, "dist/python/src", reldir),
      );
      const target = path.join(opts.python.outdir, reldir);
      await fs.move(source, target, { overwrite: true });
    }

    if (opts.java) {
      const source = path.resolve(path.join(staging, "dist/java/src/"));
      const target = path.join(opts.java.outdir, "src/");
      await fs.mkdirp(target); // make sure target directory exists
      await fs.copy(source, target, { recursive: true, overwrite: false });
    }

    if (opts.csharp) {
      const reldir = opts.csharp.namespace;
      const source = path.resolve(path.join(staging, "dist/dotnet/", reldir));
      const target = path.join(opts.csharp.outdir, reldir);
      await fs.move(source, target, { overwrite: true });
    }

    if (opts.golang) {
      const reldir = opts.golang.packageName;
      const source = path.resolve(path.join(staging, "dist/go/", reldir));
      const target = path.join(opts.golang.outdir, reldir);
      await fs.move(source, target, { overwrite: true });
      // remove go.mod as this would make it a submodule
      await fs.remove(path.join(target, "go.mod"));
    }

    ["versions.json", "constraints.json"].forEach((file) => {
      try {
        fs.copySync(
          path.resolve(staging, file),
          path.resolve(outputPath, file),
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

export class ConstructsMaker {
  private readonly codeMakerOutdir: string;
  private readonly code: CodeMaker;
  private versions: { [providerName: string]: string | undefined };

  constructor(
    private readonly options: GetOptions,
    private readonly schemaCachePath?: string,
    private readonly reportTelemetry: (payload: {
      targetLanguage: string;
      trackingPayload: Record<string, any>;
    }) => Promise<void> = async () => {},
  ) {
    this.codeMakerOutdir = path.resolve(this.options.codeMakerOutput);
    fs.mkdirpSync(this.codeMakerOutdir);
    this.code = new CodeMaker();
    this.versions = {};
  }
  private async generateTypescriptProvider(
    target: ConstructsMakerProviderTarget,
    schema: ProviderSchema,
  ) {
    const endTSTimer = logTimespan(`Generate Typescript for ${target.name}`);
    const generator = new TerraformProviderGenerator(this.code, schema);
    generator.generate(target);

    this.versions = { ...this.versions, ...generator.versions };
    endTSTimer();
  }

  public async filterAlreadyGenerated(
    constraints: TerraformDependencyConstraint[],
  ) {
    let constraintsFile = "{}";
    try {
      constraintsFile = await fs.readFile(
        path.join(this.codeMakerOutdir, "constraints.json"),
        "utf8",
      );
    } catch (e) {
      logger.debug(
        `Could not find constraints.json file while filtering: ${e}. This means no providers were generated, so all constraints need to be generated.`,
      );
      return constraints;
    }
    logger.debug(`Found constraints.json file: ${constraintsFile}`);

    let previousConstraints: Partial<ConstraintFile> = {};
    try {
      previousConstraints = JSON.parse(constraintsFile);
    } catch (e) {
      logger.info(
        `Could not parse constraints.json file while filtering: ${e}. Generating all constraints.`,
      );
      return constraints;
    }

    logger.debug(
      `Found previous constraints: ${JSON.stringify(
        previousConstraints,
        null,
        2,
      )}`,
    );

    if (
      !previousConstraints.providers ||
      typeof previousConstraints.providers !== "object"
    ) {
      logger.info(
        `Could not find providers in constraints.json file, generating all constraints. The constraints file was ${JSON.stringify(
          previousConstraints,
          null,
          2,
        )}`,
      );
      return constraints;
    }

    if (previousConstraints.cdktf !== DISPLAY_VERSION) {
      logger.info(
        `The CDKTF version has changed, generating all constraints. The previous version was ${previousConstraints.cdktf}, the current version is ${DISPLAY_VERSION}`,
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
            path.join(this.codeMakerOutdir, "providers", constraint.name),
          );
          break;
        case Language.PYTHON:
        case Language.JAVA:
        case Language.CSHARP:
          providerFolderExists = fs.existsSync(
            path.join(this.codeMakerOutdir, constraint.name),
          );
          break;
        case Language.GO:
          providerFolderExists = fs.existsSync(
            path.join(
              this.codeMakerOutdir,
              constraint.namespace || "hashicorp",
              constraint.name,
            ),
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
        2,
      )}`,
    );

    return constraintsToGenerate;
  }

  private async generateTypescriptModule(
    target: ConstructsMakerModuleTarget,
    schema: ModuleSchema,
  ) {
    const endTSTimer = logTimespan(`Generate Typescript for ${target.name}`);
    target.spec = schema;
    new ModuleGenerator(this.code, [target]);
    endTSTimer();
  }

  private async generateTypescript(
    target: ConstructsMakerTarget,
    schemas: Awaited<ReturnType<typeof readSchema>>,
  ) {
    if (target.isModule) {
      const schema = schemas.moduleSchema?.[target.moduleKey];
      if (!schema) {
        throw Errors.Internal(
          `Could not generate schema for module ${target.moduleKey}`,
        );
      }

      await this.generateTypescriptModule(
        target as ConstructsMakerModuleTarget,
        schema,
      );
    } else if (target.isProvider) {
      if (!schemas.providerSchema) {
        throw Errors.Internal(`Could not generate schema for providers`);
      }

      await this.generateTypescriptProvider(
        target as ConstructsMakerProviderTarget,
        schemas.providerSchema,
      );
    } else {
      throw new Error(
        `Unknown target type used to generate bindings: ${target.name}`,
      );
    }
  }

  // emits a versions.json file with a map of the used version for each provider fqpn
  private updateVersionsFile(
    allowedConstraints: TerraformDependencyConstraint[],
  ) {
    logger.debug(
      `Updating versions file with generated versions ${JSON.stringify(
        this.versions,
        null,
        2,
      )} with allowed constraints ${JSON.stringify(
        allowedConstraints,
        null,
        2,
      )}`,
    );
    const filePath = "versions.json";
    let previousVersions: Record<string, string> = {};
    try {
      previousVersions = JSON.parse(
        fs.readFileSync(path.resolve(this.codeMakerOutdir, filePath), "utf8"),
      );

      logger.debug(
        `Read existing versions file: ${JSON.stringify(
          previousVersions,
          null,
          2,
        )}`,
      );
    } catch (e) {
      // ignore
      logger.debug(
        `Could not read versions file, this is expected if there are no pre-existing local providers: ${e}`,
      );
    }

    const versions = allowedConstraints.reduce((acc, constraint) => {
      const provider = Object.entries(previousVersions).find(([name]) =>
        // This could be more refined, but it's good enough for now
        name.endsWith(constraint.fqn),
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
        2,
      )}`,
    );

    this.code.openFile(filePath);
    this.code.line(JSON.stringify({ ...versions, ...this.versions }, null, 2));
    this.code.closeFile(filePath);
    return filePath;
  }

  public async removeFoldersThatShouldNotExist(
    constraintsThatShouldExist: TerraformDependencyConstraint[],
  ) {
    logger.debug(
      `Removing providers except for ${JSON.stringify(
        constraintsThatShouldExist,
        null,
        2,
      )}`,
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
        `Error listing files in providers folder '${providersFolder}': ${e}`,
      );
    }

    const folders = filesInProviders.filter((file) =>
      fs
        .statSync(path.resolve(this.codeMakerOutdir, "providers", file))
        .isDirectory(),
    );

    return folders.forEach((folder) => {
      const shouldExist = constraintsThatShouldExist.some(
        (constraint) => constraint.name === folder,
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
    allowedConstraints: TerraformDependencyConstraint[],
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
          {},
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
    const opts: GenerateJSIIOptions = {
      entrypoint: target.fileName,
      deps: deps.map((dep) =>
        path.dirname(require.resolve(`${dep}/package.json`)),
      ),
      moduleKey: target.moduleKey,
      exports: target.isProvider // Modules are small enough that we don't need this optimization
        ? {
            ".": {
              import: `./providers/${target.name}/index.js`,
              require: `./providers/${target.name}/lazy-index.js`,
            },
          }
        : undefined,
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
      if (
        this.options.codeMakerOutput.includes("/") ||
        this.options.codeMakerOutput.includes("\\")
      ) {
        throw Errors.Usage(
          `When using Java the "codeMakerOutput" option in the cdktf.json must be the organization identifier for your project (e.g. com.my-company), not a path. The generated Java code will be placed in a subdirectory of the given directory. If you are migrating from a < 0.19 version of cdktf you want to change the codemakerOutput to "imports".`,
        );
      }

      opts.java = {
        outdir: ".", // generated java files aren't packaged, so just include directly in app
        package: `${this.options.codeMakerOutput}.${target.srcMakName}`,
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
    await generateJsiiLanguage(this.code, opts, this.codeMakerOutdir, [
      target.isModule ? "providers/**" : "modules/**",
    ]);
    jsiiTimer();
  }

  public async getSchemas(targets: TerraformDependencyConstraint[]) {
    return await readSchema(targets, this.schemaCachePath);
  }

  public async generate(
    allConstraints: TerraformDependencyConstraint[],
    constraintsToGenerate = allConstraints,
  ) {
    const targets = constraintsToGenerate.map((constraint) =>
      ConstructsMakerTarget.from(constraint, this.options.targetLanguage),
    );

    const endSchemaTimer = logTimespan("Gathering schema");
    const schemas = await this.getSchemas(constraintsToGenerate);
    endSchemaTimer();

    const endGenerateTimer = logTimespan("Generate TS");
    await Promise.all(
      targets.map((target) => this.generateTypescript(target, schemas)),
    );
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
          : this.options.jsiiParallelism || 1,
      );

      const work = [...targets];
      const workers = new Array(numberOfWorkers).fill(async () => {
        let target: ConstructsMakerTarget | undefined;
        while ((target = work.pop())) {
          const endJsiiTarget = logTimespan(
            `Generating JSII bindings for ${target.name}`,
          );
          await this.generateJsiiLanguage(target);
          endJsiiTarget();
        }
      });

      await Promise.all(workers.map((fn) => fn()));
    }

    for (const target of targets) {
      await this.reportTelemetry({
        trackingPayload: target.trackingPayload,
        targetLanguage: target.targetLanguage,
      });
    }

    if (this.isPythonTarget) {
      const endPythonTimer = logTimespan("Python post-processing");
      // Remove from . import ... statements from root level __init__.py
      // This removes root-level imports of namespaces, but saves 25s synth time for the aws provider alone
      const allInitPyPaths = glob
        .sync("**/__init__.py", {
          cwd: this.codeMakerOutdir,
        })
        // sort by depth, so we start with the shallowest files
        .sort((a, b) => a.split("/").length - b.split("/").length);

      const visitedDirectories: string[] = [];
      for (const initPyPath of allInitPyPaths) {
        const directoryPath = path.dirname(initPyPath);
        if (visitedDirectories.some((dir) => directoryPath.startsWith(dir))) {
          // we already processed this directory
          continue;
        }
        visitedDirectories.push(directoryPath);

        const absoluteInitPyPath = path.join(this.codeMakerOutdir, initPyPath);
        const initPy = await fs.readFile(absoluteInitPyPath, "utf8");
        const initPyWithoutImports = initPy.replace(/from \. import .*\n/g, "");
        await fs.writeFile(absoluteInitPyPath, initPyWithoutImports);
      }

      endPythonTimer();
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
    } catch (e: any) {
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
        `Could not determine the root Go module name. Found ${file} but failed to regex match the module name directive`,
      );
    }
    // go up one directory. As dirname('/') will return '/' we cancel the loop
    // as soon as the dir does not change anymore.
    previousDir = currentDir;
    currentDir = path.dirname(currentDir);
  } while (currentDir !== previousDir);

  throw new Error(
    `Could not determine the root Go module name. No go.mod found in ${dir} and any parent directories`,
  );
};
