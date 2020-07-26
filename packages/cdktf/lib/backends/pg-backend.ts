import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";
import { TerraformRemoteState, TerraformRemoteStateConfig } from "../terraform-remote-state";

export class PgBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: PgBackendProps) {
        super(scope, "backend", "pg");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export class PgRemoteState extends TerraformRemoteState {
    constructor(scope: Construct, id: string, private readonly props: PgBackendProps, config?: TerraformRemoteStateConfig) {
        super(scope, id, "pg", config);
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export interface PgBackendProps {
    readonly connStr: string;
    readonly schemaName?: string;
    readonly skipSchemaCreation?: boolean;
}