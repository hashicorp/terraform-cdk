// https://www.terraform.io/docs/providers/awscc/r/kms_alias.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the alias name. This value must begin with alias/ followed by a name, such as alias/ExampleAlias. The alias name cannot begin with alias/aws/. The alias/aws/ prefix is reserved for AWS managed CMKs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_alias.html#alias_name KmsAlias#alias_name}
  */
  readonly aliasName: string;
  /**
  * Identifies the CMK to which the alias refers. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. You cannot specify another alias. For help finding the key ID and ARN, see Finding the Key ID and ARN in the AWS Key Management Service Developer Guide.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_alias.html#target_key_id KmsAlias#target_key_id}
  */
  readonly targetKeyId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kms_alias.html awscc_kms_alias}
*/
export class KmsAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_kms_alias";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kms_alias.html awscc_kms_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsAliasConfig
  */
  public constructor(scope: Construct, id: string, config: KmsAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kms_alias',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._aliasName = config.aliasName;
    this._targetKeyId = config.targetKeyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_name - computed: false, optional: false, required: true
  private _aliasName: string;
  public get aliasName() {
    return this.getStringAttribute('alias_name');
  }
  public set aliasName(value: string) {
    this._aliasName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasNameInput() {
    return this._aliasName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // target_key_id - computed: false, optional: false, required: true
  private _targetKeyId: string;
  public get targetKeyId() {
    return this.getStringAttribute('target_key_id');
  }
  public set targetKeyId(value: string) {
    this._targetKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKeyIdInput() {
    return this._targetKeyId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_name: cdktf.stringToTerraform(this._aliasName),
      target_key_id: cdktf.stringToTerraform(this._targetKeyId),
    };
  }
}
