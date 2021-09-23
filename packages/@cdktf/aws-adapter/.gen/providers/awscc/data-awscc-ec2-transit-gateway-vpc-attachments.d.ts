import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2TransitGatewayVpcAttachmentsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_vpc_attachments.html awscc_ec2_transit_gateway_vpc_attachments}
*/
export declare class DataAwsccEc2TransitGatewayVpcAttachments extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_vpc_attachments.html awscc_ec2_transit_gateway_vpc_attachments} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2TransitGatewayVpcAttachmentsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccEc2TransitGatewayVpcAttachmentsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
