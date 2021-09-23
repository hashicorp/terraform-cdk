import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrcontainersVirtualClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#container_provider EmrcontainersVirtualCluster#container_provider}
    */
    readonly containerProvider: EmrcontainersVirtualClusterContainerProvider;
    /**
    * Name of the virtual cluster.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#name EmrcontainersVirtualCluster#name}
    */
    readonly name: string;
    /**
    * An array of key-value pairs to apply to this virtual cluster.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#tags EmrcontainersVirtualCluster#tags}
    */
    readonly tags?: EmrcontainersVirtualClusterTags[];
}
export interface EmrcontainersVirtualClusterContainerProviderInfoEksInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#namespace EmrcontainersVirtualCluster#namespace}
    */
    readonly namespace: string;
}
export declare function emrcontainersVirtualClusterContainerProviderInfoEksInfoToTerraform(struct?: EmrcontainersVirtualClusterContainerProviderInfoEksInfo): any;
export interface EmrcontainersVirtualClusterContainerProviderInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#eks_info EmrcontainersVirtualCluster#eks_info}
    */
    readonly eksInfo: EmrcontainersVirtualClusterContainerProviderInfoEksInfo;
}
export declare function emrcontainersVirtualClusterContainerProviderInfoToTerraform(struct?: EmrcontainersVirtualClusterContainerProviderInfo): any;
export interface EmrcontainersVirtualClusterContainerProvider {
    /**
    * The ID of the container cluster
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#id EmrcontainersVirtualCluster#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#info EmrcontainersVirtualCluster#info}
    */
    readonly info: EmrcontainersVirtualClusterContainerProviderInfo;
    /**
    * The type of the container provider
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#type EmrcontainersVirtualCluster#type}
    */
    readonly type: string;
}
export declare function emrcontainersVirtualClusterContainerProviderToTerraform(struct?: EmrcontainersVirtualClusterContainerProvider): any;
export interface EmrcontainersVirtualClusterTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#key EmrcontainersVirtualCluster#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html#value EmrcontainersVirtualCluster#value}
    */
    readonly value: string;
}
export declare function emrcontainersVirtualClusterTagsToTerraform(struct?: EmrcontainersVirtualClusterTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html awscc_emrcontainers_virtual_cluster}
*/
export declare class EmrcontainersVirtualCluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/emrcontainers_virtual_cluster.html awscc_emrcontainers_virtual_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrcontainersVirtualClusterConfig
    */
    constructor(scope: Construct, id: string, config: EmrcontainersVirtualClusterConfig);
    get arn(): string;
    private _containerProvider;
    get containerProvider(): EmrcontainersVirtualClusterContainerProvider;
    set containerProvider(value: EmrcontainersVirtualClusterContainerProvider);
    get containerProviderInput(): EmrcontainersVirtualClusterContainerProvider;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _tags?;
    get tags(): EmrcontainersVirtualClusterTags[];
    set tags(value: EmrcontainersVirtualClusterTags[]);
    resetTags(): void;
    get tagsInput(): EmrcontainersVirtualClusterTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
