// https://www.terraform.io/docs/providers/awscc/r/detective_member_invitation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DetectiveMemberInvitationConfig extends cdktf.TerraformMetaArguments {
  /**
  * When set to true, invitation emails are not sent to the member accounts. Member accounts must still accept the invitation before they are added to the behavior graph. Updating this field has no effect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/detective_member_invitation.html#disable_email_notification DetectiveMemberInvitation#disable_email_notification}
  */
  readonly disableEmailNotification?: boolean | cdktf.IResolvable;
  /**
  * The ARN of the graph to which the member account will be invited
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/detective_member_invitation.html#graph_arn DetectiveMemberInvitation#graph_arn}
  */
  readonly graphArn: string;
  /**
  * The root email address for the account to be invited, for validation. Updating this field has no effect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/detective_member_invitation.html#member_email_address DetectiveMemberInvitation#member_email_address}
  */
  readonly memberEmailAddress: string;
  /**
  * The AWS account ID to be invited to join the graph as a member
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/detective_member_invitation.html#member_id DetectiveMemberInvitation#member_id}
  */
  readonly memberId: string;
  /**
  * A message to be included in the email invitation sent to the invited account. Updating this field has no effect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/detective_member_invitation.html#message DetectiveMemberInvitation#message}
  */
  readonly message?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/detective_member_invitation.html awscc_detective_member_invitation}
*/
export class DetectiveMemberInvitation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_detective_member_invitation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/detective_member_invitation.html awscc_detective_member_invitation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DetectiveMemberInvitationConfig
  */
  public constructor(scope: Construct, id: string, config: DetectiveMemberInvitationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_detective_member_invitation',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._disableEmailNotification = config.disableEmailNotification;
    this._graphArn = config.graphArn;
    this._memberEmailAddress = config.memberEmailAddress;
    this._memberId = config.memberId;
    this._message = config.message;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_email_notification - computed: true, optional: true, required: false
  private _disableEmailNotification?: boolean | cdktf.IResolvable;
  public get disableEmailNotification() {
    return this.getBooleanAttribute('disable_email_notification');
  }
  public set disableEmailNotification(value: boolean | cdktf.IResolvable) {
    this._disableEmailNotification = value;
  }
  public resetDisableEmailNotification() {
    this._disableEmailNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEmailNotificationInput() {
    return this._disableEmailNotification
  }

  // graph_arn - computed: false, optional: false, required: true
  private _graphArn: string;
  public get graphArn() {
    return this.getStringAttribute('graph_arn');
  }
  public set graphArn(value: string) {
    this._graphArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graphArnInput() {
    return this._graphArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_email_address - computed: false, optional: false, required: true
  private _memberEmailAddress: string;
  public get memberEmailAddress() {
    return this.getStringAttribute('member_email_address');
  }
  public set memberEmailAddress(value: string) {
    this._memberEmailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberEmailAddressInput() {
    return this._memberEmailAddress
  }

  // member_id - computed: false, optional: false, required: true
  private _memberId: string;
  public get memberId() {
    return this.getStringAttribute('member_id');
  }
  public set memberId(value: string) {
    this._memberId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdInput() {
    return this._memberId
  }

  // message - computed: false, optional: true, required: false
  private _message?: string;
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string ) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_email_notification: cdktf.booleanToTerraform(this._disableEmailNotification),
      graph_arn: cdktf.stringToTerraform(this._graphArn),
      member_email_address: cdktf.stringToTerraform(this._memberEmailAddress),
      member_id: cdktf.stringToTerraform(this._memberId),
      message: cdktf.stringToTerraform(this._message),
    };
  }
}
