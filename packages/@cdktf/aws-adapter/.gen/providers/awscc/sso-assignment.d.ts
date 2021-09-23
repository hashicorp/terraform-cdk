import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoAssignmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * The sso instance that the permission set is owned.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html#instance_arn SsoAssignment#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * The permission set that the assignemt will be assigned
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html#permission_set_arn SsoAssignment#permission_set_arn}
    */
    readonly permissionSetArn: string;
    /**
    * The assignee's identifier, user id/group id
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html#principal_id SsoAssignment#principal_id}
    */
    readonly principalId: string;
    /**
    * The assignee's type, user/group
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html#principal_type SsoAssignment#principal_type}
    */
    readonly principalType: string;
    /**
    * The account id to be provisioned.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html#target_id SsoAssignment#target_id}
    */
    readonly targetId: string;
    /**
    * The type of resource to be provsioned to, only aws account now
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html#target_type SsoAssignment#target_type}
    */
    readonly targetType: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html awscc_sso_assignment}
*/
export declare class SsoAssignment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sso_assignment.html awscc_sso_assignment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoAssignmentConfig
    */
    constructor(scope: Construct, id: string, config: SsoAssignmentConfig);
    get id(): string;
    private _instanceArn;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string;
    private _permissionSetArn;
    get permissionSetArn(): string;
    set permissionSetArn(value: string);
    get permissionSetArnInput(): string;
    private _principalId;
    get principalId(): string;
    set principalId(value: string);
    get principalIdInput(): string;
    private _principalType;
    get principalType(): string;
    set principalType(value: string);
    get principalTypeInput(): string;
    private _targetId;
    get targetId(): string;
    set targetId(value: string);
    get targetIdInput(): string;
    private _targetType;
    get targetType(): string;
    set targetType(value: string);
    get targetTypeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
