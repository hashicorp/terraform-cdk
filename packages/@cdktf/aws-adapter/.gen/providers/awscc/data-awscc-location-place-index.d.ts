import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLocationPlaceIndexConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/location_place_index.html#id DataAwsccLocationPlaceIndex#id}
    */
    readonly id: string;
}
export declare class DataAwsccLocationPlaceIndexDataSourceConfiguration extends cdktf.ComplexComputedList {
    get intendedUse(): string;
}
export declare function dataAwsccLocationPlaceIndexDataSourceConfigurationToTerraform(struct?: DataAwsccLocationPlaceIndexDataSourceConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/location_place_index.html awscc_location_place_index}
*/
export declare class DataAwsccLocationPlaceIndex extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/location_place_index.html awscc_location_place_index} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLocationPlaceIndexConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLocationPlaceIndexConfig);
    get arn(): string;
    get createTime(): string;
    get dataSource(): string;
    get dataSourceConfiguration(): any;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get indexArn(): string;
    get indexName(): string;
    get pricingPlan(): string;
    get updateTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
