import * as path from "path";
import * as semver from "semver";
import { Errors } from "../../../lib/errors";
import { exec } from "../../../lib/util";

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
  throwIfLowerVersion("Node.js", "14.0.0", out);
}

export async function checkEnvironment(projectPath = process.cwd()) {
  await checkNodeVersion();

  let language: string | undefined;
  try {
    const cdktfJson = require(path.resolve(projectPath, "cdktf.json"));
    language = cdktfJson.language;
  } catch {
    // We can not detect the language
  }

  switch (language) {
    case "go":
      await checkGoVersion();
  }
}
