// https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function route53ResolverFirewallRuleGroupFirewallRulesToTerraform(struct?: Route53ResolverFirewallRuleGroupFirewallRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    block_override_dns_type: cdktf.stringToTerraform(struct!.blockOverrideDnsType),
    block_override_domain: cdktf.stringToTerraform(struct!.blockOverrideDomain),
    block_override_ttl: cdktf.numberToTerraform(struct!.blockOverrideTtl),
    block_response: cdktf.stringToTerraform(struct!.blockResponse),
    firewall_domain_list_id: cdktf.stringToTerraform(struct!.firewallDomainListId),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}

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

export function route53ResolverFirewallRuleGroupTagsToTerraform(struct?: Route53ResolverFirewallRuleGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html awscc_route53resolver_firewall_rule_group}
*/
export class Route53ResolverFirewallRuleGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53resolver_firewall_rule_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group.html awscc_route53resolver_firewall_rule_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53ResolverFirewallRuleGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Route53ResolverFirewallRuleGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53resolver_firewall_rule_group',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._firewallRules = config.firewallRules;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // creator_request_id - computed: true, optional: false, required: false
  public get creatorRequestId() {
    return this.getStringAttribute('creator_request_id');
  }

  // firewall_rules - computed: false, optional: true, required: false
  private _firewallRules?: Route53ResolverFirewallRuleGroupFirewallRules[];
  public get firewallRules() {
    return this.interpolationForAttribute('firewall_rules') as any;
  }
  public set firewallRules(value: Route53ResolverFirewallRuleGroupFirewallRules[] ) {
    this._firewallRules = value;
  }
  public resetFirewallRules() {
    this._firewallRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRulesInput() {
    return this._firewallRules
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modification_time - computed: true, optional: false, required: false
  public get modificationTime() {
    return this.getStringAttribute('modification_time');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // rule_count - computed: true, optional: false, required: false
  public get ruleCount() {
    return this.getNumberAttribute('rule_count');
  }

  // share_status - computed: true, optional: false, required: false
  public get shareStatus() {
    return this.getStringAttribute('share_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Route53ResolverFirewallRuleGroupTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Route53ResolverFirewallRuleGroupTags[] ) {
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
      firewall_rules: cdktf.listMapper(route53ResolverFirewallRuleGroupFirewallRulesToTerraform)(this._firewallRules),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(route53ResolverFirewallRuleGroupTagsToTerraform)(this._tags),
    };
  }
}
