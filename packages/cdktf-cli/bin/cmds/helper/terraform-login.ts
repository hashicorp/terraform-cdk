import * as fs from 'fs';
import * as readlineSync from 'readline-sync';
import * as open from 'open';
const homedir = require('os').homedir();
const terraformCredentialsFilePath = `${homedir}/.terraform.d/credentials.tfrc.json`
const commandDescribe = `cdktf will request an API token for app.terraform.io using your browser.

If login is successful, cdktf will store the token in plain text in
the following file for use by subsequent Terraform commands:
    ${terraformCredentialsFilePath}
`
const terraformLoginURL = `https://app.terraform.io/app/settings/tokens?source=terraform-login`

export interface hostname {
    token: string;
}

export interface credentials {
    'app.terraform.io': hostname;
}

export interface TerraformCredentialsFile {
    credentials: credentials;
}


export class TerraformLogin {

    public askToContinue(): boolean {
        // Describe the command
        console.log(commandDescribe);

        let isLogin = false

        const c = readlineSync.question(`Do you want to continue (yes/no)? `, { defaultInput: 'yes' });
        if (c == "yes" || c == "y" || c == "\n") {
            isLogin = true
            this.openBrowser();
        }

        return isLogin
    }

    openBrowser() {
        console.log(`\nopening webpage using your browser.....`);
        console.log(`If the web browser didn't open the window automatically, you can go to the following url:
        ${terraformLoginURL}\n`);
        return open.default(terraformLoginURL);
    }

    public async askForToken()  {
        return readlineSync.question(`Token for app.terraform.io: 🔑 `, { hideEchoBack: true, mask: '' })
    }

    public async saveTerraformCredentials(token: string) {
        if (fs.existsSync(terraformCredentialsFilePath)) {
            let terraformCredentials: TerraformCredentialsFile
            const credentialsFile = JSON.parse(fs.readFileSync(terraformCredentialsFilePath).toString());
            terraformCredentials = credentialsFile
            terraformCredentials.credentials["app.terraform.io"].token = token
            fs.writeFileSync(terraformCredentialsFilePath, JSON.stringify(terraformCredentials, undefined, 2));
        } else {
            const credentialsFileJSON = JSON.stringify({ "credentials": { "app.terraform.io": { "token": token } } }, undefined, 2)
            fs.writeFileSync(terraformCredentialsFilePath, credentialsFileJSON);
        }
    }
}

// Note: we might want to look into using 'readline' instead for async reading of input.
