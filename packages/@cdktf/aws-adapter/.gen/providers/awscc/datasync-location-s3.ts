// https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationS3Config extends cdktf.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the Amazon S3 bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#s3_bucket_arn DatasyncLocationS3#s3_bucket_arn}
  */
  readonly s3BucketArn: string;
  /**
  * The Amazon Resource Name (ARN) of the AWS IAM role that is used to access an Amazon S3 bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#s3_config DatasyncLocationS3#s3_config}
  */
  readonly s3Config: DatasyncLocationS3S3Config;
  /**
  * The Amazon S3 storage class you want to store your files in when this location is used as a task destination.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#s3_storage_class DatasyncLocationS3#s3_storage_class}
  */
  readonly s3StorageClass?: string;
  /**
  * A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#subdirectory DatasyncLocationS3#subdirectory}
  */
  readonly subdirectory?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#tags DatasyncLocationS3#tags}
  */
  readonly tags?: DatasyncLocationS3Tags[];
}
export interface DatasyncLocationS3S3Config {
  /**
  * The ARN of the IAM role of the Amazon S3 bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#bucket_access_role_arn DatasyncLocationS3#bucket_access_role_arn}
  */
  readonly bucketAccessRoleArn: string;
}

export function datasyncLocationS3S3ConfigToTerraform(struct?: DatasyncLocationS3S3Config): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_access_role_arn: cdktf.stringToTerraform(struct!.bucketAccessRoleArn),
  }
}

export interface DatasyncLocationS3Tags {
  /**
  * The key for an AWS resource tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#key DatasyncLocationS3#key}
  */
  readonly key: string;
  /**
  * The value for an AWS resource tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html#value DatasyncLocationS3#value}
  */
  readonly value: string;
}

export function datasyncLocationS3TagsToTerraform(struct?: DatasyncLocationS3Tags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html awscc_datasync_location_s3}
*/
export class DatasyncLocationS3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_datasync_location_s3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/datasync_location_s3.html awscc_datasync_location_s3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationS3Config
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationS3Config) {
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
    this._s3BucketArn = config.s3BucketArn;
    this._s3Config = config.s3Config;
    this._s3StorageClass = config.s3StorageClass;
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

  // s3_bucket_arn - computed: false, optional: false, required: true
  private _s3BucketArn: string;
  public get s3BucketArn() {
    return this.getStringAttribute('s3_bucket_arn');
  }
  public set s3BucketArn(value: string) {
    this._s3BucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketArnInput() {
    return this._s3BucketArn
  }

  // s3_config - computed: false, optional: false, required: true
  private _s3Config: DatasyncLocationS3S3Config;
  public get s3Config() {
    return this.interpolationForAttribute('s3_config') as any;
  }
  public set s3Config(value: DatasyncLocationS3S3Config) {
    this._s3Config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigInput() {
    return this._s3Config
  }

  // s3_storage_class - computed: true, optional: true, required: false
  private _s3StorageClass?: string;
  public get s3StorageClass() {
    return this.getStringAttribute('s3_storage_class');
  }
  public set s3StorageClass(value: string) {
    this._s3StorageClass = value;
  }
  public resetS3StorageClass() {
    this._s3StorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3StorageClassInput() {
    return this._s3StorageClass
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
  private _tags?: DatasyncLocationS3Tags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: DatasyncLocationS3Tags[] ) {
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
      s3_bucket_arn: cdktf.stringToTerraform(this._s3BucketArn),
      s3_config: datasyncLocationS3S3ConfigToTerraform(this._s3Config),
      s3_storage_class: cdktf.stringToTerraform(this._s3StorageClass),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.listMapper(datasyncLocationS3TagsToTerraform)(this._tags),
    };
  }
}
