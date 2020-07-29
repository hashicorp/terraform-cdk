import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";
import { TerraformRemoteState, TerraformRemoteStateConfig } from "../terraform-remote-state";

export class EtcdBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: EtcdBackendProps) {
        super(scope, "backend", "etcd");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export class DataTerraformRemoteStateEtcd extends TerraformRemoteState {
    constructor(scope: Construct, id: string, private readonly props: EtcdBackendProps, config?: TerraformRemoteStateConfig) {
        super(scope, id, "etcd", config);
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