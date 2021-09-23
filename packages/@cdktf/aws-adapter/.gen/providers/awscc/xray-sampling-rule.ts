// https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface XraySamplingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#rule_name XraySamplingRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#sampling_rule XraySamplingRule#sampling_rule}
  */
  readonly samplingRule?: XraySamplingRuleSamplingRule;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#sampling_rule_record XraySamplingRule#sampling_rule_record}
  */
  readonly samplingRuleRecord?: XraySamplingRuleSamplingRuleRecord;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#sampling_rule_update XraySamplingRule#sampling_rule_update}
  */
  readonly samplingRuleUpdate?: XraySamplingRuleSamplingRuleUpdate;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#tags XraySamplingRule#tags}
  */
  readonly tags?: XraySamplingRuleTags[];
}
export interface XraySamplingRuleSamplingRule {
  /**
  * Matches attributes derived from the request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#attributes XraySamplingRule#attributes}
  */
  readonly attributes?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The percentage of matching requests to instrument, after the reservoir is exhausted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#fixed_rate XraySamplingRule#fixed_rate}
  */
  readonly fixedRate?: number;
  /**
  * Matches the hostname from a request URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#host XraySamplingRule#host}
  */
  readonly host?: string;
  /**
  * Matches the HTTP method from a request URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#http_method XraySamplingRule#http_method}
  */
  readonly httpMethod?: string;
  /**
  * The priority of the sampling rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#priority XraySamplingRule#priority}
  */
  readonly priority?: number;
  /**
  * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#reservoir_size XraySamplingRule#reservoir_size}
  */
  readonly reservoirSize?: number;
  /**
  * Matches the ARN of the AWS resource on which the service runs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#resource_arn XraySamplingRule#resource_arn}
  */
  readonly resourceArn?: string;
  /**
  * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#rule_arn XraySamplingRule#rule_arn}
  */
  readonly ruleArn?: string;
  /**
  * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#rule_name XraySamplingRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Matches the name that the service uses to identify itself in segments.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#service_name XraySamplingRule#service_name}
  */
  readonly serviceName?: string;
  /**
  * Matches the origin that the service uses to identify its type in segments.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#service_type XraySamplingRule#service_type}
  */
  readonly serviceType?: string;
  /**
  * Matches the path from a request URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#url_path XraySamplingRule#url_path}
  */
  readonly urlPath?: string;
  /**
  * The version of the sampling rule format (1)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#version XraySamplingRule#version}
  */
  readonly version?: number;
}

export function xraySamplingRuleSamplingRuleToTerraform(struct?: XraySamplingRuleSamplingRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.attributes),
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

export interface XraySamplingRuleSamplingRuleRecordSamplingRule {
  /**
  * Matches attributes derived from the request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#attributes XraySamplingRule#attributes}
  */
  readonly attributes?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The percentage of matching requests to instrument, after the reservoir is exhausted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#fixed_rate XraySamplingRule#fixed_rate}
  */
  readonly fixedRate?: number;
  /**
  * Matches the hostname from a request URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#host XraySamplingRule#host}
  */
  readonly host?: string;
  /**
  * Matches the HTTP method from a request URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#http_method XraySamplingRule#http_method}
  */
  readonly httpMethod?: string;
  /**
  * The priority of the sampling rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#priority XraySamplingRule#priority}
  */
  readonly priority?: number;
  /**
  * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#reservoir_size XraySamplingRule#reservoir_size}
  */
  readonly reservoirSize?: number;
  /**
  * Matches the ARN of the AWS resource on which the service runs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#resource_arn XraySamplingRule#resource_arn}
  */
  readonly resourceArn?: string;
  /**
  * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#rule_arn XraySamplingRule#rule_arn}
  */
  readonly ruleArn?: string;
  /**
  * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#rule_name XraySamplingRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Matches the name that the service uses to identify itself in segments.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#service_name XraySamplingRule#service_name}
  */
  readonly serviceName?: string;
  /**
  * Matches the origin that the service uses to identify its type in segments.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#service_type XraySamplingRule#service_type}
  */
  readonly serviceType?: string;
  /**
  * Matches the path from a request URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#url_path XraySamplingRule#url_path}
  */
  readonly urlPath?: string;
  /**
  * The version of the sampling rule format (1)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#version XraySamplingRule#version}
  */
  readonly version?: number;
}

export function xraySamplingRuleSamplingRuleRecordSamplingRuleToTerraform(struct?: XraySamplingRuleSamplingRuleRecordSamplingRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.attributes),
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

export interface XraySamplingRuleSamplingRuleRecord {
  /**
  * When the rule was created, in Unix time seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#created_at XraySamplingRule#created_at}
  */
  readonly createdAt?: string;
  /**
  * When the rule was modified, in Unix time seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#modified_at XraySamplingRule#modified_at}
  */
  readonly modifiedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#sampling_rule XraySamplingRule#sampling_rule}
  */
  readonly samplingRule?: XraySamplingRuleSamplingRuleRecordSamplingRule;
}

export function xraySamplingRuleSamplingRuleRecordToTerraform(struct?: XraySamplingRuleSamplingRuleRecord): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    created_at: cdktf.stringToTerraform(struct!.createdAt),
    modified_at: cdktf.stringToTerraform(struct!.modifiedAt),
    sampling_rule: xraySamplingRuleSamplingRuleRecordSamplingRuleToTerraform(struct!.samplingRule),
  }
}

export interface XraySamplingRuleSamplingRuleUpdate {
  /**
  * Matches attributes derived from the request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#attributes XraySamplingRule#attributes}
  */
  readonly attributes?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The percentage of matching requests to instrument, after the reservoir is exhausted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#fixed_rate XraySamplingRule#fixed_rate}
  */
  readonly fixedRate?: number;
  /**
  * Matches the hostname from a request URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#host XraySamplingRule#host}
  */
  readonly host?: string;
  /**
  * Matches the HTTP method from a request URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#http_method XraySamplingRule#http_method}
  */
  readonly httpMethod?: string;
  /**
  * The priority of the sampling rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#priority XraySamplingRule#priority}
  */
  readonly priority?: number;
  /**
  * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#reservoir_size XraySamplingRule#reservoir_size}
  */
  readonly reservoirSize?: number;
  /**
  * Matches the ARN of the AWS resource on which the service runs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#resource_arn XraySamplingRule#resource_arn}
  */
  readonly resourceArn?: string;
  /**
  * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#rule_arn XraySamplingRule#rule_arn}
  */
  readonly ruleArn?: string;
  /**
  * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#rule_name XraySamplingRule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Matches the name that the service uses to identify itself in segments.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#service_name XraySamplingRule#service_name}
  */
  readonly serviceName?: string;
  /**
  * Matches the origin that the service uses to identify its type in segments.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#service_type XraySamplingRule#service_type}
  */
  readonly serviceType?: string;
  /**
  * Matches the path from a request URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#url_path XraySamplingRule#url_path}
  */
  readonly urlPath?: string;
}

export function xraySamplingRuleSamplingRuleUpdateToTerraform(struct?: XraySamplingRuleSamplingRuleUpdate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.attributes),
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

export interface XraySamplingRuleTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#key XraySamplingRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html#value XraySamplingRule#value}
  */
  readonly value: string;
}

export function xraySamplingRuleTagsToTerraform(struct?: XraySamplingRuleTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html awscc_xray_sampling_rule}
*/
export class XraySamplingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_xray_sampling_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/xray_sampling_rule.html awscc_xray_sampling_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options XraySamplingRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: XraySamplingRuleConfig = {}) {
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
    this._ruleName = config.ruleName;
    this._samplingRule = config.samplingRule;
    this._samplingRuleRecord = config.samplingRuleRecord;
    this._samplingRuleUpdate = config.samplingRuleUpdate;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule_arn - computed: true, optional: false, required: false
  public get ruleArn() {
    return this.getStringAttribute('rule_arn');
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string;
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string ) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName
  }

  // sampling_rule - computed: false, optional: true, required: false
  private _samplingRule?: XraySamplingRuleSamplingRule;
  public get samplingRule() {
    return this.interpolationForAttribute('sampling_rule') as any;
  }
  public set samplingRule(value: XraySamplingRuleSamplingRule ) {
    this._samplingRule = value;
  }
  public resetSamplingRule() {
    this._samplingRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRuleInput() {
    return this._samplingRule
  }

  // sampling_rule_record - computed: false, optional: true, required: false
  private _samplingRuleRecord?: XraySamplingRuleSamplingRuleRecord;
  public get samplingRuleRecord() {
    return this.interpolationForAttribute('sampling_rule_record') as any;
  }
  public set samplingRuleRecord(value: XraySamplingRuleSamplingRuleRecord ) {
    this._samplingRuleRecord = value;
  }
  public resetSamplingRuleRecord() {
    this._samplingRuleRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRuleRecordInput() {
    return this._samplingRuleRecord
  }

  // sampling_rule_update - computed: false, optional: true, required: false
  private _samplingRuleUpdate?: XraySamplingRuleSamplingRuleUpdate;
  public get samplingRuleUpdate() {
    return this.interpolationForAttribute('sampling_rule_update') as any;
  }
  public set samplingRuleUpdate(value: XraySamplingRuleSamplingRuleUpdate ) {
    this._samplingRuleUpdate = value;
  }
  public resetSamplingRuleUpdate() {
    this._samplingRuleUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRuleUpdateInput() {
    return this._samplingRuleUpdate
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: XraySamplingRuleTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: XraySamplingRuleTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rule_name: cdktf.stringToTerraform(this._ruleName),
      sampling_rule: xraySamplingRuleSamplingRuleToTerraform(this._samplingRule),
      sampling_rule_record: xraySamplingRuleSamplingRuleRecordToTerraform(this._samplingRuleRecord),
      sampling_rule_update: xraySamplingRuleSamplingRuleUpdateToTerraform(this._samplingRuleUpdate),
      tags: cdktf.listMapper(xraySamplingRuleTagsToTerraform)(this._tags),
    };
  }
}
