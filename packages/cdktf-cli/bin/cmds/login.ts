import yargs from "yargs";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "../../lib/errors";
import { BaseCommand } from "./helper/base-command";

class Command extends BaseCommand {
  public readonly command = "login";
  public readonly describe =
    "Retrieves an API token to connect to Terraform Cloud.";
  public readonly builder = (args: yargs.Argv) => args.showHelpOnFail(true);

  public async handleCommand(argv: any) {
    Errors.setScope("login");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.login(argv);
  }
}

module.exports = new Command();
