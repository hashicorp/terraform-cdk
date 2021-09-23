import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNetworkmanagerTransitGatewayRegistrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_transit_gateway_registration.html#id DataAwsccNetworkmanagerTransitGatewayRegistration#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_transit_gateway_registration.html awscc_networkmanager_transit_gateway_registration}
*/
export declare class DataAwsccNetworkmanagerTransitGatewayRegistration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_transit_gateway_registration.html awscc_networkmanager_transit_gateway_registration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNetworkmanagerTransitGatewayRegistrationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccNetworkmanagerTransitGatewayRegistrationConfig);
    get globalNetworkId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get transitGatewayArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
