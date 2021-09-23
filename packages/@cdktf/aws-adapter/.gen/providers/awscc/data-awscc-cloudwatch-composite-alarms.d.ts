import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudwatchCompositeAlarmsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudwatch_composite_alarms.html awscc_cloudwatch_composite_alarms}
*/
export declare class DataAwsccCloudwatchCompositeAlarms extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudwatch_composite_alarms.html awscc_cloudwatch_composite_alarms} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudwatchCompositeAlarmsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccCloudwatchCompositeAlarmsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
