import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function networkfirewallFirewallSubnetMappingsToTerraform(struct?: NetworkfirewallFirewallSubnetMappings): any;
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
export declare function networkfirewallFirewallTagsToTerraform(struct?: NetworkfirewallFirewallTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html awscc_networkfirewall_firewall}
*/
export declare class NetworkfirewallFirewall extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkfirewall_firewall.html awscc_networkfirewall_firewall} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallFirewallConfig
    */
    constructor(scope: Construct, id: string, config: NetworkfirewallFirewallConfig);
    private _deleteProtection?;
    get deleteProtection(): boolean | cdktf.IResolvable;
    set deleteProtection(value: boolean | cdktf.IResolvable);
    resetDeleteProtection(): void;
    get deleteProtectionInput(): boolean | cdktf.IResolvable | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get endpointIds(): string[];
    get firewallArn(): string;
    get firewallId(): string;
    private _firewallName;
    get firewallName(): string;
    set firewallName(value: string);
    get firewallNameInput(): string;
    private _firewallPolicyArn;
    get firewallPolicyArn(): string;
    set firewallPolicyArn(value: string);
    get firewallPolicyArnInput(): string;
    private _firewallPolicyChangeProtection?;
    get firewallPolicyChangeProtection(): boolean | cdktf.IResolvable;
    set firewallPolicyChangeProtection(value: boolean | cdktf.IResolvable);
    resetFirewallPolicyChangeProtection(): void;
    get firewallPolicyChangeProtectionInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _subnetChangeProtection?;
    get subnetChangeProtection(): boolean | cdktf.IResolvable;
    set subnetChangeProtection(value: boolean | cdktf.IResolvable);
    resetSubnetChangeProtection(): void;
    get subnetChangeProtectionInput(): boolean | cdktf.IResolvable | undefined;
    private _subnetMappings;
    get subnetMappings(): NetworkfirewallFirewallSubnetMappings[];
    set subnetMappings(value: NetworkfirewallFirewallSubnetMappings[]);
    get subnetMappingsInput(): NetworkfirewallFirewallSubnetMappings[];
    private _tags?;
    get tags(): NetworkfirewallFirewallTags[];
    set tags(value: NetworkfirewallFirewallTags[]);
    resetTags(): void;
    get tagsInput(): NetworkfirewallFirewallTags[] | undefined;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
