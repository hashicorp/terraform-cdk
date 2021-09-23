// https://www.terraform.io/docs/providers/awscc/d/xray_sampling_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccXraySamplingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/xray_sampling_rule.html#id DataAwsccXraySamplingRule#id}
  */
  readonly id: string;
}
export class DataAwsccXraySamplingRuleSamplingRule extends cdktf.ComplexComputedList {

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.interpolationForAttribute('attributes') as any;
  }

  // fixed_rate - computed: true, optional: false, required: false
  public get fixedRate() {
    return this.getNumberAttribute('fixed_rate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // reservoir_size - computed: true, optional: false, required: false
  public get reservoirSize() {
    return this.getNumberAttribute('reservoir_size');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // url_path - computed: true, optional: false, required: false
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export function dataAwsccXraySamplingRuleSamplingRuleToTerraform(struct?: DataAwsccXraySamplingRuleSamplingRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    fixed_rate: cdktf.numberToTerraform(struct!.fixedRate),
    host: cdktf.stringToTerraform(struct!.host),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    priority: cdktf.numberToTerraform(struct!.priority),
    reservoir_size: cdktf.numberToTerraform(struct!.reservoirSize),
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    rule_arn: cdktf.stringToTerraform(struct!.ruleArn),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
    version: cdktf.numberToTerraform(struct!.version),
  }
}

export class DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule extends cdktf.ComplexComputedList {

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.interpolationForAttribute('attributes') as any;
  }

  // fixed_rate - computed: true, optional: false, required: false
  public get fixedRate() {
    return this.getNumberAttribute('fixed_rate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // reservoir_size - computed: true, optional: false, required: false
  public get reservoirSize() {
    return this.getNumberAttribute('reservoir_size');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // url_path - computed: true, optional: false, required: false
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export function dataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleToTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    fixed_rate: cdktf.numberToTerraform(struct!.fixedRate),
    host: cdktf.stringToTerraform(struct!.host),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    priority: cdktf.numberToTerraform(struct!.priority),
    reservoir_size: cdktf.numberToTerraform(struct!.reservoirSize),
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    rule_arn: cdktf.stringToTerraform(struct!.ruleArn),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
    version: cdktf.numberToTerraform(struct!.version),
  }
}

export class DataAwsccXraySamplingRuleSamplingRuleRecord extends cdktf.ComplexComputedList {

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // sampling_rule - computed: true, optional: false, required: false
  public get samplingRule() {
    return this.interpolationForAttribute('sampling_rule') as any;
  }
}

export function dataAwsccXraySamplingRuleSamplingRuleRecordToTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleRecord): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    created_at: cdktf.stringToTerraform(struct!.createdAt),
    modified_at: cdktf.stringToTerraform(struct!.modifiedAt),
    sampling_rule: dataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleToTerraform(struct!.samplingRule),
  }
}

export class DataAwsccXraySamplingRuleSamplingRuleUpdate extends cdktf.ComplexComputedList {

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.interpolationForAttribute('attributes') as any;
  }

  // fixed_rate - computed: true, optional: false, required: false
  public get fixedRate() {
    return this.getNumberAttribute('fixed_rate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // reservoir_size - computed: true, optional: false, required: false
  public get reservoirSize() {
    return this.getNumberAttribute('reservoir_size');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // url_path - computed: true, optional: false, required: false
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
}

export function dataAwsccXraySamplingRuleSamplingRuleUpdateToTerraform(struct?: DataAwsccXraySamplingRuleSamplingRuleUpdate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    fixed_rate: cdktf.numberToTerraform(struct!.fixedRate),
    host: cdktf.stringToTerraform(struct!.host),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    priority: cdktf.numberToTerraform(struct!.priority),
    reservoir_size: cdktf.numberToTerraform(struct!.reservoirSize),
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    rule_arn: cdktf.stringToTerraform(struct!.ruleArn),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
  }
}

export class DataAwsccXraySamplingRuleTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccXraySamplingRuleTagsToTerraform(struct?: DataAwsccXraySamplingRuleTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/xray_sampling_rule.html awscc_xray_sampling_rule}
*/
export class DataAwsccXraySamplingRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_xray_sampling_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/xray_sampling_rule.html awscc_xray_sampling_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccXraySamplingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccXraySamplingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_xray_sampling_rule',
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

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // sampling_rule - computed: true, optional: false, required: false
  public get samplingRule() {
    return this.interpolationForAttribute('sampling_rule') as any;
  }

  // sampling_rule_record - computed: true, optional: false, required: false
  public get samplingRuleRecord() {
    return this.interpolationForAttribute('sampling_rule_record') as any;
  }

  // sampling_rule_update - computed: true, optional: false, required: false
  public get samplingRuleUpdate() {
    return this.interpolationForAttribute('sampling_rule_update') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
