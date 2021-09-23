import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccFrauddetectorDetectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_detector.html#id DataAwsccFrauddetectorDetector#id}
    */
    readonly id: string;
}
export declare class DataAwsccFrauddetectorDetectorAssociatedModels extends cdktf.ComplexComputedList {
    get arn(): string;
}
export declare function dataAwsccFrauddetectorDetectorAssociatedModelsToTerraform(struct?: DataAwsccFrauddetectorDetectorAssociatedModels): any;
export declare class DataAwsccFrauddetectorDetectorEventTypeEntityTypesTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFrauddetectorDetectorEventTypeEntityTypesTagsToTerraform(struct?: DataAwsccFrauddetectorDetectorEventTypeEntityTypesTags): any;
export declare class DataAwsccFrauddetectorDetectorEventTypeEntityTypes extends cdktf.ComplexComputedList {
    get arn(): string;
    get createdTime(): string;
    get description(): string;
    get inline(): any;
    get lastUpdatedTime(): string;
    get name(): string;
    get tags(): any;
}
export declare function dataAwsccFrauddetectorDetectorEventTypeEntityTypesToTerraform(struct?: DataAwsccFrauddetectorDetectorEventTypeEntityTypes): any;
export declare class DataAwsccFrauddetectorDetectorEventTypeEventVariablesTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFrauddetectorDetectorEventTypeEventVariablesTagsToTerraform(struct?: DataAwsccFrauddetectorDetectorEventTypeEventVariablesTags): any;
export declare class DataAwsccFrauddetectorDetectorEventTypeEventVariables extends cdktf.ComplexComputedList {
    get arn(): string;
    get createdTime(): string;
    get dataSource(): string;
    get dataType(): string;
    get defaultValue(): string;
    get description(): string;
    get inline(): any;
    get lastUpdatedTime(): string;
    get name(): string;
    get tags(): any;
    get variableType(): string;
}
export declare function dataAwsccFrauddetectorDetectorEventTypeEventVariablesToTerraform(struct?: DataAwsccFrauddetectorDetectorEventTypeEventVariables): any;
export declare class DataAwsccFrauddetectorDetectorEventTypeLabelsTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFrauddetectorDetectorEventTypeLabelsTagsToTerraform(struct?: DataAwsccFrauddetectorDetectorEventTypeLabelsTags): any;
export declare class DataAwsccFrauddetectorDetectorEventTypeLabels extends cdktf.ComplexComputedList {
    get arn(): string;
    get createdTime(): string;
    get description(): string;
    get inline(): any;
    get lastUpdatedTime(): string;
    get name(): string;
    get tags(): any;
}
export declare function dataAwsccFrauddetectorDetectorEventTypeLabelsToTerraform(struct?: DataAwsccFrauddetectorDetectorEventTypeLabels): any;
export declare class DataAwsccFrauddetectorDetectorEventTypeTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFrauddetectorDetectorEventTypeTagsToTerraform(struct?: DataAwsccFrauddetectorDetectorEventTypeTags): any;
export declare class DataAwsccFrauddetectorDetectorEventType extends cdktf.ComplexComputedList {
    get arn(): string;
    get createdTime(): string;
    get description(): string;
    get entityTypes(): any;
    get eventVariables(): any;
    get inline(): any;
    get labels(): any;
    get lastUpdatedTime(): string;
    get name(): string;
    get tags(): any;
}
export declare function dataAwsccFrauddetectorDetectorEventTypeToTerraform(struct?: DataAwsccFrauddetectorDetectorEventType): any;
export declare class DataAwsccFrauddetectorDetectorRulesOutcomesTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFrauddetectorDetectorRulesOutcomesTagsToTerraform(struct?: DataAwsccFrauddetectorDetectorRulesOutcomesTags): any;
export declare class DataAwsccFrauddetectorDetectorRulesOutcomes extends cdktf.ComplexComputedList {
    get arn(): string;
    get createdTime(): string;
    get description(): string;
    get inline(): any;
    get lastUpdatedTime(): string;
    get name(): string;
    get tags(): any;
}
export declare function dataAwsccFrauddetectorDetectorRulesOutcomesToTerraform(struct?: DataAwsccFrauddetectorDetectorRulesOutcomes): any;
export declare class DataAwsccFrauddetectorDetectorRulesTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFrauddetectorDetectorRulesTagsToTerraform(struct?: DataAwsccFrauddetectorDetectorRulesTags): any;
export declare class DataAwsccFrauddetectorDetectorRules extends cdktf.ComplexComputedList {
    get arn(): string;
    get createdTime(): string;
    get description(): string;
    get detectorId(): string;
    get expression(): string;
    get language(): string;
    get lastUpdatedTime(): string;
    get outcomes(): any;
    get ruleId(): string;
    get ruleVersion(): string;
    get tags(): any;
}
export declare function dataAwsccFrauddetectorDetectorRulesToTerraform(struct?: DataAwsccFrauddetectorDetectorRules): any;
export declare class DataAwsccFrauddetectorDetectorTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFrauddetectorDetectorTagsToTerraform(struct?: DataAwsccFrauddetectorDetectorTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_detector.html awscc_frauddetector_detector}
*/
export declare class DataAwsccFrauddetectorDetector extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_detector.html awscc_frauddetector_detector} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccFrauddetectorDetectorConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccFrauddetectorDetectorConfig);
    get arn(): string;
    get associatedModels(): any;
    get createdTime(): string;
    get description(): string;
    get detectorId(): string;
    get detectorVersionId(): string;
    get detectorVersionStatus(): string;
    get eventType(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastUpdatedTime(): string;
    get ruleExecutionMode(): string;
    get rules(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
