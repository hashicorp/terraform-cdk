import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AwsccProviderConfig {
    /**
    * This is the AWS access key. It must be provided, but it can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable, or via a shared credentials file if `profile` is specified.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#access_key AwsccProvider#access_key}
    */
    readonly accessKey?: string;
    /**
    * An `assume_role` block (documented below). Only one `assume_role` block may be in the configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#assume_role AwsccProvider#assume_role}
    */
    readonly assumeRole?: AwsccProviderAssumeRole;
    /**
    * Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#insecure AwsccProvider#insecure}
    */
    readonly insecure?: boolean | cdktf.IResolvable;
    /**
    * This is the AWS profile name as set in the shared credentials file.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#profile AwsccProvider#profile}
    */
    readonly profile?: string;
    /**
    * This is the AWS region. It must be provided, but it can also be sourced from the `AWS_DEFAULT_REGION` environment variables, or via a shared config file.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#region AwsccProvider#region}
    */
    readonly region?: string;
    /**
    * Amazon Resource Name of the AWS CloudFormation service role that is used on your behalf to perform operations.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#role_arn AwsccProvider#role_arn}
    */
    readonly roleArn?: string;
    /**
    * This is the AWS secret key. It must be provided, but it can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable, or via a shared credentials file if `profile` is specified.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#secret_key AwsccProvider#secret_key}
    */
    readonly secretKey?: string;
    /**
    * List of paths to shared config files. If not set this defaults to `~/.aws/config`.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#shared_config_files AwsccProvider#shared_config_files}
    */
    readonly sharedConfigFiles?: string[];
    /**
    * List of paths to shared credentials files. If not set this defaults to `~/.aws/credentials`.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#shared_credentials_files AwsccProvider#shared_credentials_files}
    */
    readonly sharedCredentialsFiles?: string[];
    /**
    * Skip the AWS Metadata API check. Useful for AWS API implementations that do not have a metadata API endpoint.  Setting to `true` prevents Terraform from authenticating via the Metadata API. You may need to use other authentication methods like static credentials, configuration variables, or environment variables.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#skip_medatadata_api_check AwsccProvider#skip_medatadata_api_check}
    */
    readonly skipMedatadataApiCheck?: boolean | cdktf.IResolvable;
    /**
    * Session token for validating temporary credentials. Typically provided after successful identity federation or Multi-Factor Authentication (MFA) login. With MFA login, this is the session token provided afterward, not the 6 digit MFA code used to get temporary credentials.  It can also be sourced from the `AWS_SESSION_TOKEN` environment variable.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#token AwsccProvider#token}
    */
    readonly token?: string;
    /**
    * Alias name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#alias AwsccProvider#alias}
    */
    readonly alias?: string;
}
export interface AwsccProviderAssumeRole {
    /**
    * Number of seconds to restrict the assume role session duration. You can provide a value from 900 seconds (15 minutes) up to the maximum session duration setting for the role.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#duration_seconds AwsccProvider#duration_seconds}
    */
    readonly durationSeconds?: number;
    /**
    * External identifier to use when assuming the role.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#external_id AwsccProvider#external_id}
    */
    readonly externalId?: string;
    /**
    * Amazon Resource Name (ARN) of the IAM Role to assume.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#role_arn AwsccProvider#role_arn}
    */
    readonly roleArn: string;
    /**
    * Session name to use when assuming the role.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#session_name AwsccProvider#session_name}
    */
    readonly sessionName?: string;
    /**
    * Map of assume role session tags.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#tags AwsccProvider#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Set of assume role session tag keys to pass to any subsequent sessions.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#transitive_tag_keys AwsccProvider#transitive_tag_keys}
    */
    readonly transitiveTagKeys?: string[];
}
export declare function awsccProviderAssumeRoleToTerraform(struct?: AwsccProviderAssumeRole): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc awscc}
*/
export declare class AwsccProvider extends cdktf.TerraformProvider {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc awscc} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AwsccProviderConfig = {}
    */
    constructor(scope: Construct, id: string, config?: AwsccProviderConfig);
    private _accessKey?;
    get accessKey(): string | undefined;
    set accessKey(value: string | undefined);
    resetAccessKey(): void;
    get accessKeyInput(): string | undefined;
    private _assumeRole?;
    get assumeRole(): AwsccProviderAssumeRole | undefined;
    set assumeRole(value: AwsccProviderAssumeRole | undefined);
    resetAssumeRole(): void;
    get assumeRoleInput(): AwsccProviderAssumeRole | undefined;
    private _insecure?;
    get insecure(): boolean | cdktf.IResolvable | undefined;
    set insecure(value: boolean | cdktf.IResolvable | undefined);
    resetInsecure(): void;
    get insecureInput(): boolean | cdktf.IResolvable | undefined;
    private _profile?;
    get profile(): string | undefined;
    set profile(value: string | undefined);
    resetProfile(): void;
    get profileInput(): string | undefined;
    private _region?;
    get region(): string | undefined;
    set region(value: string | undefined);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string | undefined;
    set roleArn(value: string | undefined);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _secretKey?;
    get secretKey(): string | undefined;
    set secretKey(value: string | undefined);
    resetSecretKey(): void;
    get secretKeyInput(): string | undefined;
    private _sharedConfigFiles?;
    get sharedConfigFiles(): string[] | undefined;
    set sharedConfigFiles(value: string[] | undefined);
    resetSharedConfigFiles(): void;
    get sharedConfigFilesInput(): string[] | undefined;
    private _sharedCredentialsFiles?;
    get sharedCredentialsFiles(): string[] | undefined;
    set sharedCredentialsFiles(value: string[] | undefined);
    resetSharedCredentialsFiles(): void;
    get sharedCredentialsFilesInput(): string[] | undefined;
    private _skipMedatadataApiCheck?;
    get skipMedatadataApiCheck(): boolean | cdktf.IResolvable | undefined;
    set skipMedatadataApiCheck(value: boolean | cdktf.IResolvable | undefined);
    resetSkipMedatadataApiCheck(): void;
    get skipMedatadataApiCheckInput(): boolean | cdktf.IResolvable | undefined;
    private _token?;
    get token(): string | undefined;
    set token(value: string | undefined);
    resetToken(): void;
    get tokenInput(): string | undefined;
    private _alias?;
    get alias(): string | undefined;
    set alias(value: string | undefined);
    resetAlias(): void;
    get aliasInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
