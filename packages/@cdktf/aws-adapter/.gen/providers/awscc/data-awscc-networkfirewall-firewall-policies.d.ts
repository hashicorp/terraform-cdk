import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNetworkfirewallFirewallPoliciesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall_policies.html awscc_networkfirewall_firewall_policies}
*/
export declare class DataAwsccNetworkfirewallFirewallPolicies extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_firewall_policies.html awscc_networkfirewall_firewall_policies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNetworkfirewallFirewallPoliciesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccNetworkfirewallFirewallPoliciesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
