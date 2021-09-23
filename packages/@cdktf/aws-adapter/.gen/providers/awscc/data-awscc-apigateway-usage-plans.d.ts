import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccApigatewayUsagePlansConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_usage_plans.html awscc_apigateway_usage_plans}
*/
export declare class DataAwsccApigatewayUsagePlans extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_usage_plans.html awscc_apigateway_usage_plans} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApigatewayUsagePlansConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccApigatewayUsagePlansConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
