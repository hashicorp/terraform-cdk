import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

export class ArtifactoryBackend extends TerraformBackend {
  constructor(
    scope: Construct,
    private readonly props: ArtifactoryBackendProps
  ) {
    super(scope, "backend", "artifactory");
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
      "The ArtifactoryBackend does not yet implement cross stack references"
    );
  }
}

export class DataTerraformRemoteStateArtifactory extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateArtifactoryConfig
  ) {
    super(scope, id, "artifactory", config);
  }
}

export interface ArtifactoryBackendProps {
  readonly username: string;
  readonly password: string;
  readonly url: string;
  readonly repo: string;
  readonly subpath: string;
}

export interface DataTerraformRemoteStateArtifactoryConfig
  extends DataTerraformRemoteStateConfig,
    ArtifactoryBackendProps {}
