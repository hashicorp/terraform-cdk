// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import yargs from "yargs";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "../../lib/errors";
import { BaseCommand } from "./helper/base-command";

class Command extends BaseCommand {
  public readonly command = "debug";
  public readonly describe =
    "Get debug information about the current project and environment";

  public readonly builder = (args: yargs.Argv) =>
    args.showHelpOnFail(true).option("json", {
      default: false,
      type: "boolean",
      desc: "If set, output will be in JSON format.",
    });

  public async handleCommand(argv: any) {
    Errors.setScope("debug");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.debug(argv);
  }
}

module.exports = new Command();
