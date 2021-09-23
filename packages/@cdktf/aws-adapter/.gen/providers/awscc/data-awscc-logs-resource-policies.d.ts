import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLogsResourcePoliciesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/logs_resource_policies.html awscc_logs_resource_policies}
*/
export declare class DataAwsccLogsResourcePolicies extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/logs_resource_policies.html awscc_logs_resource_policies} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLogsResourcePoliciesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccLogsResourcePoliciesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
