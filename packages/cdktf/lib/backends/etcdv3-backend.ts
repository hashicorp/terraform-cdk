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
    _scope: Construct,
    _name: string,
    _fromStack: string
  ): TerraformRemoteState {
    throw new Error(
      "The EtcdV3Backend does not yet implement cross stack references"
    );
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

export interface EtcdV3BackendProps {
  readonly endpoints: string[];
  readonly username?: string;
  readonly password?: string;
  readonly prefix?: string;
  readonly lock?: boolean;
  readonly cacertPath?: string;
  readonly certPath?: string;
  readonly keyPath?: string;
}

export interface DataTerraformRemoteStateEtcdV3Config
  extends DataTerraformRemoteStateConfig,
    EtcdV3BackendProps {}
