// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import yargs from "yargs";

class Command implements yargs.CommandModule {
  public readonly command = "provider";
  public readonly describe =
    "A set of subcommands that facilitates provider management";

  public readonly builder = (args: yargs.Argv) =>
    args.command(require("./get")).command(require("./provider-add"));

  public readonly handler = () => {
    yargs.showHelp();
  };
}

module.exports = new Command();
