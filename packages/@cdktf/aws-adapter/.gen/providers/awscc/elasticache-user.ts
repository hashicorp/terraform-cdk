// https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticacheUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access permissions string used for this user account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html#access_string ElasticacheUser#access_string}
  */
  readonly accessString?: string;
  /**
  * Must be redis.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html#engine ElasticacheUser#engine}
  */
  readonly engine: string;
  /**
  * Indicates a password is not required for this user account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html#no_password_required ElasticacheUser#no_password_required}
  */
  readonly noPasswordRequired?: boolean | cdktf.IResolvable;
  /**
  * Passwords used for this user account. You can create up to two passwords for each user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html#passwords ElasticacheUser#passwords}
  */
  readonly passwords?: string[];
  /**
  * The ID of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html#user_id ElasticacheUser#user_id}
  */
  readonly userId: string;
  /**
  * The username of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html#user_name ElasticacheUser#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html awscc_elasticache_user}
*/
export class ElasticacheUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_elasticache_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html awscc_elasticache_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticacheUserConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticacheUserConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticache_user',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessString = config.accessString;
    this._engine = config.engine;
    this._noPasswordRequired = config.noPasswordRequired;
    this._passwords = config.passwords;
    this._userId = config.userId;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_string - computed: false, optional: true, required: false
  private _accessString?: string;
  public get accessString() {
    return this.getStringAttribute('access_string');
  }
  public set accessString(value: string ) {
    this._accessString = value;
  }
  public resetAccessString() {
    this._accessString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStringInput() {
    return this._accessString
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // engine - computed: false, optional: false, required: true
  private _engine: string;
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // no_password_required - computed: false, optional: true, required: false
  private _noPasswordRequired?: boolean | cdktf.IResolvable;
  public get noPasswordRequired() {
    return this.getBooleanAttribute('no_password_required');
  }
  public set noPasswordRequired(value: boolean | cdktf.IResolvable ) {
    this._noPasswordRequired = value;
  }
  public resetNoPasswordRequired() {
    this._noPasswordRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPasswordRequiredInput() {
    return this._noPasswordRequired
  }

  // passwords - computed: false, optional: true, required: false
  private _passwords?: string[];
  public get passwords() {
    return this.getListAttribute('passwords');
  }
  public set passwords(value: string[] ) {
    this._passwords = value;
  }
  public resetPasswords() {
    this._passwords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordsInput() {
    return this._passwords
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_id - computed: false, optional: false, required: true
  private _userId: string;
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId
  }

  // user_name - computed: false, optional: false, required: true
  private _userName: string;
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_string: cdktf.stringToTerraform(this._accessString),
      engine: cdktf.stringToTerraform(this._engine),
      no_password_required: cdktf.booleanToTerraform(this._noPasswordRequired),
      passwords: cdktf.listMapper(cdktf.stringToTerraform)(this._passwords),
      user_id: cdktf.stringToTerraform(this._userId),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }
}
