// https://www.terraform.io/docs/providers/awscc/d/macie_findings_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccMacieFindingsFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/macie_findings_filter.html#id DataAwsccMacieFindingsFilter#id}
  */
  readonly id: string;
}
export class DataAwsccMacieFindingsFilterFindingCriteriaCriterion extends cdktf.ComplexComputedList {

  // eq - computed: true, optional: false, required: false
  public get eq() {
    return this.getListAttribute('eq');
  }

  // gt - computed: true, optional: false, required: false
  public get gt() {
    return this.getNumberAttribute('gt');
  }

  // gte - computed: true, optional: false, required: false
  public get gte() {
    return this.getNumberAttribute('gte');
  }

  // lt - computed: true, optional: false, required: false
  public get lt() {
    return this.getNumberAttribute('lt');
  }

  // lte - computed: true, optional: false, required: false
  public get lte() {
    return this.getNumberAttribute('lte');
  }

  // neq - computed: true, optional: false, required: false
  public get neq() {
    return this.getListAttribute('neq');
  }
}

export function dataAwsccMacieFindingsFilterFindingCriteriaCriterionToTerraform(struct?: DataAwsccMacieFindingsFilterFindingCriteriaCriterion): any {
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

export class DataAwsccMacieFindingsFilterFindingCriteria extends cdktf.ComplexComputedList {

  // criterion - computed: true, optional: false, required: false
  public get criterion() {
    return this.interpolationForAttribute('criterion') as any;
  }
}

export function dataAwsccMacieFindingsFilterFindingCriteriaToTerraform(struct?: DataAwsccMacieFindingsFilterFindingCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    criterion: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.criterion),
  }
}

export class DataAwsccMacieFindingsFilterFindingsFilterListItems extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccMacieFindingsFilterFindingsFilterListItemsToTerraform(struct?: DataAwsccMacieFindingsFilterFindingsFilterListItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/macie_findings_filter.html awscc_macie_findings_filter}
*/
export class DataAwsccMacieFindingsFilter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_macie_findings_filter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/macie_findings_filter.html awscc_macie_findings_filter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMacieFindingsFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMacieFindingsFilterConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // finding_criteria - computed: true, optional: false, required: false
  public get findingCriteria() {
    return this.interpolationForAttribute('finding_criteria') as any;
  }

  // findings_filter_list_items - computed: true, optional: false, required: false
  public get findingsFilterListItems() {
    return this.interpolationForAttribute('findings_filter_list_items') as any;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getNumberAttribute('position');
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
