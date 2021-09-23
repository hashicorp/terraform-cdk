import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderContainerRecipeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Components for build and test that are included in the container recipe.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#components ImagebuilderContainerRecipe#components}
    */
    readonly components?: ImagebuilderContainerRecipeComponents[];
    /**
    * Specifies the type of container, such as Docker.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#container_type ImagebuilderContainerRecipe#container_type}
    */
    readonly containerType?: string;
    /**
    * The description of the container recipe.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#description ImagebuilderContainerRecipe#description}
    */
    readonly description?: string;
    /**
    * Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside. The template data consists of contextual variables where Image Builder places build information or scripts, based on your container image recipe.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#dockerfile_template_data ImagebuilderContainerRecipe#dockerfile_template_data}
    */
    readonly dockerfileTemplateData?: string;
    /**
    * The S3 URI for the Dockerfile that will be used to build your container image.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#dockerfile_template_uri ImagebuilderContainerRecipe#dockerfile_template_uri}
    */
    readonly dockerfileTemplateUri?: string;
    /**
    * Specifies the operating system version for the source image.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#image_os_version_override ImagebuilderContainerRecipe#image_os_version_override}
    */
    readonly imageOsVersionOverride?: string;
    /**
    * A group of options that can be used to configure an instance for building and testing container images.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#instance_configuration ImagebuilderContainerRecipe#instance_configuration}
    */
    readonly instanceConfiguration?: ImagebuilderContainerRecipeInstanceConfiguration;
    /**
    * Identifies which KMS key is used to encrypt the container image.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#kms_key_id ImagebuilderContainerRecipe#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The name of the container recipe.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#name ImagebuilderContainerRecipe#name}
    */
    readonly name?: string;
    /**
    * The source image for the container recipe.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#parent_image ImagebuilderContainerRecipe#parent_image}
    */
    readonly parentImage?: string;
    /**
    * Specifies the operating system platform when you use a custom source image.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#platform_override ImagebuilderContainerRecipe#platform_override}
    */
    readonly platformOverride?: string;
    /**
    * Tags that are attached to the container recipe.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#tags ImagebuilderContainerRecipe#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The container repository where the output container image is stored.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#target_repository ImagebuilderContainerRecipe#target_repository}
    */
    readonly targetRepository?: ImagebuilderContainerRecipeTargetRepository;
    /**
    * The semantic version of the container recipe (<major>.<minor>.<patch>).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#version ImagebuilderContainerRecipe#version}
    */
    readonly version?: string;
    /**
    * The working directory to be used during build and test workflows.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#working_directory ImagebuilderContainerRecipe#working_directory}
    */
    readonly workingDirectory?: string;
}
export interface ImagebuilderContainerRecipeComponents {
    /**
    * The Amazon Resource Name (ARN) of the component.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#component_arn ImagebuilderContainerRecipe#component_arn}
    */
    readonly componentArn?: string;
}
export declare function imagebuilderContainerRecipeComponentsToTerraform(struct?: ImagebuilderContainerRecipeComponents): any;
export interface ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs {
    /**
    * Use to configure delete on termination of the associated device.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#delete_on_termination ImagebuilderContainerRecipe#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Use to configure device encryption.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#encrypted ImagebuilderContainerRecipe#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Use to configure device IOPS.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#iops ImagebuilderContainerRecipe#iops}
    */
    readonly iops?: number;
    /**
    * Use to configure the KMS key to use when encrypting the device.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#kms_key_id ImagebuilderContainerRecipe#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The snapshot that defines the device contents.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#snapshot_id ImagebuilderContainerRecipe#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Use to override the device's volume size.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#volume_size ImagebuilderContainerRecipe#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Use to override the device's volume type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#volume_type ImagebuilderContainerRecipe#volume_type}
    */
    readonly volumeType?: string;
}
export declare function imagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsToTerraform(struct?: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs): any;
export interface ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings {
    /**
    * The device to which these mappings apply.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#device_name ImagebuilderContainerRecipe#device_name}
    */
    readonly deviceName?: string;
    /**
    * Amazon EBS-specific block device mapping specifications.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#ebs ImagebuilderContainerRecipe#ebs}
    */
    readonly ebs?: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs;
    /**
    * Use to remove a mapping from the parent image.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#no_device ImagebuilderContainerRecipe#no_device}
    */
    readonly noDevice?: string;
    /**
    * Use to manage instance ephemeral devices.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#virtual_name ImagebuilderContainerRecipe#virtual_name}
    */
    readonly virtualName?: string;
}
export declare function imagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsToTerraform(struct?: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings): any;
export interface ImagebuilderContainerRecipeInstanceConfiguration {
    /**
    * Defines the block devices to attach for building an instance from this Image Builder AMI.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#block_device_mappings ImagebuilderContainerRecipe#block_device_mappings}
    */
    readonly blockDeviceMappings?: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings[];
    /**
    * The AMI ID to use as the base image for a container build and test instance. If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#image ImagebuilderContainerRecipe#image}
    */
    readonly image?: string;
}
export declare function imagebuilderContainerRecipeInstanceConfigurationToTerraform(struct?: ImagebuilderContainerRecipeInstanceConfiguration): any;
export interface ImagebuilderContainerRecipeTargetRepository {
    /**
    * The name of the container repository where the output container image is stored. This name is prefixed by the repository location.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#repository_name ImagebuilderContainerRecipe#repository_name}
    */
    readonly repositoryName?: string;
    /**
    * Specifies the service in which this image was registered.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html#service ImagebuilderContainerRecipe#service}
    */
    readonly service?: string;
}
export declare function imagebuilderContainerRecipeTargetRepositoryToTerraform(struct?: ImagebuilderContainerRecipeTargetRepository): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html awscc_imagebuilder_container_recipe}
*/
export declare class ImagebuilderContainerRecipe extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html awscc_imagebuilder_container_recipe} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderContainerRecipeConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ImagebuilderContainerRecipeConfig);
    get arn(): string;
    private _components?;
    get components(): ImagebuilderContainerRecipeComponents[];
    set components(value: ImagebuilderContainerRecipeComponents[]);
    resetComponents(): void;
    get componentsInput(): ImagebuilderContainerRecipeComponents[] | undefined;
    private _containerType?;
    get containerType(): string;
    set containerType(value: string);
    resetContainerType(): void;
    get containerTypeInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _dockerfileTemplateData?;
    get dockerfileTemplateData(): string;
    set dockerfileTemplateData(value: string);
    resetDockerfileTemplateData(): void;
    get dockerfileTemplateDataInput(): string | undefined;
    private _dockerfileTemplateUri?;
    get dockerfileTemplateUri(): string;
    set dockerfileTemplateUri(value: string);
    resetDockerfileTemplateUri(): void;
    get dockerfileTemplateUriInput(): string | undefined;
    get id(): string;
    private _imageOsVersionOverride?;
    get imageOsVersionOverride(): string;
    set imageOsVersionOverride(value: string);
    resetImageOsVersionOverride(): void;
    get imageOsVersionOverrideInput(): string | undefined;
    private _instanceConfiguration?;
    get instanceConfiguration(): ImagebuilderContainerRecipeInstanceConfiguration;
    set instanceConfiguration(value: ImagebuilderContainerRecipeInstanceConfiguration);
    resetInstanceConfiguration(): void;
    get instanceConfigurationInput(): ImagebuilderContainerRecipeInstanceConfiguration | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _parentImage?;
    get parentImage(): string;
    set parentImage(value: string);
    resetParentImage(): void;
    get parentImageInput(): string | undefined;
    private _platformOverride?;
    get platformOverride(): string;
    set platformOverride(value: string);
    resetPlatformOverride(): void;
    get platformOverrideInput(): string | undefined;
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
    private _targetRepository?;
    get targetRepository(): ImagebuilderContainerRecipeTargetRepository;
    set targetRepository(value: ImagebuilderContainerRecipeTargetRepository);
    resetTargetRepository(): void;
    get targetRepositoryInput(): ImagebuilderContainerRecipeTargetRepository | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    private _workingDirectory?;
    get workingDirectory(): string;
    set workingDirectory(value: string);
    resetWorkingDirectory(): void;
    get workingDirectoryInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
