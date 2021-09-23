import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAthenaDataCatalogConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/athena_data_catalog.html#id DataAwsccAthenaDataCatalog#id}
    */
    readonly id: string;
}
export declare class DataAwsccAthenaDataCatalogTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccAthenaDataCatalogTagsToTerraform(struct?: DataAwsccAthenaDataCatalogTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/athena_data_catalog.html awscc_athena_data_catalog}
*/
export declare class DataAwsccAthenaDataCatalog extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/athena_data_catalog.html awscc_athena_data_catalog} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAthenaDataCatalogConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAthenaDataCatalogConfig);
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    parameters(key: string): string;
    get tags(): any;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
