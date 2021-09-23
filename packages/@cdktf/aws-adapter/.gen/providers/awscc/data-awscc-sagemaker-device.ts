// https://www.terraform.io/docs/providers/awscc/d/sagemaker_device.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSagemakerDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_device.html#id DataAwsccSagemakerDevice#id}
  */
  readonly id: string;
}
export class DataAwsccSagemakerDeviceDevice extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // iot_thing_name - computed: true, optional: false, required: false
  public get iotThingName() {
    return this.getStringAttribute('iot_thing_name');
  }
}

export function dataAwsccSagemakerDeviceDeviceToTerraform(struct?: DataAwsccSagemakerDeviceDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    iot_thing_name: cdktf.stringToTerraform(struct!.iotThingName),
  }
}

export class DataAwsccSagemakerDeviceTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccSagemakerDeviceTagsToTerraform(struct?: DataAwsccSagemakerDeviceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_device.html awscc_sagemaker_device}
*/
export class DataAwsccSagemakerDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_device";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_device.html awscc_sagemaker_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_device',
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

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.interpolationForAttribute('device') as any;
  }

  // device_fleet_name - computed: true, optional: false, required: false
  public get deviceFleetName() {
    return this.getStringAttribute('device_fleet_name');
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
