import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";

export class EtcdV3Backend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: EtcdV3BackendProps) {
        super(scope, "backend", "etcdv3");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export interface EtcdV3BackendProps {
    readonly endpoints: string[];
    readonly username?: string;
    readonly password?: string;
    readonly prefix?: string;
    readonly lock?: boolean;
    readonly cacertPath?: string;
    readonly certPath?: string;
    readonly keyPath?: string;
}