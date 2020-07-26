import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";

export class PgBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: PgBackendProps) {
        super(scope, "backend", "pg");
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