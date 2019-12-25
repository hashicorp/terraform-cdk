import { Construct, Token } from "@aws-cdk/core";
import { TerraformProvider } from "./terraform-provider";

export interface TerraformResourceConfig {
  readonly type: string;
  readonly dependsOn?: TerraformResource[];
  readonly count?: number;
  readonly provider?: TerraformProvider;
  readonly lifecycle?: TerraformResourceLifecycle;
}

export abstract class TerraformResource extends Construct {
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

  public abstract synthesizeAttributes(): { [name: string]: any };

  private interpolationForAttribute(terraformAttribute: string) {
    return `\${${this.type}.${this.node.uniqueId}.${terraformAttribute}}`;
  }
}

export interface TerraformResourceLifecycle {
  readonly createBeforeDestroy?: boolean;
  readonly preventDestroy?: boolean;
  readonly ignoreChanges?: string[];
}