// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import yargs from "yargs";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "@cdktf/commons";
import { BaseCommand } from "./helper/base-command";

class Command extends BaseCommand {
  public readonly command = "add <constructName>";
  public readonly describe = "Add a Construct to your project.";

  public readonly builder = (args: yargs.Argv) =>
    args.showHelpOnFail(true).positional("constructName", {
      type: "string",
      desc: "Name of the construct to add",
      required: true,
    });

  public async handleCommand(argv: any) {
    Errors.setScope("construct add");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.constructAdd(argv);
  }
}

module.exports = new Command();
