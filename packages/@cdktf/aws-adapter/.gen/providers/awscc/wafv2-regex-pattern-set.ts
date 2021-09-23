// https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv2RegexPatternSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the entity.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html#description Wafv2RegexPatternSet#description}
  */
  readonly description?: string;
  /**
  * Name of the RegexPatternSet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html#name Wafv2RegexPatternSet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html#regular_expression_list Wafv2RegexPatternSet#regular_expression_list}
  */
  readonly regularExpressionList: string[];
  /**
  * Use CLOUDFRONT for CloudFront RegexPatternSet, use REGIONAL for Application Load Balancer and API Gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html#scope Wafv2RegexPatternSet#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html#tags Wafv2RegexPatternSet#tags}
  */
  readonly tags?: Wafv2RegexPatternSetTags[];
}
export interface Wafv2RegexPatternSetTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html#key Wafv2RegexPatternSet#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html#value Wafv2RegexPatternSet#value}
  */
  readonly value?: string;
}

export function wafv2RegexPatternSetTagsToTerraform(struct?: Wafv2RegexPatternSetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html awscc_wafv2_regex_pattern_set}
*/
export class Wafv2RegexPatternSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_wafv2_regex_pattern_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/wafv2_regex_pattern_set.html awscc_wafv2_regex_pattern_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv2RegexPatternSetConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv2RegexPatternSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_wafv2_regex_pattern_set',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._regularExpressionList = config.regularExpressionList;
    this._scope = config.scope;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
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

  // regular_expression_list - computed: false, optional: false, required: true
  private _regularExpressionList: string[];
  public get regularExpressionList() {
    return this.getListAttribute('regular_expression_list');
  }
  public set regularExpressionList(value: string[]) {
    this._regularExpressionList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regularExpressionListInput() {
    return this._regularExpressionList
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Wafv2RegexPatternSetTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Wafv2RegexPatternSetTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      regular_expression_list: cdktf.listMapper(cdktf.stringToTerraform)(this._regularExpressionList),
      scope: cdktf.stringToTerraform(this._scope),
      tags: cdktf.listMapper(wafv2RegexPatternSetTagsToTerraform)(this._tags),
    };
  }
}
