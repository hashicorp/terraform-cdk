import yargs from "yargs";
import { terraformCheck } from "./helper/terraform-check";
import { displayVersionMessage } from "./helper/version-check";
import { checkForEmptyDirectory, runInit, templates } from "./helper/init";
import { checkEnvironment } from "./helper/check-environment";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require("../../package.json");

class Command implements yargs.CommandModule {
  public readonly command = "init [OPTIONS]";
  public readonly describe = "Create a new cdktf project from a template.";
  public readonly builder = (args: yargs.Argv) =>
    args
      .showHelpOnFail(true)
      .option("template", {
        type: "string",
        desc: `The template to be used to create a new project. Either URL to zip file or one of the built-in templates: [${templates
          .map((t) => `"${t}"`)
          .join(", ")}]`,
      })
      .option("project-name", {
        type: "string",
        desc: "The name of the project.",
      })
      .option("project-description", {
        type: "string",
        desc: "The description of the project.",
      })
      .option("dist", {
        type: "string",
        desc: 'Install dependencies from a "dist" directory (for development)',
      })
      .option("local", {
        type: "boolean",
        desc: "Use local state storage for generated Terraform.",
        default: false,
      })
      .option("cdktf-version", {
        type: "string",
        desc: "The cdktf version to use while creating a new project.",
        default: pkg.version,
      })
      .option("from-terraform-project", {
        type: "string",
        desc: "Use a terraform project as the basis, CDK constructs will be generated based on the .tf files in the path",
      })
      .strict();

  public async handler(argv: any) {
    await terraformCheck();
    await displayVersionMessage();
    await checkEnvironment("init");

    checkForEmptyDirectory(".");

    await runInit(argv);
  }
}

module.exports = new Command();
