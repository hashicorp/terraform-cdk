// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import yargs from "yargs";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "@cdktf/commons";
import { BaseCommand } from "./helper/base-command";

class Command extends BaseCommand {
  public readonly command = "init";
  public readonly describe = "Create a publishable Construct project.";

  public readonly builder = (args: yargs.Argv) =>
    args
      .showHelpOnFail(true)
      .option("name", {
        type: "string",
        desc: "Name of the construct to create",
        requiresArg: true,
        required: true,
      })
      .option("language", {
        type: "array",
        desc: "Languages to publish to",
        default: ["typescript"],
      });

  public async handleCommand(argv: any) {
    Errors.setScope("construct init");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.constructInit(argv);
  }
}

module.exports = new Command();
