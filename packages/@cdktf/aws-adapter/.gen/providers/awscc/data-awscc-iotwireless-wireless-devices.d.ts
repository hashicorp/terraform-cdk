import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotwirelessWirelessDevicesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_devices.html awscc_iotwireless_wireless_devices}
*/
export declare class DataAwsccIotwirelessWirelessDevices extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_devices.html awscc_iotwireless_wireless_devices} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotwirelessWirelessDevicesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIotwirelessWirelessDevicesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
