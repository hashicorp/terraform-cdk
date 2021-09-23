import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2LocalGatewayRoutesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_routes.html awscc_ec2_local_gateway_routes}
*/
export declare class DataAwsccEc2LocalGatewayRoutes extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_local_gateway_routes.html awscc_ec2_local_gateway_routes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2LocalGatewayRoutesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEc2LocalGatewayRoutesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
