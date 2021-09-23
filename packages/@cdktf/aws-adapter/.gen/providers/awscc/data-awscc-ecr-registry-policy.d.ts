import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcrRegistryPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecr_registry_policy.html#id DataAwsccEcrRegistryPolicy#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecr_registry_policy.html awscc_ecr_registry_policy}
*/
export declare class DataAwsccEcrRegistryPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecr_registry_policy.html awscc_ecr_registry_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcrRegistryPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEcrRegistryPolicyConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    policyText(key: string): string;
    get registryId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
