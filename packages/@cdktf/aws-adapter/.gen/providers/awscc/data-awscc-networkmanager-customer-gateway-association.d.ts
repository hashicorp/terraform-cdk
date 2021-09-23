import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNetworkmanagerCustomerGatewayAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_customer_gateway_association.html#id DataAwsccNetworkmanagerCustomerGatewayAssociation#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_customer_gateway_association.html awscc_networkmanager_customer_gateway_association}
*/
export declare class DataAwsccNetworkmanagerCustomerGatewayAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_customer_gateway_association.html awscc_networkmanager_customer_gateway_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNetworkmanagerCustomerGatewayAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccNetworkmanagerCustomerGatewayAssociationConfig);
    get customerGatewayArn(): string;
    get deviceId(): string;
    get globalNetworkId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get linkId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
