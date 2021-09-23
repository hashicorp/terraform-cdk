import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotwirelessServiceProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_service_profile.html#id DataAwsccIotwirelessServiceProfile#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotwirelessServiceProfileLoRaWan extends cdktf.ComplexComputedList {
    get addGwMetadata(): any;
    get channelMask(): string;
    get devStatusReqFreq(): number;
    get dlBucketSize(): number;
    get dlRate(): number;
    get dlRatePolicy(): string;
    get drMax(): number;
    get drMin(): number;
    get hrAllowed(): any;
    get minGwDiversity(): number;
    get nwkGeoLoc(): any;
    get prAllowed(): any;
    get raAllowed(): any;
    get reportDevStatusBattery(): any;
    get reportDevStatusMargin(): any;
    get targetPer(): number;
    get ulBucketSize(): number;
    get ulRate(): number;
    get ulRatePolicy(): string;
}
export declare function dataAwsccIotwirelessServiceProfileLoRaWanToTerraform(struct?: DataAwsccIotwirelessServiceProfileLoRaWan): any;
export declare class DataAwsccIotwirelessServiceProfileTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotwirelessServiceProfileTagsToTerraform(struct?: DataAwsccIotwirelessServiceProfileTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_service_profile.html awscc_iotwireless_service_profile}
*/
export declare class DataAwsccIotwirelessServiceProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_service_profile.html awscc_iotwireless_service_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotwirelessServiceProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotwirelessServiceProfileConfig);
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
