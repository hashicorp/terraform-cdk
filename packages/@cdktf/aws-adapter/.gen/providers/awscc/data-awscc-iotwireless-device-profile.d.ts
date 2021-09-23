import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotwirelessDeviceProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_device_profile.html#id DataAwsccIotwirelessDeviceProfile#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotwirelessDeviceProfileLoRaWan extends cdktf.ComplexComputedList {
    get classBTimeout(): number;
    get classCTimeout(): number;
    get macVersion(): string;
    get maxDutyCycle(): number;
    get maxEirp(): number;
    get pingSlotDr(): number;
    get pingSlotFreq(): number;
    get pingSlotPeriod(): number;
    get regParamsRevision(): string;
    get rfRegion(): string;
    get supports32BitFCnt(): any;
    get supportsClassB(): any;
    get supportsClassC(): any;
    get supportsJoin(): any;
}
export declare function dataAwsccIotwirelessDeviceProfileLoRaWanToTerraform(struct?: DataAwsccIotwirelessDeviceProfileLoRaWan): any;
export declare class DataAwsccIotwirelessDeviceProfileTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotwirelessDeviceProfileTagsToTerraform(struct?: DataAwsccIotwirelessDeviceProfileTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_device_profile.html awscc_iotwireless_device_profile}
*/
export declare class DataAwsccIotwirelessDeviceProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_device_profile.html awscc_iotwireless_device_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotwirelessDeviceProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotwirelessDeviceProfileConfig);
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get loRaWan(): any;
    get name(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
