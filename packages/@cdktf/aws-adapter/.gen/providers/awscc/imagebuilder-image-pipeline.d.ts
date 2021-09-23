import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
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
export declare function imagebuilderImagePipelineImageTestsConfigurationToTerraform(struct?: ImagebuilderImagePipelineImageTestsConfiguration): any;
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
export declare function imagebuilderImagePipelineScheduleToTerraform(struct?: ImagebuilderImagePipelineSchedule): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html awscc_imagebuilder_image_pipeline}
*/
export declare class ImagebuilderImagePipeline extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image_pipeline.html awscc_imagebuilder_image_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImagePipelineConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ImagebuilderImagePipelineConfig);
    get arn(): string;
    private _containerRecipeArn?;
    get containerRecipeArn(): string;
    set containerRecipeArn(value: string);
    resetContainerRecipeArn(): void;
    get containerRecipeArnInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _distributionConfigurationArn?;
    get distributionConfigurationArn(): string;
    set distributionConfigurationArn(value: string);
    resetDistributionConfigurationArn(): void;
    get distributionConfigurationArnInput(): string | undefined;
    private _enhancedImageMetadataEnabled?;
    get enhancedImageMetadataEnabled(): boolean | cdktf.IResolvable;
    set enhancedImageMetadataEnabled(value: boolean | cdktf.IResolvable);
    resetEnhancedImageMetadataEnabled(): void;
    get enhancedImageMetadataEnabledInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _imageRecipeArn?;
    get imageRecipeArn(): string;
    set imageRecipeArn(value: string);
    resetImageRecipeArn(): void;
    get imageRecipeArnInput(): string | undefined;
    private _imageTestsConfiguration?;
    get imageTestsConfiguration(): ImagebuilderImagePipelineImageTestsConfiguration;
    set imageTestsConfiguration(value: ImagebuilderImagePipelineImageTestsConfiguration);
    resetImageTestsConfiguration(): void;
    get imageTestsConfigurationInput(): ImagebuilderImagePipelineImageTestsConfiguration | undefined;
    private _infrastructureConfigurationArn?;
    get infrastructureConfigurationArn(): string;
    set infrastructureConfigurationArn(value: string);
    resetInfrastructureConfigurationArn(): void;
    get infrastructureConfigurationArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _schedule?;
    get schedule(): ImagebuilderImagePipelineSchedule;
    set schedule(value: ImagebuilderImagePipelineSchedule);
    resetSchedule(): void;
    get scheduleInput(): ImagebuilderImagePipelineSchedule | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
