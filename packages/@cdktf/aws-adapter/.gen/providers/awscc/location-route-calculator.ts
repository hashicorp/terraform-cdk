// https://www.terraform.io/docs/providers/awscc/r/location_route_calculator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocationRouteCalculatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_route_calculator.html#calculator_name LocationRouteCalculator#calculator_name}
  */
  readonly calculatorName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_route_calculator.html#data_source LocationRouteCalculator#data_source}
  */
  readonly dataSource: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_route_calculator.html#description LocationRouteCalculator#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_route_calculator.html#pricing_plan LocationRouteCalculator#pricing_plan}
  */
  readonly pricingPlan: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/location_route_calculator.html awscc_location_route_calculator}
*/
export class LocationRouteCalculator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_location_route_calculator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/location_route_calculator.html awscc_location_route_calculator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocationRouteCalculatorConfig
  */
  public constructor(scope: Construct, id: string, config: LocationRouteCalculatorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_location_route_calculator',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._calculatorName = config.calculatorName;
    this._dataSource = config.dataSource;
    this._description = config.description;
    this._pricingPlan = config.pricingPlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // calculator_arn - computed: true, optional: false, required: false
  public get calculatorArn() {
    return this.getStringAttribute('calculator_arn');
  }

  // calculator_name - computed: false, optional: false, required: true
  private _calculatorName: string;
  public get calculatorName() {
    return this.getStringAttribute('calculator_name');
  }
  public set calculatorName(value: string) {
    this._calculatorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get calculatorNameInput() {
    return this._calculatorName
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
      calculator_name: cdktf.stringToTerraform(this._calculatorName),
      data_source: cdktf.stringToTerraform(this._dataSource),
      description: cdktf.stringToTerraform(this._description),
      pricing_plan: cdktf.stringToTerraform(this._pricingPlan),
    };
  }
}
