import { Construct } from "constructs";
import { Token } from "./tokens"
import { TerraformElement } from "./terraform-element";
import { TerraformGeneratorMetadata } from './terraform-resource'
import { keysToSnakeCase, deepMerge } from "./util";

export interface TerraformProviderConfig {
  readonly terraformResourceType: string;
  readonly terraformGeneratorMetadata?: TerraformGeneratorMetadata;
}

export abstract class TerraformProvider extends TerraformElement {
  public readonly terraformResourceType: string;
  public readonly terraformGeneratorMetadata?: TerraformGeneratorMetadata;
  public alias?: string;

  constructor(scope: Construct, id: string, config: TerraformProviderConfig) {
    super(scope, id);

    this.terraformResourceType = config.terraformResourceType;
    this.terraformGeneratorMetadata = config.terraformGeneratorMetadata;
  }

  public get fqn(): string {
    return (this.alias !== undefined) ? Token.asString(`${this.terraformResourceType}.${this.alias}`) : Token.asString(`${this.terraformResourceType}`);
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
      terraform: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        required_providers: {
          [this.terraformResourceType]: this.terraformGeneratorMetadata?.providerVersionConstraint
        }
      },
      provider: {
        [this.terraformResourceType]: [deepMerge(keysToSnakeCase(this.synthesizeAttributes()), this.rawOverrides, this.metaAttributes)]
      }
    };
  }
}