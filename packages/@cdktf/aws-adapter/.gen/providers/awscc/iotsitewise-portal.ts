// https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotsitewisePortalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#alarms IotsitewisePortal#alarms}
  */
  readonly alarms?: IotsitewisePortalAlarms;
  /**
  * The email address that sends alarm notifications.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#notification_sender_email IotsitewisePortal#notification_sender_email}
  */
  readonly notificationSenderEmail?: string;
  /**
  * The service to use to authenticate users to the portal. Choose from SSO or IAM. You can't change this value after you create a portal.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#portal_auth_mode IotsitewisePortal#portal_auth_mode}
  */
  readonly portalAuthMode?: string;
  /**
  * The AWS administrator's contact email address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#portal_contact_email IotsitewisePortal#portal_contact_email}
  */
  readonly portalContactEmail: string;
  /**
  * A description for the portal.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#portal_description IotsitewisePortal#portal_description}
  */
  readonly portalDescription?: string;
  /**
  * A friendly name for the portal.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#portal_name IotsitewisePortal#portal_name}
  */
  readonly portalName: string;
  /**
  * The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#role_arn IotsitewisePortal#role_arn}
  */
  readonly roleArn: string;
  /**
  * A list of key-value pairs that contain metadata for the portal.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#tags IotsitewisePortal#tags}
  */
  readonly tags?: IotsitewisePortalTags[];
}
export interface IotsitewisePortalAlarms {
  /**
  * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#alarm_role_arn IotsitewisePortal#alarm_role_arn}
  */
  readonly alarmRoleArn?: string;
  /**
  * The ARN of the AWS Lambda function that manages alarm notifications. For more information, see Managing alarm notifications in the AWS IoT Events Developer Guide.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#notification_lambda_arn IotsitewisePortal#notification_lambda_arn}
  */
  readonly notificationLambdaArn?: string;
}

export function iotsitewisePortalAlarmsToTerraform(struct?: IotsitewisePortalAlarms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alarm_role_arn: cdktf.stringToTerraform(struct!.alarmRoleArn),
    notification_lambda_arn: cdktf.stringToTerraform(struct!.notificationLambdaArn),
  }
}

export interface IotsitewisePortalTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#key IotsitewisePortal#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html#value IotsitewisePortal#value}
  */
  readonly value: string;
}

export function iotsitewisePortalTagsToTerraform(struct?: IotsitewisePortalTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html awscc_iotsitewise_portal}
*/
export class IotsitewisePortal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotsitewise_portal";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_portal.html awscc_iotsitewise_portal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotsitewisePortalConfig
  */
  public constructor(scope: Construct, id: string, config: IotsitewisePortalConfig) {
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
    this._alarms = config.alarms;
    this._notificationSenderEmail = config.notificationSenderEmail;
    this._portalAuthMode = config.portalAuthMode;
    this._portalContactEmail = config.portalContactEmail;
    this._portalDescription = config.portalDescription;
    this._portalName = config.portalName;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarms - computed: false, optional: true, required: false
  private _alarms?: IotsitewisePortalAlarms;
  public get alarms() {
    return this.interpolationForAttribute('alarms') as any;
  }
  public set alarms(value: IotsitewisePortalAlarms ) {
    this._alarms = value;
  }
  public resetAlarms() {
    this._alarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notification_sender_email - computed: false, optional: true, required: false
  private _notificationSenderEmail?: string;
  public get notificationSenderEmail() {
    return this.getStringAttribute('notification_sender_email');
  }
  public set notificationSenderEmail(value: string ) {
    this._notificationSenderEmail = value;
  }
  public resetNotificationSenderEmail() {
    this._notificationSenderEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSenderEmailInput() {
    return this._notificationSenderEmail
  }

  // portal_arn - computed: true, optional: false, required: false
  public get portalArn() {
    return this.getStringAttribute('portal_arn');
  }

  // portal_auth_mode - computed: true, optional: true, required: false
  private _portalAuthMode?: string;
  public get portalAuthMode() {
    return this.getStringAttribute('portal_auth_mode');
  }
  public set portalAuthMode(value: string) {
    this._portalAuthMode = value;
  }
  public resetPortalAuthMode() {
    this._portalAuthMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalAuthModeInput() {
    return this._portalAuthMode
  }

  // portal_client_id - computed: true, optional: false, required: false
  public get portalClientId() {
    return this.getStringAttribute('portal_client_id');
  }

  // portal_contact_email - computed: false, optional: false, required: true
  private _portalContactEmail: string;
  public get portalContactEmail() {
    return this.getStringAttribute('portal_contact_email');
  }
  public set portalContactEmail(value: string) {
    this._portalContactEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalContactEmailInput() {
    return this._portalContactEmail
  }

  // portal_description - computed: false, optional: true, required: false
  private _portalDescription?: string;
  public get portalDescription() {
    return this.getStringAttribute('portal_description');
  }
  public set portalDescription(value: string ) {
    this._portalDescription = value;
  }
  public resetPortalDescription() {
    this._portalDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalDescriptionInput() {
    return this._portalDescription
  }

  // portal_id - computed: true, optional: false, required: false
  public get portalId() {
    return this.getStringAttribute('portal_id');
  }

  // portal_name - computed: false, optional: false, required: true
  private _portalName: string;
  public get portalName() {
    return this.getStringAttribute('portal_name');
  }
  public set portalName(value: string) {
    this._portalName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalNameInput() {
    return this._portalName
  }

  // portal_start_url - computed: true, optional: false, required: false
  public get portalStartUrl() {
    return this.getStringAttribute('portal_start_url');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotsitewisePortalTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotsitewisePortalTags[] ) {
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
      alarms: iotsitewisePortalAlarmsToTerraform(this._alarms),
      notification_sender_email: cdktf.stringToTerraform(this._notificationSenderEmail),
      portal_auth_mode: cdktf.stringToTerraform(this._portalAuthMode),
      portal_contact_email: cdktf.stringToTerraform(this._portalContactEmail),
      portal_description: cdktf.stringToTerraform(this._portalDescription),
      portal_name: cdktf.stringToTerraform(this._portalName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.listMapper(iotsitewisePortalTagsToTerraform)(this._tags),
    };
  }
}
