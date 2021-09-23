import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccFrauddetectorOutcomeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_outcome.html#id DataAwsccFrauddetectorOutcome#id}
    */
    readonly id: string;
}
export declare class DataAwsccFrauddetectorOutcomeTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFrauddetectorOutcomeTagsToTerraform(struct?: DataAwsccFrauddetectorOutcomeTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_outcome.html awscc_frauddetector_outcome}
*/
export declare class DataAwsccFrauddetectorOutcome extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_outcome.html awscc_frauddetector_outcome} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccFrauddetectorOutcomeConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccFrauddetectorOutcomeConfig);
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
