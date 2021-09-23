import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function iotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysToTerraform(struct?: IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys): any;
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
export declare function iotwirelessWirelessDeviceLoRaWanAbpV10XToTerraform(struct?: IotwirelessWirelessDeviceLoRaWanAbpV10X): any;
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
export declare function iotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysToTerraform(struct?: IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys): any;
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
export declare function iotwirelessWirelessDeviceLoRaWanAbpV11ToTerraform(struct?: IotwirelessWirelessDeviceLoRaWanAbpV11): any;
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
export declare function iotwirelessWirelessDeviceLoRaWanOtaaV10XToTerraform(struct?: IotwirelessWirelessDeviceLoRaWanOtaaV10X): any;
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
export declare function iotwirelessWirelessDeviceLoRaWanOtaaV11ToTerraform(struct?: IotwirelessWirelessDeviceLoRaWanOtaaV11): any;
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
export declare function iotwirelessWirelessDeviceLoRaWanToTerraform(struct?: IotwirelessWirelessDeviceLoRaWan): any;
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
export declare function iotwirelessWirelessDeviceTagsToTerraform(struct?: IotwirelessWirelessDeviceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html awscc_iotwireless_wireless_device}
*/
export declare class IotwirelessWirelessDevice extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_device.html awscc_iotwireless_wireless_device} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotwirelessWirelessDeviceConfig
    */
    constructor(scope: Construct, id: string, config: IotwirelessWirelessDeviceConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _destinationName;
    get destinationName(): string;
    set destinationName(value: string);
    get destinationNameInput(): string;
    get id(): string;
    private _lastUplinkReceivedAt?;
    get lastUplinkReceivedAt(): string;
    set lastUplinkReceivedAt(value: string);
    resetLastUplinkReceivedAt(): void;
    get lastUplinkReceivedAtInput(): string | undefined;
    private _loRaWan?;
    get loRaWan(): IotwirelessWirelessDeviceLoRaWan;
    set loRaWan(value: IotwirelessWirelessDeviceLoRaWan);
    resetLoRaWan(): void;
    get loRaWanInput(): IotwirelessWirelessDeviceLoRaWan | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _tags?;
    get tags(): IotwirelessWirelessDeviceTags[];
    set tags(value: IotwirelessWirelessDeviceTags[]);
    resetTags(): void;
    get tagsInput(): IotwirelessWirelessDeviceTags[] | undefined;
    private _thingArn?;
    get thingArn(): string;
    set thingArn(value: string);
    resetThingArn(): void;
    get thingArnInput(): string | undefined;
    get thingName(): string;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
