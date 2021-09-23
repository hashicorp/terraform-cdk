import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverFirewallRuleGroupAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * FirewallRuleGroupId
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}
    */
    readonly firewallRuleGroupId: string;
    /**
    * MutationProtectionStatus
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}
    */
    readonly mutationProtection?: string;
    /**
    * FirewallRuleGroupAssociationName
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html#name Route53ResolverFirewallRuleGroupAssociation#name}
    */
    readonly name?: string;
    /**
    * Priority
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html#priority Route53ResolverFirewallRuleGroupAssociation#priority}
    */
    readonly priority: number;
    /**
    * Tags
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html#tags Route53ResolverFirewallRuleGroupAssociation#tags}
    */
    readonly tags?: Route53ResolverFirewallRuleGroupAssociationTags[];
    /**
    * VpcId
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}
    */
    readonly vpcId: string;
}
export interface Route53ResolverFirewallRuleGroupAssociationTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html#key Route53ResolverFirewallRuleGroupAssociation#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html#value Route53ResolverFirewallRuleGroupAssociation#value}
    */
    readonly value: string;
}
export declare function route53ResolverFirewallRuleGroupAssociationTagsToTerraform(struct?: Route53ResolverFirewallRuleGroupAssociationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html awscc_route53resolver_firewall_rule_group_association}
*/
export declare class Route53ResolverFirewallRuleGroupAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html awscc_route53resolver_firewall_rule_group_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallRuleGroupAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Route53ResolverFirewallRuleGroupAssociationConfig);
    get arn(): string;
    get creationTime(): string;
    get creatorRequestId(): string;
    private _firewallRuleGroupId;
    get firewallRuleGroupId(): string;
    set firewallRuleGroupId(value: string);
    get firewallRuleGroupIdInput(): string;
    get id(): string;
    get managedOwnerName(): string;
    get modificationTime(): string;
    private _mutationProtection?;
    get mutationProtection(): string;
    set mutationProtection(value: string);
    resetMutationProtection(): void;
    get mutationProtectionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _priority;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number;
    get status(): string;
    get statusMessage(): string;
    private _tags?;
    get tags(): Route53ResolverFirewallRuleGroupAssociationTags[];
    set tags(value: Route53ResolverFirewallRuleGroupAssociationTags[]);
    resetTags(): void;
    get tagsInput(): Route53ResolverFirewallRuleGroupAssociationTags[] | undefined;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
