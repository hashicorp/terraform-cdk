// https://www.terraform.io/docs/providers/awscc/d/location_map.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccLocationMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/location_map.html#id DataAwsccLocationMap#id}
  */
  readonly id: string;
}
export class DataAwsccLocationMapConfiguration extends cdktf.ComplexComputedList {

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }
}

export function dataAwsccLocationMapConfigurationToTerraform(struct?: DataAwsccLocationMapConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    style: cdktf.stringToTerraform(struct!.style),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/location_map.html awscc_location_map}
*/
export class DataAwsccLocationMap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_location_map";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/location_map.html awscc_location_map} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLocationMapConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLocationMapConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_location_map',
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

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_source - computed: true, optional: false, required: false
  public get dataSource() {
    return this.getStringAttribute('data_source');
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

  // map_arn - computed: true, optional: false, required: false
  public get mapArn() {
    return this.getStringAttribute('map_arn');
  }

  // map_name - computed: true, optional: false, required: false
  public get mapName() {
    return this.getStringAttribute('map_name');
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
