import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { deepMerge } from "./util";
import { ITerraformDependable } from "./terraform-dependable";
import { Expression, ref, Tokenization } from ".";
import { isArray } from "util";
import { ITerraformAddressable } from "./terraform-addressable";

export interface TerraformOutputConfig {
  readonly value: Expression | ITerraformDependable;
  readonly description?: string;
  readonly sensitive?: boolean;
  readonly dependsOn?: ITerraformDependable[];
  /**
   * If set to true the synthesized Terraform Output will be named after the `id`
   * passed to the constructor instead of the default (TerraformOutput.friendlyUniqueId)
   *
   * @default false
   */
  readonly staticId?: boolean;
}

export class TerraformOutput extends TerraformElement {
  public value: Expression | ITerraformAddressable;
  public description?: string;
  public sensitive?: boolean;
  public dependsOn?: ITerraformDependable[];

  constructor(scope: Construct, id: string, config: TerraformOutputConfig) {
    super(scope, id);

    this.value = config.value;
    this.description = config.description;
    this.sensitive = config.sensitive;
    this.dependsOn = config.dependsOn;
    this.staticId = config.staticId || false;
  }

  public set staticId(staticId: boolean) {
    if (staticId) this.overrideLogicalId(this.node.id);
    else this.resetOverrideLogicalId();
  }

  public get staticId(): boolean {
    return this.friendlyUniqueId === this.node.id;
  }

  private isITerraformAddressable(
    object: any
  ): object is ITerraformAddressable {
    return (
      object &&
      typeof object === "object" &&
      !isArray(object) &&
      "fqn" in object
    );
  }

  private synthesizeValue(arg: any): any {
    if (Tokenization.isResolvable(arg)) {
      return arg;
    }

    if (this.isITerraformAddressable(arg)) {
      return ref(arg.fqn, this.cdktfStack);
    }

    if (Array.isArray(arg)) {
      return arg.map((innerArg) => this.synthesizeValue(innerArg));
    }

    if (typeof arg === "object") {
      return Object.keys(arg).reduce((result, key) => {
        result[key] = this.synthesizeValue(arg[key]);
        return result;
      }, {} as { [key: string]: string });
    }

    return arg;
  }

  protected synthesizeAttributes(): { [key: string]: any } {
    return {
      value: this.synthesizeValue(this.value),
      description: this.description,
      sensitive: this.sensitive,
      depends_on: this.dependsOn?.map((resource) => `\${${resource.fqn}}`),
    };
  }

  public toTerraform(): any {
    return {
      output: {
        [this.friendlyUniqueId]: deepMerge(
          this.synthesizeAttributes(),
          this.rawOverrides
        ),
      },
    };
  }

  public toMetadata(): any {
    if (!Object.keys(this.rawOverrides).length) {
      return {};
    }

    return {
      overrides: {
        output: Object.keys(this.rawOverrides),
      },
    };
  }
}
