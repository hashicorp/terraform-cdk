// https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessanalyzerAnalyzerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Analyzer name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#analyzer_name AccessanalyzerAnalyzer#analyzer_name}
  */
  readonly analyzerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#archive_rules AccessanalyzerAnalyzer#archive_rules}
  */
  readonly archiveRules?: AccessanalyzerAnalyzerArchiveRules[];
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#tags AccessanalyzerAnalyzer#tags}
  */
  readonly tags?: AccessanalyzerAnalyzerTags[];
  /**
  * The type of the analyzer, must be ACCOUNT or ORGANIZATION
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#type AccessanalyzerAnalyzer#type}
  */
  readonly type: string;
}
export interface AccessanalyzerAnalyzerArchiveRulesFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#contains AccessanalyzerAnalyzer#contains}
  */
  readonly contains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#eq AccessanalyzerAnalyzer#eq}
  */
  readonly eq?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#exists AccessanalyzerAnalyzer#exists}
  */
  readonly exists?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#neq AccessanalyzerAnalyzer#neq}
  */
  readonly neq?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#property AccessanalyzerAnalyzer#property}
  */
  readonly property: string;
}

export function accessanalyzerAnalyzerArchiveRulesFilterToTerraform(struct?: AccessanalyzerAnalyzerArchiveRulesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    contains: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contains),
    eq: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eq),
    exists: cdktf.booleanToTerraform(struct!.exists),
    neq: cdktf.listMapper(cdktf.stringToTerraform)(struct!.neq),
    property: cdktf.stringToTerraform(struct!.property),
  }
}

export interface AccessanalyzerAnalyzerArchiveRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#filter AccessanalyzerAnalyzer#filter}
  */
  readonly filter: AccessanalyzerAnalyzerArchiveRulesFilter[];
  /**
  * The archive rule name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#rule_name AccessanalyzerAnalyzer#rule_name}
  */
  readonly ruleName: string;
}

export function accessanalyzerAnalyzerArchiveRulesToTerraform(struct?: AccessanalyzerAnalyzerArchiveRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filter: cdktf.listMapper(accessanalyzerAnalyzerArchiveRulesFilterToTerraform)(struct!.filter),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
  }
}

export interface AccessanalyzerAnalyzerTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#key AccessanalyzerAnalyzer#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html#value AccessanalyzerAnalyzer#value}
  */
  readonly value: string;
}

export function accessanalyzerAnalyzerTagsToTerraform(struct?: AccessanalyzerAnalyzerTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html awscc_accessanalyzer_analyzer}
*/
export class AccessanalyzerAnalyzer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_accessanalyzer_analyzer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/accessanalyzer_analyzer.html awscc_accessanalyzer_analyzer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessanalyzerAnalyzerConfig
  */
  public constructor(scope: Construct, id: string, config: AccessanalyzerAnalyzerConfig) {
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
    this._analyzerName = config.analyzerName;
    this._archiveRules = config.archiveRules;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analyzer_name - computed: true, optional: true, required: false
  private _analyzerName?: string;
  public get analyzerName() {
    return this.getStringAttribute('analyzer_name');
  }
  public set analyzerName(value: string) {
    this._analyzerName = value;
  }
  public resetAnalyzerName() {
    this._analyzerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerNameInput() {
    return this._analyzerName
  }

  // archive_rules - computed: false, optional: true, required: false
  private _archiveRules?: AccessanalyzerAnalyzerArchiveRules[];
  public get archiveRules() {
    return this.interpolationForAttribute('archive_rules') as any;
  }
  public set archiveRules(value: AccessanalyzerAnalyzerArchiveRules[] ) {
    this._archiveRules = value;
  }
  public resetArchiveRules() {
    this._archiveRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRulesInput() {
    return this._archiveRules
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: AccessanalyzerAnalyzerTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: AccessanalyzerAnalyzerTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analyzer_name: cdktf.stringToTerraform(this._analyzerName),
      archive_rules: cdktf.listMapper(accessanalyzerAnalyzerArchiveRulesToTerraform)(this._archiveRules),
      tags: cdktf.listMapper(accessanalyzerAnalyzerTagsToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
