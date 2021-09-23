// https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotSecurityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#additional_metrics_to_retain_v2 IotSecurityProfile#additional_metrics_to_retain_v2}
  */
  readonly additionalMetricsToRetainV2?: IotSecurityProfileAdditionalMetricsToRetainV2[];
  /**
  * Specifies the destinations to which alerts are sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#alert_targets IotSecurityProfile#alert_targets}
  */
  readonly alertTargets?: { [key: string]: IotSecurityProfileAlertTargets } | cdktf.IResolvable;
  /**
  * Specifies the behaviors that, when violated by a device (thing), cause an alert.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#behaviors IotSecurityProfile#behaviors}
  */
  readonly behaviors?: IotSecurityProfileBehaviors[];
  /**
  * A description of the security profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#security_profile_description IotSecurityProfile#security_profile_description}
  */
  readonly securityProfileDescription?: string;
  /**
  * A unique identifier for the security profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#security_profile_name IotSecurityProfile#security_profile_name}
  */
  readonly securityProfileName?: string;
  /**
  * Metadata that can be used to manage the security profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#tags IotSecurityProfile#tags}
  */
  readonly tags?: IotSecurityProfileTags[];
  /**
  * A set of target ARNs that the security profile is attached to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#target_arns IotSecurityProfile#target_arns}
  */
  readonly targetArns?: string[];
}
export interface IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension {
  /**
  * A unique identifier for the dimension.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#dimension_name IotSecurityProfile#dimension_name}
  */
  readonly dimensionName: string;
  /**
  * Defines how the dimensionValues of a dimension are interpreted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#operator IotSecurityProfile#operator}
  */
  readonly operator?: string;
}

export function iotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToTerraform(struct?: IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimension_name: cdktf.stringToTerraform(struct!.dimensionName),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}

export interface IotSecurityProfileAdditionalMetricsToRetainV2 {
  /**
  * What is measured by the behavior.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#metric IotSecurityProfile#metric}
  */
  readonly metric: string;
  /**
  * The dimension of a metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#metric_dimension IotSecurityProfile#metric_dimension}
  */
  readonly metricDimension?: IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension;
}

export function iotSecurityProfileAdditionalMetricsToRetainV2ToTerraform(struct?: IotSecurityProfileAdditionalMetricsToRetainV2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metric: cdktf.stringToTerraform(struct!.metric),
    metric_dimension: iotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToTerraform(struct!.metricDimension),
  }
}

export interface IotSecurityProfileAlertTargets {
  /**
  * The ARN of the notification target to which alerts are sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#alert_target_arn IotSecurityProfile#alert_target_arn}
  */
  readonly alertTargetArn?: string;
  /**
  * The ARN of the role that grants permission to send alerts to the notification target.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#role_arn IotSecurityProfile#role_arn}
  */
  readonly roleArn?: string;
}

export function iotSecurityProfileAlertTargetsToTerraform(struct?: IotSecurityProfileAlertTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    alert_target_arn: cdktf.stringToTerraform(struct!.alertTargetArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotSecurityProfileBehaviorsCriteriaMlDetectionConfig {
  /**
  * The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#confidence_level IotSecurityProfile#confidence_level}
  */
  readonly confidenceLevel?: string;
}

export function iotSecurityProfileBehaviorsCriteriaMlDetectionConfigToTerraform(struct?: IotSecurityProfileBehaviorsCriteriaMlDetectionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    confidence_level: cdktf.stringToTerraform(struct!.confidenceLevel),
  }
}

export interface IotSecurityProfileBehaviorsCriteriaStatisticalThreshold {
  /**
  * The percentile which resolves to a threshold value by which compliance with a behavior is determined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#statistic IotSecurityProfile#statistic}
  */
  readonly statistic?: string;
}

export function iotSecurityProfileBehaviorsCriteriaStatisticalThresholdToTerraform(struct?: IotSecurityProfileBehaviorsCriteriaStatisticalThreshold): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    statistic: cdktf.stringToTerraform(struct!.statistic),
  }
}

export interface IotSecurityProfileBehaviorsCriteriaValue {
  /**
  * If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#cidrs IotSecurityProfile#cidrs}
  */
  readonly cidrs?: string[];
  /**
  * If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#count IotSecurityProfile#count}
  */
  readonly count?: string;
  /**
  * The numeral value of a metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#number IotSecurityProfile#number}
  */
  readonly number?: number;
  /**
  * The numeral values of a metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#numbers IotSecurityProfile#numbers}
  */
  readonly numbers?: number[];
  /**
  * If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#ports IotSecurityProfile#ports}
  */
  readonly ports?: number[];
  /**
  * The string values of a metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#strings IotSecurityProfile#strings}
  */
  readonly strings?: string[];
}

export function iotSecurityProfileBehaviorsCriteriaValueToTerraform(struct?: IotSecurityProfileBehaviorsCriteriaValue): any {
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

export interface IotSecurityProfileBehaviorsCriteria {
  /**
  * The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#comparison_operator IotSecurityProfile#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs. If not specified, the default is 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#consecutive_datapoints_to_alarm IotSecurityProfile#consecutive_datapoints_to_alarm}
  */
  readonly consecutiveDatapointsToAlarm?: number;
  /**
  * If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared. If not specified, the default is 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#consecutive_datapoints_to_clear IotSecurityProfile#consecutive_datapoints_to_clear}
  */
  readonly consecutiveDatapointsToClear?: number;
  /**
  * Use this to specify the time duration over which the behavior is evaluated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#duration_seconds IotSecurityProfile#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * The configuration of an ML Detect Security Profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#ml_detection_config IotSecurityProfile#ml_detection_config}
  */
  readonly mlDetectionConfig?: IotSecurityProfileBehaviorsCriteriaMlDetectionConfig;
  /**
  * A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#statistical_threshold IotSecurityProfile#statistical_threshold}
  */
  readonly statisticalThreshold?: IotSecurityProfileBehaviorsCriteriaStatisticalThreshold;
  /**
  * The value to be compared with the metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#value IotSecurityProfile#value}
  */
  readonly value?: IotSecurityProfileBehaviorsCriteriaValue;
}

export function iotSecurityProfileBehaviorsCriteriaToTerraform(struct?: IotSecurityProfileBehaviorsCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    consecutive_datapoints_to_alarm: cdktf.numberToTerraform(struct!.consecutiveDatapointsToAlarm),
    consecutive_datapoints_to_clear: cdktf.numberToTerraform(struct!.consecutiveDatapointsToClear),
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    ml_detection_config: iotSecurityProfileBehaviorsCriteriaMlDetectionConfigToTerraform(struct!.mlDetectionConfig),
    statistical_threshold: iotSecurityProfileBehaviorsCriteriaStatisticalThresholdToTerraform(struct!.statisticalThreshold),
    value: iotSecurityProfileBehaviorsCriteriaValueToTerraform(struct!.value),
  }
}

export interface IotSecurityProfileBehaviorsMetricDimension {
  /**
  * A unique identifier for the dimension.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#dimension_name IotSecurityProfile#dimension_name}
  */
  readonly dimensionName: string;
  /**
  * Defines how the dimensionValues of a dimension are interpreted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#operator IotSecurityProfile#operator}
  */
  readonly operator?: string;
}

export function iotSecurityProfileBehaviorsMetricDimensionToTerraform(struct?: IotSecurityProfileBehaviorsMetricDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimension_name: cdktf.stringToTerraform(struct!.dimensionName),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}

export interface IotSecurityProfileBehaviors {
  /**
  * The criteria by which the behavior is determined to be normal.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#criteria IotSecurityProfile#criteria}
  */
  readonly criteria?: IotSecurityProfileBehaviorsCriteria;
  /**
  * What is measured by the behavior.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#metric IotSecurityProfile#metric}
  */
  readonly metric?: string;
  /**
  * The dimension of a metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#metric_dimension IotSecurityProfile#metric_dimension}
  */
  readonly metricDimension?: IotSecurityProfileBehaviorsMetricDimension;
  /**
  * The name for the behavior.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#name IotSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Manage Detect alarm SNS notifications by setting behavior notification to on or suppressed. Detect will continue to performing device behavior evaluations. However, suppressed alarms wouldn't be forwarded for SNS notification.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#suppress_alerts IotSecurityProfile#suppress_alerts}
  */
  readonly suppressAlerts?: boolean | cdktf.IResolvable;
}

export function iotSecurityProfileBehaviorsToTerraform(struct?: IotSecurityProfileBehaviors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    criteria: iotSecurityProfileBehaviorsCriteriaToTerraform(struct!.criteria),
    metric: cdktf.stringToTerraform(struct!.metric),
    metric_dimension: iotSecurityProfileBehaviorsMetricDimensionToTerraform(struct!.metricDimension),
    name: cdktf.stringToTerraform(struct!.name),
    suppress_alerts: cdktf.booleanToTerraform(struct!.suppressAlerts),
  }
}

export interface IotSecurityProfileTags {
  /**
  * The tag's key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#key IotSecurityProfile#key}
  */
  readonly key: string;
  /**
  * The tag's value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#value IotSecurityProfile#value}
  */
  readonly value: string;
}

export function iotSecurityProfileTagsToTerraform(struct?: IotSecurityProfileTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html awscc_iot_security_profile}
*/
export class IotSecurityProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iot_security_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html awscc_iot_security_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotSecurityProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IotSecurityProfileConfig = {}) {
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
    this._additionalMetricsToRetainV2 = config.additionalMetricsToRetainV2;
    this._alertTargets = config.alertTargets;
    this._behaviors = config.behaviors;
    this._securityProfileDescription = config.securityProfileDescription;
    this._securityProfileName = config.securityProfileName;
    this._tags = config.tags;
    this._targetArns = config.targetArns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_metrics_to_retain_v2 - computed: false, optional: true, required: false
  private _additionalMetricsToRetainV2?: IotSecurityProfileAdditionalMetricsToRetainV2[];
  public get additionalMetricsToRetainV2() {
    return this.interpolationForAttribute('additional_metrics_to_retain_v2') as any;
  }
  public set additionalMetricsToRetainV2(value: IotSecurityProfileAdditionalMetricsToRetainV2[] ) {
    this._additionalMetricsToRetainV2 = value;
  }
  public resetAdditionalMetricsToRetainV2() {
    this._additionalMetricsToRetainV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalMetricsToRetainV2Input() {
    return this._additionalMetricsToRetainV2
  }

  // alert_targets - computed: false, optional: true, required: false
  private _alertTargets?: { [key: string]: IotSecurityProfileAlertTargets } | cdktf.IResolvable;
  public get alertTargets() {
    return this.interpolationForAttribute('alert_targets') as any;
  }
  public set alertTargets(value: { [key: string]: IotSecurityProfileAlertTargets } | cdktf.IResolvable ) {
    this._alertTargets = value;
  }
  public resetAlertTargets() {
    this._alertTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTargetsInput() {
    return this._alertTargets
  }

  // behaviors - computed: false, optional: true, required: false
  private _behaviors?: IotSecurityProfileBehaviors[];
  public get behaviors() {
    return this.interpolationForAttribute('behaviors') as any;
  }
  public set behaviors(value: IotSecurityProfileBehaviors[] ) {
    this._behaviors = value;
  }
  public resetBehaviors() {
    this._behaviors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorsInput() {
    return this._behaviors
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // security_profile_arn - computed: true, optional: false, required: false
  public get securityProfileArn() {
    return this.getStringAttribute('security_profile_arn');
  }

  // security_profile_description - computed: false, optional: true, required: false
  private _securityProfileDescription?: string;
  public get securityProfileDescription() {
    return this.getStringAttribute('security_profile_description');
  }
  public set securityProfileDescription(value: string ) {
    this._securityProfileDescription = value;
  }
  public resetSecurityProfileDescription() {
    this._securityProfileDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileDescriptionInput() {
    return this._securityProfileDescription
  }

  // security_profile_name - computed: true, optional: true, required: false
  private _securityProfileName?: string;
  public get securityProfileName() {
    return this.getStringAttribute('security_profile_name');
  }
  public set securityProfileName(value: string) {
    this._securityProfileName = value;
  }
  public resetSecurityProfileName() {
    this._securityProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileNameInput() {
    return this._securityProfileName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotSecurityProfileTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotSecurityProfileTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // target_arns - computed: false, optional: true, required: false
  private _targetArns?: string[];
  public get targetArns() {
    return this.getListAttribute('target_arns');
  }
  public set targetArns(value: string[] ) {
    this._targetArns = value;
  }
  public resetTargetArns() {
    this._targetArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnsInput() {
    return this._targetArns
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_metrics_to_retain_v2: cdktf.listMapper(iotSecurityProfileAdditionalMetricsToRetainV2ToTerraform)(this._additionalMetricsToRetainV2),
      alert_targets: cdktf.hashMapper(cdktf.anyToTerraform)(this._alertTargets),
      behaviors: cdktf.listMapper(iotSecurityProfileBehaviorsToTerraform)(this._behaviors),
      security_profile_description: cdktf.stringToTerraform(this._securityProfileDescription),
      security_profile_name: cdktf.stringToTerraform(this._securityProfileName),
      tags: cdktf.listMapper(iotSecurityProfileTagsToTerraform)(this._tags),
      target_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._targetArns),
    };
  }
}
