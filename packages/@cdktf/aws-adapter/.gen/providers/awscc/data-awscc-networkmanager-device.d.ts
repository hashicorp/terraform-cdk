import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNetworkmanagerDeviceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_device.html#id DataAwsccNetworkmanagerDevice#id}
    */
    readonly id: string;
}
export declare class DataAwsccNetworkmanagerDeviceLocation extends cdktf.ComplexComputedList {
    get address(): string;
    get latitude(): string;
    get longitude(): string;
}
export declare function dataAwsccNetworkmanagerDeviceLocationToTerraform(struct?: DataAwsccNetworkmanagerDeviceLocation): any;
export declare class DataAwsccNetworkmanagerDeviceTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccNetworkmanagerDeviceTagsToTerraform(struct?: DataAwsccNetworkmanagerDeviceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_device.html awscc_networkmanager_device}
*/
export declare class DataAwsccNetworkmanagerDevice extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_device.html awscc_networkmanager_device} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNetworkmanagerDeviceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccNetworkmanagerDeviceConfig);
    get description(): string;
    get deviceArn(): string;
    get deviceId(): string;
    get globalNetworkId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get location(): any;
    get model(): string;
    get serialNumber(): string;
    get siteId(): string;
    get tags(): any;
    get type(): string;
    get vendor(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
