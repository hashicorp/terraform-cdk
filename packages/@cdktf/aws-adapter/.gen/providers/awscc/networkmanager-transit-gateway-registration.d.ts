import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerTransitGatewayRegistrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ID of the global network.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_transit_gateway_registration.html#global_network_id NetworkmanagerTransitGatewayRegistration#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * The Amazon Resource Name (ARN) of the transit gateway.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_transit_gateway_registration.html#transit_gateway_arn NetworkmanagerTransitGatewayRegistration#transit_gateway_arn}
    */
    readonly transitGatewayArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_transit_gateway_registration.html awscc_networkmanager_transit_gateway_registration}
*/
export declare class NetworkmanagerTransitGatewayRegistration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_transit_gateway_registration.html awscc_networkmanager_transit_gateway_registration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerTransitGatewayRegistrationConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerTransitGatewayRegistrationConfig);
    private _globalNetworkId;
    get globalNetworkId(): string;
    set globalNetworkId(value: string);
    get globalNetworkIdInput(): string;
    get id(): string;
    private _transitGatewayArn;
    get transitGatewayArn(): string;
    set transitGatewayArn(value: string);
    get transitGatewayArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
