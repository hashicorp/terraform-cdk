import yargs from "yargs";
import React from "react";
import { Diff } from "./ui/diff";
import { readConfigSync } from "../../lib/config";
import { renderInk } from "./helper/render-ink";
import { displayVersionMessage } from "./helper/version-check";
import { throwIfNotProjectDirectory } from "./helper/check-directory";
import { checkEnvironment } from "./helper/check-environment";

const config = readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = "diff [stack] [OPTIONS]";
  public readonly describe =
    "Perform a diff (terraform plan) for the given stack";
  public readonly aliases = ["plan"];

  public readonly builder = (args: yargs.Argv) =>
    args
      .positional("stack", {
        desc: "Diff stack which matches the given id only. Required when more than one stack is present in the app",
        type: "string",
      })
      .option("app", {
        default: config.app,
        required: true,
        desc: "Command to use in order to execute cdktf app",
        alias: "a",
      })
      .option("output", {
        default: config.output,
        required: true,
        desc: "Output directory",
        alias: "o",
      })
      .showHelpOnFail(true);

  public async handler(argv: any) {
    throwIfNotProjectDirectory("diff");
    await displayVersionMessage();
    await checkEnvironment("diff");
    const command = argv.app;
    const outdir = argv.output;
    const stack = argv.stack;

    await renderInk(
      React.createElement(Diff, {
        targetDir: outdir,
        targetStack: stack,
        synthCommand: command,
      })
    );
  }
}

module.exports = new Command();
