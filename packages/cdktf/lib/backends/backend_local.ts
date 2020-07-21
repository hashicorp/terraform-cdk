import { ITerraformBackend } from '../terraform-backend';

export class LocalBackend implements ITerraformBackend{
    readonly name: string = "local";
    path?: string;
    workspaceDir?: string;

    public constructor(options: LocalBackendProps) {
        this.path = options.path;
        this.workspaceDir = options.workspaceDir;
    }
}

export interface LocalBackendProps {
    readonly path?: string;
    readonly workspaceDir?: string;
}