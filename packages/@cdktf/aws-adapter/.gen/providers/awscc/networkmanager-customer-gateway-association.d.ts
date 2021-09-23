import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerCustomerGatewayAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the customer gateway.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_customer_gateway_association.html#customer_gateway_arn NetworkmanagerCustomerGatewayAssociation#customer_gateway_arn}
    */
    readonly customerGatewayArn: string;
    /**
    * The ID of the device
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_customer_gateway_association.html#device_id NetworkmanagerCustomerGatewayAssociation#device_id}
    */
    readonly deviceId: string;
    /**
    * The ID of the global network.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_customer_gateway_association.html#global_network_id NetworkmanagerCustomerGatewayAssociation#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * The ID of the link
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_customer_gateway_association.html#link_id NetworkmanagerCustomerGatewayAssociation#link_id}
    */
    readonly linkId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_customer_gateway_association.html awscc_networkmanager_customer_gateway_association}
*/
export declare class NetworkmanagerCustomerGatewayAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_customer_gateway_association.html awscc_networkmanager_customer_gateway_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerCustomerGatewayAssociationConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerCustomerGatewayAssociationConfig);
    private _customerGatewayArn;
    get customerGatewayArn(): string;
    set customerGatewayArn(value: string);
    get customerGatewayArnInput(): string;
    private _deviceId;
    get deviceId(): string;
    set deviceId(value: string);
    get deviceIdInput(): string;
    private _globalNetworkId;
    get globalNetworkId(): string;
    set globalNetworkId(value: string);
    get globalNetworkIdInput(): string;
    get id(): string;
    private _linkId?;
    get linkId(): string;
    set linkId(value: string);
    resetLinkId(): void;
    get linkIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
