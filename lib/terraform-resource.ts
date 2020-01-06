import { Construct, Token } from "@aws-cdk/core";
import { TerraformElement } from "./terraform-element";
import { TerraformProvider } from "./terraform-provider";

export interface TerraformResourceConfig {
  readonly type: string;
  readonly dependsOn?: TerraformResource[];
  readonly count?: number;
  readonly provider?: TerraformProvider;
  readonly lifecycle?: TerraformResourceLifecycle;
}

export abstract class TerraformResource extends TerraformElement {
  public readonly type: string;

  constructor(scope: Construct, id: string, config: TerraformResourceConfig) {
    super(scope, id);

    this.type = config.type;
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

  protected abstract synthesizeAttributes(): { [name: string]: any };

  /**
   * Adds this resource to the terraform JSON output.
   */
  public toTerraform() {
    return {
      resource: {
        [this.type]: {
          [this.node.uniqueId]: this.synthesizeAttributes()
        }
      }
    };
  }

  private interpolationForAttribute(terraformAttribute: string) {
    return `\${${this.type}.${this.node.uniqueId}.${terraformAttribute}}`;
  }
}

export interface TerraformResourceLifecycle {
  readonly createBeforeDestroy?: boolean;
  readonly preventDestroy?: boolean;
  readonly ignoreChanges?: string[];
}