// https://www.terraform.io/docs/providers/awscc/d/datasync_location_nfs.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccDatasyncLocationNfsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_nfs.html#id DataAwsccDatasyncLocationNfs#id}
  */
  readonly id: string;
}
export class DataAwsccDatasyncLocationNfsMountOptions extends cdktf.ComplexComputedList {

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export function dataAwsccDatasyncLocationNfsMountOptionsToTerraform(struct?: DataAwsccDatasyncLocationNfsMountOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class DataAwsccDatasyncLocationNfsOnPremConfig extends cdktf.ComplexComputedList {

  // agent_arns - computed: true, optional: false, required: false
  public get agentArns() {
    return this.getListAttribute('agent_arns');
  }
}

export function dataAwsccDatasyncLocationNfsOnPremConfigToTerraform(struct?: DataAwsccDatasyncLocationNfsOnPremConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    agent_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.agentArns),
  }
}

export class DataAwsccDatasyncLocationNfsTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccDatasyncLocationNfsTagsToTerraform(struct?: DataAwsccDatasyncLocationNfsTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_nfs.html awscc_datasync_location_nfs}
*/
export class DataAwsccDatasyncLocationNfs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_datasync_location_nfs";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_nfs.html awscc_datasync_location_nfs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatasyncLocationNfsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatasyncLocationNfsConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // location_arn - computed: true, optional: false, required: false
  public get locationArn() {
    return this.getStringAttribute('location_arn');
  }

  // location_uri - computed: true, optional: false, required: false
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }

  // mount_options - computed: true, optional: false, required: false
  public get mountOptions() {
    return this.interpolationForAttribute('mount_options') as any;
  }

  // on_prem_config - computed: true, optional: false, required: false
  public get onPremConfig() {
    return this.interpolationForAttribute('on_prem_config') as any;
  }

  // server_hostname - computed: true, optional: false, required: false
  public get serverHostname() {
    return this.getStringAttribute('server_hostname');
  }

  // subdirectory - computed: true, optional: false, required: false
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
