import * as yargs from "yargs";
import React from "react";
import { Output } from "./ui/output";
import { config as cfg } from "@cdktf/provider-generator";
import { renderInk } from "./helper/render-ink";
import { displayVersionMessage } from "./helper/version-check";
import { throwIfNotProjectDirectory } from "./helper/check-directory";
import { checkEnvironment } from "./helper/check-environment";

const config = cfg.readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = "output [stack] [OPTIONS]";
  public readonly describe = "Prints the output of a stack";
  public readonly aliases = [];

  public readonly builder = (args: yargs.Argv) =>
    args
      .positional("stack", {
        desc: "Deploy stack which matches the given id only. Required when more than one stack is present in the app",
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
    throwIfNotProjectDirectory("deploy");
    await displayVersionMessage();
    await checkEnvironment("deploy");
    const command = argv.app;
    const outdir = argv.output;
    const stack = argv.stack;

    await renderInk(
      React.createElement(Output, {
        targetDir: outdir,
        targetStack: stack,
        synthCommand: command,
      })
    );
  }
}

module.exports = new Command();
