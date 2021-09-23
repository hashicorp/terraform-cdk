// https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edge device you want to create
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#device SagemakerDevice#device}
  */
  readonly device?: SagemakerDeviceDevice;
  /**
  * The name of the edge device fleet
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#device_fleet_name SagemakerDevice#device_fleet_name}
  */
  readonly deviceFleetName: string;
  /**
  * Associate tags with the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#tags SagemakerDevice#tags}
  */
  readonly tags?: SagemakerDeviceTags[];
}
export interface SagemakerDeviceDevice {
  /**
  * Description of the device
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#description SagemakerDevice#description}
  */
  readonly description?: string;
  /**
  * The name of the device
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#device_name SagemakerDevice#device_name}
  */
  readonly deviceName: string;
  /**
  * AWS Internet of Things (IoT) object name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#iot_thing_name SagemakerDevice#iot_thing_name}
  */
  readonly iotThingName?: string;
}

export function sagemakerDeviceDeviceToTerraform(struct?: SagemakerDeviceDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    iot_thing_name: cdktf.stringToTerraform(struct!.iotThingName),
  }
}

export interface SagemakerDeviceTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#key SagemakerDevice#key}
  */
  readonly key: string;
  /**
  * The key value of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#value SagemakerDevice#value}
  */
  readonly value: string;
}

export function sagemakerDeviceTagsToTerraform(struct?: SagemakerDeviceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html awscc_sagemaker_device}
*/
export class SagemakerDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_device";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html awscc_sagemaker_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerDeviceConfig) {
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
    this._device = config.device;
    this._deviceFleetName = config.deviceFleetName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: SagemakerDeviceDevice;
  public get device() {
    return this.interpolationForAttribute('device') as any;
  }
  public set device(value: SagemakerDeviceDevice ) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device
  }

  // device_fleet_name - computed: false, optional: false, required: true
  private _deviceFleetName: string;
  public get deviceFleetName() {
    return this.getStringAttribute('device_fleet_name');
  }
  public set deviceFleetName(value: string) {
    this._deviceFleetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFleetNameInput() {
    return this._deviceFleetName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: SagemakerDeviceTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SagemakerDeviceTags[] ) {
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
      device: sagemakerDeviceDeviceToTerraform(this._device),
      device_fleet_name: cdktf.stringToTerraform(this._deviceFleetName),
      tags: cdktf.listMapper(sagemakerDeviceTagsToTerraform)(this._tags),
    };
  }
}
