// https://www.terraform.io/docs/providers/awscc/d/iotwireless_service_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotwirelessServiceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_service_profile.html#id DataAwsccIotwirelessServiceProfile#id}
  */
  readonly id: string;
}
export class DataAwsccIotwirelessServiceProfileLoRaWan extends cdktf.ComplexComputedList {

  // add_gw_metadata - computed: true, optional: false, required: false
  public get addGwMetadata() {
    return this.getBooleanAttribute('add_gw_metadata');
  }

  // channel_mask - computed: true, optional: false, required: false
  public get channelMask() {
    return this.getStringAttribute('channel_mask');
  }

  // dev_status_req_freq - computed: true, optional: false, required: false
  public get devStatusReqFreq() {
    return this.getNumberAttribute('dev_status_req_freq');
  }

  // dl_bucket_size - computed: true, optional: false, required: false
  public get dlBucketSize() {
    return this.getNumberAttribute('dl_bucket_size');
  }

  // dl_rate - computed: true, optional: false, required: false
  public get dlRate() {
    return this.getNumberAttribute('dl_rate');
  }

  // dl_rate_policy - computed: true, optional: false, required: false
  public get dlRatePolicy() {
    return this.getStringAttribute('dl_rate_policy');
  }

  // dr_max - computed: true, optional: false, required: false
  public get drMax() {
    return this.getNumberAttribute('dr_max');
  }

  // dr_min - computed: true, optional: false, required: false
  public get drMin() {
    return this.getNumberAttribute('dr_min');
  }

  // hr_allowed - computed: true, optional: false, required: false
  public get hrAllowed() {
    return this.getBooleanAttribute('hr_allowed');
  }

  // min_gw_diversity - computed: true, optional: false, required: false
  public get minGwDiversity() {
    return this.getNumberAttribute('min_gw_diversity');
  }

  // nwk_geo_loc - computed: true, optional: false, required: false
  public get nwkGeoLoc() {
    return this.getBooleanAttribute('nwk_geo_loc');
  }

  // pr_allowed - computed: true, optional: false, required: false
  public get prAllowed() {
    return this.getBooleanAttribute('pr_allowed');
  }

  // ra_allowed - computed: true, optional: false, required: false
  public get raAllowed() {
    return this.getBooleanAttribute('ra_allowed');
  }

  // report_dev_status_battery - computed: true, optional: false, required: false
  public get reportDevStatusBattery() {
    return this.getBooleanAttribute('report_dev_status_battery');
  }

  // report_dev_status_margin - computed: true, optional: false, required: false
  public get reportDevStatusMargin() {
    return this.getBooleanAttribute('report_dev_status_margin');
  }

  // target_per - computed: true, optional: false, required: false
  public get targetPer() {
    return this.getNumberAttribute('target_per');
  }

  // ul_bucket_size - computed: true, optional: false, required: false
  public get ulBucketSize() {
    return this.getNumberAttribute('ul_bucket_size');
  }

  // ul_rate - computed: true, optional: false, required: false
  public get ulRate() {
    return this.getNumberAttribute('ul_rate');
  }

  // ul_rate_policy - computed: true, optional: false, required: false
  public get ulRatePolicy() {
    return this.getStringAttribute('ul_rate_policy');
  }
}

export function dataAwsccIotwirelessServiceProfileLoRaWanToTerraform(struct?: DataAwsccIotwirelessServiceProfileLoRaWan): any {
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

export class DataAwsccIotwirelessServiceProfileTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotwirelessServiceProfileTagsToTerraform(struct?: DataAwsccIotwirelessServiceProfileTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_service_profile.html awscc_iotwireless_service_profile}
*/
export class DataAwsccIotwirelessServiceProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotwireless_service_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_service_profile.html awscc_iotwireless_service_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotwirelessServiceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotwirelessServiceProfileConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // lo_ra_wan - computed: true, optional: false, required: false
  public get loRaWan() {
    return this.interpolationForAttribute('lo_ra_wan') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
