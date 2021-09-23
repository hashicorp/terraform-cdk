// https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function efsAccessPointAccessPointTagsToTerraform(struct?: EfsAccessPointAccessPointTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

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

export function efsAccessPointPosixUserToTerraform(struct?: EfsAccessPointPosixUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gid: cdktf.stringToTerraform(struct!.gid),
    secondary_gids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.secondaryGids),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}

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

export function efsAccessPointRootDirectoryCreationInfoToTerraform(struct?: EfsAccessPointRootDirectoryCreationInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    owner_gid: cdktf.stringToTerraform(struct!.ownerGid),
    owner_uid: cdktf.stringToTerraform(struct!.ownerUid),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}

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

export function efsAccessPointRootDirectoryToTerraform(struct?: EfsAccessPointRootDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    creation_info: efsAccessPointRootDirectoryCreationInfoToTerraform(struct!.creationInfo),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html awscc_efs_access_point}
*/
export class EfsAccessPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_efs_access_point";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/efs_access_point.html awscc_efs_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EfsAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: EfsAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_efs_access_point',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessPointTags = config.accessPointTags;
    this._clientToken = config.clientToken;
    this._fileSystemId = config.fileSystemId;
    this._posixUser = config.posixUser;
    this._rootDirectory = config.rootDirectory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }

  // access_point_tags - computed: false, optional: true, required: false
  private _accessPointTags?: EfsAccessPointAccessPointTags[];
  public get accessPointTags() {
    return this.interpolationForAttribute('access_point_tags') as any;
  }
  public set accessPointTags(value: EfsAccessPointAccessPointTags[] ) {
    this._accessPointTags = value;
  }
  public resetAccessPointTags() {
    this._accessPointTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointTagsInput() {
    return this._accessPointTags
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_token - computed: true, optional: true, required: false
  private _clientToken?: string;
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }
  public set clientToken(value: string) {
    this._clientToken = value;
  }
  public resetClientToken() {
    this._clientToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTokenInput() {
    return this._clientToken
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId: string;
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // posix_user - computed: true, optional: true, required: false
  private _posixUser?: EfsAccessPointPosixUser;
  public get posixUser() {
    return this.interpolationForAttribute('posix_user') as any;
  }
  public set posixUser(value: EfsAccessPointPosixUser) {
    this._posixUser = value;
  }
  public resetPosixUser() {
    this._posixUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixUserInput() {
    return this._posixUser
  }

  // root_directory - computed: true, optional: true, required: false
  private _rootDirectory?: EfsAccessPointRootDirectory;
  public get rootDirectory() {
    return this.interpolationForAttribute('root_directory') as any;
  }
  public set rootDirectory(value: EfsAccessPointRootDirectory) {
    this._rootDirectory = value;
  }
  public resetRootDirectory() {
    this._rootDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_point_tags: cdktf.listMapper(efsAccessPointAccessPointTagsToTerraform)(this._accessPointTags),
      client_token: cdktf.stringToTerraform(this._clientToken),
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      posix_user: efsAccessPointPosixUserToTerraform(this._posixUser),
      root_directory: efsAccessPointRootDirectoryToTerraform(this._rootDirectory),
    };
  }
}
