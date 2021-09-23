// https://www.terraform.io/docs/providers/awscc/d/imagebuilder_container_recipe.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccImagebuilderContainerRecipeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_container_recipe.html#id DataAwsccImagebuilderContainerRecipe#id}
  */
  readonly id: string;
}
export class DataAwsccImagebuilderContainerRecipeComponents extends cdktf.ComplexComputedList {

  // component_arn - computed: true, optional: false, required: false
  public get componentArn() {
    return this.getStringAttribute('component_arn');
  }
}

export function dataAwsccImagebuilderContainerRecipeComponentsToTerraform(struct?: DataAwsccImagebuilderContainerRecipeComponents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component_arn: cdktf.stringToTerraform(struct!.componentArn),
  }
}

export class DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs extends cdktf.ComplexComputedList {

  // delete_on_termination - computed: true, optional: false, required: false
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
}

export function dataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsToTerraform(struct?: DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs): any {
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

export class DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings extends cdktf.ComplexComputedList {

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // ebs - computed: true, optional: false, required: false
  public get ebs() {
    return this.interpolationForAttribute('ebs') as any;
  }

  // no_device - computed: true, optional: false, required: false
  public get noDevice() {
    return this.getStringAttribute('no_device');
  }

  // virtual_name - computed: true, optional: false, required: false
  public get virtualName() {
    return this.getStringAttribute('virtual_name');
  }
}

export function dataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsToTerraform(struct?: DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    ebs: dataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsToTerraform(struct!.ebs),
    no_device: cdktf.stringToTerraform(struct!.noDevice),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

export class DataAwsccImagebuilderContainerRecipeInstanceConfiguration extends cdktf.ComplexComputedList {

  // block_device_mappings - computed: true, optional: false, required: false
  public get blockDeviceMappings() {
    return this.interpolationForAttribute('block_device_mappings') as any;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }
}

export function dataAwsccImagebuilderContainerRecipeInstanceConfigurationToTerraform(struct?: DataAwsccImagebuilderContainerRecipeInstanceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    block_device_mappings: cdktf.listMapper(dataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsToTerraform)(struct!.blockDeviceMappings),
    image: cdktf.stringToTerraform(struct!.image),
  }
}

export class DataAwsccImagebuilderContainerRecipeTargetRepository extends cdktf.ComplexComputedList {

  // repository_name - computed: true, optional: false, required: false
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export function dataAwsccImagebuilderContainerRecipeTargetRepositoryToTerraform(struct?: DataAwsccImagebuilderContainerRecipeTargetRepository): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_container_recipe.html awscc_imagebuilder_container_recipe}
*/
export class DataAwsccImagebuilderContainerRecipe extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_imagebuilder_container_recipe";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_container_recipe.html awscc_imagebuilder_container_recipe} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccImagebuilderContainerRecipeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccImagebuilderContainerRecipeConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // components - computed: true, optional: false, required: false
  public get components() {
    return this.interpolationForAttribute('components') as any;
  }

  // container_type - computed: true, optional: false, required: false
  public get containerType() {
    return this.getStringAttribute('container_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dockerfile_template_data - computed: true, optional: false, required: false
  public get dockerfileTemplateData() {
    return this.getStringAttribute('dockerfile_template_data');
  }

  // dockerfile_template_uri - computed: true, optional: false, required: false
  public get dockerfileTemplateUri() {
    return this.getStringAttribute('dockerfile_template_uri');
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

  // image_os_version_override - computed: true, optional: false, required: false
  public get imageOsVersionOverride() {
    return this.getStringAttribute('image_os_version_override');
  }

  // instance_configuration - computed: true, optional: false, required: false
  public get instanceConfiguration() {
    return this.interpolationForAttribute('instance_configuration') as any;
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_image - computed: true, optional: false, required: false
  public get parentImage() {
    return this.getStringAttribute('parent_image');
  }

  // platform_override - computed: true, optional: false, required: false
  public get platformOverride() {
    return this.getStringAttribute('platform_override');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // target_repository - computed: true, optional: false, required: false
  public get targetRepository() {
    return this.interpolationForAttribute('target_repository') as any;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // working_directory - computed: true, optional: false, required: false
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
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
