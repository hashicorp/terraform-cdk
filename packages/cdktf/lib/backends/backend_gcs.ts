import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";

export class GcsBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: GcsBackendProps) {
        super(scope, "backend", "gcs");
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