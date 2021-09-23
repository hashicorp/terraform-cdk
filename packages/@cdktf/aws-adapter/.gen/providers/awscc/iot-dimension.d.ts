import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotDimensionConfig extends cdktf.TerraformMetaArguments {
    /**
    * A unique identifier for the dimension.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html#name IotDimension#name}
    */
    readonly name?: string;
    /**
    * Specifies the value or list of values for the dimension.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html#string_values IotDimension#string_values}
    */
    readonly stringValues: string[];
    /**
    * Metadata that can be used to manage the dimension.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html#tags IotDimension#tags}
    */
    readonly tags?: IotDimensionTags[];
    /**
    * Specifies the type of the dimension.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html#type IotDimension#type}
    */
    readonly type: string;
}
export interface IotDimensionTags {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html#key IotDimension#key}
    */
    readonly key: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html#value IotDimension#value}
    */
    readonly value: string;
}
export declare function iotDimensionTagsToTerraform(struct?: IotDimensionTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html awscc_iot_dimension}
*/
export declare class IotDimension extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_dimension.html awscc_iot_dimension} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotDimensionConfig
    */
    constructor(scope: Construct, id: string, config: IotDimensionConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _stringValues;
    get stringValues(): string[];
    set stringValues(value: string[]);
    get stringValuesInput(): string[];
    private _tags?;
    get tags(): IotDimensionTags[];
    set tags(value: IotDimensionTags[]);
    resetTags(): void;
    get tagsInput(): IotDimensionTags[] | undefined;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
