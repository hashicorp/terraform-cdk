import yargs from "yargs";
import React from "react";
import { Synth } from "./ui/synth";
import { readConfigSync } from "../../lib/config";
import { renderInk } from "./helper/render-ink";
import * as fs from "fs-extra";
import { displayVersionMessage } from "./helper/version-check";
import { throwIfNotProjectDirectory } from "./helper/check-directory";
import { checkEnvironment } from "./helper/check-environment";

const config = readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = "synth [stack] [OPTIONS]";
  public readonly describe =
    "Synthesizes Terraform code for the given app in a directory.";
  public readonly aliases = ["synthesize"];

  public readonly builder = (args: yargs.Argv) =>
    args
      .positional("stack", {
        desc: "Stack to output when using --json flag",
        type: "string",
      })
      .option("app", {
        default: config.app,
        desc: "Command to use in order to execute cdktf app",
        alias: "a",
      })
      .option("output", {
        default: config.output,
        desc: "Output directory",
        alias: "o",
      })
      .option("json", {
        type: "boolean",
        desc: "Provide JSON output for the generated Terraform configuration.",
        default: false,
      })
      .showHelpOnFail(true);

  public async handler(argv: any) {
    throwIfNotProjectDirectory("synth");
    await displayVersionMessage();
    await checkEnvironment("synth");
    const command = argv.app;
    const outdir = argv.output;
    const jsonOutput = argv.json;
    const stack = argv.stack;

    if (
      config.checkCodeMakerOutput &&
      !(await fs.pathExists(config.codeMakerOutput))
    ) {
      console.error(
        `ERROR: synthesis failed, run "cdktf get" to generate providers in ${config.codeMakerOutput}`
      );
      process.exit(1);
    }

    await renderInk(
      React.createElement(Synth, {
        targetDir: outdir,
        targetStack: stack,
        synthCommand: command,
        jsonOutput: jsonOutput,
      })
    );
  }
}

module.exports = new Command();
