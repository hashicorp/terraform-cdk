// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import yargs from "yargs";
import { config as cfg } from "@cdktf/provider-generator";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "../../lib/errors";
import { BaseCommand } from "./helper/base-command";

const config = cfg.readConfigSync();

class Command extends BaseCommand {
  public readonly command = "list";
  public readonly describe = "List stacks in app.";

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
      .showHelpOnFail(true);

  public async handleCommand(argv: any) {
    Errors.setScope("list");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.list(argv);
  }
}

module.exports = new Command();
