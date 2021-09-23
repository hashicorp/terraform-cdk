// https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroundstationMissionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Post-pass time needed after the contact.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#contact_post_pass_duration_seconds GroundstationMissionProfile#contact_post_pass_duration_seconds}
  */
  readonly contactPostPassDurationSeconds?: number;
  /**
  * Pre-pass time needed before the contact.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#contact_pre_pass_duration_seconds GroundstationMissionProfile#contact_pre_pass_duration_seconds}
  */
  readonly contactPrePassDurationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#dataflow_edges GroundstationMissionProfile#dataflow_edges}
  */
  readonly dataflowEdges: GroundstationMissionProfileDataflowEdges[];
  /**
  * Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#minimum_viable_contact_duration_seconds GroundstationMissionProfile#minimum_viable_contact_duration_seconds}
  */
  readonly minimumViableContactDurationSeconds: number;
  /**
  * A name used to identify a mission profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#name GroundstationMissionProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#tags GroundstationMissionProfile#tags}
  */
  readonly tags?: GroundstationMissionProfileTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}
  */
  readonly trackingConfigArn: string;
}
export interface GroundstationMissionProfileDataflowEdges {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#destination GroundstationMissionProfile#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#source GroundstationMissionProfile#source}
  */
  readonly source?: string;
}

export function groundstationMissionProfileDataflowEdgesToTerraform(struct?: GroundstationMissionProfileDataflowEdges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export interface GroundstationMissionProfileTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#key GroundstationMissionProfile#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#value GroundstationMissionProfile#value}
  */
  readonly value?: string;
}

export function groundstationMissionProfileTagsToTerraform(struct?: GroundstationMissionProfileTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html awscc_groundstation_mission_profile}
*/
export class GroundstationMissionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_groundstation_mission_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html awscc_groundstation_mission_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroundstationMissionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: GroundstationMissionProfileConfig) {
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
    this._contactPostPassDurationSeconds = config.contactPostPassDurationSeconds;
    this._contactPrePassDurationSeconds = config.contactPrePassDurationSeconds;
    this._dataflowEdges = config.dataflowEdges;
    this._minimumViableContactDurationSeconds = config.minimumViableContactDurationSeconds;
    this._name = config.name;
    this._tags = config.tags;
    this._trackingConfigArn = config.trackingConfigArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // contact_post_pass_duration_seconds - computed: false, optional: true, required: false
  private _contactPostPassDurationSeconds?: number;
  public get contactPostPassDurationSeconds() {
    return this.getNumberAttribute('contact_post_pass_duration_seconds');
  }
  public set contactPostPassDurationSeconds(value: number ) {
    this._contactPostPassDurationSeconds = value;
  }
  public resetContactPostPassDurationSeconds() {
    this._contactPostPassDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPostPassDurationSecondsInput() {
    return this._contactPostPassDurationSeconds
  }

  // contact_pre_pass_duration_seconds - computed: false, optional: true, required: false
  private _contactPrePassDurationSeconds?: number;
  public get contactPrePassDurationSeconds() {
    return this.getNumberAttribute('contact_pre_pass_duration_seconds');
  }
  public set contactPrePassDurationSeconds(value: number ) {
    this._contactPrePassDurationSeconds = value;
  }
  public resetContactPrePassDurationSeconds() {
    this._contactPrePassDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPrePassDurationSecondsInput() {
    return this._contactPrePassDurationSeconds
  }

  // dataflow_edges - computed: false, optional: false, required: true
  private _dataflowEdges: GroundstationMissionProfileDataflowEdges[];
  public get dataflowEdges() {
    return this.interpolationForAttribute('dataflow_edges') as any;
  }
  public set dataflowEdges(value: GroundstationMissionProfileDataflowEdges[]) {
    this._dataflowEdges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowEdgesInput() {
    return this._dataflowEdges
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // minimum_viable_contact_duration_seconds - computed: false, optional: false, required: true
  private _minimumViableContactDurationSeconds: number;
  public get minimumViableContactDurationSeconds() {
    return this.getNumberAttribute('minimum_viable_contact_duration_seconds');
  }
  public set minimumViableContactDurationSeconds(value: number) {
    this._minimumViableContactDurationSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumViableContactDurationSecondsInput() {
    return this._minimumViableContactDurationSeconds
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: GroundstationMissionProfileTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: GroundstationMissionProfileTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tracking_config_arn - computed: false, optional: false, required: true
  private _trackingConfigArn: string;
  public get trackingConfigArn() {
    return this.getStringAttribute('tracking_config_arn');
  }
  public set trackingConfigArn(value: string) {
    this._trackingConfigArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingConfigArnInput() {
    return this._trackingConfigArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_post_pass_duration_seconds: cdktf.numberToTerraform(this._contactPostPassDurationSeconds),
      contact_pre_pass_duration_seconds: cdktf.numberToTerraform(this._contactPrePassDurationSeconds),
      dataflow_edges: cdktf.listMapper(groundstationMissionProfileDataflowEdgesToTerraform)(this._dataflowEdges),
      minimum_viable_contact_duration_seconds: cdktf.numberToTerraform(this._minimumViableContactDurationSeconds),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(groundstationMissionProfileTagsToTerraform)(this._tags),
      tracking_config_arn: cdktf.stringToTerraform(this._trackingConfigArn),
    };
  }
}
