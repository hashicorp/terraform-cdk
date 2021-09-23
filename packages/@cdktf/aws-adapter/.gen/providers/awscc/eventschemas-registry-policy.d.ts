import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EventschemasRegistryPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eventschemas_registry_policy.html#policy EventschemasRegistryPolicy#policy}
    */
    readonly policy: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eventschemas_registry_policy.html#registry_name EventschemasRegistryPolicy#registry_name}
    */
    readonly registryName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/eventschemas_registry_policy.html#revision_id EventschemasRegistryPolicy#revision_id}
    */
    readonly revisionId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/eventschemas_registry_policy.html awscc_eventschemas_registry_policy}
*/
export declare class EventschemasRegistryPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/eventschemas_registry_policy.html awscc_eventschemas_registry_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EventschemasRegistryPolicyConfig
    */
    constructor(scope: Construct, id: string, config: EventschemasRegistryPolicyConfig);
    get id(): string;
    private _policy;
    get policy(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set policy(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    get policyInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _registryName;
    get registryName(): string;
    set registryName(value: string);
    get registryNameInput(): string;
    private _revisionId?;
    get revisionId(): string;
    set revisionId(value: string);
    resetRevisionId(): void;
    get revisionIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
