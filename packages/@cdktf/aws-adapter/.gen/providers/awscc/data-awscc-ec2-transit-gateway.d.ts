import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2TransitGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway.html#id DataAwsccEc2TransitGateway#id}
    */
    readonly id: string;
}
export declare class DataAwsccEc2TransitGatewayTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEc2TransitGatewayTagsToTerraform(struct?: DataAwsccEc2TransitGatewayTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway.html awscc_ec2_transit_gateway}
*/
export declare class DataAwsccEc2TransitGateway extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway.html awscc_ec2_transit_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2TransitGatewayConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayConfig);
    get amazonSideAsn(): number;
    get associationDefaultRouteTableId(): string;
    get autoAcceptSharedAttachments(): string;
    get defaultRouteTableAssociation(): string;
    get defaultRouteTablePropagation(): string;
    get description(): string;
    get dnsSupport(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get multicastSupport(): string;
    get propagationDefaultRouteTableId(): string;
    get tags(): any;
    get transitGatewayCidrBlocks(): string[];
    get vpnEcmpSupport(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
