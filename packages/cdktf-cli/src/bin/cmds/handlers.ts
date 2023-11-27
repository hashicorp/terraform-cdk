// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import chalk from "chalk";
import * as fs from "fs-extra";
import React from "react";
import { convert as hcl2cdkConvert } from "@cdktf/hcl2cdk";
import {
  GetOptions,
  TerraformModuleConstraint,
  TerraformProviderConstraint,
} from "@cdktf/provider-generator";

import {
  LANGUAGES,
  Language,
  readConfigSync,
  sendTelemetry,
  Errors,
  IsErrorType,
  logger,
  collectDebugInformation,
  getPackageVersion,
  TerraformDependencyConstraint,
  ConstructsMakerProviderTarget,
} from "@cdktf/commons";

import { checkForEmptyDirectory, runInit } from "./helper/init";
import { renderInk } from "./helper/render-ink";
import { terraformCheck } from "./helper/terraform-check";
import * as terraformCloudClient from "./helper/terraform-cloud-client";
import { TerraformLogin } from "./helper/terraform-login";
import { readStreamAsString } from "./helper/utilities";
import { displayVersionMessage } from "./helper/version-check";

import { Diff } from "./ui/diff";
import { Deploy } from "./ui/deploy";
import { Destroy } from "./ui/destroy";
import { Get } from "./ui/get";
import { List } from "./ui/list";
import { Synth } from "./ui/synth";
import { Watch } from "./ui/watch";
import { ProviderListTable } from "./ui/provider-list";

import {
  NestedTerraformOutputs,
  saveOutputs,
  normalizeOutputPath,
  initializErrorReporting,
  DependencyManager,
  ProviderConstraint,
  CdktfConfig,
  get as getLib,
  providerAdd as providerAddLib,
} from "@cdktf/cli-core";
import { Output } from "./ui/output";
import { throwIfNotProjectDirectory } from "./helper/check-directory";
import {
  checkEnvironment,
  verifySimilarLibraryVersion,
} from "./helper/check-environment";
import { sanitizeVarFiles } from "./helper/var-files";
import { askForCrashReportingConsent } from "./helper/error-reporting";
import { startPerformanceMonitoring } from "./helper/performance";
import path from "path";
import os from "os";
import { readPackageJson, projectRootPath } from "./helper/utilities";
import { readSchema } from "@cdktf/provider-schema";

const chalkColour = new chalk.Instance();
const config = readConfigSync();

async function getProviderRequirements(provider: string[]) {
  let providersFromConfig: (string | TerraformDependencyConstraint)[] = [];

  try {
    const config = CdktfConfig.read();
    providersFromConfig = config.terraformProviders;
  } catch (e) {
    if (IsErrorType(e, "External")) {
      // do nothing, expected if run in a different directory
    } else {
      throw e;
    }
  }
  return [...provider, ...providersFromConfig];
}

export async function convert({
  language,
  provider,
  stack,
  experimentalProviderSchemaCachePath,
}: any) {
  await initializErrorReporting();
  await displayVersionMessage();

  const pkg = readPackageJson();

  const providerRequirements = await getProviderRequirements(provider);

  // Get all the provider schemas
  const { providerSchema } = await readSchema(
    providerRequirements.map((spec) =>
      ConstructsMakerProviderTarget.from(
        new TerraformProviderConstraint(spec),
        LANGUAGES[0]
      )
    ),
    experimentalProviderSchemaCachePath
  );

  const input = await readStreamAsString(
    process.stdin,
    "No stdin was passed, please use it like this: cat main.tf | cdktf convert > imported.ts"
  );

  const needsProject = language !== "typescript";

  const origDir = process.cwd();
  if (needsProject) {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "cdktf-convert-"));
    process.chdir(tempDir);

    // Support for local development vs published version
    const projectRoot = projectRootPath();
    const dist = path.resolve(projectRoot, "../../dist");

    logger.setLevel("ERROR");
    await init({
      template: "typescript",
      providers: provider,
      projectName: path.basename(tempDir),
      projectDescription: "Temporary project for conversion",
      local: true,
      enableCrashReporting: false,
      fromTerraformProject: "no",
      dist: pkg.version === "0.0.0" ? dist : undefined,
      cdktfVersion: pkg.version,
      silent: true,
    });
    logger.useDefaultLevel();
  }

  let output;
  try {
    const { all, stats } = await hcl2cdkConvert(input, {
      language,
      providerSchema: providerSchema ?? {},
      codeContainer: stack ? "cdktf.TerraformStack" : "constructs.Construct",
    });
    output = all;

    await sendTelemetry("convert", { ...stats, error: false });
  } catch (err: any) {
    throw Errors.Internal((err as Error).message, err, { language });
  }

  if (needsProject) {
    process.chdir(origDir);
  }

  console.log(output);
}

export async function deploy(argv: any) {
  await initializErrorReporting(askForCrashReportingConsent);
  throwIfNotProjectDirectory();
  await displayVersionMessage();
  await checkEnvironment();
  const command = argv.app;
  const outDir = argv.output;
  const autoApprove = argv.autoApprove;
  const stacks = argv.stacks;
  const includeSensitiveOutputs = argv.outputsFileIncludeSensitiveOutputs;
  const refreshOnly = argv.refreshOnly;
  const terraformParallelism = argv.terraformParallelism;
  const ignoreMissingStackDependencies =
    argv.ignoreMissingStackDependencies || false;
  const parallelism = argv.parallelism;
  const vars = argv.var;
  const varFiles = sanitizeVarFiles(argv.varFile);
  const noColor = argv.noColor;
  const migrateState = argv.migrateState;
  const skipSynth = argv.skipSynth;

  let outputsPath: string | undefined = undefined;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  let onOutputsRetrieved: (outputs: NestedTerraformOutputs) => void = () => {};

  if (argv.outputsFile) {
    outputsPath = normalizeOutputPath(argv.outputsFile);
    onOutputsRetrieved = (outputs: NestedTerraformOutputs) =>
      saveOutputs(outputsPath!, outputs, includeSensitiveOutputs);
  }
  await renderInk(
    React.createElement(Deploy, {
      outDir,
      targetStacks: stacks,
      synthCommand: command,
      autoApprove,
      onOutputsRetrieved,
      outputsPath,
      ignoreMissingStackDependencies,
      parallelism,
      refreshOnly,
      terraformParallelism,
      vars,
      varFiles,
      noColor,
      migrateState,
      skipSynth,
    })
  );
}

export async function destroy(argv: any) {
  await initializErrorReporting(askForCrashReportingConsent);
  throwIfNotProjectDirectory();
  await displayVersionMessage();
  await checkEnvironment();
  const command = argv.app;
  const outDir = argv.output;
  const autoApprove = argv.autoApprove;
  const stacks = argv.stacks;
  const ignoreMissingStackDependencies =
    argv.ignoreMissingStackDependencies || false;
  const parallelism = argv.parallelism;
  const terraformParallelism = argv.terraformParallelism;
  const vars = argv.var;
  const varFiles = sanitizeVarFiles(argv.varFile);
  const noColor = argv.noColor;
  const migrateState = argv.migrateState;
  const skipSynth = argv.skipSynth;

  await renderInk(
    React.createElement(Destroy, {
      outDir,
      targetStacks: stacks,
      synthCommand: command,
      autoApprove,
      ignoreMissingStackDependencies,
      parallelism,
      terraformParallelism,
      vars,
      varFiles,
      noColor,
      migrateState,
      skipSynth,
    })
  );
}

export async function diff(argv: any) {
  await initializErrorReporting(askForCrashReportingConsent);
  throwIfNotProjectDirectory();
  await displayVersionMessage();
  await checkEnvironment();
  const command = argv.app;
  const outDir = argv.output;
  const stack = argv.stack;
  const refreshOnly = argv.refreshOnly;
  const terraformParallelism = argv.terraformParallelism;
  const vars = argv.var;
  const varFiles = sanitizeVarFiles(argv.varFile);
  const noColor = argv.noColor;
  const migrateState = argv.migrateState;
  const skipSynth = argv.skipSynth;

  await renderInk(
    React.createElement(Diff, {
      outDir,
      refreshOnly,
      targetStack: stack,
      synthCommand: command,
      terraformParallelism,
      vars,
      varFiles,
      noColor,
      migrateState,
      skipSynth,
    })
  );
}

export async function get(argv: {
  output: string;
  language: Language;
  parallelism: number;
  force?: boolean;
  showPerformanceInfo?: boolean;
  silent?: boolean;
  experimentalProviderSchemaCachePath?: string;
}) {
  const printPerformanceInfo = argv.showPerformanceInfo
    ? startPerformanceMonitoring()
    : () => {}; // eslint-disable-line @typescript-eslint/no-empty-function

  try {
    throwIfNotProjectDirectory();
    await displayVersionMessage();
    await initializErrorReporting(askForCrashReportingConsent);
    await checkEnvironment();
    await verifySimilarLibraryVersion();
    const config = readConfigSync(); // read config again to be up-to-date (if called via 'add' command)
    const providers = config.terraformProviders ?? [];
    const modules = config.terraformModules ?? [];
    const { output, language, parallelism, force } = argv;

    const constraints: TerraformDependencyConstraint[] = [
      ...providers.map((c) => new TerraformProviderConstraint(c)),
      ...modules.map((c) => new TerraformModuleConstraint(c)),
    ];

    if (constraints.length === 0) {
      logger.warn(
        `WARNING: No providers or modules found in "cdktf.json" config file, therefore cdktf get does nothing.`
      );
      return;
    }

    await renderInk(
      React.createElement(Get, {
        codeMakerOutput: output,
        language: language,
        constraints,
        parallelism,
        force,
        silent: argv.silent,
        providerSchemaCachePath: argv.experimentalProviderSchemaCachePath,
      })
    );
  } finally {
    if (!argv.silent) {
      printPerformanceInfo();
    }
  }
}

export async function init(argv: any) {
  await terraformCheck();
  await displayVersionMessage();
  await checkEnvironment();

  if (["", ".", process.cwd()].includes(argv.fromTerraformProject)) {
    throw Errors.Usage(
      "--from-terraform-project requires a path to an existing Terraform project to be set, e.g. --from-terraform-project=../my-tf-codebase This folder can not be the same as the current working directory since cdktf init will initialize the new project in that folder."
    );
  }

  checkForEmptyDirectory(".");

  const { needsGet, codeMakerOutput, language } = await runInit(argv);

  if (needsGet) {
    if (!argv.silent) {
      console.log(
        "Local providers have been updated. Running cdktf get to update..."
      );
    }
    await get({
      language,
      output: codeMakerOutput,
      parallelism: 1,
      silent: argv.silent,
    });
  }
}

export async function list(argv: any) {
  await initializErrorReporting(askForCrashReportingConsent);
  throwIfNotProjectDirectory();
  await displayVersionMessage();
  await checkEnvironment();
  const command = argv.app;
  const outDir = argv.output;

  await renderInk(React.createElement(List, { outDir, synthCommand: command }));
}

export async function login(argv: { tfeHostname: string }) {
  await terraformCheck();
  await displayVersionMessage();

  async function showUserDetails(authToken: string) {
    // Get user details if token is set
    const userAccount = await terraformCloudClient.getAccountDetails(
      argv.tfeHostname,
      authToken
    );
    if (userAccount) {
      const username = userAccount.data.attributes.username;
      console.log(
        chalkColour`\n{greenBright cdktf has successfully configured Terraform Cloud credentials!}`
      );
      console.log(chalkColour`\nWelcome {bold ${username}}!`);
    } else {
      throw Errors.Usage(`Configured Terraform Cloud token is invalid.`);
    }
  }

  const terraformLogin = new TerraformLogin(argv.tfeHostname);
  let token = "";
  try {
    token = await readStreamAsString(process.stdin, "No stdin was passed");
  } catch (e) {
    logger.debug(`No TTY stream passed to login`);
  }

  const sanitizedToken = token.replace(/\n/g, "");

  // If we get a token through stdin, we don't need to ask for credentials, we just validate and set it
  // This is useful for programmatically authenticating, e.g. a CI server
  if (token) {
    await terraformLogin.saveTerraformCredentials(sanitizedToken);
  } else {
    token = await terraformLogin.askToLogin();
    if (token === "") {
      throw Errors.Usage(`No Terraform Cloud token was provided.`);
    }
  }

  await showUserDetails(sanitizedToken || token);
}

export async function synth(argv: any) {
  const printPerformanceInfo = argv.showPerformanceInfo
    ? startPerformanceMonitoring()
    : () => {}; // eslint-disable-line @typescript-eslint/no-empty-function

  try {
    await initializErrorReporting(askForCrashReportingConsent);
    throwIfNotProjectDirectory();
    await displayVersionMessage();
    await checkEnvironment();
    const checkCodeMakerOutput = argv.checkCodeMakerOutput;
    const command = argv.app;
    const outDir = argv.output;
    const hcl = argv.hcl;

    if (
      checkCodeMakerOutput &&
      !(await fs.pathExists(config.codeMakerOutput))
    ) {
      console.error(
        `ERROR: synthesis failed, run "cdktf get" to generate providers in ${config.codeMakerOutput}`
      );
      process.exit(1);
    }

    await renderInk(
      React.createElement(Synth, {
        outDir,
        synthCommand: command,
        hcl,
      })
    );
  } finally {
    printPerformanceInfo();
  }
}

export async function watch(argv: any) {
  await initializErrorReporting(askForCrashReportingConsent);
  throwIfNotProjectDirectory();
  await displayVersionMessage();
  const command = argv.app;
  const outDir = argv.output;
  const autoApprove = argv.autoApprove;
  const stacks = argv.stacks;
  const terraformParallelism = argv.terraformParallelism;
  const parallelism = argv.parallelism;

  if (!autoApprove) {
    console.error(
      chalkColour`{redBright ERROR: The watch command always automatically deploys and approves changes. To make this behaviour explicit the --auto-approve flag must be set}`
    );
    process.exit(1);
  }

  await renderInk(
    React.createElement(Watch, {
      targetDir: outDir,
      targetStacks: stacks,
      synthCommand: command,
      autoApprove,
      terraformParallelism,
      parallelism,
    })
  );
}

export async function output(argv: any) {
  await initializErrorReporting(askForCrashReportingConsent);
  throwIfNotProjectDirectory();
  await displayVersionMessage();
  await checkEnvironment();
  const command = argv.app;
  const outDir = argv.output;
  const stacks = argv.stacks;
  const includeSensitiveOutputs = argv.outputsFileIncludeSensitiveOutputs;
  const skipSynth = argv.skipSynth;
  let outputsPath: string | undefined = undefined;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  let onOutputsRetrieved: (outputs: NestedTerraformOutputs) => void = () => {};

  if (argv.outputsFile) {
    outputsPath = normalizeOutputPath(argv.outputsFile);
    onOutputsRetrieved = (outputs: NestedTerraformOutputs) =>
      saveOutputs(outputsPath!, outputs, includeSensitiveOutputs);
  }

  await renderInk(
    React.createElement(Output, {
      outDir,
      targetStacks: stacks,
      synthCommand: command,
      onOutputsRetrieved,
      outputsPath,
      skipSynth,
    })
  );
}

export async function debug(argv: any) {
  // Ideally the provider info gathering happens in `collectDebugInformation()` but the inclusion of `CdktfConfig.read()` in @cdktf/commons causes the build to fail with "error TS5055"
  const config = CdktfConfig.read();
  const language = config.language;
  const cdktfVersion = await getPackageVersion(language, "cdktf");
  if (!cdktfVersion)
    throw Errors.External(
      "Could not determine cdktf version. Please make sure you are in a directory containing a cdktf project and have all dependencies installed."
    );

  const manager = new DependencyManager(
    language,
    cdktfVersion,
    config.projectDirectory
  );
  const allProviders = await manager.allProviders();
  const debugOutput = await collectDebugInformation();
  if (argv.json) {
    console.log(
      JSON.stringify(
        {
          ...debugOutput,
          providers: {
            local: allProviders.local.map((provider) => {
              return {
                provider: `${provider.providerName}@${provider.providerConstraint}`,
                terraformProviderVersion: provider.providerVersion,
              };
            }),
            prebuilt: allProviders.prebuilt.map((provider) => {
              return {
                provider: provider.packageName,
                terraformProviderVersion: provider.providerVersion,
                prebuiltProviderVersion: provider.packageVersion,
                cdktfVersion: provider.cdktfVersion,
              };
            }),
          },
        },
        null,
        2
      )
    );
  } else {
    console.log(chalkColour`{bold {greenBright cdktf debug}}`);

    Object.entries(debugOutput).forEach(([key, value]) => {
      console.log(`${key}: ${value === null ? "null" : value}`);
    });

    console.log(chalkColour`{bold {yellowBright providers}}`);

    for (const provider of allProviders.local) {
      console.log(
        `${provider.providerName}@${provider.providerConstraint} (LOCAL)
        terraform provider version: ${provider.providerVersion}`
      );
    }
    for (const provider of allProviders.prebuilt) {
      console.log(
        `${provider.packageName} (PREBUILT)
        terraform provider version: ${provider.providerVersion} 
        prebuilt provider version: ${provider.packageVersion}
        cdktf version: ${provider.cdktfVersion}`
      );
    }
  }
}

export async function providerAdd(argv: any) {
  const config = CdktfConfig.read();
  const language = config.language;
  const cdktfVersion = await getPackageVersion(language, "cdktf");

  if (!cdktfVersion)
    throw Errors.External(
      "Could not determine cdktf version. Please make sure you are in a directory containing a cdktf project and have all dependencies installed."
    );
  const needsGet = await providerAddLib({
    providers: argv.provider,
    language: language,
    projectDirectory: config.projectDirectory,
    cdktfVersion: cdktfVersion,
    forceLocal: argv.forceLocal,
  });

  if (needsGet) {
    console.log(
      "Local providers have been updated. Running cdktf get to update..."
    );
    await get({
      language: language,
      output: config.codeMakerOutput,
      parallelism: 1,
      silent: argv.silent,
    });
  }
}

export async function providerUpgrade(argv: any) {
  const config = CdktfConfig.read();

  const language = config.language;
  const cdktfVersion = await getPackageVersion(language, "cdktf");

  if (!cdktfVersion)
    throw Errors.External(
      "Could not determine CDKTF version. Please make sure you are in a directory containing a CDKTF project and have all dependencies installed."
    );

  const manager = new DependencyManager(
    language,
    cdktfVersion,
    config.projectDirectory
  );

  const constraintsToUpdate: ProviderConstraint[] = [];

  for (const provider of argv.provider) {
    const constraint = ProviderConstraint.fromConfigEntry(provider);
    const { addedLocalProvider } = await manager.upgradeProvider(constraint);
    if (addedLocalProvider) {
      constraintsToUpdate.push(constraint);
    }
  }

  if (constraintsToUpdate.length > 0) {
    const singular = constraintsToUpdate.length === 1;
    console.log(
      `${constraintsToUpdate.length} local provider${
        singular ? " has" : "s have"
      } been updated. Running cdktf get to update...`
    );

    const config = readConfigSync(); // read config again to be up-to-date (if called via 'add' command)
    const providers = config.terraformProviders ?? [];
    const modules = config.terraformModules ?? [];

    const constructsOptions: GetOptions = {
      codeMakerOutput: config.codeMakerOutput,
      targetLanguage: language,
      jsiiParallelism: 1,
    };

    const constraints: TerraformDependencyConstraint[] = [
      ...providers,
      ...modules,
    ];
    await getLib({
      constructsOptions,
      constraints,
      cleanDirectory: false,
      constraintsToGenerate: constraintsToUpdate.map(
        (c) => new TerraformProviderConstraint(c)
      ),
    });
  }
}

export async function providerList(argv: any) {
  const config = CdktfConfig.read();
  const language = config.language;
  const cdktfVersion = await getPackageVersion(language, "cdktf");
  if (!cdktfVersion)
    throw Errors.External(
      "Could not determine cdktf version. Please make sure you are in a directory containing a cdktf project and have all dependencies installed."
    );

  const manager = new DependencyManager(
    language,
    cdktfVersion,
    config.projectDirectory
  );
  const allProviders = await manager.allProviders();
  if (argv.json) {
    console.log(JSON.stringify(allProviders));
    return;
  }
  const data = [];
  for (const provider of allProviders.local) {
    data.push({
      "Provider Name": provider.providerName || "",
      "Provider Version": provider.providerVersion || "",
      CDKTF: "",
      Constraint: provider.providerConstraint || "",
      "Package Name": "",
      "Package Version": "",
    });
  }
  for (const provider of allProviders.prebuilt) {
    data.push({
      "Provider Name": provider.providerName || "",
      "Provider Version": provider.providerVersion || "",
      CDKTF: provider.cdktfVersion || "",
      Constraint: "",
      "Package Name": provider.packageName || "",
      "Package Version": provider.packageVersion || "",
    });
  }
  renderInk(React.createElement(ProviderListTable, { data }));
}
