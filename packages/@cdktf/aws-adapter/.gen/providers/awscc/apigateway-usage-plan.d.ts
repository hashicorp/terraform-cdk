import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApigatewayUsagePlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * The API stages to associate with this usage plan.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#api_stages ApigatewayUsagePlan#api_stages}
    */
    readonly apiStages?: ApigatewayUsagePlanApiStages[];
    /**
    * A description of the usage plan.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#description ApigatewayUsagePlan#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#quota ApigatewayUsagePlan#quota}
    */
    readonly quota?: ApigatewayUsagePlanQuota;
    /**
    * An array of arbitrary tags (key-value pairs) to associate with the usage plan.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#tags ApigatewayUsagePlan#tags}
    */
    readonly tags?: ApigatewayUsagePlanTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#throttle ApigatewayUsagePlan#throttle}
    */
    readonly throttle?: ApigatewayUsagePlanThrottle;
    /**
    * A name for the usage plan.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#usage_plan_name ApigatewayUsagePlan#usage_plan_name}
    */
    readonly usagePlanName?: string;
}
export interface ApigatewayUsagePlanApiStagesThrottle {
    /**
    * The maximum API request rate limit over a time ranging from one to a few seconds. The maximum API request rate limit depends on whether the underlying token bucket is at its full capacity.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#burst_limit ApigatewayUsagePlan#burst_limit}
    */
    readonly burstLimit?: number;
    /**
    * The API request steady-state rate limit (average requests per second over an extended period of time).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#rate_limit ApigatewayUsagePlan#rate_limit}
    */
    readonly rateLimit?: number;
}
export declare function apigatewayUsagePlanApiStagesThrottleToTerraform(struct?: ApigatewayUsagePlanApiStagesThrottle): any;
export interface ApigatewayUsagePlanApiStages {
    /**
    * The ID of an API that is in the specified Stage property that you want to associate with the usage plan.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#api_id ApigatewayUsagePlan#api_id}
    */
    readonly apiId?: string;
    /**
    * The name of the stage to associate with the usage plan.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#stage ApigatewayUsagePlan#stage}
    */
    readonly stage?: string;
    /**
    * Map containing method-level throttling information for an API stage in a usage plan. The key for the map is the path and method for which to configure custom throttling, for example, '/pets/GET'. Duplicates are not allowed.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#throttle ApigatewayUsagePlan#throttle}
    */
    readonly throttle?: {
        [key: string]: ApigatewayUsagePlanApiStagesThrottle;
    } | cdktf.IResolvable;
}
export declare function apigatewayUsagePlanApiStagesToTerraform(struct?: ApigatewayUsagePlanApiStages): any;
export interface ApigatewayUsagePlanQuota {
    /**
    * The maximum number of requests that users can make within the specified time period.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#limit ApigatewayUsagePlan#limit}
    */
    readonly limit?: number;
    /**
    * For the initial time period, the number of requests to subtract from the specified limit. When you first implement a usage plan, the plan might start in the middle of the week or month. With this property, you can decrease the limit for this initial time period.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#offset ApigatewayUsagePlan#offset}
    */
    readonly offset?: number;
    /**
    * The time period for which the maximum limit of requests applies, such as DAY or WEEK. For valid values, see the period property for the UsagePlan resource in the Amazon API Gateway REST API Reference.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#period ApigatewayUsagePlan#period}
    */
    readonly period?: string;
}
export declare function apigatewayUsagePlanQuotaToTerraform(struct?: ApigatewayUsagePlanQuota): any;
export interface ApigatewayUsagePlanTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#key ApigatewayUsagePlan#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#value ApigatewayUsagePlan#value}
    */
    readonly value: string;
}
export declare function apigatewayUsagePlanTagsToTerraform(struct?: ApigatewayUsagePlanTags): any;
export interface ApigatewayUsagePlanThrottle {
    /**
    * The maximum API request rate limit over a time ranging from one to a few seconds. The maximum API request rate limit depends on whether the underlying token bucket is at its full capacity.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#burst_limit ApigatewayUsagePlan#burst_limit}
    */
    readonly burstLimit?: number;
    /**
    * The API request steady-state rate limit (average requests per second over an extended period of time).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html#rate_limit ApigatewayUsagePlan#rate_limit}
    */
    readonly rateLimit?: number;
}
export declare function apigatewayUsagePlanThrottleToTerraform(struct?: ApigatewayUsagePlanThrottle): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html awscc_apigateway_usage_plan}
*/
export declare class ApigatewayUsagePlan extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html awscc_apigateway_usage_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApigatewayUsagePlanConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ApigatewayUsagePlanConfig);
    private _apiStages?;
    get apiStages(): ApigatewayUsagePlanApiStages[];
    set apiStages(value: ApigatewayUsagePlanApiStages[]);
    resetApiStages(): void;
    get apiStagesInput(): ApigatewayUsagePlanApiStages[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _quota?;
    get quota(): ApigatewayUsagePlanQuota;
    set quota(value: ApigatewayUsagePlanQuota);
    resetQuota(): void;
    get quotaInput(): ApigatewayUsagePlanQuota | undefined;
    private _tags?;
    get tags(): ApigatewayUsagePlanTags[];
    set tags(value: ApigatewayUsagePlanTags[]);
    resetTags(): void;
    get tagsInput(): ApigatewayUsagePlanTags[] | undefined;
    private _throttle?;
    get throttle(): ApigatewayUsagePlanThrottle;
    set throttle(value: ApigatewayUsagePlanThrottle);
    resetThrottle(): void;
    get throttleInput(): ApigatewayUsagePlanThrottle | undefined;
    private _usagePlanName?;
    get usagePlanName(): string;
    set usagePlanName(value: string);
    resetUsagePlanName(): void;
    get usagePlanNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
