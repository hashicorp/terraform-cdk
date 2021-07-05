import yargs from "yargs";
import React from "react";
import { Convert } from "./ui/convert";
import { renderInk } from "./render-ink";
import { displayVersionMessage } from "./version-check";

class Command implements yargs.CommandModule {
  public readonly command = "convert [OPTIONS]";
  public readonly describe =
    "Converts a single file of HCL configuration to Terraform CDK. Takes the file to be converted on stdin.";

  public readonly builder = (args: yargs.Argv) =>
    args
      .example(
        "cat main.tf | cdktf convert",
        "Takes the HCL content of main.tf and converts it to Terraform CDK content and prints it"
      )
      .example(
        "cat main.tf | cdktf convert -f imported.ts",
        "Takes the HCL content of main.tf and converts it to Terraform CDK content in imported.ts"
      )
      .option("language", {
        choices: ["typescript"],
        default: "typescript",
      })
      .option("file", {
        alias: "f",
      })
      .showHelpOnFail(true);

  public async handler(argv: any) {
    await displayVersionMessage();

    await renderInk(
      React.createElement(Convert, { language: argv.language, file: argv.file })
    );
  }
}

module.exports = new Command();
