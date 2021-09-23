import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotCustomMetricsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_custom_metrics.html awscc_iot_custom_metrics}
*/
export declare class DataAwsccIotCustomMetrics extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_custom_metrics.html awscc_iot_custom_metrics} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotCustomMetricsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIotCustomMetricsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
