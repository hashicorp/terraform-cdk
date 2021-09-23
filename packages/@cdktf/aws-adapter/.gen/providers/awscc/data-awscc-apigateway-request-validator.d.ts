import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class DataAwsccApigatewayRequestValidator extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_request_validator.html awscc_apigateway_request_validator} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApigatewayRequestValidatorConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccApigatewayRequestValidatorConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get requestValidatorId(): string;
    get restApiId(): string;
    get validateRequestBody(): cdktf.IResolvable;
    get validateRequestParameters(): cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
