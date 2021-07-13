import yargs from "yargs";
import { TerraformLogin } from "./helper/terraform-login";
import * as terraformCloudClient from "./helper/terraform-cloud-client";
import * as chalk from "chalk";
import { terraformCheck } from "./terraform-check";
import { displayVersionMessage } from "./version-check";

const chalkColour = new chalk.Instance();

class Command implements yargs.CommandModule {
  public readonly command = "login";
  public readonly describe =
    "Retrieves an API token to connect to Terraform Cloud.";
  public readonly builder = (args: yargs.Argv) => args.showHelpOnFail(true);

  public async handler(argv: any) {
    await terraformCheck();
    await displayVersionMessage();

    const args = argv as yargs.Arguments;
    if (args["_"].length > 1) {
      console.error(
        chalkColour`{redBright ERROR: 'cdktf login' command cannot have more than one argument.}\n`
      );
      yargs.showHelp();
      process.exit(1);
    }

    const terraformLogin = new TerraformLogin();
    const token = await terraformLogin.askToLogin();
    if (token == "") {
      console.error(
        chalkColour`{redBright ERROR: couldn't configure Terraform Cloud credentials.}\n`
      );
      process.exit(1);
    }

    // Get user details if token is set
    const userAccount = await terraformCloudClient.getAccountDetails(token);
    if (userAccount) {
      const username = userAccount.data.attributes.username;
      console.log(
        chalkColour`\n{greenBright cdktf has successfully configured Terraform Cloud credentials!}`
      );
      console.log(chalkColour`\nWelcome {bold ${username}}!`);
    } else {
      console.error(
        chalkColour`{redBright ERROR: couldn't configure Terraform Cloud credentials.}\n`
      );
      process.exit(1);
    }
  }
}

module.exports = new Command();
