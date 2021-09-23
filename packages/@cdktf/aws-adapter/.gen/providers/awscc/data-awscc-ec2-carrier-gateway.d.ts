import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2CarrierGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_carrier_gateway.html#id DataAwsccEc2CarrierGateway#id}
    */
    readonly id: string;
}
export declare class DataAwsccEc2CarrierGatewayTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEc2CarrierGatewayTagsToTerraform(struct?: DataAwsccEc2CarrierGatewayTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_carrier_gateway.html awscc_ec2_carrier_gateway}
*/
export declare class DataAwsccEc2CarrierGateway extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_carrier_gateway.html awscc_ec2_carrier_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2CarrierGatewayConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2CarrierGatewayConfig);
    get carrierGatewayId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get ownerId(): string;
    get state(): string;
    get tags(): any;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
