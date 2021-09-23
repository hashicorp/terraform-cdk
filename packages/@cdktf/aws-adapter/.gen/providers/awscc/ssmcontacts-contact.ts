// https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmcontactsContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#alias SsmcontactsContact#alias}
  */
  readonly alias: string;
  /**
  * Name of the contact. String value with 3 to 256 characters. Only alphabetical, space, numeric characters, dash, or underscore allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#display_name SsmcontactsContact#display_name}
  */
  readonly displayName: string;
  /**
  * The stages that an escalation plan or engagement plan engages contacts and contact methods in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#plan SsmcontactsContact#plan}
  */
  readonly plan: SsmcontactsContactPlan[];
  /**
  * Contact type, which specify type of contact. Currently supported values: ?PERSONAL?, ?SHARED?, ?OTHER?.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#type SsmcontactsContact#type}
  */
  readonly type: string;
}
export interface SsmcontactsContactPlanTargetsChannelTargetInfo {
  /**
  * The Amazon Resource Name (ARN) of the contact channel.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#channel_id SsmcontactsContact#channel_id}
  */
  readonly channelId: string;
  /**
  * The number of minutes to wait to retry sending engagement in the case the engagement initially fails.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#retry_interval_in_minutes SsmcontactsContact#retry_interval_in_minutes}
  */
  readonly retryIntervalInMinutes: number;
}

export function ssmcontactsContactPlanTargetsChannelTargetInfoToTerraform(struct?: SsmcontactsContactPlanTargetsChannelTargetInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    retry_interval_in_minutes: cdktf.numberToTerraform(struct!.retryIntervalInMinutes),
  }
}

export interface SsmcontactsContactPlanTargetsContactTargetInfo {
  /**
  * The Amazon Resource Name (ARN) of the contact.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#contact_id SsmcontactsContact#contact_id}
  */
  readonly contactId: string;
  /**
  * A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#is_essential SsmcontactsContact#is_essential}
  */
  readonly isEssential: boolean | cdktf.IResolvable;
}

export function ssmcontactsContactPlanTargetsContactTargetInfoToTerraform(struct?: SsmcontactsContactPlanTargetsContactTargetInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contact_id: cdktf.stringToTerraform(struct!.contactId),
    is_essential: cdktf.booleanToTerraform(struct!.isEssential),
  }
}

export interface SsmcontactsContactPlanTargets {
  /**
  * Information about the contact channel that SSM Incident Manager uses to engage the contact.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#channel_target_info SsmcontactsContact#channel_target_info}
  */
  readonly channelTargetInfo?: SsmcontactsContactPlanTargetsChannelTargetInfo;
  /**
  * The contact that SSM Incident Manager is engaging during an incident.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#contact_target_info SsmcontactsContact#contact_target_info}
  */
  readonly contactTargetInfo?: SsmcontactsContactPlanTargetsContactTargetInfo;
}

export function ssmcontactsContactPlanTargetsToTerraform(struct?: SsmcontactsContactPlanTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    channel_target_info: ssmcontactsContactPlanTargetsChannelTargetInfoToTerraform(struct!.channelTargetInfo),
    contact_target_info: ssmcontactsContactPlanTargetsContactTargetInfoToTerraform(struct!.contactTargetInfo),
  }
}

export interface SsmcontactsContactPlan {
  /**
  * The time to wait until beginning the next stage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#duration_in_minutes SsmcontactsContact#duration_in_minutes}
  */
  readonly durationInMinutes: number;
  /**
  * The contacts or contact methods that the escalation plan or engagement plan is engaging.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#targets SsmcontactsContact#targets}
  */
  readonly targets?: SsmcontactsContactPlanTargets[];
}

export function ssmcontactsContactPlanToTerraform(struct?: SsmcontactsContactPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_in_minutes: cdktf.numberToTerraform(struct!.durationInMinutes),
    targets: cdktf.listMapper(ssmcontactsContactPlanTargetsToTerraform)(struct!.targets),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html awscc_ssmcontacts_contact}
*/
export class SsmcontactsContact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ssmcontacts_contact";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html awscc_ssmcontacts_contact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmcontactsContactConfig
  */
  public constructor(scope: Construct, id: string, config: SsmcontactsContactConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssmcontacts_contact',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alias = config.alias;
    this._displayName = config.displayName;
    this._plan = config.plan;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias: string;
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // plan - computed: false, optional: false, required: true
  private _plan: SsmcontactsContactPlan[];
  public get plan() {
    return this.interpolationForAttribute('plan') as any;
  }
  public set plan(value: SsmcontactsContactPlan[]) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      display_name: cdktf.stringToTerraform(this._displayName),
      plan: cdktf.listMapper(ssmcontactsContactPlanToTerraform)(this._plan),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
