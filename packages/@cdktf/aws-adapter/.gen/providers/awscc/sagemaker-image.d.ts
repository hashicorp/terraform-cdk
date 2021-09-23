import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function sagemakerImageTagsToTerraform(struct?: SagemakerImageTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image.html awscc_sagemaker_image}
*/
export declare class SagemakerImage extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image.html awscc_sagemaker_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerImageConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerImageConfig);
    get id(): string;
    get imageArn(): string;
    private _imageDescription?;
    get imageDescription(): string;
    set imageDescription(value: string);
    resetImageDescription(): void;
    get imageDescriptionInput(): string | undefined;
    private _imageDisplayName?;
    get imageDisplayName(): string;
    set imageDisplayName(value: string);
    resetImageDisplayName(): void;
    get imageDisplayNameInput(): string | undefined;
    private _imageName;
    get imageName(): string;
    set imageName(value: string);
    get imageNameInput(): string;
    private _imageRoleArn;
    get imageRoleArn(): string;
    set imageRoleArn(value: string);
    get imageRoleArnInput(): string;
    private _tags?;
    get tags(): SagemakerImageTags[];
    set tags(value: SagemakerImageTags[]);
    resetTags(): void;
    get tagsInput(): SagemakerImageTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
