// https://www.terraform.io/docs/providers/awscc/r/location_map.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocationMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_map.html#configuration LocationMap#configuration}
  */
  readonly configuration: LocationMapConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_map.html#description LocationMap#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_map.html#map_name LocationMap#map_name}
  */
  readonly mapName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_map.html#pricing_plan LocationMap#pricing_plan}
  */
  readonly pricingPlan: string;
}
export interface LocationMapConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_map.html#style LocationMap#style}
  */
  readonly style: string;
}

export function locationMapConfigurationToTerraform(struct?: LocationMapConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    style: cdktf.stringToTerraform(struct!.style),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/location_map.html awscc_location_map}
*/
export class LocationMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_location_map";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/location_map.html awscc_location_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocationMapConfig
  */
  public constructor(scope: Construct, id: string, config: LocationMapConfig) {
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
    this._configuration = config.configuration;
    this._description = config.description;
    this._mapName = config.mapName;
    this._pricingPlan = config.pricingPlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration: LocationMapConfiguration;
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }
  public set configuration(value: LocationMapConfiguration) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_source - computed: true, optional: false, required: false
  public get dataSource() {
    return this.getStringAttribute('data_source');
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

  // map_arn - computed: true, optional: false, required: false
  public get mapArn() {
    return this.getStringAttribute('map_arn');
  }

  // map_name - computed: false, optional: false, required: true
  private _mapName: string;
  public get mapName() {
    return this.getStringAttribute('map_name');
  }
  public set mapName(value: string) {
    this._mapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapNameInput() {
    return this._mapName
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
      configuration: locationMapConfigurationToTerraform(this._configuration),
      description: cdktf.stringToTerraform(this._description),
      map_name: cdktf.stringToTerraform(this._mapName),
      pricing_plan: cdktf.stringToTerraform(this._pricingPlan),
    };
  }
}
