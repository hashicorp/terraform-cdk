import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MediaconnectFlowVpcInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_vpc_interface.html#flow_arn MediaconnectFlowVpcInterface#flow_arn}
    */
    readonly flowArn: string;
    /**
    * Immutable and has to be a unique against other VpcInterfaces in this Flow.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_vpc_interface.html#name MediaconnectFlowVpcInterface#name}
    */
    readonly name: string;
    /**
    * Role Arn MediaConnect can assumes to create ENIs in customer's account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_vpc_interface.html#role_arn MediaconnectFlowVpcInterface#role_arn}
    */
    readonly roleArn: string;
    /**
    * Security Group IDs to be used on ENI.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_vpc_interface.html#security_group_ids MediaconnectFlowVpcInterface#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Subnet must be in the AZ of the Flow
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_vpc_interface.html#subnet_id MediaconnectFlowVpcInterface#subnet_id}
    */
    readonly subnetId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_vpc_interface.html awscc_mediaconnect_flow_vpc_interface}
*/
export declare class MediaconnectFlowVpcInterface extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_vpc_interface.html awscc_mediaconnect_flow_vpc_interface} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediaconnectFlowVpcInterfaceConfig
    */
    constructor(scope: Construct, id: string, config: MediaconnectFlowVpcInterfaceConfig);
    private _flowArn;
    get flowArn(): string;
    set flowArn(value: string);
    get flowArnInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get networkInterfaceIds(): string[];
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _securityGroupIds;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[];
    private _subnetId;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
