// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import yargs from "yargs";

export abstract class BaseCommand implements yargs.CommandModule {
  public readonly handler = async (args: any) => {
    // only run command if not doing shell completions
    // required due to a bug in yargs: https://github.com/yargs/yargs/issues/1965
    if (!args.getYargsCompletions) {
      await this.handleCommand(args);
    }
  };

  abstract handleCommand(args: any): Promise<void>;
}
