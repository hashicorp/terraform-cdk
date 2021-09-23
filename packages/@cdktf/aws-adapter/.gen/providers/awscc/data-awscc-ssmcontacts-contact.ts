// https://www.terraform.io/docs/providers/awscc/d/ssmcontacts_contact.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSsmcontactsContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ssmcontacts_contact.html#id DataAwsccSsmcontactsContact#id}
  */
  readonly id: string;
}
export class DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfo extends cdktf.ComplexComputedList {

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }

  // retry_interval_in_minutes - computed: true, optional: false, required: false
  public get retryIntervalInMinutes() {
    return this.getNumberAttribute('retry_interval_in_minutes');
  }
}

export function dataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoToTerraform(struct?: DataAwsccSsmcontactsContactPlanTargetsChannelTargetInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    retry_interval_in_minutes: cdktf.numberToTerraform(struct!.retryIntervalInMinutes),
  }
}

export class DataAwsccSsmcontactsContactPlanTargetsContactTargetInfo extends cdktf.ComplexComputedList {

  // contact_id - computed: true, optional: false, required: false
  public get contactId() {
    return this.getStringAttribute('contact_id');
  }

  // is_essential - computed: true, optional: false, required: false
  public get isEssential() {
    return this.getBooleanAttribute('is_essential');
  }
}

export function dataAwsccSsmcontactsContactPlanTargetsContactTargetInfoToTerraform(struct?: DataAwsccSsmcontactsContactPlanTargetsContactTargetInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contact_id: cdktf.stringToTerraform(struct!.contactId),
    is_essential: cdktf.booleanToTerraform(struct!.isEssential),
  }
}

export class DataAwsccSsmcontactsContactPlanTargets extends cdktf.ComplexComputedList {

  // channel_target_info - computed: true, optional: false, required: false
  public get channelTargetInfo() {
    return this.interpolationForAttribute('channel_target_info') as any;
  }

  // contact_target_info - computed: true, optional: false, required: false
  public get contactTargetInfo() {
    return this.interpolationForAttribute('contact_target_info') as any;
  }
}

export function dataAwsccSsmcontactsContactPlanTargetsToTerraform(struct?: DataAwsccSsmcontactsContactPlanTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    channel_target_info: dataAwsccSsmcontactsContactPlanTargetsChannelTargetInfoToTerraform(struct!.channelTargetInfo),
    contact_target_info: dataAwsccSsmcontactsContactPlanTargetsContactTargetInfoToTerraform(struct!.contactTargetInfo),
  }
}

export class DataAwsccSsmcontactsContactPlan extends cdktf.ComplexComputedList {

  // duration_in_minutes - computed: true, optional: false, required: false
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }

  // targets - computed: true, optional: false, required: false
  public get targets() {
    return this.interpolationForAttribute('targets') as any;
  }
}

export function dataAwsccSsmcontactsContactPlanToTerraform(struct?: DataAwsccSsmcontactsContactPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    duration_in_minutes: cdktf.numberToTerraform(struct!.durationInMinutes),
    targets: cdktf.listMapper(dataAwsccSsmcontactsContactPlanTargetsToTerraform)(struct!.targets),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ssmcontacts_contact.html awscc_ssmcontacts_contact}
*/
export class DataAwsccSsmcontactsContact extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ssmcontacts_contact";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ssmcontacts_contact.html awscc_ssmcontacts_contact} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSsmcontactsContactConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSsmcontactsContactConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.interpolationForAttribute('plan') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
