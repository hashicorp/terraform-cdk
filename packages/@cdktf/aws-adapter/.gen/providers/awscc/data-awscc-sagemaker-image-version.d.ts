import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerImageVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_image_version.html#id DataAwsccSagemakerImageVersion#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_image_version.html awscc_sagemaker_image_version}
*/
export declare class DataAwsccSagemakerImageVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_image_version.html awscc_sagemaker_image_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerImageVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerImageVersionConfig);
    get baseImage(): string;
    get containerImage(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get imageArn(): string;
    get imageName(): string;
    get imageVersionArn(): string;
    get version(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
