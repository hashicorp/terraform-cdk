// https://www.terraform.io/docs/providers/awscc/r/sagemaker_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image.html#image_description SagemakerImage#image_description}
  */
  readonly imageDescription?: string;
  /**
  * The display name of the image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image.html#image_display_name SagemakerImage#image_display_name}
  */
  readonly imageDisplayName?: string;
  /**
  * The name of the image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image.html#image_name SagemakerImage#image_name}
  */
  readonly imageName: string;
  /**
  * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image.html#image_role_arn SagemakerImage#image_role_arn}
  */
  readonly imageRoleArn: string;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image.html#tags SagemakerImage#tags}
  */
  readonly tags?: SagemakerImageTags[];
}
export interface SagemakerImageTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image.html#key SagemakerImage#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image.html#value SagemakerImage#value}
  */
  readonly value: string;
}

export function sagemakerImageTagsToTerraform(struct?: SagemakerImageTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image.html awscc_sagemaker_image}
*/
export class SagemakerImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image.html awscc_sagemaker_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerImageConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerImageConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_image',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._imageDescription = config.imageDescription;
    this._imageDisplayName = config.imageDisplayName;
    this._imageName = config.imageName;
    this._imageRoleArn = config.imageRoleArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_arn - computed: true, optional: false, required: false
  public get imageArn() {
    return this.getStringAttribute('image_arn');
  }

  // image_description - computed: false, optional: true, required: false
  private _imageDescription?: string;
  public get imageDescription() {
    return this.getStringAttribute('image_description');
  }
  public set imageDescription(value: string ) {
    this._imageDescription = value;
  }
  public resetImageDescription() {
    this._imageDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDescriptionInput() {
    return this._imageDescription
  }

  // image_display_name - computed: false, optional: true, required: false
  private _imageDisplayName?: string;
  public get imageDisplayName() {
    return this.getStringAttribute('image_display_name');
  }
  public set imageDisplayName(value: string ) {
    this._imageDisplayName = value;
  }
  public resetImageDisplayName() {
    this._imageDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDisplayNameInput() {
    return this._imageDisplayName
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName: string;
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName
  }

  // image_role_arn - computed: false, optional: false, required: true
  private _imageRoleArn: string;
  public get imageRoleArn() {
    return this.getStringAttribute('image_role_arn');
  }
  public set imageRoleArn(value: string) {
    this._imageRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRoleArnInput() {
    return this._imageRoleArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: SagemakerImageTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SagemakerImageTags[] ) {
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
      image_description: cdktf.stringToTerraform(this._imageDescription),
      image_display_name: cdktf.stringToTerraform(this._imageDisplayName),
      image_name: cdktf.stringToTerraform(this._imageName),
      image_role_arn: cdktf.stringToTerraform(this._imageRoleArn),
      tags: cdktf.listMapper(sagemakerImageTagsToTerraform)(this._tags),
    };
  }
}
