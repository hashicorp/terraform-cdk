// https://www.terraform.io/docs/providers/awscc/r/fms_notification_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmsNotificationChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * A resource ARN.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_notification_channel.html#sns_role_name FmsNotificationChannel#sns_role_name}
  */
  readonly snsRoleName: string;
  /**
  * A resource ARN.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_notification_channel.html#sns_topic_arn FmsNotificationChannel#sns_topic_arn}
  */
  readonly snsTopicArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/fms_notification_channel.html awscc_fms_notification_channel}
*/
export class FmsNotificationChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_fms_notification_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/fms_notification_channel.html awscc_fms_notification_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmsNotificationChannelConfig
  */
  public constructor(scope: Construct, id: string, config: FmsNotificationChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_fms_notification_channel',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._snsRoleName = config.snsRoleName;
    this._snsTopicArn = config.snsTopicArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sns_role_name - computed: false, optional: false, required: true
  private _snsRoleName: string;
  public get snsRoleName() {
    return this.getStringAttribute('sns_role_name');
  }
  public set snsRoleName(value: string) {
    this._snsRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsRoleNameInput() {
    return this._snsRoleName
  }

  // sns_topic_arn - computed: false, optional: false, required: true
  private _snsTopicArn: string;
  public get snsTopicArn() {
    return this.getStringAttribute('sns_topic_arn');
  }
  public set snsTopicArn(value: string) {
    this._snsTopicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      sns_role_name: cdktf.stringToTerraform(this._snsRoleName),
      sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
    };
  }
}
