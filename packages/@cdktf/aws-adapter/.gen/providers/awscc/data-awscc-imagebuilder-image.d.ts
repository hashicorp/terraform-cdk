import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccImagebuilderImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_image.html#id DataAwsccImagebuilderImage#id}
    */
    readonly id: string;
}
export declare class DataAwsccImagebuilderImageImageTestsConfiguration extends cdktf.ComplexComputedList {
    get imageTestsEnabled(): any;
    get timeoutMinutes(): number;
}
export declare function dataAwsccImagebuilderImageImageTestsConfigurationToTerraform(struct?: DataAwsccImagebuilderImageImageTestsConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_image.html awscc_imagebuilder_image}
*/
export declare class DataAwsccImagebuilderImage extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_image.html awscc_imagebuilder_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccImagebuilderImageConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccImagebuilderImageConfig);
    get arn(): string;
    get containerRecipeArn(): string;
    get distributionConfigurationArn(): string;
    get enhancedImageMetadataEnabled(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get imageId(): string;
    get imageRecipeArn(): string;
    get imageTestsConfiguration(): any;
    get infrastructureConfigurationArn(): string;
    get name(): string;
    tags(key: string): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
