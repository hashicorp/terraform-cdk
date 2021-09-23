import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEc2TransitGatewayConnectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_connect.html#id DataAwsccEc2TransitGatewayConnect#id}
    */
    readonly id: string;
}
export declare class DataAwsccEc2TransitGatewayConnectOptions extends cdktf.ComplexComputedList {
    get protocol(): string;
}
export declare function dataAwsccEc2TransitGatewayConnectOptionsToTerraform(struct?: DataAwsccEc2TransitGatewayConnectOptions): any;
export declare class DataAwsccEc2TransitGatewayConnectTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEc2TransitGatewayConnectTagsToTerraform(struct?: DataAwsccEc2TransitGatewayConnectTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_connect.html awscc_ec2_transit_gateway_connect}
*/
export declare class DataAwsccEc2TransitGatewayConnect extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_connect.html awscc_ec2_transit_gateway_connect} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEc2TransitGatewayConnectConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayConnectConfig);
    get creationTime(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get options(): any;
    get state(): string;
    get tags(): any;
    get transitGatewayAttachmentId(): string;
    get transitGatewayId(): string;
    get transportTransitGatewayAttachmentId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
