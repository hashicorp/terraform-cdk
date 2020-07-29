import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";
import { TerraformRemoteState, TerraformRemoteStateConfig } from "../terraform-remote-state";

export class GcsBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: GcsBackendProps) {
        super(scope, "backend", "gcs");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export class DataTerraformRemoteStateGcs extends TerraformRemoteState {
    constructor(scope: Construct, id: string, private readonly props: GcsBackendProps, config?: TerraformRemoteStateConfig) {
        super(scope, id, "gcs", config);
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export interface GcsBackendProps {
    readonly bucket: string;
    readonly credentials?: string;
    readonly accessToken?: string;
    readonly prefix?: string;
    readonly encryptionKey?: string;
}