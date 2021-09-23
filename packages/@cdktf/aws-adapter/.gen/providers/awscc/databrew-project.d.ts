import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatabrewProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Dataset name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#dataset_name DatabrewProject#dataset_name}
    */
    readonly datasetName: string;
    /**
    * Project name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#name DatabrewProject#name}
    */
    readonly name: string;
    /**
    * Recipe name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#recipe_name DatabrewProject#recipe_name}
    */
    readonly recipeName: string;
    /**
    * Role arn
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#role_arn DatabrewProject#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#sample DatabrewProject#sample}
    */
    readonly sample?: DatabrewProjectSample;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#tags DatabrewProject#tags}
    */
    readonly tags?: DatabrewProjectTags[];
}
export interface DatabrewProjectSample {
    /**
    * Sample size
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#size DatabrewProject#size}
    */
    readonly size?: number;
    /**
    * Sample type
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#type DatabrewProject#type}
    */
    readonly type: string;
}
export declare function databrewProjectSampleToTerraform(struct?: DatabrewProjectSample): any;
export interface DatabrewProjectTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#key DatabrewProject#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html#value DatabrewProject#value}
    */
    readonly value: string;
}
export declare function databrewProjectTagsToTerraform(struct?: DatabrewProjectTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html awscc_databrew_project}
*/
export declare class DatabrewProject extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/databrew_project.html awscc_databrew_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatabrewProjectConfig
    */
    constructor(scope: Construct, id: string, config: DatabrewProjectConfig);
    private _datasetName;
    get datasetName(): string;
    set datasetName(value: string);
    get datasetNameInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _recipeName;
    get recipeName(): string;
    set recipeName(value: string);
    get recipeNameInput(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _sample?;
    get sample(): DatabrewProjectSample;
    set sample(value: DatabrewProjectSample);
    resetSample(): void;
    get sampleInput(): DatabrewProjectSample | undefined;
    private _tags?;
    get tags(): DatabrewProjectTags[];
    set tags(value: DatabrewProjectTags[]);
    resetTags(): void;
    get tagsInput(): DatabrewProjectTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
