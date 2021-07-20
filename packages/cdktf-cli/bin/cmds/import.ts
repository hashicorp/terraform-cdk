import yargs from "yargs";
import { convertProject, getProjectTerraformFiles } from "@cdktf/hcl2cdk";
import { displayVersionMessage } from "./version-check";
import * as path from "path";
import { checkForEmptyDirectory, runInit, templates } from "./helper/init";
import * as fs from "fs-extra";
import { execSync } from "child_process";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require("../../package.json");

class Command implements yargs.CommandModule {
  public readonly command = "import [OPTIONS] <source> <destination>";
  public readonly describe =
    "Takes the Terraform project and converts it to a CDKTF version";

  public readonly builder = (args: yargs.Argv) =>
    args
      .example(
        "cdktf import ./ ../cdktf-project",
        "Takes the Terraform project in ./ and writes a CDKTF version in ../cdktf-project"
      )

      .option("language", {
        choices: ["typescript"],
        default: "typescript",
      })
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
      .positional("source", {
        describe: "Terraform Project to transform to CDK",
      })
      .positional("destination", {
        describe: "Path to where the project should be created",
      })
      .showHelpOnFail(true);

  public async handler({
    language,
    destination,
    source,
    template = "typescript",
    ...argv
  }: any) {
    if (!source) {
      throw new Error(
        `Expected first positional argument to be the source terraform project`
      );
    }
    if (!destination) {
      throw new Error(
        `Expected second positional argument to be the destination folder`
      );
    }

    await displayVersionMessage();
    console.warn(
      "This command does not import your state, it only generates CDKTF source code"
    );
    const absolutePath = path.resolve(destination);
    if (!fs.existsSync(absolutePath)) {
      fs.mkdirpSync(absolutePath);
    }

    checkForEmptyDirectory(absolutePath);

    await runInit({ ...argv, destination, template });

    const mainTs = fs.readFileSync(
      path.resolve(absolutePath, "main.ts"),
      "utf8"
    );

    await convertProject(
      getProjectTerraformFiles(source),
      mainTs,
      require(path.resolve(absolutePath, "cdktf.json")),
      {
        language,
      }
    );

    execSync("npm run get", { cwd: absolutePath });
  }
}

module.exports = new Command();
