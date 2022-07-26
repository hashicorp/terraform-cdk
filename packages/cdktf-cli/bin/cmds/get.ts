// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0
import yargs from "yargs";
import { LANGUAGES, config as cfg } from "@cdktf/provider-generator";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "../../lib/errors";
import { BaseCommand } from "./helper/base-command";
const config = cfg.readConfigSync();

class Command extends BaseCommand {
  public readonly command = "get";
  public readonly describe =
    "Generate CDK Constructs for Terraform providers and modules.";

  public readonly builder = (args: yargs.Argv) =>
    args
      .showHelpOnFail(true)
      .option("output", {
        default: config.codeMakerOutput,
        type: "string",
        desc: "Output directory for generated Constructs",
        alias: "o",
      })
      .option("language", {
        default: config.language,
        required: true,
        type: "string",
        desc: "Output programming language",
        alias: "l",
        choices: LANGUAGES,
      });

  public async handleCommand(argv: any) {
    Errors.setScope("get");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.get(argv);
  }
}

module.exports = new Command();
