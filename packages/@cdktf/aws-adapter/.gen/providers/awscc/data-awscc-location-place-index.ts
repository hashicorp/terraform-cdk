// https://www.terraform.io/docs/providers/awscc/d/location_place_index.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccLocationPlaceIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/location_place_index.html#id DataAwsccLocationPlaceIndex#id}
  */
  readonly id: string;
}
export class DataAwsccLocationPlaceIndexDataSourceConfiguration extends cdktf.ComplexComputedList {

  // intended_use - computed: true, optional: false, required: false
  public get intendedUse() {
    return this.getStringAttribute('intended_use');
  }
}

export function dataAwsccLocationPlaceIndexDataSourceConfigurationToTerraform(struct?: DataAwsccLocationPlaceIndexDataSourceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    intended_use: cdktf.stringToTerraform(struct!.intendedUse),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/location_place_index.html awscc_location_place_index}
*/
export class DataAwsccLocationPlaceIndex extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_location_place_index";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/location_place_index.html awscc_location_place_index} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLocationPlaceIndexConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLocationPlaceIndexConfig) {
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

  // data_source - computed: true, optional: false, required: false
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }

  // data_source_configuration - computed: true, optional: false, required: false
  public get dataSourceConfiguration() {
    return this.interpolationForAttribute('data_source_configuration') as any;
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

  // index_arn - computed: true, optional: false, required: false
  public get indexArn() {
    return this.getStringAttribute('index_arn');
  }

  // index_name - computed: true, optional: false, required: false
  public get indexName() {
    return this.getStringAttribute('index_name');
  }

  // pricing_plan - computed: true, optional: false, required: false
  public get pricingPlan() {
    return this.getStringAttribute('pricing_plan');
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
