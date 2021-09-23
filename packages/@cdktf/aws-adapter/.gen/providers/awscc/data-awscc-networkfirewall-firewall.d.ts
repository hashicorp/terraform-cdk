import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNetworkfirewallFirewallConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall.html#id DataAwsccNetworkfirewallFirewall#id}
    */
    readonly id: string;
}
export declare class DataAwsccNetworkfirewallFirewallSubnetMappings extends cdktf.ComplexComputedList {
    get subnetId(): string;
}
export declare function dataAwsccNetworkfirewallFirewallSubnetMappingsToTerraform(struct?: DataAwsccNetworkfirewallFirewallSubnetMappings): any;
export declare class DataAwsccNetworkfirewallFirewallTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccNetworkfirewallFirewallTagsToTerraform(struct?: DataAwsccNetworkfirewallFirewallTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall.html awscc_networkfirewall_firewall}
*/
export declare class DataAwsccNetworkfirewallFirewall extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall.html awscc_networkfirewall_firewall} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNetworkfirewallFirewallConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccNetworkfirewallFirewallConfig);
    get deleteProtection(): cdktf.IResolvable;
    get description(): string;
    get endpointIds(): string[];
    get firewallArn(): string;
    get firewallId(): string;
    get firewallName(): string;
    get firewallPolicyArn(): string;
    get firewallPolicyChangeProtection(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get subnetChangeProtection(): cdktf.IResolvable;
    get subnetMappings(): any;
    get tags(): any;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
