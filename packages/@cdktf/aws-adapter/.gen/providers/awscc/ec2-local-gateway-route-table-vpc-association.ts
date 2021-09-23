// https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route_table_vpc_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2LocalGatewayRouteTableVpcAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the local gateway route table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route_table_vpc_association.html#local_gateway_route_table_id Ec2LocalGatewayRouteTableVpcAssociation#local_gateway_route_table_id}
  */
  readonly localGatewayRouteTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route_table_vpc_association.html#tags Ec2LocalGatewayRouteTableVpcAssociation#tags}
  */
  readonly tags?: Ec2LocalGatewayRouteTableVpcAssociationTags[];
  /**
  * The ID of the VPC.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route_table_vpc_association.html#vpc_id Ec2LocalGatewayRouteTableVpcAssociation#vpc_id}
  */
  readonly vpcId: string;
}
export interface Ec2LocalGatewayRouteTableVpcAssociationTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route_table_vpc_association.html#key Ec2LocalGatewayRouteTableVpcAssociation#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route_table_vpc_association.html#value Ec2LocalGatewayRouteTableVpcAssociation#value}
  */
  readonly value?: string;
}

export function ec2LocalGatewayRouteTableVpcAssociationTagsToTerraform(struct?: Ec2LocalGatewayRouteTableVpcAssociationTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route_table_vpc_association.html awscc_ec2_local_gateway_route_table_vpc_association}
*/
export class Ec2LocalGatewayRouteTableVpcAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_local_gateway_route_table_vpc_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route_table_vpc_association.html awscc_ec2_local_gateway_route_table_vpc_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2LocalGatewayRouteTableVpcAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2LocalGatewayRouteTableVpcAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_local_gateway_route_table_vpc_association',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._localGatewayRouteTableId = config.localGatewayRouteTableId;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_gateway_id - computed: true, optional: false, required: false
  public get localGatewayId() {
    return this.getStringAttribute('local_gateway_id');
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

  // local_gateway_route_table_vpc_association_id - computed: true, optional: false, required: false
  public get localGatewayRouteTableVpcAssociationId() {
    return this.getStringAttribute('local_gateway_route_table_vpc_association_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: Ec2LocalGatewayRouteTableVpcAssociationTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: Ec2LocalGatewayRouteTableVpcAssociationTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      local_gateway_route_table_id: cdktf.stringToTerraform(this._localGatewayRouteTableId),
      tags: cdktf.listMapper(ec2LocalGatewayRouteTableVpcAssociationTagsToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }
}
