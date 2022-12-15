// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import fs from "fs-extra";
import path from "path";
import { Errors, logger } from "@cdktf/commons";
import { CdktfConfig } from "./cdktf-config";

import * as z from "zod";

const constraintsType = z.object({
  cdktf: z.string(),
  providers: z.record(z.string()),
});

export type Constraints = z.infer<typeof constraintsType>;

// TODO: move this to @cdktf/commons
// tracked here https://github.com/hashicorp/terraform-cdk/issues/1814
/**
 * Class to help with reading `constraints.json` file
 * published by `provider get` or `provider add` commands
 */
export class LocalProviderConstraints {
  private constraints: Constraints | undefined;

  private get jsonFilePath(): string {
    const config = CdktfConfig.read();
    return path.resolve(config.codeMakerOutput, "constraints.json");
  }

  private async readLocalConstraintsJson(): Promise<void> {
    let constraintsJson;
    try {
      constraintsJson = await fs.readFile(this.jsonFilePath, "utf8");
    } catch (e) {
      // If we cannot read the constraints.json file, it may not exist
      logger.debug("constraints.json file reading error: ", e);
      this.constraints = undefined;
      return;
    }

    let providerConstraints;
    try {
      providerConstraints = constraintsType.parse(JSON.parse(constraintsJson));
      providerConstraints.providers = Object.fromEntries(
        Object.entries(providerConstraints.providers).map(
          ([name, constraint]) => {
            return [name.toLowerCase(), constraint];
          }
        )
      );
    } catch (e) {
      throw Errors.External(
        "constraints.json file is malformed. The root must be a JSON object."
      );
    }

    this.constraints = providerConstraints;
  }

  public async constraintsForAllProviders() {
    if (this.constraints) {
      return this.constraints;
    }

    await this.readLocalConstraintsJson();

    return this.constraints;
  }

  public async constraintForProvider(
    providerName: string
  ): Promise<string | null> {
    const constraints = await this.constraintsForAllProviders();

    if (!constraints) {
      return null;
    }

    const providerConstraint =
      constraints.providers[providerName.toLowerCase()];
    if (!providerName) {
      return null;
    }

    return providerConstraint;
  }
}
