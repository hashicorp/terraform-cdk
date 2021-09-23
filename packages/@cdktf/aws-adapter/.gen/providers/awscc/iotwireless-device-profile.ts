// https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotwirelessDeviceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#lo_ra_wan IotwirelessDeviceProfile#lo_ra_wan}
  */
  readonly loRaWan?: IotwirelessDeviceProfileLoRaWan;
  /**
  * Name of service profile
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#name IotwirelessDeviceProfile#name}
  */
  readonly name?: string;
  /**
  * A list of key-value pairs that contain metadata for the device profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#tags IotwirelessDeviceProfile#tags}
  */
  readonly tags?: IotwirelessDeviceProfileTags[];
}
export interface IotwirelessDeviceProfileLoRaWan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#class_b_timeout IotwirelessDeviceProfile#class_b_timeout}
  */
  readonly classBTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#class_c_timeout IotwirelessDeviceProfile#class_c_timeout}
  */
  readonly classCTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#mac_version IotwirelessDeviceProfile#mac_version}
  */
  readonly macVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#max_duty_cycle IotwirelessDeviceProfile#max_duty_cycle}
  */
  readonly maxDutyCycle?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#max_eirp IotwirelessDeviceProfile#max_eirp}
  */
  readonly maxEirp?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#ping_slot_dr IotwirelessDeviceProfile#ping_slot_dr}
  */
  readonly pingSlotDr?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#ping_slot_freq IotwirelessDeviceProfile#ping_slot_freq}
  */
  readonly pingSlotFreq?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#ping_slot_period IotwirelessDeviceProfile#ping_slot_period}
  */
  readonly pingSlotPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#reg_params_revision IotwirelessDeviceProfile#reg_params_revision}
  */
  readonly regParamsRevision?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#rf_region IotwirelessDeviceProfile#rf_region}
  */
  readonly rfRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#supports_32_bit_f_cnt IotwirelessDeviceProfile#supports_32_bit_f_cnt}
  */
  readonly supports32BitFCnt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#supports_class_b IotwirelessDeviceProfile#supports_class_b}
  */
  readonly supportsClassB?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#supports_class_c IotwirelessDeviceProfile#supports_class_c}
  */
  readonly supportsClassC?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#supports_join IotwirelessDeviceProfile#supports_join}
  */
  readonly supportsJoin?: boolean | cdktf.IResolvable;
}

export function iotwirelessDeviceProfileLoRaWanToTerraform(struct?: IotwirelessDeviceProfileLoRaWan): any {
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

export interface IotwirelessDeviceProfileTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#key IotwirelessDeviceProfile#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html#value IotwirelessDeviceProfile#value}
  */
  readonly value?: string;
}

export function iotwirelessDeviceProfileTagsToTerraform(struct?: IotwirelessDeviceProfileTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html awscc_iotwireless_device_profile}
*/
export class IotwirelessDeviceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotwireless_device_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html awscc_iotwireless_device_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotwirelessDeviceProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IotwirelessDeviceProfileConfig = {}) {
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
  private _loRaWan?: IotwirelessDeviceProfileLoRaWan;
  public get loRaWan() {
    return this.interpolationForAttribute('lo_ra_wan') as any;
  }
  public set loRaWan(value: IotwirelessDeviceProfileLoRaWan ) {
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
  private _tags?: IotwirelessDeviceProfileTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotwirelessDeviceProfileTags[] ) {
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
      lo_ra_wan: iotwirelessDeviceProfileLoRaWanToTerraform(this._loRaWan),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(iotwirelessDeviceProfileTagsToTerraform)(this._tags),
    };
  }
}
