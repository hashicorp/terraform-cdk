import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2CarrierGatewaysConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_carrier_gateways.html awscc_ec2_carrier_gateways}
*/
export declare class DataAwsccEc2CarrierGateways extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_carrier_gateways.html awscc_ec2_carrier_gateways} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2CarrierGatewaysConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEc2CarrierGatewaysConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
