import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerGlobalNetworkConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the global network.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_global_network.html#description NetworkmanagerGlobalNetwork#description}
    */
    readonly description?: string;
    /**
    * The tags for the global network.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_global_network.html#tags NetworkmanagerGlobalNetwork#tags}
    */
    readonly tags?: NetworkmanagerGlobalNetworkTags[];
}
export interface NetworkmanagerGlobalNetworkTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_global_network.html#key NetworkmanagerGlobalNetwork#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_global_network.html#value NetworkmanagerGlobalNetwork#value}
    */
    readonly value?: string;
}
export declare function networkmanagerGlobalNetworkTagsToTerraform(struct?: NetworkmanagerGlobalNetworkTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_global_network.html awscc_networkmanager_global_network}
*/
export declare class NetworkmanagerGlobalNetwork extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_global_network.html awscc_networkmanager_global_network} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerGlobalNetworkConfig = {}
    */
    constructor(scope: Construct, id: string, config?: NetworkmanagerGlobalNetworkConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _tags?;
    get tags(): NetworkmanagerGlobalNetworkTags[];
    set tags(value: NetworkmanagerGlobalNetworkTags[]);
    resetTags(): void;
    get tagsInput(): NetworkmanagerGlobalNetworkTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
