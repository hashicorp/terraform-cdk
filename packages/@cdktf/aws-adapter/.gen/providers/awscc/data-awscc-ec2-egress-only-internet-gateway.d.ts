import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2EgressOnlyInternetGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_egress_only_internet_gateway.html#id DataAwsccEc2EgressOnlyInternetGateway#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_egress_only_internet_gateway.html awscc_ec2_egress_only_internet_gateway}
*/
export declare class DataAwsccEc2EgressOnlyInternetGateway extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_egress_only_internet_gateway.html awscc_ec2_egress_only_internet_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2EgressOnlyInternetGatewayConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2EgressOnlyInternetGatewayConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
