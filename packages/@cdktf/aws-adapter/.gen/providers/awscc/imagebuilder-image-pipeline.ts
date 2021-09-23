// https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagebuilderImagePipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html#container_recipe_arn ImagebuilderImagePipeline#container_recipe_arn}
  */
  readonly containerRecipeArn?: string;
  /**
  * The description of the image pipeline.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html#description ImagebuilderImagePipeline#description}
  */
  readonly description?: string;
  /**
  * The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}
  */
  readonly distributionConfigurationArn?: string;
  /**
  * Collects additional information about the image being created, including the operating system (OS) version and package list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}
  */
  readonly enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}
  */
  readonly imageRecipeArn?: string;
  /**
  * Image tests configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html#image_tests_configuration ImagebuilderImagePipeline#image_tests_configuration}
  */
  readonly imageTestsConfiguration?: ImagebuilderImagePipelineImageTestsConfiguration;
  /**
  * The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}
  */
  readonly infrastructureConfigurationArn?: string;
  /**
  * The name of the image pipeline.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html#name ImagebuilderImagePipeline#name}
  */
  readonly name?: string;
  /**
  * The schedule of the image pipeline.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html#schedule ImagebuilderImagePipeline#schedule}
  */
  readonly schedule?: ImagebuilderImagePipelineSchedule;
  /**
  * The status of the image pipeline.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html#status ImagebuilderImagePipeline#status}
  */
  readonly status?: string;
  /**
  * The tags of this image pipeline.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html#tags ImagebuilderImagePipeline#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export interface ImagebuilderImagePipelineImageTestsConfiguration {
  /**
  * Defines if tests should be executed when building this image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}
  */
  readonly imageTestsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum time in minutes that tests are permitted to run.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function imagebuilderImagePipelineImageTestsConfigurationToTerraform(struct?: ImagebuilderImagePipelineImageTestsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_tests_enabled: cdktf.booleanToTerraform(struct!.imageTestsEnabled),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
  }
}

export interface ImagebuilderImagePipelineSchedule {
  /**
  * The condition configures when the pipeline should trigger a new image build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}
  */
  readonly pipelineExecutionStartCondition?: string;
  /**
  * The expression determines how often EC2 Image Builder evaluates your pipelineExecutionStartCondition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html#schedule_expression ImagebuilderImagePipeline#schedule_expression}
  */
  readonly scheduleExpression?: string;
}

export function imagebuilderImagePipelineScheduleToTerraform(struct?: ImagebuilderImagePipelineSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    pipeline_execution_start_condition: cdktf.stringToTerraform(struct!.pipelineExecutionStartCondition),
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html awscc_imagebuilder_image_pipeline}
*/
export class ImagebuilderImagePipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_imagebuilder_image_pipeline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html awscc_imagebuilder_image_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderImagePipelineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ImagebuilderImagePipelineConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_imagebuilder_image_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._containerRecipeArn = config.containerRecipeArn;
    this._description = config.description;
    this._distributionConfigurationArn = config.distributionConfigurationArn;
    this._enhancedImageMetadataEnabled = config.enhancedImageMetadataEnabled;
    this._imageRecipeArn = config.imageRecipeArn;
    this._imageTestsConfiguration = config.imageTestsConfiguration;
    this._infrastructureConfigurationArn = config.infrastructureConfigurationArn;
    this._name = config.name;
    this._schedule = config.schedule;
    this._status = config.status;
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

  // distribution_configuration_arn - computed: false, optional: true, required: false
  private _distributionConfigurationArn?: string;
  public get distributionConfigurationArn() {
    return this.getStringAttribute('distribution_configuration_arn');
  }
  public set distributionConfigurationArn(value: string ) {
    this._distributionConfigurationArn = value;
  }
  public resetDistributionConfigurationArn() {
    this._distributionConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionConfigurationArnInput() {
    return this._distributionConfigurationArn
  }

  // enhanced_image_metadata_enabled - computed: false, optional: true, required: false
  private _enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
  public get enhancedImageMetadataEnabled() {
    return this.getBooleanAttribute('enhanced_image_metadata_enabled');
  }
  public set enhancedImageMetadataEnabled(value: boolean | cdktf.IResolvable ) {
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

  // image_recipe_arn - computed: false, optional: true, required: false
  private _imageRecipeArn?: string;
  public get imageRecipeArn() {
    return this.getStringAttribute('image_recipe_arn');
  }
  public set imageRecipeArn(value: string ) {
    this._imageRecipeArn = value;
  }
  public resetImageRecipeArn() {
    this._imageRecipeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRecipeArnInput() {
    return this._imageRecipeArn
  }

  // image_tests_configuration - computed: false, optional: true, required: false
  private _imageTestsConfiguration?: ImagebuilderImagePipelineImageTestsConfiguration;
  public get imageTestsConfiguration() {
    return this.interpolationForAttribute('image_tests_configuration') as any;
  }
  public set imageTestsConfiguration(value: ImagebuilderImagePipelineImageTestsConfiguration ) {
    this._imageTestsConfiguration = value;
  }
  public resetImageTestsConfiguration() {
    this._imageTestsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTestsConfigurationInput() {
    return this._imageTestsConfiguration
  }

  // infrastructure_configuration_arn - computed: false, optional: true, required: false
  private _infrastructureConfigurationArn?: string;
  public get infrastructureConfigurationArn() {
    return this.getStringAttribute('infrastructure_configuration_arn');
  }
  public set infrastructureConfigurationArn(value: string ) {
    this._infrastructureConfigurationArn = value;
  }
  public resetInfrastructureConfigurationArn() {
    this._infrastructureConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureConfigurationArnInput() {
    return this._infrastructureConfigurationArn
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: ImagebuilderImagePipelineSchedule;
  public get schedule() {
    return this.interpolationForAttribute('schedule') as any;
  }
  public set schedule(value: ImagebuilderImagePipelineSchedule ) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
      description: cdktf.stringToTerraform(this._description),
      distribution_configuration_arn: cdktf.stringToTerraform(this._distributionConfigurationArn),
      enhanced_image_metadata_enabled: cdktf.booleanToTerraform(this._enhancedImageMetadataEnabled),
      image_recipe_arn: cdktf.stringToTerraform(this._imageRecipeArn),
      image_tests_configuration: imagebuilderImagePipelineImageTestsConfigurationToTerraform(this._imageTestsConfiguration),
      infrastructure_configuration_arn: cdktf.stringToTerraform(this._infrastructureConfigurationArn),
      name: cdktf.stringToTerraform(this._name),
      schedule: imagebuilderImagePipelineScheduleToTerraform(this._schedule),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
