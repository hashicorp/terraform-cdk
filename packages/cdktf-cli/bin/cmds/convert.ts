import yargs from "yargs";
import { convert } from "@cdktf/hcl2cdk";
import { displayVersionMessage } from "./helper/version-check";
import { sendTelemetry } from "../../lib/checkpoint";
import { Errors } from "../../lib/errors";
import * as fs from "fs-extra";
import * as path from "path";
import {
  readSchema,
  ConstructsMakerProviderTarget,
  LANGUAGES,
  config,
} from "@cdktf/provider-generator";

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

function findFileBelowCwd(
  file: string,
  rootPath = process.cwd()
): string | null {
  const fullPath = path.resolve(rootPath, file);
  if (fs.existsSync(fullPath)) {
    return fullPath;
  }

  if (fs.existsSync(path.resolve(rootPath, ".."))) {
    return findFileBelowCwd(file, path.resolve(rootPath, ".."));
  }

  return null;
}

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

  public async handler({ language }: any) {
    await displayVersionMessage();

    const providerRequirements: string[] = yargs.argv.provider as string[];
    const cdktfJsonPath = findFileBelowCwd("cdktf.json");
    if (cdktfJsonPath) {
      const cdktfJson = await fs.readJson(cdktfJsonPath);
      providerRequirements.push(...cdktfJson.terraformProviders);
    }
    // Get all the provider schemas
    const { providerSchema } = await readSchema(
      providerRequirements.map((spec) =>
        ConstructsMakerProviderTarget.from(
          new config.TerraformProviderConstraint(spec),
          LANGUAGES[0]
        )
      )
    );

    const input = await readStreamAsString(process.stdin);
    let output;
    try {
      const { all, stats } = await convert(input, {
        language,
        providerSchema,
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
