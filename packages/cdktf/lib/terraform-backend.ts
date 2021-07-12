import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { deepMerge } from "./util";

export abstract class TerraformBackend extends TerraformElement {
  constructor(scope: Construct, id: string, protected readonly name: string) {
    super(scope, id);
  }

  // jsii can't handle abstract classes?
  protected synthesizeAttributes(): { [name: string]: any } {
    return {};
  }

  /**
   * Adds this resource to the terraform JSON output.
   */
  public toTerraform(): any {
    return {
      terraform: {
        backend: {
          [this.name]: deepMerge(
            this.synthesizeAttributes(),
            this.rawOverrides
          ),
        },
      },
    };
  }

  public toMetadata(): any {
    return {
      backend: this.name,
    };
  }
}
