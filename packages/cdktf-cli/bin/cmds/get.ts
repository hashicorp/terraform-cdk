import yargs from "yargs";
import { LANGUAGES, config as cfg } from "@cdktf/provider-generator";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "../../lib/errors";
const config = cfg.readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = "get [OPTIONS]";
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

  public async handler(argv: any) {
    Errors.setScope("get");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    api.get(argv);
  }
}

module.exports = new Command();
