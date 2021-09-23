import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html#amazon_side_asn Ec2TransitGateway#amazon_side_asn}
    */
    readonly amazonSideAsn?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html#association_default_route_table_id Ec2TransitGateway#association_default_route_table_id}
    */
    readonly associationDefaultRouteTableId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}
    */
    readonly autoAcceptSharedAttachments?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html#default_route_table_association Ec2TransitGateway#default_route_table_association}
    */
    readonly defaultRouteTableAssociation?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}
    */
    readonly defaultRouteTablePropagation?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html#description Ec2TransitGateway#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html#dns_support Ec2TransitGateway#dns_support}
    */
    readonly dnsSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html#multicast_support Ec2TransitGateway#multicast_support}
    */
    readonly multicastSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html#propagation_default_route_table_id Ec2TransitGateway#propagation_default_route_table_id}
    */
    readonly propagationDefaultRouteTableId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html#tags Ec2TransitGateway#tags}
    */
    readonly tags?: Ec2TransitGatewayTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}
    */
    readonly transitGatewayCidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}
    */
    readonly vpnEcmpSupport?: string;
}
export interface Ec2TransitGatewayTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html#key Ec2TransitGateway#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html#value Ec2TransitGateway#value}
    */
    readonly value: string;
}
export declare function ec2TransitGatewayTagsToTerraform(struct?: Ec2TransitGatewayTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html awscc_ec2_transit_gateway}
*/
export declare class Ec2TransitGateway extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html awscc_ec2_transit_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Ec2TransitGatewayConfig);
    private _amazonSideAsn?;
    get amazonSideAsn(): number;
    set amazonSideAsn(value: number);
    resetAmazonSideAsn(): void;
    get amazonSideAsnInput(): number | undefined;
    private _associationDefaultRouteTableId?;
    get associationDefaultRouteTableId(): string;
    set associationDefaultRouteTableId(value: string);
    resetAssociationDefaultRouteTableId(): void;
    get associationDefaultRouteTableIdInput(): string | undefined;
    private _autoAcceptSharedAttachments?;
    get autoAcceptSharedAttachments(): string;
    set autoAcceptSharedAttachments(value: string);
    resetAutoAcceptSharedAttachments(): void;
    get autoAcceptSharedAttachmentsInput(): string | undefined;
    private _defaultRouteTableAssociation?;
    get defaultRouteTableAssociation(): string;
    set defaultRouteTableAssociation(value: string);
    resetDefaultRouteTableAssociation(): void;
    get defaultRouteTableAssociationInput(): string | undefined;
    private _defaultRouteTablePropagation?;
    get defaultRouteTablePropagation(): string;
    set defaultRouteTablePropagation(value: string);
    resetDefaultRouteTablePropagation(): void;
    get defaultRouteTablePropagationInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _dnsSupport?;
    get dnsSupport(): string;
    set dnsSupport(value: string);
    resetDnsSupport(): void;
    get dnsSupportInput(): string | undefined;
    get id(): string;
    private _multicastSupport?;
    get multicastSupport(): string;
    set multicastSupport(value: string);
    resetMulticastSupport(): void;
    get multicastSupportInput(): string | undefined;
    private _propagationDefaultRouteTableId?;
    get propagationDefaultRouteTableId(): string;
    set propagationDefaultRouteTableId(value: string);
    resetPropagationDefaultRouteTableId(): void;
    get propagationDefaultRouteTableIdInput(): string | undefined;
    private _tags?;
    get tags(): Ec2TransitGatewayTags[];
    set tags(value: Ec2TransitGatewayTags[]);
    resetTags(): void;
    get tagsInput(): Ec2TransitGatewayTags[] | undefined;
    private _transitGatewayCidrBlocks?;
    get transitGatewayCidrBlocks(): string[];
    set transitGatewayCidrBlocks(value: string[]);
    resetTransitGatewayCidrBlocks(): void;
    get transitGatewayCidrBlocksInput(): string[] | undefined;
    private _vpnEcmpSupport?;
    get vpnEcmpSupport(): string;
    set vpnEcmpSupport(value: string);
    resetVpnEcmpSupport(): void;
    get vpnEcmpSupportInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
