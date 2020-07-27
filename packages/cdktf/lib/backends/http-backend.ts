import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";

export class HttpBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: HttpBackendProps) {
        super(scope, "backend", "http");
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