// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as yargs from "yargs";
import { readConfigSync } from "@cdktf/commons";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "@cdktf/commons";
import { BaseCommand } from "./helper/base-command";

const config = readConfigSync();

class Command extends BaseCommand {
  public readonly command = "destroy [stacks..]";
  public readonly describe = "Destroy the given stacks";

  public readonly builder = (args: yargs.Argv) =>
    args
      .positional("stacks", {
        desc: "Destroy stacks matching the given ids. Required when more than one stack is present in the app",
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
      .option("ignore-missing-stack-dependencies", {
        type: "boolean",
        required: false,
        desc: "Don't check if all stacks specified in the command have their dependencies included as well",
        default: false,
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
      .option("var", {
        type: "array",
        default: [],
        required: false,
        desc: "Set a value for one of the input variables in the stack or stacks to apply. Use this option more than once to set more than one variable.",
      })
      .option("var-file", {
        type: "array",
        default: [],
        required: false,
        desc: "Load variable values from the given file, in addition to the default files terraform.tfvars and *.auto.tfvars. Use this option more than once to include more than one variables file.",
      })
      .option("no-color", {
        type: "boolean",
        default: process.env.FORCE_COLOR === "0",
        required: false,
        desc: "Disables terminal formatting sequences in the output.",
      })
      .option("migrate-state", {
        type: "boolean",
        default: false,
        required: false,
        desc: "Pass this flag after switching state backends to approve a state migration for all targeted stacks",
      })
      .option("skip-synth", {
        type: "boolean",
        default: false,
        required: false,
        desc: "Skip synthesis of the application, assume the synthesized Terraform code is already present and up to date",
      })
      .showHelpOnFail(true);

  public async handleCommand(argv: any) {
    Errors.setScope("destroy");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.destroy(argv);
  }
}

module.exports = new Command();
