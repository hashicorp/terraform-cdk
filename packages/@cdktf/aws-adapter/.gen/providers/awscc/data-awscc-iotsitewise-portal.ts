// https://www.terraform.io/docs/providers/awscc/d/iotsitewise_portal.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotsitewisePortalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_portal.html#id DataAwsccIotsitewisePortal#id}
  */
  readonly id: string;
}
export class DataAwsccIotsitewisePortalAlarms extends cdktf.ComplexComputedList {

  // alarm_role_arn - computed: true, optional: false, required: false
  public get alarmRoleArn() {
    return this.getStringAttribute('alarm_role_arn');
  }

  // notification_lambda_arn - computed: true, optional: false, required: false
  public get notificationLambdaArn() {
    return this.getStringAttribute('notification_lambda_arn');
  }
}

export function dataAwsccIotsitewisePortalAlarmsToTerraform(struct?: DataAwsccIotsitewisePortalAlarms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_role_arn: cdktf.stringToTerraform(struct!.alarmRoleArn),
    notification_lambda_arn: cdktf.stringToTerraform(struct!.notificationLambdaArn),
  }
}

export class DataAwsccIotsitewisePortalTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotsitewisePortalTagsToTerraform(struct?: DataAwsccIotsitewisePortalTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_portal.html awscc_iotsitewise_portal}
*/
export class DataAwsccIotsitewisePortal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotsitewise_portal";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_portal.html awscc_iotsitewise_portal} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotsitewisePortalConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotsitewisePortalConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotsitewise_portal',
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

  // alarms - computed: true, optional: false, required: false
  public get alarms() {
    return this.interpolationForAttribute('alarms') as any;
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

  // notification_sender_email - computed: true, optional: false, required: false
  public get notificationSenderEmail() {
    return this.getStringAttribute('notification_sender_email');
  }

  // portal_arn - computed: true, optional: false, required: false
  public get portalArn() {
    return this.getStringAttribute('portal_arn');
  }

  // portal_auth_mode - computed: true, optional: false, required: false
  public get portalAuthMode() {
    return this.getStringAttribute('portal_auth_mode');
  }

  // portal_client_id - computed: true, optional: false, required: false
  public get portalClientId() {
    return this.getStringAttribute('portal_client_id');
  }

  // portal_contact_email - computed: true, optional: false, required: false
  public get portalContactEmail() {
    return this.getStringAttribute('portal_contact_email');
  }

  // portal_description - computed: true, optional: false, required: false
  public get portalDescription() {
    return this.getStringAttribute('portal_description');
  }

  // portal_id - computed: true, optional: false, required: false
  public get portalId() {
    return this.getStringAttribute('portal_id');
  }

  // portal_name - computed: true, optional: false, required: false
  public get portalName() {
    return this.getStringAttribute('portal_name');
  }

  // portal_start_url - computed: true, optional: false, required: false
  public get portalStartUrl() {
    return this.getStringAttribute('portal_start_url');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
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
