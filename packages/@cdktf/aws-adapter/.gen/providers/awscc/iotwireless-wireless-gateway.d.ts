import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotwirelessWirelessGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Description of Wireless Gateway.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#description IotwirelessWirelessGateway#description}
    */
    readonly description?: string;
    /**
    * The date and time when the most recent uplink was received.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#last_uplink_received_at IotwirelessWirelessGateway#last_uplink_received_at}
    */
    readonly lastUplinkReceivedAt?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#lo_ra_wan IotwirelessWirelessGateway#lo_ra_wan}
    */
    readonly loRaWan: IotwirelessWirelessGatewayLoRaWan;
    /**
    * Name of Wireless Gateway.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#name IotwirelessWirelessGateway#name}
    */
    readonly name?: string;
    /**
    * A list of key-value pairs that contain metadata for the gateway.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#tags IotwirelessWirelessGateway#tags}
    */
    readonly tags?: IotwirelessWirelessGatewayTags[];
    /**
    * Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#thing_arn IotwirelessWirelessGateway#thing_arn}
    */
    readonly thingArn?: string;
}
export interface IotwirelessWirelessGatewayLoRaWan {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#gateway_eui IotwirelessWirelessGateway#gateway_eui}
    */
    readonly gatewayEui: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#rf_region IotwirelessWirelessGateway#rf_region}
    */
    readonly rfRegion: string;
}
export declare function iotwirelessWirelessGatewayLoRaWanToTerraform(struct?: IotwirelessWirelessGatewayLoRaWan): any;
export interface IotwirelessWirelessGatewayTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#key IotwirelessWirelessGateway#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html#value IotwirelessWirelessGateway#value}
    */
    readonly value?: string;
}
export declare function iotwirelessWirelessGatewayTagsToTerraform(struct?: IotwirelessWirelessGatewayTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html awscc_iotwireless_wireless_gateway}
*/
export declare class IotwirelessWirelessGateway extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotwireless_wireless_gateway.html awscc_iotwireless_wireless_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotwirelessWirelessGatewayConfig
    */
    constructor(scope: Construct, id: string, config: IotwirelessWirelessGatewayConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _lastUplinkReceivedAt?;
    get lastUplinkReceivedAt(): string;
    set lastUplinkReceivedAt(value: string);
    resetLastUplinkReceivedAt(): void;
    get lastUplinkReceivedAtInput(): string | undefined;
    private _loRaWan;
    get loRaWan(): IotwirelessWirelessGatewayLoRaWan;
    set loRaWan(value: IotwirelessWirelessGatewayLoRaWan);
    get loRaWanInput(): IotwirelessWirelessGatewayLoRaWan;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _tags?;
    get tags(): IotwirelessWirelessGatewayTags[];
    set tags(value: IotwirelessWirelessGatewayTags[]);
    resetTags(): void;
    get tagsInput(): IotwirelessWirelessGatewayTags[] | undefined;
    private _thingArn?;
    get thingArn(): string;
    set thingArn(value: string);
    resetThingArn(): void;
    get thingArnInput(): string | undefined;
    get thingName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
