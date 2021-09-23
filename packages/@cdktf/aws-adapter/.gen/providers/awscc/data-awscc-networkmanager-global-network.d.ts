import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNetworkmanagerGlobalNetworkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_global_network.html#id DataAwsccNetworkmanagerGlobalNetwork#id}
    */
    readonly id: string;
}
export declare class DataAwsccNetworkmanagerGlobalNetworkTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccNetworkmanagerGlobalNetworkTagsToTerraform(struct?: DataAwsccNetworkmanagerGlobalNetworkTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_global_network.html awscc_networkmanager_global_network}
*/
export declare class DataAwsccNetworkmanagerGlobalNetwork extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_global_network.html awscc_networkmanager_global_network} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNetworkmanagerGlobalNetworkConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccNetworkmanagerGlobalNetworkConfig);
    get arn(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
