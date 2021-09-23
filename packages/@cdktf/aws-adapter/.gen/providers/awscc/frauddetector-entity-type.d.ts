import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FrauddetectorEntityTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * The entity type description.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_entity_type.html#description FrauddetectorEntityType#description}
    */
    readonly description?: string;
    /**
    * The name of the entity type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_entity_type.html#name FrauddetectorEntityType#name}
    */
    readonly name: string;
    /**
    * Tags associated with this entity type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_entity_type.html#tags FrauddetectorEntityType#tags}
    */
    readonly tags?: FrauddetectorEntityTypeTags[];
}
export interface FrauddetectorEntityTypeTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_entity_type.html#key FrauddetectorEntityType#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_entity_type.html#value FrauddetectorEntityType#value}
    */
    readonly value: string;
}
export declare function frauddetectorEntityTypeTagsToTerraform(struct?: FrauddetectorEntityTypeTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_entity_type.html awscc_frauddetector_entity_type}
*/
export declare class FrauddetectorEntityType extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_entity_type.html awscc_frauddetector_entity_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FrauddetectorEntityTypeConfig
    */
    constructor(scope: Construct, id: string, config: FrauddetectorEntityTypeConfig);
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
    get tags(): FrauddetectorEntityTypeTags[];
    set tags(value: FrauddetectorEntityTypeTags[]);
    resetTags(): void;
    get tagsInput(): FrauddetectorEntityTypeTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
