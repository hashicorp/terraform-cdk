import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGlueRegistryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/glue_registry.html#id DataAwsccGlueRegistry#id}
    */
    readonly id: string;
}
export declare class DataAwsccGlueRegistryTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccGlueRegistryTagsToTerraform(struct?: DataAwsccGlueRegistryTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/glue_registry.html awscc_glue_registry}
*/
export declare class DataAwsccGlueRegistry extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/glue_registry.html awscc_glue_registry} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGlueRegistryConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccGlueRegistryConfig);
    get arn(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
