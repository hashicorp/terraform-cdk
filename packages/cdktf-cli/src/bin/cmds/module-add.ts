// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import yargs from "yargs";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "@cdktf/commons";
import { BaseCommand } from "./helper/base-command";

class Command extends BaseCommand {
  public readonly command = "add <module...>";
  public readonly describe =
    "Add one or more Terraform modules to your project.";

  public readonly builder = (args: yargs.Argv) =>
    args.showHelpOnFail(true).positional("module", {
      type: "string",
      desc: "Name of the module to add. Can include a version constraint (e.g. terraform-aws-modules/vpc/aws@~>4.0.1).",
      required: true,
    });

  // TODO: Private and local modules

  public async handleCommand(argv: any) {
    Errors.setScope("module add");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.moduleAdd(argv);
  }
}

module.exports = new Command();
