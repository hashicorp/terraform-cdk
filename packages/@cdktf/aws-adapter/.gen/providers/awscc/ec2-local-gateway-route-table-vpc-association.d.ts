import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function ec2LocalGatewayRouteTableVpcAssociationTagsToTerraform(struct?: Ec2LocalGatewayRouteTableVpcAssociationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route_table_vpc_association.html awscc_ec2_local_gateway_route_table_vpc_association}
*/
export declare class Ec2LocalGatewayRouteTableVpcAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_local_gateway_route_table_vpc_association.html awscc_ec2_local_gateway_route_table_vpc_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2LocalGatewayRouteTableVpcAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Ec2LocalGatewayRouteTableVpcAssociationConfig);
    get id(): string;
    get localGatewayId(): string;
    private _localGatewayRouteTableId;
    get localGatewayRouteTableId(): string;
    set localGatewayRouteTableId(value: string);
    get localGatewayRouteTableIdInput(): string;
    get localGatewayRouteTableVpcAssociationId(): string;
    get state(): string;
    private _tags?;
    get tags(): Ec2LocalGatewayRouteTableVpcAssociationTags[];
    set tags(value: Ec2LocalGatewayRouteTableVpcAssociationTags[]);
    resetTags(): void;
    get tagsInput(): Ec2LocalGatewayRouteTableVpcAssociationTags[] | undefined;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
