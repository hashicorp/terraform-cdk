// https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerAppImageConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Name of the AppImageConfig.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html#app_image_config_name SagemakerAppImageConfig#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html#kernel_gateway_image_config SagemakerAppImageConfig#kernel_gateway_image_config}
  */
  readonly kernelGatewayImageConfig?: SagemakerAppImageConfigKernelGatewayImageConfig;
  /**
  * A list of tags to apply to the AppImageConfig.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html#tags SagemakerAppImageConfig#tags}
  */
  readonly tags?: SagemakerAppImageConfigTags[];
}
export interface SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig {
  /**
  * The default POSIX group ID (GID). If not specified, defaults to 100.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html#default_gid SagemakerAppImageConfig#default_gid}
  */
  readonly defaultGid?: number;
  /**
  * The default POSIX user ID (UID). If not specified, defaults to 1000.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html#default_uid SagemakerAppImageConfig#default_uid}
  */
  readonly defaultUid?: number;
  /**
  * The path within the image to mount the user's EFS home directory. The directory should be empty. If not specified, defaults to /home/sagemaker-user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html#mount_path SagemakerAppImageConfig#mount_path}
  */
  readonly mountPath?: string;
}

export function sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_gid: cdktf.numberToTerraform(struct!.defaultGid),
    default_uid: cdktf.numberToTerraform(struct!.defaultUid),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
  }
}

export interface SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs {
  /**
  * The display name of the kernel.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html#display_name SagemakerAppImageConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * The name of the kernel.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html#name SagemakerAppImageConfig#name}
  */
  readonly name: string;
}

export function sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface SagemakerAppImageConfigKernelGatewayImageConfig {
  /**
  * The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html#file_system_config SagemakerAppImageConfig#file_system_config}
  */
  readonly fileSystemConfig?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig;
  /**
  * The specification of the Jupyter kernels in the image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html#kernel_specs SagemakerAppImageConfig#kernel_specs}
  */
  readonly kernelSpecs: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs[];
}

export function sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file_system_config: sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct!.fileSystemConfig),
    kernel_specs: cdktf.listMapper(sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsToTerraform)(struct!.kernelSpecs),
  }
}

export interface SagemakerAppImageConfigTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html#key SagemakerAppImageConfig#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html#value SagemakerAppImageConfig#value}
  */
  readonly value: string;
}

export function sagemakerAppImageConfigTagsToTerraform(struct?: SagemakerAppImageConfigTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html awscc_sagemaker_app_image_config}
*/
export class SagemakerAppImageConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_app_image_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html awscc_sagemaker_app_image_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerAppImageConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerAppImageConfigConfig) {
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
    this._appImageConfigName = config.appImageConfigName;
    this._kernelGatewayImageConfig = config.kernelGatewayImageConfig;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_image_config_arn - computed: true, optional: false, required: false
  public get appImageConfigArn() {
    return this.getStringAttribute('app_image_config_arn');
  }

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName: string;
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kernel_gateway_image_config - computed: false, optional: true, required: false
  private _kernelGatewayImageConfig?: SagemakerAppImageConfigKernelGatewayImageConfig;
  public get kernelGatewayImageConfig() {
    return this.interpolationForAttribute('kernel_gateway_image_config') as any;
  }
  public set kernelGatewayImageConfig(value: SagemakerAppImageConfigKernelGatewayImageConfig ) {
    this._kernelGatewayImageConfig = value;
  }
  public resetKernelGatewayImageConfig() {
    this._kernelGatewayImageConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayImageConfigInput() {
    return this._kernelGatewayImageConfig
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: SagemakerAppImageConfigTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SagemakerAppImageConfigTags[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_image_config_name: cdktf.stringToTerraform(this._appImageConfigName),
      kernel_gateway_image_config: sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(this._kernelGatewayImageConfig),
      tags: cdktf.listMapper(sagemakerAppImageConfigTagsToTerraform)(this._tags),
    };
  }
}
