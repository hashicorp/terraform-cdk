import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";
import { TerraformRemoteState, DataTerraformRemoteStateConfig } from "../terraform-remote-state";

export class LocalBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: LocalBackendProps) {
        super(scope, "backend", "local");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export class DataTerraformRemoteStateLocal extends TerraformRemoteState {
    constructor(scope: Construct, id: string, config: DataTerraformRemoteStateLocalConfig) {
        super(scope, id, "local", config);
    }
}

export interface LocalBackendProps {
    readonly path?: string;
    readonly workspaceDir?: string;
}

export interface DataTerraformRemoteStateLocalConfig extends DataTerraformRemoteStateConfig, LocalBackendProps {}