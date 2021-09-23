// https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotwirelessServiceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#lo_ra_wan IotwirelessServiceProfile#lo_ra_wan}
  */
  readonly loRaWan?: IotwirelessServiceProfileLoRaWan;
  /**
  * Name of service profile
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#name IotwirelessServiceProfile#name}
  */
  readonly name?: string;
  /**
  * A list of key-value pairs that contain metadata for the service profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#tags IotwirelessServiceProfile#tags}
  */
  readonly tags?: IotwirelessServiceProfileTags[];
}
export interface IotwirelessServiceProfileLoRaWan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#add_gw_metadata IotwirelessServiceProfile#add_gw_metadata}
  */
  readonly addGwMetadata?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#channel_mask IotwirelessServiceProfile#channel_mask}
  */
  readonly channelMask: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#dev_status_req_freq IotwirelessServiceProfile#dev_status_req_freq}
  */
  readonly devStatusReqFreq: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#dl_bucket_size IotwirelessServiceProfile#dl_bucket_size}
  */
  readonly dlBucketSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#dl_rate IotwirelessServiceProfile#dl_rate}
  */
  readonly dlRate: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#dl_rate_policy IotwirelessServiceProfile#dl_rate_policy}
  */
  readonly dlRatePolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#dr_max IotwirelessServiceProfile#dr_max}
  */
  readonly drMax: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#dr_min IotwirelessServiceProfile#dr_min}
  */
  readonly drMin: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#hr_allowed IotwirelessServiceProfile#hr_allowed}
  */
  readonly hrAllowed: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#min_gw_diversity IotwirelessServiceProfile#min_gw_diversity}
  */
  readonly minGwDiversity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#nwk_geo_loc IotwirelessServiceProfile#nwk_geo_loc}
  */
  readonly nwkGeoLoc: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#pr_allowed IotwirelessServiceProfile#pr_allowed}
  */
  readonly prAllowed: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#ra_allowed IotwirelessServiceProfile#ra_allowed}
  */
  readonly raAllowed: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#report_dev_status_battery IotwirelessServiceProfile#report_dev_status_battery}
  */
  readonly reportDevStatusBattery: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#report_dev_status_margin IotwirelessServiceProfile#report_dev_status_margin}
  */
  readonly reportDevStatusMargin: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#target_per IotwirelessServiceProfile#target_per}
  */
  readonly targetPer: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#ul_bucket_size IotwirelessServiceProfile#ul_bucket_size}
  */
  readonly ulBucketSize: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#ul_rate IotwirelessServiceProfile#ul_rate}
  */
  readonly ulRate: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#ul_rate_policy IotwirelessServiceProfile#ul_rate_policy}
  */
  readonly ulRatePolicy: string;
}

export function iotwirelessServiceProfileLoRaWanToTerraform(struct?: IotwirelessServiceProfileLoRaWan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add_gw_metadata: cdktf.booleanToTerraform(struct!.addGwMetadata),
    channel_mask: cdktf.stringToTerraform(struct!.channelMask),
    dev_status_req_freq: cdktf.numberToTerraform(struct!.devStatusReqFreq),
    dl_bucket_size: cdktf.numberToTerraform(struct!.dlBucketSize),
    dl_rate: cdktf.numberToTerraform(struct!.dlRate),
    dl_rate_policy: cdktf.stringToTerraform(struct!.dlRatePolicy),
    dr_max: cdktf.numberToTerraform(struct!.drMax),
    dr_min: cdktf.numberToTerraform(struct!.drMin),
    hr_allowed: cdktf.booleanToTerraform(struct!.hrAllowed),
    min_gw_diversity: cdktf.numberToTerraform(struct!.minGwDiversity),
    nwk_geo_loc: cdktf.booleanToTerraform(struct!.nwkGeoLoc),
    pr_allowed: cdktf.booleanToTerraform(struct!.prAllowed),
    ra_allowed: cdktf.booleanToTerraform(struct!.raAllowed),
    report_dev_status_battery: cdktf.booleanToTerraform(struct!.reportDevStatusBattery),
    report_dev_status_margin: cdktf.booleanToTerraform(struct!.reportDevStatusMargin),
    target_per: cdktf.numberToTerraform(struct!.targetPer),
    ul_bucket_size: cdktf.numberToTerraform(struct!.ulBucketSize),
    ul_rate: cdktf.numberToTerraform(struct!.ulRate),
    ul_rate_policy: cdktf.stringToTerraform(struct!.ulRatePolicy),
  }
}

export interface IotwirelessServiceProfileTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#key IotwirelessServiceProfile#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html#value IotwirelessServiceProfile#value}
  */
  readonly value?: string;
}

export function iotwirelessServiceProfileTagsToTerraform(struct?: IotwirelessServiceProfileTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html awscc_iotwireless_service_profile}
*/
export class IotwirelessServiceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotwireless_service_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html awscc_iotwireless_service_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotwirelessServiceProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IotwirelessServiceProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotwireless_service_profile',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._loRaWan = config.loRaWan;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lo_ra_wan - computed: false, optional: true, required: false
  private _loRaWan?: IotwirelessServiceProfileLoRaWan;
  public get loRaWan() {
    return this.interpolationForAttribute('lo_ra_wan') as any;
  }
  public set loRaWan(value: IotwirelessServiceProfileLoRaWan ) {
    this._loRaWan = value;
  }
  public resetLoRaWan() {
    this._loRaWan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loRaWanInput() {
    return this._loRaWan
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotwirelessServiceProfileTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotwirelessServiceProfileTags[] ) {
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
      lo_ra_wan: iotwirelessServiceProfileLoRaWanToTerraform(this._loRaWan),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(iotwirelessServiceProfileTagsToTerraform)(this._tags),
    };
  }
}
