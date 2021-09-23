import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotSecurityProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_security_profile.html#id DataAwsccIotSecurityProfile#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension extends cdktf.ComplexComputedList {
    get dimensionName(): string;
    get operator(): string;
}
export declare function dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionToTerraform(struct?: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension): any;
export declare class DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2 extends cdktf.ComplexComputedList {
    get metric(): string;
    get metricDimension(): any;
}
export declare function dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2ToTerraform(struct?: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2): any;
export declare class DataAwsccIotSecurityProfileAlertTargets extends cdktf.ComplexComputedList {
    get alertTargetArn(): string;
    get roleArn(): string;
}
export declare function dataAwsccIotSecurityProfileAlertTargetsToTerraform(struct?: DataAwsccIotSecurityProfileAlertTargets): any;
export declare class DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig extends cdktf.ComplexComputedList {
    get confidenceLevel(): string;
}
export declare function dataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigToTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig): any;
export declare class DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold extends cdktf.ComplexComputedList {
    get statistic(): string;
}
export declare function dataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdToTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold): any;
export declare class DataAwsccIotSecurityProfileBehaviorsCriteriaValue extends cdktf.ComplexComputedList {
    get cidrs(): string[];
    get count(): string;
    get number(): number;
    get numbers(): any;
    get ports(): any;
    get strings(): string[];
}
export declare function dataAwsccIotSecurityProfileBehaviorsCriteriaValueToTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteriaValue): any;
export declare class DataAwsccIotSecurityProfileBehaviorsCriteria extends cdktf.ComplexComputedList {
    get comparisonOperator(): string;
    get consecutiveDatapointsToAlarm(): number;
    get consecutiveDatapointsToClear(): number;
    get durationSeconds(): number;
    get mlDetectionConfig(): any;
    get statisticalThreshold(): any;
    get value(): any;
}
export declare function dataAwsccIotSecurityProfileBehaviorsCriteriaToTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsCriteria): any;
export declare class DataAwsccIotSecurityProfileBehaviorsMetricDimension extends cdktf.ComplexComputedList {
    get dimensionName(): string;
    get operator(): string;
}
export declare function dataAwsccIotSecurityProfileBehaviorsMetricDimensionToTerraform(struct?: DataAwsccIotSecurityProfileBehaviorsMetricDimension): any;
export declare class DataAwsccIotSecurityProfileBehaviors extends cdktf.ComplexComputedList {
    get criteria(): any;
    get metric(): string;
    get metricDimension(): any;
    get name(): string;
    get suppressAlerts(): any;
}
export declare function dataAwsccIotSecurityProfileBehaviorsToTerraform(struct?: DataAwsccIotSecurityProfileBehaviors): any;
export declare class DataAwsccIotSecurityProfileTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotSecurityProfileTagsToTerraform(struct?: DataAwsccIotSecurityProfileTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_security_profile.html awscc_iot_security_profile}
*/
export declare class DataAwsccIotSecurityProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_security_profile.html awscc_iot_security_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotSecurityProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotSecurityProfileConfig);
    get additionalMetricsToRetainV2(): any;
    get alertTargets(): any;
    get behaviors(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get securityProfileArn(): string;
    get securityProfileDescription(): string;
    get securityProfileName(): string;
    get tags(): any;
    get targetArns(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
