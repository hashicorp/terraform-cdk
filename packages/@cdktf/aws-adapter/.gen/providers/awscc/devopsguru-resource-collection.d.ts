import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DevopsguruResourceCollectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_resource_collection.html#resource_collection_filter DevopsguruResourceCollection#resource_collection_filter}
    */
    readonly resourceCollectionFilter: DevopsguruResourceCollectionResourceCollectionFilter;
}
export interface DevopsguruResourceCollectionResourceCollectionFilterCloudformation {
    /**
    * An array of CloudFormation stack names.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_resource_collection.html#stack_names DevopsguruResourceCollection#stack_names}
    */
    readonly stackNames?: string[];
}
export declare function devopsguruResourceCollectionResourceCollectionFilterCloudformationToTerraform(struct?: DevopsguruResourceCollectionResourceCollectionFilterCloudformation): any;
export interface DevopsguruResourceCollectionResourceCollectionFilter {
    /**
    * CloudFormation resource for DevOps Guru to monitor
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_resource_collection.html#cloudformation DevopsguruResourceCollection#cloudformation}
    */
    readonly cloudformation?: DevopsguruResourceCollectionResourceCollectionFilterCloudformation;
}
export declare function devopsguruResourceCollectionResourceCollectionFilterToTerraform(struct?: DevopsguruResourceCollectionResourceCollectionFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_resource_collection.html awscc_devopsguru_resource_collection}
*/
export declare class DevopsguruResourceCollection extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_resource_collection.html awscc_devopsguru_resource_collection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DevopsguruResourceCollectionConfig
    */
    constructor(scope: Construct, id: string, config: DevopsguruResourceCollectionConfig);
    get id(): string;
    private _resourceCollectionFilter;
    get resourceCollectionFilter(): DevopsguruResourceCollectionResourceCollectionFilter;
    set resourceCollectionFilter(value: DevopsguruResourceCollectionResourceCollectionFilter);
    get resourceCollectionFilterInput(): DevopsguruResourceCollectionResourceCollectionFilter;
    get resourceCollectionType(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
