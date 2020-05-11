import { Construct } from "constructs";
import { Token } from "./tokens"
import { TerraformElement } from "./terraform-element";
import { keysToSnakeCase, deepMerge } from "./util";

export interface TerraformProviderConfig {
  readonly terraformResourceType: string;
}

export abstract class TerraformProvider extends TerraformElement {
  public readonly terraformResourceType: string;
  public alias?: string;

  private readonly rawOverrides: any = {}

  constructor(scope: Construct, id: string, config: TerraformProviderConfig) {
    super(scope, id);

    this.terraformResourceType = config.terraformResourceType;
  }

  public get fqn(): string {
    return (this.alias !== undefined) ? Token.asString(`${this.terraformResourceType}.${this.alias}`) : Token.asString(`${this.terraformResourceType}`);
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

  public get metaAttributes(): { [name: string]: any } {
    return (this.alias !== undefined) ? { alias: this.alias } : {} ;
  }

  // jsii can't handle abstract classes?
  protected synthesizeAttributes(): { [name: string]: any } {
    return {}
  }

  /**
   * Adds this resource to the terraform JSON output.
   */
  public toTerraform(): any {
    return {
      provider: {
        [this.terraformResourceType]: [deepMerge(keysToSnakeCase(this.synthesizeAttributes()), this.rawOverrides, this.metaAttributes)]
      }
    };
  }
}