import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences): any;
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#value NetworkfirewallFirewallPolicy#value}
    */
    readonly value: string;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions): any;
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#dimensions NetworkfirewallFirewallPolicy#dimensions}
    */
    readonly dimensions: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions[];
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction): any;
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html#publish_metric_action NetworkfirewallFirewallPolicy#publish_metric_action}
    */
    readonly publishMetricAction?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition): any;
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
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions): any;
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
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences): any;
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
export declare function networkfirewallFirewallPolicyFirewallPolicyToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicy): any;
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
export declare function networkfirewallFirewallPolicyTagsToTerraform(struct?: NetworkfirewallFirewallPolicyTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html awscc_networkfirewall_firewall_policy}
*/
export declare class NetworkfirewallFirewallPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall_policy.html awscc_networkfirewall_firewall_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallFirewallPolicyConfig
    */
    constructor(scope: Construct, id: string, config: NetworkfirewallFirewallPolicyConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _firewallPolicy;
    get firewallPolicy(): NetworkfirewallFirewallPolicyFirewallPolicy;
    set firewallPolicy(value: NetworkfirewallFirewallPolicyFirewallPolicy);
    get firewallPolicyInput(): NetworkfirewallFirewallPolicyFirewallPolicy;
    get firewallPolicyArn(): string;
    get firewallPolicyId(): string;
    private _firewallPolicyName;
    get firewallPolicyName(): string;
    set firewallPolicyName(value: string);
    get firewallPolicyNameInput(): string;
    get id(): string;
    private _tags?;
    get tags(): NetworkfirewallFirewallPolicyTags[];
    set tags(value: NetworkfirewallFirewallPolicyTags[]);
    resetTags(): void;
    get tagsInput(): NetworkfirewallFirewallPolicyTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
