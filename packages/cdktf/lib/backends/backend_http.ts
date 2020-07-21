import { ITerraformBackend } from '../terraform-backend';

export class HttpBackend implements ITerraformBackend {
    readonly name: string = "http";
    address: string;
    updateMethod?: string;
    lockAddress?: string;
    lockMethod?: string;
    unlockAddress?: string;
    unlockMethod?: string;
    username?: string;
    password?: string;
    skipCertVerification?: boolean;
    retryMax?: number;
    retryWaitMin?: number;
    retryWaitMax?: number;

    public constructor(options: HttpBackendProps) {
        this.address = options.address;
        this.updateMethod = options.updateMethod;
        this.lockAddress = options.lockAddress;
        this.lockMethod = options.lockMethod;
        this.unlockAddress = options.unlockAddress;
        this.unlockMethod = options.unlockMethod;
        this.username = options.username;
        this.password = options.password;
        this.skipCertVerification = options.skipCertVerification;
        this.retryMax = options.retryMax;
        this.retryWaitMin = options.retryWaitMin;
        this.retryWaitMax = options.retryWaitMax;
    }
}

export interface HttpBackendProps {
    readonly address: string;
    readonly updateMethod?: string;
    readonly lockAddress?: string;
    readonly lockMethod?: string;
    readonly unlockAddress?: string;
    readonly unlockMethod?: string;
    readonly username?: string;
    readonly password?: string;
    readonly skipCertVerification?: boolean;
    readonly retryMax?: number;
    readonly retryWaitMin?: number;
    readonly retryWaitMax?: number;
}