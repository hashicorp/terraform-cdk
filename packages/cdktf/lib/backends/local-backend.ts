import { Construct } from "constructs";
import * as path from "path";

import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

export class LocalBackend extends TerraformBackend {
  constructor(scope: Construct, public readonly props: LocalBackendProps) {
    super(scope, "backend", "local");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    fromStack: string
  ): TerraformRemoteState {
    // FIXME: When running synth the output from the previous run is not yet there, leading to an error here
    // There might be no other solution than to disallow using a local backend as source when running another stack on TFC

    // return new DataTerraformRemoteStateLocal(scope, name, {
    //   workspace: this.props.workspaceDir,
    //   path: new TerraformAsset(scope, `${fromStack}-state`, {
    //     path:
    //       this.props.path ||
    //       path.join(process.cwd(), `terraform.${fromStack}.tfstate`),
    //   }).path,
    // });

    return new DataTerraformRemoteStateLocal(scope, name, {
      workspace: this.props.workspaceDir,
      path:
        this.props.path ||
        path.join(process.cwd(), `terraform.${fromStack}.tfstate`),
    });
  }
}

export class DataTerraformRemoteStateLocal extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateLocalConfig
  ) {
    super(scope, id, "local", config);
  }
}

export interface LocalBackendProps {
  readonly path?: string;
  readonly workspaceDir?: string;
}

export interface DataTerraformRemoteStateLocalConfig
  extends DataTerraformRemoteStateConfig,
    LocalBackendProps {}
