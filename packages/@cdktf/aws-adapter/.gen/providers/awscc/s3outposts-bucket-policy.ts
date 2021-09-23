// https://www.terraform.io/docs/providers/awscc/r/s3outposts_bucket_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3OutpostsBucketPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the specified bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_bucket_policy.html#bucket S3OutpostsBucketPolicy#bucket}
  */
  readonly bucket: string;
  /**
  * A policy document containing permissions to add to the specified bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_bucket_policy.html#policy_document S3OutpostsBucketPolicy#policy_document}
  */
  readonly policyDocument: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_bucket_policy.html awscc_s3outposts_bucket_policy}
*/
export class S3OutpostsBucketPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_s3outposts_bucket_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/s3outposts_bucket_policy.html awscc_s3outposts_bucket_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3OutpostsBucketPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: S3OutpostsBucketPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3outposts_bucket_policy',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._policyDocument = config.policyDocument;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_document - computed: false, optional: false, required: true
  private _policyDocument: { [key: string]: string } | cdktf.IResolvable;
  public get policyDocument() {
    return this.interpolationForAttribute('policy_document') as any;
  }
  public set policyDocument(value: { [key: string]: string } | cdktf.IResolvable) {
    this._policyDocument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      policy_document: cdktf.hashMapper(cdktf.anyToTerraform)(this._policyDocument),
    };
  }
}
