// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as yargs from "yargs";
import { config as cfg } from "@cdktf/provider-generator";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "../../lib/errors";
import { BaseCommand } from "./helper/base-command";

const config = cfg.readConfigSync();

class Command extends BaseCommand {
  public readonly command = "watch [stacks..]";
  public readonly describe =
    "[experimental] Watch for file changes and automatically trigger a deploy";

  public readonly builder = (args: yargs.Argv) =>
    args
      .positional("stacks", {
        desc: "Deploy stacks matching the given ids. Required when more than one stack is present in the app",
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
      .option("auto-approve", {
        type: "boolean",
        default: false,
        required: false,
        desc: "Auto approve",
      })
      .option("parallelism", {
        type: "number",
        required: false,
        desc: "Number of concurrent CDKTF stacks to run. Defaults to infinity, denoted by -1",
        default: -1,
      })
      .option("terraform-parallelism", {
        type: "number",
        required: false,
        desc: "Forwards value as the `-parallelism` flag to Terraform. By default, the this flag is not forwarded to Terraform. Note: This flag is not supported by remote / cloud backend",
        // Setting value to negative will prevent it from being forwarded to terraform as an argument
        default: -1,
      })
      .showHelpOnFail(true);

  public async handleCommand(argv: any) {
    Errors.setScope("watch");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.watch(argv);
  }
}

module.exports = new Command();
