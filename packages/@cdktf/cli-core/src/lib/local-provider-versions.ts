// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Errors, logger } from "@cdktf/commons";
import fs from "fs-extra";
import path from "path";
import { CdktfConfig } from "./cdktf-config";

// TODO: move this to @cdktf/commons
// tracked here https://github.com/hashicorp/terraform-cdk/issues/1814
/**
 * Class to help with reading `versions.json` file
 * published by `provider get` or `provider add` commands
 */
export class LocalProviderVersions {
  private versions: Record<string, string> | undefined;

  private get jsonFilePath(): string {
    const config = CdktfConfig.read();
    return path.resolve(config.codeMakerOutput, "versions.json");
  }

  private async readLocalVersionsJson(): Promise<void> {
    let versionsJson;
    try {
      versionsJson = await fs.readFile(this.jsonFilePath, "utf8");
    } catch (e) {
      // If we cannot read the versions.json file, it may not exist
      logger.debug("versions.json file reading error: ", e);
      this.versions = undefined;
      return;
    }

    let providerVersions;
    try {
      providerVersions = JSON.parse(versionsJson) as Record<string, string>;
    } catch (e) {
      throw Errors.External(
        "versions.json file is malformed. The root must be a JSON object."
      );
    }

    this.versions = Object.fromEntries(
      Object.entries(providerVersions).map(([providerFqn, versions]) => {
        return [
          providerFqn
            .replace("registry.terraform.io/", "")
            .replace("hashicorp/", "")
            .toLowerCase(),
          versions,
        ];
      })
    );
  }

  public async versionsForAllProviders() {
    if (this.versions) {
      return this.versions;
    }

    await this.readLocalVersionsJson();

    return this.versions;
  }

  public async versionForProvider(
    providerName: string
  ): Promise<string | null> {
    const versions = await this.versionsForAllProviders();

    if (!versions) {
      return null;
    }

    const providerVersion = versions[providerName.toLowerCase()];
    if (!providerName) {
      return null;
    }

    return providerVersion;
  }
}
