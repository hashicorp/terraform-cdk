import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEventschemasRegistryPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/eventschemas_registry_policy.html#id DataAwsccEventschemasRegistryPolicy#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/eventschemas_registry_policy.html awscc_eventschemas_registry_policy}
*/
export declare class DataAwsccEventschemasRegistryPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/eventschemas_registry_policy.html awscc_eventschemas_registry_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEventschemasRegistryPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEventschemasRegistryPolicyConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    policy(key: string): string;
    get registryName(): string;
    get revisionId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
