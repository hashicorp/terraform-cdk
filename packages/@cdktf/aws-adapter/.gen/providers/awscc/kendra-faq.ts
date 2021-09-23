// https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KendraFaqConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the FAQ
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#description KendraFaq#description}
  */
  readonly description?: string;
  /**
  * Format of the input file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#file_format KendraFaq#file_format}
  */
  readonly fileFormat?: string;
  /**
  * Unique ID of Index
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#index_id KendraFaq#index_id}
  */
  readonly indexId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#name KendraFaq#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#role_arn KendraFaq#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#s3_path KendraFaq#s3_path}
  */
  readonly s3Path: KendraFaqS3Path;
  /**
  * List of tags
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#tags KendraFaq#tags}
  */
  readonly tags?: KendraFaqTags[];
}
export interface KendraFaqS3Path {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#bucket KendraFaq#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#key KendraFaq#key}
  */
  readonly key: string;
}

export function kendraFaqS3PathToTerraform(struct?: KendraFaqS3Path): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface KendraFaqTags {
  /**
  * A string used to identify this tag
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#key KendraFaq#key}
  */
  readonly key: string;
  /**
  * A string containing the value for the tag
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html#value KendraFaq#value}
  */
  readonly value: string;
}

export function kendraFaqTagsToTerraform(struct?: KendraFaqTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html awscc_kendra_faq}
*/
export class KendraFaq extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_kendra_faq";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kendra_faq.html awscc_kendra_faq} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KendraFaqConfig
  */
  public constructor(scope: Construct, id: string, config: KendraFaqConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_kendra_faq',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._fileFormat = config.fileFormat;
    this._indexId = config.indexId;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._s3Path = config.s3Path;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // file_format - computed: true, optional: true, required: false
  private _fileFormat?: string;
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  public resetFileFormat() {
    this._fileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_id - computed: false, optional: false, required: true
  private _indexId: string;
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // s3_path - computed: false, optional: false, required: true
  private _s3Path: KendraFaqS3Path;
  public get s3Path() {
    return this.interpolationForAttribute('s3_path') as any;
  }
  public set s3Path(value: KendraFaqS3Path) {
    this._s3Path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PathInput() {
    return this._s3Path
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: KendraFaqTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: KendraFaqTags[] ) {
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
      description: cdktf.stringToTerraform(this._description),
      file_format: cdktf.stringToTerraform(this._fileFormat),
      index_id: cdktf.stringToTerraform(this._indexId),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      s3_path: kendraFaqS3PathToTerraform(this._s3Path),
      tags: cdktf.listMapper(kendraFaqTagsToTerraform)(this._tags),
    };
  }
}
