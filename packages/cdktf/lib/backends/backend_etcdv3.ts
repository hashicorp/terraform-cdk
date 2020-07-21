import { ITerraformBackend } from '../terraform-backend';

export class EtcdV3Backend implements ITerraformBackend {
    readonly name: string = "etcdv3";
    endpoints: string[];
    username?: string;
    password?: string;
    prefix?: string;
    lock?: boolean;
    cacertPath?: string;
    cerPath?: string;
    keyPath?: string;

    public constructor(options: EtcdV3BackendProps) {
        this.endpoints = options.endpoints;
        this.username = options.username;
        this.password = options.password;
        this.prefix = options.prefix;
        this.lock = options.lock;
        this.cacertPath = options.cacertPath;
        this.cerPath = options.cerPath;
        this.keyPath = options.keyPath;
    }
}

export interface EtcdV3BackendProps {
    readonly endpoints: string[];
    readonly username?: string;
    readonly password?: string;
    readonly prefix?: string;
    readonly lock?: boolean;
    readonly cacertPath?: string;
    readonly cerPath?: string;
    readonly keyPath?: string;
}