// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as yargs from "yargs";
import { config as cfg } from "@cdktf/provider-generator";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "../../lib/errors";
import { BaseCommand } from "./helper/base-command";

const config = cfg.readConfigSync();

class Command extends BaseCommand {
  public readonly command = "output [stacks..]";
  public readonly describe = "Prints the output of stacks";
  public readonly aliases = ["outputs"];

  public readonly builder = (args: yargs.Argv) =>
    args
      .positional("stacks", {
        desc: "Get outputs of the stacks matching the given ids. Required when more than one stack is present in the app",
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
        desc: "Output directory for the synthesized Terraform config",
        alias: "o",
      })
      .option("outputs-file", {
        type: "string",
        required: false,
        desc: "Path to file where stack outputs will be written as JSON",
        requiresArg: true,
      })
      .option("outputs-file-include-sensitive-outputs", {
        type: "boolean",
        required: false,
        desc: "Whether to include sensitive outputs in the output file",
        default: false,
      })
      .showHelpOnFail(true);

  public async handleCommand(argv: any) {
    Errors.setScope("output");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.output(argv);
  }
}

module.exports = new Command();
