import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudwatchCompositeAlarmConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudwatch_composite_alarm.html#id DataAwsccCloudwatchCompositeAlarm#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudwatch_composite_alarm.html awscc_cloudwatch_composite_alarm}
*/
export declare class DataAwsccCloudwatchCompositeAlarm extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudwatch_composite_alarm.html awscc_cloudwatch_composite_alarm} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudwatchCompositeAlarmConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudwatchCompositeAlarmConfig);
    get actionsEnabled(): cdktf.IResolvable;
    get alarmActions(): string[];
    get alarmDescription(): string;
    get alarmName(): string;
    get alarmRule(): string;
    get arn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get insufficientDataActions(): string[];
    get okActions(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
