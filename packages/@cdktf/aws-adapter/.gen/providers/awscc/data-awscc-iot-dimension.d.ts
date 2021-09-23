import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotDimensionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_dimension.html#id DataAwsccIotDimension#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotDimensionTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotDimensionTagsToTerraform(struct?: DataAwsccIotDimensionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_dimension.html awscc_iot_dimension}
*/
export declare class DataAwsccIotDimension extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_dimension.html awscc_iot_dimension} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotDimensionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotDimensionConfig);
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get stringValues(): string[];
    get tags(): any;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
