/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import path from "path";
import fs from "fs-extra";
import { logger } from "./logging";
import { exec } from "./util";

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

export async function getGradleDependencies() {
  let output;
  try {
    output = await exec("gradle", ["dependencies", "--console=plain"], {
      env: process.env,
    });
  } catch (e) {
    logger.debug(`Unable to run 'gradle dependencies': ${e}`);
    return undefined;
  }

  const lines = output.split(/\r\n|\r|\n/);

  // find the implementation section
  const implementationSection = lines.findIndex((line) =>
    line.includes("implementation - "),
  );
  if (implementationSection === -1) {
    logger.debug(
      `Unable to find implementation section in output of 'gradle dependencies': ${output}`,
    );
    return undefined;
  }

  const emptyLineRegex = /^\s*$/;
  const implementationSectionLines = lines.slice(implementationSection + 1);
  const sectionEnd = implementationSectionLines.findIndex((line) =>
    emptyLineRegex.test(line),
  );
  const implementationLines = implementationSectionLines.slice(0, sectionEnd);

  // find the api section
  const apiSection = lines.findIndex((line) => line.includes("api - "));
  if (apiSection === -1) {
    logger.debug(
      `Unable to find api section in output of 'gradle dependencies': ${output}`,
    );
    return undefined;
  }

  const apiSectionLines = lines.slice(apiSection + 1);
  const apiSectionEnd = apiSectionLines.findIndex((line) =>
    emptyLineRegex.test(line),
  );

  const apiLines = apiSectionLines.slice(0, apiSectionEnd);

  const prefixRegex = /^\s*[+\\-]+\s*/;
  const suffixRegex = /\s+\([nc*]\)\s*$/;

  return [...implementationLines, ...apiLines]
    .filter((line) => line !== "No dependencies")
    .map((line) => line.replace(prefixRegex, "").replace(suffixRegex, ""));
}

export type DependencyInformation = {
  group: string;
  name: string;
  version: string;
};
export function getDependencyInformationFromLine(
  line: string,
): DependencyInformation | undefined {
  const packageNameRegex = /^\s*([^:]+):([^:]+)(?::([^\s]+))?/;
  const matches = line.match(packageNameRegex);
  if (!matches) {
    logger.debug(
      "Unexpected format for gradle build. Please file an issue at https://cdk.tf/bug",
    );
    return undefined;
  }

  if (matches[3] === undefined) {
    return {
      group: "",
      name: matches[1],
      version: matches[2],
    };
  }

  return {
    group: matches[1],
    name: matches[2],
    version: matches[3],
  };
}

/*
 * Example output:
  implementation - Implementation dependencies for the 'main' feature. (n)
  +--- com.hashicorp:cdktf:0.18.0 (n)
  +--- software.constructs:constructs:10.0.25 (n)
  +--- junit:junit:4.13.2 (n)
  \--- org.junit.jupiter:junit-jupiter:5.8.0 (n)
*/
export async function getGradlePackageVersion(packageName: string) {
  const translationMap: Record<string, string> = {
    jsii: "jsii-runtime",
  };
  const gradlePackageName = translationMap[packageName] || packageName;
  logger.debug(
    "Running 'gradle dependencies' to find package version",
    gradlePackageName,
  );

  const lines = await getGradleDependencies();
  if (!lines || lines.length === 0) {
    return undefined;
  }

  // loop through the subsequent lines to find the one starting with package name
  for (const line of lines) {
    if (line.includes(`:${gradlePackageName}:`)) {
      const dep = getDependencyInformationFromLine(line);
      if (dep) {
        return dep.version;
      }
      return undefined;
    }
  }

  // Didn't find the right file, read the build.gradle file as a backup
  const buildVersion = await getGradlePackageVersionFromBuild(packageName);
  if (buildVersion) {
    return buildVersion.version;
  }

  return undefined;
}

export async function getGradlePackageVersionFromBuild(packageName: string) {
  const buildGradlePath = path.join(process.cwd(), "build.gradle");
  const buildGradleContents = await fs.readFile(buildGradlePath, "utf-8");
  const buildLines = buildGradleContents.split(/\r\n|\r|\n/);

  const dependenciesRegex = /^\s*dependencies\s*\{/i;
  const dependenciesStart = buildLines.findIndex((line) =>
    dependenciesRegex.test(line),
  );

  if (dependenciesStart === -1) {
    logger.debug(`Unable to find dependencies section in output build.gradle`);
    return undefined;
  }

  const foundIndex = buildLines.findIndex((line) => line.includes(packageName));
  if (foundIndex === -1) {
    logger.debug(
      `Unable to find package ${packageName} in output build.gradle`,
    );
    return undefined;
  }
  const line = buildLines[foundIndex];

  const colonSeparatedPackageNameRegex = new RegExp(
    `([^:]+):${packageName}(?::([^\\s]+))?`,
    "i",
  );

  const colonMatch = colonSeparatedPackageNameRegex.exec(line);
  if (colonMatch) {
    return {
      group: colonMatch[1],
      name: packageName,
      version: colonMatch[2] || "",
    };
  }

  const fileSeparatedPackageNameRegex = new RegExp(
    `java/(.*)/${packageName}/([^/]+)/.*\\.jar`,
    "i",
  );

  const fileMatch = fileSeparatedPackageNameRegex.exec(line);
  if (fileMatch) {
    return {
      group: fileMatch[1].replace(/\//g, "."),
      name: packageName,
      version: fileMatch[2],
    };
  }

  return undefined;
}
