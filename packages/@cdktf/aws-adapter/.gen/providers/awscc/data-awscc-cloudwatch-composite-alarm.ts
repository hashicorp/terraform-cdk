// https://www.terraform.io/docs/providers/awscc/d/cloudwatch_composite_alarm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
export class DataAwsccCloudwatchCompositeAlarm extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudwatch_composite_alarm";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudwatch_composite_alarm.html awscc_cloudwatch_composite_alarm} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudwatchCompositeAlarmConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudwatchCompositeAlarmConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions_enabled - computed: true, optional: false, required: false
  public get actionsEnabled() {
    return this.getBooleanAttribute('actions_enabled');
  }

  // alarm_actions - computed: true, optional: false, required: false
  public get alarmActions() {
    return this.getListAttribute('alarm_actions');
  }

  // alarm_description - computed: true, optional: false, required: false
  public get alarmDescription() {
    return this.getStringAttribute('alarm_description');
  }

  // alarm_name - computed: true, optional: false, required: false
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }

  // alarm_rule - computed: true, optional: false, required: false
  public get alarmRule() {
    return this.getStringAttribute('alarm_rule');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // insufficient_data_actions - computed: true, optional: false, required: false
  public get insufficientDataActions() {
    return this.getListAttribute('insufficient_data_actions');
  }

  // ok_actions - computed: true, optional: false, required: false
  public get okActions() {
    return this.getListAttribute('ok_actions');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
