import * as path from "path";
import * as os from "os";
import { logger } from "./logging";
import { exec } from "./util";
import { terraformVersion } from "./terraform";
import { DISPLAY_VERSION } from "./version";

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
  try {
    const result = await exec(binary, [versionCommand], { env: process.env });
    return result.trim().replace(/\r?\n|\r/g, "");
  } catch (e) {
    logger.info(`Failed to run ${binary} ${versionCommand}: ${e}`);
    return undefined;
  }
}

export function getDotnetVersion() {
  return getBinaryVersion("dotnet", "--version");
}

export function getJavaVersion() {
  return getBinaryVersion("java", "--version");
}
export function getMavenVersion() {
  return getBinaryVersion("mvn", "--version");
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
  let output;
  try {
    output = await exec("npm", ["list", packageName, "--json"], {
      env: process.env,
    });
  } catch (e) {
    logger.info(`Unable to run 'npm list ${packageName} --json': ${e}`);
    return undefined;
  }

  let json;
  try {
    json = JSON.parse(output);
  } catch (e) {
    logger.info(
      `Unable to parse output of 'npm list ${packageName} --json': ${e}`
    );
    return undefined;
  }

  if (
    !json.dependencies ||
    !json.dependencies[packageName] ||
    !json.dependencies[packageName].version
  ) {
    logger.info(
      `Unable to find '${packageName}' in 'npm list ${packageName} --json': ${output}`
    );
    return undefined;
  }

  return json.dependencies[packageName].version;
}

async function getPipenvPackageVersion(
  packageName: string
): Promise<string | undefined> {
  let output;
  try {
    output = await exec("pipenv", ["run", "pip", "show", packageName], {
      env: process.env,
    });
  } catch (e) {
    logger.info(`Unable to run 'pipenv run pip show ${packageName}': ${e}`);
  }

  // If we couldn't get the output using pipenv, try to get it using pip directly
  if (!output) {
    try {
      output = await exec("pip", ["show", packageName], {
        env: process.env,
      });
    } catch (e) {
      logger.info(`Unable to run 'pip show ${packageName}': ${e}`);
    }
  }

  if (!output) {
    return undefined;
  }

  const versionInfo = output
    .split("\n")
    .find((line) => line.startsWith("Version:"));

  if (!versionInfo) {
    logger.info(
      `Unable to find version in output of 'pipenv run pip show ${packageName}' / 'pip show ${packageName}': ${output}`
    );
    return undefined;
  }

  const version = versionInfo.split(":")[1].trim();
  return version;
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
    python: getPipenvPackageVersion,
    go: noOp,
    csharp: noOp,
    java: noOp,
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
  debugOutput["node"] = (await getNodeVersion()) ?? null;
  if (language) {
    debugOutput["cdktf"] = (await getPackageVersion(language, "cdktf")) ?? null;
    debugOutput["constructs"] =
      (await getPackageVersion(language, "constructs")) ?? null;
    debugOutput["jsii"] = (await getPackageVersion(language, "jsii")) ?? null;
  }
  debugOutput["terraform"] = await terraformVersion;
  debugOutput["arch"] = os.arch();
  debugOutput["os"] = `${os.platform()} ${os.release()}`;

  switch (language) {
    case "python":
      debugOutput["python"] = (await getPythonVersion()) ?? null;
      debugOutput["pip"] = (await getPipVersion()) ?? null;
      debugOutput["pipenv"] = (await getPipenvVersion()) ?? null;
      break;
    case "java":
      debugOutput["java"] = (await getJavaVersion()) ?? null;
      debugOutput["maven"] = (await getMavenVersion()) ?? null;
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
