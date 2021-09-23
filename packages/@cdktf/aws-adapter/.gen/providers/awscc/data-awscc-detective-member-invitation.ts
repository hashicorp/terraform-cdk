// https://www.terraform.io/docs/providers/awscc/d/detective_member_invitation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccDetectiveMemberInvitationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/detective_member_invitation.html#id DataAwsccDetectiveMemberInvitation#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/detective_member_invitation.html awscc_detective_member_invitation}
*/
export class DataAwsccDetectiveMemberInvitation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_detective_member_invitation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/detective_member_invitation.html awscc_detective_member_invitation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDetectiveMemberInvitationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDetectiveMemberInvitationConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_email_notification - computed: true, optional: false, required: false
  public get disableEmailNotification() {
    return this.getBooleanAttribute('disable_email_notification');
  }

  // graph_arn - computed: true, optional: false, required: false
  public get graphArn() {
    return this.getStringAttribute('graph_arn');
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

  // member_email_address - computed: true, optional: false, required: false
  public get memberEmailAddress() {
    return this.getStringAttribute('member_email_address');
  }

  // member_id - computed: true, optional: false, required: false
  public get memberId() {
    return this.getStringAttribute('member_id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
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
