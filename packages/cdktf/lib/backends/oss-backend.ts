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
export class OssBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: OssBackendConfig) {
    super(scope, "backend", "oss");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string
  ): TerraformRemoteState {
    return new DataTerraformRemoteStateOss(scope, name, this.props);
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class DataTerraformRemoteStateOss extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateOssConfig
  ) {
    super(scope, id, "oss", config);
  }
}

export interface OssBackendConfig {
  readonly accessKey?: string;
  readonly secretKey?: string;
  readonly securityToken?: string;
  readonly ecsRoleName?: string;
  readonly region?: string;
  readonly endpoint?: string;
  readonly bucket: string;
  readonly prefix?: string;
  readonly key?: string;
  readonly tablestoreEndpoint?: string;
  readonly tablestoreTable?: string;
  readonly encrypt?: boolean;
  readonly acl?: string;
  readonly sharedCredentialsFile?: string;
  readonly profile?: string;
  readonly assumeRole?: OssAssumeRole;
}

export interface OssAssumeRole {
  readonly roleArn: string;
  readonly policy?: string;
  readonly sessionName?: string;
  readonly sessionExpiration?: number;
}

export interface DataTerraformRemoteStateOssConfig
  extends DataTerraformRemoteStateConfig,
    OssBackendConfig {}
