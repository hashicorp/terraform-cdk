import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

export class MantaBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: MantaBackendProps) {
    super(scope, "backend", "manta");
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
      "The MantaBackend does not yet implement cross stack references"
    );
  }
}

export class DataTerraformRemoteStateManta extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateMantaConfig
  ) {
    super(scope, id, "manta", config);
  }
}

export interface MantaBackendProps {
  readonly account: string;
  readonly user?: string;
  readonly url?: string;
  readonly keyMaterial?: string;
  readonly keyId: string;
  readonly insecureSkipTlsVerify?: boolean;
  readonly path: string;
  readonly objectName?: string;
}

export interface DataTerraformRemoteStateMantaConfig
  extends DataTerraformRemoteStateConfig,
    MantaBackendProps {}
