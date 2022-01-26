import yargs from "yargs";
import { config as cfg } from "@cdktf/provider-generator";
import { requireHandlers } from "./helper/utilities";

const config = cfg.readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = "synth [stack] [OPTIONS]";
  public readonly describe =
    "Synthesizes Terraform code for the given app in a directory.";
  public readonly aliases = ["synthesize"];

  public readonly builder = (args: yargs.Argv) =>
    args
      .positional("stack", {
        desc: "Stack to output when using --json flag",
        type: "string",
      })
      .option("app", {
        default: config.app,
        desc: "Command to use in order to execute cdktf app",
        alias: "a",
      })
      .option("output", {
        default: config.output,
        desc: "Output directory for the synthesized Terraform config",
        alias: "o",
      })
      .option("json", {
        type: "boolean",
        desc: "Provide JSON output for the generated Terraform configuration.",
        default: false,
      })
      .showHelpOnFail(true);

  public async handler(argv: any) {
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    api.synth(argv);
  }
}

module.exports = new Command();
