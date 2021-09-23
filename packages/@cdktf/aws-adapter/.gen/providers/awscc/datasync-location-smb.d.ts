import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationSmbConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html#agent_arns DatasyncLocationSmb#agent_arns}
    */
    readonly agentArns: string[];
    /**
    * The name of the Windows domain that the SMB server belongs to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html#domain DatasyncLocationSmb#domain}
    */
    readonly domain?: string;
    /**
    * The mount options used by DataSync to access the SMB server.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html#mount_options DatasyncLocationSmb#mount_options}
    */
    readonly mountOptions?: DatasyncLocationSmbMountOptions;
    /**
    * The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html#password DatasyncLocationSmb#password}
    */
    readonly password: string;
    /**
    * The name of the SMB server. This value is the IP address or Domain Name Service (DNS) name of the SMB server.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html#server_hostname DatasyncLocationSmb#server_hostname}
    */
    readonly serverHostname: string;
    /**
    * The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html#subdirectory DatasyncLocationSmb#subdirectory}
    */
    readonly subdirectory: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html#tags DatasyncLocationSmb#tags}
    */
    readonly tags?: DatasyncLocationSmbTags[];
    /**
    * The user who can mount the share, has the permissions to access files and folders in the SMB share.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html#user DatasyncLocationSmb#user}
    */
    readonly user: string;
}
export interface DatasyncLocationSmbMountOptions {
    /**
    * The specific SMB version that you want DataSync to use to mount your SMB share.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html#version DatasyncLocationSmb#version}
    */
    readonly version?: string;
}
export declare function datasyncLocationSmbMountOptionsToTerraform(struct?: DatasyncLocationSmbMountOptions): any;
export interface DatasyncLocationSmbTags {
    /**
    * The key for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html#key DatasyncLocationSmb#key}
    */
    readonly key: string;
    /**
    * The value for an AWS resource tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html#value DatasyncLocationSmb#value}
    */
    readonly value: string;
}
export declare function datasyncLocationSmbTagsToTerraform(struct?: DatasyncLocationSmbTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html awscc_datasync_location_smb}
*/
export declare class DatasyncLocationSmb extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html awscc_datasync_location_smb} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationSmbConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationSmbConfig);
    private _agentArns;
    get agentArns(): string[];
    set agentArns(value: string[]);
    get agentArnsInput(): string[];
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string | undefined;
    get id(): string;
    get locationArn(): string;
    get locationUri(): string;
    private _mountOptions?;
    get mountOptions(): DatasyncLocationSmbMountOptions;
    set mountOptions(value: DatasyncLocationSmbMountOptions);
    resetMountOptions(): void;
    get mountOptionsInput(): DatasyncLocationSmbMountOptions | undefined;
    private _password;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    private _serverHostname;
    get serverHostname(): string;
    set serverHostname(value: string);
    get serverHostnameInput(): string;
    private _subdirectory;
    get subdirectory(): string;
    set subdirectory(value: string);
    get subdirectoryInput(): string;
    private _tags?;
    get tags(): DatasyncLocationSmbTags[];
    set tags(value: DatasyncLocationSmbTags[]);
    resetTags(): void;
    get tagsInput(): DatasyncLocationSmbTags[] | undefined;
    private _user;
    get user(): string;
    set user(value: string);
    get userInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
