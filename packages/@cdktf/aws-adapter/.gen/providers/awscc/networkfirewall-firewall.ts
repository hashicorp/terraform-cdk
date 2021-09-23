// https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkfirewallFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html#delete_protection NetworkfirewallFirewall#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html#description NetworkfirewallFirewall#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html#firewall_name NetworkfirewallFirewall#firewall_name}
  */
  readonly firewallName: string;
  /**
  * A resource ARN.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html#firewall_policy_arn NetworkfirewallFirewall#firewall_policy_arn}
  */
  readonly firewallPolicyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}
  */
  readonly firewallPolicyChangeProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}
  */
  readonly subnetChangeProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html#subnet_mappings NetworkfirewallFirewall#subnet_mappings}
  */
  readonly subnetMappings: NetworkfirewallFirewallSubnetMappings[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html#tags NetworkfirewallFirewall#tags}
  */
  readonly tags?: NetworkfirewallFirewallTags[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html#vpc_id NetworkfirewallFirewall#vpc_id}
  */
  readonly vpcId: string;
}
export interface NetworkfirewallFirewallSubnetMappings {
  /**
  * A SubnetId.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html#subnet_id NetworkfirewallFirewall#subnet_id}
  */
  readonly subnetId: string;
}

export function networkfirewallFirewallSubnetMappingsToTerraform(struct?: NetworkfirewallFirewallSubnetMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface NetworkfirewallFirewallTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html#key NetworkfirewallFirewall#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html#value NetworkfirewallFirewall#value}
  */
  readonly value: string;
}

export function networkfirewallFirewallTagsToTerraform(struct?: NetworkfirewallFirewallTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html awscc_networkfirewall_firewall}
*/
export class NetworkfirewallFirewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkfirewall_firewall";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html awscc_networkfirewall_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkfirewallFirewallConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkfirewallFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_networkfirewall_firewall',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._firewallName = config.firewallName;
    this._firewallPolicyArn = config.firewallPolicyArn;
    this._firewallPolicyChangeProtection = config.firewallPolicyChangeProtection;
    this._subnetChangeProtection = config.subnetChangeProtection;
    this._subnetMappings = config.subnetMappings;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: boolean | cdktf.IResolvable;
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean | cdktf.IResolvable ) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection
  }

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

  // endpoint_ids - computed: true, optional: false, required: false
  public get endpointIds() {
    return this.getListAttribute('endpoint_ids');
  }

  // firewall_arn - computed: true, optional: false, required: false
  public get firewallArn() {
    return this.getStringAttribute('firewall_arn');
  }

  // firewall_id - computed: true, optional: false, required: false
  public get firewallId() {
    return this.getStringAttribute('firewall_id');
  }

  // firewall_name - computed: false, optional: false, required: true
  private _firewallName: string;
  public get firewallName() {
    return this.getStringAttribute('firewall_name');
  }
  public set firewallName(value: string) {
    this._firewallName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallNameInput() {
    return this._firewallName
  }

  // firewall_policy_arn - computed: false, optional: false, required: true
  private _firewallPolicyArn: string;
  public get firewallPolicyArn() {
    return this.getStringAttribute('firewall_policy_arn');
  }
  public set firewallPolicyArn(value: string) {
    this._firewallPolicyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyArnInput() {
    return this._firewallPolicyArn
  }

  // firewall_policy_change_protection - computed: false, optional: true, required: false
  private _firewallPolicyChangeProtection?: boolean | cdktf.IResolvable;
  public get firewallPolicyChangeProtection() {
    return this.getBooleanAttribute('firewall_policy_change_protection');
  }
  public set firewallPolicyChangeProtection(value: boolean | cdktf.IResolvable ) {
    this._firewallPolicyChangeProtection = value;
  }
  public resetFirewallPolicyChangeProtection() {
    this._firewallPolicyChangeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyChangeProtectionInput() {
    return this._firewallPolicyChangeProtection
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subnet_change_protection - computed: false, optional: true, required: false
  private _subnetChangeProtection?: boolean | cdktf.IResolvable;
  public get subnetChangeProtection() {
    return this.getBooleanAttribute('subnet_change_protection');
  }
  public set subnetChangeProtection(value: boolean | cdktf.IResolvable ) {
    this._subnetChangeProtection = value;
  }
  public resetSubnetChangeProtection() {
    this._subnetChangeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetChangeProtectionInput() {
    return this._subnetChangeProtection
  }

  // subnet_mappings - computed: false, optional: false, required: true
  private _subnetMappings: NetworkfirewallFirewallSubnetMappings[];
  public get subnetMappings() {
    return this.interpolationForAttribute('subnet_mappings') as any;
  }
  public set subnetMappings(value: NetworkfirewallFirewallSubnetMappings[]) {
    this._subnetMappings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMappingsInput() {
    return this._subnetMappings
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: NetworkfirewallFirewallTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: NetworkfirewallFirewallTags[] ) {
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
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      description: cdktf.stringToTerraform(this._description),
      firewall_name: cdktf.stringToTerraform(this._firewallName),
      firewall_policy_arn: cdktf.stringToTerraform(this._firewallPolicyArn),
      firewall_policy_change_protection: cdktf.booleanToTerraform(this._firewallPolicyChangeProtection),
      subnet_change_protection: cdktf.booleanToTerraform(this._subnetChangeProtection),
      subnet_mappings: cdktf.listMapper(networkfirewallFirewallSubnetMappingsToTerraform)(this._subnetMappings),
      tags: cdktf.listMapper(networkfirewallFirewallTagsToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
