import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

export class EtcdV3Backend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: EtcdV3BackendProps) {
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
 * https://www.terraform.io/language/settings/backends/etcdv3
 */
export interface EtcdV3BackendProps {
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

export interface DataTerraformRemoteStateEtcdV3Config
  extends DataTerraformRemoteStateConfig,
    EtcdV3BackendProps {}
