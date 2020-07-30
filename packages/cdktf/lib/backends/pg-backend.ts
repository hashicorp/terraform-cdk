import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";
import { TerraformRemoteState, DataTerraformRemoteStateConfig } from "../terraform-remote-state";

export class PgBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: PgBackendProps) {
        super(scope, "backend", "pg");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export class DataTerraformRemoteStatePg extends TerraformRemoteState {
    constructor(scope: Construct, id: string, config: DataTerraformRemoteStatePgConfig) {
        super(scope, id, "pg", config);
    }
}

export interface PgBackendProps {
    readonly connStr: string;
    readonly schemaName?: string;
    readonly skipSchemaCreation?: boolean;
}

export interface DataTerraformRemoteStatePgConfig extends DataTerraformRemoteStateConfig, PgBackendProps {}