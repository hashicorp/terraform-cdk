// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
import yargs from "yargs";
import { config as cfg } from "@cdktf/provider-generator";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "../../lib/errors";
import { BaseCommand } from "./helper/base-command";

const config = cfg.readConfigSync();

class Command extends BaseCommand {
  public readonly command = "diff [stack]";
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
        desc: "Output directory for the synthesized Terraform config",
        alias: "o",
      })
      .option("refresh-only", {
        default: false,
        required: false,
        boolean: true,
        desc: 'Select the "refresh only" planning mode, which checks whether remote objects still match the outcome of the most recent Terraform apply but does not propose any actions to undo any changes made outside of Terraform.',
      })
      .showHelpOnFail(true);

  public async handleCommand(argv: any) {
    Errors.setScope("diff");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.diff(argv);
  }
}

module.exports = new Command();
