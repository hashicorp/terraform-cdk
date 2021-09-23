// https://www.terraform.io/docs/providers/awscc/d/sagemaker_user_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSagemakerUserProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_user_profile.html#id DataAwsccSagemakerUserProfile#id}
  */
  readonly id: string;
}
export class DataAwsccSagemakerUserProfileTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccSagemakerUserProfileTagsToTerraform(struct?: DataAwsccSagemakerUserProfileTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec extends cdktf.ComplexComputedList {

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // sage_maker_image_arn - computed: true, optional: false, required: false
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }

  // sage_maker_image_version_arn - computed: true, optional: false, required: false
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
}

export function dataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}

export class DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings extends cdktf.ComplexComputedList {

  // default_resource_spec - computed: true, optional: false, required: false
  public get defaultResourceSpec() {
    return this.interpolationForAttribute('default_resource_spec') as any;
  }
}

export function dataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_resource_spec: dataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}

export class DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages extends cdktf.ComplexComputedList {

  // app_image_config_name - computed: true, optional: false, required: false
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // image_version_number - computed: true, optional: false, required: false
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
}

export function dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}

export class DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec extends cdktf.ComplexComputedList {

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // sage_maker_image_arn - computed: true, optional: false, required: false
  public get sageMakerImageArn() {
    return this.getStringAttribute('sage_maker_image_arn');
  }

  // sage_maker_image_version_arn - computed: true, optional: false, required: false
  public get sageMakerImageVersionArn() {
    return this.getStringAttribute('sage_maker_image_version_arn');
  }
}

export function dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}

export class DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings extends cdktf.ComplexComputedList {

  // custom_images - computed: true, optional: false, required: false
  public get customImages() {
    return this.interpolationForAttribute('custom_images') as any;
  }

  // default_resource_spec - computed: true, optional: false, required: false
  public get defaultResourceSpec() {
    return this.interpolationForAttribute('default_resource_spec') as any;
  }
}

export function dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_images: cdktf.listMapper(dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform)(struct!.customImages),
    default_resource_spec: dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}

export class DataAwsccSagemakerUserProfileUserSettingsSharingSettings extends cdktf.ComplexComputedList {

  // notebook_output_option - computed: true, optional: false, required: false
  public get notebookOutputOption() {
    return this.getStringAttribute('notebook_output_option');
  }

  // s3_kms_key_id - computed: true, optional: false, required: false
  public get s3KmsKeyId() {
    return this.getStringAttribute('s3_kms_key_id');
  }

  // s3_output_path - computed: true, optional: false, required: false
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
}

export function dataAwsccSagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettingsSharingSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    notebook_output_option: cdktf.stringToTerraform(struct!.notebookOutputOption),
    s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}

export class DataAwsccSagemakerUserProfileUserSettings extends cdktf.ComplexComputedList {

  // execution_role - computed: true, optional: false, required: false
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }

  // jupyter_server_app_settings - computed: true, optional: false, required: false
  public get jupyterServerAppSettings() {
    return this.interpolationForAttribute('jupyter_server_app_settings') as any;
  }

  // kernel_gateway_app_settings - computed: true, optional: false, required: false
  public get kernelGatewayAppSettings() {
    return this.interpolationForAttribute('kernel_gateway_app_settings') as any;
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // sharing_settings - computed: true, optional: false, required: false
  public get sharingSettings() {
    return this.interpolationForAttribute('sharing_settings') as any;
  }
}

export function dataAwsccSagemakerUserProfileUserSettingsToTerraform(struct?: DataAwsccSagemakerUserProfileUserSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    jupyter_server_app_settings: dataAwsccSagemakerUserProfileUserSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: dataAwsccSagemakerUserProfileUserSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    sharing_settings: dataAwsccSagemakerUserProfileUserSettingsSharingSettingsToTerraform(struct!.sharingSettings),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_user_profile.html awscc_sagemaker_user_profile}
*/
export class DataAwsccSagemakerUserProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_user_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_user_profile.html awscc_sagemaker_user_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerUserProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerUserProfileConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // single_sign_on_user_identifier - computed: true, optional: false, required: false
  public get singleSignOnUserIdentifier() {
    return this.getStringAttribute('single_sign_on_user_identifier');
  }

  // single_sign_on_user_value - computed: true, optional: false, required: false
  public get singleSignOnUserValue() {
    return this.getStringAttribute('single_sign_on_user_value');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // user_profile_arn - computed: true, optional: false, required: false
  public get userProfileArn() {
    return this.getStringAttribute('user_profile_arn');
  }

  // user_profile_name - computed: true, optional: false, required: false
  public get userProfileName() {
    return this.getStringAttribute('user_profile_name');
  }

  // user_settings - computed: true, optional: false, required: false
  public get userSettings() {
    return this.interpolationForAttribute('user_settings') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
