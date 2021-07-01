import * as yargs from "yargs";
import React from "react";
import { Watch } from "./ui/watch";
import { readConfigSync } from "../../lib/config";
import { renderInk } from "./render-ink";
import * as chalk from "chalk";
import { displayVersionMessage } from "./version-check";

const chalkColour = new chalk.Instance();

const config = readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = "watch [stack] [OPTIONS]";
  public readonly describe =
    "Watch for file changes and automatically trigger a deploy";

  public readonly builder = (args: yargs.Argv) =>
    args
      .positional("stack", {
        desc:
          "Deploy stack which matches the given id only. Required when more than one stack is present in the app",
        type: "string"
      })
      .option("app", {
        default: config.app,
        required: true,
        desc: "Command to use in order to execute cdktf app",
        alias: "a"
      })
      .option("output", {
        default: config.output,
        required: true,
        desc: "Output directory",
        alias: "o"
      })
      .option("auto-approve", {
        type: "boolean",
        default: false,
        required: false,
        desc: "Auto approve"
      })
      .showHelpOnFail(true);

  public async handler(argv: any) {
    await displayVersionMessage();
    const command = argv.app;
    const outdir = argv.output;
    const autoApprove = argv.autoApprove;
    const stack = argv.stack;

    if (!autoApprove) {
      console.error(
        chalkColour`{redBright ERROR: The watch command currently always automatically deploys and approves changes. Please add the --auto-approve flag to confirm you understand this behaviour.}`
      );
      process.exit(1);
    }

    await renderInk(
      React.createElement(Watch, {
        targetDir: outdir,
        targetStack: stack,
        synthCommand: command,
        autoApprove
      })
    );
  }
}

module.exports = new Command();
