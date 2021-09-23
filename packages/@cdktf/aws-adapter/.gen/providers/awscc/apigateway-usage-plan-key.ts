// https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigatewayUsagePlanKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the usage plan key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan_key.html#key_id ApigatewayUsagePlanKey#key_id}
  */
  readonly keyId: string;
  /**
  * The type of usage plan key. Currently, the only valid key type is API_KEY.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan_key.html#key_type ApigatewayUsagePlanKey#key_type}
  */
  readonly keyType: string;
  /**
  * The ID of the usage plan.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan_key.html#usage_plan_id ApigatewayUsagePlanKey#usage_plan_id}
  */
  readonly usagePlanId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan_key.html awscc_apigateway_usage_plan_key}
*/
export class ApigatewayUsagePlanKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_apigateway_usage_plan_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan_key.html awscc_apigateway_usage_plan_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigatewayUsagePlanKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ApigatewayUsagePlanKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigateway_usage_plan_key',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyId = config.keyId;
    this._keyType = config.keyType;
    this._usagePlanId = config.usagePlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId: string;
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType: string;
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType
  }

  // usage_plan_id - computed: false, optional: false, required: true
  private _usagePlanId: string;
  public get usagePlanId() {
    return this.getStringAttribute('usage_plan_id');
  }
  public set usagePlanId(value: string) {
    this._usagePlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usagePlanIdInput() {
    return this._usagePlanId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_id: cdktf.stringToTerraform(this._keyId),
      key_type: cdktf.stringToTerraform(this._keyType),
      usage_plan_id: cdktf.stringToTerraform(this._usagePlanId),
    };
  }
}
