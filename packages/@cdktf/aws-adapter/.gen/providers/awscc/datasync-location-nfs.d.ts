import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationNfsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The NFS mount options that DataSync can use to mount your NFS share.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_nfs.html#mount_options DatasyncLocationNfs#mount_options}
    */
    readonly mountOptions?: DatasyncLocationNfsMountOptions;
    /**
    * Contains a list of Amazon Resource Names (ARNs) of agents that are used to connect an NFS server.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_nfs.html#on_prem_config DatasyncLocationNfs#on_prem_config}
    */
    readonly onPremConfig: DatasyncLocationNfsOnPremConfig;
    /**
    * The name of the NFS server. This value is the IP address or DNS name of the NFS server.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_nfs.html#server_hostname DatasyncLocationNfs#server_hostname}
    */
    readonly serverHostname: string;
    /**
    * The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_nfs.html#subdirectory DatasyncLocationNfs#subdirectory}
    */
    readonly subdirectory: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_nfs.html#tags DatasyncLocationNfs#tags}
    */
    readonly tags?: DatasyncLocationNfsTags[];
}
export interface DatasyncLocationNfsMountOptions {
    /**
    * The specific NFS version that you want DataSync to use to mount your NFS share.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_nfs.html#version DatasyncLocationNfs#version}
    */
    readonly version?: string;
}
export declare function datasyncLocationNfsMountOptionsToTerraform(struct?: DatasyncLocationNfsMountOptions): any;
export interface DatasyncLocationNfsOnPremConfig {
    /**
    * ARN(s) of the agent(s) to use for an NFS location.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_nfs.html#agent_arns DatasyncLocationNfs#agent_arns}
    */
    readonly agentArns: string[];
}
export declare function datasyncLocationNfsOnPremConfigToTerraform(struct?: DatasyncLocationNfsOnPremConfig): any;
export interface DatasyncLocationNfsTags {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_nfs.html#key DatasyncLocationNfs#key}
    */
    readonly key: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_nfs.html#value DatasyncLocationNfs#value}
    */
    readonly value: string;
}
export declare function datasyncLocationNfsTagsToTerraform(struct?: DatasyncLocationNfsTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_nfs.html awscc_datasync_location_nfs}
*/
export declare class DatasyncLocationNfs extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_nfs.html awscc_datasync_location_nfs} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationNfsConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationNfsConfig);
    get id(): string;
    get locationArn(): string;
    get locationUri(): string;
    private _mountOptions?;
    get mountOptions(): DatasyncLocationNfsMountOptions;
    set mountOptions(value: DatasyncLocationNfsMountOptions);
    resetMountOptions(): void;
    get mountOptionsInput(): DatasyncLocationNfsMountOptions | undefined;
    private _onPremConfig;
    get onPremConfig(): DatasyncLocationNfsOnPremConfig;
    set onPremConfig(value: DatasyncLocationNfsOnPremConfig);
    get onPremConfigInput(): DatasyncLocationNfsOnPremConfig;
    private _serverHostname;
    get serverHostname(): string;
    set serverHostname(value: string);
    get serverHostnameInput(): string;
    private _subdirectory;
    get subdirectory(): string;
    set subdirectory(value: string);
    get subdirectoryInput(): string;
    private _tags?;
    get tags(): DatasyncLocationNfsTags[];
    set tags(value: DatasyncLocationNfsTags[]);
    resetTags(): void;
    get tagsInput(): DatasyncLocationNfsTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
