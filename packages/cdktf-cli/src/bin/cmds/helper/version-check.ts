// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// This code was mostly copied from https://github.com/aws/aws-cdk/blob/0e96415ea9f365db93aa4b26e7464096b3d62af2/packages/aws-cdk/lib/version.ts

import { exec as _exec } from "child_process";
import * as fs from "fs-extra";
import * as path from "path";
import * as os from "os";
import * as semver from "semver";
import { promisify } from "util";
import { DISPLAY_VERSION } from "../../../lib/version";

const ONE_DAY_IN_SECONDS = 1 * 24 * 60 * 60;

const exec = promisify(_exec);

export class VersionCheckTTL {
  public static timestampFilePath(): string {
    return path.join(cacheDir(), "version");
  }

  private readonly file: string;

  // File modify times are accurate only to the second
  private readonly ttlSecs: number;

  constructor(file?: string, ttlSecs?: number) {
    this.file = file || VersionCheckTTL.timestampFilePath();
    try {
      fs.mkdirsSync(path.dirname(this.file));
      fs.accessSync(path.dirname(this.file), fs.constants.W_OK);
    } catch {
      throw new Error(
        `Directory (${path.dirname(this.file)}) is not writable.`
      );
    }
    this.ttlSecs = ttlSecs || ONE_DAY_IN_SECONDS;
  }

  public async hasExpired(): Promise<boolean> {
    try {
      const lastCheckTime = (await fs.stat(this.file)).mtimeMs;
      const today = new Date().getTime();

      if ((today - lastCheckTime) / 1000 > this.ttlSecs) {
        // convert ms to sec
        return true;
      }
      return false;
    } catch (err) {
      if (err.code === "ENOENT") {
        return true;
      } else {
        throw err;
      }
    }
  }

  public async update(latestVersion?: string): Promise<void> {
    if (!latestVersion) {
      latestVersion = "";
    }
    await fs.writeFile(this.file, latestVersion);
  }
}

// Export for unit testing only.
// Don't use directly, use displayVersionMessage() instead.
export async function latestVersionIfHigher(
  currentVersion: string,
  cacheFile: VersionCheckTTL
): Promise<string | null> {
  if (!(await cacheFile.hasExpired())) {
    return null;
  }

  const { stdout, stderr } = await exec("npm view cdktf-cli version");
  if (stderr && stderr.trim().length > 0) {
    console.error(
      `The 'npm view' command generated an error stream with content [${stderr.trim()}]`
    );
  }
  const latestVersion = stdout.trim();
  if (!semver.valid(latestVersion)) {
    throw new Error(`npm returned an invalid semver ${latestVersion}`);
  }
  const isNewer = semver.gt(latestVersion, currentVersion);
  await cacheFile.update(latestVersion);

  if (isNewer) {
    return latestVersion;
  } else {
    return null;
  }
}

export async function displayVersionMessage(): Promise<void> {
  if (!process.stdout.isTTY) {
    return;
  }

  try {
    const versionCheckCache = new VersionCheckTTL();
    const laterVersion = await latestVersionIfHigher(
      `${DISPLAY_VERSION}`,
      versionCheckCache
    );
    if (laterVersion) {
      console.log(
        `Newer version of Terraform CDK is available [${laterVersion}] - Upgrade recommended`
      );
    }
  } catch (err) {
    console.error(`Could not run version check - ${err.message}`);
  }
}

export function homeDir() {
  return process.env.CDKTF_HOME
    ? path.resolve(process.env.CDKTF_HOME)
    : path.join(
        (os.userInfo().homedir ?? os.homedir()).trim() || "/",
        ".cdktf"
      );
}

export function cacheDir() {
  return path.join(homeDir(), "cache");
}
