// https://www.terraform.io/docs/providers/awscc/d/nimblestudio_launch_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccNimblestudioLaunchProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_launch_profile.html#id DataAwsccNimblestudioLaunchProfile#id}
  */
  readonly id: string;
}
export class DataAwsccNimblestudioLaunchProfileStreamConfiguration extends cdktf.ComplexComputedList {

  // clipboard_mode - computed: true, optional: false, required: false
  public get clipboardMode() {
    return this.getStringAttribute('clipboard_mode');
  }

  // ec_2_instance_types - computed: true, optional: false, required: false
  public get ec2InstanceTypes() {
    return this.getListAttribute('ec_2_instance_types');
  }

  // max_session_length_in_minutes - computed: true, optional: false, required: false
  public get maxSessionLengthInMinutes() {
    return this.getNumberAttribute('max_session_length_in_minutes');
  }

  // streaming_image_ids - computed: true, optional: false, required: false
  public get streamingImageIds() {
    return this.getListAttribute('streaming_image_ids');
  }
}

export function dataAwsccNimblestudioLaunchProfileStreamConfigurationToTerraform(struct?: DataAwsccNimblestudioLaunchProfileStreamConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    clipboard_mode: cdktf.stringToTerraform(struct!.clipboardMode),
    ec_2_instance_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ec2InstanceTypes),
    max_session_length_in_minutes: cdktf.numberToTerraform(struct!.maxSessionLengthInMinutes),
    streaming_image_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.streamingImageIds),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_launch_profile.html awscc_nimblestudio_launch_profile}
*/
export class DataAwsccNimblestudioLaunchProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_nimblestudio_launch_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_launch_profile.html awscc_nimblestudio_launch_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNimblestudioLaunchProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNimblestudioLaunchProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_nimblestudio_launch_profile',
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

  // ec_2_subnet_ids - computed: true, optional: false, required: false
  public get ec2SubnetIds() {
    return this.getListAttribute('ec_2_subnet_ids');
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

  // launch_profile_id - computed: true, optional: false, required: false
  public get launchProfileId() {
    return this.getStringAttribute('launch_profile_id');
  }

  // launch_profile_protocol_versions - computed: true, optional: false, required: false
  public get launchProfileProtocolVersions() {
    return this.getListAttribute('launch_profile_protocol_versions');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // stream_configuration - computed: true, optional: false, required: false
  public get streamConfiguration() {
    return this.interpolationForAttribute('stream_configuration') as any;
  }

  // studio_component_ids - computed: true, optional: false, required: false
  public get studioComponentIds() {
    return this.getListAttribute('studio_component_ids');
  }

  // studio_id - computed: true, optional: false, required: false
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
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
