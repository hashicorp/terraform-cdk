import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerDeviceConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the device.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#description NetworkmanagerDevice#description}
    */
    readonly description?: string;
    /**
    * The ID of the global network.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#global_network_id NetworkmanagerDevice#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * The site location.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#location NetworkmanagerDevice#location}
    */
    readonly location?: NetworkmanagerDeviceLocation;
    /**
    * The device model
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#model NetworkmanagerDevice#model}
    */
    readonly model?: string;
    /**
    * The device serial number.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#serial_number NetworkmanagerDevice#serial_number}
    */
    readonly serialNumber?: string;
    /**
    * The site ID.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#site_id NetworkmanagerDevice#site_id}
    */
    readonly siteId?: string;
    /**
    * The tags for the device.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#tags NetworkmanagerDevice#tags}
    */
    readonly tags?: NetworkmanagerDeviceTags[];
    /**
    * The device type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#type NetworkmanagerDevice#type}
    */
    readonly type?: string;
    /**
    * The device vendor.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#vendor NetworkmanagerDevice#vendor}
    */
    readonly vendor?: string;
}
export interface NetworkmanagerDeviceLocation {
    /**
    * The physical address.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#address NetworkmanagerDevice#address}
    */
    readonly address?: string;
    /**
    * The latitude.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#latitude NetworkmanagerDevice#latitude}
    */
    readonly latitude?: string;
    /**
    * The longitude.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#longitude NetworkmanagerDevice#longitude}
    */
    readonly longitude?: string;
}
export declare function networkmanagerDeviceLocationToTerraform(struct?: NetworkmanagerDeviceLocation): any;
export interface NetworkmanagerDeviceTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#key NetworkmanagerDevice#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html#value NetworkmanagerDevice#value}
    */
    readonly value?: string;
}
export declare function networkmanagerDeviceTagsToTerraform(struct?: NetworkmanagerDeviceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html awscc_networkmanager_device}
*/
export declare class NetworkmanagerDevice extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_device.html awscc_networkmanager_device} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerDeviceConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerDeviceConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get deviceArn(): string;
    get deviceId(): string;
    private _globalNetworkId;
    get globalNetworkId(): string;
    set globalNetworkId(value: string);
    get globalNetworkIdInput(): string;
    get id(): string;
    private _location?;
    get location(): NetworkmanagerDeviceLocation;
    set location(value: NetworkmanagerDeviceLocation);
    resetLocation(): void;
    get locationInput(): NetworkmanagerDeviceLocation | undefined;
    private _model?;
    get model(): string;
    set model(value: string);
    resetModel(): void;
    get modelInput(): string | undefined;
    private _serialNumber?;
    get serialNumber(): string;
    set serialNumber(value: string);
    resetSerialNumber(): void;
    get serialNumberInput(): string | undefined;
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
    resetSiteId(): void;
    get siteIdInput(): string | undefined;
    private _tags?;
    get tags(): NetworkmanagerDeviceTags[];
    set tags(value: NetworkmanagerDeviceTags[]);
    resetTags(): void;
    get tagsInput(): NetworkmanagerDeviceTags[] | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _vendor?;
    get vendor(): string;
    set vendor(value: string);
    resetVendor(): void;
    get vendorInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
