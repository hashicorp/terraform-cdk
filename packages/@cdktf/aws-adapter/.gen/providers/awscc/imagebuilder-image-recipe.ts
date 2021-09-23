// https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
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

export function imagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentToTerraform(struct?: ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    uninstall_after_build: cdktf.booleanToTerraform(struct!.uninstallAfterBuild),
  }
}

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

export function imagebuilderImageRecipeAdditionalInstanceConfigurationToTerraform(struct?: ImagebuilderImageRecipeAdditionalInstanceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    systems_manager_agent: imagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentToTerraform(struct!.systemsManagerAgent),
    user_data_override: cdktf.stringToTerraform(struct!.userDataOverride),
  }
}

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

export function imagebuilderImageRecipeBlockDeviceMappingsEbsToTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMappingsEbs): any {
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

export function imagebuilderImageRecipeBlockDeviceMappingsToTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    ebs: imagebuilderImageRecipeBlockDeviceMappingsEbsToTerraform(struct!.ebs),
    no_device: cdktf.stringToTerraform(struct!.noDevice),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

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

export function imagebuilderImageRecipeComponentsParametersToTerraform(struct?: ImagebuilderImageRecipeComponentsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform)(struct!.value),
  }
}

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

export function imagebuilderImageRecipeComponentsToTerraform(struct?: ImagebuilderImageRecipeComponents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component_arn: cdktf.stringToTerraform(struct!.componentArn),
    parameters: cdktf.listMapper(imagebuilderImageRecipeComponentsParametersToTerraform)(struct!.parameters),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html awscc_imagebuilder_image_recipe}
*/
export class ImagebuilderImageRecipe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_imagebuilder_image_recipe";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_recipe.html awscc_imagebuilder_image_recipe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderImageRecipeConfig
  */
  public constructor(scope: Construct, id: string, config: ImagebuilderImageRecipeConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_imagebuilder_image_recipe',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalInstanceConfiguration = config.additionalInstanceConfiguration;
    this._blockDeviceMappings = config.blockDeviceMappings;
    this._components = config.components;
    this._description = config.description;
    this._name = config.name;
    this._parentImage = config.parentImage;
    this._tags = config.tags;
    this._version = config.version;
    this._workingDirectory = config.workingDirectory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_instance_configuration - computed: false, optional: true, required: false
  private _additionalInstanceConfiguration?: ImagebuilderImageRecipeAdditionalInstanceConfiguration;
  public get additionalInstanceConfiguration() {
    return this.interpolationForAttribute('additional_instance_configuration') as any;
  }
  public set additionalInstanceConfiguration(value: ImagebuilderImageRecipeAdditionalInstanceConfiguration ) {
    this._additionalInstanceConfiguration = value;
  }
  public resetAdditionalInstanceConfiguration() {
    this._additionalInstanceConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInstanceConfigurationInput() {
    return this._additionalInstanceConfiguration
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // block_device_mappings - computed: true, optional: true, required: false
  private _blockDeviceMappings?: ImagebuilderImageRecipeBlockDeviceMappings[];
  public get blockDeviceMappings() {
    return this.interpolationForAttribute('block_device_mappings') as any;
  }
  public set blockDeviceMappings(value: ImagebuilderImageRecipeBlockDeviceMappings[]) {
    this._blockDeviceMappings = value;
  }
  public resetBlockDeviceMappings() {
    this._blockDeviceMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceMappingsInput() {
    return this._blockDeviceMappings
  }

  // components - computed: false, optional: false, required: true
  private _components: ImagebuilderImageRecipeComponents[];
  public get components() {
    return this.interpolationForAttribute('components') as any;
  }
  public set components(value: ImagebuilderImageRecipeComponents[]) {
    this._components = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // parent_image - computed: false, optional: false, required: true
  private _parentImage: string;
  public get parentImage() {
    return this.getStringAttribute('parent_image');
  }
  public set parentImage(value: string) {
    this._parentImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentImageInput() {
    return this._parentImage
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

  // version - computed: false, optional: false, required: true
  private _version: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
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
      additional_instance_configuration: imagebuilderImageRecipeAdditionalInstanceConfigurationToTerraform(this._additionalInstanceConfiguration),
      block_device_mappings: cdktf.listMapper(imagebuilderImageRecipeBlockDeviceMappingsToTerraform)(this._blockDeviceMappings),
      components: cdktf.listMapper(imagebuilderImageRecipeComponentsToTerraform)(this._components),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      parent_image: cdktf.stringToTerraform(this._parentImage),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
    };
  }
}
