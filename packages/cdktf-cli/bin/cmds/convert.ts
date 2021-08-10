import yargs from "yargs";
import { convert } from "@cdktf/hcl2cdk";
import { displayVersionMessage } from "./helper/version-check";
import { sendTelemetry } from "../../lib/checkpoint";
import { Errors } from "../../lib/errors";

function readStreamAsString(stream: typeof process.stdin): Promise<string> {
  return new Promise((ok, ko) => {
    if (stream.isTTY) {
      ko(
        "No stdin was passed, please use it like this: cat main.tf | cdktf convert > imported.ts"
      );
    } else {
      let string = "";
      stream.on("data", (data) => (string += data.toString()));

      stream.on("close", () => ok(string));
      stream.on("error", (err) => ko(err));
    }
  });
}

class Command implements yargs.CommandModule {
  public readonly command = "convert [OPTIONS]";
  public readonly describe =
    "Converts a single file of HCL configuration to CDK for Terraform. Takes the file to be converted on stdin.";

  public readonly builder = (args: yargs.Argv) =>
    args
      .example(
        "cat main.tf | cdktf convert",
        "Takes the HCL content of main.tf and converts it to CDK for Terraform content and prints it"
      )
      .example(
        "cat main.tf | cdktf convert > imported.ts",
        "Takes the HCL content of main.tf and converts it to CDK for Terraform content in imported.ts"
      )
      .example(
        "cat main.tf | cdktf convert --language python > imported.py",
        "Takes the HCL content of main.tf and converts it to CDK for Terraform content in imported.ts"
      )
      .option("language", {
        choices: ["typescript", "python", "csharp", "java"],
        default: "typescript",
      })
      .showHelpOnFail(true);

  public async handler({ language }: any) {
    await displayVersionMessage();

    const input = await readStreamAsString(process.stdin);
    let output;
    try {
      const { all, stats } = await convert(input, {
        language,
      });
      output = all;
      await sendTelemetry("convert", { ...stats, error: false });
    } catch (err) {
      throw Errors.Internal("convert", err.message, { language });
    }

    console.log(output);
  }
}

module.exports = new Command();
