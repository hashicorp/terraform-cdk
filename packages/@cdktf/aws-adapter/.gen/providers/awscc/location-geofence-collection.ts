// https://www.terraform.io/docs/providers/awscc/r/location_geofence_collection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocationGeofenceCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_geofence_collection.html#collection_name LocationGeofenceCollection#collection_name}
  */
  readonly collectionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_geofence_collection.html#description LocationGeofenceCollection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_geofence_collection.html#kms_key_id LocationGeofenceCollection#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_geofence_collection.html#pricing_plan LocationGeofenceCollection#pricing_plan}
  */
  readonly pricingPlan: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_geofence_collection.html#pricing_plan_data_source LocationGeofenceCollection#pricing_plan_data_source}
  */
  readonly pricingPlanDataSource?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/location_geofence_collection.html awscc_location_geofence_collection}
*/
export class LocationGeofenceCollection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_location_geofence_collection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/location_geofence_collection.html awscc_location_geofence_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocationGeofenceCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: LocationGeofenceCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_location_geofence_collection',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._collectionName = config.collectionName;
    this._description = config.description;
    this._kmsKeyId = config.kmsKeyId;
    this._pricingPlan = config.pricingPlan;
    this._pricingPlanDataSource = config.pricingPlanDataSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_arn - computed: true, optional: false, required: false
  public get collectionArn() {
    return this.getStringAttribute('collection_arn');
  }

  // collection_name - computed: false, optional: false, required: true
  private _collectionName: string;
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName
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

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string ) {
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collection_name: cdktf.stringToTerraform(this._collectionName),
      description: cdktf.stringToTerraform(this._description),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      pricing_plan: cdktf.stringToTerraform(this._pricingPlan),
      pricing_plan_data_source: cdktf.stringToTerraform(this._pricingPlanDataSource),
    };
  }
}
