import * as yargs from "yargs";
import React from "react";
import { Destroy } from "./ui/destroy";
import { readConfigSync } from "../../lib/config";
import { renderInk } from "./helper/render-ink";
import { displayVersionMessage } from "./helper/version-check";
import { throwIfNotProjectDirectory } from "./helper/check-directory";
import { checkEnvironment } from "./helper/check-environment";

const config = readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = "destroy [stack] [OPTIONS]";
  public readonly describe = "Destroy the given stack";

  public readonly builder = (args: yargs.Argv) =>
    args
      .positional("stack", {
        desc: "Destroy stack which matches the given id only. Required when more than one stack is present in the app",
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
    throwIfNotProjectDirectory("destroy");
    await displayVersionMessage();
    await checkEnvironment("destroy");
    const command = argv.app;
    const outdir = argv.output;
    const autoApprove = argv.autoApprove;
    const stack = argv.stack;

    await renderInk(
      React.createElement(Destroy, {
        targetDir: outdir,
        targetStack: stack,
        synthCommand: command,
        autoApprove,
      })
    );
  }
}

module.exports = new Command();
