import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmincidentsResponsePlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * The list of actions.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#actions SsmincidentsResponsePlan#actions}
    */
    readonly actions?: SsmincidentsResponsePlanActions[];
    /**
    * The chat channel configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#chat_channel SsmincidentsResponsePlan#chat_channel}
    */
    readonly chatChannel?: SsmincidentsResponsePlanChatChannel;
    /**
    * The display name of the response plan.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#display_name SsmincidentsResponsePlan#display_name}
    */
    readonly displayName?: string;
    /**
    * The list of engagements to use.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#engagements SsmincidentsResponsePlan#engagements}
    */
    readonly engagements?: string[];
    /**
    * The incident template configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#incident_template SsmincidentsResponsePlan#incident_template}
    */
    readonly incidentTemplate: SsmincidentsResponsePlanIncidentTemplate;
    /**
    * The name of the response plan.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#name SsmincidentsResponsePlan#name}
    */
    readonly name: string;
    /**
    * The tags to apply to the response plan.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#tags SsmincidentsResponsePlan#tags}
    */
    readonly tags?: SsmincidentsResponsePlanTags[];
}
export interface SsmincidentsResponsePlanActionsSsmAutomationParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#key SsmincidentsResponsePlan#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#values SsmincidentsResponsePlan#values}
    */
    readonly values: string[];
}
export declare function ssmincidentsResponsePlanActionsSsmAutomationParametersToTerraform(struct?: SsmincidentsResponsePlanActionsSsmAutomationParameters): any;
export interface SsmincidentsResponsePlanActionsSsmAutomation {
    /**
    * The document name to use when starting the SSM automation document.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#document_name SsmincidentsResponsePlan#document_name}
    */
    readonly documentName: string;
    /**
    * The version of the document to use when starting the SSM automation document.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#document_version SsmincidentsResponsePlan#document_version}
    */
    readonly documentVersion?: string;
    /**
    * The parameters to set when starting the SSM automation document.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#parameters SsmincidentsResponsePlan#parameters}
    */
    readonly parameters?: SsmincidentsResponsePlanActionsSsmAutomationParameters[];
    /**
    * The role ARN to use when starting the SSM automation document.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#role_arn SsmincidentsResponsePlan#role_arn}
    */
    readonly roleArn: string;
    /**
    * The account type to use when starting the SSM automation document.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#target_account SsmincidentsResponsePlan#target_account}
    */
    readonly targetAccount?: string;
}
export declare function ssmincidentsResponsePlanActionsSsmAutomationToTerraform(struct?: SsmincidentsResponsePlanActionsSsmAutomation): any;
export interface SsmincidentsResponsePlanActions {
    /**
    * The configuration to use when starting the SSM automation document.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#ssm_automation SsmincidentsResponsePlan#ssm_automation}
    */
    readonly ssmAutomation?: SsmincidentsResponsePlanActionsSsmAutomation;
}
export declare function ssmincidentsResponsePlanActionsToTerraform(struct?: SsmincidentsResponsePlanActions): any;
export interface SsmincidentsResponsePlanChatChannel {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#chatbot_sns SsmincidentsResponsePlan#chatbot_sns}
    */
    readonly chatbotSns?: string[];
}
export declare function ssmincidentsResponsePlanChatChannelToTerraform(struct?: SsmincidentsResponsePlanChatChannel): any;
export interface SsmincidentsResponsePlanIncidentTemplateNotificationTargets {
    /**
    * The ARN of the Chatbot SNS topic.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#sns_topic_arn SsmincidentsResponsePlan#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
}
export declare function ssmincidentsResponsePlanIncidentTemplateNotificationTargetsToTerraform(struct?: SsmincidentsResponsePlanIncidentTemplateNotificationTargets): any;
export interface SsmincidentsResponsePlanIncidentTemplate {
    /**
    * The deduplication string.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#dedupe_string SsmincidentsResponsePlan#dedupe_string}
    */
    readonly dedupeString?: string;
    /**
    * The impact value.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#impact SsmincidentsResponsePlan#impact}
    */
    readonly impact: number;
    /**
    * The list of notification targets.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#notification_targets SsmincidentsResponsePlan#notification_targets}
    */
    readonly notificationTargets?: SsmincidentsResponsePlanIncidentTemplateNotificationTargets[];
    /**
    * The summary string.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#summary SsmincidentsResponsePlan#summary}
    */
    readonly summary?: string;
    /**
    * The title string.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#title SsmincidentsResponsePlan#title}
    */
    readonly title: string;
}
export declare function ssmincidentsResponsePlanIncidentTemplateToTerraform(struct?: SsmincidentsResponsePlanIncidentTemplate): any;
export interface SsmincidentsResponsePlanTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#key SsmincidentsResponsePlan#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#value SsmincidentsResponsePlan#value}
    */
    readonly value: string;
}
export declare function ssmincidentsResponsePlanTagsToTerraform(struct?: SsmincidentsResponsePlanTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html awscc_ssmincidents_response_plan}
*/
export declare class SsmincidentsResponsePlan extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html awscc_ssmincidents_response_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmincidentsResponsePlanConfig
    */
    constructor(scope: Construct, id: string, config: SsmincidentsResponsePlanConfig);
    private _actions?;
    get actions(): SsmincidentsResponsePlanActions[];
    set actions(value: SsmincidentsResponsePlanActions[]);
    resetActions(): void;
    get actionsInput(): SsmincidentsResponsePlanActions[] | undefined;
    get arn(): string;
    private _chatChannel?;
    get chatChannel(): SsmincidentsResponsePlanChatChannel;
    set chatChannel(value: SsmincidentsResponsePlanChatChannel);
    resetChatChannel(): void;
    get chatChannelInput(): SsmincidentsResponsePlanChatChannel | undefined;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string | undefined;
    private _engagements?;
    get engagements(): string[];
    set engagements(value: string[]);
    resetEngagements(): void;
    get engagementsInput(): string[] | undefined;
    get id(): string;
    private _incidentTemplate;
    get incidentTemplate(): SsmincidentsResponsePlanIncidentTemplate;
    set incidentTemplate(value: SsmincidentsResponsePlanIncidentTemplate);
    get incidentTemplateInput(): SsmincidentsResponsePlanIncidentTemplate;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _tags?;
    get tags(): SsmincidentsResponsePlanTags[];
    set tags(value: SsmincidentsResponsePlanTags[]);
    resetTags(): void;
    get tagsInput(): SsmincidentsResponsePlanTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
