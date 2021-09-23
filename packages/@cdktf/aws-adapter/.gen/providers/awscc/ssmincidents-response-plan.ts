// https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function ssmincidentsResponsePlanActionsSsmAutomationParametersToTerraform(struct?: SsmincidentsResponsePlanActionsSsmAutomationParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

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

export function ssmincidentsResponsePlanActionsSsmAutomationToTerraform(struct?: SsmincidentsResponsePlanActionsSsmAutomation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    document_name: cdktf.stringToTerraform(struct!.documentName),
    document_version: cdktf.stringToTerraform(struct!.documentVersion),
    parameters: cdktf.listMapper(ssmincidentsResponsePlanActionsSsmAutomationParametersToTerraform)(struct!.parameters),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    target_account: cdktf.stringToTerraform(struct!.targetAccount),
  }
}

export interface SsmincidentsResponsePlanActions {
  /**
  * The configuration to use when starting the SSM automation document.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#ssm_automation SsmincidentsResponsePlan#ssm_automation}
  */
  readonly ssmAutomation?: SsmincidentsResponsePlanActionsSsmAutomation;
}

export function ssmincidentsResponsePlanActionsToTerraform(struct?: SsmincidentsResponsePlanActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ssm_automation: ssmincidentsResponsePlanActionsSsmAutomationToTerraform(struct!.ssmAutomation),
  }
}

export interface SsmincidentsResponsePlanChatChannel {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#chatbot_sns SsmincidentsResponsePlan#chatbot_sns}
  */
  readonly chatbotSns?: string[];
}

export function ssmincidentsResponsePlanChatChannelToTerraform(struct?: SsmincidentsResponsePlanChatChannel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    chatbot_sns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.chatbotSns),
  }
}

export interface SsmincidentsResponsePlanIncidentTemplateNotificationTargets {
  /**
  * The ARN of the Chatbot SNS topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html#sns_topic_arn SsmincidentsResponsePlan#sns_topic_arn}
  */
  readonly snsTopicArn?: string;
}

export function ssmincidentsResponsePlanIncidentTemplateNotificationTargetsToTerraform(struct?: SsmincidentsResponsePlanIncidentTemplateNotificationTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sns_topic_arn: cdktf.stringToTerraform(struct!.snsTopicArn),
  }
}

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

export function ssmincidentsResponsePlanIncidentTemplateToTerraform(struct?: SsmincidentsResponsePlanIncidentTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dedupe_string: cdktf.stringToTerraform(struct!.dedupeString),
    impact: cdktf.numberToTerraform(struct!.impact),
    notification_targets: cdktf.listMapper(ssmincidentsResponsePlanIncidentTemplateNotificationTargetsToTerraform)(struct!.notificationTargets),
    summary: cdktf.stringToTerraform(struct!.summary),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

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

export function ssmincidentsResponsePlanTagsToTerraform(struct?: SsmincidentsResponsePlanTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html awscc_ssmincidents_response_plan}
*/
export class SsmincidentsResponsePlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ssmincidents_response_plan";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_response_plan.html awscc_ssmincidents_response_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmincidentsResponsePlanConfig
  */
  public constructor(scope: Construct, id: string, config: SsmincidentsResponsePlanConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssmincidents_response_plan',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._actions = config.actions;
    this._chatChannel = config.chatChannel;
    this._displayName = config.displayName;
    this._engagements = config.engagements;
    this._incidentTemplate = config.incidentTemplate;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: true, optional: true, required: false
  private _actions?: SsmincidentsResponsePlanActions[];
  public get actions() {
    return this.interpolationForAttribute('actions') as any;
  }
  public set actions(value: SsmincidentsResponsePlanActions[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // chat_channel - computed: false, optional: true, required: false
  private _chatChannel?: SsmincidentsResponsePlanChatChannel;
  public get chatChannel() {
    return this.interpolationForAttribute('chat_channel') as any;
  }
  public set chatChannel(value: SsmincidentsResponsePlanChatChannel ) {
    this._chatChannel = value;
  }
  public resetChatChannel() {
    this._chatChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatChannelInput() {
    return this._chatChannel
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // engagements - computed: true, optional: true, required: false
  private _engagements?: string[];
  public get engagements() {
    return this.getListAttribute('engagements');
  }
  public set engagements(value: string[]) {
    this._engagements = value;
  }
  public resetEngagements() {
    this._engagements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engagementsInput() {
    return this._engagements
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incident_template - computed: false, optional: false, required: true
  private _incidentTemplate: SsmincidentsResponsePlanIncidentTemplate;
  public get incidentTemplate() {
    return this.interpolationForAttribute('incident_template') as any;
  }
  public set incidentTemplate(value: SsmincidentsResponsePlanIncidentTemplate) {
    this._incidentTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTemplateInput() {
    return this._incidentTemplate
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: SsmincidentsResponsePlanTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SsmincidentsResponsePlanTags[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.listMapper(ssmincidentsResponsePlanActionsToTerraform)(this._actions),
      chat_channel: ssmincidentsResponsePlanChatChannelToTerraform(this._chatChannel),
      display_name: cdktf.stringToTerraform(this._displayName),
      engagements: cdktf.listMapper(cdktf.stringToTerraform)(this._engagements),
      incident_template: ssmincidentsResponsePlanIncidentTemplateToTerraform(this._incidentTemplate),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(ssmincidentsResponsePlanTagsToTerraform)(this._tags),
    };
  }
}
