import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchMetricStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Define which metrics will be not streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#exclude_filters CloudwatchMetricStream#exclude_filters}
    */
    readonly excludeFilters?: CloudwatchMetricStreamExcludeFilters[];
    /**
    * The ARN of the Kinesis Firehose where to stream the data.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#firehose_arn CloudwatchMetricStream#firehose_arn}
    */
    readonly firehoseArn: string;
    /**
    * Define which metrics will be streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#include_filters CloudwatchMetricStream#include_filters}
    */
    readonly includeFilters?: CloudwatchMetricStreamIncludeFilters[];
    /**
    * Name of the metric stream.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#name CloudwatchMetricStream#name}
    */
    readonly name?: string;
    /**
    * The output format of the data streamed to the Kinesis Firehose.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#output_format CloudwatchMetricStream#output_format}
    */
    readonly outputFormat: string;
    /**
    * The ARN of the role that provides access to the Kinesis Firehose.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#role_arn CloudwatchMetricStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * A set of tags to assign to the delivery stream.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#tags CloudwatchMetricStream#tags}
    */
    readonly tags?: CloudwatchMetricStreamTags[];
}
export interface CloudwatchMetricStreamExcludeFilters {
    /**
    * Only metrics with Namespace matching this value will be streamed.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#namespace CloudwatchMetricStream#namespace}
    */
    readonly namespace: string;
}
export declare function cloudwatchMetricStreamExcludeFiltersToTerraform(struct?: CloudwatchMetricStreamExcludeFilters): any;
export interface CloudwatchMetricStreamIncludeFilters {
    /**
    * Only metrics with Namespace matching this value will be streamed.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#namespace CloudwatchMetricStream#namespace}
    */
    readonly namespace: string;
}
export declare function cloudwatchMetricStreamIncludeFiltersToTerraform(struct?: CloudwatchMetricStreamIncludeFilters): any;
export interface CloudwatchMetricStreamTags {
    /**
    * A unique identifier for the tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#key CloudwatchMetricStream#key}
    */
    readonly key: string;
    /**
    * An optional string, which you can use to describe or define the tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html#value CloudwatchMetricStream#value}
    */
    readonly value?: string;
}
export declare function cloudwatchMetricStreamTagsToTerraform(struct?: CloudwatchMetricStreamTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html awscc_cloudwatch_metric_stream}
*/
export declare class CloudwatchMetricStream extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_metric_stream.html awscc_cloudwatch_metric_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchMetricStreamConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchMetricStreamConfig);
    get arn(): string;
    get creationDate(): string;
    private _excludeFilters?;
    get excludeFilters(): CloudwatchMetricStreamExcludeFilters[];
    set excludeFilters(value: CloudwatchMetricStreamExcludeFilters[]);
    resetExcludeFilters(): void;
    get excludeFiltersInput(): CloudwatchMetricStreamExcludeFilters[] | undefined;
    private _firehoseArn;
    get firehoseArn(): string;
    set firehoseArn(value: string);
    get firehoseArnInput(): string;
    get id(): string;
    private _includeFilters?;
    get includeFilters(): CloudwatchMetricStreamIncludeFilters[];
    set includeFilters(value: CloudwatchMetricStreamIncludeFilters[]);
    resetIncludeFilters(): void;
    get includeFiltersInput(): CloudwatchMetricStreamIncludeFilters[] | undefined;
    get lastUpdateDate(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _outputFormat;
    get outputFormat(): string;
    set outputFormat(value: string);
    get outputFormatInput(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    get state(): string;
    private _tags?;
    get tags(): CloudwatchMetricStreamTags[];
    set tags(value: CloudwatchMetricStreamTags[]);
    resetTags(): void;
    get tagsInput(): CloudwatchMetricStreamTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
