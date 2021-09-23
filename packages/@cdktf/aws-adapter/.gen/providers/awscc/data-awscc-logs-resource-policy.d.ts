import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLogsResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/logs_resource_policy.html#id DataAwsccLogsResourcePolicy#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/logs_resource_policy.html awscc_logs_resource_policy}
*/
export declare class DataAwsccLogsResourcePolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/logs_resource_policy.html awscc_logs_resource_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLogsResourcePolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLogsResourcePolicyConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get policyDocument(): string;
    get policyName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
