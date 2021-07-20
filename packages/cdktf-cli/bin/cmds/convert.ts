import yargs from "yargs";
import { convert } from "@cdktf/hcl2cdk";
import { displayVersionMessage } from "./version-check";

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
    "Converts a single file of HCL configuration to Terraform CDK. Takes the file to be converted on stdin.";

  public readonly builder = (args: yargs.Argv) =>
    args
      .example(
        "cat main.tf | cdktf convert",
        "Takes the HCL content of main.tf and converts it to Terraform CDK content and prints it"
      )
      .example(
        "cat main.tf | cdktf convert > imported.ts",
        "Takes the HCL content of main.tf and converts it to Terraform CDK content in imported.ts"
      )
      .example(
        "cat main.tf | cdktf convert --language python > imported.py",
        "Takes the HCL content of main.tf and converts it to Terraform CDK content in imported.ts"
      )
      .option("language", {
        choices: ["typescript", "python", "csharp", "java"],
        default: "typescript",
      })
      .showHelpOnFail(true);

  public async handler({ language }: any) {
    await displayVersionMessage();

    const input = await readStreamAsString(process.stdin);
    const { all: output } = await convert(input, {
      language,
    });
    console.log(output);
  }
}

module.exports = new Command();
