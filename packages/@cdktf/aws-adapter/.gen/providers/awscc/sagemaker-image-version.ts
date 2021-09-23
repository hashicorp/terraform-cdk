// https://www.terraform.io/docs/providers/awscc/r/sagemaker_image_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerImageVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The registry path of the container image on which this image version is based.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image_version.html#base_image SagemakerImageVersion#base_image}
  */
  readonly baseImage: string;
  /**
  * The name of the image this version belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image_version.html#image_name SagemakerImageVersion#image_name}
  */
  readonly imageName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image_version.html awscc_sagemaker_image_version}
*/
export class SagemakerImageVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_image_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image_version.html awscc_sagemaker_image_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerImageVersionConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerImageVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_image_version',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._baseImage = config.baseImage;
    this._imageName = config.imageName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_image - computed: false, optional: false, required: true
  private _baseImage: string;
  public get baseImage() {
    return this.getStringAttribute('base_image');
  }
  public set baseImage(value: string) {
    this._baseImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageInput() {
    return this._baseImage
  }

  // container_image - computed: true, optional: false, required: false
  public get containerImage() {
    return this.getStringAttribute('container_image');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_arn - computed: true, optional: false, required: false
  public get imageArn() {
    return this.getStringAttribute('image_arn');
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

  // image_version_arn - computed: true, optional: false, required: false
  public get imageVersionArn() {
    return this.getStringAttribute('image_version_arn');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_image: cdktf.stringToTerraform(this._baseImage),
      image_name: cdktf.stringToTerraform(this._imageName),
    };
  }
}
