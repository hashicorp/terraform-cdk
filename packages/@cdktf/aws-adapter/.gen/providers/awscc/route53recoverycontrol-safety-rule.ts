// https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53RecoverycontrolSafetyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html#assertion_rule Route53RecoverycontrolSafetyRule#assertion_rule}
  */
  readonly assertionRule?: Route53RecoverycontrolSafetyRuleAssertionRule;
  /**
  * The Amazon Resource Name (ARN) of the control panel.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html#control_panel_arn Route53RecoverycontrolSafetyRule#control_panel_arn}
  */
  readonly controlPanelArn?: string;
  /**
  * A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html#gating_rule Route53RecoverycontrolSafetyRule#gating_rule}
  */
  readonly gatingRule?: Route53RecoverycontrolSafetyRuleGatingRule;
  /**
  * The name for the safety rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html#name Route53RecoverycontrolSafetyRule#name}
  */
  readonly name?: string;
  /**
  * The rule configuration for an assertion rule or gating rule. This is the criteria that you set for specific assertion controls (routing controls) or gating controls. This configuration specifies how many controls must be enabled after a transaction completes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html#rule_config Route53RecoverycontrolSafetyRule#rule_config}
  */
  readonly ruleConfig?: Route53RecoverycontrolSafetyRuleRuleConfig;
}
export interface Route53RecoverycontrolSafetyRuleAssertionRule {
  /**
  * The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. For example, you might include three routing controls, one for each of three AWS Regions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html#asserted_controls Route53RecoverycontrolSafetyRule#asserted_controls}
  */
  readonly assertedControls: string[];
  /**
  * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html#wait_period_ms Route53RecoverycontrolSafetyRule#wait_period_ms}
  */
  readonly waitPeriodMs: number;
}

export function route53RecoverycontrolSafetyRuleAssertionRuleToTerraform(struct?: Route53RecoverycontrolSafetyRuleAssertionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    asserted_controls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.assertedControls),
    wait_period_ms: cdktf.numberToTerraform(struct!.waitPeriodMs),
  }
}

export interface Route53RecoverycontrolSafetyRuleGatingRule {
  /**
  * The gating controls for the gating rule. That is, routing controls that are evaluated by the rule configuration that you specify.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html#gating_controls Route53RecoverycontrolSafetyRule#gating_controls}
  */
  readonly gatingControls: string[];
  /**
  * Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. For example, say you have three gating controls, one for each of three AWS Regions. Now you specify AtLeast 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true. 
In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html#target_controls Route53RecoverycontrolSafetyRule#target_controls}
  */
  readonly targetControls: string[];
  /**
  * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html#wait_period_ms Route53RecoverycontrolSafetyRule#wait_period_ms}
  */
  readonly waitPeriodMs: number;
}

export function route53RecoverycontrolSafetyRuleGatingRuleToTerraform(struct?: Route53RecoverycontrolSafetyRuleGatingRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gating_controls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.gatingControls),
    target_controls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetControls),
    wait_period_ms: cdktf.numberToTerraform(struct!.waitPeriodMs),
  }
}

export interface Route53RecoverycontrolSafetyRuleRuleConfig {
  /**
  * Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html#inverted Route53RecoverycontrolSafetyRule#inverted}
  */
  readonly inverted: boolean | cdktf.IResolvable;
  /**
  * The value of N, when you specify an ATLEAST rule type. That is, Threshold is the number of controls that must be set when you specify an ATLEAST type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html#threshold Route53RecoverycontrolSafetyRule#threshold}
  */
  readonly threshold: number;
  /**
  * A rule can be one of the following: ATLEAST, AND, or OR.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html#type Route53RecoverycontrolSafetyRule#type}
  */
  readonly type: string;
}

export function route53RecoverycontrolSafetyRuleRuleConfigToTerraform(struct?: Route53RecoverycontrolSafetyRuleRuleConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    inverted: cdktf.booleanToTerraform(struct!.inverted),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html awscc_route53recoverycontrol_safety_rule}
*/
export class Route53RecoverycontrolSafetyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53recoverycontrol_safety_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53recoverycontrol_safety_rule.html awscc_route53recoverycontrol_safety_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecoverycontrolSafetyRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Route53RecoverycontrolSafetyRuleConfig = {}) {
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
    this._assertionRule = config.assertionRule;
    this._controlPanelArn = config.controlPanelArn;
    this._gatingRule = config.gatingRule;
    this._name = config.name;
    this._ruleConfig = config.ruleConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assertion_rule - computed: false, optional: true, required: false
  private _assertionRule?: Route53RecoverycontrolSafetyRuleAssertionRule;
  public get assertionRule() {
    return this.interpolationForAttribute('assertion_rule') as any;
  }
  public set assertionRule(value: Route53RecoverycontrolSafetyRuleAssertionRule ) {
    this._assertionRule = value;
  }
  public resetAssertionRule() {
    this._assertionRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionRuleInput() {
    return this._assertionRule
  }

  // control_panel_arn - computed: true, optional: true, required: false
  private _controlPanelArn?: string;
  public get controlPanelArn() {
    return this.getStringAttribute('control_panel_arn');
  }
  public set controlPanelArn(value: string) {
    this._controlPanelArn = value;
  }
  public resetControlPanelArn() {
    this._controlPanelArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPanelArnInput() {
    return this._controlPanelArn
  }

  // gating_rule - computed: false, optional: true, required: false
  private _gatingRule?: Route53RecoverycontrolSafetyRuleGatingRule;
  public get gatingRule() {
    return this.interpolationForAttribute('gating_rule') as any;
  }
  public set gatingRule(value: Route53RecoverycontrolSafetyRuleGatingRule ) {
    this._gatingRule = value;
  }
  public resetGatingRule() {
    this._gatingRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatingRuleInput() {
    return this._gatingRule
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // rule_config - computed: true, optional: true, required: false
  private _ruleConfig?: Route53RecoverycontrolSafetyRuleRuleConfig;
  public get ruleConfig() {
    return this.interpolationForAttribute('rule_config') as any;
  }
  public set ruleConfig(value: Route53RecoverycontrolSafetyRuleRuleConfig) {
    this._ruleConfig = value;
  }
  public resetRuleConfig() {
    this._ruleConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConfigInput() {
    return this._ruleConfig
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
      assertion_rule: route53RecoverycontrolSafetyRuleAssertionRuleToTerraform(this._assertionRule),
      control_panel_arn: cdktf.stringToTerraform(this._controlPanelArn),
      gating_rule: route53RecoverycontrolSafetyRuleGatingRuleToTerraform(this._gatingRule),
      name: cdktf.stringToTerraform(this._name),
      rule_config: route53RecoverycontrolSafetyRuleRuleConfigToTerraform(this._ruleConfig),
    };
  }
}
