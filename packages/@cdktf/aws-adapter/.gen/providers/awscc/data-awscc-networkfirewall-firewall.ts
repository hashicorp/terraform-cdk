// https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccNetworkfirewallFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall.html#id DataAwsccNetworkfirewallFirewall#id}
  */
  readonly id: string;
}
export class DataAwsccNetworkfirewallFirewallSubnetMappings extends cdktf.ComplexComputedList {

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export function dataAwsccNetworkfirewallFirewallSubnetMappingsToTerraform(struct?: DataAwsccNetworkfirewallFirewallSubnetMappings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export class DataAwsccNetworkfirewallFirewallTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccNetworkfirewallFirewallTagsToTerraform(struct?: DataAwsccNetworkfirewallFirewallTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall.html awscc_networkfirewall_firewall}
*/
export class DataAwsccNetworkfirewallFirewall extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_networkfirewall_firewall";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall.html awscc_networkfirewall_firewall} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNetworkfirewallFirewallConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNetworkfirewallFirewallConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_protection - computed: true, optional: false, required: false
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // firewall_name - computed: true, optional: false, required: false
  public get firewallName() {
    return this.getStringAttribute('firewall_name');
  }

  // firewall_policy_arn - computed: true, optional: false, required: false
  public get firewallPolicyArn() {
    return this.getStringAttribute('firewall_policy_arn');
  }

  // firewall_policy_change_protection - computed: true, optional: false, required: false
  public get firewallPolicyChangeProtection() {
    return this.getBooleanAttribute('firewall_policy_change_protection');
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

  // subnet_change_protection - computed: true, optional: false, required: false
  public get subnetChangeProtection() {
    return this.getBooleanAttribute('subnet_change_protection');
  }

  // subnet_mappings - computed: true, optional: false, required: false
  public get subnetMappings() {
    return this.interpolationForAttribute('subnet_mappings') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
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
