// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { IResolvable, listMapper, TerraformProvider } from "../../lib";
import { Construct } from "constructs";

export interface TestProviderConfig {
  alias?: string;
  accessKey?: string;
  type?: string;
  listBlock?: IResolvable;
}

export enum TestProviderMetadata {
  TYPE = "test",
}

export class TestProvider extends TerraformProvider {
  public accessKey?: string;
  public listBlock?: IResolvable;

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
    this.listBlock = config.listBlock;
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
      list_block: listMapper((a) => a, true)(this.listBlock), // identity function to skip writing a toTerraform function
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    return this.synthesizeAttributes();
  }
}

// Generated Docker provider to test real-world scenarios
export class DockerProvider extends TerraformProvider {
  public static readonly tfResourceType: string = "docker";
  public _alias: string;
  public _ssh_opts?: [string];
  public constructor(
    scope: Construct,
    id: string,
    public config: Record<string, any>,
  ) {
    super(scope, id, {
      terraformResourceType: DockerProvider.tfResourceType,
      terraformGeneratorMetadata: {
        providerName: "docker",
        providerVersionConstraint: "~> 2.0",
      },
      terraformProviderSource: "kreuzwerker/docker",
    });

    this._alias = config.alias;
    this._ssh_opts = config.ssh_opts;

    // Windows needs the special docker host configuration to work
    if (process.platform === "win32") {
      this.addOverride("host", "npipe:////.//pipe//docker_engine");
    }
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: this._alias,
      ssh_opts: this._ssh_opts,
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    return {
      alias: this._alias,
      ssh_opts: this._ssh_opts,
    };
  }
}
