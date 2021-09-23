import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2TransitGatewayMulticastDomainAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_domain_association.html#id DataAwsccEc2TransitGatewayMulticastDomainAssociation#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_domain_association.html awscc_ec2_transit_gateway_multicast_domain_association}
*/
export declare class DataAwsccEc2TransitGatewayMulticastDomainAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_domain_association.html awscc_ec2_transit_gateway_multicast_domain_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2TransitGatewayMulticastDomainAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayMulticastDomainAssociationConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get resourceId(): string;
    get resourceType(): string;
    get state(): string;
    get subnetId(): string;
    get transitGatewayAttachmentId(): string;
    get transitGatewayMulticastDomainId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
