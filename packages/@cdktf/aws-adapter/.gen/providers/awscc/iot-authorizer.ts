// https://www.terraform.io/docs/providers/awscc/r/iot_authorizer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotAuthorizerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_authorizer.html#authorizer_function_arn IotAuthorizer#authorizer_function_arn}
  */
  readonly authorizerFunctionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_authorizer.html#authorizer_name IotAuthorizer#authorizer_name}
  */
  readonly authorizerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_authorizer.html#signing_disabled IotAuthorizer#signing_disabled}
  */
  readonly signingDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_authorizer.html#status IotAuthorizer#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_authorizer.html#tags IotAuthorizer#tags}
  */
  readonly tags?: IotAuthorizerTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_authorizer.html#token_key_name IotAuthorizer#token_key_name}
  */
  readonly tokenKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_authorizer.html#token_signing_public_keys IotAuthorizer#token_signing_public_keys}
  */
  readonly tokenSigningPublicKeys?: { [key: string]: string } | cdktf.IResolvable;
}
export interface IotAuthorizerTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_authorizer.html#key IotAuthorizer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_authorizer.html#value IotAuthorizer#value}
  */
  readonly value: string;
}

export function iotAuthorizerTagsToTerraform(struct?: IotAuthorizerTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_authorizer.html awscc_iot_authorizer}
*/
export class IotAuthorizer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_authorizer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_authorizer.html awscc_iot_authorizer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotAuthorizerConfig
  */
  public constructor(scope: Construct, id: string, config: IotAuthorizerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_authorizer',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorizerFunctionArn = config.authorizerFunctionArn;
    this._authorizerName = config.authorizerName;
    this._signingDisabled = config.signingDisabled;
    this._status = config.status;
    this._tags = config.tags;
    this._tokenKeyName = config.tokenKeyName;
    this._tokenSigningPublicKeys = config.tokenSigningPublicKeys;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorizer_function_arn - computed: false, optional: false, required: true
  private _authorizerFunctionArn: string;
  public get authorizerFunctionArn() {
    return this.getStringAttribute('authorizer_function_arn');
  }
  public set authorizerFunctionArn(value: string) {
    this._authorizerFunctionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerFunctionArnInput() {
    return this._authorizerFunctionArn
  }

  // authorizer_name - computed: true, optional: true, required: false
  private _authorizerName?: string;
  public get authorizerName() {
    return this.getStringAttribute('authorizer_name');
  }
  public set authorizerName(value: string) {
    this._authorizerName = value;
  }
  public resetAuthorizerName() {
    this._authorizerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerNameInput() {
    return this._authorizerName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // signing_disabled - computed: true, optional: true, required: false
  private _signingDisabled?: boolean | cdktf.IResolvable;
  public get signingDisabled() {
    return this.getBooleanAttribute('signing_disabled');
  }
  public set signingDisabled(value: boolean | cdktf.IResolvable) {
    this._signingDisabled = value;
  }
  public resetSigningDisabled() {
    this._signingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingDisabledInput() {
    return this._signingDisabled
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotAuthorizerTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotAuthorizerTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // token_key_name - computed: false, optional: true, required: false
  private _tokenKeyName?: string;
  public get tokenKeyName() {
    return this.getStringAttribute('token_key_name');
  }
  public set tokenKeyName(value: string ) {
    this._tokenKeyName = value;
  }
  public resetTokenKeyName() {
    this._tokenKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenKeyNameInput() {
    return this._tokenKeyName
  }

  // token_signing_public_keys - computed: false, optional: true, required: false
  private _tokenSigningPublicKeys?: { [key: string]: string } | cdktf.IResolvable;
  public get tokenSigningPublicKeys() {
    return this.interpolationForAttribute('token_signing_public_keys') as any;
  }
  public set tokenSigningPublicKeys(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tokenSigningPublicKeys = value;
  }
  public resetTokenSigningPublicKeys() {
    this._tokenSigningPublicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSigningPublicKeysInput() {
    return this._tokenSigningPublicKeys
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorizer_function_arn: cdktf.stringToTerraform(this._authorizerFunctionArn),
      authorizer_name: cdktf.stringToTerraform(this._authorizerName),
      signing_disabled: cdktf.booleanToTerraform(this._signingDisabled),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.listMapper(iotAuthorizerTagsToTerraform)(this._tags),
      token_key_name: cdktf.stringToTerraform(this._tokenKeyName),
      token_signing_public_keys: cdktf.hashMapper(cdktf.anyToTerraform)(this._tokenSigningPublicKeys),
    };
  }
}
