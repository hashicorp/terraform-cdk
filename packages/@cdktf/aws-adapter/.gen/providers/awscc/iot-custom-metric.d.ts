import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotCustomMetricConfig extends cdktf.TerraformMetaArguments {
    /**
    * Field represents a friendly name in the console for the custom metric; it doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated once defined.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html#display_name IotCustomMetric#display_name}
    */
    readonly displayName?: string;
    /**
    * The name of the custom metric. This will be used in the metric report submitted from the device/thing. Shouldn't begin with aws: . Cannot be updated once defined.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html#metric_name IotCustomMetric#metric_name}
    */
    readonly metricName?: string;
    /**
    * The type of the custom metric. Types include string-list, ip-address-list, number-list, and number.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html#metric_type IotCustomMetric#metric_type}
    */
    readonly metricType: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html#tags IotCustomMetric#tags}
    */
    readonly tags?: IotCustomMetricTags[];
}
export interface IotCustomMetricTags {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html#key IotCustomMetric#key}
    */
    readonly key: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html#value IotCustomMetric#value}
    */
    readonly value: string;
}
export declare function iotCustomMetricTagsToTerraform(struct?: IotCustomMetricTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html awscc_iot_custom_metric}
*/
export declare class IotCustomMetric extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iot_custom_metric.html awscc_iot_custom_metric} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotCustomMetricConfig
    */
    constructor(scope: Construct, id: string, config: IotCustomMetricConfig);
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string | undefined;
    get id(): string;
    get metricArn(): string;
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    resetMetricName(): void;
    get metricNameInput(): string | undefined;
    private _metricType;
    get metricType(): string;
    set metricType(value: string);
    get metricTypeInput(): string;
    private _tags?;
    get tags(): IotCustomMetricTags[];
    set tags(value: IotCustomMetricTags[]);
    resetTags(): void;
    get tagsInput(): IotCustomMetricTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
