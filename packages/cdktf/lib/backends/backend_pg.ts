import { ITerraformBackend } from '../terraform-backend';

export class PgBackend implements ITerraformBackend {
    readonly name: string = "pg";
    connStr: string;
    schemaName?: string;
    skipSchemaCreation?: boolean;

    public constructor(options: PgBackendProps) {
        this.connStr = options.connStr;
        this.schemaName = options.schemaName;
        this.skipSchemaCreation = options.skipSchemaCreation;
    }
}

export interface PgBackendProps {
    readonly connStr: string;
    readonly schemaName?: string;
    readonly skipSchemaCreation?: boolean;
}