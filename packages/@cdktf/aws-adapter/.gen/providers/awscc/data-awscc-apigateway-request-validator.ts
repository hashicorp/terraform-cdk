// https://www.terraform.io/docs/providers/awscc/d/apigateway_request_validator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccApigatewayRequestValidatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_request_validator.html#id DataAwsccApigatewayRequestValidator#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_request_validator.html awscc_apigateway_request_validator}
*/
export class DataAwsccApigatewayRequestValidator extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_apigateway_request_validator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_request_validator.html awscc_apigateway_request_validator} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApigatewayRequestValidatorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApigatewayRequestValidatorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigateway_request_validator',
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // request_validator_id - computed: true, optional: false, required: false
  public get requestValidatorId() {
    return this.getStringAttribute('request_validator_id');
  }

  // rest_api_id - computed: true, optional: false, required: false
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }

  // validate_request_body - computed: true, optional: false, required: false
  public get validateRequestBody() {
    return this.getBooleanAttribute('validate_request_body');
  }

  // validate_request_parameters - computed: true, optional: false, required: false
  public get validateRequestParameters() {
    return this.getBooleanAttribute('validate_request_parameters');
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
