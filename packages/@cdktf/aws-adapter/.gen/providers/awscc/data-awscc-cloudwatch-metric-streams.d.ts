import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudwatchMetricStreamsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudwatch_metric_streams.html awscc_cloudwatch_metric_streams}
*/
export declare class DataAwsccCloudwatchMetricStreams extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudwatch_metric_streams.html awscc_cloudwatch_metric_streams} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudwatchMetricStreamsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccCloudwatchMetricStreamsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
