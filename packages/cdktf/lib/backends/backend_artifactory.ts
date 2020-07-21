import { ITerraformBackend } from '../terraform-backend';

export class ArtifactoryBackend implements ITerraformBackend {
    readonly name: string = "artifactory";
    username: string;
    password: string;
    url: string;
    repo: string;
    subpath: string;

    public constructor(options: ArtifactoryBackendProps) {
        this.username = options.username;
        this.password = options.password;
        this.url = options.url;
        this.repo = options.repo;
        this.subpath = options.subpath;
    }
}

export interface ArtifactoryBackendProps {
    readonly username: string;
    readonly password: string;
    readonly url: string;
    readonly repo: string;
    readonly subpath: string;
}