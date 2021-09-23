import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccFrauddetectorVariableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_variable.html#id DataAwsccFrauddetectorVariable#id}
    */
    readonly id: string;
}
export declare class DataAwsccFrauddetectorVariableTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFrauddetectorVariableTagsToTerraform(struct?: DataAwsccFrauddetectorVariableTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_variable.html awscc_frauddetector_variable}
*/
export declare class DataAwsccFrauddetectorVariable extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_variable.html awscc_frauddetector_variable} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccFrauddetectorVariableConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccFrauddetectorVariableConfig);
    get arn(): string;
    get createdTime(): string;
    get dataSource(): string;
    get dataType(): string;
    get defaultValue(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastUpdatedTime(): string;
    get name(): string;
    get tags(): any;
    get variableType(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
