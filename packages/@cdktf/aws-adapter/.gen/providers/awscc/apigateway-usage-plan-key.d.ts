import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class ApigatewayUsagePlanKey extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan_key.html awscc_apigateway_usage_plan_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApigatewayUsagePlanKeyConfig
    */
    constructor(scope: Construct, id: string, config: ApigatewayUsagePlanKeyConfig);
    get id(): string;
    private _keyId;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string;
    private _keyType;
    get keyType(): string;
    set keyType(value: string);
    get keyTypeInput(): string;
    private _usagePlanId;
    get usagePlanId(): string;
    set usagePlanId(value: string);
    get usagePlanIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
