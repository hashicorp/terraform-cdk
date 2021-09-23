// https://www.terraform.io/docs/providers/awscc/d/efs_access_point.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEfsAccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/efs_access_point.html#id DataAwsccEfsAccessPoint#id}
  */
  readonly id: string;
}
export class DataAwsccEfsAccessPointAccessPointTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEfsAccessPointAccessPointTagsToTerraform(struct?: DataAwsccEfsAccessPointAccessPointTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccEfsAccessPointPosixUser extends cdktf.ComplexComputedList {

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getStringAttribute('gid');
  }

  // secondary_gids - computed: true, optional: false, required: false
  public get secondaryGids() {
    return this.getListAttribute('secondary_gids');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export function dataAwsccEfsAccessPointPosixUserToTerraform(struct?: DataAwsccEfsAccessPointPosixUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gid: cdktf.stringToTerraform(struct!.gid),
    secondary_gids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.secondaryGids),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}

export class DataAwsccEfsAccessPointRootDirectoryCreationInfo extends cdktf.ComplexComputedList {

  // owner_gid - computed: true, optional: false, required: false
  public get ownerGid() {
    return this.getStringAttribute('owner_gid');
  }

  // owner_uid - computed: true, optional: false, required: false
  public get ownerUid() {
    return this.getStringAttribute('owner_uid');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
}

export function dataAwsccEfsAccessPointRootDirectoryCreationInfoToTerraform(struct?: DataAwsccEfsAccessPointRootDirectoryCreationInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    owner_gid: cdktf.stringToTerraform(struct!.ownerGid),
    owner_uid: cdktf.stringToTerraform(struct!.ownerUid),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}

export class DataAwsccEfsAccessPointRootDirectory extends cdktf.ComplexComputedList {

  // creation_info - computed: true, optional: false, required: false
  public get creationInfo() {
    return this.interpolationForAttribute('creation_info') as any;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export function dataAwsccEfsAccessPointRootDirectoryToTerraform(struct?: DataAwsccEfsAccessPointRootDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    creation_info: dataAwsccEfsAccessPointRootDirectoryCreationInfoToTerraform(struct!.creationInfo),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/efs_access_point.html awscc_efs_access_point}
*/
export class DataAwsccEfsAccessPoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_efs_access_point";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/efs_access_point.html awscc_efs_access_point} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEfsAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEfsAccessPointConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }

  // access_point_tags - computed: true, optional: false, required: false
  public get accessPointTags() {
    return this.interpolationForAttribute('access_point_tags') as any;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // posix_user - computed: true, optional: false, required: false
  public get posixUser() {
    return this.interpolationForAttribute('posix_user') as any;
  }

  // root_directory - computed: true, optional: false, required: false
  public get rootDirectory() {
    return this.interpolationForAttribute('root_directory') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
