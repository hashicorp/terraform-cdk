import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";

export class ConsulBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: ConsulBackendProps) {
        super(scope, "backend", "consul");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export interface ConsulBackendProps {
    readonly path: string;
    readonly accessToken: string;
    readonly address?: string;
    readonly scheme?: string;
    readonly datacenter?: string;
    readonly httpAuth?: string;
    readonly gzip?: boolean;
    readonly lock?: boolean;
    readonly caFile?: string;
    readonly certFile?: string;
    readonly keyFile?: string;
}