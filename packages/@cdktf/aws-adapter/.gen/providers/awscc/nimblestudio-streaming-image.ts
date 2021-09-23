// https://www.terraform.io/docs/providers/awscc/r/nimblestudio_streaming_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NimblestudioStreamingImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_streaming_image.html#description NimblestudioStreamingImage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_streaming_image.html#ec_2_image_id NimblestudioStreamingImage#ec_2_image_id}
  */
  readonly ec2ImageId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_streaming_image.html#name NimblestudioStreamingImage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_streaming_image.html#studio_id NimblestudioStreamingImage#studio_id}
  */
  readonly studioId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_streaming_image.html#tags NimblestudioStreamingImage#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export class NimblestudioStreamingImageEncryptionConfiguration extends cdktf.ComplexComputedList {

  // key_arn - computed: true, optional: true, required: false
  private _keyArn?: string;
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }
  public set keyArn(value: string) {
    this._keyArn = value;
  }
  public resetKeyArn() {
    this._keyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyArnInput() {
    return this._keyArn
  }

  // key_type - computed: true, optional: false, required: true
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}

export function nimblestudioStreamingImageEncryptionConfigurationToTerraform(struct?: NimblestudioStreamingImageEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_streaming_image.html awscc_nimblestudio_streaming_image}
*/
export class NimblestudioStreamingImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_nimblestudio_streaming_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_streaming_image.html awscc_nimblestudio_streaming_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NimblestudioStreamingImageConfig
  */
  public constructor(scope: Construct, id: string, config: NimblestudioStreamingImageConfig) {
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
    this._description = config.description;
    this._ec2ImageId = config.ec2ImageId;
    this._name = config.name;
    this._studioId = config.studioId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // ec_2_image_id - computed: false, optional: false, required: true
  private _ec2ImageId: string;
  public get ec2ImageId() {
    return this.getStringAttribute('ec_2_image_id');
  }
  public set ec2ImageId(value: string) {
    this._ec2ImageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2ImageIdInput() {
    return this._ec2ImageId
  }

  // encryption_configuration - computed: true, optional: false, required: false
  public get encryptionConfiguration() {
    return this.interpolationForAttribute('encryption_configuration') as any;
  }

  // eula_ids - computed: true, optional: false, required: false
  public get eulaIds() {
    return this.getListAttribute('eula_ids');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // studio_id - computed: false, optional: false, required: true
  private _studioId: string;
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }
  public set studioId(value: string) {
    this._studioId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioIdInput() {
    return this._studioId
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable
  public get tags(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
      ec_2_image_id: cdktf.stringToTerraform(this._ec2ImageId),
      name: cdktf.stringToTerraform(this._name),
      studio_id: cdktf.stringToTerraform(this._studioId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
