// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import yargs from "yargs";
import {
  Errors,
  readConfigSync,
  shouldCheckCodeMakerOutput,
} from "@cdktf/commons";
import { requireHandlers } from "./helper/utilities";
import { BaseCommand } from "./helper/base-command";

const config = readConfigSync();

class Command extends BaseCommand {
  public readonly command = "synth";
  public readonly describe =
    "Synthesizes Terraform code for the given app in a directory.";
  public readonly aliases = ["synthesize"];

  public readonly builder = (args: yargs.Argv) =>
    args
      .option("app", {
        default: config.app,
        desc: "Command to use in order to execute cdktf app",
        alias: "a",
      })
      .option("output", {
        default: config.output,
        desc: "Output directory for the synthesized Terraform config",
        alias: "o",
      })
      .option("check-code-maker-output", {
        type: "boolean",
        desc: "Should `codeMakerOutput` existence check be performed? By default it will be checked if providers or modules are configured.",
        default: shouldCheckCodeMakerOutput(config),
      })
      .option("hcl", {
        type: "boolean",
        desc: "Should the output be in HCL format?",
        default: false,
      })
      .showHelpOnFail(true);

  public async handleCommand(argv: any) {
    Errors.setScope("synth");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.synth(argv);
  }
}

module.exports = new Command();
