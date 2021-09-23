// https://www.terraform.io/docs/providers/awscc/d/nimblestudio_streaming_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccNimblestudioStreamingImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_streaming_image.html#id DataAwsccNimblestudioStreamingImage#id}
  */
  readonly id: string;
}
export class DataAwsccNimblestudioStreamingImageEncryptionConfiguration extends cdktf.ComplexComputedList {

  // key_arn - computed: true, optional: false, required: false
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}

export function dataAwsccNimblestudioStreamingImageEncryptionConfigurationToTerraform(struct?: DataAwsccNimblestudioStreamingImageEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_streaming_image.html awscc_nimblestudio_streaming_image}
*/
export class DataAwsccNimblestudioStreamingImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_nimblestudio_streaming_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_streaming_image.html awscc_nimblestudio_streaming_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNimblestudioStreamingImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNimblestudioStreamingImageConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_nimblestudio_streaming_image',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ec_2_image_id - computed: true, optional: false, required: false
  public get ec2ImageId() {
    return this.getStringAttribute('ec_2_image_id');
  }

  // encryption_configuration - computed: true, optional: false, required: false
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }

  // eula_ids - computed: true, optional: false, required: false
  public get eulaIds() {
    return this.getListAttribute('eula_ids');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // streaming_image_id - computed: true, optional: false, required: false
  public get streamingImageId() {
    return this.getStringAttribute('streaming_image_id');
  }

  // studio_id - computed: true, optional: false, required: false
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
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
