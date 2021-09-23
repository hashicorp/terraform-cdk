import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class Ec2LocalGatewayRoute extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route.html awscc_ec2_local_gateway_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2LocalGatewayRouteConfig
    */
    constructor(scope: Construct, id: string, config: Ec2LocalGatewayRouteConfig);
    private _destinationCidrBlock;
    get destinationCidrBlock(): string;
    set destinationCidrBlock(value: string);
    get destinationCidrBlockInput(): string;
    get id(): string;
    private _localGatewayRouteTableId;
    get localGatewayRouteTableId(): string;
    set localGatewayRouteTableId(value: string);
    get localGatewayRouteTableIdInput(): string;
    private _localGatewayVirtualInterfaceGroupId;
    get localGatewayVirtualInterfaceGroupId(): string;
    set localGatewayVirtualInterfaceGroupId(value: string);
    get localGatewayVirtualInterfaceGroupIdInput(): string;
    get state(): string;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
