import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayMulticastDomainAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The IDs of the subnets to associate with the transit gateway multicast domain.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain_association.html#subnet_id Ec2TransitGatewayMulticastDomainAssociation#subnet_id}
    */
    readonly subnetId: string;
    /**
    * The ID of the transit gateway attachment.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain_association.html#transit_gateway_attachment_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId: string;
    /**
    * The ID of the transit gateway multicast domain.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain_association.html#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_multicast_domain_id}
    */
    readonly transitGatewayMulticastDomainId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain_association.html awscc_ec2_transit_gateway_multicast_domain_association}
*/
export declare class Ec2TransitGatewayMulticastDomainAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain_association.html awscc_ec2_transit_gateway_multicast_domain_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayMulticastDomainAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayMulticastDomainAssociationConfig);
    get id(): string;
    get resourceId(): string;
    get resourceType(): string;
    get state(): string;
    private _subnetId;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string;
    private _transitGatewayAttachmentId;
    get transitGatewayAttachmentId(): string;
    set transitGatewayAttachmentId(value: string);
    get transitGatewayAttachmentIdInput(): string;
    private _transitGatewayMulticastDomainId;
    get transitGatewayMulticastDomainId(): string;
    set transitGatewayMulticastDomainId(value: string);
    get transitGatewayMulticastDomainIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
