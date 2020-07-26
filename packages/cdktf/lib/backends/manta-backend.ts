import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";
import { TerraformRemoteState, TerraformRemoteStateConfig } from "../terraform-remote-state";

export class MantaBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: MantaBackendProps) {
        super(scope, "backend", "manta");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export class MantaRemoteState extends TerraformRemoteState {
    constructor(scope: Construct, id: string, private readonly props: MantaBackendProps, config?: TerraformRemoteStateConfig) {
        super(scope, id, "manta", config);
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export interface MantaBackendProps {
    readonly account: string;
    readonly user?: string;
    readonly url?: string;
    readonly keyMaterial?: string;
    readonly keyId: string;
    readonly insecureSkipTlsVerify?: boolean;
    readonly path: string;
    readonly objectName?: string;
}