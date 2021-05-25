import { Construct } from "constructs";
import { Token } from "./tokens"
import { TerraformElement } from "./terraform-element";
import { TerraformProvider } from "./terraform-provider";
import { keysToSnakeCase, deepMerge } from "./util";
import { ITerraformDependable } from "./terraform-dependable";

export interface ITerraformResource {
  readonly terraformResourceType: string;
  readonly fqn: string;
  readonly friendlyUniqueId: string;

  dependsOn?: string[];
  count?: number;
  provider?: TerraformProvider;
  lifecycle?: TerraformResourceLifecycle;

  interpolationForAttribute(terraformAttribute: string): string;
}

export interface TerraformResourceLifecycle {
  readonly createBeforeDestroy?: boolean;
  readonly preventDestroy?: boolean;
  readonly ignoreChanges?: string[];
}

export interface TerraformMetaArguments {
  readonly dependsOn?: ITerraformDependable[];
  readonly count?: number;
  readonly provider?: TerraformProvider;
  readonly lifecycle?: TerraformResourceLifecycle;
}

export interface TerraformProviderGeneratorMetadata {
  readonly providerName: string;
  readonly providerVersionConstraint?: string;
}

export interface TerraformResourceConfig extends TerraformMetaArguments {
  readonly terraformResourceType: string;
  readonly terraformGeneratorMetadata?: TerraformProviderGeneratorMetadata;
}

export class TerraformResource extends TerraformElement implements ITerraformResource, ITerraformDependable {
  public readonly terraformResourceType: string;
  public readonly terraformGeneratorMetadata?: TerraformProviderGeneratorMetadata;

  // TerraformMetaArguments

  public dependsOn?: string[];
  public count?: number;
  public provider?: TerraformProvider;
  public lifecycle?: TerraformResourceLifecycle;

  constructor(scope: Construct, id: string, config: TerraformResourceConfig) {
    super(scope, id);

    this.terraformResourceType = config.terraformResourceType;
    this.terraformGeneratorMetadata = config.terraformGeneratorMetadata;
    if (Array.isArray(config.dependsOn)) {
      this.dependsOn = config.dependsOn.map(dependency => dependency.fqn);
    }
    this.count = config.count;
    this.provider = config.provider;
    this.lifecycle = config.lifecycle;
  }

  public getStringAttribute(terraformAttribute: string) {
    return Token.asString(this.interpolationForAttribute(terraformAttribute));
  }

  public getNumberAttribute(terraformAttribute: string) {
    return Token.asNumber(this.interpolationForAttribute(terraformAttribute));
  }

  public getListAttribute(terraformAttribute: string) {
    return Token.asList(this.interpolationForAttribute(terraformAttribute));
  }

  public getBooleanAttribute(terraformAttribute: string) {
    return Token.asString(this.interpolationForAttribute(terraformAttribute)) as any as boolean
  }

  public get fqn(): string {
    return `${this.terraformResourceType}.${this.friendlyUniqueId}`;
  }

  public get terraformMetaArguments(): { [name: string]: any } {
    return {
      dependsOn: this.dependsOn,
      count: this.count,
      provider: this.provider?.fqn,
      lifecycle: this.lifecycle
    }
  }

  // jsii can't handle abstract classes?
  protected synthesizeAttributes(): { [name: string]: any } {
    return {}
  }

  /**
   * Adds this resource to the terraform JSON output.
   */
  public toTerraform(): any {
    const attributes = deepMerge(
      this.synthesizeAttributes(),
      keysToSnakeCase(this.terraformMetaArguments),
      this.rawOverrides
    )

    attributes['//'] = this.constructNodeMetadata

    return {
      resource: {
        [this.terraformResourceType]: {
          [this.friendlyUniqueId]: attributes
        }
      }
    };
  }

  public interpolationForAttribute(terraformAttribute: string) {
    return `\${${this.terraformResourceType}.${this.friendlyUniqueId}.${terraformAttribute}}`;
  }
}
