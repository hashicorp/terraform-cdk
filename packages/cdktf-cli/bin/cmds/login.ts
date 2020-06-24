import * as yargs from 'yargs';
import { TerraformLogin } from './helper/terraform-login'
import * as terraformCloudClient from './helper/terraform-cloud-client'

class Command implements yargs.CommandModule {
    public readonly command = 'login';
    public readonly describe = 'Retrieves an API token to connect to Terraform Cloud.';
    public readonly builder = (args: yargs.Argv) => args

    public async handler(argv: any) {
        const args = argv as yargs.Arguments
        if (args["_"].length > 1) {
            console.error(`ERROR: 'cdktf login' command cannot have more than one argument.\n`);
            yargs.showHelp();
            process.exit(1);
        }

        const terraformLogin = new TerraformLogin
        const token = await terraformLogin.askToLogin();
        if (token == "") {
            console.error(`ERROR: couldn't configure Terraform Cloud credentials.\n`);
            process.exit(1);
        }

        // Get user details if token is set
        const userAccount = await terraformCloudClient.getAccountDetails(token)
        if (userAccount) {
            const username = userAccount.data.attributes.username;
            console.log("\ncdktf has successfully configured Terraform Cloud credentials!");
            console.log("\nHello %s", username);
        } else {
            console.error(`ERROR: couldn't configure Terraform Cloud credentials.\n`);
            process.exit(1);
        }
    };
}


module.exports = new Command();
