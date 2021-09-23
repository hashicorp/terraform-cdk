import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDevopsguruResourceCollectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/devopsguru_resource_collection.html#id DataAwsccDevopsguruResourceCollection#id}
    */
    readonly id: string;
}
export declare class DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation extends cdktf.ComplexComputedList {
    get stackNames(): string[];
}
export declare function dataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationToTerraform(struct?: DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation): any;
export declare class DataAwsccDevopsguruResourceCollectionResourceCollectionFilter extends cdktf.ComplexComputedList {
    get cloudformation(): any;
}
export declare function dataAwsccDevopsguruResourceCollectionResourceCollectionFilterToTerraform(struct?: DataAwsccDevopsguruResourceCollectionResourceCollectionFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/devopsguru_resource_collection.html awscc_devopsguru_resource_collection}
*/
export declare class DataAwsccDevopsguruResourceCollection extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/devopsguru_resource_collection.html awscc_devopsguru_resource_collection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDevopsguruResourceCollectionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDevopsguruResourceCollectionConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get resourceCollectionFilter(): any;
    get resourceCollectionType(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
