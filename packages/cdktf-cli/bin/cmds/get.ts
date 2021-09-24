import yargs from "yargs";
import React from "react";
import {
  readConfigSync,
  TerraformDependencyConstraint,
} from "../../lib/config";
import { Language, LANGUAGES } from "../../lib/get/constructs-maker";
import { Get } from "./ui/get";
import { renderInk } from "./helper/render-ink";
import { displayVersionMessage } from "./helper/version-check";
import { throwIfNotProjectDirectory } from "./helper/check-directory";
import { checkEnvironment } from "./helper/check-environment";

const config = readConfigSync();

interface Arguments {
  output: string;
  language: Language;
}

class Command implements yargs.CommandModule {
  public readonly command = "get [OPTIONS]";
  public readonly describe =
    "Generate CDK Constructs for Terraform providers and modules.";

  public readonly builder = (args: yargs.Argv) =>
    args
      .showHelpOnFail(true)
      .option("output", {
        default: config.codeMakerOutput,
        type: "string",
        desc: "Output directory for generated Constructs",
        alias: "o",
      })
      .option("language", {
        default: config.language,
        required: true,
        type: "string",
        desc: "Output programming language",
        alias: "l",
        choices: LANGUAGES,
      });

  public async handler(argv: any) {
    throwIfNotProjectDirectory("get");
    await displayVersionMessage();
    await checkEnvironment("get");
    const args = argv as Arguments;
    const providers = config.terraformProviders ?? [];
    const modules = config.terraformModules ?? [];
    const { output, language } = args;

    const constraints: TerraformDependencyConstraint[] = [
      ...providers,
      ...modules,
    ];

    if (constraints.length === 0) {
      console.error(
        `ERROR: Please specify providers or modules in "cdktf.json" config file`
      );
      process.exit(1);
    }

    await renderInk(
      React.createElement(Get, {
        codeMakerOutput: output,
        language: language,
        constraints,
      })
    );
  }
}

module.exports = new Command();
