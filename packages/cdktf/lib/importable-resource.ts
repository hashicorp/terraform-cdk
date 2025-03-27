/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { TerraformProvider } from "./terraform-provider";
import { ValidateTerraformVersion } from "./validations/validate-terraform-version";

export interface IImportableConfig {
  terraformResourceType: string;
  importId: string;
  provider?: TerraformProvider;
}

/**
 * Class used to represent an importable resource.
 */
export class ImportableResource extends TerraformElement {
  constructor(
    scope: Construct,
    name: string,
    private readonly config: IImportableConfig,
  ) {
    super(scope, name, config.terraformResourceType);
    this.node.addValidation(
      new ValidateTerraformVersion(
        ">=1.5",
        `Import blocks are only supported for Terraform >=1.5. Please upgrade your Terraform version.`,
      ),
    );
  }

  public toHclTerraform(): any {
    const expectedResourceAddress = `${this.config.terraformResourceType}.${this.friendlyUniqueId}`;
    return {
      import: [
        {
          to: {
            value: expectedResourceAddress,
            type: "simple",
            storageClassType: "reference",
          },
          id: {
            value: this.config.importId,
            type: "simple",
            storageClassType: "string",
          },
          provider: this.config.provider
            ? {
                value: this.config.provider.fqn,
                type: "simple",
                storageClassType: "reference",
              }
            : undefined,
        },
      ],
    };
  }

  public toTerraform(): any {
    const expectedResourceAddress = `${this.config.terraformResourceType}.${this.friendlyUniqueId}`;
    return {
      import: [
        {
          to: expectedResourceAddress,
          id: this.config.importId,
          provider: this.config.provider ? this.config.provider.fqn : undefined,
        },
      ],
    };
  }

  public toMetadata(): any {
    return {
      importsGeneratingConfiguration: [this.friendlyUniqueId],
    };
  }
}
