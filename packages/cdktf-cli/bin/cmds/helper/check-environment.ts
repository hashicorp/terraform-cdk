import * as semver from "semver";
import {
  getGoVersion,
  getLanguage,
  getNodeVersion,
  getPackageVersion,
} from "../../../lib/debug";
import { Errors } from "../../../lib/errors";
import { logger } from "../../../lib/logging";
import { DISPLAY_VERSION } from "../../../lib/version";
import { DISABLE_VERSION_CHECK } from "../../../lib/environment";

function throwIfLowerVersion(
  language: string,
  minVersion: string,
  stdout: string | undefined
) {
  if (!stdout) {
    throw Errors.Usage(`${language} version could not be determined`);
  }

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

async function checkGoVersion() {
  const out = await getGoVersion();
  throwIfLowerVersion("Go", "1.16.0", out);
}

async function checkNodeVersion() {
  const out = await getNodeVersion();
  throwIfLowerVersion("Node.js", "14.17.0", out);
}

export async function checkEnvironment() {
  await checkNodeVersion();

  switch (getLanguage()) {
    case "go":
      await checkGoVersion();
  }
}

export async function verifySimilarLibraryVersion() {
  if (DISABLE_VERSION_CHECK) {
    logger.debug("Version check disabled via environment variable");
    return;
  }

  const language = getLanguage();
  if (!language) {
    logger.debug("Unable to detect language, skipping version check");
    return;
  }

  const libVersion = await getPackageVersion(language, "cdktf");
  if (!libVersion) {
    logger.debug(`Unable to detect library version for ${language}`);
    return;
  }

  const cliVersion = `${DISPLAY_VERSION}`;

  if (!libVersion) {
    logger.debug(`Unable to detect library version for ${language}`);
    return;
  }

  logger.debug(`CLI version: ${cliVersion}`);
  logger.debug(`${language} package version: ${libVersion}`);

  if (cliVersion === "0.0.0" || cliVersion.includes("-dev")) {
    logger.debug(
      `Running a development version of cdktf, skipping version check`
    );
    return;
  }

  if (cliVersion.includes(".dev") || cliVersion.includes("-pre.")) {
    logger.debug(
      `Running a pre-release version of cdktf-cli, skipping version compatibility check`
    );
    return;
  }

  if (libVersion.includes(".dev") || libVersion.includes("-pre.")) {
    logger.debug(
      `Running a pre-release version of cdktf, skipping version compatibility check`
    );
    return;
  }

  if (!semver.valid(libVersion)) {
    logger.info(
      "Could not determine library version, skipping version compatibility check"
    );
    return;
  }

  if (!semver.valid(cliVersion)) {
    logger.info(
      "Could not determine CLI version, skipping version compatibility check"
    );
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
