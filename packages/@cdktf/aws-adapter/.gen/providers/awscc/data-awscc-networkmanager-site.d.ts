import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNetworkmanagerSiteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_site.html#id DataAwsccNetworkmanagerSite#id}
    */
    readonly id: string;
}
export declare class DataAwsccNetworkmanagerSiteLocation extends cdktf.ComplexComputedList {
    get address(): string;
    get latitude(): string;
    get longitude(): string;
}
export declare function dataAwsccNetworkmanagerSiteLocationToTerraform(struct?: DataAwsccNetworkmanagerSiteLocation): any;
export declare class DataAwsccNetworkmanagerSiteTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccNetworkmanagerSiteTagsToTerraform(struct?: DataAwsccNetworkmanagerSiteTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_site.html awscc_networkmanager_site}
*/
export declare class DataAwsccNetworkmanagerSite extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/networkmanager_site.html awscc_networkmanager_site} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNetworkmanagerSiteConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccNetworkmanagerSiteConfig);
    get description(): string;
    get globalNetworkId(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get location(): any;
    get siteArn(): string;
    get siteId(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
