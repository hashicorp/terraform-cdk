// https://www.terraform.io/docs/providers/awscc/d/ssmincidents_response_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSsmincidentsResponsePlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ssmincidents_response_plan.html#id DataAwsccSsmincidentsResponsePlan#id}
  */
  readonly id: string;
}
export class DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export function dataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersToTerraform(struct?: DataAwsccSsmincidentsResponsePlanActionsSsmAutomationParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class DataAwsccSsmincidentsResponsePlanActionsSsmAutomation extends cdktf.ComplexComputedList {

  // document_name - computed: true, optional: false, required: false
  public get documentName() {
    return this.getStringAttribute('document_name');
  }

  // document_version - computed: true, optional: false, required: false
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // target_account - computed: true, optional: false, required: false
  public get targetAccount() {
    return this.getStringAttribute('target_account');
  }
}

export function dataAwsccSsmincidentsResponsePlanActionsSsmAutomationToTerraform(struct?: DataAwsccSsmincidentsResponsePlanActionsSsmAutomation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    document_name: cdktf.stringToTerraform(struct!.documentName),
    document_version: cdktf.stringToTerraform(struct!.documentVersion),
    parameters: cdktf.listMapper(dataAwsccSsmincidentsResponsePlanActionsSsmAutomationParametersToTerraform)(struct!.parameters),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    target_account: cdktf.stringToTerraform(struct!.targetAccount),
  }
}

export class DataAwsccSsmincidentsResponsePlanActions extends cdktf.ComplexComputedList {

  // ssm_automation - computed: true, optional: false, required: false
  public get ssmAutomation() {
    return this.interpolationForAttribute('ssm_automation') as any;
  }
}

export function dataAwsccSsmincidentsResponsePlanActionsToTerraform(struct?: DataAwsccSsmincidentsResponsePlanActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ssm_automation: dataAwsccSsmincidentsResponsePlanActionsSsmAutomationToTerraform(struct!.ssmAutomation),
  }
}

export class DataAwsccSsmincidentsResponsePlanChatChannel extends cdktf.ComplexComputedList {

  // chatbot_sns - computed: true, optional: false, required: false
  public get chatbotSns() {
    return this.getListAttribute('chatbot_sns');
  }
}

export function dataAwsccSsmincidentsResponsePlanChatChannelToTerraform(struct?: DataAwsccSsmincidentsResponsePlanChatChannel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    chatbot_sns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.chatbotSns),
  }
}

export class DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets extends cdktf.ComplexComputedList {

  // sns_topic_arn - computed: true, optional: false, required: false
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
}

export function dataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsToTerraform(struct?: DataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sns_topic_arn: cdktf.stringToTerraform(struct!.snsTopicArn),
  }
}

export class DataAwsccSsmincidentsResponsePlanIncidentTemplate extends cdktf.ComplexComputedList {

  // dedupe_string - computed: true, optional: false, required: false
  public get dedupeString() {
    return this.getStringAttribute('dedupe_string');
  }

  // impact - computed: true, optional: false, required: false
  public get impact() {
    return this.getNumberAttribute('impact');
  }

  // notification_targets - computed: true, optional: false, required: false
  public get notificationTargets() {
    return this.interpolationForAttribute('notification_targets') as any;
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export function dataAwsccSsmincidentsResponsePlanIncidentTemplateToTerraform(struct?: DataAwsccSsmincidentsResponsePlanIncidentTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dedupe_string: cdktf.stringToTerraform(struct!.dedupeString),
    impact: cdktf.numberToTerraform(struct!.impact),
    notification_targets: cdktf.listMapper(dataAwsccSsmincidentsResponsePlanIncidentTemplateNotificationTargetsToTerraform)(struct!.notificationTargets),
    summary: cdktf.stringToTerraform(struct!.summary),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export class DataAwsccSsmincidentsResponsePlanTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccSsmincidentsResponsePlanTagsToTerraform(struct?: DataAwsccSsmincidentsResponsePlanTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ssmincidents_response_plan.html awscc_ssmincidents_response_plan}
*/
export class DataAwsccSsmincidentsResponsePlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ssmincidents_response_plan";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ssmincidents_response_plan.html awscc_ssmincidents_response_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSsmincidentsResponsePlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSsmincidentsResponsePlanConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.interpolationForAttribute('actions') as any;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // chat_channel - computed: true, optional: false, required: false
  public get chatChannel() {
    return this.interpolationForAttribute('chat_channel') as any;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // engagements - computed: true, optional: false, required: false
  public get engagements() {
    return this.getListAttribute('engagements');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // incident_template - computed: true, optional: false, required: false
  public get incidentTemplate() {
    return this.interpolationForAttribute('incident_template') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
