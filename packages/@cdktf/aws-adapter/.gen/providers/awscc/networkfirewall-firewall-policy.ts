// https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkfirewallFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#description NetworkfirewallFirewallPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#firewall_policy NetworkfirewallFirewallPolicy#firewall_policy}
  */
  readonly firewallPolicy: NetworkfirewallFirewallPolicyFirewallPolicy;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#firewall_policy_name NetworkfirewallFirewallPolicy#firewall_policy_name}
  */
  readonly firewallPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#tags NetworkfirewallFirewallPolicy#tags}
  */
  readonly tags?: NetworkfirewallFirewallPolicyTags[];
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences {
  /**
  * A resource ARN.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#resource_arn NetworkfirewallFirewallPolicy#resource_arn}
  */
  readonly resourceArn: string;
}

export function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#value NetworkfirewallFirewallPolicy#value}
  */
  readonly value: string;
}

export function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#dimensions NetworkfirewallFirewallPolicy#dimensions}
  */
  readonly dimensions: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions[];
}

export function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimensions: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform)(struct!.dimensions),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#publish_metric_action NetworkfirewallFirewallPolicy#publish_metric_action}
  */
  readonly publishMetricAction?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction;
}

export function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    publish_metric_action: networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToTerraform(struct!.publishMetricAction),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#action_definition NetworkfirewallFirewallPolicy#action_definition}
  */
  readonly actionDefinition: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#action_name NetworkfirewallFirewallPolicy#action_name}
  */
  readonly actionName: string;
}

export function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_definition: networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionToTerraform(struct!.actionDefinition),
    action_name: cdktf.stringToTerraform(struct!.actionName),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#priority NetworkfirewallFirewallPolicy#priority}
  */
  readonly priority: number;
  /**
  * A resource ARN.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#resource_arn NetworkfirewallFirewallPolicy#resource_arn}
  */
  readonly resourceArn: string;
}

export function networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
  }
}

export interface NetworkfirewallFirewallPolicyFirewallPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#stateful_rule_group_references NetworkfirewallFirewallPolicy#stateful_rule_group_references}
  */
  readonly statefulRuleGroupReferences?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#stateless_custom_actions NetworkfirewallFirewallPolicy#stateless_custom_actions}
  */
  readonly statelessCustomActions?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#stateless_default_actions NetworkfirewallFirewallPolicy#stateless_default_actions}
  */
  readonly statelessDefaultActions: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#stateless_fragment_default_actions NetworkfirewallFirewallPolicy#stateless_fragment_default_actions}
  */
  readonly statelessFragmentDefaultActions: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#stateless_rule_group_references NetworkfirewallFirewallPolicy#stateless_rule_group_references}
  */
  readonly statelessRuleGroupReferences?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences[];
}

export function networkfirewallFirewallPolicyFirewallPolicyToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    stateful_rule_group_references: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesToTerraform)(struct!.statefulRuleGroupReferences),
    stateless_custom_actions: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsToTerraform)(struct!.statelessCustomActions),
    stateless_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.statelessDefaultActions),
    stateless_fragment_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.statelessFragmentDefaultActions),
    stateless_rule_group_references: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesToTerraform)(struct!.statelessRuleGroupReferences),
  }
}

export interface NetworkfirewallFirewallPolicyTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#key NetworkfirewallFirewallPolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#value NetworkfirewallFirewallPolicy#value}
  */
  readonly value: string;
}

export function networkfirewallFirewallPolicyTagsToTerraform(struct?: NetworkfirewallFirewallPolicyTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html awscc_networkfirewall_firewall_policy}
*/
export class NetworkfirewallFirewallPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkfirewall_firewall_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html awscc_networkfirewall_firewall_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkfirewallFirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkfirewallFirewallPolicyConfig) {
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
    this._description = config.description;
    this._firewallPolicy = config.firewallPolicy;
    this._firewallPolicyName = config.firewallPolicyName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // firewall_policy - computed: false, optional: false, required: true
  private _firewallPolicy: NetworkfirewallFirewallPolicyFirewallPolicy;
  public get firewallPolicy() {
    return this.interpolationForAttribute('firewall_policy') as any;
  }
  public set firewallPolicy(value: NetworkfirewallFirewallPolicyFirewallPolicy) {
    this._firewallPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyInput() {
    return this._firewallPolicy
  }

  // firewall_policy_arn - computed: true, optional: false, required: false
  public get firewallPolicyArn() {
    return this.getStringAttribute('firewall_policy_arn');
  }

  // firewall_policy_id - computed: true, optional: false, required: false
  public get firewallPolicyId() {
    return this.getStringAttribute('firewall_policy_id');
  }

  // firewall_policy_name - computed: false, optional: false, required: true
  private _firewallPolicyName: string;
  public get firewallPolicyName() {
    return this.getStringAttribute('firewall_policy_name');
  }
  public set firewallPolicyName(value: string) {
    this._firewallPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyNameInput() {
    return this._firewallPolicyName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: NetworkfirewallFirewallPolicyTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: NetworkfirewallFirewallPolicyTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      firewall_policy: networkfirewallFirewallPolicyFirewallPolicyToTerraform(this._firewallPolicy),
      firewall_policy_name: cdktf.stringToTerraform(this._firewallPolicyName),
      tags: cdktf.listMapper(networkfirewallFirewallPolicyTagsToTerraform)(this._tags),
    };
  }
}
