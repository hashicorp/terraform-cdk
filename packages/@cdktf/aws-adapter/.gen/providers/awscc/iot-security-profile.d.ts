import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
    readonly alertTargets?: {
        [key: string]: IotSecurityProfileAlertTargets;
    } | cdktf.IResolvable;
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
export declare function iotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToTerraform(struct?: IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension): any;
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
export declare function iotSecurityProfileAdditionalMetricsToRetainV2ToTerraform(struct?: IotSecurityProfileAdditionalMetricsToRetainV2): any;
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
export declare function iotSecurityProfileAlertTargetsToTerraform(struct?: IotSecurityProfileAlertTargets): any;
export interface IotSecurityProfileBehaviorsCriteriaMlDetectionConfig {
    /**
    * The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#confidence_level IotSecurityProfile#confidence_level}
    */
    readonly confidenceLevel?: string;
}
export declare function iotSecurityProfileBehaviorsCriteriaMlDetectionConfigToTerraform(struct?: IotSecurityProfileBehaviorsCriteriaMlDetectionConfig): any;
export interface IotSecurityProfileBehaviorsCriteriaStatisticalThreshold {
    /**
    * The percentile which resolves to a threshold value by which compliance with a behavior is determined
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html#statistic IotSecurityProfile#statistic}
    */
    readonly statistic?: string;
}
export declare function iotSecurityProfileBehaviorsCriteriaStatisticalThresholdToTerraform(struct?: IotSecurityProfileBehaviorsCriteriaStatisticalThreshold): any;
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
export declare function iotSecurityProfileBehaviorsCriteriaValueToTerraform(struct?: IotSecurityProfileBehaviorsCriteriaValue): any;
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
export declare function iotSecurityProfileBehaviorsCriteriaToTerraform(struct?: IotSecurityProfileBehaviorsCriteria): any;
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
export declare function iotSecurityProfileBehaviorsMetricDimensionToTerraform(struct?: IotSecurityProfileBehaviorsMetricDimension): any;
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
export declare function iotSecurityProfileBehaviorsToTerraform(struct?: IotSecurityProfileBehaviors): any;
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
export declare function iotSecurityProfileTagsToTerraform(struct?: IotSecurityProfileTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html awscc_iot_security_profile}
*/
export declare class IotSecurityProfile extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_security_profile.html awscc_iot_security_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotSecurityProfileConfig = {}
    */
    constructor(scope: Construct, id: string, config?: IotSecurityProfileConfig);
    private _additionalMetricsToRetainV2?;
    get additionalMetricsToRetainV2(): IotSecurityProfileAdditionalMetricsToRetainV2[];
    set additionalMetricsToRetainV2(value: IotSecurityProfileAdditionalMetricsToRetainV2[]);
    resetAdditionalMetricsToRetainV2(): void;
    get additionalMetricsToRetainV2Input(): IotSecurityProfileAdditionalMetricsToRetainV2[] | undefined;
    private _alertTargets?;
    get alertTargets(): {
        [key: string]: IotSecurityProfileAlertTargets;
    } | cdktf.IResolvable;
    set alertTargets(value: {
        [key: string]: IotSecurityProfileAlertTargets;
    } | cdktf.IResolvable);
    resetAlertTargets(): void;
    get alertTargetsInput(): cdktf.IResolvable | {
        [key: string]: IotSecurityProfileAlertTargets;
    } | undefined;
    private _behaviors?;
    get behaviors(): IotSecurityProfileBehaviors[];
    set behaviors(value: IotSecurityProfileBehaviors[]);
    resetBehaviors(): void;
    get behaviorsInput(): IotSecurityProfileBehaviors[] | undefined;
    get id(): string;
    get securityProfileArn(): string;
    private _securityProfileDescription?;
    get securityProfileDescription(): string;
    set securityProfileDescription(value: string);
    resetSecurityProfileDescription(): void;
    get securityProfileDescriptionInput(): string | undefined;
    private _securityProfileName?;
    get securityProfileName(): string;
    set securityProfileName(value: string);
    resetSecurityProfileName(): void;
    get securityProfileNameInput(): string | undefined;
    private _tags?;
    get tags(): IotSecurityProfileTags[];
    set tags(value: IotSecurityProfileTags[]);
    resetTags(): void;
    get tagsInput(): IotSecurityProfileTags[] | undefined;
    private _targetArns?;
    get targetArns(): string[];
    set targetArns(value: string[]);
    resetTargetArns(): void;
    get targetArnsInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
