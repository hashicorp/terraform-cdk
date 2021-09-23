// https://www.terraform.io/docs/providers/awscc/d/sagemaker_app_image_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSagemakerAppImageConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_app_image_config.html#id DataAwsccSagemakerAppImageConfig#id}
  */
  readonly id: string;
}
export class DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig extends cdktf.ComplexComputedList {

  // default_gid - computed: true, optional: false, required: false
  public get defaultGid() {
    return this.getNumberAttribute('default_gid');
  }

  // default_uid - computed: true, optional: false, required: false
  public get defaultUid() {
    return this.getNumberAttribute('default_uid');
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
}

export function dataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct?: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_gid: cdktf.numberToTerraform(struct!.defaultGid),
    default_uid: cdktf.numberToTerraform(struct!.defaultUid),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
  }
}

export class DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs extends cdktf.ComplexComputedList {

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsToTerraform(struct?: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig extends cdktf.ComplexComputedList {

  // file_system_config - computed: true, optional: false, required: false
  public get fileSystemConfig() {
    return this.interpolationForAttribute('file_system_config') as any;
  }

  // kernel_specs - computed: true, optional: false, required: false
  public get kernelSpecs() {
    return this.interpolationForAttribute('kernel_specs') as any;
  }
}

export function dataAwsccSagemakerAppImageConfigKernelGatewayImageConfigToTerraform(struct?: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file_system_config: dataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct!.fileSystemConfig),
    kernel_specs: cdktf.listMapper(dataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsToTerraform)(struct!.kernelSpecs),
  }
}

export class DataAwsccSagemakerAppImageConfigTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccSagemakerAppImageConfigTagsToTerraform(struct?: DataAwsccSagemakerAppImageConfigTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_app_image_config.html awscc_sagemaker_app_image_config}
*/
export class DataAwsccSagemakerAppImageConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_app_image_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_app_image_config.html awscc_sagemaker_app_image_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerAppImageConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerAppImageConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_app_image_config',
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

  // app_image_config_arn - computed: true, optional: false, required: false
  public get appImageConfigArn() {
    return this.getStringAttribute('app_image_config_arn');
  }

  // app_image_config_name - computed: true, optional: false, required: false
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
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

  // kernel_gateway_image_config - computed: true, optional: false, required: false
  public get kernelGatewayImageConfig() {
    return this.interpolationForAttribute('kernel_gateway_image_config') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
