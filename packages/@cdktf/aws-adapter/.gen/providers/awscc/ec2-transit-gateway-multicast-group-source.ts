// https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_group_source.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2TransitGatewayMulticastGroupSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IP address assigned to the transit gateway multicast group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_group_source.html#group_ip_address Ec2TransitGatewayMulticastGroupSource#group_ip_address}
  */
  readonly groupIpAddress: string;
  /**
  * The ID of the transit gateway attachment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_group_source.html#network_interface_id Ec2TransitGatewayMulticastGroupSource#network_interface_id}
  */
  readonly networkInterfaceId: string;
  /**
  * The ID of the transit gateway multicast domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_group_source.html#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastGroupSource#transit_gateway_multicast_domain_id}
  */
  readonly transitGatewayMulticastDomainId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_group_source.html awscc_ec2_transit_gateway_multicast_group_source}
*/
export class Ec2TransitGatewayMulticastGroupSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_transit_gateway_multicast_group_source";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_transit_gateway_multicast_group_source.html awscc_ec2_transit_gateway_multicast_group_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayMulticastGroupSourceConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayMulticastGroupSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_transit_gateway_multicast_group_source',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groupIpAddress = config.groupIpAddress;
    this._networkInterfaceId = config.networkInterfaceId;
    this._transitGatewayMulticastDomainId = config.transitGatewayMulticastDomainId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_ip_address - computed: false, optional: false, required: true
  private _groupIpAddress: string;
  public get groupIpAddress() {
    return this.getStringAttribute('group_ip_address');
  }
  public set groupIpAddress(value: string) {
    this._groupIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIpAddressInput() {
    return this._groupIpAddress
  }

  // group_member - computed: true, optional: false, required: false
  public get groupMember() {
    return this.getBooleanAttribute('group_member');
  }

  // group_source - computed: true, optional: false, required: false
  public get groupSource() {
    return this.getBooleanAttribute('group_source');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_type - computed: true, optional: false, required: false
  public get memberType() {
    return this.getStringAttribute('member_type');
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId: string;
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
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
      group_ip_address: cdktf.stringToTerraform(this._groupIpAddress),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      transit_gateway_multicast_domain_id: cdktf.stringToTerraform(this._transitGatewayMulticastDomainId),
    };
  }
}
