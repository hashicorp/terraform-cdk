import { ITerraformBackend } from '../terraform-backend';

export class OssBackend implements ITerraformBackend {
    readonly name: string = "oss";
    accessKey?: string;
    secretKey?: string;
    securityToken?: string;
    ecsRoleName?: string;
    region?: string;
    endpoint?: string;
    bucket: string;
    prefix?: string;
    key?: string;
    tablestoreEndpoint?: string;
    tablestoreTable?: string;
    encrypt?: boolean;
    acl?: string;
    sharedCredentialsFile?: string;
    profile?: string;
    assumeRole?: OssAssumeRole;

    public constructor(options: OssBackendProps) {
        this.accessKey = options.accessKey;
        this.secretKey = options.secretKey;
        this.securityToken = options.securityToken;
        this.ecsRoleName = options.ecsRoleName;
        this.region = options.region;
        this.endpoint = options.endpoint;
        this.bucket = options.bucket;
        this.prefix = options.prefix;
        this.key = options.key;
        this.tablestoreEndpoint = options.tablestoreEndpoint;
        this.tablestoreTable = options.tablestoreTable;
        this.encrypt = options.encrypt;
        this.acl = options.acl;
        this.sharedCredentialsFile = options.sharedCredentialsFile;
        this.profile = options.profile;
        this.assumeRole = options.assumeRole;
    }
}

export interface OssBackendProps {
    readonly accessKey?: string;
    readonly secretKey?: string;
    readonly securityToken?: string;
    readonly ecsRoleName?: string;
    readonly region?: string;
    readonly endpoint?: string;
    readonly bucket: string;
    readonly prefix?: string;
    readonly key?: string;
    readonly tablestoreEndpoint?: string;
    readonly tablestoreTable?: string;
    readonly encrypt?: boolean;
    readonly acl?: string;
    readonly sharedCredentialsFile?: string;
    readonly profile?: string;
    readonly assumeRole?: OssAssumeRole;
}

export interface OssAssumeRole {
    readonly roleArn: string;
    readonly policy?: string;
    readonly sessionName?: string;
    readonly sessionExpiration?: string;
}