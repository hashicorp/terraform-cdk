// https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3MultiRegionAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Multi Region Access Point to apply policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point_policy.html#mrap_name S3MultiRegionAccessPointPolicy#mrap_name}
  */
  readonly mrapName: string;
  /**
  * Policy document to apply to a Multi Region Access Point
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point_policy.html#policy S3MultiRegionAccessPointPolicy#policy}
  */
  readonly policy: { [key: string]: string } | cdktf.IResolvable;
}
export class S3MultiRegionAccessPointPolicyPolicyStatus extends cdktf.ComplexComputedList {

  // is_public - computed: true, optional: false, required: true
  public get isPublic() {
    return this.getStringAttribute('is_public');
  }
}

export function s3MultiRegionAccessPointPolicyPolicyStatusToTerraform(struct?: S3MultiRegionAccessPointPolicyPolicyStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_public: cdktf.stringToTerraform(struct!.isPublic),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point_policy.html awscc_s3_multi_region_access_point_policy}
*/
export class S3MultiRegionAccessPointPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_s3_multi_region_access_point_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point_policy.html awscc_s3_multi_region_access_point_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3MultiRegionAccessPointPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: S3MultiRegionAccessPointPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3_multi_region_access_point_policy',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._mrapName = config.mrapName;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mrap_name - computed: false, optional: false, required: true
  private _mrapName: string;
  public get mrapName() {
    return this.getStringAttribute('mrap_name');
  }
  public set mrapName(value: string) {
    this._mrapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mrapNameInput() {
    return this._mrapName
  }

  // policy - computed: false, optional: false, required: true
  private _policy: { [key: string]: string } | cdktf.IResolvable;
  public get policy() {
    return this.interpolationForAttribute('policy') as any;
  }
  public set policy(value: { [key: string]: string } | cdktf.IResolvable) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // policy_status - computed: true, optional: false, required: false
  public get policyStatus() {
    return this.interpolationForAttribute('policy_status') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mrap_name: cdktf.stringToTerraform(this._mrapName),
      policy: cdktf.hashMapper(cdktf.anyToTerraform)(this._policy),
    };
  }
}
