// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

import * as path from "path";
import * as fs from "fs";
import * as lockfile from "@yarnpkg/lockfile";
import * as glob from "glob";

const PROJECT_ROOT = path.join(__dirname, "..", "..");
const ignoredDependencies = [
  "@cdktf/cli-core",
  "@cdktf/commons",
  "@cdktf/hcl2cdk",
  "@cdktf/hcl2json",
  "@cdktf/provider-generator",
  "@cdktf/provider-schema",
  "cdktf",
];

// Read yarn.lock
const file = fs.readFileSync(path.join(PROJECT_ROOT, "yarn.lock"), "utf8");
const { type, object: yarnLockFile } = lockfile.parse(file);
if (type !== "success") {
  throw new Error("Failed to parse yarn.lock");
}

// Go through all package.json files and pin dependencies

const packageJsons = glob.sync(
  "{packages/*/package.json,packages/@cdktf/*/package.json,examples/*/*/package.json}",
  {
    cwd: PROJECT_ROOT,
  }
);

packageJsons.forEach((packageJsonPath) => {
  const pkg = JSON.parse(
    fs.readFileSync(path.join(PROJECT_ROOT, packageJsonPath), "utf8")
  );

  Object.entries(pkg.dependencies || {}).forEach(([dep, version]) => {
    if (ignoredDependencies.includes(dep)) {
      return;
    }

    if (yarnLockFile[`${dep}@${version}`]) {
      pkg.dependencies[dep] = yarnLockFile[`${dep}@${version}`].version;
    } else {
      console.info(`Could not find ${dep}@${version} in yarn.lock`);
    }
  });

  Object.entries(pkg.devDependencies || {}).forEach(([dep, version]) => {
    if (ignoredDependencies.includes(dep)) {
      return;
    }

    if (yarnLockFile[`${dep}@${version}`]) {
      pkg.devDependencies[dep] = yarnLockFile[`${dep}@${version}`].version;
    } else {
      console.info(`Could not find ${dep}@${version} in yarn.lock`);
    }
  });

  fs.writeFileSync(
    path.join(PROJECT_ROOT, packageJsonPath),
    JSON.stringify(pkg, null, 2),
    "utf8"
  );
});
