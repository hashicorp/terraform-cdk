/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as fs from "fs-extra";
import * as path from "path";
import { Errors } from "@cdktf/commons";
import * as glob from "glob";

const autoLoadedFileNames = ["terraform.tfvars", "terraform.tfvars.json"];
const autoLoadedFileExtensions = [".auto.tfvars", ".auto.tfvars.json"];

export function sanitizeVarFiles(
  varFiles: string[],
  cwd: string = process.cwd()
): string[] {
  const files: string[] = [];

  // First add the auto-loaded files, because later added flags override the newer ones
  // See https://developer.hashicorp.com/terraform/language/values/variables#variable-definition-precedence

  // Check for auto-loaded files
  autoLoadedFileNames.forEach((fileName) => {
    const resolvedPath = path.resolve(cwd, fileName);
    if (fs.existsSync(resolvedPath)) {
      files.push(resolvedPath);
    }
  });

  // Check for auto-loaded file extension
  autoLoadedFileExtensions.forEach((extension) => {
    const globFiles = glob.sync(`*${extension}`, { cwd });

    globFiles.forEach((file) => {
      files.push(path.resolve(cwd, file));
    });
  });

  // Check if the file exists and is a file
  varFiles.forEach((varFile) => {
    const resolvedPath = path.resolve(cwd, varFile);
    if (!fs.existsSync(resolvedPath)) {
      throw Errors.Usage(
        `Could not find var-file ${varFile} at ${resolvedPath}`
      );
    }

    if (!fs.lstatSync(resolvedPath).isFile()) {
      throw Errors.Usage(
        `The var-file ${varFile} at ${resolvedPath} is no file.`
      );
    }

    files.push(resolvedPath);
  });

  return files;
}
