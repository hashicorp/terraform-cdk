import chalk from "chalk";
import * as fs from "fs-extra";
import React from "react";
import yargs from "yargs";
import { convert as hcl2cdkConvert } from "@cdktf/hcl2cdk";
import {
  readSchema,
  ConstructsMakerProviderTarget,
  LANGUAGES,
  config as cfg,
  Language,
} from "@cdktf/provider-generator";

import { checkForEmptyDirectory, runInit } from "./helper/init";
import { renderInk } from "./helper/render-ink";
import { terraformCheck } from "./helper/terraform-check";
import * as terraformCloudClient from "./helper/terraform-cloud-client";
import { TerraformLogin } from "./helper/terraform-login";
import { findFileAboveCwd, readStreamAsString } from "./helper/utilities";
import { displayVersionMessage } from "./helper/version-check";

import { Diff } from "./ui/diff";
import { Deploy } from "./ui/deploy";
import { Destroy } from "./ui/destroy";
import { Get } from "./ui/get";
import { List } from "./ui/list";
import { Synth } from "./ui/synth";
import { Watch } from "./ui/watch";

import { sendTelemetry } from "../../lib/checkpoint";
import { Errors } from "../../lib/errors";
import { Output } from "./ui/output";
import {
  NestedTerraformOutputs,
  saveOutputs,
  normalizeOutputPath,
} from "../../lib/output";
import { throwIfNotProjectDirectory } from "./helper/check-directory";
import {
  checkEnvironment,
  verifySimilarLibraryVersion,
} from "./helper/check-environment";
import { collectDebugInformation } from "../../lib/debug";
import { initializErrorReporting } from "../../lib/error-reporting";

const chalkColour = new chalk.Instance();
const config = cfg.readConfigSync();

async function getProviderRequirements(provider: string[]) {
  const items: string[] = provider;
  const cdktfJsonPath = findFileAboveCwd("cdktf.json");
  if (cdktfJsonPath) {
    const cdktfJson = await fs.readJson(cdktfJsonPath);

    if (Array.isArray(cdktfJson.terraformProviders)) {
      items.push(...cdktfJson.terraformProviders);
    }
  }
  return items;
}

export async function convert({ language, provider }: any) {
  await initializErrorReporting();
  await displayVersionMessage();

  const providerRequirements = await getProviderRequirements(provider);
  // Get all the provider schemas
  const { providerSchema } = await readSchema(
    providerRequirements.map((spec) =>
      ConstructsMakerProviderTarget.from(
        new cfg.TerraformProviderConstraint(spec),
        LANGUAGES[0]
      )
    )
  );

  const input = await readStreamAsString(process.stdin);
  let output;
  try {
    const { all, stats } = await hcl2cdkConvert(input, {
      language,
      providerSchema,
    });
    output = all;
    await sendTelemetry("convert", { ...stats, error: false });
  } catch (err) {
    throw Errors.Internal((err as Error).message, { language });
  }

  console.log(output);
}

export async function deploy(argv: any) {
  await initializErrorReporting(true);
  throwIfNotProjectDirectory();
  await displayVersionMessage();
  await checkEnvironment();
  const command = argv.app;
  const outDir = argv.output;
  const autoApprove = argv.autoApprove;
  const stacks = argv.stacks;
  const includeSensitiveOutputs = argv.outputsFileIncludeSensitiveOutputs;

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
      ignoreMissingStackDependencies:
        argv.ignoreMissingStackDependencies || false,
      parallelism: argv.parallelism,
    })
  );
}

export async function destroy(argv: any) {
  await initializErrorReporting(true);
  throwIfNotProjectDirectory();
  await displayVersionMessage();
  await checkEnvironment();
  const command = argv.app;
  const outDir = argv.output;
  const autoApprove = argv.autoApprove;
  const stacks = argv.stacks;

  await renderInk(
    React.createElement(Destroy, {
      outDir,
      targetStacks: stacks,
      synthCommand: command,
      autoApprove,
      ignoreMissingStackDependencies:
        argv.ignoreMissingStackDependencies || false,
      parallelism: argv.parallelism,
    })
  );
}

export async function diff(argv: any) {
  await initializErrorReporting(true);
  throwIfNotProjectDirectory();
  await displayVersionMessage();
  await checkEnvironment();
  const command = argv.app;
  const outDir = argv.output;
  const stack = argv.stack;

  await renderInk(
    React.createElement(Diff, {
      outDir,
      targetStack: stack,
      synthCommand: command,
    })
  );
}

export async function get(argv: any) {
  throwIfNotProjectDirectory();
  await displayVersionMessage();
  await initializErrorReporting(true);
  await checkEnvironment();
  await verifySimilarLibraryVersion();
  const args = argv as {
    output: string;
    language: Language;
  };
  const providers = config.terraformProviders ?? [];
  const modules = config.terraformModules ?? [];
  const { output, language } = args;

  const constraints: cfg.TerraformDependencyConstraint[] = [
    ...providers,
    ...modules,
  ];

  if (constraints.length === 0) {
    throw Errors.Usage(
      `Please specify providers or modules in "cdktf.json" config file`
    );
  }

  await renderInk(
    React.createElement(Get, {
      codeMakerOutput: output,
      language: language,
      constraints,
    })
  );
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

  await runInit(argv);
}

export async function list(argv: any) {
  await initializErrorReporting(true);
  throwIfNotProjectDirectory();
  await displayVersionMessage();
  await checkEnvironment();
  const command = argv.app;
  const outDir = argv.output;

  await renderInk(React.createElement(List, { outDir, synthCommand: command }));
}

export async function login(argv: any) {
  await terraformCheck();
  await displayVersionMessage();

  const args = argv as yargs.Arguments;
  if (args["_"].length > 1) {
    console.error(
      chalkColour`{redBright ERROR: 'cdktf login' command cannot have more than one argument.}\n`
    );
    yargs.showHelp();
    process.exit(1);
  }

  const terraformLogin = new TerraformLogin();
  const token = await terraformLogin.askToLogin();
  if (token == "") {
    console.error(
      chalkColour`{redBright ERROR: couldn't configure Terraform Cloud credentials.}\n`
    );
    process.exit(1);
  }

  // Get user details if token is set
  const userAccount = await terraformCloudClient.getAccountDetails(token);
  if (userAccount) {
    const username = userAccount.data.attributes.username;
    console.log(
      chalkColour`\n{greenBright cdktf has successfully configured Terraform Cloud credentials!}`
    );
    console.log(chalkColour`\nWelcome {bold ${username}}!`);
  } else {
    console.error(
      chalkColour`{redBright ERROR: couldn't configure Terraform Cloud credentials.}\n`
    );
    process.exit(1);
  }
}

export async function synth(argv: any) {
  await initializErrorReporting(true);
  throwIfNotProjectDirectory();
  await displayVersionMessage();
  await checkEnvironment();
  const checkCodeMakerOutput = argv.checkCodeMakerOutput;
  const command = argv.app;
  const outDir = argv.output;

  if (checkCodeMakerOutput && !(await fs.pathExists(config.codeMakerOutput))) {
    console.error(
      `ERROR: synthesis failed, run "cdktf get" to generate providers in ${config.codeMakerOutput}`
    );
    process.exit(1);
  }

  await renderInk(
    React.createElement(Synth, {
      outDir,
      synthCommand: command,
    })
  );
}

export async function watch(argv: any) {
  await initializErrorReporting(true);
  throwIfNotProjectDirectory();
  await displayVersionMessage();
  const command = argv.app;
  const outDir = argv.output;
  const autoApprove = argv.autoApprove;
  const stacks = argv.stacks;

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
    })
  );
}

export async function output(argv: any) {
  await initializErrorReporting(true);
  throwIfNotProjectDirectory();
  await displayVersionMessage();
  await checkEnvironment();
  const command = argv.app;
  const outDir = argv.output;
  const stacks = argv.stacks;
  const includeSensitiveOutputs = argv.outputsFileIncludeSensitiveOutputs;
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
    })
  );
}

export async function debug(argv: any) {
  const jsonOutput = argv.json;
  const debugOutput = await collectDebugInformation();

  if (jsonOutput) {
    console.log(JSON.stringify(debugOutput, null, 2));
  } else {
    console.log(chalkColour`{bold {greenBright cdktf debug}}`);

    Object.entries(debugOutput).forEach(([key, value]) => {
      console.log(`${key}: ${value === null ? "null" : value}`);
    });
  }
}
