import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LocationPlaceIndexConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html#data_source LocationPlaceIndex#data_source}
    */
    readonly dataSource: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html#data_source_configuration LocationPlaceIndex#data_source_configuration}
    */
    readonly dataSourceConfiguration?: LocationPlaceIndexDataSourceConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html#description LocationPlaceIndex#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html#index_name LocationPlaceIndex#index_name}
    */
    readonly indexName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html#pricing_plan LocationPlaceIndex#pricing_plan}
    */
    readonly pricingPlan: string;
}
export interface LocationPlaceIndexDataSourceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html#intended_use LocationPlaceIndex#intended_use}
    */
    readonly intendedUse?: string;
}
export declare function locationPlaceIndexDataSourceConfigurationToTerraform(struct?: LocationPlaceIndexDataSourceConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html awscc_location_place_index}
*/
export declare class LocationPlaceIndex extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/location_place_index.html awscc_location_place_index} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LocationPlaceIndexConfig
    */
    constructor(scope: Construct, id: string, config: LocationPlaceIndexConfig);
    get arn(): string;
    get createTime(): string;
    private _dataSource;
    get dataSource(): string;
    set dataSource(value: string);
    get dataSourceInput(): string;
    private _dataSourceConfiguration?;
    get dataSourceConfiguration(): LocationPlaceIndexDataSourceConfiguration;
    set dataSourceConfiguration(value: LocationPlaceIndexDataSourceConfiguration);
    resetDataSourceConfiguration(): void;
    get dataSourceConfigurationInput(): LocationPlaceIndexDataSourceConfiguration | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get indexArn(): string;
    private _indexName;
    get indexName(): string;
    set indexName(value: string);
    get indexNameInput(): string;
    private _pricingPlan;
    get pricingPlan(): string;
    set pricingPlan(value: string);
    get pricingPlanInput(): string;
    get updateTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
