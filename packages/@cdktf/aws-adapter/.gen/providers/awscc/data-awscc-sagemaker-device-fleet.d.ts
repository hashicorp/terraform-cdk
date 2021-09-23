import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerDeviceFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_device_fleet.html#id DataAwsccSagemakerDeviceFleet#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerDeviceFleetOutputConfig extends cdktf.ComplexComputedList {
    get kmsKeyId(): string;
    get s3OutputLocation(): string;
}
export declare function dataAwsccSagemakerDeviceFleetOutputConfigToTerraform(struct?: DataAwsccSagemakerDeviceFleetOutputConfig): any;
export declare class DataAwsccSagemakerDeviceFleetTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerDeviceFleetTagsToTerraform(struct?: DataAwsccSagemakerDeviceFleetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_device_fleet.html awscc_sagemaker_device_fleet}
*/
export declare class DataAwsccSagemakerDeviceFleet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_device_fleet.html awscc_sagemaker_device_fleet} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerDeviceFleetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerDeviceFleetConfig);
    get description(): string;
    get deviceFleetName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get outputConfig(): any;
    get roleArn(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
