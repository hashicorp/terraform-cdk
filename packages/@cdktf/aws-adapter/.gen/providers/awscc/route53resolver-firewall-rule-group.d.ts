import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverFirewallRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * FirewallRules
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html#firewall_rules Route53ResolverFirewallRuleGroup#firewall_rules}
    */
    readonly firewallRules?: Route53ResolverFirewallRuleGroupFirewallRules[];
    /**
    * FirewallRuleGroupName
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html#name Route53ResolverFirewallRuleGroup#name}
    */
    readonly name?: string;
    /**
    * Tags
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html#tags Route53ResolverFirewallRuleGroup#tags}
    */
    readonly tags?: Route53ResolverFirewallRuleGroupTags[];
}
export interface Route53ResolverFirewallRuleGroupFirewallRules {
    /**
    * Rule Action
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html#action Route53ResolverFirewallRuleGroup#action}
    */
    readonly action: string;
    /**
    * BlockOverrideDnsType
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html#block_override_dns_type Route53ResolverFirewallRuleGroup#block_override_dns_type}
    */
    readonly blockOverrideDnsType?: string;
    /**
    * BlockOverrideDomain
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html#block_override_domain Route53ResolverFirewallRuleGroup#block_override_domain}
    */
    readonly blockOverrideDomain?: string;
    /**
    * BlockOverrideTtl
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html#block_override_ttl Route53ResolverFirewallRuleGroup#block_override_ttl}
    */
    readonly blockOverrideTtl?: number;
    /**
    * BlockResponse
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html#block_response Route53ResolverFirewallRuleGroup#block_response}
    */
    readonly blockResponse?: string;
    /**
    * ResourceId
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html#firewall_domain_list_id Route53ResolverFirewallRuleGroup#firewall_domain_list_id}
    */
    readonly firewallDomainListId: string;
    /**
    * Rule Priority
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html#priority Route53ResolverFirewallRuleGroup#priority}
    */
    readonly priority: number;
}
export declare function route53ResolverFirewallRuleGroupFirewallRulesToTerraform(struct?: Route53ResolverFirewallRuleGroupFirewallRules): any;
export interface Route53ResolverFirewallRuleGroupTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html#key Route53ResolverFirewallRuleGroup#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html#value Route53ResolverFirewallRuleGroup#value}
    */
    readonly value: string;
}
export declare function route53ResolverFirewallRuleGroupTagsToTerraform(struct?: Route53ResolverFirewallRuleGroupTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html awscc_route53resolver_firewall_rule_group}
*/
export declare class Route53ResolverFirewallRuleGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html awscc_route53resolver_firewall_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallRuleGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Route53ResolverFirewallRuleGroupConfig);
    get arn(): string;
    get creationTime(): string;
    get creatorRequestId(): string;
    private _firewallRules?;
    get firewallRules(): Route53ResolverFirewallRuleGroupFirewallRules[];
    set firewallRules(value: Route53ResolverFirewallRuleGroupFirewallRules[]);
    resetFirewallRules(): void;
    get firewallRulesInput(): Route53ResolverFirewallRuleGroupFirewallRules[] | undefined;
    get id(): string;
    get modificationTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get ownerId(): string;
    get ruleCount(): number;
    get shareStatus(): string;
    get status(): string;
    get statusMessage(): string;
    private _tags?;
    get tags(): Route53ResolverFirewallRuleGroupTags[];
    set tags(value: Route53ResolverFirewallRuleGroupTags[]);
    resetTags(): void;
    get tagsInput(): Route53ResolverFirewallRuleGroupTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
