import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoPermissionSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * The permission set description.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#description SsoPermissionSet#description}
    */
    readonly description?: string;
    /**
    * The inline policy to put in permission set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#inline_policy SsoPermissionSet#inline_policy}
    */
    readonly inlinePolicy?: string;
    /**
    * The sso instance arn that the permission set is owned.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#instance_arn SsoPermissionSet#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#managed_policies SsoPermissionSet#managed_policies}
    */
    readonly managedPolicies?: string[];
    /**
    * The name you want to assign to this permission set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#name SsoPermissionSet#name}
    */
    readonly name: string;
    /**
    * The relay state URL that redirect links to any service in the AWS Management Console.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#relay_state_type SsoPermissionSet#relay_state_type}
    */
    readonly relayStateType?: string;
    /**
    * The length of time that a user can be signed in to an AWS account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#session_duration SsoPermissionSet#session_duration}
    */
    readonly sessionDuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#tags SsoPermissionSet#tags}
    */
    readonly tags?: SsoPermissionSetTags[];
}
export interface SsoPermissionSetTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#key SsoPermissionSet#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html#value SsoPermissionSet#value}
    */
    readonly value: string;
}
export declare function ssoPermissionSetTagsToTerraform(struct?: SsoPermissionSetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html awscc_sso_permission_set}
*/
export declare class SsoPermissionSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sso_permission_set.html awscc_sso_permission_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoPermissionSetConfig
    */
    constructor(scope: Construct, id: string, config: SsoPermissionSetConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _inlinePolicy?;
    get inlinePolicy(): string;
    set inlinePolicy(value: string);
    resetInlinePolicy(): void;
    get inlinePolicyInput(): string | undefined;
    private _instanceArn;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string;
    private _managedPolicies?;
    get managedPolicies(): string[];
    set managedPolicies(value: string[]);
    resetManagedPolicies(): void;
    get managedPoliciesInput(): string[] | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get permissionSetArn(): string;
    private _relayStateType?;
    get relayStateType(): string;
    set relayStateType(value: string);
    resetRelayStateType(): void;
    get relayStateTypeInput(): string | undefined;
    private _sessionDuration?;
    get sessionDuration(): string;
    set sessionDuration(value: string);
    resetSessionDuration(): void;
    get sessionDurationInput(): string | undefined;
    private _tags?;
    get tags(): SsoPermissionSetTags[];
    set tags(value: SsoPermissionSetTags[]);
    resetTags(): void;
    get tagsInput(): SsoPermissionSetTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
