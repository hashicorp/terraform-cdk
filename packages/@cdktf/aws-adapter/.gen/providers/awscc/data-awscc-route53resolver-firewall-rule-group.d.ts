import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccRoute53ResolverFirewallRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_firewall_rule_group.html#id DataAwsccRoute53ResolverFirewallRuleGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccRoute53ResolverFirewallRuleGroupFirewallRules extends cdktf.ComplexComputedList {
    get action(): string;
    get blockOverrideDnsType(): string;
    get blockOverrideDomain(): string;
    get blockOverrideTtl(): number;
    get blockResponse(): string;
    get firewallDomainListId(): string;
    get priority(): number;
}
export declare function dataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesToTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRules): any;
export declare class DataAwsccRoute53ResolverFirewallRuleGroupTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccRoute53ResolverFirewallRuleGroupTagsToTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_firewall_rule_group.html awscc_route53resolver_firewall_rule_group}
*/
export declare class DataAwsccRoute53ResolverFirewallRuleGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_firewall_rule_group.html awscc_route53resolver_firewall_rule_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccRoute53ResolverFirewallRuleGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccRoute53ResolverFirewallRuleGroupConfig);
    get arn(): string;
    get creationTime(): string;
    get creatorRequestId(): string;
    get firewallRules(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get modificationTime(): string;
    get name(): string;
    get ownerId(): string;
    get ruleCount(): number;
    get shareStatus(): string;
    get status(): string;
    get statusMessage(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
