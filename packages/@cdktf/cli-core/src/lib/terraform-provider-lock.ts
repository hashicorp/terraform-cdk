import path from "path";
import fs from "fs/promises";
import { ProviderConstraint } from "./dependencies/dependency-manager";

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

  private async readProviderLockFile() {
    const lockFilePath = path.join(
      this.stackWorkingDirectory,
      TerraformLockFileName
    );
    const lockFile = (await fs.readFile(lockFilePath)).toString();

    return lockFile;
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

  public async data(forceReread = false) {
    if (!this._providerLockData || forceReread) {
      const contents = await this.readProviderLockFile();
      this._providerLockData = this.parseProviderLockFile(contents);
    }

    return this._providerLockData;
  }

  public async hasProvider(constraint: ProviderConstraint) {
    const providerLockData = await this.data();
    const lockedProvider = providerLockData.providers[constraint.source];
    if (lockedProvider) {
      return lockedProvider.constraints?.matchesVersion(
        constraint.version ?? ">0"
      );
    }

    return false;
  }
}
