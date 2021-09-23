import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerLinkAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The ID of the device
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_link_association.html#device_id NetworkmanagerLinkAssociation#device_id}
    */
    readonly deviceId: string;
    /**
    * The ID of the global network.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_link_association.html#global_network_id NetworkmanagerLinkAssociation#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * The ID of the link
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_link_association.html#link_id NetworkmanagerLinkAssociation#link_id}
    */
    readonly linkId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_link_association.html awscc_networkmanager_link_association}
*/
export declare class NetworkmanagerLinkAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_link_association.html awscc_networkmanager_link_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerLinkAssociationConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerLinkAssociationConfig);
    private _deviceId;
    get deviceId(): string;
    set deviceId(value: string);
    get deviceIdInput(): string;
    private _globalNetworkId;
    get globalNetworkId(): string;
    set globalNetworkId(value: string);
    get globalNetworkIdInput(): string;
    get id(): string;
    private _linkId;
    get linkId(): string;
    set linkId(value: string);
    get linkIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
