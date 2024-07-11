// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { TerraformBackend } from "../terraform-backend";
import { keysToSnakeCase } from "../util";
import {
  TerraformRemoteState,
  DataTerraformRemoteStateConfig,
} from "../terraform-remote-state";

// eslint-disable-next-line jsdoc/require-jsdoc
export class S3Backend extends TerraformBackend {
  constructor(scope: Construct, private readonly props: S3BackendConfig) {
    super(scope, "backend", "s3");
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return keysToSnakeCase({ ...this.props });
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
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

// eslint-disable-next-line jsdoc/require-jsdoc
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
 * https://developer.hashicorp.com/terraform/language/settings/backends/s3
 */
export interface S3BackendConfig {
  /**
   * Name of the S3 Bucket.
   */
  readonly bucket: string;
  /**
   * (Optional) List of allowed AWS account IDs to prevent potential destruction of a live environment.
   * Conflicts with forbidden_account_ids.
   */
  readonly allowedAccountIds?: string[];
  /**
   * (Optional) File containing custom root and intermediate certificates.
   * Can also be set using the AWS_CA_BUNDLE environment variable.
   * Setting ca_bundle in the shared config file is not supported.
   */
  readonly customCaBundle?: string;
  /**
   * Optional) Custom endpoint URL for the EC2 Instance Metadata Service (IMDS) API.
   * Can also be set with the AWS_EC2_METADATA_SERVICE_ENDPOINT environment variable.
   */
  readonly ec2MetadataServiceEndpoint?: string;
  /**
   * (Optional) Mode to use in communicating with the metadata service.
   * Valid values are IPv4 and IPv6.
   * Can also be set with the AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE environment variable.
   */
  readonly ec2MetadataServiceEndpointMode?: string;
  /**
   * (Optional) List of forbidden AWS account IDs to prevent potential destruction of a live environment.
   * Conflicts with allowed_account_ids.
   */
  readonly forbiddenAccountIds?: string[];
  /**
   * (Optional) URL of a proxy to use for HTTP requests when accessing the AWS API.
   * Can also be set using the HTTP_PROXY or http_proxy environment variables.
   */
  readonly httpProxy?: string;
  /**
   * (Optional) URL of a proxy to use for HTTPS requests when accessing the AWS API.
   * Can also be set using the HTTPS_PROXY or https_proxy environment variables.
   */
  readonly httpsProxy?: string;
  /**
   * Optional) Whether to explicitly allow the backend to perform "insecure" SSL requests.
   * If omitted, the default value is false.
   */
  readonly insecure?: boolean;
  /**
   * (Optional) Comma-separated list of hosts that should not use HTTP or HTTPS proxies.
   * Each value can be one of:
   * - A domain name
   * - An IP address
   * - A CIDR address
   * - An asterisk (*), to indicate that no proxying should be performed Domain name and IP address values can also include a port number.
   * Can also be set using the NO_PROXY or no_proxy environment variables.
   */
  readonly noProxy?: string;
  /**
   * (Optional) Specifies how retries are attempted.
   * Valid values are standard and adaptive.
   * Can also be configured using the AWS_RETRY_MODE environment variable or the shared config file parameter retry_mode.
   */
  readonly retryMode?: string;
  /**
   * (Optional) List of paths to AWS shared configuration files.
   * Defaults to ~/.aws/config.
   */
  readonly sharedConfigFiles?: string[];
  /**
   * (Optional) List of paths to AWS shared credentials files.
   * Defaults to ~/.aws/credentials.
   */
  readonly sharedCredentialsFiles?: string[];
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
   * @deprecated Use endpoints.s3 instead
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
   * @deprecated Use assumeRole.roleArn instead.
   */
  readonly roleArn?: string;
  /**
   * (Optional) IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
   * @deprecated Use assumeRole.policy instead.
   */
  readonly assumeRolePolicy?: string;
  /**
   * (Optional) Set of Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
   * @deprecated Use assumeRole.policyArns instead.
   */
  readonly assumeRolePolicyArns?: string[];
  /**
   * (Optional) Map of assume role session tags.
   * @deprecated Use assumeRole.tags instead.
   */
  readonly assumeRoleTags?: { [key: string]: string };
  /**
   * (Optional) Set of assume role session tag keys to pass to any subsequent sessions.
   * @deprecated Use assumeRole.transitiveTagKeys instead.
   */
  readonly assumeRoleTransitiveTagKeys?: string[];
  /**
   * (Optional) External identifier to use when assuming the role.
   * @deprecated Use assume_role.external_id instead.
   */
  readonly externalId?: string;
  /**
   * (Optional) Session name to use when assuming the role.
   * @deprecated Use assumeRole.sessionName instead.
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
   * @deprecated Use endpoints.dynamodb instead
   */
  readonly dynamodbEndpoint?: string;
  /**
   * (Optional) Custom endpoint for the AWS Identity and Access Management (IAM) API.
   * This can also be sourced from the AWS_IAM_ENDPOINT environment variable.
   * @deprecated Use endpoints.iam instead
   */
  readonly iamEndpoint?: string;
  /**
   * (Optional) Custom endpoint for the AWS Security Token Service (STS) API.
   * This can also be sourced from the AWS_STS_ENDPOINT environment variable.
   * @deprecated Use endpoints.sts instead
   */
  readonly stsEndpoint?: string;
  /**
   * (Optional) AWS region for STS.
   * If unset, AWS will use the same region for STS as other non-STS operations.
   */
  readonly stsRegion?: string;
  /**
   * (Optional) Enable path-style S3 URLs
   * (https://<HOST>/<BUCKET> instead of https://<BUCKET>.<HOST>).
   * @deprecated Use usePathStyle instead
   */
  readonly forcePathStyle?: boolean;
  /**
   * (Optional) Enable path-style S3 URLs
   * (https://<HOST>/<BUCKET> instead of https://<BUCKET>.<HOST>).
   */
  readonly usePathStyle?: boolean;
  /**
   * (Optional) Skip credentials validation via the STS API.
   */
  readonly skipCredentialsValidation?: boolean;
  /**
   * (Optional) Skip validation of provided region name.
   */
  readonly skipRegionValidation?: boolean;
  /**
   * (Optional) Whether to skip requesting the account ID.
   * Useful for AWS API implementations that do not have the IAM, STS API, or metadata API.
   */
  readonly skipRequestingAccountId?: boolean;
  /**
   * (Optional) Skip usage of EC2 Metadata API.
   */
  readonly skipMetadataApiCheck?: boolean;
  /**
   * (Optional) Do not include checksum when uploading S3 Objects.
   * Useful for some S3-Compatible APIs.
   */
  readonly skipS3Checksum?: boolean;
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
  /**
   * (Optional) Use the legacy authentication workflow, preferring environment variables over backend configuration.
   * Defaults to true.
   * This behavior does not align with the authentication flow of the AWS CLI or SDK's, and will be removed in the future.
   */
  readonly useLegacyWorkflow?: boolean;
  /**
   * (Optional) The endpoint configuration block.
   */
  readonly endpoints?: S3BackendEndpointConfig;
  /**
   * Assuming an IAM Role can be configured in two ways.
   * The preferred way is to use the argument assume_role, the other, which is deprecated, is with arguments at the top level.
   */
  readonly assumeRole?: S3BackendAssumeRoleConfig;
  /**
   * Assume Role With Web Identity Configuration
   */
  readonly assumeRoleWithWebIdentity?: S3BackendAssumeRoleWithWebIdentityConfig;
}

export interface S3BackendEndpointConfig {
  /**
   * (Optional) Custom endpoint URL for the AWS DynamoDB API.
   * This can also be sourced from the environment variable AWS_ENDPOINT_URL_DYNAMODB or the deprecated environment variable AWS_DYNAMODB_ENDPOINT.
   */
  readonly dynamodb?: string;
  /**
   * (Optional) Custom endpoint URL for the AWS IAM API.
   * This can also be sourced from the environment variable AWS_ENDPOINT_URL_IAM or the deprecated environment variable AWS_IAM_ENDPOINT.
   */
  readonly iam?: string;
  /**
   * (Optional) Custom endpoint URL for the AWS S3 API.
   * This can also be sourced from the environment variable AWS_ENDPOINT_URL_S3 or the deprecated environment variable AWS_S3_ENDPOINT.
   */
  readonly s3?: string;
  /**
   * (Optional) Custom endpoint URL for the AWS IAM Identity Center (formerly known as AWS SSO) API.
   * This can also be sourced from the environment variable AWS_ENDPOINT_URL_SSO.
   */
  readonly sso?: string;
  /**
   * (Optional) Custom endpoint URL for the AWS STS API.
   * This can also be sourced from the environment variable AWS_ENDPOINT_URL_STS or the deprecated environment variable AWS_STS_ENDPOINT.
   */
  readonly sts?: string;
}

export interface S3BackendAssumeRoleConfig {
  /**
   * (Required) Amazon Resource Name (ARN) of the IAM Role to assume.
   */
  readonly roleArn: string;
  /**
   * (Optional) The duration individual credentials will be valid.
   * Credentials are automatically renewed up to the maximum defined by the AWS account.
   * Specified using the format <hours>h<minutes>m<seconds>s with any unit being optional.
   * For example, an hour and a half can be specified as 1h30m or 90m.
   * Must be between 15 minutes (15m) and 12 hours (12h).
   */
  readonly duration?: string;
  /**
   * (Optional) External identifier to use when assuming the role.
   */
  readonly externalId?: string;
  /**
   * (Optional) IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
   */
  readonly policy?: string;
  /**
   * (Optional) Set of Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
   */
  readonly policyArns?: string[];
  /**
   * (Optional) Session name to use when assuming the role.
   */
  readonly sessionName?: string;
  /**
   * (Optional) Source identity specified by the principal assuming the
   */
  readonly sourceIdentity?: string;
  /**
   * (Optional) Map of assume role session tags.
   */
  readonly tags?: { [key: string]: string };
  /**
   * (Optional) Set of assume role session tag keys to pass to any subsequent sessions.
   */
  readonly transitiveTagKeys?: string[];
}

export interface S3BackendAssumeRoleWithWebIdentityConfig {
  /**
   * (Required) Amazon Resource Name (ARN) of the IAM Role to assume.
   * Can also be set with the AWS_ROLE_ARN environment variable.
   */
  readonly roleArn?: string;
  /**
   * (Optional) The duration individual credentials will be valid.
   * Credentials are automatically renewed up to the maximum defined by the AWS account.
   * Specified using the format <hours>h<minutes>m<seconds>s with any unit being optional.
   * For example, an hour and a half can be specified as 1h30m or 90m.
   * Must be between 15 minutes (15m) and 12 hours (12h).
   */
  readonly duration?: string;
  /**
   * (Optional) IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
   */
  readonly policy?: string;
  /**
   * (Optional) Set of Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
   */
  readonly policyArns?: string[];
  /**
   * (Optional) Session name to use when assuming the role.
   * Can also be set with the AWS_ROLE_SESSION_NAME environment variable.
   */
  readonly sessionName?: string;
  /**
   * (Optional) The value of a web identity token from an OpenID Connect (OIDC) or OAuth provider.
   * One of web_identity_token or web_identity_token_file is required.
   */
  readonly webIdentityToken?: string;
  /**
   * (Optional) File containing a web identity token from an OpenID Connect (OIDC) or OAuth provider.
   * One of web_identity_token_file or web_identity_token is required.
   * Can also be set with the AWS_WEB_IDENTITY_TOKEN_FILE environment variable.
   */
  readonly webIdentityTokenFile?: string;
}

export interface DataTerraformRemoteStateS3Config
  extends DataTerraformRemoteStateConfig,
    S3BackendConfig {}
