/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import path from "path";
import fs from "fs/promises";
import { ProviderConstraint } from "./dependencies/dependency-manager";
import { logger } from "@cdktf/commons";

const TerraformLockFileName = ".terraform.lock.hcl";

type TerraformProviderLockFileEntry = {
  name: string;
  version?: string;
  constraints?: ProviderConstraint;
};

type TerraformProviderLockFileData = {
  providers: {
    [name: string]: TerraformProviderLockFileEntry;
  };
};

export class TerraformProviderLock {
  private _providerLockData: TerraformProviderLockFileData | null;
  constructor(private stackWorkingDirectory: string) {
    this._providerLockData = null;
  }

  private get lockFilePath() {
    return path.join(this.stackWorkingDirectory, TerraformLockFileName);
  }

  public async hasProviderLockFile() {
    try {
      await fs.stat(this.lockFilePath);
      return true;
    } catch (e) {
      return false;
    }
  }

  private async readProviderLockFile() {
    try {
      const lockFile = (await fs.readFile(this.lockFilePath)).toString();

      return lockFile;
    } catch (e) {
      logger.debug("Unable to read provider lock file", e);
    }

    return "";
  }

  private parseProviderLockFile(contents: string) {
    const providerLockData: TerraformProviderLockFileData = {
      providers: {},
    };
    let currentProvider: string | undefined;

    contents.split(/\r\n|\r|\n/).forEach((line) => {
      if (currentProvider) {
        const constraintMatch = line.match(/^\s*constraints\s+=\s+"(.*)"/);
        if (constraintMatch) {
          providerLockData.providers[currentProvider].constraints =
            new ProviderConstraint(currentProvider, constraintMatch[1]);
          return;
        }

        const versionMatch = line.match(/^\s*version\s+=\s+"(.*)"/);
        if (versionMatch) {
          providerLockData.providers[currentProvider].version = versionMatch[1];
          return;
        }

        const endMatch = line.match(/^\s*}/);
        if (endMatch) {
          currentProvider = undefined;
        }

        return;
      }

      const providerMatch = line.match(/provider "(.*)"/);
      if (providerMatch) {
        currentProvider = providerMatch[1];
        providerLockData.providers[currentProvider] = {
          name: new ProviderConstraint(currentProvider, ">=0").simplifiedName,
        };
      }
    });

    return providerLockData;
  }

  public async providers(forceReread = false) {
    if (!this._providerLockData || forceReread) {
      const contents = await this.readProviderLockFile();
      this._providerLockData = this.parseProviderLockFile(contents);
    }

    return this._providerLockData.providers;
  }

  public async hasMatchingProvider(constraint: ProviderConstraint) {
    const providerLockData = await this.providers();
    const lockedProvider = providerLockData[constraint.source];
    if (lockedProvider) {
      return lockedProvider.constraints?.matchesVersion(
        constraint.version ?? ">0"
      );
    }

    return false;
  }
}
