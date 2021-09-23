"use strict";
// https://www.terraform.io/docs/providers/awscc/d/iot_security_profile.html
// generated from terraform resource schema
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAwsccIotSecurityProfile = exports.dataAwsccIotSecurityProfileTagsToTerraform = exports.DataAwsccIotSecurityProfileTags = exports.dataAwsccIotSecurityProfileBehaviorsToTerraform = exports.DataAwsccIotSecurityProfileBehaviors = exports.dataAwsccIotSecurityProfileBehaviorsMetricDimensionToTerraform = exports.DataAwsccIotSecurityProfileBehaviorsMetricDimension = exports.dataAwsccIotSecurityProfileBehaviorsCriteriaToTerraform = exports.DataAwsccIotSecurityProfileBehaviorsCriteria = exports.dataAwsccIotSecurityProfileBehaviorsCriteriaValueToTerraform = exports.DataAwsccIotSecurityProfileBehaviorsCriteriaValue = exports.dataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdToTerraform = exports.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold = exports.dataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigToTerraform = exports.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig = exports.dataAwsccIotSecurityProfileAlertTargetsToTerraform = exports.DataAwsccIotSecurityProfileAlertTargets = exports.dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2ToTerraform = exports.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2 = exports.dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToTerraform = exports.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension = void 0;
const cdktf = require("cdktf");
class DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension extends cdktf.ComplexComputedList {
    // dimension_name - computed: true, optional: false, required: false
    get dimensionName() {
        return this.getStringAttribute('dimension_name');
    }
    // operator - computed: true, optional: false, required: false
    get operator() {
        return this.getStringAttribute('operator');
    }
}
exports.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension = DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension;
function dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dimension_name: cdktf.stringToTerraform(struct.dimensionName),
        operator: cdktf.stringToTerraform(struct.operator),
    };
}
exports.dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToTerraform = dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToTerraform;
class DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2 extends cdktf.ComplexComputedList {
    // metric - computed: true, optional: false, required: false
    get metric() {
        return this.getStringAttribute('metric');
    }
    // metric_dimension - computed: true, optional: false, required: false
    get metricDimension() {
        return this.interpolationForAttribute('metric_dimension');
    }
}
exports.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2 = DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2;
function dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        metric: cdktf.stringToTerraform(struct.metric),
        metric_dimension: dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToTerraform(struct.metricDimension),
    };
}
exports.dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2ToTerraform = dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2ToTerraform;
class DataAwsccIotSecurityProfileAlertTargets extends cdktf.ComplexComputedList {
    // alert_target_arn - computed: true, optional: false, required: false
    get alertTargetArn() {
        return this.getStringAttribute('alert_target_arn');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
}
exports.DataAwsccIotSecurityProfileAlertTargets = DataAwsccIotSecurityProfileAlertTargets;
function dataAwsccIotSecurityProfileAlertTargetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        alert_target_arn: cdktf.stringToTerraform(struct.alertTargetArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
exports.dataAwsccIotSecurityProfileAlertTargetsToTerraform = dataAwsccIotSecurityProfileAlertTargetsToTerraform;
class DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig extends cdktf.ComplexComputedList {
    // confidence_level - computed: true, optional: false, required: false
    get confidenceLevel() {
        return this.getStringAttribute('confidence_level');
    }
}
exports.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig = DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig;
function dataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        confidence_level: cdktf.stringToTerraform(struct.confidenceLevel),
    };
}
exports.dataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigToTerraform = dataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigToTerraform;
class DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold extends cdktf.ComplexComputedList {
    // statistic - computed: true, optional: false, required: false
    get statistic() {
        return this.getStringAttribute('statistic');
    }
}
exports.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold = DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold;
function dataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        statistic: cdktf.stringToTerraform(struct.statistic),
    };
}
exports.dataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdToTerraform = dataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdToTerraform;
class DataAwsccIotSecurityProfileBehaviorsCriteriaValue extends cdktf.ComplexComputedList {
    // cidrs - computed: true, optional: false, required: false
    get cidrs() {
        return this.getListAttribute('cidrs');
    }
    // count - computed: true, optional: false, required: false
    get count() {
        return this.getStringAttribute('count');
    }
    // number - computed: true, optional: false, required: false
    get number() {
        return this.getNumberAttribute('number');
    }
    // numbers - computed: true, optional: false, required: false
    get numbers() {
        return this.interpolationForAttribute('numbers');
    }
    // ports - computed: true, optional: false, required: false
    get ports() {
        return this.interpolationForAttribute('ports');
    }
    // strings - computed: true, optional: false, required: false
    get strings() {
        return this.getListAttribute('strings');
    }
}
exports.DataAwsccIotSecurityProfileBehaviorsCriteriaValue = DataAwsccIotSecurityProfileBehaviorsCriteriaValue;
function dataAwsccIotSecurityProfileBehaviorsCriteriaValueToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct.cidrs),
        count: cdktf.stringToTerraform(struct.count),
        number: cdktf.numberToTerraform(struct.number),
        numbers: cdktf.listMapper(cdktf.numberToTerraform)(struct.numbers),
        ports: cdktf.listMapper(cdktf.numberToTerraform)(struct.ports),
        strings: cdktf.listMapper(cdktf.stringToTerraform)(struct.strings),
    };
}
exports.dataAwsccIotSecurityProfileBehaviorsCriteriaValueToTerraform = dataAwsccIotSecurityProfileBehaviorsCriteriaValueToTerraform;
class DataAwsccIotSecurityProfileBehaviorsCriteria extends cdktf.ComplexComputedList {
    // comparison_operator - computed: true, optional: false, required: false
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    // consecutive_datapoints_to_alarm - computed: true, optional: false, required: false
    get consecutiveDatapointsToAlarm() {
        return this.getNumberAttribute('consecutive_datapoints_to_alarm');
    }
    // consecutive_datapoints_to_clear - computed: true, optional: false, required: false
    get consecutiveDatapointsToClear() {
        return this.getNumberAttribute('consecutive_datapoints_to_clear');
    }
    // duration_seconds - computed: true, optional: false, required: false
    get durationSeconds() {
        return this.getNumberAttribute('duration_seconds');
    }
    // ml_detection_config - computed: true, optional: false, required: false
    get mlDetectionConfig() {
        return this.interpolationForAttribute('ml_detection_config');
    }
    // statistical_threshold - computed: true, optional: false, required: false
    get statisticalThreshold() {
        return this.interpolationForAttribute('statistical_threshold');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.interpolationForAttribute('value');
    }
}
exports.DataAwsccIotSecurityProfileBehaviorsCriteria = DataAwsccIotSecurityProfileBehaviorsCriteria;
function dataAwsccIotSecurityProfileBehaviorsCriteriaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        consecutive_datapoints_to_alarm: cdktf.numberToTerraform(struct.consecutiveDatapointsToAlarm),
        consecutive_datapoints_to_clear: cdktf.numberToTerraform(struct.consecutiveDatapointsToClear),
        duration_seconds: cdktf.numberToTerraform(struct.durationSeconds),
        ml_detection_config: dataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigToTerraform(struct.mlDetectionConfig),
        statistical_threshold: dataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdToTerraform(struct.statisticalThreshold),
        value: dataAwsccIotSecurityProfileBehaviorsCriteriaValueToTerraform(struct.value),
    };
}
exports.dataAwsccIotSecurityProfileBehaviorsCriteriaToTerraform = dataAwsccIotSecurityProfileBehaviorsCriteriaToTerraform;
class DataAwsccIotSecurityProfileBehaviorsMetricDimension extends cdktf.ComplexComputedList {
    // dimension_name - computed: true, optional: false, required: false
    get dimensionName() {
        return this.getStringAttribute('dimension_name');
    }
    // operator - computed: true, optional: false, required: false
    get operator() {
        return this.getStringAttribute('operator');
    }
}
exports.DataAwsccIotSecurityProfileBehaviorsMetricDimension = DataAwsccIotSecurityProfileBehaviorsMetricDimension;
function dataAwsccIotSecurityProfileBehaviorsMetricDimensionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        dimension_name: cdktf.stringToTerraform(struct.dimensionName),
        operator: cdktf.stringToTerraform(struct.operator),
    };
}
exports.dataAwsccIotSecurityProfileBehaviorsMetricDimensionToTerraform = dataAwsccIotSecurityProfileBehaviorsMetricDimensionToTerraform;
class DataAwsccIotSecurityProfileBehaviors extends cdktf.ComplexComputedList {
    // criteria - computed: true, optional: false, required: false
    get criteria() {
        return this.interpolationForAttribute('criteria');
    }
    // metric - computed: true, optional: false, required: false
    get metric() {
        return this.getStringAttribute('metric');
    }
    // metric_dimension - computed: true, optional: false, required: false
    get metricDimension() {
        return this.interpolationForAttribute('metric_dimension');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // suppress_alerts - computed: true, optional: false, required: false
    get suppressAlerts() {
        return this.getBooleanAttribute('suppress_alerts');
    }
}
exports.DataAwsccIotSecurityProfileBehaviors = DataAwsccIotSecurityProfileBehaviors;
function dataAwsccIotSecurityProfileBehaviorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        criteria: dataAwsccIotSecurityProfileBehaviorsCriteriaToTerraform(struct.criteria),
        metric: cdktf.stringToTerraform(struct.metric),
        metric_dimension: dataAwsccIotSecurityProfileBehaviorsMetricDimensionToTerraform(struct.metricDimension),
        name: cdktf.stringToTerraform(struct.name),
        suppress_alerts: cdktf.booleanToTerraform(struct.suppressAlerts),
    };
}
exports.dataAwsccIotSecurityProfileBehaviorsToTerraform = dataAwsccIotSecurityProfileBehaviorsToTerraform;
class DataAwsccIotSecurityProfileTags extends cdktf.ComplexComputedList {
    // key - computed: true, optional: false, required: false
    get key() {
        return this.getStringAttribute('key');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
exports.DataAwsccIotSecurityProfileTags = DataAwsccIotSecurityProfileTags;
function dataAwsccIotSecurityProfileTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
exports.dataAwsccIotSecurityProfileTagsToTerraform = dataAwsccIotSecurityProfileTagsToTerraform;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_security_profile.html awscc_iot_security_profile}
*/
class DataAwsccIotSecurityProfile extends cdktf.TerraformDataSource {
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
    constructor(scope, id, config) {
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
    get additionalMetricsToRetainV2() {
        return this.interpolationForAttribute('additional_metrics_to_retain_v2');
    }
    // alert_targets - computed: true, optional: false, required: false
    get alertTargets() {
        return this.interpolationForAttribute('alert_targets');
    }
    // behaviors - computed: true, optional: false, required: false
    get behaviors() {
        return this.interpolationForAttribute('behaviors');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // security_profile_arn - computed: true, optional: false, required: false
    get securityProfileArn() {
        return this.getStringAttribute('security_profile_arn');
    }
    // security_profile_description - computed: true, optional: false, required: false
    get securityProfileDescription() {
        return this.getStringAttribute('security_profile_description');
    }
    // security_profile_name - computed: true, optional: false, required: false
    get securityProfileName() {
        return this.getStringAttribute('security_profile_name');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        return this.interpolationForAttribute('tags');
    }
    // target_arns - computed: true, optional: false, required: false
    get targetArns() {
        return this.getListAttribute('target_arns');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
        };
    }
}
exports.DataAwsccIotSecurityProfile = DataAwsccIotSecurityProfile;
// =================
// STATIC PROPERTIES
// =================
DataAwsccIotSecurityProfile.tfResourceType = "awscc_iot_security_profile";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3NjYy1pb3Qtc2VjdXJpdHktcHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEtYXdzY2MtaW90LXNlY3VyaXR5LXByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUE0RTtBQUM1RSwyQ0FBMkM7OztBQUczQywrQkFBK0I7QUFZL0IsTUFBYSxxRUFBc0UsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWxILG9FQUFvRTtJQUNwRSxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsOERBQThEO0lBQzlELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUFYRCxzSkFXQztBQUVELFNBQWdCLGdGQUFnRixDQUFDLE1BQThFO0lBQzdLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxPQUFPO1FBQ0wsY0FBYyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztLQUNwRCxDQUFBO0FBQ0gsQ0FBQztBQU5ELDRLQU1DO0FBRUQsTUFBYSxzREFBdUQsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRW5HLDREQUE0RDtJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsc0VBQXNFO0lBQ3RFLElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxrQkFBa0IsQ0FBUSxDQUFDO0lBQ25FLENBQUM7Q0FD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QjtRQUM1QixPQUFPO1lBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ3RDLENBQUM7SUFDSixDQUFDOztBQWpHSCxrRUFrR0M7QUFoR0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDRywwQ0FBYyxHQUFXLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly93d3cudGVycmFmb3JtLmlvL2RvY3MvcHJvdmlkZXJzL2F3c2NjL2QvaW90X3NlY3VyaXR5X3Byb2ZpbGUuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFBd3NjY0lvdFNlY3VyaXR5UHJvZmlsZUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAvKipcbiAgKiBVbmlxdWVseSBpZGVudGlmaWVzIHRoZSByZXNvdXJjZS5cbiAgKiBcbiAgKiBEb2NzIGF0IFRlcnJhZm9ybSBSZWdpc3RyeToge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2lvdF9zZWN1cml0eV9wcm9maWxlLmh0bWwjaWQgRGF0YUF3c2NjSW90U2VjdXJpdHlQcm9maWxlI2lkfVxuICAqL1xuICByZWFkb25seSBpZDogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFNlY3VyaXR5UHJvZmlsZUFkZGl0aW9uYWxNZXRyaWNzVG9SZXRhaW5WMk1ldHJpY0RpbWVuc2lvbiBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGRpbWVuc2lvbl9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZGltZW5zaW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2RpbWVuc2lvbl9uYW1lJyk7XG4gIH1cblxuICAvLyBvcGVyYXRvciAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IG9wZXJhdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnb3BlcmF0b3InKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90U2VjdXJpdHlQcm9maWxlQWRkaXRpb25hbE1ldHJpY3NUb1JldGFpblYyTWV0cmljRGltZW5zaW9uVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90U2VjdXJpdHlQcm9maWxlQWRkaXRpb25hbE1ldHJpY3NUb1JldGFpblYyTWV0cmljRGltZW5zaW9uKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGRpbWVuc2lvbl9uYW1lOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmRpbWVuc2lvbk5hbWUpLFxuICAgIG9wZXJhdG9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm9wZXJhdG9yKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90U2VjdXJpdHlQcm9maWxlQWRkaXRpb25hbE1ldHJpY3NUb1JldGFpblYyIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gbWV0cmljIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWV0cmljKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0cmljJyk7XG4gIH1cblxuICAvLyBtZXRyaWNfZGltZW5zaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWV0cmljRGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21ldHJpY19kaW1lbnNpb24nKSBhcyBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFNlY3VyaXR5UHJvZmlsZUFkZGl0aW9uYWxNZXRyaWNzVG9SZXRhaW5WMlRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFNlY3VyaXR5UHJvZmlsZUFkZGl0aW9uYWxNZXRyaWNzVG9SZXRhaW5WMik6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBtZXRyaWM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubWV0cmljKSxcbiAgICBtZXRyaWNfZGltZW5zaW9uOiBkYXRhQXdzY2NJb3RTZWN1cml0eVByb2ZpbGVBZGRpdGlvbmFsTWV0cmljc1RvUmV0YWluVjJNZXRyaWNEaW1lbnNpb25Ub1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpY0RpbWVuc2lvbiksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFNlY3VyaXR5UHJvZmlsZUFsZXJ0VGFyZ2V0cyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGFsZXJ0X3RhcmdldF9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbGVydFRhcmdldEFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2FsZXJ0X3RhcmdldF9hcm4nKTtcbiAgfVxuXG4gIC8vIHJvbGVfYXJuIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgcm9sZUFybigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3JvbGVfYXJuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFNlY3VyaXR5UHJvZmlsZUFsZXJ0VGFyZ2V0c1RvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFNlY3VyaXR5UHJvZmlsZUFsZXJ0VGFyZ2V0cyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBhbGVydF90YXJnZXRfYXJuOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmFsZXJ0VGFyZ2V0QXJuKSxcbiAgICByb2xlX2FybjogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5yb2xlQXJuKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90U2VjdXJpdHlQcm9maWxlQmVoYXZpb3JzQ3JpdGVyaWFNbERldGVjdGlvbkNvbmZpZyBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbmZpZGVuY2VfbGV2ZWwgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25maWRlbmNlTGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb25maWRlbmNlX2xldmVsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFBd3NjY0lvdFNlY3VyaXR5UHJvZmlsZUJlaGF2aW9yc0NyaXRlcmlhTWxEZXRlY3Rpb25Db25maWdUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RTZWN1cml0eVByb2ZpbGVCZWhhdmlvcnNDcml0ZXJpYU1sRGV0ZWN0aW9uQ29uZmlnKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICByZXR1cm4ge1xuICAgIGNvbmZpZGVuY2VfbGV2ZWw6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuY29uZmlkZW5jZUxldmVsKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90U2VjdXJpdHlQcm9maWxlQmVoYXZpb3JzQ3JpdGVyaWFTdGF0aXN0aWNhbFRocmVzaG9sZCBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIHN0YXRpc3RpYyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN0YXRpc3RpYygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3N0YXRpc3RpYycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RTZWN1cml0eVByb2ZpbGVCZWhhdmlvcnNDcml0ZXJpYVN0YXRpc3RpY2FsVGhyZXNob2xkVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90U2VjdXJpdHlQcm9maWxlQmVoYXZpb3JzQ3JpdGVyaWFTdGF0aXN0aWNhbFRocmVzaG9sZCk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBzdGF0aXN0aWM6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuc3RhdGlzdGljKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90U2VjdXJpdHlQcm9maWxlQmVoYXZpb3JzQ3JpdGVyaWFWYWx1ZSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNpZHJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY2lkcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgnY2lkcnMnKTtcbiAgfVxuXG4gIC8vIGNvdW50IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb3VudCcpO1xuICB9XG5cbiAgLy8gbnVtYmVyIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnbnVtYmVyJyk7XG4gIH1cblxuICAvLyBudW1iZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbnVtYmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdudW1iZXJzJykgYXMgYW55O1xuICB9XG5cbiAgLy8gcG9ydHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBwb3J0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdwb3J0cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHN0cmluZ3MgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzdHJpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLmdldExpc3RBdHRyaWJ1dGUoJ3N0cmluZ3MnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90U2VjdXJpdHlQcm9maWxlQmVoYXZpb3JzQ3JpdGVyaWFWYWx1ZVRvVGVycmFmb3JtKHN0cnVjdD86IERhdGFBd3NjY0lvdFNlY3VyaXR5UHJvZmlsZUJlaGF2aW9yc0NyaXRlcmlhVmFsdWUpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY2lkcnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEuY2lkcnMpLFxuICAgIGNvdW50OiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvdW50KSxcbiAgICBudW1iZXI6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEubnVtYmVyKSxcbiAgICBudW1iZXJzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtKShzdHJ1Y3QhLm51bWJlcnMpLFxuICAgIHBvcnRzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLm51bWJlclRvVGVycmFmb3JtKShzdHJ1Y3QhLnBvcnRzKSxcbiAgICBzdHJpbmdzOiBjZGt0Zi5saXN0TWFwcGVyKGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKShzdHJ1Y3QhLnN0cmluZ3MpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RTZWN1cml0eVByb2ZpbGVCZWhhdmlvcnNDcml0ZXJpYSBleHRlbmRzIGNka3RmLkNvbXBsZXhDb21wdXRlZExpc3Qge1xuXG4gIC8vIGNvbXBhcmlzb25fb3BlcmF0b3IgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb21wYXJpc29uT3BlcmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdjb21wYXJpc29uX29wZXJhdG9yJyk7XG4gIH1cblxuICAvLyBjb25zZWN1dGl2ZV9kYXRhcG9pbnRzX3RvX2FsYXJtIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgY29uc2VjdXRpdmVEYXRhcG9pbnRzVG9BbGFybSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2NvbnNlY3V0aXZlX2RhdGFwb2ludHNfdG9fYWxhcm0nKTtcbiAgfVxuXG4gIC8vIGNvbnNlY3V0aXZlX2RhdGFwb2ludHNfdG9fY2xlYXIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBjb25zZWN1dGl2ZURhdGFwb2ludHNUb0NsZWFyKCkge1xuICAgIHJldHVybiB0aGlzLmdldE51bWJlckF0dHJpYnV0ZSgnY29uc2VjdXRpdmVfZGF0YXBvaW50c190b19jbGVhcicpO1xuICB9XG5cbiAgLy8gZHVyYXRpb25fc2Vjb25kcyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGR1cmF0aW9uU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ2R1cmF0aW9uX3NlY29uZHMnKTtcbiAgfVxuXG4gIC8vIG1sX2RldGVjdGlvbl9jb25maWcgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBtbERldGVjdGlvbkNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdtbF9kZXRlY3Rpb25fY29uZmlnJykgYXMgYW55O1xuICB9XG5cbiAgLy8gc3RhdGlzdGljYWxfdGhyZXNob2xkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc3RhdGlzdGljYWxUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnc3RhdGlzdGljYWxfdGhyZXNob2xkJykgYXMgYW55O1xuICB9XG5cbiAgLy8gdmFsdWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCd2YWx1ZScpIGFzIGFueTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YUF3c2NjSW90U2VjdXJpdHlQcm9maWxlQmVoYXZpb3JzQ3JpdGVyaWFUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RTZWN1cml0eVByb2ZpbGVCZWhhdmlvcnNDcml0ZXJpYSk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBjb21wYXJpc29uX29wZXJhdG9yOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbXBhcmlzb25PcGVyYXRvciksXG4gICAgY29uc2VjdXRpdmVfZGF0YXBvaW50c190b19hbGFybTogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0oc3RydWN0IS5jb25zZWN1dGl2ZURhdGFwb2ludHNUb0FsYXJtKSxcbiAgICBjb25zZWN1dGl2ZV9kYXRhcG9pbnRzX3RvX2NsZWFyOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybShzdHJ1Y3QhLmNvbnNlY3V0aXZlRGF0YXBvaW50c1RvQ2xlYXIpLFxuICAgIGR1cmF0aW9uX3NlY29uZHM6IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHN0cnVjdCEuZHVyYXRpb25TZWNvbmRzKSxcbiAgICBtbF9kZXRlY3Rpb25fY29uZmlnOiBkYXRhQXdzY2NJb3RTZWN1cml0eVByb2ZpbGVCZWhhdmlvcnNDcml0ZXJpYU1sRGV0ZWN0aW9uQ29uZmlnVG9UZXJyYWZvcm0oc3RydWN0IS5tbERldGVjdGlvbkNvbmZpZyksXG4gICAgc3RhdGlzdGljYWxfdGhyZXNob2xkOiBkYXRhQXdzY2NJb3RTZWN1cml0eVByb2ZpbGVCZWhhdmlvcnNDcml0ZXJpYVN0YXRpc3RpY2FsVGhyZXNob2xkVG9UZXJyYWZvcm0oc3RydWN0IS5zdGF0aXN0aWNhbFRocmVzaG9sZCksXG4gICAgdmFsdWU6IGRhdGFBd3NjY0lvdFNlY3VyaXR5UHJvZmlsZUJlaGF2aW9yc0NyaXRlcmlhVmFsdWVUb1RlcnJhZm9ybShzdHJ1Y3QhLnZhbHVlKSxcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0YUF3c2NjSW90U2VjdXJpdHlQcm9maWxlQmVoYXZpb3JzTWV0cmljRGltZW5zaW9uIGV4dGVuZHMgY2RrdGYuQ29tcGxleENvbXB1dGVkTGlzdCB7XG5cbiAgLy8gZGltZW5zaW9uX25hbWUgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBkaW1lbnNpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnZGltZW5zaW9uX25hbWUnKTtcbiAgfVxuXG4gIC8vIG9wZXJhdG9yIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgb3BlcmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdvcGVyYXRvcicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RTZWN1cml0eVByb2ZpbGVCZWhhdmlvcnNNZXRyaWNEaW1lbnNpb25Ub1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RTZWN1cml0eVByb2ZpbGVCZWhhdmlvcnNNZXRyaWNEaW1lbnNpb24pOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgZGltZW5zaW9uX25hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEuZGltZW5zaW9uTmFtZSksXG4gICAgb3BlcmF0b3I6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEub3BlcmF0b3IpLFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RTZWN1cml0eVByb2ZpbGVCZWhhdmlvcnMgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBjcml0ZXJpYSAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGNyaXRlcmlhKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ2NyaXRlcmlhJykgYXMgYW55O1xuICB9XG5cbiAgLy8gbWV0cmljIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWV0cmljKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnbWV0cmljJyk7XG4gIH1cblxuICAvLyBtZXRyaWNfZGltZW5zaW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbWV0cmljRGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb25Gb3JBdHRyaWJ1dGUoJ21ldHJpY19kaW1lbnNpb24nKSBhcyBhbnk7XG4gIH1cblxuICAvLyBuYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgfVxuXG4gIC8vIHN1cHByZXNzX2FsZXJ0cyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHN1cHByZXNzQWxlcnRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3N1cHByZXNzX2FsZXJ0cycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RTZWN1cml0eVByb2ZpbGVCZWhhdmlvcnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBEYXRhQXdzY2NJb3RTZWN1cml0eVByb2ZpbGVCZWhhdmlvcnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIHJldHVybiB7XG4gICAgY3JpdGVyaWE6IGRhdGFBd3NjY0lvdFNlY3VyaXR5UHJvZmlsZUJlaGF2aW9yc0NyaXRlcmlhVG9UZXJyYWZvcm0oc3RydWN0IS5jcml0ZXJpYSksXG4gICAgbWV0cmljOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLm1ldHJpYyksXG4gICAgbWV0cmljX2RpbWVuc2lvbjogZGF0YUF3c2NjSW90U2VjdXJpdHlQcm9maWxlQmVoYXZpb3JzTWV0cmljRGltZW5zaW9uVG9UZXJyYWZvcm0oc3RydWN0IS5tZXRyaWNEaW1lbnNpb24pLFxuICAgIG5hbWU6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEubmFtZSksXG4gICAgc3VwcHJlc3NfYWxlcnRzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0oc3RydWN0IS5zdXBwcmVzc0FsZXJ0cyksXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERhdGFBd3NjY0lvdFNlY3VyaXR5UHJvZmlsZVRhZ3MgZXh0ZW5kcyBjZGt0Zi5Db21wbGV4Q29tcHV0ZWRMaXN0IHtcblxuICAvLyBrZXkgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBrZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdrZXknKTtcbiAgfVxuXG4gIC8vIHZhbHVlIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCd2YWx1ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhQXdzY2NJb3RTZWN1cml0eVByb2ZpbGVUYWdzVG9UZXJyYWZvcm0oc3RydWN0PzogRGF0YUF3c2NjSW90U2VjdXJpdHlQcm9maWxlVGFncyk6IGFueSB7XG4gIGlmICghY2RrdGYuY2FuSW5zcGVjdChzdHJ1Y3QpKSB7IHJldHVybiBzdHJ1Y3Q7IH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHN0cnVjdCEua2V5KSxcbiAgICB2YWx1ZTogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS52YWx1ZSksXG4gIH1cbn1cblxuXG4vKipcbiogUmVwcmVzZW50cyBhIHtAbGluayBodHRwczovL3d3dy50ZXJyYWZvcm0uaW8vZG9jcy9wcm92aWRlcnMvYXdzY2MvZC9pb3Rfc2VjdXJpdHlfcHJvZmlsZS5odG1sIGF3c2NjX2lvdF9zZWN1cml0eV9wcm9maWxlfVxuKi9cbmV4cG9ydCBjbGFzcyBEYXRhQXdzY2NJb3RTZWN1cml0eVByb2ZpbGUgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1EYXRhU291cmNlIHtcblxuICAvLyA9PT09PT09PT09PT09PT09PVxuICAvLyBTVEFUSUMgUFJPUEVSVElFU1xuICAvLyA9PT09PT09PT09PT09PT09PVxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRmUmVzb3VyY2VUeXBlOiBzdHJpbmcgPSBcImF3c2NjX2lvdF9zZWN1cml0eV9wcm9maWxlXCI7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcge0BsaW5rIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3NjYy9kL2lvdF9zZWN1cml0eV9wcm9maWxlLmh0bWwgYXdzY2NfaW90X3NlY3VyaXR5X3Byb2ZpbGV9IERhdGEgU291cmNlXG4gICpcbiAgKiBAcGFyYW0gc2NvcGUgVGhlIHNjb3BlIGluIHdoaWNoIHRvIGRlZmluZSB0aGlzIGNvbnN0cnVjdFxuICAqIEBwYXJhbSBpZCBUaGUgc2NvcGVkIGNvbnN0cnVjdCBJRC4gTXVzdCBiZSB1bmlxdWUgYW1vbmdzdCBzaWJsaW5ncyBpbiB0aGUgc2FtZSBzY29wZVxuICAqIEBwYXJhbSBvcHRpb25zIERhdGFBd3NjY0lvdFNlY3VyaXR5UHJvZmlsZUNvbmZpZ1xuICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBEYXRhQXdzY2NJb3RTZWN1cml0eVByb2ZpbGVDb25maWcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c2NjX2lvdF9zZWN1cml0eV9wcm9maWxlJyxcbiAgICAgIHRlcnJhZm9ybUdlbmVyYXRvck1ldGFkYXRhOiB7XG4gICAgICAgIHByb3ZpZGVyTmFtZTogJ2F3c2NjJ1xuICAgICAgfSxcbiAgICAgIHByb3ZpZGVyOiBjb25maWcucHJvdmlkZXIsXG4gICAgICBkZXBlbmRzT246IGNvbmZpZy5kZXBlbmRzT24sXG4gICAgICBjb3VudDogY29uZmlnLmNvdW50LFxuICAgICAgbGlmZWN5Y2xlOiBjb25maWcubGlmZWN5Y2xlXG4gICAgfSk7XG4gICAgdGhpcy5faWQgPSBjb25maWcuaWQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09XG4gIC8vIEFUVFJJQlVURVNcbiAgLy8gPT09PT09PT09PVxuXG4gIC8vIGFkZGl0aW9uYWxfbWV0cmljc190b19yZXRhaW5fdjIgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhZGRpdGlvbmFsTWV0cmljc1RvUmV0YWluVjIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWRkaXRpb25hbF9tZXRyaWNzX3RvX3JldGFpbl92MicpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGFsZXJ0X3RhcmdldHMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBhbGVydFRhcmdldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnYWxlcnRfdGFyZ2V0cycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIGJlaGF2aW9ycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGJlaGF2aW9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdiZWhhdmlvcnMnKSBhcyBhbnk7XG4gIH1cblxuICAvLyBpZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogdHJ1ZVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pZFxuICB9XG5cbiAgLy8gc2VjdXJpdHlfcHJvZmlsZV9hcm4gLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IGZhbHNlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBzZWN1cml0eVByb2ZpbGVBcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nQXR0cmlidXRlKCdzZWN1cml0eV9wcm9maWxlX2FybicpO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfcHJvZmlsZV9kZXNjcmlwdGlvbiAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHNlY3VyaXR5UHJvZmlsZURlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnc2VjdXJpdHlfcHJvZmlsZV9kZXNjcmlwdGlvbicpO1xuICB9XG5cbiAgLy8gc2VjdXJpdHlfcHJvZmlsZV9uYW1lIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgc2VjdXJpdHlQcm9maWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ3NlY3VyaXR5X3Byb2ZpbGVfbmFtZScpO1xuICB9XG5cbiAgLy8gdGFncyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IHRhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgndGFncycpIGFzIGFueTtcbiAgfVxuXG4gIC8vIHRhcmdldF9hcm5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgdGFyZ2V0QXJucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCd0YXJnZXRfYXJucycpO1xuICB9XG5cbiAgLy8gPT09PT09PT09XG4gIC8vIFNZTlRIRVNJU1xuICAvLyA9PT09PT09PT1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZUF0dHJpYnV0ZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0odGhpcy5faWQpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==