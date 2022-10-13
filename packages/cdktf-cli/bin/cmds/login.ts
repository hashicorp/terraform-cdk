// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import yargs from "yargs";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "../../lib/errors";
import { BaseCommand } from "./helper/base-command";

class Command extends BaseCommand {
  public readonly command = "login";
  public readonly describe =
    "Retrieves an API token to connect to Terraform Cloud or Terraform Enterprise.";
  public readonly builder = (args: yargs.Argv) =>
    args
      .showHelpOnFail(true)
      .option("tfe-hostname", {
        string: true,
        requiresArg: true,
        describe:
          "The Terraform Enterprise hostname to authenticate against. If you use Terraform Cloud you can leave this on the default.",
        default: "app.terraform.io",
      })
      .example("cdktf login", "Takes you through the interactive login process")
      .example(
        "cdktf login --tfe-hostname tfe.my-company.com",
        "Takes you through the interactive login process on your companies Terraform Enterprise instance."
      )
      .example(
        "cat my-token.txt | cdktf login",
        "Uses a locally stored token directly, instead of going through the interactive login process"
      )
      .strict();

  public async handleCommand(argv: any) {
    Errors.setScope("login");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.login(argv);
  }
}

module.exports = new Command();
