import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2TransitGatewayVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_vpc_attachment.html#id DataAwsccEc2TransitGatewayVpcAttachment#id}
    */
    readonly id: string;
}
export declare class DataAwsccEc2TransitGatewayVpcAttachmentOptions extends cdktf.ComplexComputedList {
    get applianceModeSupport(): string;
    get dnsSupport(): string;
    get ipv6Support(): string;
}
export declare function dataAwsccEc2TransitGatewayVpcAttachmentOptionsToTerraform(struct?: DataAwsccEc2TransitGatewayVpcAttachmentOptions): any;
export declare class DataAwsccEc2TransitGatewayVpcAttachmentTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEc2TransitGatewayVpcAttachmentTagsToTerraform(struct?: DataAwsccEc2TransitGatewayVpcAttachmentTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_vpc_attachment.html awscc_ec2_transit_gateway_vpc_attachment}
*/
export declare class DataAwsccEc2TransitGatewayVpcAttachment extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_vpc_attachment.html awscc_ec2_transit_gateway_vpc_attachment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2TransitGatewayVpcAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayVpcAttachmentConfig);
    get addSubnetIds(): string[];
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get options(): any;
    get removeSubnetIds(): string[];
    get subnetIds(): string[];
    get tags(): any;
    get transitGatewayId(): string;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
