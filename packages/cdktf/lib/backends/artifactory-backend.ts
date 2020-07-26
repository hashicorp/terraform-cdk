import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";

export class ArtifactoryBackend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: ArtifactoryBackendProps) {
        super(scope, "backend", "artifactory");
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