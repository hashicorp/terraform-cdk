import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchCompositeAlarmConfig extends cdktf.TerraformMetaArguments {
    /**
    * Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_composite_alarm.html#actions_enabled CloudwatchCompositeAlarm#actions_enabled}
    */
    readonly actionsEnabled?: boolean | cdktf.IResolvable;
    /**
    * The list of actions to execute when this alarm transitions into an ALARM state from any other state. Specify each action as an Amazon Resource Name (ARN).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_composite_alarm.html#alarm_actions CloudwatchCompositeAlarm#alarm_actions}
    */
    readonly alarmActions?: string[];
    /**
    * The description of the alarm
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_composite_alarm.html#alarm_description CloudwatchCompositeAlarm#alarm_description}
    */
    readonly alarmDescription?: string;
    /**
    * The name of the Composite Alarm
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_composite_alarm.html#alarm_name CloudwatchCompositeAlarm#alarm_name}
    */
    readonly alarmName: string;
    /**
    * Expression which aggregates the state of other Alarms (Metric or Composite Alarms)
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_composite_alarm.html#alarm_rule CloudwatchCompositeAlarm#alarm_rule}
    */
    readonly alarmRule: string;
    /**
    * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_composite_alarm.html#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}
    */
    readonly insufficientDataActions?: string[];
    /**
    * The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_composite_alarm.html#ok_actions CloudwatchCompositeAlarm#ok_actions}
    */
    readonly okActions?: string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_composite_alarm.html awscc_cloudwatch_composite_alarm}
*/
export declare class CloudwatchCompositeAlarm extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_composite_alarm.html awscc_cloudwatch_composite_alarm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchCompositeAlarmConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchCompositeAlarmConfig);
    private _actionsEnabled?;
    get actionsEnabled(): boolean | cdktf.IResolvable;
    set actionsEnabled(value: boolean | cdktf.IResolvable);
    resetActionsEnabled(): void;
    get actionsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _alarmActions?;
    get alarmActions(): string[];
    set alarmActions(value: string[]);
    resetAlarmActions(): void;
    get alarmActionsInput(): string[] | undefined;
    private _alarmDescription?;
    get alarmDescription(): string;
    set alarmDescription(value: string);
    resetAlarmDescription(): void;
    get alarmDescriptionInput(): string | undefined;
    private _alarmName;
    get alarmName(): string;
    set alarmName(value: string);
    get alarmNameInput(): string;
    private _alarmRule;
    get alarmRule(): string;
    set alarmRule(value: string);
    get alarmRuleInput(): string;
    get arn(): string;
    get id(): string;
    private _insufficientDataActions?;
    get insufficientDataActions(): string[];
    set insufficientDataActions(value: string[]);
    resetInsufficientDataActions(): void;
    get insufficientDataActionsInput(): string[] | undefined;
    private _okActions?;
    get okActions(): string[];
    set okActions(value: string[]);
    resetOkActions(): void;
    get okActionsInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
