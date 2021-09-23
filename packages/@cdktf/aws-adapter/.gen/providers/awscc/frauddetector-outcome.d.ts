import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FrauddetectorOutcomeConfig extends cdktf.TerraformMetaArguments {
    /**
    * The outcome description.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_outcome.html#description FrauddetectorOutcome#description}
    */
    readonly description?: string;
    /**
    * The name of the outcome.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_outcome.html#name FrauddetectorOutcome#name}
    */
    readonly name: string;
    /**
    * Tags associated with this outcome.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_outcome.html#tags FrauddetectorOutcome#tags}
    */
    readonly tags?: FrauddetectorOutcomeTags[];
}
export interface FrauddetectorOutcomeTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_outcome.html#key FrauddetectorOutcome#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_outcome.html#value FrauddetectorOutcome#value}
    */
    readonly value: string;
}
export declare function frauddetectorOutcomeTagsToTerraform(struct?: FrauddetectorOutcomeTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_outcome.html awscc_frauddetector_outcome}
*/
export declare class FrauddetectorOutcome extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_outcome.html awscc_frauddetector_outcome} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FrauddetectorOutcomeConfig
    */
    constructor(scope: Construct, id: string, config: FrauddetectorOutcomeConfig);
    get arn(): string;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get lastUpdatedTime(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _tags?;
    get tags(): FrauddetectorOutcomeTags[];
    set tags(value: FrauddetectorOutcomeTags[]);
    resetTags(): void;
    get tagsInput(): FrauddetectorOutcomeTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
