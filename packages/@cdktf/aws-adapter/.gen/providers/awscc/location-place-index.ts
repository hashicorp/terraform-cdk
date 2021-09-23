// https://www.terraform.io/docs/providers/awscc/r/location_place_index.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocationPlaceIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html#data_source LocationPlaceIndex#data_source}
  */
  readonly dataSource: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html#data_source_configuration LocationPlaceIndex#data_source_configuration}
  */
  readonly dataSourceConfiguration?: LocationPlaceIndexDataSourceConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html#description LocationPlaceIndex#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html#index_name LocationPlaceIndex#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html#pricing_plan LocationPlaceIndex#pricing_plan}
  */
  readonly pricingPlan: string;
}
export interface LocationPlaceIndexDataSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html#intended_use LocationPlaceIndex#intended_use}
  */
  readonly intendedUse?: string;
}

export function locationPlaceIndexDataSourceConfigurationToTerraform(struct?: LocationPlaceIndexDataSourceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    intended_use: cdktf.stringToTerraform(struct!.intendedUse),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html awscc_location_place_index}
*/
export class LocationPlaceIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_location_place_index";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html awscc_location_place_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocationPlaceIndexConfig
  */
  public constructor(scope: Construct, id: string, config: LocationPlaceIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_location_place_index',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataSource = config.dataSource;
    this._dataSourceConfiguration = config.dataSourceConfiguration;
    this._description = config.description;
    this._indexName = config.indexName;
    this._pricingPlan = config.pricingPlan;
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

  // data_source - computed: false, optional: false, required: true
  private _dataSource: string;
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource
  }

  // data_source_configuration - computed: true, optional: true, required: false
  private _dataSourceConfiguration?: LocationPlaceIndexDataSourceConfiguration;
  public get dataSourceConfiguration() {
    return this.interpolationForAttribute('data_source_configuration') as any;
  }
  public set dataSourceConfiguration(value: LocationPlaceIndexDataSourceConfiguration) {
    this._dataSourceConfiguration = value;
  }
  public resetDataSourceConfiguration() {
    this._dataSourceConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceConfigurationInput() {
    return this._dataSourceConfiguration
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

  // index_arn - computed: true, optional: false, required: false
  public get indexArn() {
    return this.getStringAttribute('index_arn');
  }

  // index_name - computed: false, optional: false, required: true
  private _indexName: string;
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_source: cdktf.stringToTerraform(this._dataSource),
      data_source_configuration: locationPlaceIndexDataSourceConfigurationToTerraform(this._dataSourceConfiguration),
      description: cdktf.stringToTerraform(this._description),
      index_name: cdktf.stringToTerraform(this._indexName),
      pricing_plan: cdktf.stringToTerraform(this._pricingPlan),
    };
  }
}
