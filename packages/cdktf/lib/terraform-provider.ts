// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { Token } from "./tokens";
import { TerraformElement } from "./terraform-element";
import { TerraformProviderGeneratorMetadata } from "./terraform-resource";
import {
  keysToSnakeCase,
  deepMerge,
  processDynamicAttributes,
  processDynamicAttributesForHcl,
} from "./util";

const TERRAFORM_PROVIDER_SYMBOL = Symbol.for("cdktf/TerraformProvider");

export interface TerraformProviderConfig {
  readonly terraformResourceType: string;
  readonly terraformGeneratorMetadata?: TerraformProviderGeneratorMetadata;
  readonly terraformProviderSource?: string;
}

// eslint-disable-next-line jsdoc/require-jsdoc
export abstract class TerraformProvider extends TerraformElement {
  public readonly terraformResourceType: string;
  public readonly terraformGeneratorMetadata?: TerraformProviderGeneratorMetadata;
  public readonly terraformProviderSource?: string;

  constructor(scope: Construct, id: string, config: TerraformProviderConfig) {
    super(scope, id);
    Object.defineProperty(this, TERRAFORM_PROVIDER_SYMBOL, { value: true });

    this.terraformResourceType = config.terraformResourceType;
    this.terraformGeneratorMetadata = config.terraformGeneratorMetadata;
    this.terraformProviderSource = config.terraformProviderSource;
  }

  public static isTerraformProvider(x: any): x is TerraformProvider {
    return (
      x !== null && typeof x === "object" && TERRAFORM_PROVIDER_SYMBOL in x
    );
  }

  public get alias(): string | undefined {
    // This is always* being overridden currently
    return undefined;
  }

  public set alias(_value: string | undefined) {
    // This is always* being overridden currently
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    return {};
  }

  public toHclTerraform(): any {
    return {
      terraform: {
        required_providers: {
          [this.terraformResourceType]: {
            version:
              this.terraformGeneratorMetadata?.providerVersion ||
              this.terraformGeneratorMetadata?.providerVersionConstraint, // fallback to previous to ease transition
            source: this.terraformProviderSource,
          },
        },
      },
      provider: {
        [this.terraformResourceType]: [
          deepMerge(
            keysToSnakeCase(
              processDynamicAttributesForHcl(this.synthesizeHclAttributes()),
            ),
            this.rawOverrides,
            this.metaAttributes,
          ),
        ],
      },
    };
  }

  /**
   * Adds this resource to the terraform JSON output.
   */
  public toTerraform(): any {
    return {
      terraform: {
        required_providers: {
          [this.terraformResourceType]: {
            version:
              this.terraformGeneratorMetadata?.providerVersion ||
              this.terraformGeneratorMetadata?.providerVersionConstraint, // fallback to previous to ease transition
            source: this.terraformProviderSource,
          },
        },
      },
      provider: {
        [this.terraformResourceType]: [
          deepMerge(
            keysToSnakeCase(
              processDynamicAttributes(this.synthesizeAttributes()),
            ),
            this.rawOverrides,
            this.metaAttributes,
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
