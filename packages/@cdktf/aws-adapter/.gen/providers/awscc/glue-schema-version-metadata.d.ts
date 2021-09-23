import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueSchemaVersionMetadataConfig extends cdktf.TerraformMetaArguments {
    /**
    * Metadata key
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema_version_metadata.html#key GlueSchemaVersionMetadata#key}
    */
    readonly key: string;
    /**
    * Represents the version ID associated with the schema version.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema_version_metadata.html#schema_version_id GlueSchemaVersionMetadata#schema_version_id}
    */
    readonly schemaVersionId: string;
    /**
    * Metadata value
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema_version_metadata.html#value GlueSchemaVersionMetadata#value}
    */
    readonly value: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema_version_metadata.html awscc_glue_schema_version_metadata}
*/
export declare class GlueSchemaVersionMetadata extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema_version_metadata.html awscc_glue_schema_version_metadata} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueSchemaVersionMetadataConfig
    */
    constructor(scope: Construct, id: string, config: GlueSchemaVersionMetadataConfig);
    get id(): string;
    private _key;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _schemaVersionId;
    get schemaVersionId(): string;
    set schemaVersionId(value: string);
    get schemaVersionIdInput(): string;
    private _value;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
