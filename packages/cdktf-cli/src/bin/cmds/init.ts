// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import yargs from "yargs";

import { readPackageJson, requireHandlers } from "./helper/utilities";
import { Errors } from "@cdktf/commons";
import { BaseCommand } from "./helper/base-command";

const pkg = readPackageJson();

class Command extends BaseCommand {
  public readonly command = "init";
  public readonly describe = "Create a new cdktf project from a template.";
  public readonly builder = (args: yargs.Argv) =>
    args
      .showHelpOnFail(true)
      .option("template", {
        type: "string",
        desc: `The template to be used to create a new project. Either URL to zip file, one of the built-in templates, or a local directory.`,
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
      .option("enable-crash-reporting", {
        type: "boolean",
        desc: "Enable crash reporting for the CLI, refer to https://cdk.tf/crash-reporting for more details",
      })
      .option("providers", {
        describe: "Providers to add to your project",
        type: "array",
        default: [],
      })
      .option("providers-force-local", {
        type: "boolean",
        desc: "Force local installation of provider specified in init",
      })
      .option("tfe-hostname", {
        type: "string",
        desc: "The hostname of the Terraform Enterprise instance to use for remote state storage",
      })
      .strict();

  public async handleCommand(argv: any) {
    Errors.setScope("init");
    // deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
    const api = requireHandlers();
    await api.init(argv);
  }
}

module.exports = new Command();
