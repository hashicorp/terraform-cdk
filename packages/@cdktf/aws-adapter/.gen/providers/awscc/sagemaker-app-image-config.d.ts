import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): any;
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
export declare function sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs): any;
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
export declare function sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfig): any;
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
export declare function sagemakerAppImageConfigTagsToTerraform(struct?: SagemakerAppImageConfigTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html awscc_sagemaker_app_image_config}
*/
export declare class SagemakerAppImageConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_app_image_config.html awscc_sagemaker_app_image_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerAppImageConfigConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerAppImageConfigConfig);
    get appImageConfigArn(): string;
    private _appImageConfigName;
    get appImageConfigName(): string;
    set appImageConfigName(value: string);
    get appImageConfigNameInput(): string;
    get id(): string;
    private _kernelGatewayImageConfig?;
    get kernelGatewayImageConfig(): SagemakerAppImageConfigKernelGatewayImageConfig;
    set kernelGatewayImageConfig(value: SagemakerAppImageConfigKernelGatewayImageConfig);
    resetKernelGatewayImageConfig(): void;
    get kernelGatewayImageConfigInput(): SagemakerAppImageConfigKernelGatewayImageConfig | undefined;
    private _tags?;
    get tags(): SagemakerAppImageConfigTags[];
    set tags(value: SagemakerAppImageConfigTags[]);
    resetTags(): void;
    get tagsInput(): SagemakerAppImageConfigTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
