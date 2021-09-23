import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class SagemakerImageVersion extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_image_version.html awscc_sagemaker_image_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerImageVersionConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerImageVersionConfig);
    private _baseImage;
    get baseImage(): string;
    set baseImage(value: string);
    get baseImageInput(): string;
    get containerImage(): string;
    get id(): string;
    get imageArn(): string;
    private _imageName;
    get imageName(): string;
    set imageName(value: string);
    get imageNameInput(): string;
    get imageVersionArn(): string;
    get version(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
