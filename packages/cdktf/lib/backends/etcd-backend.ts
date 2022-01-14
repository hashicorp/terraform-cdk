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
    _scope: Construct,
    _name: string,
    _fromStack: string
  ): TerraformRemoteState {
    throw new Error(
      "The EtcdBackend does not yet implement cross stack references"
    );
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

export interface EtcdBackendProps {
  readonly path: string;
  readonly endpoints: string;
  readonly username?: string;
  readonly password?: string;
}

export interface DataTerraformRemoteStateEtcdConfig
  extends DataTerraformRemoteStateConfig,
    EtcdBackendProps {}
