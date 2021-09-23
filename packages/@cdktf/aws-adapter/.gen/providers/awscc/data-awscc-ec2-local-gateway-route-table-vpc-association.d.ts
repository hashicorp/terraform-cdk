import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_route_table_vpc_association.html#id DataAwsccEc2LocalGatewayRouteTableVpcAssociation#id}
    */
    readonly id: string;
}
export declare class DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsToTerraform(struct?: DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_route_table_vpc_association.html awscc_ec2_local_gateway_route_table_vpc_association}
*/
export declare class DataAwsccEc2LocalGatewayRouteTableVpcAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_route_table_vpc_association.html awscc_ec2_local_gateway_route_table_vpc_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get localGatewayId(): string;
    get localGatewayRouteTableId(): string;
    get localGatewayRouteTableVpcAssociationId(): string;
    get state(): string;
    get tags(): any;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
