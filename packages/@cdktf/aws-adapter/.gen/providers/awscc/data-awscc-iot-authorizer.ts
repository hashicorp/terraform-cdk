// https://www.terraform.io/docs/providers/awscc/d/iot_authorizer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotAuthorizerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_authorizer.html#id DataAwsccIotAuthorizer#id}
  */
  readonly id: string;
}
export class DataAwsccIotAuthorizerTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotAuthorizerTagsToTerraform(struct?: DataAwsccIotAuthorizerTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_authorizer.html awscc_iot_authorizer}
*/
export class DataAwsccIotAuthorizer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_authorizer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_authorizer.html awscc_iot_authorizer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotAuthorizerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotAuthorizerConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authorizer_function_arn - computed: true, optional: false, required: false
  public get authorizerFunctionArn() {
    return this.getStringAttribute('authorizer_function_arn');
  }

  // authorizer_name - computed: true, optional: false, required: false
  public get authorizerName() {
    return this.getStringAttribute('authorizer_name');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // signing_disabled - computed: true, optional: false, required: false
  public get signingDisabled() {
    return this.getBooleanAttribute('signing_disabled');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // token_key_name - computed: true, optional: false, required: false
  public get tokenKeyName() {
    return this.getStringAttribute('token_key_name');
  }

  // token_signing_public_keys - computed: true, optional: false, required: false
  public tokenSigningPublicKeys(key: string): string {
    return new cdktf.StringMap(this, 'token_signing_public_keys').lookup(key);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
