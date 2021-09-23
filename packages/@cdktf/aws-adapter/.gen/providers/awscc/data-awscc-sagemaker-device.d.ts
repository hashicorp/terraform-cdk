import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerDeviceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_device.html#id DataAwsccSagemakerDevice#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerDeviceDevice extends cdktf.ComplexComputedList {
    get description(): string;
    get deviceName(): string;
    get iotThingName(): string;
}
export declare function dataAwsccSagemakerDeviceDeviceToTerraform(struct?: DataAwsccSagemakerDeviceDevice): any;
export declare class DataAwsccSagemakerDeviceTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerDeviceTagsToTerraform(struct?: DataAwsccSagemakerDeviceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_device.html awscc_sagemaker_device}
*/
export declare class DataAwsccSagemakerDevice extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_device.html awscc_sagemaker_device} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerDeviceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerDeviceConfig);
    get device(): any;
    get deviceFleetName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
