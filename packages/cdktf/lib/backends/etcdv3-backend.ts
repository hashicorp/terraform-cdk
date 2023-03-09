// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

/**
 * @deprecated CDK for Terraform no longer supports the etcdv3 backend. Terraform deprecated etcdv3 in v1.2.3 and removed it in v1.3.
 */
export class EtcdV3Backend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: EtcdV3BackendConfig) {
    super(scope, "backend", "etcdv3");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string
  ): TerraformRemoteState {
    return new DataTerraformRemoteStateEtcdV3(scope, name, {
      ...this.props,
      workspace: "${terraform.workspace}",
    });
  }
}

/**
 * @deprecated CDK for Terraform no longer supports the etcdv3 backend. Terraform deprecated etcdv3 in v1.2.3 and removed it in v1.3.
 */
export class DataTerraformRemoteStateEtcdV3 extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateEtcdV3Config
  ) {
    super(scope, id, "etcdv3", config);
  }
}
/**
 * Stores the state in the etcd KV store with a given prefix.
 *
 * This backend supports state locking.
 *
 * Read more about this backend in the Terraform docs:
 * https://developer.hashicorp.com/terraform/language/v1.2.x/settings/backends/etcdv3
 *
 * @deprecated CDK for Terraform no longer supports the etcdv3 backend. Terraform deprecated etcdv3 in v1.2.3 and removed it in v1.3.
 */
export interface EtcdV3BackendConfig {
  /**
   * (Required) The list of 'etcd' endpoints which to connect to.
   */
  readonly endpoints: string[];
  /**
   * (Optional) Username used to connect to the etcd cluster.
   */
  readonly username?: string;
  /**
   *  (Optional) Password used to connect to the etcd cluster.
   */
  readonly password?: string;
  /**
   * (Optional) An optional prefix to be added to keys when to storing state in etcd.
   * Defaults to "".
   */
  readonly prefix?: string;
  /**
   * (Optional) Whether to lock state access. Defaults to true.
   */
  readonly lock?: boolean;
  /**
   * (Optional) The path to a PEM-encoded CA bundle
   * with which to verify certificates of TLS-enabled etcd servers.
   */
  readonly cacertPath?: string;
  /**
   * (Optional) The path to a PEM-encoded certificate to provide to etcd
   * for secure client identification.
   */
  readonly certPath?: string;
  /**
   * (Optional) The path to a PEM-encoded key to provide to etcd for secure client identification.
   */
  readonly keyPath?: string;
}

/**
 * @deprecated CDK for Terraform no longer supports the etcdv3 backend. Terraform deprecated etcdv3 in v1.2.3 and removed it in v1.3.
 */
export interface DataTerraformRemoteStateEtcdV3Config
  extends DataTerraformRemoteStateConfig,
    EtcdV3BackendConfig {}
