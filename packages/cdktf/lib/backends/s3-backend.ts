import { Construct } from "constructs";
import { TerraformBackend } from '../terraform-backend';
import { keysToSnakeCase } from "../util";
import { TerraformRemoteState, TerraformRemoteStateConfig } from "../terraform-remote-state";

export class S3Backend extends TerraformBackend {
    constructor(scope: Construct, private readonly props: S3BackendProps) {
        super(scope, "backend", "s3");
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
    }
}

export class S3RemoteState extends TerraformRemoteState {
    constructor(scope: Construct, id: string, private readonly props: S3BackendProps, config?: TerraformRemoteStateConfig) {
        super(scope, id, "s3", config);
    }

    protected synthesizeAttributes(): { [name: string]: any } {
        return keysToSnakeCase({ ...this.props });
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