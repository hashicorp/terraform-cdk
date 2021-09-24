import * as yargs from "yargs";
import React from "react";
import { Deploy } from "./ui/deploy";
import { readConfigSync } from "../../lib/config";
import { renderInk } from "./helper/render-ink";
import { displayVersionMessage } from "./helper/version-check";
import { throwIfNotProjectDirectory } from "./helper/check-directory";
import { checkEnvironment } from "./helper/check-environment";

const config = readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = "deploy [stack] [OPTIONS]";
  public readonly describe = "Deploy the given stack";
  public readonly aliases = ["apply"];

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
      .option("auto-approve", {
        type: "boolean",
        default: false,
        required: false,
        desc: "Auto approve",
      })
      .showHelpOnFail(true);

  public async handler(argv: any) {
    throwIfNotProjectDirectory("deploy");
    await displayVersionMessage();
    await checkEnvironment("deploy");
    const command = argv.app;
    const outdir = argv.output;
    const autoApprove = argv.autoApprove;
    const stack = argv.stack;

    await renderInk(
      React.createElement(Deploy, {
        targetDir: outdir,
        targetStack: stack,
        synthCommand: command,
        autoApprove,
      })
    );
  }
}

module.exports = new Command();
