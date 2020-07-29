import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";
import { TerraformRemoteState, TerraformRemoteStateConfig } from "../terraform-remote-state";

export class LocalBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: LocalBackendProps) {
        super(scope, "backend", "local");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export class DataTerraformRemoteStateLocal extends TerraformRemoteState {
    constructor(scope: Construct, id: string, private readonly props: LocalBackendProps, config?: TerraformRemoteStateConfig) {
        super(scope, id, "local", config);
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export interface LocalBackendProps {
    readonly path?: string;
    readonly workspaceDir?: string;
}