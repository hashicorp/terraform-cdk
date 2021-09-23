import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotwirelessWirelessDeviceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_device.html#id DataAwsccIotwirelessWirelessDevice#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys extends cdktf.ComplexComputedList {
    get appSKey(): string;
    get nwkSKey(): string;
}
export declare function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys): any;
export declare class DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X extends cdktf.ComplexComputedList {
    get devAddr(): string;
    get sessionKeys(): any;
}
export declare function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X): any;
export declare class DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys extends cdktf.ComplexComputedList {
    get appSKey(): string;
    get fNwkSIntKey(): string;
    get nwkSEncKey(): string;
    get sNwkSIntKey(): string;
}
export declare function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys): any;
export declare class DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11 extends cdktf.ComplexComputedList {
    get devAddr(): string;
    get sessionKeys(): any;
}
export declare function dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11ToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11): any;
export declare class DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X extends cdktf.ComplexComputedList {
    get appEui(): string;
    get appKey(): string;
}
export declare function dataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X): any;
export declare class DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11 extends cdktf.ComplexComputedList {
    get appKey(): string;
    get joinEui(): string;
    get nwkKey(): string;
}
export declare function dataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11ToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11): any;
export declare class DataAwsccIotwirelessWirelessDeviceLoRaWan extends cdktf.ComplexComputedList {
    get abpV10X(): any;
    get abpV11(): any;
    get devEui(): string;
    get deviceProfileId(): string;
    get otaaV10X(): any;
    get otaaV11(): any;
    get serviceProfileId(): string;
}
export declare function dataAwsccIotwirelessWirelessDeviceLoRaWanToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceLoRaWan): any;
export declare class DataAwsccIotwirelessWirelessDeviceTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotwirelessWirelessDeviceTagsToTerraform(struct?: DataAwsccIotwirelessWirelessDeviceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_device.html awscc_iotwireless_wireless_device}
*/
export declare class DataAwsccIotwirelessWirelessDevice extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_device.html awscc_iotwireless_wireless_device} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotwirelessWirelessDeviceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotwirelessWirelessDeviceConfig);
    get arn(): string;
    get description(): string;
    get destinationName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastUplinkReceivedAt(): string;
    get loRaWan(): any;
    get name(): string;
    get tags(): any;
    get thingArn(): string;
    get thingName(): string;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
