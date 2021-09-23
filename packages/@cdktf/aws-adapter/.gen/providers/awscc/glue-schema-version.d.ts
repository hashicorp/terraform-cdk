import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueSchemaVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier for the schema where the schema version will be created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema_version.html#schema GlueSchemaVersion#schema}
    */
    readonly schema: GlueSchemaVersionSchema;
    /**
    * Complete definition of the schema in plain-text.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema_version.html#schema_definition GlueSchemaVersion#schema_definition}
    */
    readonly schemaDefinition: string;
}
export interface GlueSchemaVersionSchema {
    /**
    * Name of the registry to identify where the Schema is located.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema_version.html#registry_name GlueSchemaVersion#registry_name}
    */
    readonly registryName?: string;
    /**
    * Amazon Resource Name for the Schema. This attribute can be used to uniquely represent the Schema.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema_version.html#schema_arn GlueSchemaVersion#schema_arn}
    */
    readonly schemaArn?: string;
    /**
    * Name of the schema. This parameter requires RegistryName to be provided.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema_version.html#schema_name GlueSchemaVersion#schema_name}
    */
    readonly schemaName?: string;
}
export declare function glueSchemaVersionSchemaToTerraform(struct?: GlueSchemaVersionSchema): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema_version.html awscc_glue_schema_version}
*/
export declare class GlueSchemaVersion extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema_version.html awscc_glue_schema_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueSchemaVersionConfig
    */
    constructor(scope: Construct, id: string, config: GlueSchemaVersionConfig);
    get id(): string;
    private _schema;
    get schema(): GlueSchemaVersionSchema;
    set schema(value: GlueSchemaVersionSchema);
    get schemaInput(): GlueSchemaVersionSchema;
    private _schemaDefinition;
    get schemaDefinition(): string;
    set schemaDefinition(value: string);
    get schemaDefinitionInput(): string;
    get versionId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
