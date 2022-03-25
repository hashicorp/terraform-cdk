import * as yargs from "yargs";
import { config as cfg } from "@cdktf/provider-generator";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "../../lib/errors";

const config = cfg.readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = "deploy [OPTIONS] <stacks..>";
  public readonly describe = "Deploy the given stacks";
  public readonly aliases = ["apply"];

  public readonly builder = (args: yargs.Argv) =>
    args
      .positional("stacks", {
        desc: "Deploy stacks matching the given ids. Required when more than one stack is present in the app",
        type: "string",
      })
      .option("app", {
        default: config.app,
        required: true,
        desc: "Command to use in order to execute cdktf app",
        alias: "a",
      })
      .option("output", {
        default: config.output,
        required: true,
        desc: "Output directory for the synthesized Terraform config",
        alias: "o",
      })
      .option("auto-approve", {
        type: "boolean",
        default: false,
        required: false,
        desc: "Auto approve",
      })
      .option("outputs-file", {
        type: "string",
        required: false,
        desc: "Path to file where stack outputs will be written as JSON",
        requiresArg: true,
      })
      .option("outputs-file-include-sensitive-outputs", {
        type: "boolean",
        required: false,
        desc: "Whether to include sensitive outputs in the output file",
        default: false,
      })
      .option("ignore-missing-stack-dependencies", {
        type: "boolean",
        required: false,
        desc: "Don't check if all stacks specified in the command have their dependencies included as well",
        default: false,
      })
      .option("parallelism", {
        type: "number",
        required: false,
        desc: "Number of concurrent CDKTF stacks to run. Defaults to infinity, denoted by -1",
        default: -1,
      })
      .showHelpOnFail(true);

  public async handler(argv: any) {
    Errors.setScope("deploy");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    api.deploy(argv);
  }
}

module.exports = new Command();
