// https://www.terraform.io/docs/providers/awscc/r/cloudwatch_composite_alarm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
export class CloudwatchCompositeAlarm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudwatch_composite_alarm";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudwatch_composite_alarm.html awscc_cloudwatch_composite_alarm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchCompositeAlarmConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchCompositeAlarmConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudwatch_composite_alarm',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._actionsEnabled = config.actionsEnabled;
    this._alarmActions = config.alarmActions;
    this._alarmDescription = config.alarmDescription;
    this._alarmName = config.alarmName;
    this._alarmRule = config.alarmRule;
    this._insufficientDataActions = config.insufficientDataActions;
    this._okActions = config.okActions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions_enabled - computed: false, optional: true, required: false
  private _actionsEnabled?: boolean | cdktf.IResolvable;
  public get actionsEnabled() {
    return this.getBooleanAttribute('actions_enabled');
  }
  public set actionsEnabled(value: boolean | cdktf.IResolvable ) {
    this._actionsEnabled = value;
  }
  public resetActionsEnabled() {
    this._actionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsEnabledInput() {
    return this._actionsEnabled
  }

  // alarm_actions - computed: false, optional: true, required: false
  private _alarmActions?: string[];
  public get alarmActions() {
    return this.getListAttribute('alarm_actions');
  }
  public set alarmActions(value: string[] ) {
    this._alarmActions = value;
  }
  public resetAlarmActions() {
    this._alarmActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmActionsInput() {
    return this._alarmActions
  }

  // alarm_description - computed: false, optional: true, required: false
  private _alarmDescription?: string;
  public get alarmDescription() {
    return this.getStringAttribute('alarm_description');
  }
  public set alarmDescription(value: string ) {
    this._alarmDescription = value;
  }
  public resetAlarmDescription() {
    this._alarmDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmDescriptionInput() {
    return this._alarmDescription
  }

  // alarm_name - computed: false, optional: false, required: true
  private _alarmName: string;
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName
  }

  // alarm_rule - computed: false, optional: false, required: true
  private _alarmRule: string;
  public get alarmRule() {
    return this.getStringAttribute('alarm_rule');
  }
  public set alarmRule(value: string) {
    this._alarmRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRuleInput() {
    return this._alarmRule
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insufficient_data_actions - computed: false, optional: true, required: false
  private _insufficientDataActions?: string[];
  public get insufficientDataActions() {
    return this.getListAttribute('insufficient_data_actions');
  }
  public set insufficientDataActions(value: string[] ) {
    this._insufficientDataActions = value;
  }
  public resetInsufficientDataActions() {
    this._insufficientDataActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insufficientDataActionsInput() {
    return this._insufficientDataActions
  }

  // ok_actions - computed: false, optional: true, required: false
  private _okActions?: string[];
  public get okActions() {
    return this.getListAttribute('ok_actions');
  }
  public set okActions(value: string[] ) {
    this._okActions = value;
  }
  public resetOkActions() {
    this._okActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okActionsInput() {
    return this._okActions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions_enabled: cdktf.booleanToTerraform(this._actionsEnabled),
      alarm_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._alarmActions),
      alarm_description: cdktf.stringToTerraform(this._alarmDescription),
      alarm_name: cdktf.stringToTerraform(this._alarmName),
      alarm_rule: cdktf.stringToTerraform(this._alarmRule),
      insufficient_data_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._insufficientDataActions),
      ok_actions: cdktf.listMapper(cdktf.stringToTerraform)(this._okActions),
    };
  }
}
