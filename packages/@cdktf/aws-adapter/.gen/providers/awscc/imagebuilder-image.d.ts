import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
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
export declare function imagebuilderImageImageTestsConfigurationToTerraform(struct?: ImagebuilderImageImageTestsConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image.html awscc_imagebuilder_image}
*/
export declare class ImagebuilderImage extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/imagebuilder_image.html awscc_imagebuilder_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImageConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ImagebuilderImageConfig);
    get arn(): string;
    private _containerRecipeArn?;
    get containerRecipeArn(): string;
    set containerRecipeArn(value: string);
    resetContainerRecipeArn(): void;
    get containerRecipeArnInput(): string | undefined;
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
    get imageId(): string;
    private _imageRecipeArn?;
    get imageRecipeArn(): string;
    set imageRecipeArn(value: string);
    resetImageRecipeArn(): void;
    get imageRecipeArnInput(): string | undefined;
    private _imageTestsConfiguration?;
    get imageTestsConfiguration(): ImagebuilderImageImageTestsConfiguration;
    set imageTestsConfiguration(value: ImagebuilderImageImageTestsConfiguration);
    resetImageTestsConfiguration(): void;
    get imageTestsConfigurationInput(): ImagebuilderImageImageTestsConfiguration | undefined;
    private _infrastructureConfigurationArn?;
    get infrastructureConfigurationArn(): string;
    set infrastructureConfigurationArn(value: string);
    resetInfrastructureConfigurationArn(): void;
    get infrastructureConfigurationArnInput(): string | undefined;
    get name(): string;
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
