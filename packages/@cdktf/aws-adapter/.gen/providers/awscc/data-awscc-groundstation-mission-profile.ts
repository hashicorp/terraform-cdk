// https://www.terraform.io/docs/providers/awscc/d/groundstation_mission_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccGroundstationMissionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_mission_profile.html#id DataAwsccGroundstationMissionProfile#id}
  */
  readonly id: string;
}
export class DataAwsccGroundstationMissionProfileDataflowEdges extends cdktf.ComplexComputedList {

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }
}

export function dataAwsccGroundstationMissionProfileDataflowEdgesToTerraform(struct?: DataAwsccGroundstationMissionProfileDataflowEdges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export class DataAwsccGroundstationMissionProfileTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccGroundstationMissionProfileTagsToTerraform(struct?: DataAwsccGroundstationMissionProfileTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_mission_profile.html awscc_groundstation_mission_profile}
*/
export class DataAwsccGroundstationMissionProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_groundstation_mission_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/groundstation_mission_profile.html awscc_groundstation_mission_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGroundstationMissionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGroundstationMissionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_groundstation_mission_profile',
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

  // contact_post_pass_duration_seconds - computed: true, optional: false, required: false
  public get contactPostPassDurationSeconds() {
    return this.getNumberAttribute('contact_post_pass_duration_seconds');
  }

  // contact_pre_pass_duration_seconds - computed: true, optional: false, required: false
  public get contactPrePassDurationSeconds() {
    return this.getNumberAttribute('contact_pre_pass_duration_seconds');
  }

  // dataflow_edges - computed: true, optional: false, required: false
  public get dataflowEdges() {
    return this.interpolationForAttribute('dataflow_edges') as any;
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

  // minimum_viable_contact_duration_seconds - computed: true, optional: false, required: false
  public get minimumViableContactDurationSeconds() {
    return this.getNumberAttribute('minimum_viable_contact_duration_seconds');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // tracking_config_arn - computed: true, optional: false, required: false
  public get trackingConfigArn() {
    return this.getStringAttribute('tracking_config_arn');
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
