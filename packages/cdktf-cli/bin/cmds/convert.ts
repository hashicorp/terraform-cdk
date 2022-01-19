import yargs from "yargs";
import { requireHandlers } from "./helper/utilities";

class Command implements yargs.CommandModule {
  public readonly command = "convert [OPTIONS]";
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
        default: "typescript",
      })
      .option("provider", {
        describe:
          "The conversion needs to know which providers are used in addition to the ones in your cdktf.json file. We search for a cdktf.json below your current working directory.",
        type: "array",
        default: [],
      })
      .showHelpOnFail(true);

  public async handler(argv: any) {
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    api.convert(argv);
  }
}

module.exports = new Command();
