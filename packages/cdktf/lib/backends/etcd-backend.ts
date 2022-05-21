import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

export class EtcdBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: EtcdBackendProps) {
    super(scope, "backend", "etcd");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string
  ): TerraformRemoteState {
    return new DataTerraformRemoteStateEtcd(scope, name, this.props);
  }
}

export class DataTerraformRemoteStateEtcd extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateEtcdConfig
  ) {
    super(scope, id, "etcd", config);
  }
}
/**
 * Stores the state in etcd 2.x at a given path.
 *
 * This backend does not support state locking.
 *
 * Read more about this backend in the Terraform docs:
 * https://www.terraform.io/language/settings/backends/etcd
 */
export interface EtcdBackendProps {
  /**
   * (Required) The path where to store the state
   */
  readonly path: string;
  /**
   * (Required) A space-separated list of the etcd endpoints
   */
  readonly endpoints: string;
  /**
   * (Optional) The username
   */
  readonly username?: string;
  /**
   * (Optional) The password
   */
  readonly password?: string;
}

export interface DataTerraformRemoteStateEtcdConfig
  extends DataTerraformRemoteStateConfig,
    EtcdBackendProps {}
