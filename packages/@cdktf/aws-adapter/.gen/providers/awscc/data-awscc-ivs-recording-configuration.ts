// https://www.terraform.io/docs/providers/awscc/d/ivs_recording_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIvsRecordingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ivs_recording_configuration.html#id DataAwsccIvsRecordingConfiguration#id}
  */
  readonly id: string;
}
export class DataAwsccIvsRecordingConfigurationDestinationConfigurationS3 extends cdktf.ComplexComputedList {

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
}

export function dataAwsccIvsRecordingConfigurationDestinationConfigurationS3ToTerraform(struct?: DataAwsccIvsRecordingConfigurationDestinationConfigurationS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
  }
}

export class DataAwsccIvsRecordingConfigurationDestinationConfiguration extends cdktf.ComplexComputedList {

  // s3 - computed: true, optional: false, required: false
  public get s3() {
    return this.interpolationForAttribute('s3') as any;
  }
}

export function dataAwsccIvsRecordingConfigurationDestinationConfigurationToTerraform(struct?: DataAwsccIvsRecordingConfigurationDestinationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3: dataAwsccIvsRecordingConfigurationDestinationConfigurationS3ToTerraform(struct!.s3),
  }
}

export class DataAwsccIvsRecordingConfigurationTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIvsRecordingConfigurationTagsToTerraform(struct?: DataAwsccIvsRecordingConfigurationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ivs_recording_configuration.html awscc_ivs_recording_configuration}
*/
export class DataAwsccIvsRecordingConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ivs_recording_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ivs_recording_configuration.html awscc_ivs_recording_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIvsRecordingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIvsRecordingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ivs_recording_configuration',
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

  // destination_configuration - computed: true, optional: false, required: false
  public get destinationConfiguration() {
    return this.interpolationForAttribute('destination_configuration') as any;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
