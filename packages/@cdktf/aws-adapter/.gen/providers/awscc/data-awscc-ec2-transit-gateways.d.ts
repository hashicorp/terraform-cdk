import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2TransitGatewaysConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateways.html awscc_ec2_transit_gateways}
*/
export declare class DataAwsccEc2TransitGateways extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateways.html awscc_ec2_transit_gateways} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2TransitGatewaysConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEc2TransitGatewaysConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
