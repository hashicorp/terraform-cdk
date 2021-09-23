// https://www.terraform.io/docs/providers/awscc/d/accessanalyzer_analyzer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccAccessanalyzerAnalyzerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/accessanalyzer_analyzer.html#id DataAwsccAccessanalyzerAnalyzer#id}
  */
  readonly id: string;
}
export class DataAwsccAccessanalyzerAnalyzerArchiveRulesFilter extends cdktf.ComplexComputedList {

  // contains - computed: true, optional: false, required: false
  public get contains() {
    return this.getListAttribute('contains');
  }

  // eq - computed: true, optional: false, required: false
  public get eq() {
    return this.getListAttribute('eq');
  }

  // exists - computed: true, optional: false, required: false
  public get exists() {
    return this.getBooleanAttribute('exists');
  }

  // neq - computed: true, optional: false, required: false
  public get neq() {
    return this.getListAttribute('neq');
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }
}

export function dataAwsccAccessanalyzerAnalyzerArchiveRulesFilterToTerraform(struct?: DataAwsccAccessanalyzerAnalyzerArchiveRulesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contains: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contains),
    eq: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eq),
    exists: cdktf.booleanToTerraform(struct!.exists),
    neq: cdktf.listMapper(cdktf.stringToTerraform)(struct!.neq),
    property: cdktf.stringToTerraform(struct!.property),
  }
}

export class DataAwsccAccessanalyzerAnalyzerArchiveRules extends cdktf.ComplexComputedList {

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
}

export function dataAwsccAccessanalyzerAnalyzerArchiveRulesToTerraform(struct?: DataAwsccAccessanalyzerAnalyzerArchiveRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filter: cdktf.listMapper(dataAwsccAccessanalyzerAnalyzerArchiveRulesFilterToTerraform)(struct!.filter),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
  }
}

export class DataAwsccAccessanalyzerAnalyzerTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccAccessanalyzerAnalyzerTagsToTerraform(struct?: DataAwsccAccessanalyzerAnalyzerTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/accessanalyzer_analyzer.html awscc_accessanalyzer_analyzer}
*/
export class DataAwsccAccessanalyzerAnalyzer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_accessanalyzer_analyzer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/accessanalyzer_analyzer.html awscc_accessanalyzer_analyzer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccAccessanalyzerAnalyzerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccAccessanalyzerAnalyzerConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_accessanalyzer_analyzer',
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

  // analyzer_name - computed: true, optional: false, required: false
  public get analyzerName() {
    return this.getStringAttribute('analyzer_name');
  }

  // archive_rules - computed: true, optional: false, required: false
  public get archiveRules() {
    return this.interpolationForAttribute('archive_rules') as any;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
