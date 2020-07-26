import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";
import { TerraformRemoteState, TerraformRemoteStateConfig } from "../terraform-remote-state";

export class ArtifactoryBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: ArtifactoryBackendProps) {
        super(scope, "backend", "artifactory");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export class ArtifactoryRemoteState extends TerraformRemoteState {
    constructor(scope: Construct, id: string, private readonly props: ArtifactoryBackendProps, config?: TerraformRemoteStateConfig) {
        super(scope, id, "artifactory", config);
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export interface ArtifactoryBackendProps {
    readonly username: string;
    readonly password: string;
    readonly url: string;
    readonly repo: string;
    readonly subpath: string;
}