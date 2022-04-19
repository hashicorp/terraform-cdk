import * as path from "path";
import * as semver from "semver";
import { Errors } from "../../../lib/errors";
import { logger } from "../../../lib/logging";
import { exec } from "../../../lib/util";
import { versionNumber } from "./version-check";

function throwIfLowerVersion(
  language: string,
  minVersion: string,
  stdout: string
) {
  const version = semver.coerce(stdout);
  if (!version || !semver.valid(version)) {
    console.error(
      Errors.Internal(`Unable to parse ${language} version "${stdout}"`)
    );
    return;
  }

  if (semver.lt(version, minVersion)) {
    console.error(
      Errors.Usage(
        `${language} version "${version}" is not supported. Please upgrade to at least ${minVersion}`
      )
    );
  }
}

function getBinaryVersion(
  binary: string,
  versionCommand: string
): Promise<string> {
  try {
    return exec(binary, [versionCommand], { env: process.env });
  } catch (e) {
    throw Errors.Usage(
      `Unable to run ${binary} ${versionCommand}, please check if ${binary} is installed: ${e}`
    );
  }
}

async function checkGoVersion() {
  const out = await getBinaryVersion("go", "version");
  throwIfLowerVersion("Go", "1.16.0", out);
}

async function checkNodeVersion() {
  const out = await getBinaryVersion("node", "--version");
  throwIfLowerVersion("Node.js", "14.17.0", out);
}

function getLanguage(projectPath = process.cwd()): string | undefined {
  try {
    const cdktfJson = require(path.resolve(projectPath, "cdktf.json"));
    return cdktfJson.language;
  } catch {
    // We can not detect the language
    logger.debug(`Unable to detect language in ${projectPath}`);
    return undefined;
  }
}

export async function checkEnvironment() {
  await checkNodeVersion();

  switch (getLanguage()) {
    case "go":
      await checkGoVersion();
  }
}

async function getNodeModuleVersion(): Promise<string | undefined> {
  let output;
  try {
    output = await exec("npm", ["list", "cdktf", "--json"], {
      env: process.env,
    });
  } catch (e) {
    logger.info(`Unable to run 'npm list cdktf --json': ${e}`);
    return undefined;
  }

  let json;
  try {
    json = JSON.parse(output);
  } catch (e) {
    logger.info(`Unable to parse output of 'npm list cdktf --json': ${e}`);
    return undefined;
  }

  if (
    !json.dependencies ||
    !json.dependencies.cdktf ||
    !json.dependencies.cdktf.version
  ) {
    logger.info(`Unable to find 'cdktf' in 'npm list cdktf --json': ${output}`);
    return undefined;
  }

  return json.dependencies.cdktf.version;
}

export async function verifySimilarLibraryVersion() {
  const language = getLanguage();
  if (!language) {
    // We could not detect the language, disabling the check
    return;
  }

  const noOp = async () => {}; // eslint-disable-line @typescript-eslint/no-empty-function
  const getLibraryVersionMap: Record<
    string,
    () => Promise<string | undefined | void>
  > = {
    typescript: getNodeModuleVersion,
    go: noOp,
    python: noOp,
    csharp: noOp,
    java: noOp,
  };

  const libVersion = await (getLibraryVersionMap[language] || noOp)();
  if (!libVersion) {
    // We could not detect the library version, disabling the check
    return;
  }

  const cliVersion = versionNumber();

  if (!libVersion) {
    // We could not detect the library version, disabling the check
    return;
  }

  if (cliVersion === "0.0.0") {
    // We are running a development version
    return;
  }

  if (semver.major(libVersion) !== semver.major(cliVersion)) {
    throw Errors.Usage(
      `The major version of the library (${libVersion}) and the CLI (${cliVersion}) are different. Please update the library to the same major version and regenerate your provider bindings with 'cdktf get' and update your prebuilt providers.`
    );
  }

  if (semver.minor(libVersion) !== semver.minor(cliVersion)) {
    throw Errors.Usage(
      `The minor version of the library (${libVersion}) and the CLI (${cliVersion}) are different. Please update the library to the same minor version and regenerate your provider bindings with 'cdktf get' and update your prebuilt providers.`
    );
  }
}
