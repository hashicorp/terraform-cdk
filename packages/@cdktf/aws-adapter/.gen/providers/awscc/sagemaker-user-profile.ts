// https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerUserProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the associated Domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#domain_id SagemakerUserProfile#domain_id}
  */
  readonly domainId: string;
  /**
  * A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is "UserName". If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}
  */
  readonly singleSignOnUserIdentifier?: string;
  /**
  * The username of the associated AWS Single Sign-On User for this UserProfile. If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}
  */
  readonly singleSignOnUserValue?: string;
  /**
  * A list of tags to apply to the user profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#tags SagemakerUserProfile#tags}
  */
  readonly tags?: SagemakerUserProfileTags[];
  /**
  * A name for the UserProfile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#user_profile_name SagemakerUserProfile#user_profile_name}
  */
  readonly userProfileName: string;
  /**
  * A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the CreateUserProfile API is called, and as DefaultUserSettings when the CreateDomain API is called.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#user_settings SagemakerUserProfile#user_settings}
  */
  readonly userSettings?: SagemakerUserProfileUserSettings;
}
export interface SagemakerUserProfileTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#key SagemakerUserProfile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#value SagemakerUserProfile#value}
  */
  readonly value: string;
}

export function sagemakerUserProfileTagsToTerraform(struct?: SagemakerUserProfileTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The ARN of the SageMaker image that the image version belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The ARN of the image version created on the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}

export interface SagemakerUserProfileUserSettingsJupyterServerAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}

export function sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_resource_spec: sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}

export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages {
  /**
  * The Name of the AppImageConfig.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#app_image_config_name SagemakerUserProfile#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * The name of the CustomImage. Must be unique to your account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#image_name SagemakerUserProfile#image_name}
  */
  readonly imageName: string;
  /**
  * The version number of the CustomImage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#image_version_number SagemakerUserProfile#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}

export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#instance_type SagemakerUserProfile#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The ARN of the SageMaker image that the image version belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The ARN of the image version created on the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}

export interface SagemakerUserProfileUserSettingsKernelGatewayAppSettings {
  /**
  * A list of custom SageMaker images that are configured to run as a KernelGateway app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#custom_images SagemakerUserProfile#custom_images}
  */
  readonly customImages?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#default_resource_spec SagemakerUserProfile#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}

export function sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_images: cdktf.listMapper(sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform)(struct!.customImages),
    default_resource_spec: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}

export interface SagemakerUserProfileUserSettingsSharingSettings {
  /**
  * Whether to include the notebook cell output when sharing the notebook. The default is Disabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#notebook_output_option SagemakerUserProfile#notebook_output_option}
  */
  readonly notebookOutputOption?: string;
  /**
  * When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
  /**
  * When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#s3_output_path SagemakerUserProfile#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct?: SagemakerUserProfileUserSettingsSharingSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    notebook_output_option: cdktf.stringToTerraform(struct!.notebookOutputOption),
    s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}

export interface SagemakerUserProfileUserSettings {
  /**
  * The user profile Amazon Resource Name (ARN).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#execution_role SagemakerUserProfile#execution_role}
  */
  readonly executionRole?: string;
  /**
  * The JupyterServer app settings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#jupyter_server_app_settings SagemakerUserProfile#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: SagemakerUserProfileUserSettingsJupyterServerAppSettings;
  /**
  * The kernel gateway app settings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#kernel_gateway_app_settings SagemakerUserProfile#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: SagemakerUserProfileUserSettingsKernelGatewayAppSettings;
  /**
  * The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#security_groups SagemakerUserProfile#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of DefaultUserSettings when the CreateDomain API is called, and as part of UserSettings when the CreateUserProfile API is called.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html#sharing_settings SagemakerUserProfile#sharing_settings}
  */
  readonly sharingSettings?: SagemakerUserProfileUserSettingsSharingSettings;
}

export function sagemakerUserProfileUserSettingsToTerraform(struct?: SagemakerUserProfileUserSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    jupyter_server_app_settings: sagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: sagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    sharing_settings: sagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct!.sharingSettings),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html awscc_sagemaker_user_profile}
*/
export class SagemakerUserProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_user_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_user_profile.html awscc_sagemaker_user_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerUserProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerUserProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_user_profile',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainId = config.domainId;
    this._singleSignOnUserIdentifier = config.singleSignOnUserIdentifier;
    this._singleSignOnUserValue = config.singleSignOnUserValue;
    this._tags = config.tags;
    this._userProfileName = config.userProfileName;
    this._userSettings = config.userSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_id - computed: false, optional: false, required: true
  private _domainId: string;
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // single_sign_on_user_identifier - computed: true, optional: true, required: false
  private _singleSignOnUserIdentifier?: string;
  public get singleSignOnUserIdentifier() {
    return this.getStringAttribute('single_sign_on_user_identifier');
  }
  public set singleSignOnUserIdentifier(value: string) {
    this._singleSignOnUserIdentifier = value;
  }
  public resetSingleSignOnUserIdentifier() {
    this._singleSignOnUserIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnUserIdentifierInput() {
    return this._singleSignOnUserIdentifier
  }

  // single_sign_on_user_value - computed: true, optional: true, required: false
  private _singleSignOnUserValue?: string;
  public get singleSignOnUserValue() {
    return this.getStringAttribute('single_sign_on_user_value');
  }
  public set singleSignOnUserValue(value: string) {
    this._singleSignOnUserValue = value;
  }
  public resetSingleSignOnUserValue() {
    this._singleSignOnUserValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnUserValueInput() {
    return this._singleSignOnUserValue
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: SagemakerUserProfileTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SagemakerUserProfileTags[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // user_profile_arn - computed: true, optional: false, required: false
  public get userProfileArn() {
    return this.getStringAttribute('user_profile_arn');
  }

  // user_profile_name - computed: false, optional: false, required: true
  private _userProfileName: string;
  public get userProfileName() {
    return this.getStringAttribute('user_profile_name');
  }
  public set userProfileName(value: string) {
    this._userProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userProfileNameInput() {
    return this._userProfileName
  }

  // user_settings - computed: false, optional: true, required: false
  private _userSettings?: SagemakerUserProfileUserSettings;
  public get userSettings() {
    return this.interpolationForAttribute('user_settings') as any;
  }
  public set userSettings(value: SagemakerUserProfileUserSettings ) {
    this._userSettings = value;
  }
  public resetUserSettings() {
    this._userSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsInput() {
    return this._userSettings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktf.stringToTerraform(this._domainId),
      single_sign_on_user_identifier: cdktf.stringToTerraform(this._singleSignOnUserIdentifier),
      single_sign_on_user_value: cdktf.stringToTerraform(this._singleSignOnUserValue),
      tags: cdktf.listMapper(sagemakerUserProfileTagsToTerraform)(this._tags),
      user_profile_name: cdktf.stringToTerraform(this._userProfileName),
      user_settings: sagemakerUserProfileUserSettingsToTerraform(this._userSettings),
    };
  }
}
