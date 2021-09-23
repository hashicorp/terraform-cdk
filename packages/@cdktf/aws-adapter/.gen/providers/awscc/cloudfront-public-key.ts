// https://www.terraform.io/docs/providers/awscc/r/cloudfront_public_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontPublicKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_public_key.html#public_key_config CloudfrontPublicKey#public_key_config}
  */
  readonly publicKeyConfig: CloudfrontPublicKeyPublicKeyConfig;
}
export interface CloudfrontPublicKeyPublicKeyConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_public_key.html#caller_reference CloudfrontPublicKey#caller_reference}
  */
  readonly callerReference: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_public_key.html#comment CloudfrontPublicKey#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_public_key.html#encoded_key CloudfrontPublicKey#encoded_key}
  */
  readonly encodedKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_public_key.html#name CloudfrontPublicKey#name}
  */
  readonly name: string;
}

export function cloudfrontPublicKeyPublicKeyConfigToTerraform(struct?: CloudfrontPublicKeyPublicKeyConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    caller_reference: cdktf.stringToTerraform(struct!.callerReference),
    comment: cdktf.stringToTerraform(struct!.comment),
    encoded_key: cdktf.stringToTerraform(struct!.encodedKey),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_public_key.html awscc_cloudfront_public_key}
*/
export class CloudfrontPublicKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudfront_public_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_public_key.html awscc_cloudfront_public_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontPublicKeyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontPublicKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudfront_public_key',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._publicKeyConfig = config.publicKeyConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // public_key_config - computed: false, optional: false, required: true
  private _publicKeyConfig: CloudfrontPublicKeyPublicKeyConfig;
  public get publicKeyConfig() {
    return this.interpolationForAttribute('public_key_config') as any;
  }
  public set publicKeyConfig(value: CloudfrontPublicKeyPublicKeyConfig) {
    this._publicKeyConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyConfigInput() {
    return this._publicKeyConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      public_key_config: cloudfrontPublicKeyPublicKeyConfigToTerraform(this._publicKeyConfig),
    };
  }
}
