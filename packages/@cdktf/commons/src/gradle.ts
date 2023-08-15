/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import path from "path";
import fs from "fs-extra";
import { logger } from "./logging";

export function isGradleProject(workingDirectory: string): boolean {
  const buildGradlePath = path.join(workingDirectory, "build.gradle");

  try {
    fs.accessSync(buildGradlePath, fs.constants.R_OK | fs.constants.W_OK);
    return true;
  } catch {
    logger.debug(`No build.gradle found at ${buildGradlePath}`);
    return false;
  }
}
