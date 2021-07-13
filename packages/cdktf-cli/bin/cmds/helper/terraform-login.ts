import * as fs from "fs";
import * as readlineSync from "readline-sync";
import * as open from "open";
import * as chalk from "chalk";

const chalkColour = new chalk.Instance();
const homedir = require("os").homedir();
const terraformCredentialsFilePath = `${homedir}/.terraform.d/credentials.tfrc.json`;
const terraformLoginURL = `https://app.terraform.io/app/settings/tokens?source=terraform-login`;

export interface Hostname {
  token: string;
}

export interface Credentials {
  "app.terraform.io": Hostname;
}

export interface TerraformCredentialsFile {
  credentials: Credentials;
}

export class TerraformLogin {
  public askToContinue(): boolean {
    // Describe the command
    console.log(chalkColour`{greenBright Welcome to CDK for Terraform!}

By default, cdktf allows you to manage the state of your stacks using Terraform Cloud for free.
cdktf will request an API token for app.terraform.io using your browser.

If login is successful, cdktf will store the token in plain text in
the following file for use by subsequent Terraform commands:
    {whiteBright ${terraformCredentialsFilePath}}

{yellow Note: The local storage mode isn't recommended for storing the state of your stacks.}
`);

    let isLogin = false;

    const c = readlineSync.question(
      chalkColour`{whiteBright Do you want to continue with Terraform Cloud remote state management (yes/no)?} `,
      { defaultInput: "yes" }
    );
    if (c == "yes" || c == "y" || c == "\n") {
      isLogin = true;
      this.openBrowser();
    }

    return isLogin;
  }

  openBrowser() {
    console.log(`\nopening webpage using your browser.....\n`);
    console.log(chalkColour`If the web browser didn't open the window automatically, you can go to the following url:
        {whiteBright ${terraformLoginURL}}\n`);
    return open.default(terraformLoginURL);
  }

  public async askForToken() {
    return readlineSync.question(
      chalkColour`Token for {bold app.terraform.io}: 🔑 `,
      { hideEchoBack: true, mask: "" }
    );
  }

  public async saveTerraformCredentials(token: string) {
    const credentialsFileJSON = JSON.stringify(
      { credentials: { "app.terraform.io": { token: token } } },
      undefined,
      2
    );
    fs.writeFileSync(terraformCredentialsFilePath, credentialsFileJSON);
  }

  public async checkIfTerraformCredentialsExist() {
    if (fs.existsSync(terraformCredentialsFilePath)) {
      const token = await this.getTokenFromTerraformCredentialsFile();
      if (token != "") {
        return true;
      }
    }

    return false;
  }

  public async getTokenFromTerraformCredentialsFile(): Promise<string> {
    const terraformCredentials = await this.getTerraformCredentialsFile();
    if ("app.terraform.io" in terraformCredentials.credentials) {
      return terraformCredentials.credentials["app.terraform.io"].token;
    }

    return "";
  }

  public async getTerraformCredentialsFile(): Promise<TerraformCredentialsFile> {
    const credentialsFile = JSON.parse(
      fs.readFileSync(terraformCredentialsFilePath).toString()
    );
    const terraformCredentials: TerraformCredentialsFile = credentialsFile;

    return terraformCredentials;
  }

  public async askToLogin(): Promise<string> {
    const checkToken = await this.checkIfTerraformCredentialsExist();
    // user login if not already
    if (!checkToken) {
      const shouldContinue = this.askToContinue();
      if (shouldContinue) {
        const token = await this.askForToken();
        if (token == "") {
          console.error(`\nERROR: failed to gather token.\n`);
          process.exit(1);
        }
        this.saveTerraformCredentials(token);
        return token;
      }
    } else {
      const token = this.getTokenFromTerraformCredentialsFile();
      return token;
    }

    return "";
  }
}

// Note: we might want to look into using 'readline' instead for async reading of input.
