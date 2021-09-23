import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2EgressOnlyInternetGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ID of the VPC for which to create the egress-only internet gateway.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ec2_egress_only_internet_gateway.html#vpc_id Ec2EgressOnlyInternetGateway#vpc_id}
    */
    readonly vpcId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ec2_egress_only_internet_gateway.html awscc_ec2_egress_only_internet_gateway}
*/
export declare class Ec2EgressOnlyInternetGateway extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ec2_egress_only_internet_gateway.html awscc_ec2_egress_only_internet_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2EgressOnlyInternetGatewayConfig
    */
    constructor(scope: Construct, id: string, config: Ec2EgressOnlyInternetGatewayConfig);
    get id(): string;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
