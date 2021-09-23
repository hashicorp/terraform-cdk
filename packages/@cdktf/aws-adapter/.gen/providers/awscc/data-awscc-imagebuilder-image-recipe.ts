// https://www.terraform.io/docs/providers/awscc/d/imagebuilder_image_recipe.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccImagebuilderImageRecipeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_image_recipe.html#id DataAwsccImagebuilderImageRecipe#id}
  */
  readonly id: string;
}
export class DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent extends cdktf.ComplexComputedList {

  // uninstall_after_build - computed: true, optional: false, required: false
  public get uninstallAfterBuild() {
    return this.getBooleanAttribute('uninstall_after_build');
  }
}

export function dataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentToTerraform(struct?: DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    uninstall_after_build: cdktf.booleanToTerraform(struct!.uninstallAfterBuild),
  }
}

export class DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration extends cdktf.ComplexComputedList {

  // systems_manager_agent - computed: true, optional: false, required: false
  public get systemsManagerAgent() {
    return this.interpolationForAttribute('systems_manager_agent') as any;
  }

  // user_data_override - computed: true, optional: false, required: false
  public get userDataOverride() {
    return this.getStringAttribute('user_data_override');
  }
}

export function dataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationToTerraform(struct?: DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    systems_manager_agent: dataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentToTerraform(struct!.systemsManagerAgent),
    user_data_override: cdktf.stringToTerraform(struct!.userDataOverride),
  }
}

export class DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs extends cdktf.ComplexComputedList {

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

export function dataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsToTerraform(struct?: DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs): any {
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

export class DataAwsccImagebuilderImageRecipeBlockDeviceMappings extends cdktf.ComplexComputedList {

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

export function dataAwsccImagebuilderImageRecipeBlockDeviceMappingsToTerraform(struct?: DataAwsccImagebuilderImageRecipeBlockDeviceMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    ebs: dataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsToTerraform(struct!.ebs),
    no_device: cdktf.stringToTerraform(struct!.noDevice),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

export class DataAwsccImagebuilderImageRecipeComponentsParameters extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export function dataAwsccImagebuilderImageRecipeComponentsParametersToTerraform(struct?: DataAwsccImagebuilderImageRecipeComponentsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform)(struct!.value),
  }
}

export class DataAwsccImagebuilderImageRecipeComponents extends cdktf.ComplexComputedList {

  // component_arn - computed: true, optional: false, required: false
  public get componentArn() {
    return this.getStringAttribute('component_arn');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
}

export function dataAwsccImagebuilderImageRecipeComponentsToTerraform(struct?: DataAwsccImagebuilderImageRecipeComponents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    component_arn: cdktf.stringToTerraform(struct!.componentArn),
    parameters: cdktf.listMapper(dataAwsccImagebuilderImageRecipeComponentsParametersToTerraform)(struct!.parameters),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_image_recipe.html awscc_imagebuilder_image_recipe}
*/
export class DataAwsccImagebuilderImageRecipe extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_imagebuilder_image_recipe";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_image_recipe.html awscc_imagebuilder_image_recipe} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccImagebuilderImageRecipeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccImagebuilderImageRecipeConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_instance_configuration - computed: true, optional: false, required: false
  public get additionalInstanceConfiguration() {
    return this.interpolationForAttribute('additional_instance_configuration') as any;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // block_device_mappings - computed: true, optional: false, required: false
  public get blockDeviceMappings() {
    return this.interpolationForAttribute('block_device_mappings') as any;
  }

  // components - computed: true, optional: false, required: false
  public get components() {
    return this.interpolationForAttribute('components') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_image - computed: true, optional: false, required: false
  public get parentImage() {
    return this.getStringAttribute('parent_image');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
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
