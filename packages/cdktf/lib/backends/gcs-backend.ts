import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

export class GcsBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: GcsBackendProps) {
    super(scope, "backend", "gcs");
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
      "The GcsBackend does not yet implement cross stack references"
    );
  }
}

export class DataTerraformRemoteStateGcs extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateGcsConfig
  ) {
    super(scope, id, "gcs", config);
  }
}

export interface GcsBackendProps {
  readonly bucket: string;
  readonly credentials?: string;
  readonly accessToken?: string;
  readonly prefix?: string;
  readonly encryptionKey?: string;
}

export interface DataTerraformRemoteStateGcsConfig
  extends DataTerraformRemoteStateConfig,
    GcsBackendProps {}
