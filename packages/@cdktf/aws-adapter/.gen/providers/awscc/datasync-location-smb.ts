// https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function datasyncLocationSmbMountOptionsToTerraform(struct?: DatasyncLocationSmbMountOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}

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

export function datasyncLocationSmbTagsToTerraform(struct?: DatasyncLocationSmbTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html awscc_datasync_location_smb}
*/
export class DatasyncLocationSmb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_datasync_location_smb";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_smb.html awscc_datasync_location_smb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationSmbConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationSmbConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_location_smb',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._agentArns = config.agentArns;
    this._domain = config.domain;
    this._mountOptions = config.mountOptions;
    this._password = config.password;
    this._serverHostname = config.serverHostname;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_arns - computed: false, optional: false, required: true
  private _agentArns: string[];
  public get agentArns() {
    return this.getListAttribute('agent_arns');
  }
  public set agentArns(value: string[]) {
    this._agentArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentArnsInput() {
    return this._agentArns
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string;
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string ) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain
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

  // mount_options - computed: true, optional: true, required: false
  private _mountOptions?: DatasyncLocationSmbMountOptions;
  public get mountOptions() {
    return this.interpolationForAttribute('mount_options') as any;
  }
  public set mountOptions(value: DatasyncLocationSmbMountOptions) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions
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

  // server_hostname - computed: false, optional: false, required: true
  private _serverHostname: string;
  public get serverHostname() {
    return this.getStringAttribute('server_hostname');
  }
  public set serverHostname(value: string) {
    this._serverHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostnameInput() {
    return this._serverHostname
  }

  // subdirectory - computed: false, optional: false, required: true
  private _subdirectory: string;
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirectoryInput() {
    return this._subdirectory
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: DatasyncLocationSmbTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: DatasyncLocationSmbTags[] ) {
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
      agent_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._agentArns),
      domain: cdktf.stringToTerraform(this._domain),
      mount_options: datasyncLocationSmbMountOptionsToTerraform(this._mountOptions),
      password: cdktf.stringToTerraform(this._password),
      server_hostname: cdktf.stringToTerraform(this._serverHostname),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.listMapper(datasyncLocationSmbTagsToTerraform)(this._tags),
      user: cdktf.stringToTerraform(this._user),
    };
  }
}
