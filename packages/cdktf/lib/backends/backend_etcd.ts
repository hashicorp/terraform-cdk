import { ITerraformBackend } from '../terraform-backend';

export class EtcdBackend implements ITerraformBackend {
    readonly name: string = "etcd";
    path: string;
    endpoints: string;
    username?: string;
    password?: string;

    public constructor(options: EtcdBackendProps) {
        this.path = options.path;
        this.endpoints = options.endpoints;
        this.username = options.username;
        this.password = options.password;
    }
}

export interface EtcdBackendProps {
    readonly path: string;
    readonly endpoints: string;
    readonly username?: string;
    readonly password?: string;
}