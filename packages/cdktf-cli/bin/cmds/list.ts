import yargs from "yargs";
import { config as cfg } from "@cdktf/provider-generator";
import { requireHandlers } from "./helper/utilities";

const config = cfg.readConfigSync();

class Command implements yargs.CommandModule {
  public readonly command = "list [OPTIONS]";
  public readonly describe = "List stacks in app.";

  public readonly builder = (args: yargs.Argv) =>
    args
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
      .showHelpOnFail(true);

  public async handler(argv: any) {
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    api.list(argv);
  }
}

module.exports = new Command();
