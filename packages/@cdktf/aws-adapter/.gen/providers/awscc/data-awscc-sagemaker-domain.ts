// https://www.terraform.io/docs/providers/awscc/d/sagemaker_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSagemakerDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_domain.html#id DataAwsccSagemakerDomain#id}
  */
  readonly id: string;
}
export class DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec extends cdktf.ComplexComputedList {

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

export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}

export class DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettings extends cdktf.ComplexComputedList {

  // default_resource_spec - computed: true, optional: false, required: false
  public get defaultResourceSpec() {
    return this.interpolationForAttribute('default_resource_spec') as any;
  }
}

export function dataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_resource_spec: dataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}

export class DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages extends cdktf.ComplexComputedList {

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

export function dataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}

export class DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec extends cdktf.ComplexComputedList {

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

export function dataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sage_maker_image_arn: cdktf.stringToTerraform(struct!.sageMakerImageArn),
    sage_maker_image_version_arn: cdktf.stringToTerraform(struct!.sageMakerImageVersionArn),
  }
}

export class DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettings extends cdktf.ComplexComputedList {

  // custom_images - computed: true, optional: false, required: false
  public get customImages() {
    return this.interpolationForAttribute('custom_images') as any;
  }

  // default_resource_spec - computed: true, optional: false, required: false
  public get defaultResourceSpec() {
    return this.interpolationForAttribute('default_resource_spec') as any;
  }
}

export function dataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_images: cdktf.listMapper(dataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImagesToTerraform)(struct!.customImages),
    default_resource_spec: dataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}

export class DataAwsccSagemakerDomainDefaultUserSettingsSharingSettings extends cdktf.ComplexComputedList {

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

export function dataAwsccSagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettingsSharingSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    notebook_output_option: cdktf.stringToTerraform(struct!.notebookOutputOption),
    s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}

export class DataAwsccSagemakerDomainDefaultUserSettings extends cdktf.ComplexComputedList {

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

export function dataAwsccSagemakerDomainDefaultUserSettingsToTerraform(struct?: DataAwsccSagemakerDomainDefaultUserSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    jupyter_server_app_settings: dataAwsccSagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: dataAwsccSagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    sharing_settings: dataAwsccSagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct!.sharingSettings),
  }
}

export class DataAwsccSagemakerDomainTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccSagemakerDomainTagsToTerraform(struct?: DataAwsccSagemakerDomainTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_domain.html awscc_sagemaker_domain}
*/
export class DataAwsccSagemakerDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_domain.html awscc_sagemaker_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerDomainConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_network_access_type - computed: true, optional: false, required: false
  public get appNetworkAccessType() {
    return this.getStringAttribute('app_network_access_type');
  }

  // auth_mode - computed: true, optional: false, required: false
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }

  // default_user_settings - computed: true, optional: false, required: false
  public get defaultUserSettings() {
    return this.interpolationForAttribute('default_user_settings') as any;
  }

  // domain_arn - computed: true, optional: false, required: false
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // home_efs_file_system_id - computed: true, optional: false, required: false
  public get homeEfsFileSystemId() {
    return this.getStringAttribute('home_efs_file_system_id');
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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // single_sign_on_managed_application_instance_id - computed: true, optional: false, required: false
  public get singleSignOnManagedApplicationInstanceId() {
    return this.getStringAttribute('single_sign_on_managed_application_instance_id');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
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
