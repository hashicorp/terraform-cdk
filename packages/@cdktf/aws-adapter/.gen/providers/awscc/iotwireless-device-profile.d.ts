import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function iotwirelessDeviceProfileLoRaWanToTerraform(struct?: IotwirelessDeviceProfileLoRaWan): any;
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
export declare function iotwirelessDeviceProfileTagsToTerraform(struct?: IotwirelessDeviceProfileTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html awscc_iotwireless_device_profile}
*/
export declare class IotwirelessDeviceProfile extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_device_profile.html awscc_iotwireless_device_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotwirelessDeviceProfileConfig = {}
    */
    constructor(scope: Construct, id: string, config?: IotwirelessDeviceProfileConfig);
    get arn(): string;
    get id(): string;
    private _loRaWan?;
    get loRaWan(): IotwirelessDeviceProfileLoRaWan;
    set loRaWan(value: IotwirelessDeviceProfileLoRaWan);
    resetLoRaWan(): void;
    get loRaWanInput(): IotwirelessDeviceProfileLoRaWan | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _tags?;
    get tags(): IotwirelessDeviceProfileTags[];
    set tags(value: IotwirelessDeviceProfileTags[]);
    resetTags(): void;
    get tagsInput(): IotwirelessDeviceProfileTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
