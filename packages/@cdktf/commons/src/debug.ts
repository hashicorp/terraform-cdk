// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as path from "path";
import * as os from "os";
import { logger } from "./logging";
import { exec } from "./util";
import { terraformVersion } from "./terraform";
import { DISPLAY_VERSION } from "./version";
import { pathExists } from "fs-extra";
import { getGradlePackageVersion, isGradleProject } from "./gradle";

export function getLanguage(projectPath = process.cwd()): string | undefined {
  try {
    const cdktfJson = require(path.resolve(projectPath, "cdktf.json"));
    return cdktfJson.language;
  } catch {
    // We can not detect the language
    logger.debug(`Unable to detect language in ${projectPath}`);
    return undefined;
  }
}

async function getBinaryVersion(
  binary: string,
  versionCommand: string
): Promise<string | undefined> {
  const noOp = () => {}; // eslint-disable-line @typescript-eslint/no-empty-function
  try {
    const result = await exec(
      binary,
      [versionCommand],
      { env: process.env, stdio: [undefined, undefined, "ignore"] },
      noOp,
      noOp
    );
    return result.trim().replace(/\r?\n|\r/g, "");
  } catch (e) {
    logger.debug(`Failed to run ${binary} ${versionCommand}: ${e}`);
    return undefined;
  }
}

export function getDotnetVersion() {
  return getBinaryVersion("dotnet", "--version");
}

export function getJavaVersion() {
  return getBinaryVersion("java", "-version");
}
export function getMavenVersion() {
  return getBinaryVersion("mvn", "--version");
}

export function getGradleVersion() {
  return getBinaryVersion("gradle", "--version");
}

export async function getPythonVersion() {
  return (
    (await getBinaryVersion("python3", "--version")) ||
    (await getBinaryVersion("python", "--version"))
  );
}
export function getPipVersion() {
  return getBinaryVersion("pip", "--version");
}
export function getPipenvVersion() {
  return getBinaryVersion("pipenv", "--version");
}

export function getGoVersion() {
  return getBinaryVersion("go", "version");
}

export function getNodeVersion() {
  return getBinaryVersion("node", "--version");
}

async function getNodeModuleVersion(
  packageName: string
): Promise<string | undefined> {
  // Use the presence of the pnpm lock file as a signal that
  // we should interrogate packages via pnpm instead of npm.
  const usingPnpm = await pathExists("pnpm-lock.yaml");

  return usingPnpm
    ? getPnpmNodeModuleVersion(packageName)
    : getNpmNodeModuleVersion(packageName);
}

async function getPnpmNodeModuleVersion(
  packageName: string
): Promise<string | undefined> {
  let output;

  try {
    output = await exec("pnpm", ["list", packageName, "--json"], {
      env: { ...process.env },
    });
  } catch (e) {
    logger.debug(`Unable to run 'pnpm list ${packageName} --json': ${e}`);
    return undefined;
  }

  let json;
  try {
    json = JSON.parse(output);
  } catch (e) {
    logger.debug(
      `Unable to parse output of 'pnpm list ${packageName} --json': ${e}`
    );
    return undefined;
  }

  if (
    !json ||
    !Array.isArray(json) ||
    json.length === 0 ||
    !json[0]?.dependencies?.[packageName]?.version
  ) {
    logger.debug(
      `Unable to find '${packageName}' in 'pnpm list ${packageName} --json': ${output}`
    );
    return undefined;
  }

  return json[0].dependencies[packageName].version;
}

async function getNpmNodeModuleVersion(
  packageName: string
): Promise<string | undefined> {
  let output;

  try {
    output = await exec("npm", ["list", packageName, "--json"], {
      env: { ...process.env },
    });
  } catch (e) {
    logger.debug(`Unable to run 'npm list ${packageName} --json': ${e}`);
    return undefined;
  }

  let json;
  try {
    json = JSON.parse(output);
  } catch (e) {
    logger.debug(
      `Unable to parse output of 'npm list ${packageName} --json': ${e}`
    );
    return undefined;
  }

  if (
    !json.dependencies ||
    !json.dependencies[packageName] ||
    !json.dependencies[packageName].version
  ) {
    logger.debug(
      `Unable to find '${packageName}' in 'npm list ${packageName} --json': ${output}`
    );
    return undefined;
  }

  return json.dependencies[packageName].version;
}

async function getPythonPackageVersion(
  packageName: string
): Promise<string | undefined> {
  let output;
  try {
    output = await exec("pipenv", ["run", "pip", "show", packageName], {
      env: process.env,
    });
  } catch (e) {
    logger.debug(`Unable to run 'pipenv run pip show ${packageName}': ${e}`);
  }

  // If we couldn't get the output using pipenv, try to get it using pip directly
  if (!output) {
    try {
      output = await exec("pip", ["show", packageName], {
        env: process.env,
      });
    } catch (e) {
      logger.debug(`Unable to run 'pip show ${packageName}': ${e}`);
    }
  }

  if (!output) {
    return undefined;
  }

  const versionInfo = output
    .split(/\r\n|\r|\n/)
    .find((line) => line.startsWith("Version:"));

  if (!versionInfo) {
    logger.debug(
      `Unable to find version in output of 'pipenv run pip show ${packageName}' / 'pip show ${packageName}': ${output}`
    );
    return undefined;
  }

  const version = versionInfo.split(":")[1].trim();
  return version;
}

// Once https://github.com/NuGet/Home/issues/7752 gets resolved we can also try with --json
async function getCSharpPackageVersion(packageName: string) {
  const translationMap: Record<string, string> = {
    jsii: "Amazon.JSII.Runtime",
    constructs: "Constructs",
    cdktf: "HashiCorp.Cdktf",
  };
  const cSharpPackageName = translationMap[packageName] || packageName;

  let output;
  try {
    output = await exec("dotnet", ["list", "package", "--include-transitive"], {
      env: process.env,
    });
  } catch (e) {
    logger.debug(
      `Unable to run 'dotnet list package --include-transitive': ${e}`
    );
    return undefined;
  }

  const versionLine = output
    .split(/\r\n|\r|\n/)
    .find((line) => line.includes(`> ${cSharpPackageName}`));

  if (!versionLine) {
    logger.debug(
      `Unable to find version for '${cSharpPackageName}' in output of 'dotnet list package --include-transitive': ${output}`
    );
    return undefined;
  }

  // A line might look like this:
  //   Transitive Package                                           Resolved
  //   > Amazon.JSII.Runtime                                        1.17.1
  // Therefore we reverse split by whitespace and reverse
  // so that the first thing we find is the version number
  return versionLine
    .split(" ")
    .reverse()
    .find((part) => part !== "");
}

async function getGoPackageVersion(packageName: string) {
  const translationMap: Record<string, string> = {
    jsii: "jsii-runtime-go",
    cdktf: "github.com/hashicorp/terraform-cdk-go",
  };
  const goPackageName = translationMap[packageName] || packageName;

  let output;
  try {
    output = await exec("go", ["list", "-m", "all"], {
      env: process.env,
    });
  } catch (e) {
    logger.debug(`Unable to run 'go list -m all': ${e}`);
    return undefined;
  }

  let versionLine = output
    .split(/\r\n|\r|\n/)
    .find((line) => line.includes(goPackageName));

  if (!versionLine) {
    logger.debug(
      `Unable to find version for '${goPackageName}' in output of 'go list -m all': ${output}`
    );
    return undefined;
  }

  // We are dealing with a local version
  if (versionLine.includes("=>")) {
    logger.debug(`Found local version for '${goPackageName}': ${versionLine}`);
    versionLine = versionLine.split("=>")[0].trim();
  }

  return versionLine.split(" ").pop()?.replace("v", "");
}

async function getMavenPackageVersion(packageName: string) {
  const translationMap: Record<string, string> = {
    jsii: "jsii-runtime",
  };
  const javaPackageName = translationMap[packageName] || packageName;

  let output;
  try {
    output = await exec("mvn", ["dependency:list"], {
      env: process.env,
    });
  } catch (e) {
    logger.debug(`Unable to run 'mvn dependency:list': ${e}`);
    return undefined;
  }

  const resolutionPart = output.split(
    "The following files have been resolved"
  )[1];
  if (!resolutionPart) {
    logger.debug(
      `Unable to find resolution passage in output of 'mvn dependency:list': ${output}`
    );
    return undefined;
  }

  // We need to search for the package name AND a colon to not match a line like
  // [INFO]    com.hashicorp:cdktf-provider-aws:jar:9.0.9:compile
  // when looking for the cdktf package (see Github issue #1994)
  const versionLine = resolutionPart
    .split(/\r\n|\r|\n/)
    .find((line) => line.includes(`${javaPackageName}:`));

  if (!versionLine) {
    logger.debug(
      `Unable to find version for '${javaPackageName}' in output of 'mvn dependency:list': ${output}`
    );
    return undefined;
  }

  // Example line: [INFO]    com.hashicorp:cdktf:jar:0.0.0:compile
  const versionStartDelimiter = `${javaPackageName}:jar:`;
  const versionStart =
    versionLine.indexOf(versionStartDelimiter) + versionStartDelimiter.length;
  const versionEndDelemiter = ":compile";
  const versionEnd = versionLine.indexOf(versionEndDelemiter);
  return versionLine.substring(versionStart, versionEnd);
}

async function getJavaPackageVersion(packageName: string) {
  if (isGradleProject("./")) {
    return getGradlePackageVersion(packageName);
  }

  return getMavenPackageVersion(packageName);
}

export async function getPackageVersion(
  language: string,
  packageName: string
): Promise<string | undefined> {
  const noOp = async () => undefined; // eslint-disable-line @typescript-eslint/no-empty-function
  const getLibraryVersionMap: Record<
    string,
    (name: string) => Promise<string | undefined>
  > = {
    typescript: getNodeModuleVersion,
    python: getPythonPackageVersion,
    go: getGoPackageVersion,
    csharp: getCSharpPackageVersion,
    java: getJavaPackageVersion,
  };

  const libVersion = await (getLibraryVersionMap[language] || noOp)(
    packageName
  );
  return libVersion ?? undefined;
}

export async function collectDebugInformation() {
  const debugOutput: Record<string, string | null> = {};
  const language = getLanguage();
  debugOutput["language"] = language ?? null;
  debugOutput["cdktf-cli"] = DISPLAY_VERSION;

  const node = getNodeVersion();

  debugOutput["node"] = (await node) ?? null;
  if (language) {
    const cdktf = getPackageVersion(language, "cdktf");
    const constructs = getPackageVersion(language, "constructs");
    const jsii = getPackageVersion(language, "jsii");

    debugOutput["cdktf"] = (await cdktf) ?? null;
    debugOutput["constructs"] = (await constructs) ?? null;
    debugOutput["jsii"] = (await jsii) ?? null;
  }
  debugOutput["terraform"] = await terraformVersion;
  debugOutput["arch"] = os.arch();
  debugOutput["os"] = `${os.platform()} ${os.release()}`;

  switch (language) {
    case "python":
      {
        const python = getPythonVersion();
        const pip = getPipVersion();
        const pipenv = getPipenvVersion();
        debugOutput["python"] = (await python) ?? null;
        debugOutput["pip"] = (await pip) ?? null;
        debugOutput["pipenv"] = (await pipenv) ?? null;
      }
      break;
    case "java":
      {
        const java = getJavaVersion();
        const maven = getMavenVersion();
        const gradle = getGradleVersion();
        debugOutput["java"] = (await java) ?? null;
        debugOutput["maven"] = (await maven) ?? null;
        debugOutput["gradle"] = (await gradle) ?? null;
      }
      break;
    case "csharp":
      debugOutput["dotnet"] = (await getDotnetVersion()) ?? null;
      break;
    case "go":
      debugOutput["go"] = (await getGoVersion()) ?? null;
      break;
  }

  return debugOutput;
}
