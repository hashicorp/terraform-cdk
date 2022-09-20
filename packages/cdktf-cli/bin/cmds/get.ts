// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
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
      })
      .option("parallelism", {
        type: "number",
        required: false,
        desc: "Number of concurrently generated provider / module bindings. Only applies for languages that are not Typescript (translated by JSII). Defaults to infinity, denoted by -1",
        default: -1,
      });

  public async handleCommand(argv: any) {
    Errors.setScope("get");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.get(argv);
  }
}

module.exports = new Command();
