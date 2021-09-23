import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LogsResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The policy document
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/logs_resource_policy.html#policy_document LogsResourcePolicy#policy_document}
    */
    readonly policyDocument: string;
    /**
    * A name for resource policy
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/logs_resource_policy.html#policy_name LogsResourcePolicy#policy_name}
    */
    readonly policyName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/logs_resource_policy.html awscc_logs_resource_policy}
*/
export declare class LogsResourcePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/logs_resource_policy.html awscc_logs_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LogsResourcePolicyConfig
    */
    constructor(scope: Construct, id: string, config: LogsResourcePolicyConfig);
    get id(): string;
    private _policyDocument;
    get policyDocument(): string;
    set policyDocument(value: string);
    get policyDocumentInput(): string;
    private _policyName;
    get policyName(): string;
    set policyName(value: string);
    get policyNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
