import yargs from "yargs";
import { requireHandlers } from "./helper/utilities";
import { Errors } from "../../lib/errors";

class Command implements yargs.CommandModule {
  public readonly command = "login";
  public readonly describe =
    "Retrieves an API token to connect to Terraform Cloud.";
  public readonly builder = (args: yargs.Argv) => args.showHelpOnFail(true);

  public async handler(argv: any) {
    Errors.setScope("login");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    api.login(argv);
  }
}

module.exports = new Command();
