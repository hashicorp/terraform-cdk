import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { TerraformResource } from "./terraform-resource"
import { keysToSnakeCase } from "./util"

export interface TerraformOutputConfig {
  readonly value: string | number | boolean | any[] | { [key: string]: any } | undefined;
  readonly description?: string;
  readonly sensitive?: boolean;
  readonly dependsOn?: TerraformResource[];
}

export class TerraformOutput extends TerraformElement {
  public value: string | number | boolean | any[] | { [key: string]: any } | undefined;
  public description?: string;
  public sensitive?: boolean;
  public dependsOn?: TerraformResource[];

  constructor(scope: Construct, id: string, config: TerraformOutputConfig) {
    super(scope, id);

    this.value = config.value;
    this.description = config.description;
    this.sensitive = config.sensitive;
    this.dependsOn = config.dependsOn;
  }

  public synthesizeAttributes(): {[key: string]: any} {
    return {
      value: this.value,
      description: this.description,
      sensitive: this.sensitive,
      dependsOn: this.dependsOn?.map(resource => `\${${resource.fqn}}`)
    }
  }

  public toTerraform(): any {
    return {
      output: {
        [this.friendlyUniqueId]: keysToSnakeCase(this.synthesizeAttributes())
      }
    };
  }
}