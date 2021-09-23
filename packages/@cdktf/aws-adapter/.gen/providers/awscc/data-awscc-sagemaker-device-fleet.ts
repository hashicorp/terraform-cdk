// https://www.terraform.io/docs/providers/awscc/d/sagemaker_device_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSagemakerDeviceFleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_device_fleet.html#id DataAwsccSagemakerDeviceFleet#id}
  */
  readonly id: string;
}
export class DataAwsccSagemakerDeviceFleetOutputConfig extends cdktf.ComplexComputedList {

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // s3_output_location - computed: true, optional: false, required: false
  public get s3OutputLocation() {
    return this.getStringAttribute('s3_output_location');
  }
}

export function dataAwsccSagemakerDeviceFleetOutputConfigToTerraform(struct?: DataAwsccSagemakerDeviceFleetOutputConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_output_location: cdktf.stringToTerraform(struct!.s3OutputLocation),
  }
}

export class DataAwsccSagemakerDeviceFleetTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccSagemakerDeviceFleetTagsToTerraform(struct?: DataAwsccSagemakerDeviceFleetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_device_fleet.html awscc_sagemaker_device_fleet}
*/
export class DataAwsccSagemakerDeviceFleet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_device_fleet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_device_fleet.html awscc_sagemaker_device_fleet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerDeviceFleetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerDeviceFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_device_fleet',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // output_config - computed: true, optional: false, required: false
  public get outputConfig() {
    return this.interpolationForAttribute('output_config') as any;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
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
