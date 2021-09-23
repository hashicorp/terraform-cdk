// https://www.terraform.io/docs/providers/awscc/r/datasync_location_nfs.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function datasyncLocationNfsMountOptionsToTerraform(struct?: DatasyncLocationNfsMountOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface DatasyncLocationNfsOnPremConfig {
  /**
  * ARN(s) of the agent(s) to use for an NFS location.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_nfs.html#agent_arns DatasyncLocationNfs#agent_arns}
  */
  readonly agentArns: string[];
}

export function datasyncLocationNfsOnPremConfigToTerraform(struct?: DatasyncLocationNfsOnPremConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    agent_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.agentArns),
  }
}

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

export function datasyncLocationNfsTagsToTerraform(struct?: DatasyncLocationNfsTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_nfs.html awscc_datasync_location_nfs}
*/
export class DatasyncLocationNfs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_datasync_location_nfs";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_nfs.html awscc_datasync_location_nfs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationNfsConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationNfsConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_location_nfs',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._mountOptions = config.mountOptions;
    this._onPremConfig = config.onPremConfig;
    this._serverHostname = config.serverHostname;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _mountOptions?: DatasyncLocationNfsMountOptions;
  public get mountOptions() {
    return this.interpolationForAttribute('mount_options') as any;
  }
  public set mountOptions(value: DatasyncLocationNfsMountOptions) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions
  }

  // on_prem_config - computed: false, optional: false, required: true
  private _onPremConfig: DatasyncLocationNfsOnPremConfig;
  public get onPremConfig() {
    return this.interpolationForAttribute('on_prem_config') as any;
  }
  public set onPremConfig(value: DatasyncLocationNfsOnPremConfig) {
    this._onPremConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremConfigInput() {
    return this._onPremConfig
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
  private _tags?: DatasyncLocationNfsTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: DatasyncLocationNfsTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mount_options: datasyncLocationNfsMountOptionsToTerraform(this._mountOptions),
      on_prem_config: datasyncLocationNfsOnPremConfigToTerraform(this._onPremConfig),
      server_hostname: cdktf.stringToTerraform(this._serverHostname),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.listMapper(datasyncLocationNfsTagsToTerraform)(this._tags),
    };
  }
}
