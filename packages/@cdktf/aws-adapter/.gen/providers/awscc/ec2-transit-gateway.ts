// https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function ec2TransitGatewayTagsToTerraform(struct?: Ec2TransitGatewayTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html awscc_ec2_transit_gateway}
*/
export class Ec2TransitGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_transit_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway.html awscc_ec2_transit_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_transit_gateway',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._amazonSideAsn = config.amazonSideAsn;
    this._associationDefaultRouteTableId = config.associationDefaultRouteTableId;
    this._autoAcceptSharedAttachments = config.autoAcceptSharedAttachments;
    this._defaultRouteTableAssociation = config.defaultRouteTableAssociation;
    this._defaultRouteTablePropagation = config.defaultRouteTablePropagation;
    this._description = config.description;
    this._dnsSupport = config.dnsSupport;
    this._multicastSupport = config.multicastSupport;
    this._propagationDefaultRouteTableId = config.propagationDefaultRouteTableId;
    this._tags = config.tags;
    this._transitGatewayCidrBlocks = config.transitGatewayCidrBlocks;
    this._vpnEcmpSupport = config.vpnEcmpSupport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amazon_side_asn - computed: true, optional: true, required: false
  private _amazonSideAsn?: number;
  public get amazonSideAsn() {
    return this.getNumberAttribute('amazon_side_asn');
  }
  public set amazonSideAsn(value: number) {
    this._amazonSideAsn = value;
  }
  public resetAmazonSideAsn() {
    this._amazonSideAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonSideAsnInput() {
    return this._amazonSideAsn
  }

  // association_default_route_table_id - computed: false, optional: true, required: false
  private _associationDefaultRouteTableId?: string;
  public get associationDefaultRouteTableId() {
    return this.getStringAttribute('association_default_route_table_id');
  }
  public set associationDefaultRouteTableId(value: string ) {
    this._associationDefaultRouteTableId = value;
  }
  public resetAssociationDefaultRouteTableId() {
    this._associationDefaultRouteTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationDefaultRouteTableIdInput() {
    return this._associationDefaultRouteTableId
  }

  // auto_accept_shared_attachments - computed: false, optional: true, required: false
  private _autoAcceptSharedAttachments?: string;
  public get autoAcceptSharedAttachments() {
    return this.getStringAttribute('auto_accept_shared_attachments');
  }
  public set autoAcceptSharedAttachments(value: string ) {
    this._autoAcceptSharedAttachments = value;
  }
  public resetAutoAcceptSharedAttachments() {
    this._autoAcceptSharedAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAcceptSharedAttachmentsInput() {
    return this._autoAcceptSharedAttachments
  }

  // default_route_table_association - computed: false, optional: true, required: false
  private _defaultRouteTableAssociation?: string;
  public get defaultRouteTableAssociation() {
    return this.getStringAttribute('default_route_table_association');
  }
  public set defaultRouteTableAssociation(value: string ) {
    this._defaultRouteTableAssociation = value;
  }
  public resetDefaultRouteTableAssociation() {
    this._defaultRouteTableAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteTableAssociationInput() {
    return this._defaultRouteTableAssociation
  }

  // default_route_table_propagation - computed: false, optional: true, required: false
  private _defaultRouteTablePropagation?: string;
  public get defaultRouteTablePropagation() {
    return this.getStringAttribute('default_route_table_propagation');
  }
  public set defaultRouteTablePropagation(value: string ) {
    this._defaultRouteTablePropagation = value;
  }
  public resetDefaultRouteTablePropagation() {
    this._defaultRouteTablePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteTablePropagationInput() {
    return this._defaultRouteTablePropagation
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // dns_support - computed: false, optional: true, required: false
  private _dnsSupport?: string;
  public get dnsSupport() {
    return this.getStringAttribute('dns_support');
  }
  public set dnsSupport(value: string ) {
    this._dnsSupport = value;
  }
  public resetDnsSupport() {
    this._dnsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSupportInput() {
    return this._dnsSupport
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multicast_support - computed: true, optional: true, required: false
  private _multicastSupport?: string;
  public get multicastSupport() {
    return this.getStringAttribute('multicast_support');
  }
  public set multicastSupport(value: string) {
    this._multicastSupport = value;
  }
  public resetMulticastSupport() {
    this._multicastSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastSupportInput() {
    return this._multicastSupport
  }

  // propagation_default_route_table_id - computed: false, optional: true, required: false
  private _propagationDefaultRouteTableId?: string;
  public get propagationDefaultRouteTableId() {
    return this.getStringAttribute('propagation_default_route_table_id');
  }
  public set propagationDefaultRouteTableId(value: string ) {
    this._propagationDefaultRouteTableId = value;
  }
  public resetPropagationDefaultRouteTableId() {
    this._propagationDefaultRouteTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationDefaultRouteTableIdInput() {
    return this._propagationDefaultRouteTableId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Ec2TransitGatewayTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Ec2TransitGatewayTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // transit_gateway_cidr_blocks - computed: false, optional: true, required: false
  private _transitGatewayCidrBlocks?: string[];
  public get transitGatewayCidrBlocks() {
    return this.getListAttribute('transit_gateway_cidr_blocks');
  }
  public set transitGatewayCidrBlocks(value: string[] ) {
    this._transitGatewayCidrBlocks = value;
  }
  public resetTransitGatewayCidrBlocks() {
    this._transitGatewayCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayCidrBlocksInput() {
    return this._transitGatewayCidrBlocks
  }

  // vpn_ecmp_support - computed: false, optional: true, required: false
  private _vpnEcmpSupport?: string;
  public get vpnEcmpSupport() {
    return this.getStringAttribute('vpn_ecmp_support');
  }
  public set vpnEcmpSupport(value: string ) {
    this._vpnEcmpSupport = value;
  }
  public resetVpnEcmpSupport() {
    this._vpnEcmpSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnEcmpSupportInput() {
    return this._vpnEcmpSupport
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amazon_side_asn: cdktf.numberToTerraform(this._amazonSideAsn),
      association_default_route_table_id: cdktf.stringToTerraform(this._associationDefaultRouteTableId),
      auto_accept_shared_attachments: cdktf.stringToTerraform(this._autoAcceptSharedAttachments),
      default_route_table_association: cdktf.stringToTerraform(this._defaultRouteTableAssociation),
      default_route_table_propagation: cdktf.stringToTerraform(this._defaultRouteTablePropagation),
      description: cdktf.stringToTerraform(this._description),
      dns_support: cdktf.stringToTerraform(this._dnsSupport),
      multicast_support: cdktf.stringToTerraform(this._multicastSupport),
      propagation_default_route_table_id: cdktf.stringToTerraform(this._propagationDefaultRouteTableId),
      tags: cdktf.listMapper(ec2TransitGatewayTagsToTerraform)(this._tags),
      transit_gateway_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(this._transitGatewayCidrBlocks),
      vpn_ecmp_support: cdktf.stringToTerraform(this._vpnEcmpSupport),
    };
  }
}
