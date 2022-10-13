// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TerraformCli } from "../../../lib/models/terraform-cli";
import * as semver from "semver";
import { SynthesizedStack } from "../../../lib/synth-stack";
import { existsSync } from "fs-extra";
import * as path from "path";
import { AbortController } from "node-abort-controller"; // polyfill until we update to node 14
import { logger } from "../../../lib/logging";

const MIN_SUPPORTED_VERSION = "1.0.0";
const VERSION_REGEXP = /Terraform v\d+.\d+.\d+/;

export const getTerraformVersion = async (): Promise<string | null> => {
  try {
    // We're abusing the TerraformCli class here,
    // hence we need to construct this object.
    // Only the `workingDirectory` is releveant here.
    const fakeStack: SynthesizedStack = {
      name: "",
      workingDirectory: "./",
      constructPath: "",
      content: "",
      synthesizedStackPath: "",
      annotations: [],
      dependencies: [],
    };

    const terraform = new TerraformCli(new AbortController().signal, fakeStack);

    const terraformVersion = await terraform.version();
    const terraformVersionMatches = terraformVersion.match(VERSION_REGEXP);

    if (terraformVersionMatches === null) {
      return null;
    }
    // Should always be the first match found in the string
    return semver.clean(
      terraformVersionMatches[0].substring(
        terraformVersionMatches[0].indexOf("v")
      )
    );
  } catch (e) {
    logger.info(`Unable to determine Terraform version: ${e}`);
    return null;
  }
};

export const terraformCheck = async (): Promise<void> => {
  try {
    if (existsSync(path.join(process.cwd(), "terraform.tfstate"))) {
      throw new Error(`
        CDK for Terraform now supports multiple stacks!
        Found 'terraform.tfstate' Terraform state file. Please rename it to match the stack name. Learn more https://cdk.tf/multiple-stacks
      `);
    }
    const cleanTerraformVersion = await getTerraformVersion();

    if (cleanTerraformVersion !== null) {
      if (
        cleanTerraformVersion &&
        semver.lt(cleanTerraformVersion, MIN_SUPPORTED_VERSION)
      ) {
        const warningMessage = `Warning: unsupported Terraform version [${cleanTerraformVersion}] - please upgrade to >=${MIN_SUPPORTED_VERSION}`;
        console.warn(warningMessage);
      }
    }
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};
