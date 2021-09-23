// https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigStoredQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html#query_description ConfigStoredQuery#query_description}
  */
  readonly queryDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html#query_expression ConfigStoredQuery#query_expression}
  */
  readonly queryExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html#query_name ConfigStoredQuery#query_name}
  */
  readonly queryName: string;
  /**
  * The tags for the stored query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html#tags ConfigStoredQuery#tags}
  */
  readonly tags?: ConfigStoredQueryTags[];
}
export interface ConfigStoredQueryTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html#key ConfigStoredQuery#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html#value ConfigStoredQuery#value}
  */
  readonly value: string;
}

export function configStoredQueryTagsToTerraform(struct?: ConfigStoredQueryTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html awscc_config_stored_query}
*/
export class ConfigStoredQuery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_config_stored_query";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/config_stored_query.html awscc_config_stored_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigStoredQueryConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigStoredQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_config_stored_query',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._queryDescription = config.queryDescription;
    this._queryExpression = config.queryExpression;
    this._queryName = config.queryName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // query_arn - computed: true, optional: false, required: false
  public get queryArn() {
    return this.getStringAttribute('query_arn');
  }

  // query_description - computed: false, optional: true, required: false
  private _queryDescription?: string;
  public get queryDescription() {
    return this.getStringAttribute('query_description');
  }
  public set queryDescription(value: string ) {
    this._queryDescription = value;
  }
  public resetQueryDescription() {
    this._queryDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDescriptionInput() {
    return this._queryDescription
  }

  // query_expression - computed: false, optional: false, required: true
  private _queryExpression: string;
  public get queryExpression() {
    return this.getStringAttribute('query_expression');
  }
  public set queryExpression(value: string) {
    this._queryExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryExpressionInput() {
    return this._queryExpression
  }

  // query_id - computed: true, optional: false, required: false
  public get queryId() {
    return this.getStringAttribute('query_id');
  }

  // query_name - computed: false, optional: false, required: true
  private _queryName: string;
  public get queryName() {
    return this.getStringAttribute('query_name');
  }
  public set queryName(value: string) {
    this._queryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryNameInput() {
    return this._queryName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: ConfigStoredQueryTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: ConfigStoredQueryTags[] ) {
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
      query_description: cdktf.stringToTerraform(this._queryDescription),
      query_expression: cdktf.stringToTerraform(this._queryExpression),
      query_name: cdktf.stringToTerraform(this._queryName),
      tags: cdktf.listMapper(configStoredQueryTagsToTerraform)(this._tags),
    };
  }
}
