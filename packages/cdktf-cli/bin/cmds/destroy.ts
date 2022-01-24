import * as yargs from "yargs";
import { config as cfg } from "@cdktf/provider-generator";
import { requireHandlers } from "./helper/utilities";

const config = cfg.readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = "destroy [stack] [OPTIONS]";
  public readonly describe = "Destroy the given stack";

  public readonly builder = (args: yargs.Argv) =>
    args
      .positional("stack", {
        desc: "Destroy stack which matches the given id only. Required when more than one stack is present in the app",
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
      .showHelpOnFail(true);

  public async handler(argv: any) {
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    api.destroy(argv);
  }
}

module.exports = new Command();
