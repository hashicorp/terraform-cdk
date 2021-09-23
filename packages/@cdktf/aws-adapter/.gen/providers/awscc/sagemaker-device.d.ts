import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerDeviceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Edge device you want to create
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#device SagemakerDevice#device}
    */
    readonly device?: SagemakerDeviceDevice;
    /**
    * The name of the edge device fleet
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#device_fleet_name SagemakerDevice#device_fleet_name}
    */
    readonly deviceFleetName: string;
    /**
    * Associate tags with the resource
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#tags SagemakerDevice#tags}
    */
    readonly tags?: SagemakerDeviceTags[];
}
export interface SagemakerDeviceDevice {
    /**
    * Description of the device
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#description SagemakerDevice#description}
    */
    readonly description?: string;
    /**
    * The name of the device
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#device_name SagemakerDevice#device_name}
    */
    readonly deviceName: string;
    /**
    * AWS Internet of Things (IoT) object name.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#iot_thing_name SagemakerDevice#iot_thing_name}
    */
    readonly iotThingName?: string;
}
export declare function sagemakerDeviceDeviceToTerraform(struct?: SagemakerDeviceDevice): any;
export interface SagemakerDeviceTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#key SagemakerDevice#key}
    */
    readonly key: string;
    /**
    * The key value of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html#value SagemakerDevice#value}
    */
    readonly value: string;
}
export declare function sagemakerDeviceTagsToTerraform(struct?: SagemakerDeviceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html awscc_sagemaker_device}
*/
export declare class SagemakerDevice extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_device.html awscc_sagemaker_device} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDeviceConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerDeviceConfig);
    private _device?;
    get device(): SagemakerDeviceDevice;
    set device(value: SagemakerDeviceDevice);
    resetDevice(): void;
    get deviceInput(): SagemakerDeviceDevice | undefined;
    private _deviceFleetName;
    get deviceFleetName(): string;
    set deviceFleetName(value: string);
    get deviceFleetNameInput(): string;
    get id(): string;
    private _tags?;
    get tags(): SagemakerDeviceTags[];
    set tags(value: SagemakerDeviceTags[]);
    resetTags(): void;
    get tagsInput(): SagemakerDeviceTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
