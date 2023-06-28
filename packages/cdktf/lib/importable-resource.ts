import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { TerraformProvider } from "./terraform-provider";

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
    private readonly config: IImportableConfig
  ) {
    super(scope, name, config.terraformResourceType);
  }

  /**
   * Adds this resource to the terraform JSON output.
   */
  public toTerraform(): any {
    const expectedResourceAddress = `${this.config.terraformResourceType}.${this.friendlyUniqueId}`;
    return {
      import: {
        to: expectedResourceAddress,
        id: this.config.importId,
        provider: this.config.provider ? this.config.provider.fqn : undefined,
      },
    };
  }
}
