// https://www.terraform.io/docs/providers/awscc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Set of assume role session tag keys to pass to any subsequent sessions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc#transitive_tag_keys AwsccProvider#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

export function awsccProviderAssumeRoleToTerraform(struct?: AwsccProviderAssumeRole): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    transitive_tag_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transitiveTagKeys),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc awscc}
*/
export class AwsccProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc awscc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsccProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsccProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersionConstraint: '0.1.0'
      },
      terraformProviderSource: 'local/hashicorp/awscc'
    });
    this._accessKey = config.accessKey;
    this._assumeRole = config.assumeRole;
    this._insecure = config.insecure;
    this._profile = config.profile;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._secretKey = config.secretKey;
    this._sharedConfigFiles = config.sharedConfigFiles;
    this._sharedCredentialsFiles = config.sharedCredentialsFiles;
    this._skipMedatadataApiCheck = config.skipMedatadataApiCheck;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string;
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string  | undefined) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: AwsccProviderAssumeRole;
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: AwsccProviderAssumeRole  | undefined) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable;
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable  | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string;
  public get profile() {
    return this._profile;
  }
  public set profile(value: string  | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region;
  }
  public set region(value: string  | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string  | undefined) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string;
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string  | undefined) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey
  }

  // shared_config_files - computed: false, optional: true, required: false
  private _sharedConfigFiles?: string[];
  public get sharedConfigFiles() {
    return this._sharedConfigFiles;
  }
  public set sharedConfigFiles(value: string[]  | undefined) {
    this._sharedConfigFiles = value;
  }
  public resetSharedConfigFiles() {
    this._sharedConfigFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedConfigFilesInput() {
    return this._sharedConfigFiles
  }

  // shared_credentials_files - computed: false, optional: true, required: false
  private _sharedCredentialsFiles?: string[];
  public get sharedCredentialsFiles() {
    return this._sharedCredentialsFiles;
  }
  public set sharedCredentialsFiles(value: string[]  | undefined) {
    this._sharedCredentialsFiles = value;
  }
  public resetSharedCredentialsFiles() {
    this._sharedCredentialsFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedCredentialsFilesInput() {
    return this._sharedCredentialsFiles
  }

  // skip_medatadata_api_check - computed: false, optional: true, required: false
  private _skipMedatadataApiCheck?: boolean | cdktf.IResolvable;
  public get skipMedatadataApiCheck() {
    return this._skipMedatadataApiCheck;
  }
  public set skipMedatadataApiCheck(value: boolean | cdktf.IResolvable  | undefined) {
    this._skipMedatadataApiCheck = value;
  }
  public resetSkipMedatadataApiCheck() {
    this._skipMedatadataApiCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMedatadataApiCheckInput() {
    return this._skipMedatadataApiCheck
  }

  // token - computed: false, optional: true, required: false
  private _token?: string;
  public get token() {
    return this._token;
  }
  public set token(value: string  | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string;
  public get alias() {
    return this._alias;
  }
  public set alias(value: string  | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      assume_role: awsccProviderAssumeRoleToTerraform(this._assumeRole),
      insecure: cdktf.booleanToTerraform(this._insecure),
      profile: cdktf.stringToTerraform(this._profile),
      region: cdktf.stringToTerraform(this._region),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      shared_config_files: cdktf.listMapper(cdktf.stringToTerraform)(this._sharedConfigFiles),
      shared_credentials_files: cdktf.listMapper(cdktf.stringToTerraform)(this._sharedCredentialsFiles),
      skip_medatadata_api_check: cdktf.booleanToTerraform(this._skipMedatadataApiCheck),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
