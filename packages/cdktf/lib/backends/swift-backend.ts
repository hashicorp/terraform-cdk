// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

// eslint-disable-next-line jsdoc/require-jsdoc
export class SwiftBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: SwiftBackendProps) {
    super(scope, "backend", "swift");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string
  ): TerraformRemoteState {
    return new DataTerraformRemoteStateSwift(scope, name, this.props);
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class DataTerraformRemoteStateSwift extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateSwiftConfig
  ) {
    super(scope, id, "swift", config);
  }
}

export interface SwiftBackendProps {
  readonly authUrl?: string;
  readonly cloud?: string;
  readonly container: string;
  readonly stateName?: string;
  readonly userName?: string;
  readonly userId?: string;
  readonly password?: string;
  readonly applicationCredentialId?: string;
  readonly applicationCredentialName?: string;
  readonly applicationCredentialSecret?: string;
  readonly token?: string;
  readonly regionName?: string;
  readonly tenantId?: string;
  readonly tenantName?: string;
  readonly domainId?: string;
  readonly domainName?: string;
  readonly userDomainName?: string;
  readonly userDomainId?: string;
  readonly projectDomainName?: string;
  readonly projectDomainId?: string;
  readonly defaultDomain?: string;
  readonly insecure?: boolean;
  readonly cacertFile?: string;
  readonly cert?: string;
  readonly key?: string;
  readonly archiveContainer?: string;
  readonly expireAfter?: string;
}

export interface DataTerraformRemoteStateSwiftConfig
  extends DataTerraformRemoteStateConfig,
    SwiftBackendProps {}
