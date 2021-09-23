// https://www.terraform.io/docs/providers/awscc/d/route53resolver_firewall_rule_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccRoute53ResolverFirewallRuleGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_firewall_rule_group.html#id DataAwsccRoute53ResolverFirewallRuleGroup#id}
  */
  readonly id: string;
}
export class DataAwsccRoute53ResolverFirewallRuleGroupFirewallRules extends cdktf.ComplexComputedList {

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // block_override_dns_type - computed: true, optional: false, required: false
  public get blockOverrideDnsType() {
    return this.getStringAttribute('block_override_dns_type');
  }

  // block_override_domain - computed: true, optional: false, required: false
  public get blockOverrideDomain() {
    return this.getStringAttribute('block_override_domain');
  }

  // block_override_ttl - computed: true, optional: false, required: false
  public get blockOverrideTtl() {
    return this.getNumberAttribute('block_override_ttl');
  }

  // block_response - computed: true, optional: false, required: false
  public get blockResponse() {
    return this.getStringAttribute('block_response');
  }

  // firewall_domain_list_id - computed: true, optional: false, required: false
  public get firewallDomainListId() {
    return this.getStringAttribute('firewall_domain_list_id');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export function dataAwsccRoute53ResolverFirewallRuleGroupFirewallRulesToTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupFirewallRules): any {
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

export class DataAwsccRoute53ResolverFirewallRuleGroupTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccRoute53ResolverFirewallRuleGroupTagsToTerraform(struct?: DataAwsccRoute53ResolverFirewallRuleGroupTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_firewall_rule_group.html awscc_route53resolver_firewall_rule_group}
*/
export class DataAwsccRoute53ResolverFirewallRuleGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53resolver_firewall_rule_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/route53resolver_firewall_rule_group.html awscc_route53resolver_firewall_rule_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRoute53ResolverFirewallRuleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRoute53ResolverFirewallRuleGroupConfig) {
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
    this._id = config.id;
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

  // firewall_rules - computed: true, optional: false, required: false
  public get firewallRules() {
    return this.interpolationForAttribute('firewall_rules') as any;
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

  // modification_time - computed: true, optional: false, required: false
  public get modificationTime() {
    return this.getStringAttribute('modification_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
