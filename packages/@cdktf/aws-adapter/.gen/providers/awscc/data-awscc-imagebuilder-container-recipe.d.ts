import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccImagebuilderContainerRecipeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_container_recipe.html#id DataAwsccImagebuilderContainerRecipe#id}
    */
    readonly id: string;
}
export declare class DataAwsccImagebuilderContainerRecipeComponents extends cdktf.ComplexComputedList {
    get componentArn(): string;
}
export declare function dataAwsccImagebuilderContainerRecipeComponentsToTerraform(struct?: DataAwsccImagebuilderContainerRecipeComponents): any;
export declare class DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs extends cdktf.ComplexComputedList {
    get deleteOnTermination(): any;
    get encrypted(): any;
    get iops(): number;
    get kmsKeyId(): string;
    get snapshotId(): string;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare function dataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbsToTerraform(struct?: DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsEbs): any;
export declare class DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings extends cdktf.ComplexComputedList {
    get deviceName(): string;
    get ebs(): any;
    get noDevice(): string;
    get virtualName(): string;
}
export declare function dataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingsToTerraform(struct?: DataAwsccImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappings): any;
export declare class DataAwsccImagebuilderContainerRecipeInstanceConfiguration extends cdktf.ComplexComputedList {
    get blockDeviceMappings(): any;
    get image(): string;
}
export declare function dataAwsccImagebuilderContainerRecipeInstanceConfigurationToTerraform(struct?: DataAwsccImagebuilderContainerRecipeInstanceConfiguration): any;
export declare class DataAwsccImagebuilderContainerRecipeTargetRepository extends cdktf.ComplexComputedList {
    get repositoryName(): string;
    get service(): string;
}
export declare function dataAwsccImagebuilderContainerRecipeTargetRepositoryToTerraform(struct?: DataAwsccImagebuilderContainerRecipeTargetRepository): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_container_recipe.html awscc_imagebuilder_container_recipe}
*/
export declare class DataAwsccImagebuilderContainerRecipe extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/imagebuilder_container_recipe.html awscc_imagebuilder_container_recipe} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccImagebuilderContainerRecipeConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccImagebuilderContainerRecipeConfig);
    get arn(): string;
    get components(): any;
    get containerType(): string;
    get description(): string;
    get dockerfileTemplateData(): string;
    get dockerfileTemplateUri(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get imageOsVersionOverride(): string;
    get instanceConfiguration(): any;
    get kmsKeyId(): string;
    get name(): string;
    get parentImage(): string;
    get platformOverride(): string;
    tags(key: string): string;
    get targetRepository(): any;
    get version(): string;
    get workingDirectory(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
