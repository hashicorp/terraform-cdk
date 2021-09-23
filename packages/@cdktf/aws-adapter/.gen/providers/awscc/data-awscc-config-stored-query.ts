// https://www.terraform.io/docs/providers/awscc/d/config_stored_query.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccConfigStoredQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/config_stored_query.html#id DataAwsccConfigStoredQuery#id}
  */
  readonly id: string;
}
export class DataAwsccConfigStoredQueryTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccConfigStoredQueryTagsToTerraform(struct?: DataAwsccConfigStoredQueryTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/config_stored_query.html awscc_config_stored_query}
*/
export class DataAwsccConfigStoredQuery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_config_stored_query";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/config_stored_query.html awscc_config_stored_query} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConfigStoredQueryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConfigStoredQueryConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // query_arn - computed: true, optional: false, required: false
  public get queryArn() {
    return this.getStringAttribute('query_arn');
  }

  // query_description - computed: true, optional: false, required: false
  public get queryDescription() {
    return this.getStringAttribute('query_description');
  }

  // query_expression - computed: true, optional: false, required: false
  public get queryExpression() {
    return this.getStringAttribute('query_expression');
  }

  // query_id - computed: true, optional: false, required: false
  public get queryId() {
    return this.getStringAttribute('query_id');
  }

  // query_name - computed: true, optional: false, required: false
  public get queryName() {
    return this.getStringAttribute('query_name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
