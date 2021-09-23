// https://www.terraform.io/docs/providers/awscc/d/s3_access_point.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccS3AccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/s3_access_point.html#id DataAwsccS3AccessPoint#id}
  */
  readonly id: string;
}
export class DataAwsccS3AccessPointPolicyStatus extends cdktf.ComplexComputedList {

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getStringAttribute('is_public');
  }
}

export function dataAwsccS3AccessPointPolicyStatusToTerraform(struct?: DataAwsccS3AccessPointPolicyStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_public: cdktf.stringToTerraform(struct!.isPublic),
  }
}

export class DataAwsccS3AccessPointPublicAccessBlockConfiguration extends cdktf.ComplexComputedList {

  // block_public_acls - computed: true, optional: false, required: false
  public get blockPublicAcls() {
    return this.getBooleanAttribute('block_public_acls');
  }

  // block_public_policy - computed: true, optional: false, required: false
  public get blockPublicPolicy() {
    return this.getBooleanAttribute('block_public_policy');
  }

  // ignore_public_acls - computed: true, optional: false, required: false
  public get ignorePublicAcls() {
    return this.getBooleanAttribute('ignore_public_acls');
  }

  // restrict_public_buckets - computed: true, optional: false, required: false
  public get restrictPublicBuckets() {
    return this.getBooleanAttribute('restrict_public_buckets');
  }
}

export function dataAwsccS3AccessPointPublicAccessBlockConfigurationToTerraform(struct?: DataAwsccS3AccessPointPublicAccessBlockConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    block_public_acls: cdktf.booleanToTerraform(struct!.blockPublicAcls),
    block_public_policy: cdktf.booleanToTerraform(struct!.blockPublicPolicy),
    ignore_public_acls: cdktf.booleanToTerraform(struct!.ignorePublicAcls),
    restrict_public_buckets: cdktf.booleanToTerraform(struct!.restrictPublicBuckets),
  }
}

export class DataAwsccS3AccessPointVpcConfiguration extends cdktf.ComplexComputedList {

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export function dataAwsccS3AccessPointVpcConfigurationToTerraform(struct?: DataAwsccS3AccessPointVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3_access_point.html awscc_s3_access_point}
*/
export class DataAwsccS3AccessPoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_s3_access_point";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3_access_point.html awscc_s3_access_point} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccS3AccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccS3AccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3_access_point',
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

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_origin - computed: true, optional: false, required: false
  public get networkOrigin() {
    return this.getStringAttribute('network_origin');
  }

  // policy - computed: true, optional: false, required: false
  public policy(key: string): string {
    return new cdktf.StringMap(this, 'policy').lookup(key);
  }

  // policy_status - computed: true, optional: false, required: false
  public get policyStatus() {
    return this.interpolationForAttribute('policy_status') as any;
  }

  // public_access_block_configuration - computed: true, optional: false, required: false
  public get publicAccessBlockConfiguration() {
    return this.interpolationForAttribute('public_access_block_configuration') as any;
  }

  // vpc_configuration - computed: true, optional: false, required: false
  public get vpcConfiguration() {
    return this.interpolationForAttribute('vpc_configuration') as any;
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
