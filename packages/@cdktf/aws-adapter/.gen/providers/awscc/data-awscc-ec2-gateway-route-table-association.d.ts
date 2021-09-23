import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2GatewayRouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_gateway_route_table_association.html#id DataAwsccEc2GatewayRouteTableAssociation#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_gateway_route_table_association.html awscc_ec2_gateway_route_table_association}
*/
export declare class DataAwsccEc2GatewayRouteTableAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_gateway_route_table_association.html awscc_ec2_gateway_route_table_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2GatewayRouteTableAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2GatewayRouteTableAssociationConfig);
    get associationId(): string;
    get gatewayId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get routeTableId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
