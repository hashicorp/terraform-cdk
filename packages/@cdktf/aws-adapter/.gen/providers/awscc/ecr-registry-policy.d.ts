import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcrRegistryPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The JSON policy text to apply to your registry. The policy text follows the same format as IAM policy text. For more information, see Registry permissions (https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html) in the Amazon Elastic Container Registry User Guide.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_registry_policy.html#policy_text EcrRegistryPolicy#policy_text}
    */
    readonly policyText: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecr_registry_policy.html awscc_ecr_registry_policy}
*/
export declare class EcrRegistryPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecr_registry_policy.html awscc_ecr_registry_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrRegistryPolicyConfig
    */
    constructor(scope: Construct, id: string, config: EcrRegistryPolicyConfig);
    get id(): string;
    private _policyText;
    get policyText(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set policyText(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    get policyTextInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get registryId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
