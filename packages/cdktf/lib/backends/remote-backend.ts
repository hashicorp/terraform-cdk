import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

export class RemoteBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: RemoteBackendProps) {
    super(scope, "backend", "remote");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string
  ): TerraformRemoteState {
    return new DataTerraformRemoteState(scope, name, {
      organization: this.props.organization,
      workspaces: this.props.workspaces,
      hostname: this.props.hostname,
      token: this.props.token,
    });
  }
}

export class DataTerraformRemoteState extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateRemoteConfig
  ) {
    super(scope, id, "remote", config);
  }
}

export interface RemoteBackendProps {
  readonly hostname?: string;
  readonly organization: string;
  readonly token?: string;
  readonly workspaces: IRemoteWorkspace;
}

export interface IRemoteWorkspace {}

export class NamedRemoteWorkspace implements IRemoteWorkspace {
  public constructor(public name: string) {}
}

export class PrefixedRemoteWorkspaces implements IRemoteWorkspace {
  public constructor(public prefix: string) {}
}

export interface DataTerraformRemoteStateRemoteConfig
  extends DataTerraformRemoteStateConfig,
    RemoteBackendProps {}
