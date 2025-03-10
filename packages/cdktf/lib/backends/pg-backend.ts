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
  constructor(
    scope: Construct,
    private readonly props: PgBackendConfig,
  ) {
    super(scope, "backend", "pg");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string,
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
    config: DataTerraformRemoteStatePgConfig,
  ) {
    super(scope, id, "pg", config);
  }
}

export interface PgBackendConfig {
  /**
   * Postgres connection string; a postgres:// URL.
   * The PG_CONN_STR and standard libpq environment variables can also be used to indicate how to connect to the PostgreSQL database.
   */
  readonly connStr: string;
  /**
   * Name of the automatically-managed Postgres schema, default to terraform_remote_state.
   * Can also be set using the PG_SCHEMA_NAME environment variable.
   */
  readonly schemaName?: string;
  /**
   * If set to true, the Postgres schema must already exist.
   * Can also be set using the PG_SKIP_SCHEMA_CREATION environment variable.
   * Terraform won't try to create the schema, this is useful when it has already been created by a database administrator.
   */
  readonly skipSchemaCreation?: boolean;
  /**
   * If set to true, the Postgres table must already exist.
   * Can also be set using the PG_SKIP_TABLE_CREATION environment variable.
   * Terraform won't try to create the table, this is useful when it has already been created by a database administrator.
   */
  readonly skipTableCreation?: boolean;
  /**
   * If set to true, the Postgres index must already exist.
   * Can also be set using the PG_SKIP_INDEX_CREATION environment variable.
   * Terraform won't try to create the index, this is useful when it has already been created by a database administrator.
   */
  readonly skipIndexCreation?: boolean;
}

export interface DataTerraformRemoteStatePgConfig
  extends DataTerraformRemoteStateConfig,
    PgBackendConfig {}
