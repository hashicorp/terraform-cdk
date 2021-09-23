// https://www.terraform.io/docs/providers/awscc/r/signer_profile_permission.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
export class SignerProfilePermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_signer_profile_permission";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/signer_profile_permission.html awscc_signer_profile_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SignerProfilePermissionConfig
  */
  public constructor(scope: Construct, id: string, config: SignerProfilePermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_signer_profile_permission',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._principal = config.principal;
    this._profileName = config.profileName;
    this._profileVersion = config.profileVersion;
    this._statementId = config.statementId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action: string;
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
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

  // profile_name - computed: false, optional: false, required: true
  private _profileName: string;
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName
  }

  // profile_version - computed: true, optional: true, required: false
  private _profileVersion?: string;
  public get profileVersion() {
    return this.getStringAttribute('profile_version');
  }
  public set profileVersion(value: string) {
    this._profileVersion = value;
  }
  public resetProfileVersion() {
    this._profileVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileVersionInput() {
    return this._profileVersion
  }

  // statement_id - computed: false, optional: false, required: true
  private _statementId: string;
  public get statementId() {
    return this.getStringAttribute('statement_id');
  }
  public set statementId(value: string) {
    this._statementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementIdInput() {
    return this._statementId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      principal: cdktf.stringToTerraform(this._principal),
      profile_name: cdktf.stringToTerraform(this._profileName),
      profile_version: cdktf.stringToTerraform(this._profileVersion),
      statement_id: cdktf.stringToTerraform(this._statementId),
    };
  }
}
