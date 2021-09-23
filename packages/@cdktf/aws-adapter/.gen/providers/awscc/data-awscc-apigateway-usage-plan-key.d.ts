import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccApigatewayUsagePlanKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_usage_plan_key.html#id DataAwsccApigatewayUsagePlanKey#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_usage_plan_key.html awscc_apigateway_usage_plan_key}
*/
export declare class DataAwsccApigatewayUsagePlanKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_usage_plan_key.html awscc_apigateway_usage_plan_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApigatewayUsagePlanKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccApigatewayUsagePlanKeyConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get keyId(): string;
    get keyType(): string;
    get usagePlanId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
