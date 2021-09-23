import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2TransitGatewayMulticastDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_domain.html#id DataAwsccEc2TransitGatewayMulticastDomain#id}
    */
    readonly id: string;
}
export declare class DataAwsccEc2TransitGatewayMulticastDomainOptions extends cdktf.ComplexComputedList {
    get autoAcceptSharedAssociations(): string;
    get igmpv2Support(): string;
    get staticSourcesSupport(): string;
}
export declare function dataAwsccEc2TransitGatewayMulticastDomainOptionsToTerraform(struct?: DataAwsccEc2TransitGatewayMulticastDomainOptions): any;
export declare class DataAwsccEc2TransitGatewayMulticastDomainTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEc2TransitGatewayMulticastDomainTagsToTerraform(struct?: DataAwsccEc2TransitGatewayMulticastDomainTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_domain.html awscc_ec2_transit_gateway_multicast_domain}
*/
export declare class DataAwsccEc2TransitGatewayMulticastDomain extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_multicast_domain.html awscc_ec2_transit_gateway_multicast_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2TransitGatewayMulticastDomainConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayMulticastDomainConfig);
    get creationTime(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get options(): any;
    get state(): string;
    get tags(): any;
    get transitGatewayId(): string;
    get transitGatewayMulticastDomainArn(): string;
    get transitGatewayMulticastDomainId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
