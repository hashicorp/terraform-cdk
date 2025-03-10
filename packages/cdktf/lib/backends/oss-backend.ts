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
  constructor(
    scope: Construct,
    private readonly props: OssBackendConfig,
  ) {
    super(scope, "backend", "oss");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string,
  ): TerraformRemoteState {
    return new DataTerraformRemoteStateOss(scope, name, this.props);
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class DataTerraformRemoteStateOss extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateOssConfig,
  ) {
    super(scope, id, "oss", config);
  }
}

export interface OssBackendConfig {
  /**
   * (Optional) Alibaba Cloud access key.
   * It supports environment variables ALICLOUD_ACCESS_KEY and ALICLOUD_ACCESS_KEY_ID.
   */
  readonly accessKey?: string;
  /**
   * (Optional) Alibaba Cloud secret access key.
   * It supports environment variables ALICLOUD_SECRET_KEY and ALICLOUD_ACCESS_KEY_SECRET.
   */
  readonly secretKey?: string;
  /**
   * (Optional) STS access token. It supports environment variable ALICLOUD_SECURITY_TOKEN.
   */
  readonly securityToken?: string;
  /**
   * (Optional, Available in 0.12.14+) The RAM Role Name attached on a ECS instance for API operations.
   * You can retrieve this from the 'Access Control' section of the Alibaba Cloud console.
   */
  readonly ecsRoleName?: string;
  /**
   * (Optional) The region of the OSS bucket.
   * It supports environment variables ALICLOUD_REGION and ALICLOUD_DEFAULT_REGION.
   */
  readonly region?: string;
  /**
   * (Optional) A custom endpoint for the OSS API.
   * It supports environment variables ALICLOUD_OSS_ENDPOINT and OSS_ENDPOINT.
   */
  readonly endpoint?: string;
  /**
   * (Required) The name of the OSS bucket.
   */
  readonly bucket: string;
  /**
   * (Optional) The path directory of the state file will be stored. Default to "env:".
   */
  readonly prefix?: string;
  /**
   * (Optional) The name of the state file. Defaults to terraform.tfstate.
   */
  readonly key?: string;
  /**
   * (Optional) A custom endpoint for the TableStore API.
   */
  readonly tablestoreEndpoint?: string;
  /**
   * (Optional) A TableStore table for state locking and consistency.
   * The table must have a primary key named LockID of type String.
   */
  readonly tablestoreTable?: string;
  /**
   * (Optional, Available in 1.0.11+) Custom endpoint for the AliCloud Security Token Service (STS) API.
   * It supports environment variable ALICLOUD_STS_ENDPOINT.
   */
  readonly stsEndpoint?: string;
  /**
   * (Optional) Whether to enable server side encryption of the state file.
   * If it is true, OSS will use 'AES256' encryption algorithm to encrypt state file.
   */
  readonly encrypt?: boolean;
  /**
   * (Optional) Object ACL to be applied to the state file.
   */
  readonly acl?: string;
  /**
   * (Optional, Available in 0.12.8+) This is the path to the shared credentials file.
   * It can also be sourced from the ALICLOUD_SHARED_CREDENTIALS_FILE environment variable.
   * If this is not set and a profile is specified, ~/.aliyun/config.json will be used.
   */
  readonly sharedCredentialsFile?: string;
  /**
   * (Optional, Available in 0.12.8+) This is the Alibaba Cloud profile name as set in the shared credentials file.
   * It can also be sourced from the ALICLOUD_PROFILE environment variable.
   */
  readonly profile?: string;
  /**
   * (Optional, Available in 1.1.0+) The ARN of the role to assume.
   * If ARN is set to an empty string, it does not perform role switching.
   * It supports the environment variable ALICLOUD_ASSUME_ROLE_ARN.
   * Terraform executes configuration on account with provided credentials.
   */
  readonly assumeRoleRoleArn?: string;
  /**
   * (Optional, Available in 1.1.0+) A more restrictive policy to apply to the temporary credentials.
   * This gives you a way to further restrict the permissions for the resulting temporary security credentials.
   * You cannot use this policy to grant permissions that exceed those of the role that is being assumed
   */
  readonly assumeRolePolicy?: string;
  /**
   * (Optional, Available in 1.1.0+) The session name to use when assuming the role.
   * If omitted, 'terraform' is passed to the AssumeRole call as session name.
   * It supports environment variable ALICLOUD_ASSUME_ROLE_SESSION_NAME.
   */
  readonly assumeRoleSessionName?: string;
  /**
   * (Optional, Available in 1.1.0+) The time after which the established session for assuming role expires.
   * Valid value range: [900-3600] seconds. Default to 3600 (in this case Alibaba Cloud uses its own default value).
   * It supports environment variable ALICLOUD_ASSUME_ROLE_SESSION_EXPIRATION.
   */
  readonly assumeRoleSessionExpiration?: number;
  /**
   * @deprecated Use flattened assume role options
   */
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
