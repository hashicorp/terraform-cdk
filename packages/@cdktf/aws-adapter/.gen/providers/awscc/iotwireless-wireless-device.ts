// https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotwirelessWirelessDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Wireless device description
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#description IotwirelessWirelessDevice#description}
  */
  readonly description?: string;
  /**
  * Wireless device destination name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#destination_name IotwirelessWirelessDevice#destination_name}
  */
  readonly destinationName: string;
  /**
  * The date and time when the most recent uplink was received.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#last_uplink_received_at IotwirelessWirelessDevice#last_uplink_received_at}
  */
  readonly lastUplinkReceivedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#lo_ra_wan IotwirelessWirelessDevice#lo_ra_wan}
  */
  readonly loRaWan?: IotwirelessWirelessDeviceLoRaWan;
  /**
  * Wireless device name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#name IotwirelessWirelessDevice#name}
  */
  readonly name?: string;
  /**
  * A list of key-value pairs that contain metadata for the device. Currently not supported, will not create if tags are passed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#tags IotwirelessWirelessDevice#tags}
  */
  readonly tags?: IotwirelessWirelessDeviceTags[];
  /**
  * Thing arn. Passed into update to associate Thing with Wireless device.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#thing_arn IotwirelessWirelessDevice#thing_arn}
  */
  readonly thingArn?: string;
  /**
  * Wireless device type, currently only Sidewalk and LoRa
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#type IotwirelessWirelessDevice#type}
  */
  readonly type: string;
}
export interface IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#app_s_key IotwirelessWirelessDevice#app_s_key}
  */
  readonly appSKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#nwk_s_key IotwirelessWirelessDevice#nwk_s_key}
  */
  readonly nwkSKey: string;
}

export function iotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysToTerraform(struct?: IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_s_key: cdktf.stringToTerraform(struct!.appSKey),
    nwk_s_key: cdktf.stringToTerraform(struct!.nwkSKey),
  }
}

export interface IotwirelessWirelessDeviceLoRaWanAbpV10X {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#dev_addr IotwirelessWirelessDevice#dev_addr}
  */
  readonly devAddr: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#session_keys IotwirelessWirelessDevice#session_keys}
  */
  readonly sessionKeys: IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys;
}

export function iotwirelessWirelessDeviceLoRaWanAbpV10XToTerraform(struct?: IotwirelessWirelessDeviceLoRaWanAbpV10X): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dev_addr: cdktf.stringToTerraform(struct!.devAddr),
    session_keys: iotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysToTerraform(struct!.sessionKeys),
  }
}

export interface IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#app_s_key IotwirelessWirelessDevice#app_s_key}
  */
  readonly appSKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#f_nwk_s_int_key IotwirelessWirelessDevice#f_nwk_s_int_key}
  */
  readonly fNwkSIntKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#nwk_s_enc_key IotwirelessWirelessDevice#nwk_s_enc_key}
  */
  readonly nwkSEncKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#s_nwk_s_int_key IotwirelessWirelessDevice#s_nwk_s_int_key}
  */
  readonly sNwkSIntKey: string;
}

export function iotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysToTerraform(struct?: IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_s_key: cdktf.stringToTerraform(struct!.appSKey),
    f_nwk_s_int_key: cdktf.stringToTerraform(struct!.fNwkSIntKey),
    nwk_s_enc_key: cdktf.stringToTerraform(struct!.nwkSEncKey),
    s_nwk_s_int_key: cdktf.stringToTerraform(struct!.sNwkSIntKey),
  }
}

export interface IotwirelessWirelessDeviceLoRaWanAbpV11 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#dev_addr IotwirelessWirelessDevice#dev_addr}
  */
  readonly devAddr: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#session_keys IotwirelessWirelessDevice#session_keys}
  */
  readonly sessionKeys: IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys;
}

export function iotwirelessWirelessDeviceLoRaWanAbpV11ToTerraform(struct?: IotwirelessWirelessDeviceLoRaWanAbpV11): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dev_addr: cdktf.stringToTerraform(struct!.devAddr),
    session_keys: iotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysToTerraform(struct!.sessionKeys),
  }
}

export interface IotwirelessWirelessDeviceLoRaWanOtaaV10X {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#app_eui IotwirelessWirelessDevice#app_eui}
  */
  readonly appEui: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#app_key IotwirelessWirelessDevice#app_key}
  */
  readonly appKey: string;
}

export function iotwirelessWirelessDeviceLoRaWanOtaaV10XToTerraform(struct?: IotwirelessWirelessDeviceLoRaWanOtaaV10X): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_eui: cdktf.stringToTerraform(struct!.appEui),
    app_key: cdktf.stringToTerraform(struct!.appKey),
  }
}

export interface IotwirelessWirelessDeviceLoRaWanOtaaV11 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#app_key IotwirelessWirelessDevice#app_key}
  */
  readonly appKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#join_eui IotwirelessWirelessDevice#join_eui}
  */
  readonly joinEui: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#nwk_key IotwirelessWirelessDevice#nwk_key}
  */
  readonly nwkKey: string;
}

export function iotwirelessWirelessDeviceLoRaWanOtaaV11ToTerraform(struct?: IotwirelessWirelessDeviceLoRaWanOtaaV11): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_key: cdktf.stringToTerraform(struct!.appKey),
    join_eui: cdktf.stringToTerraform(struct!.joinEui),
    nwk_key: cdktf.stringToTerraform(struct!.nwkKey),
  }
}

export interface IotwirelessWirelessDeviceLoRaWan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#abp_v10_x IotwirelessWirelessDevice#abp_v10_x}
  */
  readonly abpV10X?: IotwirelessWirelessDeviceLoRaWanAbpV10X;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#abp_v11 IotwirelessWirelessDevice#abp_v11}
  */
  readonly abpV11?: IotwirelessWirelessDeviceLoRaWanAbpV11;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#dev_eui IotwirelessWirelessDevice#dev_eui}
  */
  readonly devEui?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#device_profile_id IotwirelessWirelessDevice#device_profile_id}
  */
  readonly deviceProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#otaa_v10_x IotwirelessWirelessDevice#otaa_v10_x}
  */
  readonly otaaV10X?: IotwirelessWirelessDeviceLoRaWanOtaaV10X;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#otaa_v11 IotwirelessWirelessDevice#otaa_v11}
  */
  readonly otaaV11?: IotwirelessWirelessDeviceLoRaWanOtaaV11;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#service_profile_id IotwirelessWirelessDevice#service_profile_id}
  */
  readonly serviceProfileId?: string;
}

export function iotwirelessWirelessDeviceLoRaWanToTerraform(struct?: IotwirelessWirelessDeviceLoRaWan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    abp_v10_x: iotwirelessWirelessDeviceLoRaWanAbpV10XToTerraform(struct!.abpV10X),
    abp_v11: iotwirelessWirelessDeviceLoRaWanAbpV11ToTerraform(struct!.abpV11),
    dev_eui: cdktf.stringToTerraform(struct!.devEui),
    device_profile_id: cdktf.stringToTerraform(struct!.deviceProfileId),
    otaa_v10_x: iotwirelessWirelessDeviceLoRaWanOtaaV10XToTerraform(struct!.otaaV10X),
    otaa_v11: iotwirelessWirelessDeviceLoRaWanOtaaV11ToTerraform(struct!.otaaV11),
    service_profile_id: cdktf.stringToTerraform(struct!.serviceProfileId),
  }
}

export interface IotwirelessWirelessDeviceTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#key IotwirelessWirelessDevice#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html#value IotwirelessWirelessDevice#value}
  */
  readonly value?: string;
}

export function iotwirelessWirelessDeviceTagsToTerraform(struct?: IotwirelessWirelessDeviceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html awscc_iotwireless_wireless_device}
*/
export class IotwirelessWirelessDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotwireless_wireless_device";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html awscc_iotwireless_wireless_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotwirelessWirelessDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: IotwirelessWirelessDeviceConfig) {
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
    this._description = config.description;
    this._destinationName = config.destinationName;
    this._lastUplinkReceivedAt = config.lastUplinkReceivedAt;
    this._loRaWan = config.loRaWan;
    this._name = config.name;
    this._tags = config.tags;
    this._thingArn = config.thingArn;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

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

  // destination_name - computed: false, optional: false, required: true
  private _destinationName: string;
  public get destinationName() {
    return this.getStringAttribute('destination_name');
  }
  public set destinationName(value: string) {
    this._destinationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNameInput() {
    return this._destinationName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_uplink_received_at - computed: false, optional: true, required: false
  private _lastUplinkReceivedAt?: string;
  public get lastUplinkReceivedAt() {
    return this.getStringAttribute('last_uplink_received_at');
  }
  public set lastUplinkReceivedAt(value: string ) {
    this._lastUplinkReceivedAt = value;
  }
  public resetLastUplinkReceivedAt() {
    this._lastUplinkReceivedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUplinkReceivedAtInput() {
    return this._lastUplinkReceivedAt
  }

  // lo_ra_wan - computed: false, optional: true, required: false
  private _loRaWan?: IotwirelessWirelessDeviceLoRaWan;
  public get loRaWan() {
    return this.interpolationForAttribute('lo_ra_wan') as any;
  }
  public set loRaWan(value: IotwirelessWirelessDeviceLoRaWan ) {
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
  private _tags?: IotwirelessWirelessDeviceTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotwirelessWirelessDeviceTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // thing_arn - computed: false, optional: true, required: false
  private _thingArn?: string;
  public get thingArn() {
    return this.getStringAttribute('thing_arn');
  }
  public set thingArn(value: string ) {
    this._thingArn = value;
  }
  public resetThingArn() {
    this._thingArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingArnInput() {
    return this._thingArn
  }

  // thing_name - computed: true, optional: false, required: false
  public get thingName() {
    return this.getStringAttribute('thing_name');
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination_name: cdktf.stringToTerraform(this._destinationName),
      last_uplink_received_at: cdktf.stringToTerraform(this._lastUplinkReceivedAt),
      lo_ra_wan: iotwirelessWirelessDeviceLoRaWanToTerraform(this._loRaWan),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(iotwirelessWirelessDeviceTagsToTerraform)(this._tags),
      thing_arn: cdktf.stringToTerraform(this._thingArn),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
