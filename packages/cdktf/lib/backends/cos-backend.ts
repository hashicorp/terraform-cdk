import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";

export class CosBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: CosBackendProps) {
        super(scope, "backend", "cos");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export interface CosBackendProps {
    readonly secretId?: string;
    readonly secretKey?: string;
    readonly region?: string;
    readonly bucket: string;
    readonly prefix?: string;
    readonly key?: string;
    readonly encrypt?: boolean;
    readonly acl?: string;
}