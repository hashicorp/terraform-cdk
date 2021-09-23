// https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function apigatewayUsagePlanApiStagesThrottleToTerraform(struct?: ApigatewayUsagePlanApiStagesThrottle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    burst_limit: cdktf.numberToTerraform(struct!.burstLimit),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
  }
}

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
  readonly throttle?: { [key: string]: ApigatewayUsagePlanApiStagesThrottle } | cdktf.IResolvable;
}

export function apigatewayUsagePlanApiStagesToTerraform(struct?: ApigatewayUsagePlanApiStages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_id: cdktf.stringToTerraform(struct!.apiId),
    stage: cdktf.stringToTerraform(struct!.stage),
    throttle: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.throttle),
  }
}

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

export function apigatewayUsagePlanQuotaToTerraform(struct?: ApigatewayUsagePlanQuota): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    offset: cdktf.numberToTerraform(struct!.offset),
    period: cdktf.stringToTerraform(struct!.period),
  }
}

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

export function apigatewayUsagePlanTagsToTerraform(struct?: ApigatewayUsagePlanTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

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

export function apigatewayUsagePlanThrottleToTerraform(struct?: ApigatewayUsagePlanThrottle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    burst_limit: cdktf.numberToTerraform(struct!.burstLimit),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html awscc_apigateway_usage_plan}
*/
export class ApigatewayUsagePlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_apigateway_usage_plan";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_usage_plan.html awscc_apigateway_usage_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigatewayUsagePlanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApigatewayUsagePlanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigateway_usage_plan',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiStages = config.apiStages;
    this._description = config.description;
    this._quota = config.quota;
    this._tags = config.tags;
    this._throttle = config.throttle;
    this._usagePlanName = config.usagePlanName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_stages - computed: false, optional: true, required: false
  private _apiStages?: ApigatewayUsagePlanApiStages[];
  public get apiStages() {
    return this.interpolationForAttribute('api_stages') as any;
  }
  public set apiStages(value: ApigatewayUsagePlanApiStages[] ) {
    this._apiStages = value;
  }
  public resetApiStages() {
    this._apiStages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiStagesInput() {
    return this._apiStages
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: ApigatewayUsagePlanQuota;
  public get quota() {
    return this.interpolationForAttribute('quota') as any;
  }
  public set quota(value: ApigatewayUsagePlanQuota ) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: ApigatewayUsagePlanTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: ApigatewayUsagePlanTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // throttle - computed: false, optional: true, required: false
  private _throttle?: ApigatewayUsagePlanThrottle;
  public get throttle() {
    return this.interpolationForAttribute('throttle') as any;
  }
  public set throttle(value: ApigatewayUsagePlanThrottle ) {
    this._throttle = value;
  }
  public resetThrottle() {
    this._throttle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleInput() {
    return this._throttle
  }

  // usage_plan_name - computed: false, optional: true, required: false
  private _usagePlanName?: string;
  public get usagePlanName() {
    return this.getStringAttribute('usage_plan_name');
  }
  public set usagePlanName(value: string ) {
    this._usagePlanName = value;
  }
  public resetUsagePlanName() {
    this._usagePlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagePlanNameInput() {
    return this._usagePlanName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_stages: cdktf.listMapper(apigatewayUsagePlanApiStagesToTerraform)(this._apiStages),
      description: cdktf.stringToTerraform(this._description),
      quota: apigatewayUsagePlanQuotaToTerraform(this._quota),
      tags: cdktf.listMapper(apigatewayUsagePlanTagsToTerraform)(this._tags),
      throttle: apigatewayUsagePlanThrottleToTerraform(this._throttle),
      usage_plan_name: cdktf.stringToTerraform(this._usagePlanName),
    };
  }
}
