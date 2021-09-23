// https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationEfsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The subnet and security group that DataSync uses to access target EFS file system.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#ec_2_config DatasyncLocationEfs#ec_2_config}
  */
  readonly ec2Config: DatasyncLocationEfsEc2Config;
  /**
  * The Amazon Resource Name (ARN) for the Amazon EFS file system.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#efs_filesystem_arn DatasyncLocationEfs#efs_filesystem_arn}
  */
  readonly efsFilesystemArn: string;
  /**
  * A subdirectory in the location's path. This subdirectory in the EFS file system is used to read data from the EFS source location or write data to the EFS destination.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#subdirectory DatasyncLocationEfs#subdirectory}
  */
  readonly subdirectory?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#tags DatasyncLocationEfs#tags}
  */
  readonly tags?: DatasyncLocationEfsTags[];
}
export interface DatasyncLocationEfsEc2Config {
  /**
  * The Amazon Resource Names (ARNs) of the security groups that are configured for the Amazon EC2 resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#security_group_arns DatasyncLocationEfs#security_group_arns}
  */
  readonly securityGroupArns: string[];
  /**
  * The ARN of the subnet that DataSync uses to access the target EFS file system.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#subnet_arn DatasyncLocationEfs#subnet_arn}
  */
  readonly subnetArn: string;
}

export function datasyncLocationEfsEc2ConfigToTerraform(struct?: DatasyncLocationEfsEc2Config): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupArns),
    subnet_arn: cdktf.stringToTerraform(struct!.subnetArn),
  }
}

export interface DatasyncLocationEfsTags {
  /**
  * The key for an AWS resource tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#key DatasyncLocationEfs#key}
  */
  readonly key: string;
  /**
  * The value for an AWS resource tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html#value DatasyncLocationEfs#value}
  */
  readonly value: string;
}

export function datasyncLocationEfsTagsToTerraform(struct?: DatasyncLocationEfsTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html awscc_datasync_location_efs}
*/
export class DatasyncLocationEfs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_datasync_location_efs";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_efs.html awscc_datasync_location_efs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationEfsConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationEfsConfig) {
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
    this._ec2Config = config.ec2Config;
    this._efsFilesystemArn = config.efsFilesystemArn;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ec_2_config - computed: false, optional: false, required: true
  private _ec2Config: DatasyncLocationEfsEc2Config;
  public get ec2Config() {
    return this.interpolationForAttribute('ec_2_config') as any;
  }
  public set ec2Config(value: DatasyncLocationEfsEc2Config) {
    this._ec2Config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2ConfigInput() {
    return this._ec2Config
  }

  // efs_filesystem_arn - computed: false, optional: false, required: true
  private _efsFilesystemArn: string;
  public get efsFilesystemArn() {
    return this.getStringAttribute('efs_filesystem_arn');
  }
  public set efsFilesystemArn(value: string) {
    this._efsFilesystemArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFilesystemArnInput() {
    return this._efsFilesystemArn
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
  private _tags?: DatasyncLocationEfsTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: DatasyncLocationEfsTags[] ) {
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
      ec_2_config: datasyncLocationEfsEc2ConfigToTerraform(this._ec2Config),
      efs_filesystem_arn: cdktf.stringToTerraform(this._efsFilesystemArn),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.listMapper(datasyncLocationEfsTagsToTerraform)(this._tags),
    };
  }
}
