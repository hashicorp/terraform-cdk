// https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2LocalGatewayRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The CIDR block used for destination matches.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route.html#destination_cidr_block Ec2LocalGatewayRoute#destination_cidr_block}
  */
  readonly destinationCidrBlock: string;
  /**
  * The ID of the local gateway route table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route.html#local_gateway_route_table_id Ec2LocalGatewayRoute#local_gateway_route_table_id}
  */
  readonly localGatewayRouteTableId: string;
  /**
  * The ID of the virtual interface group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route.html#local_gateway_virtual_interface_group_id Ec2LocalGatewayRoute#local_gateway_virtual_interface_group_id}
  */
  readonly localGatewayVirtualInterfaceGroupId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route.html awscc_ec2_local_gateway_route}
*/
export class Ec2LocalGatewayRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_local_gateway_route";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route.html awscc_ec2_local_gateway_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2LocalGatewayRouteConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2LocalGatewayRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_local_gateway_route',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._localGatewayRouteTableId = config.localGatewayRouteTableId;
    this._localGatewayVirtualInterfaceGroupId = config.localGatewayVirtualInterfaceGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_cidr_block - computed: false, optional: false, required: true
  private _destinationCidrBlock: string;
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_gateway_route_table_id - computed: false, optional: false, required: true
  private _localGatewayRouteTableId: string;
  public get localGatewayRouteTableId() {
    return this.getStringAttribute('local_gateway_route_table_id');
  }
  public set localGatewayRouteTableId(value: string) {
    this._localGatewayRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localGatewayRouteTableIdInput() {
    return this._localGatewayRouteTableId
  }

  // local_gateway_virtual_interface_group_id - computed: false, optional: false, required: true
  private _localGatewayVirtualInterfaceGroupId: string;
  public get localGatewayVirtualInterfaceGroupId() {
    return this.getStringAttribute('local_gateway_virtual_interface_group_id');
  }
  public set localGatewayVirtualInterfaceGroupId(value: string) {
    this._localGatewayVirtualInterfaceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localGatewayVirtualInterfaceGroupIdInput() {
    return this._localGatewayVirtualInterfaceGroupId
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
      local_gateway_route_table_id: cdktf.stringToTerraform(this._localGatewayRouteTableId),
      local_gateway_virtual_interface_group_id: cdktf.stringToTerraform(this._localGatewayVirtualInterfaceGroupId),
    };
  }
}
