import yargs from "yargs";

import { templates } from "./helper/init-templates";
import { readPackageJson, requireHandlers } from "./helper/utilities";
import { Errors } from "../../lib/errors";

const pkg = readPackageJson();

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
    Errors.setScope("init");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    api.init(argv);
  }
}

module.exports = new Command();
