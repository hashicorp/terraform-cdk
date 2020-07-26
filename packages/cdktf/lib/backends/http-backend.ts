import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";
import { TerraformRemoteState, TerraformRemoteStateConfig } from "../terraform-remote-state";

export class HttpBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: HttpBackendProps) {
        super(scope, "backend", "http");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export class HttpRemoteState extends TerraformRemoteState {
    constructor(scope: Construct, id: string, private readonly props: HttpBackendProps, config?: TerraformRemoteStateConfig) {
        super(scope, id, "http", config);
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export interface HttpBackendProps {
    readonly address: string;
    readonly updateMethod?: string;
    readonly lockAddress?: string;
    readonly lockMethod?: string;
    readonly unlockAddress?: string;
    readonly unlockMethod?: string;
    readonly username?: string;
    readonly password?: string;
    readonly skipCertVerification?: boolean;
    readonly retryMax?: number;
    readonly retryWaitMin?: number;
    readonly retryWaitMax?: number;
}