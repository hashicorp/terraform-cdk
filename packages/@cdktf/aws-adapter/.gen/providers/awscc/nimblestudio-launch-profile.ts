// https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NimblestudioLaunchProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#description NimblestudioLaunchProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#ec_2_subnet_ids NimblestudioLaunchProfile#ec_2_subnet_ids}
  */
  readonly ec2SubnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#launch_profile_protocol_versions NimblestudioLaunchProfile#launch_profile_protocol_versions}
  */
  readonly launchProfileProtocolVersions: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#name NimblestudioLaunchProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#stream_configuration NimblestudioLaunchProfile#stream_configuration}
  */
  readonly streamConfiguration: NimblestudioLaunchProfileStreamConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#studio_component_ids NimblestudioLaunchProfile#studio_component_ids}
  */
  readonly studioComponentIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#studio_id NimblestudioLaunchProfile#studio_id}
  */
  readonly studioId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#tags NimblestudioLaunchProfile#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export interface NimblestudioLaunchProfileStreamConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#clipboard_mode NimblestudioLaunchProfile#clipboard_mode}
  */
  readonly clipboardMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#ec_2_instance_types NimblestudioLaunchProfile#ec_2_instance_types}
  */
  readonly ec2InstanceTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#max_session_length_in_minutes NimblestudioLaunchProfile#max_session_length_in_minutes}
  */
  readonly maxSessionLengthInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#streaming_image_ids NimblestudioLaunchProfile#streaming_image_ids}
  */
  readonly streamingImageIds: string[];
}

export function nimblestudioLaunchProfileStreamConfigurationToTerraform(struct?: NimblestudioLaunchProfileStreamConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    clipboard_mode: cdktf.stringToTerraform(struct!.clipboardMode),
    ec_2_instance_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ec2InstanceTypes),
    max_session_length_in_minutes: cdktf.numberToTerraform(struct!.maxSessionLengthInMinutes),
    streaming_image_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.streamingImageIds),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html awscc_nimblestudio_launch_profile}
*/
export class NimblestudioLaunchProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_nimblestudio_launch_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html awscc_nimblestudio_launch_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NimblestudioLaunchProfileConfig
  */
  public constructor(scope: Construct, id: string, config: NimblestudioLaunchProfileConfig) {
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
    this._description = config.description;
    this._ec2SubnetIds = config.ec2SubnetIds;
    this._launchProfileProtocolVersions = config.launchProfileProtocolVersions;
    this._name = config.name;
    this._streamConfiguration = config.streamConfiguration;
    this._studioComponentIds = config.studioComponentIds;
    this._studioId = config.studioId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // ec_2_subnet_ids - computed: false, optional: false, required: true
  private _ec2SubnetIds: string[];
  public get ec2SubnetIds() {
    return this.getListAttribute('ec_2_subnet_ids');
  }
  public set ec2SubnetIds(value: string[]) {
    this._ec2SubnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2SubnetIdsInput() {
    return this._ec2SubnetIds
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // launch_profile_id - computed: true, optional: false, required: false
  public get launchProfileId() {
    return this.getStringAttribute('launch_profile_id');
  }

  // launch_profile_protocol_versions - computed: false, optional: false, required: true
  private _launchProfileProtocolVersions: string[];
  public get launchProfileProtocolVersions() {
    return this.getListAttribute('launch_profile_protocol_versions');
  }
  public set launchProfileProtocolVersions(value: string[]) {
    this._launchProfileProtocolVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchProfileProtocolVersionsInput() {
    return this._launchProfileProtocolVersions
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

  // stream_configuration - computed: false, optional: false, required: true
  private _streamConfiguration: NimblestudioLaunchProfileStreamConfiguration;
  public get streamConfiguration() {
    return this.interpolationForAttribute('stream_configuration') as any;
  }
  public set streamConfiguration(value: NimblestudioLaunchProfileStreamConfiguration) {
    this._streamConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamConfigurationInput() {
    return this._streamConfiguration
  }

  // studio_component_ids - computed: false, optional: false, required: true
  private _studioComponentIds: string[];
  public get studioComponentIds() {
    return this.getListAttribute('studio_component_ids');
  }
  public set studioComponentIds(value: string[]) {
    this._studioComponentIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioComponentIdsInput() {
    return this._studioComponentIds
  }

  // studio_id - computed: false, optional: false, required: true
  private _studioId: string;
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }
  public set studioId(value: string) {
    this._studioId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioIdInput() {
    return this._studioId
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      ec_2_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._ec2SubnetIds),
      launch_profile_protocol_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._launchProfileProtocolVersions),
      name: cdktf.stringToTerraform(this._name),
      stream_configuration: nimblestudioLaunchProfileStreamConfigurationToTerraform(this._streamConfiguration),
      studio_component_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._studioComponentIds),
      studio_id: cdktf.stringToTerraform(this._studioId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
