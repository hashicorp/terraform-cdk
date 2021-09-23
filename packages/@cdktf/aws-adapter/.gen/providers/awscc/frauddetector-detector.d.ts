import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FrauddetectorDetectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * The models to associate with this detector.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#associated_models FrauddetectorDetector#associated_models}
    */
    readonly associatedModels?: FrauddetectorDetectorAssociatedModels[];
    /**
    * The description of the detector.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#description FrauddetectorDetector#description}
    */
    readonly description?: string;
    /**
    * The ID of the detector
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#detector_id FrauddetectorDetector#detector_id}
    */
    readonly detectorId: string;
    /**
    * The desired detector version status for the detector
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#detector_version_status FrauddetectorDetector#detector_version_status}
    */
    readonly detectorVersionStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#event_type FrauddetectorDetector#event_type}
    */
    readonly eventType: FrauddetectorDetectorEventType;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#rule_execution_mode FrauddetectorDetector#rule_execution_mode}
    */
    readonly ruleExecutionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#rules FrauddetectorDetector#rules}
    */
    readonly rules: FrauddetectorDetectorRules[];
    /**
    * Tags associated with this detector.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#tags FrauddetectorDetector#tags}
    */
    readonly tags?: FrauddetectorDetectorTags[];
}
export interface FrauddetectorDetectorAssociatedModels {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#arn FrauddetectorDetector#arn}
    */
    readonly arn?: string;
}
export declare function frauddetectorDetectorAssociatedModelsToTerraform(struct?: FrauddetectorDetectorAssociatedModels): any;
export interface FrauddetectorDetectorEventTypeEntityTypesTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#key FrauddetectorDetector#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#value FrauddetectorDetector#value}
    */
    readonly value: string;
}
export declare function frauddetectorDetectorEventTypeEntityTypesTagsToTerraform(struct?: FrauddetectorDetectorEventTypeEntityTypesTags): any;
export interface FrauddetectorDetectorEventTypeEntityTypes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#arn FrauddetectorDetector#arn}
    */
    readonly arn?: string;
    /**
    * The time when the entity type was created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#created_time FrauddetectorDetector#created_time}
    */
    readonly createdTime?: string;
    /**
    * The description.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#description FrauddetectorDetector#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#inline FrauddetectorDetector#inline}
    */
    readonly inline?: boolean | cdktf.IResolvable;
    /**
    * The time when the entity type was last updated.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#last_updated_time FrauddetectorDetector#last_updated_time}
    */
    readonly lastUpdatedTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#name FrauddetectorDetector#name}
    */
    readonly name?: string;
    /**
    * Tags associated with this entity type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#tags FrauddetectorDetector#tags}
    */
    readonly tags?: FrauddetectorDetectorEventTypeEntityTypesTags[];
}
export declare function frauddetectorDetectorEventTypeEntityTypesToTerraform(struct?: FrauddetectorDetectorEventTypeEntityTypes): any;
export interface FrauddetectorDetectorEventTypeEventVariablesTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#key FrauddetectorDetector#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#value FrauddetectorDetector#value}
    */
    readonly value: string;
}
export declare function frauddetectorDetectorEventTypeEventVariablesTagsToTerraform(struct?: FrauddetectorDetectorEventTypeEventVariablesTags): any;
export interface FrauddetectorDetectorEventTypeEventVariables {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#arn FrauddetectorDetector#arn}
    */
    readonly arn?: string;
    /**
    * The time when the event variable was created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#created_time FrauddetectorDetector#created_time}
    */
    readonly createdTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#data_source FrauddetectorDetector#data_source}
    */
    readonly dataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#data_type FrauddetectorDetector#data_type}
    */
    readonly dataType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#default_value FrauddetectorDetector#default_value}
    */
    readonly defaultValue?: string;
    /**
    * The description.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#description FrauddetectorDetector#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#inline FrauddetectorDetector#inline}
    */
    readonly inline?: boolean | cdktf.IResolvable;
    /**
    * The time when the event variable was last updated.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#last_updated_time FrauddetectorDetector#last_updated_time}
    */
    readonly lastUpdatedTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#name FrauddetectorDetector#name}
    */
    readonly name?: string;
    /**
    * Tags associated with this event variable.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#tags FrauddetectorDetector#tags}
    */
    readonly tags?: FrauddetectorDetectorEventTypeEventVariablesTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#variable_type FrauddetectorDetector#variable_type}
    */
    readonly variableType?: string;
}
export declare function frauddetectorDetectorEventTypeEventVariablesToTerraform(struct?: FrauddetectorDetectorEventTypeEventVariables): any;
export interface FrauddetectorDetectorEventTypeLabelsTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#key FrauddetectorDetector#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#value FrauddetectorDetector#value}
    */
    readonly value: string;
}
export declare function frauddetectorDetectorEventTypeLabelsTagsToTerraform(struct?: FrauddetectorDetectorEventTypeLabelsTags): any;
export interface FrauddetectorDetectorEventTypeLabels {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#arn FrauddetectorDetector#arn}
    */
    readonly arn?: string;
    /**
    * The time when the label was created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#created_time FrauddetectorDetector#created_time}
    */
    readonly createdTime?: string;
    /**
    * The description.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#description FrauddetectorDetector#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#inline FrauddetectorDetector#inline}
    */
    readonly inline?: boolean | cdktf.IResolvable;
    /**
    * The time when the label was last updated.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#last_updated_time FrauddetectorDetector#last_updated_time}
    */
    readonly lastUpdatedTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#name FrauddetectorDetector#name}
    */
    readonly name?: string;
    /**
    * Tags associated with this label.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#tags FrauddetectorDetector#tags}
    */
    readonly tags?: FrauddetectorDetectorEventTypeLabelsTags[];
}
export declare function frauddetectorDetectorEventTypeLabelsToTerraform(struct?: FrauddetectorDetectorEventTypeLabels): any;
export interface FrauddetectorDetectorEventTypeTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#key FrauddetectorDetector#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#value FrauddetectorDetector#value}
    */
    readonly value: string;
}
export declare function frauddetectorDetectorEventTypeTagsToTerraform(struct?: FrauddetectorDetectorEventTypeTags): any;
export interface FrauddetectorDetectorEventType {
    /**
    * The ARN of the event type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#arn FrauddetectorDetector#arn}
    */
    readonly arn: string;
    /**
    * The time when the event type was created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#created_time FrauddetectorDetector#created_time}
    */
    readonly createdTime: string;
    /**
    * The description of the event type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#description FrauddetectorDetector#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#entity_types FrauddetectorDetector#entity_types}
    */
    readonly entityTypes?: FrauddetectorDetectorEventTypeEntityTypes[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#event_variables FrauddetectorDetector#event_variables}
    */
    readonly eventVariables?: FrauddetectorDetectorEventTypeEventVariables[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#inline FrauddetectorDetector#inline}
    */
    readonly inline?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#labels FrauddetectorDetector#labels}
    */
    readonly labels?: FrauddetectorDetectorEventTypeLabels[];
    /**
    * The time when the event type was last updated.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#last_updated_time FrauddetectorDetector#last_updated_time}
    */
    readonly lastUpdatedTime: string;
    /**
    * The name for the event type
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#name FrauddetectorDetector#name}
    */
    readonly name?: string;
    /**
    * Tags associated with this event type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#tags FrauddetectorDetector#tags}
    */
    readonly tags?: FrauddetectorDetectorEventTypeTags[];
}
export declare function frauddetectorDetectorEventTypeToTerraform(struct?: FrauddetectorDetectorEventType): any;
export interface FrauddetectorDetectorRulesOutcomesTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#key FrauddetectorDetector#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#value FrauddetectorDetector#value}
    */
    readonly value: string;
}
export declare function frauddetectorDetectorRulesOutcomesTagsToTerraform(struct?: FrauddetectorDetectorRulesOutcomesTags): any;
export interface FrauddetectorDetectorRulesOutcomes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#arn FrauddetectorDetector#arn}
    */
    readonly arn?: string;
    /**
    * The time when the outcome was created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#created_time FrauddetectorDetector#created_time}
    */
    readonly createdTime?: string;
    /**
    * The description.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#description FrauddetectorDetector#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#inline FrauddetectorDetector#inline}
    */
    readonly inline?: boolean | cdktf.IResolvable;
    /**
    * The time when the outcome was last updated.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#last_updated_time FrauddetectorDetector#last_updated_time}
    */
    readonly lastUpdatedTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#name FrauddetectorDetector#name}
    */
    readonly name?: string;
    /**
    * Tags associated with this outcome.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#tags FrauddetectorDetector#tags}
    */
    readonly tags?: FrauddetectorDetectorRulesOutcomesTags[];
}
export declare function frauddetectorDetectorRulesOutcomesToTerraform(struct?: FrauddetectorDetectorRulesOutcomes): any;
export interface FrauddetectorDetectorRulesTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#key FrauddetectorDetector#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#value FrauddetectorDetector#value}
    */
    readonly value: string;
}
export declare function frauddetectorDetectorRulesTagsToTerraform(struct?: FrauddetectorDetectorRulesTags): any;
export interface FrauddetectorDetectorRules {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#arn FrauddetectorDetector#arn}
    */
    readonly arn?: string;
    /**
    * The time when the event type was created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#created_time FrauddetectorDetector#created_time}
    */
    readonly createdTime?: string;
    /**
    * The description.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#description FrauddetectorDetector#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#detector_id FrauddetectorDetector#detector_id}
    */
    readonly detectorId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#expression FrauddetectorDetector#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#language FrauddetectorDetector#language}
    */
    readonly language?: string;
    /**
    * The time when the event type was last updated.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#last_updated_time FrauddetectorDetector#last_updated_time}
    */
    readonly lastUpdatedTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#outcomes FrauddetectorDetector#outcomes}
    */
    readonly outcomes?: FrauddetectorDetectorRulesOutcomes[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#rule_id FrauddetectorDetector#rule_id}
    */
    readonly ruleId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#rule_version FrauddetectorDetector#rule_version}
    */
    readonly ruleVersion?: string;
    /**
    * Tags associated with this event type.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#tags FrauddetectorDetector#tags}
    */
    readonly tags?: FrauddetectorDetectorRulesTags[];
}
export declare function frauddetectorDetectorRulesToTerraform(struct?: FrauddetectorDetectorRules): any;
export interface FrauddetectorDetectorTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#key FrauddetectorDetector#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html#value FrauddetectorDetector#value}
    */
    readonly value: string;
}
export declare function frauddetectorDetectorTagsToTerraform(struct?: FrauddetectorDetectorTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html awscc_frauddetector_detector}
*/
export declare class FrauddetectorDetector extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/frauddetector_detector.html awscc_frauddetector_detector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FrauddetectorDetectorConfig
    */
    constructor(scope: Construct, id: string, config: FrauddetectorDetectorConfig);
    get arn(): string;
    private _associatedModels?;
    get associatedModels(): FrauddetectorDetectorAssociatedModels[];
    set associatedModels(value: FrauddetectorDetectorAssociatedModels[]);
    resetAssociatedModels(): void;
    get associatedModelsInput(): FrauddetectorDetectorAssociatedModels[] | undefined;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _detectorId;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string;
    get detectorVersionId(): string;
    private _detectorVersionStatus?;
    get detectorVersionStatus(): string;
    set detectorVersionStatus(value: string);
    resetDetectorVersionStatus(): void;
    get detectorVersionStatusInput(): string | undefined;
    private _eventType;
    get eventType(): FrauddetectorDetectorEventType;
    set eventType(value: FrauddetectorDetectorEventType);
    get eventTypeInput(): FrauddetectorDetectorEventType;
    get id(): string;
    get lastUpdatedTime(): string;
    private _ruleExecutionMode?;
    get ruleExecutionMode(): string;
    set ruleExecutionMode(value: string);
    resetRuleExecutionMode(): void;
    get ruleExecutionModeInput(): string | undefined;
    private _rules;
    get rules(): FrauddetectorDetectorRules[];
    set rules(value: FrauddetectorDetectorRules[]);
    get rulesInput(): FrauddetectorDetectorRules[];
    private _tags?;
    get tags(): FrauddetectorDetectorTags[];
    set tags(value: FrauddetectorDetectorTags[]);
    resetTags(): void;
    get tagsInput(): FrauddetectorDetectorTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
