// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as path from "path";
import { Errors } from "../../../lib/errors";
export function isCdktfProjectDirectory(directory: string): boolean {
  try {
    const cdktfPath = path.join(directory, "cdktf.json");
    const cdktf = require(cdktfPath);
    return cdktf.language && cdktf.app;
  } catch {
    return false;
  }
}

export function throwIfNotProjectDirectory(directory = process.cwd()): void {
  if (!isCdktfProjectDirectory(directory)) {
    throw Errors.Usage(
      `${directory} is not a cdktf project directory, no cdktf.json found or cdktf.json is missing language / app keys`
    );
  }
}
