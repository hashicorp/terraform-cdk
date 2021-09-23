import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FrauddetectorLabelConfig extends cdktf.TerraformMetaArguments {
    /**
    * The label description.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_label.html#description FrauddetectorLabel#description}
    */
    readonly description?: string;
    /**
    * The name of the label.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_label.html#name FrauddetectorLabel#name}
    */
    readonly name: string;
    /**
    * Tags associated with this label.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_label.html#tags FrauddetectorLabel#tags}
    */
    readonly tags?: FrauddetectorLabelTags[];
}
export interface FrauddetectorLabelTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_label.html#key FrauddetectorLabel#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_label.html#value FrauddetectorLabel#value}
    */
    readonly value: string;
}
export declare function frauddetectorLabelTagsToTerraform(struct?: FrauddetectorLabelTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_label.html awscc_frauddetector_label}
*/
export declare class FrauddetectorLabel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_label.html awscc_frauddetector_label} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FrauddetectorLabelConfig
    */
    constructor(scope: Construct, id: string, config: FrauddetectorLabelConfig);
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
    get tags(): FrauddetectorLabelTags[];
    set tags(value: FrauddetectorLabelTags[]);
    resetTags(): void;
    get tagsInput(): FrauddetectorLabelTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
