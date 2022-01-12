import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { Token } from "./tokens";
import { deepMerge, keysToSnakeCase } from "./util";
import { ref } from "./tfExpression";
import { IResolvable } from "./tokens/resolvable";
import { ITerraformAddressable } from "./terraform-addressable";

export interface DataTerraformRemoteStateConfig {
  readonly workspace?: string;
  readonly defaults?: { [key: string]: any };
}

export abstract class TerraformRemoteState
  extends TerraformElement
  implements ITerraformAddressable
{
  public static readonly tfResourceType = "terraform_remote_state";

  constructor(
    scope: Construct,
    id: string,
    private readonly backend: string,
    private readonly config: DataTerraformRemoteStateConfig
  ) {
    super(scope, id);
  }

  public getString(output: string): string {
    return Token.asString(this.interpolationForAttribute(output));
  }

  public getNumber(output: string): number {
    return Token.asNumber(this.interpolationForAttribute(output));
  }

  public getList(output: string): string[] {
    return Token.asList(this.interpolationForAttribute(output));
  }

  public getBoolean(output: string): boolean {
    return Token.asString(
      this.interpolationForAttribute(output)
    ) as any as boolean;
  }

  public get(output: string): IResolvable {
    return this.interpolationForAttribute(output);
  }

  private interpolationForAttribute(terraformAttribute: string): IResolvable {
    return ref(
      `data.terraform_remote_state.${this.friendlyUniqueId}.outputs.${terraformAttribute}`,
      this.cdktfStack
    );
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
  public toMetadata(): any {
    if (!Object.keys(this.rawOverrides).length) {
      return {};
    }

    return {
      overrides: {
        terraform_remote_state: Object.keys(this.rawOverrides),
      },
    };
  }
}
