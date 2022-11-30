// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Errors } from "./errors";
import { exec } from "./util";

export const terraformBinaryName =
  process.env.TERRAFORM_BINARY_NAME || "terraform";
export const terraformVersion = exec(
  terraformBinaryName,
  ["version", "-json"],
  {}
)
  .then((versionString) => JSON.parse(versionString).terraform_version)
  .catch((err) =>
    Errors.Usage(`Unknown: Error loading terraform version ${err}`)
  );
