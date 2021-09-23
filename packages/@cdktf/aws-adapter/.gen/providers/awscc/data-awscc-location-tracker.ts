// https://www.terraform.io/docs/providers/awscc/d/location_tracker.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccLocationTrackerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/location_tracker.html#id DataAwsccLocationTracker#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/location_tracker.html awscc_location_tracker}
*/
export class DataAwsccLocationTracker extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_location_tracker";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/location_tracker.html awscc_location_tracker} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLocationTrackerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLocationTrackerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_location_tracker',
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // pricing_plan - computed: true, optional: false, required: false
  public get pricingPlan() {
    return this.getStringAttribute('pricing_plan');
  }

  // pricing_plan_data_source - computed: true, optional: false, required: false
  public get pricingPlanDataSource() {
    return this.getStringAttribute('pricing_plan_data_source');
  }

  // tracker_arn - computed: true, optional: false, required: false
  public get trackerArn() {
    return this.getStringAttribute('tracker_arn');
  }

  // tracker_name - computed: true, optional: false, required: false
  public get trackerName() {
    return this.getStringAttribute('tracker_name');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
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
