import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

export class S3Backend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: S3BackendProps) {
    super(scope, "backend", "s3");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  public getRemoteStateDataSource(
    scope: Construct,
    name: string,
    _fromStack: string
  ): TerraformRemoteState {
    return new DataTerraformRemoteStateS3(scope, name, {
      ...this.props,
      workspace: "${terraform.workspace}",
    });
  }
}

export class DataTerraformRemoteStateS3 extends TerraformRemoteState {
  constructor(
    scope: Construct,
    id: string,
    config: DataTerraformRemoteStateS3Config
  ) {
    super(scope, id, "s3", config);
  }
}

/**
 * Stores the state as a given key in a given bucket on Amazon S3. This backend
 * also supports state locking and consistency checking via Dynamo DB, which
 * can be enabled by setting the dynamodb_table field to an existing DynamoDB
 * table name. A single DynamoDB table can be used to lock multiple remote
 * state files. Terraform generates key names that include the values of the
 * bucket and key variables.
 *
 * Warning! It is highly recommended that you enable Bucket Versioning on the
 * S3 bucket to allow for state recovery in the case of accidental deletions
 * and human error.
 *
 * Read more about this backend in the Terraform docs:
 * https://www.terraform.io/language/settings/backends/s3
 */
export interface S3BackendProps {
  /**
   * Name of the S3 Bucket.
   */
  readonly bucket: string;
  /**
   * Path to the state file inside the S3 Bucket.
   * When using a non-default workspace, the state path will be /workspace_key_prefix/workspace_name/key
   */
  readonly key: string;
  /**
   * AWS Region of the S3 Bucket and DynamoDB Table (if used). This can also
   * be sourced from the AWS_DEFAULT_REGION and AWS_REGION environment
   * variables.
   */
  readonly region?: string;
  /**
   * (Optional) Custom endpoint for the AWS S3 API.
   * This can also be sourced from the AWS_S3_ENDPOINT environment variable.
   */
  readonly endpoint?: string;
  /**
   * (Optional) Enable server side encryption of the state file.
   */
  readonly encrypt?: boolean;
  /**
   * (Optional) Canned ACL to be applied to the state file.
   */
  readonly acl?: string;
  /**
   * (Optional) AWS access key. If configured, must also configure secret_key.
   * This can also be sourced from
   * the AWS_ACCESS_KEY_ID environment variable,
   * AWS shared credentials file (e.g. ~/.aws/credentials),
   * or AWS shared configuration file (e.g. ~/.aws/config).
   */
  readonly accessKey?: string;
  /**
   * (Optional) AWS secret access key. If configured, must also configure access_key.
   * This can also be sourced from
   * the AWS_SECRET_ACCESS_KEY environment variable,
   * AWS shared credentials file (e.g. ~/.aws/credentials),
   * or AWS shared configuration file (e.g. ~/.aws/config)
   */
  readonly secretKey?: string;
  /**
   * (Optional) Amazon Resource Name (ARN) of a Key Management Service (KMS) Key
   * to use for encrypting the state. Note that if this value is specified,
   * Terraform will need kms:Encrypt, kms:Decrypt and kms:GenerateDataKey permissions on this KMS key.
   */
  readonly kmsKeyId?: string;
  /**
   * (Optional) Name of DynamoDB Table to use for state locking and consistency.
   * The table must have a partition key named LockID with type of String.
   * If not configured, state locking will be disabled.
   */
  readonly dynamodbTable?: string;
  /**
   * (Optional) Name of AWS profile in AWS shared credentials file (e.g. ~/.aws/credentials)
   * or AWS shared configuration file (e.g. ~/.aws/config) to use for credentials
   * and/or configuration. This can also be sourced from the AWS_PROFILE environment variable.
   */
  readonly profile?: string;
  /**
   * (Optional) Path to the AWS shared credentials file. Defaults to ~/.aws/credentials.
   */
  readonly sharedCredentialsFile?: string;
  /**
   * (Optional) Multi-Factor Authentication (MFA) token.
   * This can also be sourced from the AWS_SESSION_TOKEN environment variable.
   */
  readonly token?: string;
  /**
   * (Optional) Amazon Resource Name (ARN) of the IAM Role to assume.
   */
  readonly roleArn?: string;
  /**
   * (Optional) IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
   */
  readonly assumeRolePolicy?: string;
  /**
   * (Optional) External identifier to use when assuming the role.
   */
  readonly externalId?: string;
  /**
   * (Optional) Session name to use when assuming the role.
   */
  readonly sessionName?: string;
  /**
   * (Optional) Prefix applied to the state path inside the bucket.
   * This is only relevant when using a non-default workspace. Defaults to env:
   */
  readonly workspaceKeyPrefix?: string;
  /**
   * (Optional) Custom endpoint for the AWS DynamoDB API.
   * This can also be sourced from the AWS_DYNAMODB_ENDPOINT environment variable.
   */
  readonly dynamodbEndpoint?: string;
  /**
   * (Optional) Custom endpoint for the AWS Identity and Access Management (IAM) API.
   * This can also be sourced from the AWS_IAM_ENDPOINT environment variable.
   */
  readonly iamEndpoint?: string;
  /**
   * (Optional) Custom endpoint for the AWS Security Token Service (STS) API.
   * This can also be sourced from the AWS_STS_ENDPOINT environment variable.
   */
  readonly stsEndpoint?: string;
  /**
   * (Optional) Enable path-style S3 URLs
   * (https://<HOST>/<BUCKET> instead of https://<BUCKET>.<HOST>).
   */
  readonly forcePathStyle?: boolean;
  /**
   * (Optional) Skip credentials validation via the STS API.
   */
  readonly skipCredentialsValidation?: boolean;
  /**
   * (Optional) Skip usage of EC2 Metadata API.
   */
  readonly skipMetadataApiCheck?: boolean;
  /**
   * (Optional) The key to use for encrypting state with Server-Side Encryption with Customer-Provided Keys (SSE-C).
   * This is the base64-encoded value of the key, which must decode to 256 bits.
   * This can also be sourced from the AWS_SSE_CUSTOMER_KEY environment variable,
   * which is recommended due to the sensitivity of the value.
   * Setting it inside a terraform file will cause it to be persisted to disk in terraform.tfstate.
   */
  readonly sseCustomerKey?: string;
  /**
   * (Optional) The maximum number of times an AWS API request is retried on retryable failure.
   * Defaults to 5.
   */
  readonly maxRetries?: number;
}

export interface DataTerraformRemoteStateS3Config
  extends DataTerraformRemoteStateConfig,
    S3BackendProps {}
