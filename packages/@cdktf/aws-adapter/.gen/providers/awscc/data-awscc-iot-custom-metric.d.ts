import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotCustomMetricConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iot_custom_metric.html#id DataAwsccIotCustomMetric#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotCustomMetricTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotCustomMetricTagsToTerraform(struct?: DataAwsccIotCustomMetricTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_custom_metric.html awscc_iot_custom_metric}
*/
export declare class DataAwsccIotCustomMetric extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_custom_metric.html awscc_iot_custom_metric} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotCustomMetricConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotCustomMetricConfig);
    get displayName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get metricArn(): string;
    get metricName(): string;
    get metricType(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
