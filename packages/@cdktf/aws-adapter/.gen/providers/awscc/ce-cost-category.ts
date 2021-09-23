// https://www.terraform.io/docs/providers/awscc/r/ce_cost_category.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CeCostCategoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default value for the cost category
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ce_cost_category.html#default_value CeCostCategory#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ce_cost_category.html#name CeCostCategory#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ce_cost_category.html#rule_version CeCostCategory#rule_version}
  */
  readonly ruleVersion: string;
  /**
  * JSON array format of Expression in Billing and Cost Management API
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ce_cost_category.html#rules CeCostCategory#rules}
  */
  readonly rules: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ce_cost_category.html awscc_ce_cost_category}
*/
export class CeCostCategory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ce_cost_category";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ce_cost_category.html awscc_ce_cost_category} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CeCostCategoryConfig
  */
  public constructor(scope: Construct, id: string, config: CeCostCategoryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ce_cost_category',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultValue = config.defaultValue;
    this._name = config.name;
    this._ruleVersion = config.ruleVersion;
    this._rules = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string;
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string ) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue
  }

  // effective_start - computed: true, optional: false, required: false
  public get effectiveStart() {
    return this.getStringAttribute('effective_start');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // rule_version - computed: false, optional: false, required: true
  private _ruleVersion: string;
  public get ruleVersion() {
    return this.getStringAttribute('rule_version');
  }
  public set ruleVersion(value: string) {
    this._ruleVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleVersionInput() {
    return this._ruleVersion
  }

  // rules - computed: false, optional: false, required: true
  private _rules: string;
  public get rules() {
    return this.getStringAttribute('rules');
  }
  public set rules(value: string) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_value: cdktf.stringToTerraform(this._defaultValue),
      name: cdktf.stringToTerraform(this._name),
      rule_version: cdktf.stringToTerraform(this._ruleVersion),
      rules: cdktf.stringToTerraform(this._rules),
    };
  }
}
