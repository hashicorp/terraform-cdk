import { ITerraformBackend } from '../terraform-backend';

export class S3Backend implements ITerraformBackend {
    readonly name: string = "s3";
    bucket: string;
    key: string;
    region?: string;
    endpoint?: string;
    encrypt?: boolean;
    acl?: string;
    accessKey?: string;
    secretKey?: string;
    kmsKeyId?: string;
    dynamodbTable?: string;
    profile?: string;
    sharedCredentialsFile?: string;
    token?: string;
    roleArn?: string;
    assumeRolePolicy?: string;
    externalId?: string;
    sessionName?: string;
    workspaceKeyPrefix?: string;
    dynamodbEndpoint?: string;
    iamEndpoint?: string;
    stsEndpoint?: string;
    forcePathStyle?: boolean;
    skipCredentialsValidation?: boolean;
    skipMetadataApiCheck?: boolean;
    sseCustomerKey?: string;
    maxRetries?: number;

    public constructor(options: S3BackendProps) {
        this.bucket = options.bucket;
        this.key = options.key;
        this.region = options.region;
        this.endpoint = options.endpoint;
        this.encrypt = options.encrypt;
        this.acl = options.acl;
        this.accessKey = options.accessKey;
        this.secretKey = options.secretKey;
        this.kmsKeyId = options.kmsKeyId;
        this.dynamodbTable = options.dynamodbTable;
        this.profile = options.profile;
        this.sharedCredentialsFile = options.sharedCredentialsFile;
        this.token = options.token;
        this.roleArn = options.roleArn;
        this.assumeRolePolicy = options.assumeRolePolicy;
        this.externalId = options.externalId;
        this.sessionName = options.sessionName;
        this.workspaceKeyPrefix = options.workspaceKeyPrefix;
        this.dynamodbEndpoint = options.dynamodbEndpoint;
        this.iamEndpoint = options.iamEndpoint;
        this.stsEndpoint = options.stsEndpoint;
        this.forcePathStyle = options.forcePathStyle;
        this.skipCredentialsValidation = options.skipCredentialsValidation;
        this.skipMetadataApiCheck = options.skipMetadataApiCheck;
        this.sseCustomerKey = options.sseCustomerKey;
        this.maxRetries = options.maxRetries;
    }
}

export interface S3BackendProps {
    readonly bucket: string;
    readonly key: string;
    readonly region?: string;
    readonly endpoint?: string;
    readonly encrypt?: boolean;
    readonly acl?: string;
    readonly accessKey?: string;
    readonly secretKey?: string;
    readonly kmsKeyId?: string;
    readonly dynamodbTable?: string;
    readonly profile?: string;
    readonly sharedCredentialsFile?: string;
    readonly token?: string;
    readonly roleArn?: string;
    readonly assumeRolePolicy?: string;
    readonly externalId?: string;
    readonly sessionName?: string;
    readonly workspaceKeyPrefix?: string;
    readonly dynamodbEndpoint?: string;
    readonly iamEndpoint?: string;
    readonly stsEndpoint?: string;
    readonly forcePathStyle?: boolean;
    readonly skipCredentialsValidation?: boolean;
    readonly skipMetadataApiCheck?: boolean;
    readonly sseCustomerKey?: string;
    readonly maxRetries?: number;
}