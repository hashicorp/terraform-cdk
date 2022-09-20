// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

// eslint-disable-next-line jsdoc/require-jsdoc
export class PgBackend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: PgBackendProps) {
    super(scope, "backend", "pg");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string
  ): TerraformRemoteState {
    return new DataTerraformRemoteStatePg(scope, name, {
      ...this.props,
      workspace: "${terraform.workspace}",
    });
  }
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class DataTerraformRemoteStatePg extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStatePgConfig
  ) {
    super(scope, id, "pg", config);
  }
}

export interface PgBackendProps {
  readonly connStr: string;
  readonly schemaName?: string;
  readonly skipSchemaCreation?: boolean;
}

export interface DataTerraformRemoteStatePgConfig
  extends DataTerraformRemoteStateConfig,
    PgBackendProps {}
