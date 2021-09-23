import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNetworkfirewallRuleGroupsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_rule_groups.html awscc_networkfirewall_rule_groups}
*/
export declare class DataAwsccNetworkfirewallRuleGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkfirewall_rule_groups.html awscc_networkfirewall_rule_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNetworkfirewallRuleGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccNetworkfirewallRuleGroupsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
