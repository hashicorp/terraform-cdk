import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNetworkfirewallFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall_policy.html#id DataAwsccNetworkfirewallFirewallPolicy#id}
    */
    readonly id: string;
}
export declare class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences extends cdktf.ComplexComputedList {
    get resourceArn(): string;
}
export declare function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences): any;
export declare class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions extends cdktf.ComplexComputedList {
    get value(): string;
}
export declare function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions): any;
export declare class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction extends cdktf.ComplexComputedList {
    get dimensions(): any;
}
export declare function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction): any;
export declare class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition extends cdktf.ComplexComputedList {
    get publishMetricAction(): any;
}
export declare function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition): any;
export declare class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions extends cdktf.ComplexComputedList {
    get actionDefinition(): any;
    get actionName(): string;
}
export declare function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions): any;
export declare class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences extends cdktf.ComplexComputedList {
    get priority(): number;
    get resourceArn(): string;
}
export declare function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences): any;
export declare class DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy extends cdktf.ComplexComputedList {
    get statefulRuleGroupReferences(): any;
    get statelessCustomActions(): any;
    get statelessDefaultActions(): string[];
    get statelessFragmentDefaultActions(): string[];
    get statelessRuleGroupReferences(): any;
}
export declare function dataAwsccNetworkfirewallFirewallPolicyFirewallPolicyToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyFirewallPolicy): any;
export declare class DataAwsccNetworkfirewallFirewallPolicyTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccNetworkfirewallFirewallPolicyTagsToTerraform(struct?: DataAwsccNetworkfirewallFirewallPolicyTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall_policy.html awscc_networkfirewall_firewall_policy}
*/
export declare class DataAwsccNetworkfirewallFirewallPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall_policy.html awscc_networkfirewall_firewall_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNetworkfirewallFirewallPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccNetworkfirewallFirewallPolicyConfig);
    get description(): string;
    get firewallPolicy(): any;
    get firewallPolicyArn(): string;
    get firewallPolicyId(): string;
    get firewallPolicyName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
