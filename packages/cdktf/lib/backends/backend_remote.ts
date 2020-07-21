import { ITerraformBackend } from '../terraform-backend';

export class RemoteBackend implements ITerraformBackend {
    readonly name: string = "remote";
    hostname?: string;
    organization: string;
    token?: string;
    workspaces: IRemoteWorkspace;

    public constructor(options: RemoteBackendProps) {
        this.hostname = options.hostname;
        this.organization = options.organization;
        this.token = options.token;
        this.workspaces = options.workspaces;
    }
}

export interface RemoteBackendProps {
    readonly hostname?: string;
    readonly organization: string;
    readonly token?: string;
    readonly workspaces: IRemoteWorkspace;
}

export interface IRemoteWorkspace {
    
}

export class NamedRemoteWorkspace implements IRemoteWorkspace {
    public constructor(public name: string) {}
}

export class PrefixedRemoteWorkspaces implements IRemoteWorkspace {
    public constructor(public prefix: string) {}
}