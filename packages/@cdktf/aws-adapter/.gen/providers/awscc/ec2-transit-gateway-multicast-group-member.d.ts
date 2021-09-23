import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayMulticastGroupMemberConfig extends cdktf.TerraformMetaArguments {
    /**
    * The IP address assigned to the transit gateway multicast group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_group_member.html#group_ip_address Ec2TransitGatewayMulticastGroupMember#group_ip_address}
    */
    readonly groupIpAddress: string;
    /**
    * The ID of the transit gateway attachment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_group_member.html#network_interface_id Ec2TransitGatewayMulticastGroupMember#network_interface_id}
    */
    readonly networkInterfaceId: string;
    /**
    * The ID of the transit gateway multicast domain.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_group_member.html#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastGroupMember#transit_gateway_multicast_domain_id}
    */
    readonly transitGatewayMulticastDomainId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_group_member.html awscc_ec2_transit_gateway_multicast_group_member}
*/
export declare class Ec2TransitGatewayMulticastGroupMember extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_group_member.html awscc_ec2_transit_gateway_multicast_group_member} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayMulticastGroupMemberConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayMulticastGroupMemberConfig);
    private _groupIpAddress;
    get groupIpAddress(): string;
    set groupIpAddress(value: string);
    get groupIpAddressInput(): string;
    get groupMember(): cdktf.IResolvable;
    get groupSource(): cdktf.IResolvable;
    get id(): string;
    get memberType(): string;
    private _networkInterfaceId;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    get networkInterfaceIdInput(): string;
    get resourceId(): string;
    get resourceType(): string;
    get sourceType(): string;
    get subnetId(): string;
    get transitGatewayAttachmentId(): string;
    private _transitGatewayMulticastDomainId;
    get transitGatewayMulticastDomainId(): string;
    set transitGatewayMulticastDomainId(value: string);
    get transitGatewayMulticastDomainIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
