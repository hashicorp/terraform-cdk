// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs-extra";
import path from "path";
import * as pkgUp from "pkg-up";

export const readPackageJson = () => {
  const pkgPath = pkgUp.sync({ cwd: __dirname });
  if (!pkgPath) {
    throw new Error("unable to find package.json");
  }

  return JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
};

export const projectRootPath = () => {
  const pkgPath = pkgUp.sync({ cwd: __dirname });
  if (!pkgPath) {
    throw new Error("unable to find package.json");
  }

  return path.dirname(pkgPath);
};

// deferred require to keep cdktf-cli main entrypoint small (e.g. for fast shell completions)
export const requireHandlers = () => {
  // if file exists relative to this file return its file path
  // otherwise return the file path relative to the project root
  const filePath = path.join(__dirname, "..", "handlers.js");
  if (fs.existsSync(filePath)) {
    return require(filePath);
  }
  return require(path.join(
    projectRootPath(),
    "bundle",
    "bin",
    "cmds",
    "handlers.js"
  ));
};

export function readStreamAsString(
  stream: typeof process.stdin,
  noTTYErrorMessage: string
): Promise<string> {
  return new Promise((ok, ko) => {
    if (stream.isTTY) {
      ko(noTTYErrorMessage);
    } else {
      let string = "";
      stream.on("data", (data) => (string += data.toString()));

      stream.on("close", () => ok(string));
      stream.on("error", (err) => ko(err));
    }
  });
}

export function findFileAboveCwd(
  file: string,
  rootPath = process.cwd()
): string | null {
  const fullPath = path.resolve(rootPath, file);
  if (fs.existsSync(fullPath)) {
    return fullPath;
  }

  const parentDir = path.resolve(rootPath, "..");
  if (fs.existsSync(parentDir) && parentDir !== rootPath) {
    return findFileAboveCwd(file, parentDir);
  }

  return null;
}
