// https://www.terraform.io/docs/providers/awscc/d/datasync_location_efs.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccDatasyncLocationEfsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_efs.html#id DataAwsccDatasyncLocationEfs#id}
  */
  readonly id: string;
}
export class DataAwsccDatasyncLocationEfsEc2Config extends cdktf.ComplexComputedList {

  // security_group_arns - computed: true, optional: false, required: false
  public get securityGroupArns() {
    return this.getListAttribute('security_group_arns');
  }

  // subnet_arn - computed: true, optional: false, required: false
  public get subnetArn() {
    return this.getStringAttribute('subnet_arn');
  }
}

export function dataAwsccDatasyncLocationEfsEc2ConfigToTerraform(struct?: DataAwsccDatasyncLocationEfsEc2Config): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupArns),
    subnet_arn: cdktf.stringToTerraform(struct!.subnetArn),
  }
}

export class DataAwsccDatasyncLocationEfsTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccDatasyncLocationEfsTagsToTerraform(struct?: DataAwsccDatasyncLocationEfsTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_efs.html awscc_datasync_location_efs}
*/
export class DataAwsccDatasyncLocationEfs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_datasync_location_efs";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_efs.html awscc_datasync_location_efs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatasyncLocationEfsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatasyncLocationEfsConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_location_efs',
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

  // ec_2_config - computed: true, optional: false, required: false
  public get ec2Config() {
    return this.interpolationForAttribute('ec_2_config') as any;
  }

  // efs_filesystem_arn - computed: true, optional: false, required: false
  public get efsFilesystemArn() {
    return this.getStringAttribute('efs_filesystem_arn');
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

  // location_arn - computed: true, optional: false, required: false
  public get locationArn() {
    return this.getStringAttribute('location_arn');
  }

  // location_uri - computed: true, optional: false, required: false
  public get locationUri() {
    return this.getStringAttribute('location_uri');
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
