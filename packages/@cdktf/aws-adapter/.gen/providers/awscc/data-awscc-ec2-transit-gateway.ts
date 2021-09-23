// https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEc2TransitGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway.html#id DataAwsccEc2TransitGateway#id}
  */
  readonly id: string;
}
export class DataAwsccEc2TransitGatewayTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEc2TransitGatewayTagsToTerraform(struct?: DataAwsccEc2TransitGatewayTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway.html awscc_ec2_transit_gateway}
*/
export class DataAwsccEc2TransitGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_transit_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway.html awscc_ec2_transit_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2TransitGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amazon_side_asn - computed: true, optional: false, required: false
  public get amazonSideAsn() {
    return this.getNumberAttribute('amazon_side_asn');
  }

  // association_default_route_table_id - computed: true, optional: false, required: false
  public get associationDefaultRouteTableId() {
    return this.getStringAttribute('association_default_route_table_id');
  }

  // auto_accept_shared_attachments - computed: true, optional: false, required: false
  public get autoAcceptSharedAttachments() {
    return this.getStringAttribute('auto_accept_shared_attachments');
  }

  // default_route_table_association - computed: true, optional: false, required: false
  public get defaultRouteTableAssociation() {
    return this.getStringAttribute('default_route_table_association');
  }

  // default_route_table_propagation - computed: true, optional: false, required: false
  public get defaultRouteTablePropagation() {
    return this.getStringAttribute('default_route_table_propagation');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dns_support - computed: true, optional: false, required: false
  public get dnsSupport() {
    return this.getStringAttribute('dns_support');
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

  // multicast_support - computed: true, optional: false, required: false
  public get multicastSupport() {
    return this.getStringAttribute('multicast_support');
  }

  // propagation_default_route_table_id - computed: true, optional: false, required: false
  public get propagationDefaultRouteTableId() {
    return this.getStringAttribute('propagation_default_route_table_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // transit_gateway_cidr_blocks - computed: true, optional: false, required: false
  public get transitGatewayCidrBlocks() {
    return this.getListAttribute('transit_gateway_cidr_blocks');
  }

  // vpn_ecmp_support - computed: true, optional: false, required: false
  public get vpnEcmpSupport() {
    return this.getStringAttribute('vpn_ecmp_support');
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
