import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerSiteConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the site.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#description NetworkmanagerSite#description}
    */
    readonly description?: string;
    /**
    * The ID of the global network.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#global_network_id NetworkmanagerSite#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * The location of the site
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#location NetworkmanagerSite#location}
    */
    readonly location?: NetworkmanagerSiteLocation;
    /**
    * The tags for the site.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#tags NetworkmanagerSite#tags}
    */
    readonly tags?: NetworkmanagerSiteTags[];
}
export interface NetworkmanagerSiteLocation {
    /**
    * The physical address.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#address NetworkmanagerSite#address}
    */
    readonly address?: string;
    /**
    * The latitude.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#latitude NetworkmanagerSite#latitude}
    */
    readonly latitude?: string;
    /**
    * The longitude.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#longitude NetworkmanagerSite#longitude}
    */
    readonly longitude?: string;
}
export declare function networkmanagerSiteLocationToTerraform(struct?: NetworkmanagerSiteLocation): any;
export interface NetworkmanagerSiteTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#key NetworkmanagerSite#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html#value NetworkmanagerSite#value}
    */
    readonly value?: string;
}
export declare function networkmanagerSiteTagsToTerraform(struct?: NetworkmanagerSiteTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html awscc_networkmanager_site}
*/
export declare class NetworkmanagerSite extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/networkmanager_site.html awscc_networkmanager_site} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerSiteConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerSiteConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _globalNetworkId;
    get globalNetworkId(): string;
    set globalNetworkId(value: string);
    get globalNetworkIdInput(): string;
    get id(): string;
    private _location?;
    get location(): NetworkmanagerSiteLocation;
    set location(value: NetworkmanagerSiteLocation);
    resetLocation(): void;
    get locationInput(): NetworkmanagerSiteLocation | undefined;
    get siteArn(): string;
    get siteId(): string;
    private _tags?;
    get tags(): NetworkmanagerSiteTags[];
    set tags(value: NetworkmanagerSiteTags[]);
    resetTags(): void;
    get tagsInput(): NetworkmanagerSiteTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
