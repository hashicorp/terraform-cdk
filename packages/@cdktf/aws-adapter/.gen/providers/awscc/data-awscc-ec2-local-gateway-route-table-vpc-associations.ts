// https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_route_table_vpc_associations.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEc2LocalGatewayRouteTableVpcAssociationsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_route_table_vpc_associations.html awscc_ec2_local_gateway_route_table_vpc_associations}
*/
export class DataAwsccEc2LocalGatewayRouteTableVpcAssociations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_local_gateway_route_table_vpc_associations";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_route_table_vpc_associations.html awscc_ec2_local_gateway_route_table_vpc_associations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2LocalGatewayRouteTableVpcAssociationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2LocalGatewayRouteTableVpcAssociationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_local_gateway_route_table_vpc_associations',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
