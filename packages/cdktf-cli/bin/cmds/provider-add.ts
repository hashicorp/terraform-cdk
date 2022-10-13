// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import yargs from "yargs";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "../../lib/errors";
import { BaseCommand } from "./helper/base-command";

class Command extends BaseCommand {
  public readonly command = "add <provider...>";
  public readonly describe =
    "Add one or more Terraform providers to your project.";

  public readonly builder = (args: yargs.Argv) =>
    args
      .showHelpOnFail(true)
      .positional("provider", {
        type: "string",
        desc: "Name of the provider to add. Can include a version constraint (e.g. aws@~>4.0).",
        required: true,
      })
      .option("force-local", {
        type: "boolean",
        desc: "force local provider installation, even if pre-built provider exists",
      });

  public async handleCommand(argv: any) {
    Errors.setScope("provider add");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.providerAdd(argv);
  }
}

module.exports = new Command();
