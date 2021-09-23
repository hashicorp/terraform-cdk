// https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
export class Ec2TransitGatewayMulticastDomainAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_transit_gateway_multicast_domain_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_domain_association.html awscc_ec2_transit_gateway_multicast_domain_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayMulticastDomainAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayMulticastDomainAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_transit_gateway_multicast_domain_association',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._subnetId = config.subnetId;
    this._transitGatewayAttachmentId = config.transitGatewayAttachmentId;
    this._transitGatewayMulticastDomainId = config.transitGatewayMulticastDomainId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // transit_gateway_attachment_id - computed: false, optional: false, required: true
  private _transitGatewayAttachmentId: string;
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }
  public set transitGatewayAttachmentId(value: string) {
    this._transitGatewayAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayAttachmentIdInput() {
    return this._transitGatewayAttachmentId
  }

  // transit_gateway_multicast_domain_id - computed: false, optional: false, required: true
  private _transitGatewayMulticastDomainId: string;
  public get transitGatewayMulticastDomainId() {
    return this.getStringAttribute('transit_gateway_multicast_domain_id');
  }
  public set transitGatewayMulticastDomainId(value: string) {
    this._transitGatewayMulticastDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayMulticastDomainIdInput() {
    return this._transitGatewayMulticastDomainId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      transit_gateway_attachment_id: cdktf.stringToTerraform(this._transitGatewayAttachmentId),
      transit_gateway_multicast_domain_id: cdktf.stringToTerraform(this._transitGatewayMulticastDomainId),
    };
  }
}
