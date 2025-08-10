// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";
import { getHostNameType } from "./cloud-backend";

// eslint-disable-next-line jsdoc/require-jsdoc
export class RemoteBackend extends TerraformBackend {
  constructor(
    scope: Construct,
    private readonly props: RemoteBackendConfig,
  ) {
    super(scope, "backend", "remote");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ...keysToSnakeCase({ ...this.props }),
      workspaces: this.props.workspaces.toTerraform(),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    return {
      ...keysToSnakeCase(this.props),
      workspaces: {
        value: this.props.workspaces.toHclTerraform(),
        isBlock: true,
        type: "map",
        storageClassType: "stringmap",
      },
    };
  }

  public toMetadata() {
    const cloud = getHostNameType(this.props.hostname);
    return { ...super.toMetadata(), cloud };
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string,
  ): TerraformRemoteState {
    return new DataTerraformRemoteState(scope, name, {
      ...this.props,
    });
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class DataTerraformRemoteState extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateRemoteConfig,
  ) {
    super(scope, id, "remote", config);
  }
}

export interface DataRemoteBackendConfig {
  readonly hostname?: string;
  readonly organization: string;
  readonly token?: string;
  workspaces: IRemoteWorkspace;
}

export interface RemoteBackendConfig {
  readonly hostname?: string;
  readonly organization: string;
  readonly token?: string;
  /**
   * A nested block that specifies which remote Terraform workspaces to use for the current configuration.
   */
  readonly workspaces: NamedRemoteWorkspace | PrefixedRemoteWorkspaces;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IRemoteWorkspace {}

/**
 * A cloud workspace can either be a single named workspace, or a list of tagged workspaces.
 */
export abstract class RemoteWorkspace {
  public abstract toTerraform(): any;
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class NamedRemoteWorkspace extends RemoteWorkspace {
  public constructor(public name: string) {
    super();
  }

  public toHclTerraform(): any {
    return {
      name: {
        value: this.name,
        type: "simple",
        storageClassType: "string",
      },
    };
  }

  public toTerraform(): any {
    return {
      name: this.name,
    };
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class PrefixedRemoteWorkspaces extends RemoteWorkspace {
  public constructor(public prefix: string) {
    super();
  }

  public toHclTerraform(): any {
    return {
      prefix: {
        value: this.prefix,
        type: "simple",
        storageClassType: "string",
      },
    };
  }

  public toTerraform(): any {
    return {
      prefix: this.prefix,
    };
  }
}

export interface DataTerraformRemoteStateRemoteConfig
  extends DataTerraformRemoteStateConfig,
    DataRemoteBackendConfig {}
