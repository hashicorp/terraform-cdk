// https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the VPC used for non-EFS traffic. The default value is PublicInternetOnly.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#app_network_access_type SagemakerDomain#app_network_access_type}
  */
  readonly appNetworkAccessType?: string;
  /**
  * The mode of authentication that members use to access the domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#auth_mode SagemakerDomain#auth_mode}
  */
  readonly authMode: string;
  /**
  * A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the CreateUserProfile API is called, and as DefaultUserSettings when the CreateDomain API is called.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#default_user_settings SagemakerDomain#default_user_settings}
  */
  readonly defaultUserSettings: SagemakerDomainDefaultUserSettings;
  /**
  * A name for the domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#domain_name SagemakerDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * SageMaker uses AWS KMS to encrypt the EFS volume attached to the domain with an AWS managed customer master key (CMK) by default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#kms_key_id SagemakerDomain#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * The VPC subnets that Studio uses for communication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#subnet_ids SagemakerDomain#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * A list of tags to apply to the user profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#tags SagemakerDomain#tags}
  */
  readonly tags?: SagemakerDomainTags[];
  /**
  * The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#vpc_id SagemakerDomain#vpc_id}
  */
  readonly vpcId: string;
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The ARN of the SageMaker image that the image version belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#sage_maker_image_arn SagemakerDomain#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The ARN of the image version created on the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#sage_maker_image_version_arn SagemakerDomain#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}

export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}

export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_resource_spec: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}

export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages {
  /**
  * The Name of the AppImageConfig.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#app_image_config_name SagemakerDomain#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * The name of the CustomImage. Must be unique to your account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#image_name SagemakerDomain#image_name}
  */
  readonly imageName: string;
  /**
  * The version number of the CustomImage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#image_version_number SagemakerDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}

export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  /**
  * The instance type that the image version runs on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The ARN of the SageMaker image that the image version belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#sage_maker_image_arn SagemakerDomain#sage_maker_image_arn}
  */
  readonly sageMakerImageArn?: string;
  /**
  * The ARN of the image version created on the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#sage_maker_image_version_arn SagemakerDomain#sage_maker_image_version_arn}
  */
  readonly sageMakerImageVersionArn?: string;
}

export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}

export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings {
  /**
  * A list of custom SageMaker images that are configured to run as a KernelGateway app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#custom_images SagemakerDomain#custom_images}
  */
  readonly customImages?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}

export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_images: cdktf.listMapper(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform)(struct!.customImages),
    default_resource_spec: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}

export interface SagemakerDomainDefaultUserSettingsSharingSettings {
  /**
  * Whether to include the notebook cell output when sharing the notebook. The default is Disabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#notebook_output_option SagemakerDomain#notebook_output_option}
  */
  readonly notebookOutputOption?: string;
  /**
  * When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#s3_kms_key_id SagemakerDomain#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
  /**
  * When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#s3_output_path SagemakerDomain#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSharingSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    notebook_output_option: cdktf.stringToTerraform(struct!.notebookOutputOption),
    s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}

export interface SagemakerDomainDefaultUserSettings {
  /**
  * The user profile Amazon Resource Name (ARN).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#execution_role SagemakerDomain#execution_role}
  */
  readonly executionRole?: string;
  /**
  * The JupyterServer app settings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings;
  /**
  * The kernel gateway app settings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings;
  /**
  * The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#security_groups SagemakerDomain#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of DefaultUserSettings when the CreateDomain API is called, and as part of UserSettings when the CreateUserProfile API is called.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#sharing_settings SagemakerDomain#sharing_settings}
  */
  readonly sharingSettings?: SagemakerDomainDefaultUserSettingsSharingSettings;
}

export function sagemakerDomainDefaultUserSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    jupyter_server_app_settings: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    sharing_settings: sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct!.sharingSettings),
  }
}

export interface SagemakerDomainTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#key SagemakerDomain#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html#value SagemakerDomain#value}
  */
  readonly value: string;
}

export function sagemakerDomainTagsToTerraform(struct?: SagemakerDomainTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html awscc_sagemaker_domain}
*/
export class SagemakerDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_domain.html awscc_sagemaker_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerDomainConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_domain',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appNetworkAccessType = config.appNetworkAccessType;
    this._authMode = config.authMode;
    this._defaultUserSettings = config.defaultUserSettings;
    this._domainName = config.domainName;
    this._kmsKeyId = config.kmsKeyId;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_network_access_type - computed: true, optional: true, required: false
  private _appNetworkAccessType?: string;
  public get appNetworkAccessType() {
    return this.getStringAttribute('app_network_access_type');
  }
  public set appNetworkAccessType(value: string) {
    this._appNetworkAccessType = value;
  }
  public resetAppNetworkAccessType() {
    this._appNetworkAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNetworkAccessTypeInput() {
    return this._appNetworkAccessType
  }

  // auth_mode - computed: false, optional: false, required: true
  private _authMode: string;
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode
  }

  // default_user_settings - computed: false, optional: false, required: true
  private _defaultUserSettings: SagemakerDomainDefaultUserSettings;
  public get defaultUserSettings() {
    return this.interpolationForAttribute('default_user_settings') as any;
  }
  public set defaultUserSettings(value: SagemakerDomainDefaultUserSettings) {
    this._defaultUserSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserSettingsInput() {
    return this._defaultUserSettings
  }

  // domain_arn - computed: true, optional: false, required: false
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // home_efs_file_system_id - computed: true, optional: false, required: false
  public get homeEfsFileSystemId() {
    return this.getStringAttribute('home_efs_file_system_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // single_sign_on_managed_application_instance_id - computed: true, optional: false, required: false
  public get singleSignOnManagedApplicationInstanceId() {
    return this.getStringAttribute('single_sign_on_managed_application_instance_id');
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: SagemakerDomainTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SagemakerDomainTags[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_network_access_type: cdktf.stringToTerraform(this._appNetworkAccessType),
      auth_mode: cdktf.stringToTerraform(this._authMode),
      default_user_settings: sagemakerDomainDefaultUserSettingsToTerraform(this._defaultUserSettings),
      domain_name: cdktf.stringToTerraform(this._domainName),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.listMapper(sagemakerDomainTagsToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
