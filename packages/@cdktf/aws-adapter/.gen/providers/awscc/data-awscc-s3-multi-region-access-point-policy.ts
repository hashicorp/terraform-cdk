// https://www.terraform.io/docs/providers/awscc/d/s3_multi_region_access_point_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccS3MultiRegionAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/s3_multi_region_access_point_policy.html#id DataAwsccS3MultiRegionAccessPointPolicy#id}
  */
  readonly id: string;
}
export class DataAwsccS3MultiRegionAccessPointPolicyPolicyStatus extends cdktf.ComplexComputedList {

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getStringAttribute('is_public');
  }
}

export function dataAwsccS3MultiRegionAccessPointPolicyPolicyStatusToTerraform(struct?: DataAwsccS3MultiRegionAccessPointPolicyPolicyStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_public: cdktf.stringToTerraform(struct!.isPublic),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3_multi_region_access_point_policy.html awscc_s3_multi_region_access_point_policy}
*/
export class DataAwsccS3MultiRegionAccessPointPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_s3_multi_region_access_point_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3_multi_region_access_point_policy.html awscc_s3_multi_region_access_point_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccS3MultiRegionAccessPointPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccS3MultiRegionAccessPointPolicyConfig) {
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

  // mrap_name - computed: true, optional: false, required: false
  public get mrapName() {
    return this.getStringAttribute('mrap_name');
  }

  // policy - computed: true, optional: false, required: false
  public policy(key: string): string {
    return new cdktf.StringMap(this, 'policy').lookup(key);
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
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
