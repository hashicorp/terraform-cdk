import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

export class HttpBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: HttpBackendProps) {
    super(scope, "backend", "http");
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
      "The HttpBackend does not yet implement cross stack references"
    );
  }
}

export class DataTerraformRemoteStateHttp extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateHttpConfig
  ) {
    super(scope, id, "http", config);
  }
}

export interface HttpBackendProps {
  readonly address: string;
  readonly updateMethod?: string;
  readonly lockAddress?: string;
  readonly lockMethod?: string;
  readonly unlockAddress?: string;
  readonly unlockMethod?: string;
  readonly username?: string;
  readonly password?: string;
  readonly skipCertVerification?: boolean;
  readonly retryMax?: number;
  readonly retryWaitMin?: number;
  readonly retryWaitMax?: number;
}

export interface DataTerraformRemoteStateHttpConfig
  extends DataTerraformRemoteStateConfig,
    HttpBackendProps {}
