import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIotwirelessWirelessGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_gateway.html#id DataAwsccIotwirelessWirelessGateway#id}
    */
    readonly id: string;
}
export declare class DataAwsccIotwirelessWirelessGatewayLoRaWan extends cdktf.ComplexComputedList {
    get gatewayEui(): string;
    get rfRegion(): string;
}
export declare function dataAwsccIotwirelessWirelessGatewayLoRaWanToTerraform(struct?: DataAwsccIotwirelessWirelessGatewayLoRaWan): any;
export declare class DataAwsccIotwirelessWirelessGatewayTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIotwirelessWirelessGatewayTagsToTerraform(struct?: DataAwsccIotwirelessWirelessGatewayTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_gateway.html awscc_iotwireless_wireless_gateway}
*/
export declare class DataAwsccIotwirelessWirelessGateway extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotwireless_wireless_gateway.html awscc_iotwireless_wireless_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIotwirelessWirelessGatewayConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIotwirelessWirelessGatewayConfig);
    get arn(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastUplinkReceivedAt(): string;
    get loRaWan(): any;
    get name(): string;
    get tags(): any;
    get thingArn(): string;
    get thingName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
