// https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_point_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccS3ObjectlambdaAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_point_policy.html#id DataAwsccS3ObjectlambdaAccessPointPolicy#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_point_policy.html awscc_s3objectlambda_access_point_policy}
*/
export class DataAwsccS3ObjectlambdaAccessPointPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_s3objectlambda_access_point_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3objectlambda_access_point_policy.html awscc_s3objectlambda_access_point_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccS3ObjectlambdaAccessPointPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccS3ObjectlambdaAccessPointPolicyConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // object_lambda_access_point - computed: true, optional: false, required: false
  public get objectLambdaAccessPoint() {
    return this.getStringAttribute('object_lambda_access_point');
  }

  // policy_document - computed: true, optional: false, required: false
  public policyDocument(key: string): string {
    return new cdktf.StringMap(this, 'policy_document').lookup(key);
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
