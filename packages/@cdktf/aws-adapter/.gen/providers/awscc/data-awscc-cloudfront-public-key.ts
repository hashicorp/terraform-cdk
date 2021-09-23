// https://www.terraform.io/docs/providers/awscc/d/cloudfront_public_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCloudfrontPublicKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_public_key.html#id DataAwsccCloudfrontPublicKey#id}
  */
  readonly id: string;
}
export class DataAwsccCloudfrontPublicKeyPublicKeyConfig extends cdktf.ComplexComputedList {

  // caller_reference - computed: true, optional: false, required: false
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // encoded_key - computed: true, optional: false, required: false
  public get encodedKey() {
    return this.getStringAttribute('encoded_key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccCloudfrontPublicKeyPublicKeyConfigToTerraform(struct?: DataAwsccCloudfrontPublicKeyPublicKeyConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    caller_reference: cdktf.stringToTerraform(struct!.callerReference),
    comment: cdktf.stringToTerraform(struct!.comment),
    encoded_key: cdktf.stringToTerraform(struct!.encodedKey),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_public_key.html awscc_cloudfront_public_key}
*/
export class DataAwsccCloudfrontPublicKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudfront_public_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_public_key.html awscc_cloudfront_public_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudfrontPublicKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudfrontPublicKeyConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // public_key_config - computed: true, optional: false, required: false
  public get publicKeyConfig() {
    return this.interpolationForAttribute('public_key_config') as any;
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
