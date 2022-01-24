import yargs from "yargs";
import { config as cfg } from "@cdktf/provider-generator";
import { requireHandlers } from "./helper/utilities";

const config = cfg.readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = "diff [stack] [OPTIONS]";
  public readonly describe =
    "Perform a diff (terraform plan) for the given stack";
  public readonly aliases = ["plan"];

  public readonly builder = (args: yargs.Argv) =>
    args
      .positional("stack", {
        desc: "Diff stack which matches the given id only. Required when more than one stack is present in the app",
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
      .showHelpOnFail(true);

  public async handler(argv: any) {
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    api.diff(argv);
  }
}

module.exports = new Command();
