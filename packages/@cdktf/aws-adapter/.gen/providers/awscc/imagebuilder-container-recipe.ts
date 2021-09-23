// https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
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

export function imagebuilderContainerRecipeComponentsToTerraform(struct?: ImagebuilderContainerRecipeComponents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component_arn: cdktf.stringToTerraform(struct!.componentArn),
  }
}

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

export function imagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsToTerraform(struct?: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

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

export function imagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsToTerraform(struct?: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    ebs: imagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsToTerraform(struct!.ebs),
    no_device: cdktf.stringToTerraform(struct!.noDevice),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

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

export function imagebuilderContainerRecipeInstanceConfigurationToTerraform(struct?: ImagebuilderContainerRecipeInstanceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    block_device_mappings: cdktf.listMapper(imagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsToTerraform)(struct!.blockDeviceMappings),
    image: cdktf.stringToTerraform(struct!.image),
  }
}

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

export function imagebuilderContainerRecipeTargetRepositoryToTerraform(struct?: ImagebuilderContainerRecipeTargetRepository): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html awscc_imagebuilder_container_recipe}
*/
export class ImagebuilderContainerRecipe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_imagebuilder_container_recipe";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_container_recipe.html awscc_imagebuilder_container_recipe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderContainerRecipeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ImagebuilderContainerRecipeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_imagebuilder_container_recipe',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._components = config.components;
    this._containerType = config.containerType;
    this._description = config.description;
    this._dockerfileTemplateData = config.dockerfileTemplateData;
    this._dockerfileTemplateUri = config.dockerfileTemplateUri;
    this._imageOsVersionOverride = config.imageOsVersionOverride;
    this._instanceConfiguration = config.instanceConfiguration;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._parentImage = config.parentImage;
    this._platformOverride = config.platformOverride;
    this._tags = config.tags;
    this._targetRepository = config.targetRepository;
    this._version = config.version;
    this._workingDirectory = config.workingDirectory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // components - computed: true, optional: true, required: false
  private _components?: ImagebuilderContainerRecipeComponents[];
  public get components() {
    return this.interpolationForAttribute('components') as any;
  }
  public set components(value: ImagebuilderContainerRecipeComponents[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components
  }

  // container_type - computed: true, optional: true, required: false
  private _containerType?: string;
  public get containerType() {
    return this.getStringAttribute('container_type');
  }
  public set containerType(value: string) {
    this._containerType = value;
  }
  public resetContainerType() {
    this._containerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerTypeInput() {
    return this._containerType
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // dockerfile_template_data - computed: true, optional: true, required: false
  private _dockerfileTemplateData?: string;
  public get dockerfileTemplateData() {
    return this.getStringAttribute('dockerfile_template_data');
  }
  public set dockerfileTemplateData(value: string) {
    this._dockerfileTemplateData = value;
  }
  public resetDockerfileTemplateData() {
    this._dockerfileTemplateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerfileTemplateDataInput() {
    return this._dockerfileTemplateData
  }

  // dockerfile_template_uri - computed: true, optional: true, required: false
  private _dockerfileTemplateUri?: string;
  public get dockerfileTemplateUri() {
    return this.getStringAttribute('dockerfile_template_uri');
  }
  public set dockerfileTemplateUri(value: string) {
    this._dockerfileTemplateUri = value;
  }
  public resetDockerfileTemplateUri() {
    this._dockerfileTemplateUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerfileTemplateUriInput() {
    return this._dockerfileTemplateUri
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_os_version_override - computed: true, optional: true, required: false
  private _imageOsVersionOverride?: string;
  public get imageOsVersionOverride() {
    return this.getStringAttribute('image_os_version_override');
  }
  public set imageOsVersionOverride(value: string) {
    this._imageOsVersionOverride = value;
  }
  public resetImageOsVersionOverride() {
    this._imageOsVersionOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOsVersionOverrideInput() {
    return this._imageOsVersionOverride
  }

  // instance_configuration - computed: true, optional: true, required: false
  private _instanceConfiguration?: ImagebuilderContainerRecipeInstanceConfiguration;
  public get instanceConfiguration() {
    return this.interpolationForAttribute('instance_configuration') as any;
  }
  public set instanceConfiguration(value: ImagebuilderContainerRecipeInstanceConfiguration) {
    this._instanceConfiguration = value;
  }
  public resetInstanceConfiguration() {
    this._instanceConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationInput() {
    return this._instanceConfiguration
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

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // parent_image - computed: true, optional: true, required: false
  private _parentImage?: string;
  public get parentImage() {
    return this.getStringAttribute('parent_image');
  }
  public set parentImage(value: string) {
    this._parentImage = value;
  }
  public resetParentImage() {
    this._parentImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentImageInput() {
    return this._parentImage
  }

  // platform_override - computed: true, optional: true, required: false
  private _platformOverride?: string;
  public get platformOverride() {
    return this.getStringAttribute('platform_override');
  }
  public set platformOverride(value: string) {
    this._platformOverride = value;
  }
  public resetPlatformOverride() {
    this._platformOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformOverrideInput() {
    return this._platformOverride
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable
  public get tags(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // target_repository - computed: true, optional: true, required: false
  private _targetRepository?: ImagebuilderContainerRecipeTargetRepository;
  public get targetRepository() {
    return this.interpolationForAttribute('target_repository') as any;
  }
  public set targetRepository(value: ImagebuilderContainerRecipeTargetRepository) {
    this._targetRepository = value;
  }
  public resetTargetRepository() {
    this._targetRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRepositoryInput() {
    return this._targetRepository
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // working_directory - computed: true, optional: true, required: false
  private _workingDirectory?: string;
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      components: cdktf.listMapper(imagebuilderContainerRecipeComponentsToTerraform)(this._components),
      container_type: cdktf.stringToTerraform(this._containerType),
      description: cdktf.stringToTerraform(this._description),
      dockerfile_template_data: cdktf.stringToTerraform(this._dockerfileTemplateData),
      dockerfile_template_uri: cdktf.stringToTerraform(this._dockerfileTemplateUri),
      image_os_version_override: cdktf.stringToTerraform(this._imageOsVersionOverride),
      instance_configuration: imagebuilderContainerRecipeInstanceConfigurationToTerraform(this._instanceConfiguration),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      parent_image: cdktf.stringToTerraform(this._parentImage),
      platform_override: cdktf.stringToTerraform(this._platformOverride),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target_repository: imagebuilderContainerRecipeTargetRepositoryToTerraform(this._targetRepository),
      version: cdktf.stringToTerraform(this._version),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
    };
  }
}
