// https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ObjectlambdaAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Amazon S3 ObjectLambdaAccessPoint to which the policy applies.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point_policy.html#object_lambda_access_point S3ObjectlambdaAccessPointPolicy#object_lambda_access_point}
  */
  readonly objectLambdaAccessPoint: string;
  /**
  * A policy document containing permissions to add to the specified ObjectLambdaAccessPoint. For more information, see Access Policy Language Overview (https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html) in the Amazon Simple Storage Service Developer Guide. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point_policy.html#policy_document S3ObjectlambdaAccessPointPolicy#policy_document}
  */
  readonly policyDocument: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point_policy.html awscc_s3objectlambda_access_point_policy}
*/
export class S3ObjectlambdaAccessPointPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_s3objectlambda_access_point_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/s3objectlambda_access_point_policy.html awscc_s3objectlambda_access_point_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ObjectlambdaAccessPointPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: S3ObjectlambdaAccessPointPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3objectlambda_access_point_policy',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._objectLambdaAccessPoint = config.objectLambdaAccessPoint;
    this._policyDocument = config.policyDocument;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // object_lambda_access_point - computed: false, optional: false, required: true
  private _objectLambdaAccessPoint: string;
  public get objectLambdaAccessPoint() {
    return this.getStringAttribute('object_lambda_access_point');
  }
  public set objectLambdaAccessPoint(value: string) {
    this._objectLambdaAccessPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLambdaAccessPointInput() {
    return this._objectLambdaAccessPoint
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
      object_lambda_access_point: cdktf.stringToTerraform(this._objectLambdaAccessPoint),
      policy_document: cdktf.hashMapper(cdktf.anyToTerraform)(this._policyDocument),
    };
  }
}
