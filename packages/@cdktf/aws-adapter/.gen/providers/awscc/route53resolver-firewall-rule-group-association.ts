// https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function route53ResolverFirewallRuleGroupAssociationTagsToTerraform(struct?: Route53ResolverFirewallRuleGroupAssociationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html awscc_route53resolver_firewall_rule_group_association}
*/
export class Route53ResolverFirewallRuleGroupAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_route53resolver_firewall_rule_group_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/route53resolver_firewall_rule_group_association.html awscc_route53resolver_firewall_rule_group_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53ResolverFirewallRuleGroupAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Route53ResolverFirewallRuleGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_route53resolver_firewall_rule_group_association',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._firewallRuleGroupId = config.firewallRuleGroupId;
    this._mutationProtection = config.mutationProtection;
    this._name = config.name;
    this._priority = config.priority;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
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

  // firewall_rule_group_id - computed: false, optional: false, required: true
  private _firewallRuleGroupId: string;
  public get firewallRuleGroupId() {
    return this.getStringAttribute('firewall_rule_group_id');
  }
  public set firewallRuleGroupId(value: string) {
    this._firewallRuleGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRuleGroupIdInput() {
    return this._firewallRuleGroupId
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_owner_name - computed: true, optional: false, required: false
  public get managedOwnerName() {
    return this.getStringAttribute('managed_owner_name');
  }

  // modification_time - computed: true, optional: false, required: false
  public get modificationTime() {
    return this.getStringAttribute('modification_time');
  }

  // mutation_protection - computed: false, optional: true, required: false
  private _mutationProtection?: string;
  public get mutationProtection() {
    return this.getStringAttribute('mutation_protection');
  }
  public set mutationProtection(value: string ) {
    this._mutationProtection = value;
  }
  public resetMutationProtection() {
    this._mutationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutationProtectionInput() {
    return this._mutationProtection
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

  // priority - computed: false, optional: false, required: true
  private _priority: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
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
  private _tags?: Route53ResolverFirewallRuleGroupAssociationTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Route53ResolverFirewallRuleGroupAssociationTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firewall_rule_group_id: cdktf.stringToTerraform(this._firewallRuleGroupId),
      mutation_protection: cdktf.stringToTerraform(this._mutationProtection),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      tags: cdktf.listMapper(route53ResolverFirewallRuleGroupAssociationTagsToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
