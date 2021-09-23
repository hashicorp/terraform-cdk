import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccFrauddetectorEntityTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_entity_type.html#id DataAwsccFrauddetectorEntityType#id}
    */
    readonly id: string;
}
export declare class DataAwsccFrauddetectorEntityTypeTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFrauddetectorEntityTypeTagsToTerraform(struct?: DataAwsccFrauddetectorEntityTypeTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_entity_type.html awscc_frauddetector_entity_type}
*/
export declare class DataAwsccFrauddetectorEntityType extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_entity_type.html awscc_frauddetector_entity_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccFrauddetectorEntityTypeConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccFrauddetectorEntityTypeConfig);
    get arn(): string;
    get createdTime(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastUpdatedTime(): string;
    get name(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
