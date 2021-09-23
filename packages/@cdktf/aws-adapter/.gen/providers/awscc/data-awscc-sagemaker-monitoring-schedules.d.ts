import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerMonitoringSchedulesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_monitoring_schedules.html awscc_sagemaker_monitoring_schedules}
*/
export declare class DataAwsccSagemakerMonitoringSchedules extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_monitoring_schedules.html awscc_sagemaker_monitoring_schedules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerMonitoringSchedulesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccSagemakerMonitoringSchedulesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
