import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class DetectiveMemberInvitation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/detective_member_invitation.html awscc_detective_member_invitation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DetectiveMemberInvitationConfig
    */
    constructor(scope: Construct, id: string, config: DetectiveMemberInvitationConfig);
    private _disableEmailNotification?;
    get disableEmailNotification(): boolean | cdktf.IResolvable;
    set disableEmailNotification(value: boolean | cdktf.IResolvable);
    resetDisableEmailNotification(): void;
    get disableEmailNotificationInput(): boolean | cdktf.IResolvable | undefined;
    private _graphArn;
    get graphArn(): string;
    set graphArn(value: string);
    get graphArnInput(): string;
    get id(): string;
    private _memberEmailAddress;
    get memberEmailAddress(): string;
    set memberEmailAddress(value: string);
    get memberEmailAddressInput(): string;
    private _memberId;
    get memberId(): string;
    set memberId(value: string);
    get memberIdInput(): string;
    private _message?;
    get message(): string;
    set message(value: string);
    resetMessage(): void;
    get messageInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
