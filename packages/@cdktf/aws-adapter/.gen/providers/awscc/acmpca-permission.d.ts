import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AcmpcaPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * The actions that the specified AWS service principal can use. Actions IssueCertificate, GetCertificate and ListPermissions must be provided.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_permission.html#actions AcmpcaPermission#actions}
    */
    readonly actions: string[];
    /**
    * The Amazon Resource Name (ARN) of the Private Certificate Authority that grants the permission.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_permission.html#certificate_authority_arn AcmpcaPermission#certificate_authority_arn}
    */
    readonly certificateAuthorityArn: string;
    /**
    * The AWS service or identity that receives the permission. At this time, the only valid principal is acm.amazonaws.com.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_permission.html#principal AcmpcaPermission#principal}
    */
    readonly principal: string;
    /**
    * The ID of the calling account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_permission.html#source_account AcmpcaPermission#source_account}
    */
    readonly sourceAccount?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_permission.html awscc_acmpca_permission}
*/
export declare class AcmpcaPermission extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_permission.html awscc_acmpca_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmpcaPermissionConfig
    */
    constructor(scope: Construct, id: string, config: AcmpcaPermissionConfig);
    private _actions;
    get actions(): string[];
    set actions(value: string[]);
    get actionsInput(): string[];
    private _certificateAuthorityArn;
    get certificateAuthorityArn(): string;
    set certificateAuthorityArn(value: string);
    get certificateAuthorityArnInput(): string;
    get id(): string;
    private _principal;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string;
    private _sourceAccount?;
    get sourceAccount(): string;
    set sourceAccount(value: string);
    resetSourceAccount(): void;
    get sourceAccountInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
