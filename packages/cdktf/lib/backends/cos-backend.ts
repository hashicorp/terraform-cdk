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
export class CosBackend extends TerraformBackend {
  constructor(
    scope: Construct,
    private readonly props: CosBackendConfig,
  ) {
    super(scope, "backend", "cos");
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
    return new DataTerraformRemoteStateCos(scope, name, {
      ...this.props,
      workspace: "${terraform.workspace}",
    });
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class DataTerraformRemoteStateCos extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateCosConfig,
  ) {
    super(scope, id, "cos", config);
  }
}
/**
 * Stores the state as an object in a configurable prefix in
 * a given bucket on Tencent Cloud Object Storage (COS).
 *
 * This backend supports state locking.
 *
 * Warning! It is highly recommended that you enable Object Versioning on the COS bucket to allow for state recovery in the case of accidental deletions and human error.
 *
 * Read more about this backend in the Terraform docs:
 * https://developer.hashicorp.com/terraform/language/settings/backends/cos
 */
export interface CosBackendConfig {
  /**
   * (Optional) Secret id of Tencent Cloud.
   * It supports environment variables TENCENTCLOUD_SECRET_ID.
   */
  readonly secretId?: string;
  /**
   * (Optional) Secret key of Tencent Cloud.
   * It supports environment variables TENCENTCLOUD_SECRET_KEY.
   */
  readonly secretKey?: string;
  /**
   * (Optional) TencentCloud Security Token of temporary access credentials.
   * It supports environment variables TENCENTCLOUD_SECURITY_TOKEN.
   */
  readonly securityToken?: string;
  /**
   * (Optional) The region of the COS bucket.
   * It supports environment variables TENCENTCLOUD_REGION.
   */
  readonly region?: string;
  /**
   * (Required) The name of the COS bucket. You shall manually create it first.
   */
  readonly bucket: string;
  /**
   * (Optional) The directory for saving the state file in bucket. Default to "env:".
   */
  readonly prefix?: string;
  /**
   * (Optional) The path for saving the state file in bucket. Defaults to terraform.tfstate.
   */
  readonly key?: string;
  /**
   * (Optional) Whether to enable server side encryption of the state file.
   * If it is true, COS will use 'AES256' encryption algorithm to encrypt state file.
   */
  readonly encrypt?: boolean;
  /**
   * (Optional) Object ACL to be applied to the state file, allows private and public-read.
   * Defaults to private.
   */
  readonly acl?: string;
  /**
   * (Optional) Whether to enable global Acceleration. Defaults to false.
   */
  readonly accelerate?: boolean;
  /**
   * (Optional) The Custom Endpoint for the COS backend.
   * It supports the environment variable TENCENTCLOUD_ENDPOINT.
   */
  readonly endpoint?: string;
  /**
   * (Optional) The root domain of the API request. Defaults to tencentcloudapi.com.
   * It supports the environment variable TENCENTCLOUD_DOMAIN.
   */
  readonly domain?: string;
  /**
   * (Optional) The assume_role block.
   * If provided, terraform will attempt to assume this role using the supplied credentials.
   */
  readonly assumeRole?: CosBackendAssumeRole;
}

export interface CosBackendAssumeRole {
  /**
   * (Required) The ARN of the role to assume.
   * It can be sourced from the TENCENTCLOUD_ASSUME_ROLE_ARN.
   */
  readonly roleArn: string;
  /**
   * (Required) The session name to use when making the AssumeRole call.
   * It can be sourced from the TENCENTCLOUD_ASSUME_ROLE_SESSION_NAME.
   */
  readonly sessionName: string;
  /**
   * (Required) The duration of the session when making the AssumeRole call.
   * Its value ranges from 0 to 43200(seconds), and default is 7200 seconds.
   * It can be sourced from the TENCENTCLOUD_ASSUME_ROLE_SESSION_DURATION.
   */
  readonly sessionDuration: number;
  /**
   * (Optional) A more restrictive policy when making the AssumeRole call.
   * Its content must not contains principal elements.
   * Please refer to {@link https://www.tencentcloud.com/document/product/598/10603 policies syntax logic}.
   */
  readonly policy?: any;
}

export interface DataTerraformRemoteStateCosConfig
  extends DataTerraformRemoteStateConfig,
    CosBackendConfig {}
