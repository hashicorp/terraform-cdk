import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2TransitGatewayMulticastGroupSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_group_source.html#id DataAwsccEc2TransitGatewayMulticastGroupSource#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_group_source.html awscc_ec2_transit_gateway_multicast_group_source}
*/
export declare class DataAwsccEc2TransitGatewayMulticastGroupSource extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_group_source.html awscc_ec2_transit_gateway_multicast_group_source} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2TransitGatewayMulticastGroupSourceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayMulticastGroupSourceConfig);
    get groupIpAddress(): string;
    get groupMember(): cdktf.IResolvable;
    get groupSource(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get memberType(): string;
    get networkInterfaceId(): string;
    get resourceId(): string;
    get resourceType(): string;
    get sourceType(): string;
    get subnetId(): string;
    get transitGatewayAttachmentId(): string;
    get transitGatewayMulticastDomainId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
