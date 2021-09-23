import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNetworkmanagerLinkAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_link_association.html#id DataAwsccNetworkmanagerLinkAssociation#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_link_association.html awscc_networkmanager_link_association}
*/
export declare class DataAwsccNetworkmanagerLinkAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_link_association.html awscc_networkmanager_link_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNetworkmanagerLinkAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccNetworkmanagerLinkAssociationConfig);
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
