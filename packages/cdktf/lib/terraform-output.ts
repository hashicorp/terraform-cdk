import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { keysToSnakeCase, deepMerge } from "./util";
import { ITerraformDependable } from "./terraform-dependable";
import { TerraformAttribute } from "./attributes";

export interface TerraformOutputConfig {
  readonly value:
    | string
    | number
    | boolean
    | any[]
    | { [key: string]: any }
    | undefined;
  readonly description?: string;
  readonly sensitive?: boolean;
  readonly dependsOn?: ITerraformDependable[];
}

export class TerraformOutput extends TerraformElement {
  public value:
    | string
    | number
    | boolean
    | any[]
    | { [key: string]: any }
    | undefined;
  public description?: string;
  public sensitive?: boolean;
  public dependsOn?: ITerraformDependable[];

  constructor(scope: Construct, id: string, config: TerraformOutputConfig) {
    super(scope, id);

    this.value = config.value;
    this.description = config.description;
    this.sensitive = config.sensitive;
    this.dependsOn = config.dependsOn;
  }

  protected synthesizeAttributes(): { [key: string]: any } {
    return {
      value:
        this.value instanceof TerraformAttribute
          ? this.value.terraformReference
          : this.value,
      description: this.description,
      sensitive: this.sensitive,
      dependsOn: this.dependsOn?.map((resource) => `\${${resource.fqn}}`),
    };
  }

  public toTerraform(): any {
    return {
      output: {
        [this.friendlyUniqueId]: deepMerge(
          keysToSnakeCase(this.synthesizeAttributes()),
          this.rawOverrides
        ),
      },
    };
  }
}
