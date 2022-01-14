import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

export class ConsulBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: ConsulBackendProps) {
    super(scope, "backend", "consul");
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
      "The ConsulBackend does not yet implement cross stack references"
    );
  }
}

export class DataTerraformRemoteStateConsul extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateConsulConfig
  ) {
    super(scope, id, "consul", config);
  }
}

export interface ConsulBackendProps {
  readonly path: string;
  readonly accessToken: string;
  readonly address?: string;
  readonly scheme?: string;
  readonly datacenter?: string;
  readonly httpAuth?: string;
  readonly gzip?: boolean;
  readonly lock?: boolean;
  readonly caFile?: string;
  readonly certFile?: string;
  readonly keyFile?: string;
}

export interface DataTerraformRemoteStateConsulConfig
  extends DataTerraformRemoteStateConfig,
    ConsulBackendProps {}
