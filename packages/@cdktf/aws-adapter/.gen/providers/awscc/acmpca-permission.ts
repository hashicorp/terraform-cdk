// https://www.terraform.io/docs/providers/awscc/r/acmpca_permission.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
export class AcmpcaPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_acmpca_permission";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/acmpca_permission.html awscc_acmpca_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcmpcaPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: AcmpcaPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_acmpca_permission',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._actions = config.actions;
    this._certificateAuthorityArn = config.certificateAuthorityArn;
    this._principal = config.principal;
    this._sourceAccount = config.sourceAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions: string[];
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions
  }

  // certificate_authority_arn - computed: false, optional: false, required: true
  private _certificateAuthorityArn: string;
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }
  public set certificateAuthorityArn(value: string) {
    this._certificateAuthorityArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnInput() {
    return this._certificateAuthorityArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // principal - computed: false, optional: false, required: true
  private _principal: string;
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal
  }

  // source_account - computed: true, optional: true, required: false
  private _sourceAccount?: string;
  public get sourceAccount() {
    return this.getStringAttribute('source_account');
  }
  public set sourceAccount(value: string) {
    this._sourceAccount = value;
  }
  public resetSourceAccount() {
    this._sourceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAccountInput() {
    return this._sourceAccount
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.listMapper(cdktf.stringToTerraform)(this._actions),
      certificate_authority_arn: cdktf.stringToTerraform(this._certificateAuthorityArn),
      principal: cdktf.stringToTerraform(this._principal),
      source_account: cdktf.stringToTerraform(this._sourceAccount),
    };
  }
}
