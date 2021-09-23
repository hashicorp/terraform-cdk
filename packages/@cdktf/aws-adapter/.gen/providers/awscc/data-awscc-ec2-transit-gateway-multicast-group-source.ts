// https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_group_source.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEc2TransitGatewayMulticastGroupSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_group_source.html#id DataAwsccEc2TransitGatewayMulticastGroupSource#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_group_source.html awscc_ec2_transit_gateway_multicast_group_source}
*/
export class DataAwsccEc2TransitGatewayMulticastGroupSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_transit_gateway_multicast_group_source";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_group_source.html awscc_ec2_transit_gateway_multicast_group_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2TransitGatewayMulticastGroupSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayMulticastGroupSourceConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_ip_address - computed: true, optional: false, required: false
  public get groupIpAddress() {
    return this.getStringAttribute('group_ip_address');
  }

  // group_member - computed: true, optional: false, required: false
  public get groupMember() {
    return this.getBooleanAttribute('group_member');
  }

  // group_source - computed: true, optional: false, required: false
  public get groupSource() {
    return this.getBooleanAttribute('group_source');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // member_type - computed: true, optional: false, required: false
  public get memberType() {
    return this.getStringAttribute('member_type');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
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

  // transit_gateway_multicast_domain_id - computed: true, optional: false, required: false
  public get transitGatewayMulticastDomainId() {
    return this.getStringAttribute('transit_gateway_multicast_domain_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
