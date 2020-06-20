import * as yargs from 'yargs';
import { TerraformLogin } from './helper/terraform-login'

class Command implements yargs.CommandModule {
    public readonly command = 'login';
    public readonly describe = 'Retrieves an API token to connect to Terraform Cloud.';
    public readonly builder = (args: yargs.Argv) => args
        .showHelpOnFail(true);

    public async handler(argv: any) {
        const args = argv as yargs.Arguments
        if (args["_"].length > 1) {
            console.error(`ERROR: 'cdktf login' command cannot have more than one argument.`);
            yargs.showHelp();
            process.exit(1);
        }

        const terraformLogin = new TerraformLogin
        const shouldContinue = terraformLogin.askToContinue()
        if (shouldContinue) {
            const token = await terraformLogin.askForToken()
            terraformLogin.saveTerraformCredentials(token);
            console.log("cdktf has successfully configured Terraform Cloud credentials!")
        }
    };
}


module.exports = new Command();
