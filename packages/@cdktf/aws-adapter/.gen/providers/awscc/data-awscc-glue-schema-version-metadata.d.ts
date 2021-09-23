import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGlueSchemaVersionMetadataConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/glue_schema_version_metadata.html#id DataAwsccGlueSchemaVersionMetadata#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/glue_schema_version_metadata.html awscc_glue_schema_version_metadata}
*/
export declare class DataAwsccGlueSchemaVersionMetadata extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/glue_schema_version_metadata.html awscc_glue_schema_version_metadata} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGlueSchemaVersionMetadataConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccGlueSchemaVersionMetadataConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get key(): string;
    get schemaVersionId(): string;
    get value(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
