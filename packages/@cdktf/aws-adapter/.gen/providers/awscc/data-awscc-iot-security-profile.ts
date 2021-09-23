// https://www.terraform.io/docs/providers/awscc/d/iot_security_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotSecurityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_security_profile.html#id DataAwsccIotSecurityProfile#id}
  */
  readonly id: string;
}
export class DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension extends cdktf.ComplexComputedList {

  // dimension_name - computed: true, optional: false, required: false
  public get dimensionName() {
    return this.getStringAttribute('dimension_name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}

export function dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToTerraform(struct?: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimension_name: cdktf.stringToTerraform(struct!.dimensionName),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}

export class DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2 extends cdktf.ComplexComputedList {

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // metric_dimension - computed: true, optional: false, required: false
  public get metricDimension() {
    return this.interpolationForAttribute('metric_dimension') as any;
  }
}

export function dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2ToTerraform(struct?: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metric: cdktf.stringToTerraform(struct!.metric),
    metric_dimension: dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToTerraform(struct!.metricDimension),
  }
}

export class DataAwsccIotSecurityProfileAlertTargets extends cdktf.ComplexComputedList {

  // alert_target_arn - computed: true, optional: false, required: false
  public get alertTargetArn() {
    return this.getStringAttribute('alert_target_arn');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export function dataAwsccIotSecurityProfileAlertTargetsToTerraform(struct?: DataAwsccIotSecurityProfileAlertTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alert_target_arn: cdktf.stringToTerraform(struct!.alertTargetArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig extends cdktf.ComplexComputedList {

  // confidence_level - computed: true, optional: false, required: false
  public get confidenceLevel() {
    return this.getStringAttribute('confidence_level');
  }
}

export function dataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigToTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    confidence_level: cdktf.stringToTerraform(struct!.confidenceLevel),
  }
}

export class DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold extends cdktf.ComplexComputedList {

  // statistic - computed: true, optional: false, required: false
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
}

export function dataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdToTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    statistic: cdktf.stringToTerraform(struct!.statistic),
  }
}

export class DataAwsccIotSecurityProfileBehaviorsCriteriaValue extends cdktf.ComplexComputedList {

  // cidrs - computed: true, optional: false, required: false
  public get cidrs() {
    return this.getListAttribute('cidrs');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // numbers - computed: true, optional: false, required: false
  public get numbers() {
    return this.interpolationForAttribute('numbers') as any;
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.interpolationForAttribute('ports') as any;
  }

  // strings - computed: true, optional: false, required: false
  public get strings() {
    return this.getListAttribute('strings');
  }
}

export function dataAwsccIotSecurityProfileBehaviorsCriteriaValueToTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteriaValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrs),
    count: cdktf.stringToTerraform(struct!.count),
    number: cdktf.numberToTerraform(struct!.number),
    numbers: cdktf.listMapper(cdktf.numberToTerraform)(struct!.numbers),
    ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
    strings: cdktf.listMapper(cdktf.stringToTerraform)(struct!.strings),
  }
}

export class DataAwsccIotSecurityProfileBehaviorsCriteria extends cdktf.ComplexComputedList {

  // comparison_operator - computed: true, optional: false, required: false
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }

  // consecutive_datapoints_to_alarm - computed: true, optional: false, required: false
  public get consecutiveDatapointsToAlarm() {
    return this.getNumberAttribute('consecutive_datapoints_to_alarm');
  }

  // consecutive_datapoints_to_clear - computed: true, optional: false, required: false
  public get consecutiveDatapointsToClear() {
    return this.getNumberAttribute('consecutive_datapoints_to_clear');
  }

  // duration_seconds - computed: true, optional: false, required: false
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }

  // ml_detection_config - computed: true, optional: false, required: false
  public get mlDetectionConfig() {
    return this.interpolationForAttribute('ml_detection_config') as any;
  }

  // statistical_threshold - computed: true, optional: false, required: false
  public get statisticalThreshold() {
    return this.interpolationForAttribute('statistical_threshold') as any;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.interpolationForAttribute('value') as any;
  }
}

export function dataAwsccIotSecurityProfileBehaviorsCriteriaToTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    consecutive_datapoints_to_alarm: cdktf.numberToTerraform(struct!.consecutiveDatapointsToAlarm),
    consecutive_datapoints_to_clear: cdktf.numberToTerraform(struct!.consecutiveDatapointsToClear),
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    ml_detection_config: dataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigToTerraform(struct!.mlDetectionConfig),
    statistical_threshold: dataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdToTerraform(struct!.statisticalThreshold),
    value: dataAwsccIotSecurityProfileBehaviorsCriteriaValueToTerraform(struct!.value),
  }
}

export class DataAwsccIotSecurityProfileBehaviorsMetricDimension extends cdktf.ComplexComputedList {

  // dimension_name - computed: true, optional: false, required: false
  public get dimensionName() {
    return this.getStringAttribute('dimension_name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}

export function dataAwsccIotSecurityProfileBehaviorsMetricDimensionToTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsMetricDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimension_name: cdktf.stringToTerraform(struct!.dimensionName),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}

export class DataAwsccIotSecurityProfileBehaviors extends cdktf.ComplexComputedList {

  // criteria - computed: true, optional: false, required: false
  public get criteria() {
    return this.interpolationForAttribute('criteria') as any;
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // metric_dimension - computed: true, optional: false, required: false
  public get metricDimension() {
    return this.interpolationForAttribute('metric_dimension') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // suppress_alerts - computed: true, optional: false, required: false
  public get suppressAlerts() {
    return this.getBooleanAttribute('suppress_alerts');
  }
}

export function dataAwsccIotSecurityProfileBehaviorsToTerraform(struct?: DataAwsccIotSecurityProfileBehaviors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    criteria: dataAwsccIotSecurityProfileBehaviorsCriteriaToTerraform(struct!.criteria),
    metric: cdktf.stringToTerraform(struct!.metric),
    metric_dimension: dataAwsccIotSecurityProfileBehaviorsMetricDimensionToTerraform(struct!.metricDimension),
    name: cdktf.stringToTerraform(struct!.name),
    suppress_alerts: cdktf.booleanToTerraform(struct!.suppressAlerts),
  }
}

export class DataAwsccIotSecurityProfileTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotSecurityProfileTagsToTerraform(struct?: DataAwsccIotSecurityProfileTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_security_profile.html awscc_iot_security_profile}
*/
export class DataAwsccIotSecurityProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_security_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_security_profile.html awscc_iot_security_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotSecurityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotSecurityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_security_profile',
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

  // additional_metrics_to_retain_v2 - computed: true, optional: false, required: false
  public get additionalMetricsToRetainV2() {
    return this.interpolationForAttribute('additional_metrics_to_retain_v2') as any;
  }

  // alert_targets - computed: true, optional: false, required: false
  public get alertTargets() {
    return this.interpolationForAttribute('alert_targets') as any;
  }

  // behaviors - computed: true, optional: false, required: false
  public get behaviors() {
    return this.interpolationForAttribute('behaviors') as any;
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

  // security_profile_arn - computed: true, optional: false, required: false
  public get securityProfileArn() {
    return this.getStringAttribute('security_profile_arn');
  }

  // security_profile_description - computed: true, optional: false, required: false
  public get securityProfileDescription() {
    return this.getStringAttribute('security_profile_description');
  }

  // security_profile_name - computed: true, optional: false, required: false
  public get securityProfileName() {
    return this.getStringAttribute('security_profile_name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // target_arns - computed: true, optional: false, required: false
  public get targetArns() {
    return this.getListAttribute('target_arns');
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
