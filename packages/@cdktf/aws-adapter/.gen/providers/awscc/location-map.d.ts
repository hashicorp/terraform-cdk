import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LocationMapConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_map.html#configuration LocationMap#configuration}
    */
    readonly configuration: LocationMapConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_map.html#description LocationMap#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_map.html#map_name LocationMap#map_name}
    */
    readonly mapName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_map.html#pricing_plan LocationMap#pricing_plan}
    */
    readonly pricingPlan: string;
}
export interface LocationMapConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_map.html#style LocationMap#style}
    */
    readonly style: string;
}
export declare function locationMapConfigurationToTerraform(struct?: LocationMapConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/location_map.html awscc_location_map}
*/
export declare class LocationMap extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/location_map.html awscc_location_map} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LocationMapConfig
    */
    constructor(scope: Construct, id: string, config: LocationMapConfig);
    get arn(): string;
    private _configuration;
    get configuration(): LocationMapConfiguration;
    set configuration(value: LocationMapConfiguration);
    get configurationInput(): LocationMapConfiguration;
    get createTime(): string;
    get dataSource(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get mapArn(): string;
    private _mapName;
    get mapName(): string;
    set mapName(value: string);
    get mapNameInput(): string;
    private _pricingPlan;
    get pricingPlan(): string;
    set pricingPlan(value: string);
    get pricingPlanInput(): string;
    get updateTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
