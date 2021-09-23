// https://www.terraform.io/docs/providers/awscc/r/ec2_gateway_route_table_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2GatewayRouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_gateway_route_table_association.html#gateway_id Ec2GatewayRouteTableAssociation#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * The ID of the route table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_gateway_route_table_association.html#route_table_id Ec2GatewayRouteTableAssociation#route_table_id}
  */
  readonly routeTableId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_gateway_route_table_association.html awscc_ec2_gateway_route_table_association}
*/
export class Ec2GatewayRouteTableAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_gateway_route_table_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_gateway_route_table_association.html awscc_ec2_gateway_route_table_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2GatewayRouteTableAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2GatewayRouteTableAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_gateway_route_table_association',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._gatewayId = config.gatewayId;
    this._routeTableId = config.routeTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId: string;
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // route_table_id - computed: false, optional: false, required: true
  private _routeTableId: string;
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
    };
  }
}
