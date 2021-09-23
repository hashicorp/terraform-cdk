import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSsmincidentsResponsePlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ssmincidents_response_plan.html#id DataAwsccSsmincidentsResponsePlan#id}
    */
    readonly id: string;
}
export declare class DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters extends cdktf.ComplexComputedList {
    get key(): string;
    get values(): string[];
}
export declare function dataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersToTerraform(struct?: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters): any;
export declare class DataAwsccSsmincidentsResponsePlanActionsSsmAutomation extends cdktf.ComplexComputedList {
    get documentName(): string;
    get documentVersion(): string;
    get parameters(): any;
    get roleArn(): string;
    get targetAccount(): string;
}
export declare function dataAwsccSsmincidentsResponsePlanActionsSsmAutomationToTerraform(struct?: DataAwsccSsmincidentsResponsePlanActionsSsmAutomation): any;
export declare class DataAwsccSsmincidentsResponsePlanActions extends cdktf.ComplexComputedList {
    get ssmAutomation(): any;
}
export declare function dataAwsccSsmincidentsResponsePlanActionsToTerraform(struct?: DataAwsccSsmincidentsResponsePlanActions): any;
export declare class DataAwsccSsmincidentsResponsePlanChatChannel extends cdktf.ComplexComputedList {
    get chatbotSns(): string[];
}
export declare function dataAwsccSsmincidentsResponsePlanChatChannelToTerraform(struct?: DataAwsccSsmincidentsResponsePlanChatChannel): any;
export declare class DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets extends cdktf.ComplexComputedList {
    get snsTopicArn(): string;
}
export declare function dataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsToTerraform(struct?: DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets): any;
export declare class DataAwsccSsmincidentsResponsePlanIncidentTemplate extends cdktf.ComplexComputedList {
    get dedupeString(): string;
    get impact(): number;
    get notificationTargets(): any;
    get summary(): string;
    get title(): string;
}
export declare function dataAwsccSsmincidentsResponsePlanIncidentTemplateToTerraform(struct?: DataAwsccSsmincidentsResponsePlanIncidentTemplate): any;
export declare class DataAwsccSsmincidentsResponsePlanTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSsmincidentsResponsePlanTagsToTerraform(struct?: DataAwsccSsmincidentsResponsePlanTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ssmincidents_response_plan.html awscc_ssmincidents_response_plan}
*/
export declare class DataAwsccSsmincidentsResponsePlan extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ssmincidents_response_plan.html awscc_ssmincidents_response_plan} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSsmincidentsResponsePlanConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSsmincidentsResponsePlanConfig);
    get actions(): any;
    get arn(): string;
    get chatChannel(): any;
    get displayName(): string;
    get engagements(): string[];
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get incidentTemplate(): any;
    get name(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
