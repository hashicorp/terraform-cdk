import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class Ec2GatewayRouteTableAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_gateway_route_table_association.html awscc_ec2_gateway_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2GatewayRouteTableAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Ec2GatewayRouteTableAssociationConfig);
    get associationId(): string;
    private _gatewayId;
    get gatewayId(): string;
    set gatewayId(value: string);
    get gatewayIdInput(): string;
    get id(): string;
    private _routeTableId;
    get routeTableId(): string;
    set routeTableId(value: string);
    get routeTableIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
