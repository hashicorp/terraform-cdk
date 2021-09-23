import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccFrauddetectorEventTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_event_type.html#id DataAwsccFrauddetectorEventType#id}
    */
    readonly id: string;
}
export declare class DataAwsccFrauddetectorEventTypeEntityTypesTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFrauddetectorEventTypeEntityTypesTagsToTerraform(struct?: DataAwsccFrauddetectorEventTypeEntityTypesTags): any;
export declare class DataAwsccFrauddetectorEventTypeEntityTypes extends cdktf.ComplexComputedList {
    get arn(): string;
    get createdTime(): string;
    get description(): string;
    get inline(): any;
    get lastUpdatedTime(): string;
    get name(): string;
    get tags(): any;
}
export declare function dataAwsccFrauddetectorEventTypeEntityTypesToTerraform(struct?: DataAwsccFrauddetectorEventTypeEntityTypes): any;
export declare class DataAwsccFrauddetectorEventTypeEventVariablesTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFrauddetectorEventTypeEventVariablesTagsToTerraform(struct?: DataAwsccFrauddetectorEventTypeEventVariablesTags): any;
export declare class DataAwsccFrauddetectorEventTypeEventVariables extends cdktf.ComplexComputedList {
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
export declare function dataAwsccFrauddetectorEventTypeEventVariablesToTerraform(struct?: DataAwsccFrauddetectorEventTypeEventVariables): any;
export declare class DataAwsccFrauddetectorEventTypeLabelsTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFrauddetectorEventTypeLabelsTagsToTerraform(struct?: DataAwsccFrauddetectorEventTypeLabelsTags): any;
export declare class DataAwsccFrauddetectorEventTypeLabels extends cdktf.ComplexComputedList {
    get arn(): string;
    get createdTime(): string;
    get description(): string;
    get inline(): any;
    get lastUpdatedTime(): string;
    get name(): string;
    get tags(): any;
}
export declare function dataAwsccFrauddetectorEventTypeLabelsToTerraform(struct?: DataAwsccFrauddetectorEventTypeLabels): any;
export declare class DataAwsccFrauddetectorEventTypeTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFrauddetectorEventTypeTagsToTerraform(struct?: DataAwsccFrauddetectorEventTypeTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_event_type.html awscc_frauddetector_event_type}
*/
export declare class DataAwsccFrauddetectorEventType extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/frauddetector_event_type.html awscc_frauddetector_event_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccFrauddetectorEventTypeConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccFrauddetectorEventTypeConfig);
    get arn(): string;
    get createdTime(): string;
    get description(): string;
    get entityTypes(): any;
    get eventVariables(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get labels(): any;
    get lastUpdatedTime(): string;
    get name(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
