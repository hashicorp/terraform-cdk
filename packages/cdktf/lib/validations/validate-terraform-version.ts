/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { terraformBinaryName } from "../util";
import { ValidateBinaryVersion } from "./validate-binary-version";

/**
 * Validates the existence of a Terraform binary and with a certain version or higher.
 */
export class ValidateTerraformVersion extends ValidateBinaryVersion {
  constructor(
    protected versionConstraint: string,
    protected hint?: string,
  ) {
    super(
      terraformBinaryName,
      versionConstraint,
      `${terraformBinaryName} version`,
      hint,
    );
  }
}
