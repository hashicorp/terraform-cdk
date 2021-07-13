import { Construct } from "constructs";
import { Token } from "./tokens";
import { TerraformElement } from "./terraform-element";
import { TerraformProviderGeneratorMetadata } from "./terraform-resource";
import { keysToSnakeCase, deepMerge } from "./util";

export interface TerraformProviderConfig {
  readonly terraformResourceType: string;
  readonly terraformGeneratorMetadata?: TerraformProviderGeneratorMetadata;
  readonly terraformProviderSource?: string;
}

export abstract class TerraformProvider extends TerraformElement {
  public readonly terraformResourceType: string;
  public readonly terraformGeneratorMetadata?: TerraformProviderGeneratorMetadata;
  public readonly terraformProviderSource?: string;

  constructor(scope: Construct, id: string, config: TerraformProviderConfig) {
    super(scope, id);

    this.terraformResourceType = config.terraformResourceType;
    this.terraformGeneratorMetadata = config.terraformGeneratorMetadata;
    this.terraformProviderSource = config.terraformProviderSource;
  }

  public get alias(): string | undefined {
    // This is always* being overriden currently
    return undefined;
  }

  public set alias(_value: string | undefined) {
    // This is always* being overriden currently
  }

  public get fqn(): string {
    return this.alias !== undefined
      ? Token.asString(`${this.terraformResourceType}.${this.alias}`)
      : Token.asString(`${this.terraformResourceType}`);
  }

  public get metaAttributes(): { [name: string]: any } {
    return this.alias !== undefined ? { alias: this.alias } : {};
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
        required_providers: {
          [this.terraformResourceType]: {
            version: this.terraformGeneratorMetadata?.providerVersionConstraint,
            source: this.terraformProviderSource,
          },
        },
      },
      provider: {
        [this.terraformResourceType]: [
          deepMerge(
            keysToSnakeCase(this.synthesizeAttributes()),
            this.rawOverrides,
            this.metaAttributes
          ),
        ],
      },
    };
  }
  public toMetadata(): any {
    if (!Object.keys(this.rawOverrides).length) {
      return {};
    }

    return {
      overrides: {
        [this.terraformResourceType]: Object.keys(this.rawOverrides),
      },
    };
  }
}
