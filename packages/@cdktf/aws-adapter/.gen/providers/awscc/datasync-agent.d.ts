import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncAgentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Activation key of the Agent.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#activation_key DatasyncAgent#activation_key}
    */
    readonly activationKey: string;
    /**
    * The name configured for the agent. Text reference used to identify the agent in the console.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#agent_name DatasyncAgent#agent_name}
    */
    readonly agentName?: string;
    /**
    * The ARNs of the security group used to protect your data transfer task subnets.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#security_group_arns DatasyncAgent#security_group_arns}
    */
    readonly securityGroupArns?: string[];
    /**
    * The ARNs of the subnets in which DataSync will create elastic network interfaces for each data transfer task.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#subnet_arns DatasyncAgent#subnet_arns}
    */
    readonly subnetArns?: string[];
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#tags DatasyncAgent#tags}
    */
    readonly tags?: DatasyncAgentTags[];
    /**
    * The ID of the VPC endpoint that the agent has access to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#vpc_endpoint_id DatasyncAgent#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
}
export interface DatasyncAgentTags {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#key DatasyncAgent#key}
    */
    readonly key: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html#value DatasyncAgent#value}
    */
    readonly value: string;
}
export declare function datasyncAgentTagsToTerraform(struct?: DatasyncAgentTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html awscc_datasync_agent}
*/
export declare class DatasyncAgent extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_agent.html awscc_datasync_agent} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncAgentConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncAgentConfig);
    private _activationKey;
    get activationKey(): string;
    set activationKey(value: string);
    get activationKeyInput(): string;
    get agentArn(): string;
    private _agentName?;
    get agentName(): string;
    set agentName(value: string);
    resetAgentName(): void;
    get agentNameInput(): string | undefined;
    get endpointType(): string;
    get id(): string;
    private _securityGroupArns?;
    get securityGroupArns(): string[];
    set securityGroupArns(value: string[]);
    resetSecurityGroupArns(): void;
    get securityGroupArnsInput(): string[] | undefined;
    private _subnetArns?;
    get subnetArns(): string[];
    set subnetArns(value: string[]);
    resetSubnetArns(): void;
    get subnetArnsInput(): string[] | undefined;
    private _tags?;
    get tags(): DatasyncAgentTags[];
    set tags(value: DatasyncAgentTags[]);
    resetTags(): void;
    get tagsInput(): DatasyncAgentTags[] | undefined;
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    resetVpcEndpointId(): void;
    get vpcEndpointIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
