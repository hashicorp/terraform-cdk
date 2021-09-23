import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccApigatewayUsagePlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_usage_plan.html#id DataAwsccApigatewayUsagePlan#id}
    */
    readonly id: string;
}
export declare class DataAwsccApigatewayUsagePlanApiStagesThrottle extends cdktf.ComplexComputedList {
    get burstLimit(): number;
    get rateLimit(): number;
}
export declare function dataAwsccApigatewayUsagePlanApiStagesThrottleToTerraform(struct?: DataAwsccApigatewayUsagePlanApiStagesThrottle): any;
export declare class DataAwsccApigatewayUsagePlanApiStages extends cdktf.ComplexComputedList {
    get apiId(): string;
    get stage(): string;
    get throttle(): any;
}
export declare function dataAwsccApigatewayUsagePlanApiStagesToTerraform(struct?: DataAwsccApigatewayUsagePlanApiStages): any;
export declare class DataAwsccApigatewayUsagePlanQuota extends cdktf.ComplexComputedList {
    get limit(): number;
    get offset(): number;
    get period(): string;
}
export declare function dataAwsccApigatewayUsagePlanQuotaToTerraform(struct?: DataAwsccApigatewayUsagePlanQuota): any;
export declare class DataAwsccApigatewayUsagePlanTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccApigatewayUsagePlanTagsToTerraform(struct?: DataAwsccApigatewayUsagePlanTags): any;
export declare class DataAwsccApigatewayUsagePlanThrottle extends cdktf.ComplexComputedList {
    get burstLimit(): number;
    get rateLimit(): number;
}
export declare function dataAwsccApigatewayUsagePlanThrottleToTerraform(struct?: DataAwsccApigatewayUsagePlanThrottle): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_usage_plan.html awscc_apigateway_usage_plan}
*/
export declare class DataAwsccApigatewayUsagePlan extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_usage_plan.html awscc_apigateway_usage_plan} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccApigatewayUsagePlanConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccApigatewayUsagePlanConfig);
    get apiStages(): any;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get quota(): any;
    get tags(): any;
    get throttle(): any;
    get usagePlanName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
