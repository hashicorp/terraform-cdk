// https://www.terraform.io/docs/providers/awscc/d/apigateway_api_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccApigatewayApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_api_key.html#id DataAwsccApigatewayApiKey#id}
  */
  readonly id: string;
}
export class DataAwsccApigatewayApiKeyStageKeys extends cdktf.ComplexComputedList {

  // rest_api_id - computed: true, optional: false, required: false
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }

  // stage_name - computed: true, optional: false, required: false
  public get stageName() {
    return this.getStringAttribute('stage_name');
  }
}

export function dataAwsccApigatewayApiKeyStageKeysToTerraform(struct?: DataAwsccApigatewayApiKeyStageKeys): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rest_api_id: cdktf.stringToTerraform(struct!.restApiId),
    stage_name: cdktf.stringToTerraform(struct!.stageName),
  }
}

export class DataAwsccApigatewayApiKeyTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccApigatewayApiKeyTagsToTerraform(struct?: DataAwsccApigatewayApiKeyTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_api_key.html awscc_apigateway_api_key}
*/
export class DataAwsccApigatewayApiKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_apigateway_api_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_api_key.html awscc_apigateway_api_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApigatewayApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApigatewayApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigateway_api_key',
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

  // api_key_id - computed: true, optional: false, required: false
  public get apiKeyId() {
    return this.getStringAttribute('api_key_id');
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // generate_distinct_id - computed: true, optional: false, required: false
  public get generateDistinctId() {
    return this.getBooleanAttribute('generate_distinct_id');
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

  // stage_keys - computed: true, optional: false, required: false
  public get stageKeys() {
    return this.interpolationForAttribute('stage_keys') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
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
