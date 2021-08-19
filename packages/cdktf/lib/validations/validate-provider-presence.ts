import { IConstruct, IValidation, Node } from "constructs";
import { TerraformProvider } from "../terraform-provider";
import { TerraformResource } from "../terraform-resource";
import { TerraformDataSource } from "../terraform-data-source";

export class ValidateProviderPresence implements IValidation {
  public providerNames: Set<string> = new Set();
  public foundProviders: TerraformProvider[] = [];

  constructor(protected host: IConstruct) {}

  public check(node: IConstruct) {
    if (
      node instanceof TerraformResource ||
      node instanceof TerraformDataSource
    ) {
      if (node.terraformGeneratorMetadata) {
        this.providerNames.add(node.terraformGeneratorMetadata.providerName);
      }
    }

    if (node instanceof TerraformProvider) {
      this.foundProviders.push(node);
    }

    for (const child of Node.of(node).children) {
      this.check(child);
    }
  }

  public validate() {
    this.check(this.host);

    const missingProviders = Array.from(this.providerNames).filter((name) => {
      return !this.foundProviders.some(
        (p) => p.terraformGeneratorMetadata?.providerName === name
      );
    });

    if (missingProviders.length === 0) {
      return [];
    } else {
      return [
        `Found resources without a matching povider. Please make sure to add the following providers to your stack: ${missingProviders.join(
          ", "
        )}`,
      ];
    }
  }
}
