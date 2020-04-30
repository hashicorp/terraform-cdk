import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { keysToSnakeCase, deepMerge } from "./util";

export interface TerraformProviderConfig {
  readonly terraformResourceType: string;
}

export abstract class TerraformProvider extends TerraformElement {
  public readonly terraformResourceType: string;
  private readonly rawOverrides: any = {}

  constructor(scope: Construct, id: string, config: TerraformProviderConfig) {
    super(scope, id);

    this.terraformResourceType = config.terraformResourceType;
  }

  public addOverride(path: string, value: any) {
    const parts = path.split('.');
    let curr: any = this.rawOverrides;

    while (parts.length > 1) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const key = parts.shift()!;

      // if we can't recurse further or the previous value is not an
      // object overwrite it with an object.
      const isObject = curr[key] != null && typeof(curr[key]) === 'object' && !Array.isArray(curr[key]);
      if (!isObject) {
        curr[key] = {};
      }

      curr = curr[key];
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const lastKey = parts.shift()!;
    curr[lastKey] = value;
  }

  protected abstract synthesizeAttributes(): { [name: string]: any };

  /**
   * Adds this resource to the terraform JSON output.
   */
  public toTerraform(): any {
    return {
      provider: {
        [this.terraformResourceType]: deepMerge(keysToSnakeCase(this.synthesizeAttributes()), this.rawOverrides)
      }
    };
  }
}