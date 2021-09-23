import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SignerProfilePermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_profile_permission.html#action SignerProfilePermission#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_profile_permission.html#principal SignerProfilePermission#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_profile_permission.html#profile_name SignerProfilePermission#profile_name}
    */
    readonly profileName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_profile_permission.html#profile_version SignerProfilePermission#profile_version}
    */
    readonly profileVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/signer_profile_permission.html#statement_id SignerProfilePermission#statement_id}
    */
    readonly statementId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/signer_profile_permission.html awscc_signer_profile_permission}
*/
export declare class SignerProfilePermission extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/signer_profile_permission.html awscc_signer_profile_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SignerProfilePermissionConfig
    */
    constructor(scope: Construct, id: string, config: SignerProfilePermissionConfig);
    private _action;
    get action(): string;
    set action(value: string);
    get actionInput(): string;
    get id(): string;
    private _principal;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string;
    private _profileName;
    get profileName(): string;
    set profileName(value: string);
    get profileNameInput(): string;
    private _profileVersion?;
    get profileVersion(): string;
    set profileVersion(value: string);
    resetProfileVersion(): void;
    get profileVersionInput(): string | undefined;
    private _statementId;
    get statementId(): string;
    set statementId(value: string);
    get statementIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
