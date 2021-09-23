// https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationFsxWindowsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Windows domain that the FSx for Windows server belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#domain DatasyncLocationFsxWindows#domain}
  */
  readonly domain?: string;
  /**
  * The Amazon Resource Name (ARN) for the FSx for Windows file system.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#fsx_filesystem_arn DatasyncLocationFsxWindows#fsx_filesystem_arn}
  */
  readonly fsxFilesystemArn: string;
  /**
  * The password of the user who has the permissions to access files and folders in the FSx for Windows file system.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#password DatasyncLocationFsxWindows#password}
  */
  readonly password: string;
  /**
  * The ARNs of the security groups that are to use to configure the FSx for Windows file system.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#security_group_arns DatasyncLocationFsxWindows#security_group_arns}
  */
  readonly securityGroupArns: string[];
  /**
  * A subdirectory in the location's path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#subdirectory DatasyncLocationFsxWindows#subdirectory}
  */
  readonly subdirectory?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#tags DatasyncLocationFsxWindows#tags}
  */
  readonly tags?: DatasyncLocationFsxWindowsTags[];
  /**
  * The user who has the permissions to access files and folders in the FSx for Windows file system.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#user DatasyncLocationFsxWindows#user}
  */
  readonly user: string;
}
export interface DatasyncLocationFsxWindowsTags {
  /**
  * The key for an AWS resource tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#key DatasyncLocationFsxWindows#key}
  */
  readonly key: string;
  /**
  * The value for an AWS resource tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html#value DatasyncLocationFsxWindows#value}
  */
  readonly value: string;
}

export function datasyncLocationFsxWindowsTagsToTerraform(struct?: DatasyncLocationFsxWindowsTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html awscc_datasync_location_fsx_windows}
*/
export class DatasyncLocationFsxWindows extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_datasync_location_fsx_windows";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_fsx_windows.html awscc_datasync_location_fsx_windows} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationFsxWindowsConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationFsxWindowsConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_location_fsx_windows',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domain = config.domain;
    this._fsxFilesystemArn = config.fsxFilesystemArn;
    this._password = config.password;
    this._securityGroupArns = config.securityGroupArns;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: true, optional: true, required: false
  private _domain?: string;
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain
  }

  // fsx_filesystem_arn - computed: false, optional: false, required: true
  private _fsxFilesystemArn: string;
  public get fsxFilesystemArn() {
    return this.getStringAttribute('fsx_filesystem_arn');
  }
  public set fsxFilesystemArn(value: string) {
    this._fsxFilesystemArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxFilesystemArnInput() {
    return this._fsxFilesystemArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_arn - computed: true, optional: false, required: false
  public get locationArn() {
    return this.getStringAttribute('location_arn');
  }

  // location_uri - computed: true, optional: false, required: false
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }

  // password - computed: false, optional: false, required: true
  private _password: string;
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // security_group_arns - computed: false, optional: false, required: true
  private _securityGroupArns: string[];
  public get securityGroupArns() {
    return this.getListAttribute('security_group_arns');
  }
  public set securityGroupArns(value: string[]) {
    this._securityGroupArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupArnsInput() {
    return this._securityGroupArns
  }

  // subdirectory - computed: true, optional: true, required: false
  private _subdirectory?: string;
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }
  public resetSubdirectory() {
    this._subdirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirectoryInput() {
    return this._subdirectory
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: DatasyncLocationFsxWindowsTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: DatasyncLocationFsxWindowsTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // user - computed: false, optional: false, required: true
  private _user: string;
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      fsx_filesystem_arn: cdktf.stringToTerraform(this._fsxFilesystemArn),
      password: cdktf.stringToTerraform(this._password),
      security_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupArns),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.listMapper(datasyncLocationFsxWindowsTagsToTerraform)(this._tags),
      user: cdktf.stringToTerraform(this._user),
    };
  }
}
