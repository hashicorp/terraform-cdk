// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import yargs from "yargs";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "../../lib/errors";
import { BaseCommand } from "./helper/base-command";

class Command extends BaseCommand {
  public readonly command = "upgrade <provider...>";
  public readonly describe = `Upgrade one or more Terraform providers in your project to the newest version compatible with your CDKTF version.
    If your project has the associated pre-built provider already installed, CDKTF updates the pre-built provider. Otherwise, CDKTF adds the specified provider to the cdktf.json configuration file and generates local provider bindings.`;

  public readonly builder = (args: yargs.Argv) =>
    args.showHelpOnFail(true).positional("provider", {
      type: "string",
      desc: "Name of the provider to upgrade. Can include a version constraint (e.g. aws@~>4.0).",
      required: true,
    });

  public async handleCommand(argv: any) {
    Errors.setScope("provider upgrade");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.providerUpgrade(argv);
  }
}

module.exports = new Command();
