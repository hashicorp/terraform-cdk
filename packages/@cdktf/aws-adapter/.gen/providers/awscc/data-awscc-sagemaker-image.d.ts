import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_image.html#id DataAwsccSagemakerImage#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerImageTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerImageTagsToTerraform(struct?: DataAwsccSagemakerImageTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_image.html awscc_sagemaker_image}
*/
export declare class DataAwsccSagemakerImage extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_image.html awscc_sagemaker_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerImageConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerImageConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get imageArn(): string;
    get imageDescription(): string;
    get imageDisplayName(): string;
    get imageName(): string;
    get imageRoleArn(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
