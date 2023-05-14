// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import yargs from "yargs";

class Command implements yargs.CommandModule {
  public readonly command = "stack";
  public readonly describe =
    "A set of subcommands that facilitates stack management";

  public readonly builder = (args: yargs.Argv) =>
    args.command(require("./list")).command(require("./stack-add"));

  public readonly handler = () => {
    yargs.showHelp();
  };
}

module.exports = new Command();
