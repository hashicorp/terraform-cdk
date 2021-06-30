import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { deepMerge, keysToSnakeCase } from "./util";
import {
  TerraformAnyAttribute,
  TerraformStringAttribute,
  TerraformNumberAttribute,
  TerraformBooleanAttribute,
  TerraformStringListAttribute,
  TerraformAnyListAttribute,
} from "./attributes";
import { ITerraformAddressable } from "./terraform-addressable";

export interface DataTerraformRemoteStateConfig {
  readonly workspace?: string;
  readonly defaults?: { [key: string]: any };
}

export abstract class TerraformRemoteState
  extends TerraformElement
  implements ITerraformAddressable
{
  constructor(
    scope: Construct,
    id: string,
    private readonly backend: string,
    private readonly config: DataTerraformRemoteStateConfig
  ) {
    super(scope, id);
  }

  public get(output: string) {
    return new TerraformAnyAttribute(this, `outputs.${output}`);
  }

  public getString(output: string) {
    return new TerraformStringAttribute(this, `outputs.${output}`);
  }

  public getNumber(output: string) {
    return new TerraformNumberAttribute(this, `outputs.${output}`);
  }

  public getBoolean(output: string) {
    return new TerraformBooleanAttribute(this, `outputs.${output}`);
  }

  public getStringList(output: string) {
    return new TerraformStringListAttribute(this, `outputs.${output}`);
  }

  public getList(output: string) {
    return new TerraformAnyListAttribute(this, `outputs.${output}`);
  }

  public get fqn() {
    return `data.terraform_remote_state.${this.friendlyUniqueId}`;
  }

  private extractConfig(): { [name: string]: any } {
    const configObj = keysToSnakeCase({ ...this.config });
    delete configObj.workspace;
    delete configObj.defaults;
    return configObj;
  }

  /**
   * Adds this resource to the terraform JSON output.
   */
  public toTerraform(): any {
    return {
      data: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        terraform_remote_state: {
          [this.friendlyUniqueId]: deepMerge(
            {
              backend: this.backend,
              workspace: this.config.workspace,
              defaults: this.config.defaults,
              config: this.extractConfig(),
            },
            this.rawOverrides
          ),
        },
      },
    };
  }
}
