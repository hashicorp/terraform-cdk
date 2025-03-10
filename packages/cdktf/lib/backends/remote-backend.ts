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
    return keysToSnakeCase({ ...this.props });
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
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

export interface RemoteBackendConfig {
  readonly hostname?: string;
  readonly organization: string;
  readonly token?: string;
  readonly workspaces: IRemoteWorkspace;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IRemoteWorkspace {}

// eslint-disable-next-line jsdoc/require-jsdoc
export class NamedRemoteWorkspace implements IRemoteWorkspace {
  public constructor(public name: string) {}
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class PrefixedRemoteWorkspaces implements IRemoteWorkspace {
  public constructor(public prefix: string) {}
}

export interface DataTerraformRemoteStateRemoteConfig
  extends DataTerraformRemoteStateConfig,
    RemoteBackendConfig {}
