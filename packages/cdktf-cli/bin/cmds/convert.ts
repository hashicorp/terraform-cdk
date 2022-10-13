// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import yargs from "yargs";
import { Errors } from "../../lib/errors";
import { BaseCommand } from "./helper/base-command";
import { requireHandlers } from "./helper/utilities";
import * as path from "path";
import * as fs from "fs-extra";

function readCdktfJson(cwd = process.cwd()): { language: string } | undefined {
  try {
    const cdktfJsonPath = path.join(cwd, "cdktf.json");
    return fs.readJsonSync(cdktfJsonPath);
  } catch (e) {
    return undefined;
  }
}

class Command extends BaseCommand {
  public readonly command = "convert";
  public readonly describe =
    "Converts a single file of HCL configuration to CDK for Terraform. Takes the file to be converted on stdin.";

  public readonly builder = (args: yargs.Argv) =>
    args
      .example(
        "cat main.tf | cdktf convert  --provider integrations/github",
        "Takes the HCL content of main.tf and converts it to CDK for Terraform content and prints it"
      )
      .example(
        "cat main.tf | cdktf convert --provider hashicorp/aws > imported.ts",
        "Takes the HCL content of main.tf and converts it to CDK for Terraform content in imported.ts"
      )
      .example(
        "cat main.tf | cdktf convert --provider 'hashicorp/aws@ ~>3.62.0' 'integrations/github@ ~>4.16.0' --language python > imported.py",
        "Takes the HCL content of main.tf and converts it to CDK for Terraform content in imported.ts"
      )
      .option("language", {
        choices: ["typescript", "python", "csharp", "java"],
        default: readCdktfJson()?.language || "typescript",
      })
      .option("provider", {
        describe:
          "The conversion needs to know which providers are used in addition to the ones in your cdktf.json file. We search for a cdktf.json below your current working directory.",
        type: "array",
        default: [],
      })
      .showHelpOnFail(true);

  public async handleCommand(argv: any) {
    Errors.setScope("convert");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.convert(argv);
  }
}

module.exports = new Command();
