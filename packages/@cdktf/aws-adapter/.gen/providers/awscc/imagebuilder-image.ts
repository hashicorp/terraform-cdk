// https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagebuilderImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image.html#container_recipe_arn ImagebuilderImage#container_recipe_arn}
  */
  readonly containerRecipeArn?: string;
  /**
  * The Amazon Resource Name (ARN) of the distribution configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image.html#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}
  */
  readonly distributionConfigurationArn?: string;
  /**
  * Collects additional information about the image being created, including the operating system (OS) version and package list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image.html#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}
  */
  readonly enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image.html#image_recipe_arn ImagebuilderImage#image_recipe_arn}
  */
  readonly imageRecipeArn?: string;
  /**
  * The image tests configuration used when creating this image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image.html#image_tests_configuration ImagebuilderImage#image_tests_configuration}
  */
  readonly imageTestsConfiguration?: ImagebuilderImageImageTestsConfiguration;
  /**
  * The Amazon Resource Name (ARN) of the infrastructure configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image.html#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}
  */
  readonly infrastructureConfigurationArn?: string;
  /**
  * The tags associated with the image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image.html#tags ImagebuilderImage#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export interface ImagebuilderImageImageTestsConfiguration {
  /**
  * ImageTestsEnabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image.html#image_tests_enabled ImagebuilderImage#image_tests_enabled}
  */
  readonly imageTestsEnabled?: boolean | cdktf.IResolvable;
  /**
  * TimeoutMinutes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image.html#timeout_minutes ImagebuilderImage#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function imagebuilderImageImageTestsConfigurationToTerraform(struct?: ImagebuilderImageImageTestsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_tests_enabled: cdktf.booleanToTerraform(struct!.imageTestsEnabled),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image.html awscc_imagebuilder_image}
*/
export class ImagebuilderImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_imagebuilder_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image.html awscc_imagebuilder_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderImageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ImagebuilderImageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_imagebuilder_image',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._containerRecipeArn = config.containerRecipeArn;
    this._distributionConfigurationArn = config.distributionConfigurationArn;
    this._enhancedImageMetadataEnabled = config.enhancedImageMetadataEnabled;
    this._imageRecipeArn = config.imageRecipeArn;
    this._imageTestsConfiguration = config.imageTestsConfiguration;
    this._infrastructureConfigurationArn = config.infrastructureConfigurationArn;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container_recipe_arn - computed: false, optional: true, required: false
  private _containerRecipeArn?: string;
  public get containerRecipeArn() {
    return this.getStringAttribute('container_recipe_arn');
  }
  public set containerRecipeArn(value: string ) {
    this._containerRecipeArn = value;
  }
  public resetContainerRecipeArn() {
    this._containerRecipeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRecipeArnInput() {
    return this._containerRecipeArn
  }

  // distribution_configuration_arn - computed: true, optional: true, required: false
  private _distributionConfigurationArn?: string;
  public get distributionConfigurationArn() {
    return this.getStringAttribute('distribution_configuration_arn');
  }
  public set distributionConfigurationArn(value: string) {
    this._distributionConfigurationArn = value;
  }
  public resetDistributionConfigurationArn() {
    this._distributionConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionConfigurationArnInput() {
    return this._distributionConfigurationArn
  }

  // enhanced_image_metadata_enabled - computed: true, optional: true, required: false
  private _enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
  public get enhancedImageMetadataEnabled() {
    return this.getBooleanAttribute('enhanced_image_metadata_enabled');
  }
  public set enhancedImageMetadataEnabled(value: boolean | cdktf.IResolvable) {
    this._enhancedImageMetadataEnabled = value;
  }
  public resetEnhancedImageMetadataEnabled() {
    this._enhancedImageMetadataEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedImageMetadataEnabledInput() {
    return this._enhancedImageMetadataEnabled
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // image_recipe_arn - computed: true, optional: true, required: false
  private _imageRecipeArn?: string;
  public get imageRecipeArn() {
    return this.getStringAttribute('image_recipe_arn');
  }
  public set imageRecipeArn(value: string) {
    this._imageRecipeArn = value;
  }
  public resetImageRecipeArn() {
    this._imageRecipeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRecipeArnInput() {
    return this._imageRecipeArn
  }

  // image_tests_configuration - computed: true, optional: true, required: false
  private _imageTestsConfiguration?: ImagebuilderImageImageTestsConfiguration;
  public get imageTestsConfiguration() {
    return this.interpolationForAttribute('image_tests_configuration') as any;
  }
  public set imageTestsConfiguration(value: ImagebuilderImageImageTestsConfiguration) {
    this._imageTestsConfiguration = value;
  }
  public resetImageTestsConfiguration() {
    this._imageTestsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTestsConfigurationInput() {
    return this._imageTestsConfiguration
  }

  // infrastructure_configuration_arn - computed: true, optional: true, required: false
  private _infrastructureConfigurationArn?: string;
  public get infrastructureConfigurationArn() {
    return this.getStringAttribute('infrastructure_configuration_arn');
  }
  public set infrastructureConfigurationArn(value: string) {
    this._infrastructureConfigurationArn = value;
  }
  public resetInfrastructureConfigurationArn() {
    this._infrastructureConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureConfigurationArnInput() {
    return this._infrastructureConfigurationArn
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
      container_recipe_arn: cdktf.stringToTerraform(this._containerRecipeArn),
      distribution_configuration_arn: cdktf.stringToTerraform(this._distributionConfigurationArn),
      enhanced_image_metadata_enabled: cdktf.booleanToTerraform(this._enhancedImageMetadataEnabled),
      image_recipe_arn: cdktf.stringToTerraform(this._imageRecipeArn),
      image_tests_configuration: imagebuilderImageImageTestsConfigurationToTerraform(this._imageTestsConfiguration),
      infrastructure_configuration_arn: cdktf.stringToTerraform(this._infrastructureConfigurationArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
