import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGlueSchemaConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/glue_schema.html#id DataAwsccGlueSchema#id}
    */
    readonly id: string;
}
export declare class DataAwsccGlueSchemaCheckpointVersion extends cdktf.ComplexComputedList {
    get isLatest(): any;
    get versionNumber(): number;
}
export declare function dataAwsccGlueSchemaCheckpointVersionToTerraform(struct?: DataAwsccGlueSchemaCheckpointVersion): any;
export declare class DataAwsccGlueSchemaRegistry extends cdktf.ComplexComputedList {
    get arn(): string;
    get name(): string;
}
export declare function dataAwsccGlueSchemaRegistryToTerraform(struct?: DataAwsccGlueSchemaRegistry): any;
export declare class DataAwsccGlueSchemaTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccGlueSchemaTagsToTerraform(struct?: DataAwsccGlueSchemaTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/glue_schema.html awscc_glue_schema}
*/
export declare class DataAwsccGlueSchema extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/glue_schema.html awscc_glue_schema} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGlueSchemaConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccGlueSchemaConfig);
    get arn(): string;
    get checkpointVersion(): any;
    get compatibility(): string;
    get dataFormat(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get initialSchemaVersionId(): string;
    get name(): string;
    get registry(): any;
    get schemaDefinition(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
