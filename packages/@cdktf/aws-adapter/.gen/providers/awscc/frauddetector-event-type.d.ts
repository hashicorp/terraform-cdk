import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FrauddetectorEventTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the event type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#description FrauddetectorEventType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#entity_types FrauddetectorEventType#entity_types}
    */
    readonly entityTypes: FrauddetectorEventTypeEntityTypes[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#event_variables FrauddetectorEventType#event_variables}
    */
    readonly eventVariables: FrauddetectorEventTypeEventVariables[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#labels FrauddetectorEventType#labels}
    */
    readonly labels: FrauddetectorEventTypeLabels[];
    /**
    * The name for the event type
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#name FrauddetectorEventType#name}
    */
    readonly name: string;
    /**
    * Tags associated with this event type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#tags FrauddetectorEventType#tags}
    */
    readonly tags?: FrauddetectorEventTypeTags[];
}
export interface FrauddetectorEventTypeEntityTypesTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#key FrauddetectorEventType#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#value FrauddetectorEventType#value}
    */
    readonly value: string;
}
export declare function frauddetectorEventTypeEntityTypesTagsToTerraform(struct?: FrauddetectorEventTypeEntityTypesTags): any;
export interface FrauddetectorEventTypeEntityTypes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#arn FrauddetectorEventType#arn}
    */
    readonly arn?: string;
    /**
    * The time when the event type was created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#created_time FrauddetectorEventType#created_time}
    */
    readonly createdTime?: string;
    /**
    * The description.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#description FrauddetectorEventType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#inline FrauddetectorEventType#inline}
    */
    readonly inline?: boolean | cdktf.IResolvable;
    /**
    * The time when the event type was last updated.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#last_updated_time FrauddetectorEventType#last_updated_time}
    */
    readonly lastUpdatedTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#name FrauddetectorEventType#name}
    */
    readonly name?: string;
    /**
    * Tags associated with this event type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#tags FrauddetectorEventType#tags}
    */
    readonly tags?: FrauddetectorEventTypeEntityTypesTags[];
}
export declare function frauddetectorEventTypeEntityTypesToTerraform(struct?: FrauddetectorEventTypeEntityTypes): any;
export interface FrauddetectorEventTypeEventVariablesTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#key FrauddetectorEventType#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#value FrauddetectorEventType#value}
    */
    readonly value: string;
}
export declare function frauddetectorEventTypeEventVariablesTagsToTerraform(struct?: FrauddetectorEventTypeEventVariablesTags): any;
export interface FrauddetectorEventTypeEventVariables {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#arn FrauddetectorEventType#arn}
    */
    readonly arn?: string;
    /**
    * The time when the event type was created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#created_time FrauddetectorEventType#created_time}
    */
    readonly createdTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#data_source FrauddetectorEventType#data_source}
    */
    readonly dataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#data_type FrauddetectorEventType#data_type}
    */
    readonly dataType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#default_value FrauddetectorEventType#default_value}
    */
    readonly defaultValue?: string;
    /**
    * The description.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#description FrauddetectorEventType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#inline FrauddetectorEventType#inline}
    */
    readonly inline?: boolean | cdktf.IResolvable;
    /**
    * The time when the event type was last updated.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#last_updated_time FrauddetectorEventType#last_updated_time}
    */
    readonly lastUpdatedTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#name FrauddetectorEventType#name}
    */
    readonly name?: string;
    /**
    * Tags associated with this event type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#tags FrauddetectorEventType#tags}
    */
    readonly tags?: FrauddetectorEventTypeEventVariablesTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#variable_type FrauddetectorEventType#variable_type}
    */
    readonly variableType?: string;
}
export declare function frauddetectorEventTypeEventVariablesToTerraform(struct?: FrauddetectorEventTypeEventVariables): any;
export interface FrauddetectorEventTypeLabelsTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#key FrauddetectorEventType#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#value FrauddetectorEventType#value}
    */
    readonly value: string;
}
export declare function frauddetectorEventTypeLabelsTagsToTerraform(struct?: FrauddetectorEventTypeLabelsTags): any;
export interface FrauddetectorEventTypeLabels {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#arn FrauddetectorEventType#arn}
    */
    readonly arn?: string;
    /**
    * The time when the event type was created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#created_time FrauddetectorEventType#created_time}
    */
    readonly createdTime?: string;
    /**
    * The description.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#description FrauddetectorEventType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#inline FrauddetectorEventType#inline}
    */
    readonly inline?: boolean | cdktf.IResolvable;
    /**
    * The time when the event type was last updated.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#last_updated_time FrauddetectorEventType#last_updated_time}
    */
    readonly lastUpdatedTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#name FrauddetectorEventType#name}
    */
    readonly name?: string;
    /**
    * Tags associated with this event type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#tags FrauddetectorEventType#tags}
    */
    readonly tags?: FrauddetectorEventTypeLabelsTags[];
}
export declare function frauddetectorEventTypeLabelsToTerraform(struct?: FrauddetectorEventTypeLabels): any;
export interface FrauddetectorEventTypeTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#key FrauddetectorEventType#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html#value FrauddetectorEventType#value}
    */
    readonly value: string;
}
export declare function frauddetectorEventTypeTagsToTerraform(struct?: FrauddetectorEventTypeTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html awscc_frauddetector_event_type}
*/
export declare class FrauddetectorEventType extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_event_type.html awscc_frauddetector_event_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FrauddetectorEventTypeConfig
    */
    constructor(scope: Construct, id: string, config: FrauddetectorEventTypeConfig);
    get arn(): string;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _entityTypes;
    get entityTypes(): FrauddetectorEventTypeEntityTypes[];
    set entityTypes(value: FrauddetectorEventTypeEntityTypes[]);
    get entityTypesInput(): FrauddetectorEventTypeEntityTypes[];
    private _eventVariables;
    get eventVariables(): FrauddetectorEventTypeEventVariables[];
    set eventVariables(value: FrauddetectorEventTypeEventVariables[]);
    get eventVariablesInput(): FrauddetectorEventTypeEventVariables[];
    get id(): string;
    private _labels;
    get labels(): FrauddetectorEventTypeLabels[];
    set labels(value: FrauddetectorEventTypeLabels[]);
    get labelsInput(): FrauddetectorEventTypeLabels[];
    get lastUpdatedTime(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _tags?;
    get tags(): FrauddetectorEventTypeTags[];
    set tags(value: FrauddetectorEventTypeTags[]);
    resetTags(): void;
    get tagsInput(): FrauddetectorEventTypeTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
