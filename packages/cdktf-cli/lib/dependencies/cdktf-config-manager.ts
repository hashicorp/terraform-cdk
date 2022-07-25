import { CdktfConfig } from "../cdktf-config";
import { ProviderConstraint } from "./dependency-manager";

/**
 * facilitates adding provider dependencies to cdktf.json
 */
export class CdktfConfigManager {
  private config: CdktfConfig = CdktfConfig.read();

  public async hasProvider(constraint: ProviderConstraint): Promise<boolean> {
    return this.config.terraformProviders.some(
      (provider) =>
        ProviderConstraint.fromConfigEntry(provider).source ===
        constraint.source
    );
  }

  public async addProvider(constraint: ProviderConstraint): Promise<void> {
    // excluding the constraint to be added (if it already existed)
    const currentProviders = this.config.terraformProviders.filter(
      (provider) =>
        ProviderConstraint.fromConfigEntry(provider).source !==
        constraint.source
    );

    const simplifiedSource = constraint.source.replace(
      "registry.terraform.io/",
      ""
    );

    const provider =
      simplifiedSource + (constraint.version ? `@${constraint.version}` : "");

    currentProviders.push(provider);
    this.config.writeTerraformProviders(currentProviders);
  }
}
