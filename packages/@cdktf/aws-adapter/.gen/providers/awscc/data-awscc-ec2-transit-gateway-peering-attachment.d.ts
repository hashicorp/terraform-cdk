import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2TransitGatewayPeeringAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_peering_attachment.html#id DataAwsccEc2TransitGatewayPeeringAttachment#id}
    */
    readonly id: string;
}
export declare class DataAwsccEc2TransitGatewayPeeringAttachmentStatus extends cdktf.ComplexComputedList {
    get code(): string;
    get message(): string;
}
export declare function dataAwsccEc2TransitGatewayPeeringAttachmentStatusToTerraform(struct?: DataAwsccEc2TransitGatewayPeeringAttachmentStatus): any;
export declare class DataAwsccEc2TransitGatewayPeeringAttachmentTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEc2TransitGatewayPeeringAttachmentTagsToTerraform(struct?: DataAwsccEc2TransitGatewayPeeringAttachmentTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_peering_attachment.html awscc_ec2_transit_gateway_peering_attachment}
*/
export declare class DataAwsccEc2TransitGatewayPeeringAttachment extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_peering_attachment.html awscc_ec2_transit_gateway_peering_attachment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2TransitGatewayPeeringAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayPeeringAttachmentConfig);
    get creationTime(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get peerAccountId(): string;
    get peerRegion(): string;
    get peerTransitGatewayId(): string;
    get state(): string;
    get status(): any;
    get tags(): any;
    get transitGatewayAttachmentId(): string;
    get transitGatewayId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
