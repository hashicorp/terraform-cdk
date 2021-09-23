import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EfsAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html#access_point_tags EfsAccessPoint#access_point_tags}
    */
    readonly accessPointTags?: EfsAccessPointAccessPointTags[];
    /**
    * (optional) A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html#client_token EfsAccessPoint#client_token}
    */
    readonly clientToken?: string;
    /**
    * The ID of the EFS file system that the access point provides access to.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html#file_system_id EfsAccessPoint#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html#posix_user EfsAccessPoint#posix_user}
    */
    readonly posixUser?: EfsAccessPointPosixUser;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html#root_directory EfsAccessPoint#root_directory}
    */
    readonly rootDirectory?: EfsAccessPointRootDirectory;
}
export interface EfsAccessPointAccessPointTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html#key EfsAccessPoint#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html#value EfsAccessPoint#value}
    */
    readonly value?: string;
}
export declare function efsAccessPointAccessPointTagsToTerraform(struct?: EfsAccessPointAccessPointTags): any;
export interface EfsAccessPointPosixUser {
    /**
    * The POSIX group ID used for all file system operations using this access point.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html#gid EfsAccessPoint#gid}
    */
    readonly gid: string;
    /**
    * Secondary POSIX group IDs used for all file system operations using this access point.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html#secondary_gids EfsAccessPoint#secondary_gids}
    */
    readonly secondaryGids?: string[];
    /**
    * The POSIX user ID used for all file system operations using this access point.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html#uid EfsAccessPoint#uid}
    */
    readonly uid: string;
}
export declare function efsAccessPointPosixUserToTerraform(struct?: EfsAccessPointPosixUser): any;
export interface EfsAccessPointRootDirectoryCreationInfo {
    /**
    * Specifies the POSIX group ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html#owner_gid EfsAccessPoint#owner_gid}
    */
    readonly ownerGid: string;
    /**
    * Specifies the POSIX user ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html#owner_uid EfsAccessPoint#owner_uid}
    */
    readonly ownerUid: string;
    /**
    * Specifies the POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html#permissions EfsAccessPoint#permissions}
    */
    readonly permissions: string;
}
export declare function efsAccessPointRootDirectoryCreationInfoToTerraform(struct?: EfsAccessPointRootDirectoryCreationInfo): any;
export interface EfsAccessPointRootDirectory {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html#creation_info EfsAccessPoint#creation_info}
    */
    readonly creationInfo?: EfsAccessPointRootDirectoryCreationInfo;
    /**
    * Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the CreationInfo.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html#path EfsAccessPoint#path}
    */
    readonly path?: string;
}
export declare function efsAccessPointRootDirectoryToTerraform(struct?: EfsAccessPointRootDirectory): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html awscc_efs_access_point}
*/
export declare class EfsAccessPoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html awscc_efs_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: EfsAccessPointConfig);
    get accessPointId(): string;
    private _accessPointTags?;
    get accessPointTags(): EfsAccessPointAccessPointTags[];
    set accessPointTags(value: EfsAccessPointAccessPointTags[]);
    resetAccessPointTags(): void;
    get accessPointTagsInput(): EfsAccessPointAccessPointTags[] | undefined;
    get arn(): string;
    private _clientToken?;
    get clientToken(): string;
    set clientToken(value: string);
    resetClientToken(): void;
    get clientTokenInput(): string | undefined;
    private _fileSystemId;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string;
    get id(): string;
    private _posixUser?;
    get posixUser(): EfsAccessPointPosixUser;
    set posixUser(value: EfsAccessPointPosixUser);
    resetPosixUser(): void;
    get posixUserInput(): EfsAccessPointPosixUser | undefined;
    private _rootDirectory?;
    get rootDirectory(): EfsAccessPointRootDirectory;
    set rootDirectory(value: EfsAccessPointRootDirectory);
    resetRootDirectory(): void;
    get rootDirectoryInput(): EfsAccessPointRootDirectory | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
