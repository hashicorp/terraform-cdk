// https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccNetworkfirewallFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall_policy.html#id DataAwsccNetworkfirewallFirewallPolicy#id}
  */
  readonly id: string;
}
export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences extends cdktf.ComplexComputedList {

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions extends cdktf.ComplexComputedList {

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction extends cdktf.ComplexComputedList {

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return this.interpolationForAttribute('dimensions') as any;
  }
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimensions: cdktf.listMapper(dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform)(struct!.dimensions),
  }
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition extends cdktf.ComplexComputedList {

  // publish_metric_action - computed: true, optional: false, required: false
  public get publishMetricAction() {
    return this.interpolationForAttribute('publish_metric_action') as any;
  }
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    publish_metric_action: dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToTerraform(struct!.publishMetricAction),
  }
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions extends cdktf.ComplexComputedList {

  // action_definition - computed: true, optional: false, required: false
  public get actionDefinition() {
    return this.interpolationForAttribute('action_definition') as any;
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_definition: dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionToTerraform(struct!.actionDefinition),
    action_name: cdktf.stringToTerraform(struct!.actionName),
  }
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences extends cdktf.ComplexComputedList {

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy extends cdktf.ComplexComputedList {

  // stateful_rule_group_references - computed: true, optional: false, required: false
  public get statefulRuleGroupReferences() {
    return this.interpolationForAttribute('stateful_rule_group_references') as any;
  }

  // stateless_custom_actions - computed: true, optional: false, required: false
  public get statelessCustomActions() {
    return this.interpolationForAttribute('stateless_custom_actions') as any;
  }

  // stateless_default_actions - computed: true, optional: false, required: false
  public get statelessDefaultActions() {
    return this.getListAttribute('stateless_default_actions');
  }

  // stateless_fragment_default_actions - computed: true, optional: false, required: false
  public get statelessFragmentDefaultActions() {
    return this.getListAttribute('stateless_fragment_default_actions');
  }

  // stateless_rule_group_references - computed: true, optional: false, required: false
  public get statelessRuleGroupReferences() {
    return this.interpolationForAttribute('stateless_rule_group_references') as any;
  }
}

export function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    stateful_rule_group_references: cdktf.listMapper(dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesToTerraform)(struct!.statefulRuleGroupReferences),
    stateless_custom_actions: cdktf.listMapper(dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsToTerraform)(struct!.statelessCustomActions),
    stateless_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.statelessDefaultActions),
    stateless_fragment_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.statelessFragmentDefaultActions),
    stateless_rule_group_references: cdktf.listMapper(dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesToTerraform)(struct!.statelessRuleGroupReferences),
  }
}

export class DataAwsccNetworkfirewallFirewallPolicyTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccNetworkfirewallFirewallPolicyTagsToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall_policy.html awscc_networkfirewall_firewall_policy}
*/
export class DataAwsccNetworkfirewallFirewallPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkfirewall_firewall_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall_policy.html awscc_networkfirewall_firewall_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNetworkfirewallFirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNetworkfirewallFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkfirewall_firewall_policy',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // firewall_policy - computed: true, optional: false, required: false
  public get firewallPolicy() {
    return this.interpolationForAttribute('firewall_policy') as any;
  }

  // firewall_policy_arn - computed: true, optional: false, required: false
  public get firewallPolicyArn() {
    return this.getStringAttribute('firewall_policy_arn');
  }

  // firewall_policy_id - computed: true, optional: false, required: false
  public get firewallPolicyId() {
    return this.getStringAttribute('firewall_policy_id');
  }

  // firewall_policy_name - computed: true, optional: false, required: false
  public get firewallPolicyName() {
    return this.getStringAttribute('firewall_policy_name');
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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
