// https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigatewayApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * An AWS Marketplace customer identifier to use when integrating with the AWS SaaS Marketplace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#customer_id ApigatewayApiKey#customer_id}
  */
  readonly customerId?: string;
  /**
  * A description of the purpose of the API key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#description ApigatewayApiKey#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the API key can be used by clients.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#enabled ApigatewayApiKey#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the key identifier is distinct from the created API key value. This parameter is deprecated and should not be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#generate_distinct_id ApigatewayApiKey#generate_distinct_id}
  */
  readonly generateDistinctId?: boolean | cdktf.IResolvable;
  /**
  * A name for the API key. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the API key name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#name ApigatewayApiKey#name}
  */
  readonly name?: string;
  /**
  * A list of stages to associate with this API key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#stage_keys ApigatewayApiKey#stage_keys}
  */
  readonly stageKeys?: ApigatewayApiKeyStageKeys[];
  /**
  * An array of arbitrary tags (key-value pairs) to associate with the API key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#tags ApigatewayApiKey#tags}
  */
  readonly tags?: ApigatewayApiKeyTags[];
  /**
  * The value of the API key. Must be at least 20 characters long.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#value ApigatewayApiKey#value}
  */
  readonly value?: string;
}
export interface ApigatewayApiKeyStageKeys {
  /**
  * The ID of a RestApi resource that includes the stage with which you want to associate the API key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#rest_api_id ApigatewayApiKey#rest_api_id}
  */
  readonly restApiId?: string;
  /**
  * The name of the stage with which to associate the API key. The stage must be included in the RestApi resource that you specified in the RestApiId property. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#stage_name ApigatewayApiKey#stage_name}
  */
  readonly stageName?: string;
}

export function apigatewayApiKeyStageKeysToTerraform(struct?: ApigatewayApiKeyStageKeys): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rest_api_id: cdktf.stringToTerraform(struct!.restApiId),
    stage_name: cdktf.stringToTerraform(struct!.stageName),
  }
}

export interface ApigatewayApiKeyTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#key ApigatewayApiKey#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html#value ApigatewayApiKey#value}
  */
  readonly value: string;
}

export function apigatewayApiKeyTagsToTerraform(struct?: ApigatewayApiKeyTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html awscc_apigateway_api_key}
*/
export class ApigatewayApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_apigateway_api_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_api_key.html awscc_apigateway_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigatewayApiKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApigatewayApiKeyConfig = {}) {
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
    this._customerId = config.customerId;
    this._description = config.description;
    this._enabled = config.enabled;
    this._generateDistinctId = config.generateDistinctId;
    this._name = config.name;
    this._stageKeys = config.stageKeys;
    this._tags = config.tags;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_id - computed: true, optional: false, required: false
  public get apiKeyId() {
    return this.getStringAttribute('api_key_id');
  }

  // customer_id - computed: false, optional: true, required: false
  private _customerId?: string;
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }
  public set customerId(value: string ) {
    this._customerId = value;
  }
  public resetCustomerId() {
    this._customerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIdInput() {
    return this._customerId
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // generate_distinct_id - computed: true, optional: true, required: false
  private _generateDistinctId?: boolean | cdktf.IResolvable;
  public get generateDistinctId() {
    return this.getBooleanAttribute('generate_distinct_id');
  }
  public set generateDistinctId(value: boolean | cdktf.IResolvable) {
    this._generateDistinctId = value;
  }
  public resetGenerateDistinctId() {
    this._generateDistinctId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateDistinctIdInput() {
    return this._generateDistinctId
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

  // stage_keys - computed: false, optional: true, required: false
  private _stageKeys?: ApigatewayApiKeyStageKeys[];
  public get stageKeys() {
    return this.interpolationForAttribute('stage_keys') as any;
  }
  public set stageKeys(value: ApigatewayApiKeyStageKeys[] ) {
    this._stageKeys = value;
  }
  public resetStageKeys() {
    this._stageKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageKeysInput() {
    return this._stageKeys
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: ApigatewayApiKeyTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: ApigatewayApiKeyTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // value - computed: true, optional: true, required: false
  private _value?: string;
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_id: cdktf.stringToTerraform(this._customerId),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      generate_distinct_id: cdktf.booleanToTerraform(this._generateDistinctId),
      name: cdktf.stringToTerraform(this._name),
      stage_keys: cdktf.listMapper(apigatewayApiKeyStageKeysToTerraform)(this._stageKeys),
      tags: cdktf.listMapper(apigatewayApiKeyTagsToTerraform)(this._tags),
      value: cdktf.stringToTerraform(this._value),
    };
  }
}
