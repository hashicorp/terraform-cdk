import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDatabrewProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/databrew_project.html#id DataAwsccDatabrewProject#id}
    */
    readonly id: string;
}
export declare class DataAwsccDatabrewProjectSample extends cdktf.ComplexComputedList {
    get size(): number;
    get type(): string;
}
export declare function dataAwsccDatabrewProjectSampleToTerraform(struct?: DataAwsccDatabrewProjectSample): any;
export declare class DataAwsccDatabrewProjectTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccDatabrewProjectTagsToTerraform(struct?: DataAwsccDatabrewProjectTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/databrew_project.html awscc_databrew_project}
*/
export declare class DataAwsccDatabrewProject extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/databrew_project.html awscc_databrew_project} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDatabrewProjectConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDatabrewProjectConfig);
    get datasetName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get recipeName(): string;
    get roleArn(): string;
    get sample(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
