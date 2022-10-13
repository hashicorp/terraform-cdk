// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { IValidation } from "constructs";
import { execSync } from "child_process";
import * as semver from "semver";

/**
 * A validation that can be applied to a construct that will error if the
 * construct is being used in an environment with a version of a binary lower than the specified version.
 */
export class ValidateBinaryVersion implements IValidation {
  constructor(
    protected binary: string,
    protected versionConstraint: string,
    protected versionCommand: string,
    protected hint?: string
  ) {}

  public validate() {
    try {
      const versionOfCommand = execSync(this.versionCommand, {
        stdio: "pipe",
      }).toString();

      const semverRegex = /\d+\.\d+\.\d+/;
      const version = versionOfCommand.match(semverRegex);
      if (!version) {
        return [
          `Could not determine version of ${this.binary} (running ${this.versionCommand})`,
        ];
      }

      if (!semver.satisfies(version[0], this.versionConstraint)) {
        return [
          `${this.binary} version ${
            version[0]
          } is lower than the required version ${
            this.versionConstraint
          } for this construct. ${this.hint || ""}`,
        ];
      }
      return [];
    } catch (e) {
      return [
        `Could not determine version of ${this.binary}, ${this.versionCommand} failed: ${e}`,
      ];
    }
  }
}
