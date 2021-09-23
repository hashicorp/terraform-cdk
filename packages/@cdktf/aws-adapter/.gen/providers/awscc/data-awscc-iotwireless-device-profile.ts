// https://www.terraform.io/docs/providers/awscc/d/iotwireless_device_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotwirelessDeviceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_device_profile.html#id DataAwsccIotwirelessDeviceProfile#id}
  */
  readonly id: string;
}
export class DataAwsccIotwirelessDeviceProfileLoRaWan extends cdktf.ComplexComputedList {

  // class_b_timeout - computed: true, optional: false, required: false
  public get classBTimeout() {
    return this.getNumberAttribute('class_b_timeout');
  }

  // class_c_timeout - computed: true, optional: false, required: false
  public get classCTimeout() {
    return this.getNumberAttribute('class_c_timeout');
  }

  // mac_version - computed: true, optional: false, required: false
  public get macVersion() {
    return this.getStringAttribute('mac_version');
  }

  // max_duty_cycle - computed: true, optional: false, required: false
  public get maxDutyCycle() {
    return this.getNumberAttribute('max_duty_cycle');
  }

  // max_eirp - computed: true, optional: false, required: false
  public get maxEirp() {
    return this.getNumberAttribute('max_eirp');
  }

  // ping_slot_dr - computed: true, optional: false, required: false
  public get pingSlotDr() {
    return this.getNumberAttribute('ping_slot_dr');
  }

  // ping_slot_freq - computed: true, optional: false, required: false
  public get pingSlotFreq() {
    return this.getNumberAttribute('ping_slot_freq');
  }

  // ping_slot_period - computed: true, optional: false, required: false
  public get pingSlotPeriod() {
    return this.getNumberAttribute('ping_slot_period');
  }

  // reg_params_revision - computed: true, optional: false, required: false
  public get regParamsRevision() {
    return this.getStringAttribute('reg_params_revision');
  }

  // rf_region - computed: true, optional: false, required: false
  public get rfRegion() {
    return this.getStringAttribute('rf_region');
  }

  // supports_32_bit_f_cnt - computed: true, optional: false, required: false
  public get supports32BitFCnt() {
    return this.getBooleanAttribute('supports_32_bit_f_cnt');
  }

  // supports_class_b - computed: true, optional: false, required: false
  public get supportsClassB() {
    return this.getBooleanAttribute('supports_class_b');
  }

  // supports_class_c - computed: true, optional: false, required: false
  public get supportsClassC() {
    return this.getBooleanAttribute('supports_class_c');
  }

  // supports_join - computed: true, optional: false, required: false
  public get supportsJoin() {
    return this.getBooleanAttribute('supports_join');
  }
}

export function dataAwsccIotwirelessDeviceProfileLoRaWanToTerraform(struct?: DataAwsccIotwirelessDeviceProfileLoRaWan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    class_b_timeout: cdktf.numberToTerraform(struct!.classBTimeout),
    class_c_timeout: cdktf.numberToTerraform(struct!.classCTimeout),
    mac_version: cdktf.stringToTerraform(struct!.macVersion),
    max_duty_cycle: cdktf.numberToTerraform(struct!.maxDutyCycle),
    max_eirp: cdktf.numberToTerraform(struct!.maxEirp),
    ping_slot_dr: cdktf.numberToTerraform(struct!.pingSlotDr),
    ping_slot_freq: cdktf.numberToTerraform(struct!.pingSlotFreq),
    ping_slot_period: cdktf.numberToTerraform(struct!.pingSlotPeriod),
    reg_params_revision: cdktf.stringToTerraform(struct!.regParamsRevision),
    rf_region: cdktf.stringToTerraform(struct!.rfRegion),
    supports_32_bit_f_cnt: cdktf.booleanToTerraform(struct!.supports32BitFCnt),
    supports_class_b: cdktf.booleanToTerraform(struct!.supportsClassB),
    supports_class_c: cdktf.booleanToTerraform(struct!.supportsClassC),
    supports_join: cdktf.booleanToTerraform(struct!.supportsJoin),
  }
}

export class DataAwsccIotwirelessDeviceProfileTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotwirelessDeviceProfileTagsToTerraform(struct?: DataAwsccIotwirelessDeviceProfileTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_device_profile.html awscc_iotwireless_device_profile}
*/
export class DataAwsccIotwirelessDeviceProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotwireless_device_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_device_profile.html awscc_iotwireless_device_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotwirelessDeviceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotwirelessDeviceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotwireless_device_profile',
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
