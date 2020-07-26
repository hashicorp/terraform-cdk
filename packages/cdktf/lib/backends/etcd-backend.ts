import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";

export class EtcdBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: EtcdBackendProps) {
        super(scope, "backend", "etcd");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export interface EtcdBackendProps {
    readonly path: string;
    readonly endpoints: string;
    readonly username?: string;
    readonly password?: string;
}