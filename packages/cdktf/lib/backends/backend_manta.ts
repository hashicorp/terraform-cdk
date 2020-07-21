import { ITerraformBackend } from '../terraform-backend';

export class MantaBackend implements ITerraformBackend {
    readonly name: string = "manta";
    account: string;
    user?: string;
    url?: string;
    keyMaterial?: string;
    keyId: string;
    insecureSkipTlsVerify?: boolean;
    path: string;
    objectName?: string;

    public constructor(options: MantaBackendProps) {
        this.account = options.account;
        this.user = options.user;
        this.url = options.url;
        this.keyMaterial = options.keyMaterial;
        this.keyId = options.keyId;
        this.insecureSkipTlsVerify = options.insecureSkipTlsVerify;
        this.path = options.path;
        this.objectName = options.objectName;
    }
}

export interface MantaBackendProps {
    readonly account: string;
    readonly user?: string;
    readonly url?: string;
    readonly keyMaterial?: string;
    readonly keyId: string;
    readonly insecureSkipTlsVerify?: boolean;
    readonly path: string;
    readonly objectName?: string;
}