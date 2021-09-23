// https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_device.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotwirelessWirelessDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_device.html#id DataAwsccIotwirelessWirelessDevice#id}
  */
  readonly id: string;
}
export class DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys extends cdktf.ComplexComputedList {

  // app_s_key - computed: true, optional: false, required: false
  public get appSKey() {
    return this.getStringAttribute('app_s_key');
  }

  // nwk_s_key - computed: true, optional: false, required: false
  public get nwkSKey() {
    return this.getStringAttribute('nwk_s_key');
  }
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_s_key: cdktf.stringToTerraform(struct!.appSKey),
    nwk_s_key: cdktf.stringToTerraform(struct!.nwkSKey),
  }
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X extends cdktf.ComplexComputedList {

  // dev_addr - computed: true, optional: false, required: false
  public get devAddr() {
    return this.getStringAttribute('dev_addr');
  }

  // session_keys - computed: true, optional: false, required: false
  public get sessionKeys() {
    return this.interpolationForAttribute('session_keys') as any;
  }
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dev_addr: cdktf.stringToTerraform(struct!.devAddr),
    session_keys: dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysToTerraform(struct!.sessionKeys),
  }
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys extends cdktf.ComplexComputedList {

  // app_s_key - computed: true, optional: false, required: false
  public get appSKey() {
    return this.getStringAttribute('app_s_key');
  }

  // f_nwk_s_int_key - computed: true, optional: false, required: false
  public get fNwkSIntKey() {
    return this.getStringAttribute('f_nwk_s_int_key');
  }

  // nwk_s_enc_key - computed: true, optional: false, required: false
  public get nwkSEncKey() {
    return this.getStringAttribute('nwk_s_enc_key');
  }

  // s_nwk_s_int_key - computed: true, optional: false, required: false
  public get sNwkSIntKey() {
    return this.getStringAttribute('s_nwk_s_int_key');
  }
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_s_key: cdktf.stringToTerraform(struct!.appSKey),
    f_nwk_s_int_key: cdktf.stringToTerraform(struct!.fNwkSIntKey),
    nwk_s_enc_key: cdktf.stringToTerraform(struct!.nwkSEncKey),
    s_nwk_s_int_key: cdktf.stringToTerraform(struct!.sNwkSIntKey),
  }
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11 extends cdktf.ComplexComputedList {

  // dev_addr - computed: true, optional: false, required: false
  public get devAddr() {
    return this.getStringAttribute('dev_addr');
  }

  // session_keys - computed: true, optional: false, required: false
  public get sessionKeys() {
    return this.interpolationForAttribute('session_keys') as any;
  }
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11ToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dev_addr: cdktf.stringToTerraform(struct!.devAddr),
    session_keys: dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysToTerraform(struct!.sessionKeys),
  }
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X extends cdktf.ComplexComputedList {

  // app_eui - computed: true, optional: false, required: false
  public get appEui() {
    return this.getStringAttribute('app_eui');
  }

  // app_key - computed: true, optional: false, required: false
  public get appKey() {
    return this.getStringAttribute('app_key');
  }
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_eui: cdktf.stringToTerraform(struct!.appEui),
    app_key: cdktf.stringToTerraform(struct!.appKey),
  }
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11 extends cdktf.ComplexComputedList {

  // app_key - computed: true, optional: false, required: false
  public get appKey() {
    return this.getStringAttribute('app_key');
  }

  // join_eui - computed: true, optional: false, required: false
  public get joinEui() {
    return this.getStringAttribute('join_eui');
  }

  // nwk_key - computed: true, optional: false, required: false
  public get nwkKey() {
    return this.getStringAttribute('nwk_key');
  }
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11ToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_key: cdktf.stringToTerraform(struct!.appKey),
    join_eui: cdktf.stringToTerraform(struct!.joinEui),
    nwk_key: cdktf.stringToTerraform(struct!.nwkKey),
  }
}

export class DataAwsccIotwirelessWirelessDeviceLoRaWan extends cdktf.ComplexComputedList {

  // abp_v10_x - computed: true, optional: false, required: false
  public get abpV10X() {
    return this.interpolationForAttribute('abp_v10_x') as any;
  }

  // abp_v11 - computed: true, optional: false, required: false
  public get abpV11() {
    return this.interpolationForAttribute('abp_v11') as any;
  }

  // dev_eui - computed: true, optional: false, required: false
  public get devEui() {
    return this.getStringAttribute('dev_eui');
  }

  // device_profile_id - computed: true, optional: false, required: false
  public get deviceProfileId() {
    return this.getStringAttribute('device_profile_id');
  }

  // otaa_v10_x - computed: true, optional: false, required: false
  public get otaaV10X() {
    return this.interpolationForAttribute('otaa_v10_x') as any;
  }

  // otaa_v11 - computed: true, optional: false, required: false
  public get otaaV11() {
    return this.interpolationForAttribute('otaa_v11') as any;
  }

  // service_profile_id - computed: true, optional: false, required: false
  public get serviceProfileId() {
    return this.getStringAttribute('service_profile_id');
  }
}

export function dataAwsccIotwirelessWirelessDeviceLoRaWanToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    abp_v10_x: dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XToTerraform(struct!.abpV10X),
    abp_v11: dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11ToTerraform(struct!.abpV11),
    dev_eui: cdktf.stringToTerraform(struct!.devEui),
    device_profile_id: cdktf.stringToTerraform(struct!.deviceProfileId),
    otaa_v10_x: dataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XToTerraform(struct!.otaaV10X),
    otaa_v11: dataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11ToTerraform(struct!.otaaV11),
    service_profile_id: cdktf.stringToTerraform(struct!.serviceProfileId),
  }
}

export class DataAwsccIotwirelessWirelessDeviceTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotwirelessWirelessDeviceTagsToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_device.html awscc_iotwireless_wireless_device}
*/
export class DataAwsccIotwirelessWirelessDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotwireless_wireless_device";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_device.html awscc_iotwireless_wireless_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotwirelessWirelessDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotwirelessWirelessDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotwireless_wireless_device',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_name - computed: true, optional: false, required: false
  public get destinationName() {
    return this.getStringAttribute('destination_name');
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

  // last_uplink_received_at - computed: true, optional: false, required: false
  public get lastUplinkReceivedAt() {
    return this.getStringAttribute('last_uplink_received_at');
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

  // thing_arn - computed: true, optional: false, required: false
  public get thingArn() {
    return this.getStringAttribute('thing_arn');
  }

  // thing_name - computed: true, optional: false, required: false
  public get thingName() {
    return this.getStringAttribute('thing_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
