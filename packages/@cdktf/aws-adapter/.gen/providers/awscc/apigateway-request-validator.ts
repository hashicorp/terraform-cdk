// https://www.terraform.io/docs/providers/awscc/r/apigateway_request_validator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigatewayRequestValidatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the request validator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_request_validator.html#name ApigatewayRequestValidator#name}
  */
  readonly name?: string;
  /**
  * The identifier of the targeted API entity.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_request_validator.html#rest_api_id ApigatewayRequestValidator#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Indicates whether to validate the request body according to the configured schema for the targeted API and method. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_request_validator.html#validate_request_body ApigatewayRequestValidator#validate_request_body}
  */
  readonly validateRequestBody?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to validate request parameters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_request_validator.html#validate_request_parameters ApigatewayRequestValidator#validate_request_parameters}
  */
  readonly validateRequestParameters?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_request_validator.html awscc_apigateway_request_validator}
*/
export class ApigatewayRequestValidator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_apigateway_request_validator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_request_validator.html awscc_apigateway_request_validator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigatewayRequestValidatorConfig
  */
  public constructor(scope: Construct, id: string, config: ApigatewayRequestValidatorConfig) {
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
    this._name = config.name;
    this._restApiId = config.restApiId;
    this._validateRequestBody = config.validateRequestBody;
    this._validateRequestParameters = config.validateRequestParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // request_validator_id - computed: true, optional: false, required: false
  public get requestValidatorId() {
    return this.getStringAttribute('request_validator_id');
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId
  }

  // validate_request_body - computed: false, optional: true, required: false
  private _validateRequestBody?: boolean | cdktf.IResolvable;
  public get validateRequestBody() {
    return this.getBooleanAttribute('validate_request_body');
  }
  public set validateRequestBody(value: boolean | cdktf.IResolvable ) {
    this._validateRequestBody = value;
  }
  public resetValidateRequestBody() {
    this._validateRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateRequestBodyInput() {
    return this._validateRequestBody
  }

  // validate_request_parameters - computed: false, optional: true, required: false
  private _validateRequestParameters?: boolean | cdktf.IResolvable;
  public get validateRequestParameters() {
    return this.getBooleanAttribute('validate_request_parameters');
  }
  public set validateRequestParameters(value: boolean | cdktf.IResolvable ) {
    this._validateRequestParameters = value;
  }
  public resetValidateRequestParameters() {
    this._validateRequestParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateRequestParametersInput() {
    return this._validateRequestParameters
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      validate_request_body: cdktf.booleanToTerraform(this._validateRequestBody),
      validate_request_parameters: cdktf.booleanToTerraform(this._validateRequestParameters),
    };
  }
}
