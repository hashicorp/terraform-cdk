// https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MacieFindingsFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#action MacieFindingsFilter#action}
  */
  readonly action?: string;
  /**
  * Findings filter description
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#description MacieFindingsFilter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#finding_criteria MacieFindingsFilter#finding_criteria}
  */
  readonly findingCriteria: MacieFindingsFilterFindingCriteria;
  /**
  * Findings filter name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#name MacieFindingsFilter#name}
  */
  readonly name: string;
  /**
  * Findings filter position.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#position MacieFindingsFilter#position}
  */
  readonly position?: number;
}
export interface MacieFindingsFilterFindingCriteriaCriterion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#eq MacieFindingsFilter#eq}
  */
  readonly eq?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#gt MacieFindingsFilter#gt}
  */
  readonly gt?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#gte MacieFindingsFilter#gte}
  */
  readonly gte?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#lt MacieFindingsFilter#lt}
  */
  readonly lt?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#lte MacieFindingsFilter#lte}
  */
  readonly lte?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#neq MacieFindingsFilter#neq}
  */
  readonly neq?: string[];
}

export function macieFindingsFilterFindingCriteriaCriterionToTerraform(struct?: MacieFindingsFilterFindingCriteriaCriterion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    eq: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eq),
    gt: cdktf.numberToTerraform(struct!.gt),
    gte: cdktf.numberToTerraform(struct!.gte),
    lt: cdktf.numberToTerraform(struct!.lt),
    lte: cdktf.numberToTerraform(struct!.lte),
    neq: cdktf.listMapper(cdktf.stringToTerraform)(struct!.neq),
  }
}

export interface MacieFindingsFilterFindingCriteria {
  /**
  * Map of filter criteria.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html#criterion MacieFindingsFilter#criterion}
  */
  readonly criterion?: { [key: string]: MacieFindingsFilterFindingCriteriaCriterion } | cdktf.IResolvable;
}

export function macieFindingsFilterFindingCriteriaToTerraform(struct?: MacieFindingsFilterFindingCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    criterion: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.criterion),
  }
}

export class MacieFindingsFilterFindingsFilterListItems extends cdktf.ComplexComputedList {

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }
}

export function macieFindingsFilterFindingsFilterListItemsToTerraform(struct?: MacieFindingsFilterFindingsFilterListItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html awscc_macie_findings_filter}
*/
export class MacieFindingsFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_macie_findings_filter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/macie_findings_filter.html awscc_macie_findings_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MacieFindingsFilterConfig
  */
  public constructor(scope: Construct, id: string, config: MacieFindingsFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_macie_findings_filter',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._description = config.description;
    this._findingCriteria = config.findingCriteria;
    this._name = config.name;
    this._position = config.position;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string;
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string ) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // finding_criteria - computed: false, optional: false, required: true
  private _findingCriteria: MacieFindingsFilterFindingCriteria;
  public get findingCriteria() {
    return this.interpolationForAttribute('finding_criteria') as any;
  }
  public set findingCriteria(value: MacieFindingsFilterFindingCriteria) {
    this._findingCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get findingCriteriaInput() {
    return this._findingCriteria
  }

  // findings_filter_list_items - computed: true, optional: false, required: false
  public get findingsFilterListItems() {
    return this.interpolationForAttribute('findings_filter_list_items') as any;
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

  // position - computed: false, optional: true, required: false
  private _position?: number;
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number ) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      finding_criteria: macieFindingsFilterFindingCriteriaToTerraform(this._findingCriteria),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.numberToTerraform(this._position),
    };
  }
}
