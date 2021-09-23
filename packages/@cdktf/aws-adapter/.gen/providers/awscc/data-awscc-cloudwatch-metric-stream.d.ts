import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudwatchMetricStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudwatch_metric_stream.html#id DataAwsccCloudwatchMetricStream#id}
    */
    readonly id: string;
}
export declare class DataAwsccCloudwatchMetricStreamExcludeFilters extends cdktf.ComplexComputedList {
    get namespace(): string;
}
export declare function dataAwsccCloudwatchMetricStreamExcludeFiltersToTerraform(struct?: DataAwsccCloudwatchMetricStreamExcludeFilters): any;
export declare class DataAwsccCloudwatchMetricStreamIncludeFilters extends cdktf.ComplexComputedList {
    get namespace(): string;
}
export declare function dataAwsccCloudwatchMetricStreamIncludeFiltersToTerraform(struct?: DataAwsccCloudwatchMetricStreamIncludeFilters): any;
export declare class DataAwsccCloudwatchMetricStreamTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccCloudwatchMetricStreamTagsToTerraform(struct?: DataAwsccCloudwatchMetricStreamTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudwatch_metric_stream.html awscc_cloudwatch_metric_stream}
*/
export declare class DataAwsccCloudwatchMetricStream extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudwatch_metric_stream.html awscc_cloudwatch_metric_stream} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudwatchMetricStreamConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudwatchMetricStreamConfig);
    get arn(): string;
    get creationDate(): string;
    get excludeFilters(): any;
    get firehoseArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get includeFilters(): any;
    get lastUpdateDate(): string;
    get name(): string;
    get outputFormat(): string;
    get roleArn(): string;
    get state(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
