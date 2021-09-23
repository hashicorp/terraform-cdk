import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2LocalGatewayRouteTableVpcAssociationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_route_table_vpc_associations.html awscc_ec2_local_gateway_route_table_vpc_associations}
*/
export declare class DataAwsccEc2LocalGatewayRouteTableVpcAssociations extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_route_table_vpc_associations.html awscc_ec2_local_gateway_route_table_vpc_associations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2LocalGatewayRouteTableVpcAssociationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEc2LocalGatewayRouteTableVpcAssociationsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
