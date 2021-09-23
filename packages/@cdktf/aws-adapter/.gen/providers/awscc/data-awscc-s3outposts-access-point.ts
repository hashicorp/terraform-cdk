// https://www.terraform.io/docs/providers/awscc/d/s3outposts_access_point.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccS3OutpostsAccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/s3outposts_access_point.html#id DataAwsccS3OutpostsAccessPoint#id}
  */
  readonly id: string;
}
export class DataAwsccS3OutpostsAccessPointVpcConfiguration extends cdktf.ComplexComputedList {

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export function dataAwsccS3OutpostsAccessPointVpcConfigurationToTerraform(struct?: DataAwsccS3OutpostsAccessPointVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3outposts_access_point.html awscc_s3outposts_access_point}
*/
export class DataAwsccS3OutpostsAccessPoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_s3outposts_access_point";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3outposts_access_point.html awscc_s3outposts_access_point} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccS3OutpostsAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccS3OutpostsAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_s3outposts_access_point',
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

  // policy - computed: true, optional: false, required: false
  public policy(key: string): string {
    return new cdktf.StringMap(this, 'policy').lookup(key);
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
