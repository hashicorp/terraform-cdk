import { ITerraformBackend } from '../terraform-backend';

export class GcsBackend implements ITerraformBackend {
    readonly name: string = "gcs";
    bucket: string;
    credentials?: string;
    accessToken?: string;
    prefix?: string;
    encryptionKey?: string;

    public constructor(options: GcsBackendProps) {
        this.bucket = options.bucket;
        this.credentials = options.credentials;
        this.accessToken = options.accessToken;
        this.prefix = options.prefix;
        this.encryptionKey = options.encryptionKey;
    }
}

export interface GcsBackendProps {
    readonly bucket: string;
    readonly credentials?: string;
    readonly accessToken?: string;
    readonly prefix?: string;
    readonly encryptionKey?: string;
}