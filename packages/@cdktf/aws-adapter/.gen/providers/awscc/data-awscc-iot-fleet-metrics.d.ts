import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotFleetMetricsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iot_fleet_metrics.html awscc_iot_fleet_metrics}
*/
export declare class DataAwsccIotFleetMetrics extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iot_fleet_metrics.html awscc_iot_fleet_metrics} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotFleetMetricsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccIotFleetMetricsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
