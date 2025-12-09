// Copyright IBM Corp. 2019, 2025
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs";
import { confirm, password } from "@inquirer/prompts";
import * as open from "open";
import * as chalk from "chalk";
import * as terraformCloudClient from "./terraform-cloud-client";
import { Errors, logger } from "@cdktf/commons";

const chalkColour = new chalk.Instance();
const homedir = require("os").homedir();
const terraformCredentialsFilePath = `${homedir}/.terraform.d/credentials.tfrc.json`;

const nonIteractiveLoginWithNoTokenError = (invalid: boolean) =>
  Errors.Usage(
    `You are trying to use terraform init in a non-interactive mode while ${
      invalid ? "having an invalid token for" : "not being logged in to"
    }  Terraform Cloud. This can also happen when running cdktf convert against a project not using Typescript, since we need to create a temporary cdktf project for an accurate translation. Please run 'cdktf login' to log in.`,
  );

export interface Hostname {
  token: string;
}

export interface Credentials {
  [tfeHostname: string]: Hostname;
}

export interface TerraformCredentialsFile {
  credentials: Credentials;
}

export class TerraformLogin {
  constructor(private readonly tfeHostname: string) {}

  private get terraformLoginURL(): string {
    return `https://${this.tfeHostname}/app/settings/tokens?source=terraform-login`;
  }
  public async askToContinue(): Promise<boolean> {
    // Describe the command
    console.log(chalkColour`{greenBright Welcome to CDK for Terraform!}

By default, cdktf allows you to manage the state of your stacks using Terraform Cloud for free.
cdktf will request an API token for ${this.tfeHostname} using your browser.

If login is successful, cdktf will store the token in plain text in
the following file for use by subsequent Terraform commands:
    {whiteBright ${terraformCredentialsFilePath}}

{yellow Note: The local storage mode isn't recommended for storing the state of your stacks.}
`);

    let isLogin = false;

    const tfCloud = await confirm({
      message:
        "Do you want to continue with Terraform Cloud remote state management?",
    });

    if (tfCloud) {
      isLogin = true;
      await this.openBrowser();
    }

    return isLogin;
  }

  async openBrowser() {
    console.log(`\nopening webpage using your browser.....\n`);
    console.log(chalkColour`If the web browser didn't open the window automatically, you can go to the following url:
        {whiteBright ${this.terraformLoginURL}}\n`);
    try {
      await open.default(this.terraformLoginURL, {
        allowNonzeroExitCode: true,
        wait: false, // Should remain false. Otherwise, it waits for the app (browser) to exit/quit, not just the window.
      });
    } catch (e) {
      logger.debug(
        `Ignored error while trying to open ${this.terraformLoginURL}`,
        e,
      );
    }
  }

  public async askForToken() {
    const token = await password({
      message: `Token for ${this.tfeHostname} 🔑`,
      mask: "*",
    });
    return token;
  }

  public async saveTerraformCredentials(token: string) {
    const terraformCredentials = await this.getTerraformCredentialsFile();
    const credentialsFileJSON = JSON.stringify(
      {
        ...terraformCredentials,
        credentials: {
          ...terraformCredentials.credentials,
          [this.tfeHostname]: { token: token },
        },
      },
      undefined,
      2,
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
    if (this.tfeHostname in terraformCredentials.credentials) {
      return terraformCredentials.credentials[this.tfeHostname].token;
    }

    return "";
  }

  public async getTerraformCredentialsFile(): Promise<TerraformCredentialsFile> {
    try {
      const credentialsFile = JSON.parse(
        fs.readFileSync(terraformCredentialsFilePath).toString(),
      );
      const terraformCredentials: TerraformCredentialsFile = credentialsFile;

      return terraformCredentials;
    } catch (e) {
      logger.debug(
        `Could not find terraform credentials file at ${terraformCredentialsFilePath}`,
      );
      return { credentials: {} };
    }
  }

  public async isTokenValid(token: string): Promise<boolean> {
    try {
      await terraformCloudClient.getAccountDetails(this.tfeHostname, token);
      return true;
    } catch (e) {
      if ((e as any).statusCode === 401) {
        return false;
      }
      throw e;
    }
  }

  public async askToLogin(nonInteractive: boolean): Promise<string> {
    const hasToken = await this.checkIfTerraformCredentialsExist();
    const token: string | null = hasToken
      ? await this.getTokenFromTerraformCredentialsFile()
      : null;

    if (token && (await this.isTokenValid(token))) {
      return token;
    }

    // if we are not interactive, we need to abort
    if (nonInteractive) {
      throw nonIteractiveLoginWithNoTokenError(Boolean(token));
    }
    // we either have no token or not a valid one
    const shouldContinue = await this.askToContinue();
    if (shouldContinue) {
      const token = await this.askForToken();
      if (token == "") {
        console.error(`\nERROR: failed to gather token.\n`);
        process.exit(1);
      }
      this.saveTerraformCredentials(token);
      return token;
    }
    return ""; // cancel
  }
}

// Note: we might want to look into using 'readline' instead for async reading of input.
