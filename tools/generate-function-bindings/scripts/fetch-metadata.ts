// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

// invokes the terraform cli to get function metadata json
// (requires at least Terraform 1.4.0-beta2)
import { execSync } from "child_process";
import fs from "fs/promises";
import * as path from "path";
import prettier from "prettier";

export const FUNCTIONS_METADATA_FILE = "functions.json";
const TERRAFORM_BINARY_NAME = process.env.TERRAFORM_BINARY_NAME || "terraform";

async function fetchMetadata() {
  const json = execSync(
    `${TERRAFORM_BINARY_NAME} metadata functions -json`
  ).toString();
  const out = path.join(__dirname, FUNCTIONS_METADATA_FILE);
  await fs.writeFile(out, prettier.format(json, { parser: "json" }));
}

// run main entrypoint if we've been invoked directly
if (
  Array.isArray(process.argv) &&
  process.argv.length > 1 &&
  process.argv[1] === __filename
) {
  fetchMetadata();
}
