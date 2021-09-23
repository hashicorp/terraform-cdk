// https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_safety_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRoute53RecoverycontrolSafetyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_safety_rule.html#id DataAwsccRoute53RecoverycontrolSafetyRule#id}
  */
  readonly id: string;
}
export class DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule extends cdktf.ComplexComputedList {

  // asserted_controls - computed: true, optional: false, required: false
  public get assertedControls() {
    return this.getListAttribute('asserted_controls');
  }

  // wait_period_ms - computed: true, optional: false, required: false
  public get waitPeriodMs() {
    return this.getNumberAttribute('wait_period_ms');
  }
}

export function dataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleToTerraform(struct?: DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asserted_controls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.assertedControls),
    wait_period_ms: cdktf.numberToTerraform(struct!.waitPeriodMs),
  }
}

export class DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule extends cdktf.ComplexComputedList {

  // gating_controls - computed: true, optional: false, required: false
  public get gatingControls() {
    return this.getListAttribute('gating_controls');
  }

  // target_controls - computed: true, optional: false, required: false
  public get targetControls() {
    return this.getListAttribute('target_controls');
  }

  // wait_period_ms - computed: true, optional: false, required: false
  public get waitPeriodMs() {
    return this.getNumberAttribute('wait_period_ms');
  }
}

export function dataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleToTerraform(struct?: DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gating_controls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.gatingControls),
    target_controls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetControls),
    wait_period_ms: cdktf.numberToTerraform(struct!.waitPeriodMs),
  }
}

export class DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig extends cdktf.ComplexComputedList {

  // inverted - computed: true, optional: false, required: false
  public get inverted() {
    return this.getBooleanAttribute('inverted');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigToTerraform(struct?: DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    inverted: cdktf.booleanToTerraform(struct!.inverted),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_safety_rule.html awscc_route53recoverycontrol_safety_rule}
*/
export class DataAwsccRoute53RecoverycontrolSafetyRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53recoverycontrol_safety_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53recoverycontrol_safety_rule.html awscc_route53recoverycontrol_safety_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53RecoverycontrolSafetyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53RecoverycontrolSafetyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53recoverycontrol_safety_rule',
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

  // assertion_rule - computed: true, optional: false, required: false
  public get assertionRule() {
    return this.interpolationForAttribute('assertion_rule') as any;
  }

  // control_panel_arn - computed: true, optional: false, required: false
  public get controlPanelArn() {
    return this.getStringAttribute('control_panel_arn');
  }

  // gating_rule - computed: true, optional: false, required: false
  public get gatingRule() {
    return this.interpolationForAttribute('gating_rule') as any;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rule_config - computed: true, optional: false, required: false
  public get ruleConfig() {
    return this.interpolationForAttribute('rule_config') as any;
  }

  // safety_rule_arn - computed: true, optional: false, required: false
  public get safetyRuleArn() {
    return this.getStringAttribute('safety_rule_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
