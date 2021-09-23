import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEmrcontainersVirtualClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/emrcontainers_virtual_cluster.html#id DataAwsccEmrcontainersVirtualCluster#id}
    */
    readonly id: string;
}
export declare class DataAwsccEmrcontainersVirtualClusterContainerProviderInfoEksInfo extends cdktf.ComplexComputedList {
    get namespace(): string;
}
export declare function dataAwsccEmrcontainersVirtualClusterContainerProviderInfoEksInfoToTerraform(struct?: DataAwsccEmrcontainersVirtualClusterContainerProviderInfoEksInfo): any;
export declare class DataAwsccEmrcontainersVirtualClusterContainerProviderInfo extends cdktf.ComplexComputedList {
    get eksInfo(): any;
}
export declare function dataAwsccEmrcontainersVirtualClusterContainerProviderInfoToTerraform(struct?: DataAwsccEmrcontainersVirtualClusterContainerProviderInfo): any;
export declare class DataAwsccEmrcontainersVirtualClusterContainerProvider extends cdktf.ComplexComputedList {
    get id(): string;
    get info(): any;
    get type(): string;
}
export declare function dataAwsccEmrcontainersVirtualClusterContainerProviderToTerraform(struct?: DataAwsccEmrcontainersVirtualClusterContainerProvider): any;
export declare class DataAwsccEmrcontainersVirtualClusterTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccEmrcontainersVirtualClusterTagsToTerraform(struct?: DataAwsccEmrcontainersVirtualClusterTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/emrcontainers_virtual_cluster.html awscc_emrcontainers_virtual_cluster}
*/
export declare class DataAwsccEmrcontainersVirtualCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/emrcontainers_virtual_cluster.html awscc_emrcontainers_virtual_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEmrcontainersVirtualClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEmrcontainersVirtualClusterConfig);
    get arn(): string;
    get containerProvider(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
