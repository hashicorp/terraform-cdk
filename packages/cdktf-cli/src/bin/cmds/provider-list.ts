// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import yargs from "yargs";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "../../lib/errors";
import { BaseCommand } from "./helper/base-command";

class ProviderListCommand extends BaseCommand {
  public readonly command = "list [flags]";
  public readonly describe = "List installed providers";

  public readonly builder = (args: yargs.Argv) =>
    args.showHelpOnFail(true).option("json", {
      type: "boolean",
      default: false,
      desc: "get providers list as json",
    });
  public async handleCommand(argv: any) {
    Errors.setScope("provider list");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.providerList(argv);
  }
}

module.exports = new ProviderListCommand();
