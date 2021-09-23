// https://www.terraform.io/docs/providers/awscc/r/location_tracker.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocationTrackerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker.html#description LocationTracker#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker.html#kms_key_id LocationTracker#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker.html#pricing_plan LocationTracker#pricing_plan}
  */
  readonly pricingPlan: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker.html#pricing_plan_data_source LocationTracker#pricing_plan_data_source}
  */
  readonly pricingPlanDataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker.html#tracker_name LocationTracker#tracker_name}
  */
  readonly trackerName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker.html awscc_location_tracker}
*/
export class LocationTracker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_location_tracker";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/location_tracker.html awscc_location_tracker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocationTrackerConfig
  */
  public constructor(scope: Construct, id: string, config: LocationTrackerConfig) {
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
    this._description = config.description;
    this._kmsKeyId = config.kmsKeyId;
    this._pricingPlan = config.pricingPlan;
    this._pricingPlanDataSource = config.pricingPlanDataSource;
    this._trackerName = config.trackerName;
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

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // pricing_plan - computed: false, optional: false, required: true
  private _pricingPlan: string;
  public get pricingPlan() {
    return this.getStringAttribute('pricing_plan');
  }
  public set pricingPlan(value: string) {
    this._pricingPlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingPlanInput() {
    return this._pricingPlan
  }

  // pricing_plan_data_source - computed: true, optional: true, required: false
  private _pricingPlanDataSource?: string;
  public get pricingPlanDataSource() {
    return this.getStringAttribute('pricing_plan_data_source');
  }
  public set pricingPlanDataSource(value: string) {
    this._pricingPlanDataSource = value;
  }
  public resetPricingPlanDataSource() {
    this._pricingPlanDataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingPlanDataSourceInput() {
    return this._pricingPlanDataSource
  }

  // tracker_arn - computed: true, optional: false, required: false
  public get trackerArn() {
    return this.getStringAttribute('tracker_arn');
  }

  // tracker_name - computed: false, optional: false, required: true
  private _trackerName: string;
  public get trackerName() {
    return this.getStringAttribute('tracker_name');
  }
  public set trackerName(value: string) {
    this._trackerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerNameInput() {
    return this._trackerName
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
      description: cdktf.stringToTerraform(this._description),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      pricing_plan: cdktf.stringToTerraform(this._pricingPlan),
      pricing_plan_data_source: cdktf.stringToTerraform(this._pricingPlanDataSource),
      tracker_name: cdktf.stringToTerraform(this._trackerName),
    };
  }
}
