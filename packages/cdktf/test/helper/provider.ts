import { TerraformProvider } from "../../lib";
import { Construct } from "constructs";

export interface TestProviderConfig {
  alias?: string;
  accessKey?: string;
  type?: string;
}

export enum TestProviderMetadata {
  TYPE = "test",
}

export class TestProvider extends TerraformProvider {
  public accessKey?: string;

  constructor(scope: Construct, id: string, config: TestProviderConfig) {
    super(scope, id, {
      terraformResourceType: config.type || TestProviderMetadata.TYPE,
      terraformGeneratorMetadata: {
        providerName: config.type || TestProviderMetadata.TYPE,
        providerVersionConstraint: "~> 2.0",
      },
    });

    this.alias = config.alias;
    this.accessKey = config.accessKey;
  }

  private _alias?: string;
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: this.accessKey,
    };
  }
}

// Generated Docker provider to test real-world scenarios
export class DockerProvider extends TerraformProvider {
  public constructor(
    scope: Construct,
    id: string,
    public config: Record<string, any>
  ) {
    super(scope, id, {
      terraformResourceType: "docker",
      terraformGeneratorMetadata: {
        providerName: "docker",
        providerVersionConstraint: "~> 2.0",
      },
      terraformProviderSource: "terraform-providers/docker",
    });
  }
}
