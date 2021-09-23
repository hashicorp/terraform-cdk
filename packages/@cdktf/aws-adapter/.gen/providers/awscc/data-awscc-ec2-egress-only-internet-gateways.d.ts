import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2EgressOnlyInternetGatewaysConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_egress_only_internet_gateways.html awscc_ec2_egress_only_internet_gateways}
*/
export declare class DataAwsccEc2EgressOnlyInternetGateways extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_egress_only_internet_gateways.html awscc_ec2_egress_only_internet_gateways} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2EgressOnlyInternetGatewaysConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEc2EgressOnlyInternetGatewaysConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
