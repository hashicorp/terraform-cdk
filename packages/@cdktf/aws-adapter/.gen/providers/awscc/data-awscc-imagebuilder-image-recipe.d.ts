import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccImagebuilderImageRecipeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_image_recipe.html#id DataAwsccImagebuilderImageRecipe#id}
    */
    readonly id: string;
}
export declare class DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent extends cdktf.ComplexComputedList {
    get uninstallAfterBuild(): any;
}
export declare function dataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentToTerraform(struct?: DataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent): any;
export declare class DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration extends cdktf.ComplexComputedList {
    get systemsManagerAgent(): any;
    get userDataOverride(): string;
}
export declare function dataAwsccImagebuilderImageRecipeAdditionalInstanceConfigurationToTerraform(struct?: DataAwsccImagebuilderImageRecipeAdditionalInstanceConfiguration): any;
export declare class DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs extends cdktf.ComplexComputedList {
    get deleteOnTermination(): any;
    get encrypted(): any;
    get iops(): number;
    get kmsKeyId(): string;
    get snapshotId(): string;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare function dataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbsToTerraform(struct?: DataAwsccImagebuilderImageRecipeBlockDeviceMappingsEbs): any;
export declare class DataAwsccImagebuilderImageRecipeBlockDeviceMappings extends cdktf.ComplexComputedList {
    get deviceName(): string;
    get ebs(): any;
    get noDevice(): string;
    get virtualName(): string;
}
export declare function dataAwsccImagebuilderImageRecipeBlockDeviceMappingsToTerraform(struct?: DataAwsccImagebuilderImageRecipeBlockDeviceMappings): any;
export declare class DataAwsccImagebuilderImageRecipeComponentsParameters extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): string[];
}
export declare function dataAwsccImagebuilderImageRecipeComponentsParametersToTerraform(struct?: DataAwsccImagebuilderImageRecipeComponentsParameters): any;
export declare class DataAwsccImagebuilderImageRecipeComponents extends cdktf.ComplexComputedList {
    get componentArn(): string;
    get parameters(): any;
}
export declare function dataAwsccImagebuilderImageRecipeComponentsToTerraform(struct?: DataAwsccImagebuilderImageRecipeComponents): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_image_recipe.html awscc_imagebuilder_image_recipe}
*/
export declare class DataAwsccImagebuilderImageRecipe extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_image_recipe.html awscc_imagebuilder_image_recipe} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccImagebuilderImageRecipeConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccImagebuilderImageRecipeConfig);
    get additionalInstanceConfiguration(): any;
    get arn(): string;
    get blockDeviceMappings(): any;
    get components(): any;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get parentImage(): string;
    tags(key: string): string;
    get version(): string;
    get workingDirectory(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
