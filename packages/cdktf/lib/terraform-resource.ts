import { Construct, Node, Token } from "constructs";
import { TerraformElement } from "./terraform-element";
import { TerraformProvider } from "./terraform-provider";

export interface TerraformResourceConfig {
  readonly type: string;
  readonly dependsOn?: TerraformResource[];
  readonly count?: number;
  readonly provider?: TerraformProvider;
  readonly lifecycle?: TerraformResourceLifecycle;
  readonly escapeHatch?: any;
}

export abstract class TerraformResource extends TerraformElement {
  public readonly type: string;
  public readonly escapeHatch: any;

  constructor(scope: Construct, id: string, config: TerraformResourceConfig) {
    super(scope, id);

    this.type = config.type;
    this.escapeHatch = config.escapeHatch;
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

  protected abstract synthesizeAttributes(): { [name: string]: any; escapeHatch?: any };

  private mergeEscapeHatch() {
    const attributes = this.synthesizeAttributes()
    const escapeHatch = this.escapeHatch
    if (escapeHatch) {
      delete attributes.escapeHatch
      return {...attributes, ...escapeHatch };
    }
    return attributes
  }

  /**
   * Adds this resource to the terraform JSON output.
   */
  public toTerraform(): any {
    return {
      resource: {
        [this.type]: {
          [Node.of(this).uniqueId]: this.mergeEscapeHatch()
        }
      }
    };
  }

  private interpolationForAttribute(terraformAttribute: string) {
    return `\${${this.type}.${Node.of(this).uniqueId}.${terraformAttribute}}`;
  }
}

export interface TerraformResourceLifecycle {
  readonly createBeforeDestroy?: boolean;
  readonly preventDestroy?: boolean;
  readonly ignoreChanges?: string[];
}