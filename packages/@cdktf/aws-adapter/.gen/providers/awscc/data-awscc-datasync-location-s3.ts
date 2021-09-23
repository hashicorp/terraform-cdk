// https://www.terraform.io/docs/providers/awscc/d/datasync_location_s3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccDatasyncLocationS3Config extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_s3.html#id DataAwsccDatasyncLocationS3#id}
  */
  readonly id: string;
}
export class DataAwsccDatasyncLocationS3S3Config extends cdktf.ComplexComputedList {

  // bucket_access_role_arn - computed: true, optional: false, required: false
  public get bucketAccessRoleArn() {
    return this.getStringAttribute('bucket_access_role_arn');
  }
}

export function dataAwsccDatasyncLocationS3S3ConfigToTerraform(struct?: DataAwsccDatasyncLocationS3S3Config): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_access_role_arn: cdktf.stringToTerraform(struct!.bucketAccessRoleArn),
  }
}

export class DataAwsccDatasyncLocationS3Tags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccDatasyncLocationS3TagsToTerraform(struct?: DataAwsccDatasyncLocationS3Tags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_s3.html awscc_datasync_location_s3}
*/
export class DataAwsccDatasyncLocationS3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_datasync_location_s3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/datasync_location_s3.html awscc_datasync_location_s3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatasyncLocationS3Config
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatasyncLocationS3Config) {
    super(scope, id, {
      terraformResourceType: 'awscc_datasync_location_s3',
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

  // s3_bucket_arn - computed: true, optional: false, required: false
  public get s3BucketArn() {
    return this.getStringAttribute('s3_bucket_arn');
  }

  // s3_config - computed: true, optional: false, required: false
  public get s3Config() {
    return this.interpolationForAttribute('s3_config') as any;
  }

  // s3_storage_class - computed: true, optional: false, required: false
  public get s3StorageClass() {
    return this.getStringAttribute('s3_storage_class');
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
