import { ITerraformBackend } from '../terraform-backend';

export class ConsulBackend implements ITerraformBackend {
    readonly name: string = "consul";
    path: string;
    accessToken: string;
    address?: string;
    scheme?: string;
    datacenter?: string;
    httpAuth?: string;
    gzip?: boolean;
    lock?: boolean;
    caFile?: string;
    certFile?: string;
    keyFile?: string;

    public constructor(options: ConsulBackendProps) {
        this.path = options.path;
        this.accessToken = options.accessToken;
        this.address = options.address;
        this.scheme = options.scheme;
        this.datacenter = options.datacenter;
        this.httpAuth = options.httpAuth;
        this.gzip = options.gzip;
        this.lock = options.lock;
        this.caFile = options.caFile;
        this.certFile = options.certFile;
        this.keyFile = options.keyFile;
    }
}

export interface ConsulBackendProps {
    readonly path: string;
    readonly accessToken: string;
    readonly address?: string;
    readonly scheme?: string;
    readonly datacenter?: string;
    readonly httpAuth?: string;
    readonly gzip?: boolean;
    readonly lock?: boolean;
    readonly caFile?: string;
    readonly certFile?: string;
    readonly keyFile?: string;
}