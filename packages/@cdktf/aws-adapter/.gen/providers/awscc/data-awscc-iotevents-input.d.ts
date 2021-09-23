import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIoteventsInputConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotevents_input.html#id DataAwsccIoteventsInput#id}
    */
    readonly id: string;
}
export declare class DataAwsccIoteventsInputInputDefinitionAttributes extends cdktf.ComplexComputedList {
    get jsonPath(): string;
}
export declare function dataAwsccIoteventsInputInputDefinitionAttributesToTerraform(struct?: DataAwsccIoteventsInputInputDefinitionAttributes): any;
export declare class DataAwsccIoteventsInputInputDefinition extends cdktf.ComplexComputedList {
    get attributes(): any;
}
export declare function dataAwsccIoteventsInputInputDefinitionToTerraform(struct?: DataAwsccIoteventsInputInputDefinition): any;
export declare class DataAwsccIoteventsInputTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIoteventsInputTagsToTerraform(struct?: DataAwsccIoteventsInputTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotevents_input.html awscc_iotevents_input}
*/
export declare class DataAwsccIoteventsInput extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotevents_input.html awscc_iotevents_input} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIoteventsInputConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIoteventsInputConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get inputDefinition(): any;
    get inputDescription(): string;
    get inputName(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
