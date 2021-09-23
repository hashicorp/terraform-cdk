import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class DataAwsccDetectiveMemberInvitation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/detective_member_invitation.html awscc_detective_member_invitation} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDetectiveMemberInvitationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDetectiveMemberInvitationConfig);
    get disableEmailNotification(): cdktf.IResolvable;
    get graphArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get memberEmailAddress(): string;
    get memberId(): string;
    get message(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
