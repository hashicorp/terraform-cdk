import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2LocalGatewayRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_route.html#id DataAwsccEc2LocalGatewayRoute#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_route.html awscc_ec2_local_gateway_route}
*/
export declare class DataAwsccEc2LocalGatewayRoute extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_route.html awscc_ec2_local_gateway_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2LocalGatewayRouteConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2LocalGatewayRouteConfig);
    get destinationCidrBlock(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get localGatewayRouteTableId(): string;
    get localGatewayVirtualInterfaceGroupId(): string;
    get state(): string;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
