// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { IConstruct, IValidation } from "constructs";
import { TerraformProvider } from "../terraform-provider";
import { TerraformResource } from "../terraform-resource";
import { TerraformDataSource } from "../terraform-data-source";
import { TerraformStack } from "../terraform-stack";

/**
 * A validation that is added by default, ensuring that all providers
 * used are defined via Constructs.
 */
export class ValidateProviderPresence implements IValidation {
  /**
   * All provider names found in the construct tree.
   */
  public providerNames: Set<string> = new Set();
  /**
   * All TerraformProviders found in the construct tree.
   */
  public foundProviders: TerraformProvider[] = [];

  /**
   * Creates a ValidateProviderPresence
   */
  constructor(protected host: IConstruct) {}

  /**
   * Checks the construct tree recursively
   */
  public check(node: IConstruct) {
    if (
      TerraformResource.isTerraformResource(node) ||
      TerraformDataSource.isTerraformDataSource(node)
    ) {
      if (
        node.terraformGeneratorMetadata &&
        node.terraformGeneratorMetadata.providerName !== "terraform"
      ) {
        this.providerNames.add(node.terraformGeneratorMetadata.providerName);
      }
    }

    if (TerraformProvider.isTerraformProvider(node)) {
      this.foundProviders.push(node);
    }

    for (const child of node.node.children) {
      this.check(child);
    }
  }

  /**
   * Run the validation
   */
  public validate() {
    this.check(this.host);

    const missingProviders = Array.from(this.providerNames).filter((name) => {
      return !this.foundProviders.some(
        (p) => p.terraformGeneratorMetadata?.providerName === name,
      );
    });

    if (missingProviders.length === 0) {
      return [];
    } else {
      const stack = TerraformStack.of(this.host);
      return [
        `Found resources without a matching provider construct. Please make sure to add provider constructs [e.g. new RandomProvider(...)] to your stack '${
          stack.node.id
        }' for the following providers: ${missingProviders.join(", ")}`,
      ];
    }
  }
}
