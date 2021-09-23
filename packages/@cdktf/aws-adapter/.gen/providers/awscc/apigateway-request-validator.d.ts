import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class ApigatewayRequestValidator extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_request_validator.html awscc_apigateway_request_validator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApigatewayRequestValidatorConfig
    */
    constructor(scope: Construct, id: string, config: ApigatewayRequestValidatorConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get requestValidatorId(): string;
    private _restApiId;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _validateRequestBody?;
    get validateRequestBody(): boolean | cdktf.IResolvable;
    set validateRequestBody(value: boolean | cdktf.IResolvable);
    resetValidateRequestBody(): void;
    get validateRequestBodyInput(): boolean | cdktf.IResolvable | undefined;
    private _validateRequestParameters?;
    get validateRequestParameters(): boolean | cdktf.IResolvable;
    set validateRequestParameters(value: boolean | cdktf.IResolvable);
    resetValidateRequestParameters(): void;
    get validateRequestParametersInput(): boolean | cdktf.IResolvable | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
