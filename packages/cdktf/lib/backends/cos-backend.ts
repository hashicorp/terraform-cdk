import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";
import { TerraformRemoteState, DataTerraformRemoteStateConfig } from "../terraform-remote-state";

export class CosBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: CosBackendProps) {
        super(scope, "backend", "cos");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export class DataTerraformRemoteStateCos extends TerraformRemoteState {
    constructor(scope: Construct, id: string, config: DataTerraformRemoteStateCosConfig) {
        super(scope, id, "cos", config);
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

export interface DataTerraformRemoteStateCosConfig extends DataTerraformRemoteStateConfig, CosBackendProps {}