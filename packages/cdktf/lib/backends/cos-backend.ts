import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

export class CosBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: CosBackendProps) {
    super(scope, "backend", "cos");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string
  ): TerraformRemoteState {
    return new DataTerraformRemoteStateCos(scope, name, {
      ...this.props,
      workspace: "${terraform.workspace}",
    });
  }
}

export class DataTerraformRemoteStateCos extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateCosConfig
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
 * https://www.terraform.io/language/settings/backends/cos
 */
export interface CosBackendProps {
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
}

export interface DataTerraformRemoteStateCosConfig
  extends DataTerraformRemoteStateConfig,
    CosBackendProps {}
