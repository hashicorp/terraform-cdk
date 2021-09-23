// https://www.terraform.io/docs/providers/awscc/d/apigateway_usage_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccApigatewayUsagePlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_usage_plan.html#id DataAwsccApigatewayUsagePlan#id}
  */
  readonly id: string;
}
export class DataAwsccApigatewayUsagePlanApiStagesThrottle extends cdktf.ComplexComputedList {

  // burst_limit - computed: true, optional: false, required: false
  public get burstLimit() {
    return this.getNumberAttribute('burst_limit');
  }

  // rate_limit - computed: true, optional: false, required: false
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
}

export function dataAwsccApigatewayUsagePlanApiStagesThrottleToTerraform(struct?: DataAwsccApigatewayUsagePlanApiStagesThrottle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    burst_limit: cdktf.numberToTerraform(struct!.burstLimit),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
  }
}

export class DataAwsccApigatewayUsagePlanApiStages extends cdktf.ComplexComputedList {

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
  }

  // stage - computed: true, optional: false, required: false
  public get stage() {
    return this.getStringAttribute('stage');
  }

  // throttle - computed: true, optional: false, required: false
  public get throttle() {
    return this.interpolationForAttribute('throttle') as any;
  }
}

export function dataAwsccApigatewayUsagePlanApiStagesToTerraform(struct?: DataAwsccApigatewayUsagePlanApiStages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_id: cdktf.stringToTerraform(struct!.apiId),
    stage: cdktf.stringToTerraform(struct!.stage),
    throttle: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.throttle),
  }
}

export class DataAwsccApigatewayUsagePlanQuota extends cdktf.ComplexComputedList {

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getNumberAttribute('offset');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }
}

export function dataAwsccApigatewayUsagePlanQuotaToTerraform(struct?: DataAwsccApigatewayUsagePlanQuota): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    offset: cdktf.numberToTerraform(struct!.offset),
    period: cdktf.stringToTerraform(struct!.period),
  }
}

export class DataAwsccApigatewayUsagePlanTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccApigatewayUsagePlanTagsToTerraform(struct?: DataAwsccApigatewayUsagePlanTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccApigatewayUsagePlanThrottle extends cdktf.ComplexComputedList {

  // burst_limit - computed: true, optional: false, required: false
  public get burstLimit() {
    return this.getNumberAttribute('burst_limit');
  }

  // rate_limit - computed: true, optional: false, required: false
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
}

export function dataAwsccApigatewayUsagePlanThrottleToTerraform(struct?: DataAwsccApigatewayUsagePlanThrottle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    burst_limit: cdktf.numberToTerraform(struct!.burstLimit),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_usage_plan.html awscc_apigateway_usage_plan}
*/
export class DataAwsccApigatewayUsagePlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_apigateway_usage_plan";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/apigateway_usage_plan.html awscc_apigateway_usage_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccApigatewayUsagePlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccApigatewayUsagePlanConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_stages - computed: true, optional: false, required: false
  public get apiStages() {
    return this.interpolationForAttribute('api_stages') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

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

  // quota - computed: true, optional: false, required: false
  public get quota() {
    return this.interpolationForAttribute('quota') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // throttle - computed: true, optional: false, required: false
  public get throttle() {
    return this.interpolationForAttribute('throttle') as any;
  }

  // usage_plan_name - computed: true, optional: false, required: false
  public get usagePlanName() {
    return this.getStringAttribute('usage_plan_name');
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
