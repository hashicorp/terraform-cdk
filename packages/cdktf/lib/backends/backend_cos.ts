import { ITerraformBackend } from '../terraform-backend';

export class CosBackend implements ITerraformBackend {
    readonly name: string = "cos";
    secretId?: string;
    secretKey?: string;
    region?: string;
    bucket: string;
    prefix?: string;
    key?: string;
    encrypt?: boolean;
    acl?: string;

    public constructor(options: CosBackendProps) {
        this.secretId = options.secretId;
        this.secretKey = options.secretKey;
        this.region = options.region;
        this.bucket = options.bucket;
        this.prefix = options.prefix;
        this.key = options.key;
        this.encrypt = options.encrypt;
        this.acl = options.acl;
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