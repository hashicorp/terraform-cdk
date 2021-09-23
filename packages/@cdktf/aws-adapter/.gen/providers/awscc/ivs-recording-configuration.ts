// https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IvsRecordingConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Recording Destination Configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html#destination_configuration IvsRecordingConfiguration#destination_configuration}
  */
  readonly destinationConfiguration: IvsRecordingConfigurationDestinationConfiguration;
  /**
  * Recording Configuration Name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html#name IvsRecordingConfiguration#name}
  */
  readonly name?: string;
  /**
  * A list of key-value pairs that contain metadata for the asset model.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html#tags IvsRecordingConfiguration#tags}
  */
  readonly tags?: IvsRecordingConfigurationTags[];
}
export interface IvsRecordingConfigurationDestinationConfigurationS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html#bucket_name IvsRecordingConfiguration#bucket_name}
  */
  readonly bucketName: string;
}

export function ivsRecordingConfigurationDestinationConfigurationS3ToTerraform(struct?: IvsRecordingConfigurationDestinationConfigurationS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
  }
}

export interface IvsRecordingConfigurationDestinationConfiguration {
  /**
  * Recording S3 Destination Configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html#s3 IvsRecordingConfiguration#s3}
  */
  readonly s3: IvsRecordingConfigurationDestinationConfigurationS3;
}

export function ivsRecordingConfigurationDestinationConfigurationToTerraform(struct?: IvsRecordingConfigurationDestinationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3: ivsRecordingConfigurationDestinationConfigurationS3ToTerraform(struct!.s3),
  }
}

export interface IvsRecordingConfigurationTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html#key IvsRecordingConfiguration#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html#value IvsRecordingConfiguration#value}
  */
  readonly value: string;
}

export function ivsRecordingConfigurationTagsToTerraform(struct?: IvsRecordingConfigurationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html awscc_ivs_recording_configuration}
*/
export class IvsRecordingConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ivs_recording_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html awscc_ivs_recording_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IvsRecordingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: IvsRecordingConfigurationConfig) {
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
    this._destinationConfiguration = config.destinationConfiguration;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // destination_configuration - computed: false, optional: false, required: true
  private _destinationConfiguration: IvsRecordingConfigurationDestinationConfiguration;
  public get destinationConfiguration() {
    return this.interpolationForAttribute('destination_configuration') as any;
  }
  public set destinationConfiguration(value: IvsRecordingConfigurationDestinationConfiguration) {
    this._destinationConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigurationInput() {
    return this._destinationConfiguration
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IvsRecordingConfigurationTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IvsRecordingConfigurationTags[] ) {
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
      destination_configuration: ivsRecordingConfigurationDestinationConfigurationToTerraform(this._destinationConfiguration),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(ivsRecordingConfigurationTagsToTerraform)(this._tags),
    };
  }
}
