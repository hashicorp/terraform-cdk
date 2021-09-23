import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNetworkmanagerGlobalNetworksConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_global_networks.html awscc_networkmanager_global_networks}
*/
export declare class DataAwsccNetworkmanagerGlobalNetworks extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_global_networks.html awscc_networkmanager_global_networks} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNetworkmanagerGlobalNetworksConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccNetworkmanagerGlobalNetworksConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
