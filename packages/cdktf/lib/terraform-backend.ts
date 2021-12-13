import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { deepMerge } from "./util";

const BACKEND_SYMBOL = Symbol.for("cdktf/TerraformBackend");

export abstract class TerraformBackend extends TerraformElement {
  constructor(scope: Construct, id: string, protected readonly name: string) {
    super(scope, id);
    Object.defineProperty(this, BACKEND_SYMBOL, { value: true });
  }

  public static isBackend(x: any): x is TerraformBackend {
    return x !== null && typeof x === "object" && BACKEND_SYMBOL in x;
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
      ...(Object.keys(this.rawOverrides).length > 0
        ? { overrides: { backend: Object.keys(this.rawOverrides) } }
        : {}),
    };
  }
}
