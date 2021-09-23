import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderImageRecipeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specify additional settings and launch scripts for your build instances.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#additional_instance_configuration ImagebuilderImageRecipe#additional_instance_configuration}
    */
    readonly additionalInstanceConfiguration?: ImagebuilderImageRecipeAdditionalInstanceConfiguration;
    /**
    * The block device mappings to apply when creating images from this recipe.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#block_device_mappings ImagebuilderImageRecipe#block_device_mappings}
    */
    readonly blockDeviceMappings?: ImagebuilderImageRecipeBlockDeviceMappings[];
    /**
    * The components of the image recipe.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#components ImagebuilderImageRecipe#components}
    */
    readonly components: ImagebuilderImageRecipeComponents[];
    /**
    * The description of the image recipe.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#description ImagebuilderImageRecipe#description}
    */
    readonly description?: string;
    /**
    * The name of the image recipe.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#name ImagebuilderImageRecipe#name}
    */
    readonly name: string;
    /**
    * The parent image of the image recipe.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#parent_image ImagebuilderImageRecipe#parent_image}
    */
    readonly parentImage: string;
    /**
    * The tags of the image recipe.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#tags ImagebuilderImageRecipe#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The version of the image recipe.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#version ImagebuilderImageRecipe#version}
    */
    readonly version: string;
    /**
    * The working directory to be used during build and test workflows.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#working_directory ImagebuilderImageRecipe#working_directory}
    */
    readonly workingDirectory?: string;
}
export interface ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent {
    /**
    * This property defaults to true. If Image Builder installs the SSM agent on a build instance, it removes the agent before creating a snapshot for the AMI. To ensure that the AMI you create includes the SSM agent, set this property to false.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#uninstall_after_build ImagebuilderImageRecipe#uninstall_after_build}
    */
    readonly uninstallAfterBuild: boolean | cdktf.IResolvable;
}
export declare function imagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentToTerraform(struct?: ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent): any;
export interface ImagebuilderImageRecipeAdditionalInstanceConfiguration {
    /**
    * Contains settings for the SSM agent on your build instance.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#systems_manager_agent ImagebuilderImageRecipe#systems_manager_agent}
    */
    readonly systemsManagerAgent?: ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent;
    /**
    * Use this property to provide commands or a command script to run when you launch your build instance.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#user_data_override ImagebuilderImageRecipe#user_data_override}
    */
    readonly userDataOverride: string;
}
export declare function imagebuilderImageRecipeAdditionalInstanceConfigurationToTerraform(struct?: ImagebuilderImageRecipeAdditionalInstanceConfiguration): any;
export interface ImagebuilderImageRecipeBlockDeviceMappingsEbs {
    /**
    * Use to configure delete on termination of the associated device.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#delete_on_termination ImagebuilderImageRecipe#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Use to configure device encryption.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#encrypted ImagebuilderImageRecipe#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Use to configure device IOPS.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#iops ImagebuilderImageRecipe#iops}
    */
    readonly iops?: number;
    /**
    * Use to configure the KMS key to use when encrypting the device.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#kms_key_id ImagebuilderImageRecipe#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The snapshot that defines the device contents.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#snapshot_id ImagebuilderImageRecipe#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Use to override the device's volume size.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#volume_size ImagebuilderImageRecipe#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Use to override the device's volume type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#volume_type ImagebuilderImageRecipe#volume_type}
    */
    readonly volumeType?: string;
}
export declare function imagebuilderImageRecipeBlockDeviceMappingsEbsToTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMappingsEbs): any;
export interface ImagebuilderImageRecipeBlockDeviceMappings {
    /**
    * The device to which these mappings apply.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#device_name ImagebuilderImageRecipe#device_name}
    */
    readonly deviceName?: string;
    /**
    * Amazon EBS-specific block device mapping specifications.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#ebs ImagebuilderImageRecipe#ebs}
    */
    readonly ebs?: ImagebuilderImageRecipeBlockDeviceMappingsEbs;
    /**
    * Use to remove a mapping from the parent image.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#no_device ImagebuilderImageRecipe#no_device}
    */
    readonly noDevice?: string;
    /**
    * Use to manage instance ephemeral devices.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#virtual_name ImagebuilderImageRecipe#virtual_name}
    */
    readonly virtualName?: string;
}
export declare function imagebuilderImageRecipeBlockDeviceMappingsToTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMappings): any;
export interface ImagebuilderImageRecipeComponentsParameters {
    /**
    * The name of the component parameter to set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#name ImagebuilderImageRecipe#name}
    */
    readonly name: string;
    /**
    * Sets the value for the named component parameter.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#value ImagebuilderImageRecipe#value}
    */
    readonly value: string[];
}
export declare function imagebuilderImageRecipeComponentsParametersToTerraform(struct?: ImagebuilderImageRecipeComponentsParameters): any;
export interface ImagebuilderImageRecipeComponents {
    /**
    * The Amazon Resource Name (ARN) of the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#component_arn ImagebuilderImageRecipe#component_arn}
    */
    readonly componentArn?: string;
    /**
    * A group of parameter settings that are used to configure the component for a specific recipe.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html#parameters ImagebuilderImageRecipe#parameters}
    */
    readonly parameters?: ImagebuilderImageRecipeComponentsParameters[];
}
export declare function imagebuilderImageRecipeComponentsToTerraform(struct?: ImagebuilderImageRecipeComponents): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html awscc_imagebuilder_image_recipe}
*/
export declare class ImagebuilderImageRecipe extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html awscc_imagebuilder_image_recipe} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImageRecipeConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderImageRecipeConfig);
    private _additionalInstanceConfiguration?;
    get additionalInstanceConfiguration(): ImagebuilderImageRecipeAdditionalInstanceConfiguration;
    set additionalInstanceConfiguration(value: ImagebuilderImageRecipeAdditionalInstanceConfiguration);
    resetAdditionalInstanceConfiguration(): void;
    get additionalInstanceConfigurationInput(): ImagebuilderImageRecipeAdditionalInstanceConfiguration | undefined;
    get arn(): string;
    private _blockDeviceMappings?;
    get blockDeviceMappings(): ImagebuilderImageRecipeBlockDeviceMappings[];
    set blockDeviceMappings(value: ImagebuilderImageRecipeBlockDeviceMappings[]);
    resetBlockDeviceMappings(): void;
    get blockDeviceMappingsInput(): ImagebuilderImageRecipeBlockDeviceMappings[] | undefined;
    private _components;
    get components(): ImagebuilderImageRecipeComponents[];
    set components(value: ImagebuilderImageRecipeComponents[]);
    get componentsInput(): ImagebuilderImageRecipeComponents[];
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parentImage;
    get parentImage(): string;
    set parentImage(value: string);
    get parentImageInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    private _version;
    get version(): string;
    set version(value: string);
    get versionInput(): string;
    private _workingDirectory?;
    get workingDirectory(): string;
    set workingDirectory(value: string);
    resetWorkingDirectory(): void;
    get workingDirectoryInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
