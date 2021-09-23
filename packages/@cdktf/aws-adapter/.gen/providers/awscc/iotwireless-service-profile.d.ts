import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function iotwirelessServiceProfileLoRaWanToTerraform(struct?: IotwirelessServiceProfileLoRaWan): any;
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
export declare function iotwirelessServiceProfileTagsToTerraform(struct?: IotwirelessServiceProfileTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html awscc_iotwireless_service_profile}
*/
export declare class IotwirelessServiceProfile extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_service_profile.html awscc_iotwireless_service_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotwirelessServiceProfileConfig = {}
    */
    constructor(scope: Construct, id: string, config?: IotwirelessServiceProfileConfig);
    get arn(): string;
    get id(): string;
    private _loRaWan?;
    get loRaWan(): IotwirelessServiceProfileLoRaWan;
    set loRaWan(value: IotwirelessServiceProfileLoRaWan);
    resetLoRaWan(): void;
    get loRaWanInput(): IotwirelessServiceProfileLoRaWan | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _tags?;
    get tags(): IotwirelessServiceProfileTags[];
    set tags(value: IotwirelessServiceProfileTags[]);
    resetTags(): void;
    get tagsInput(): IotwirelessServiceProfileTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
