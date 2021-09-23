import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueSchemaConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specify checkpoint version for update. This is only required to update the Compatibility.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html#checkpoint_version GlueSchema#checkpoint_version}
    */
    readonly checkpointVersion?: GlueSchemaCheckpointVersion;
    /**
    * Compatibility setting for the schema.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html#compatibility GlueSchema#compatibility}
    */
    readonly compatibility: string;
    /**
    * Data format name to use for the schema. Accepted values: 'AVRO', 'JSON'
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html#data_format GlueSchema#data_format}
    */
    readonly dataFormat: string;
    /**
    * A description of the schema. If description is not provided, there will not be any default value for this.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html#description GlueSchema#description}
    */
    readonly description?: string;
    /**
    * Name of the schema.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html#name GlueSchema#name}
    */
    readonly name: string;
    /**
    * Identifier for the registry which the schema is part of.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html#registry GlueSchema#registry}
    */
    readonly registry?: GlueSchemaRegistry;
    /**
    * Definition for the initial schema version in plain-text.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html#schema_definition GlueSchema#schema_definition}
    */
    readonly schemaDefinition: string;
    /**
    * List of tags to tag the schema
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html#tags GlueSchema#tags}
    */
    readonly tags?: GlueSchemaTags[];
}
export interface GlueSchemaCheckpointVersion {
    /**
    * Indicates if the latest version needs to be updated.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html#is_latest GlueSchema#is_latest}
    */
    readonly isLatest?: boolean | cdktf.IResolvable;
    /**
    * Indicates the version number in the schema to update.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html#version_number GlueSchema#version_number}
    */
    readonly versionNumber?: number;
}
export declare function glueSchemaCheckpointVersionToTerraform(struct?: GlueSchemaCheckpointVersion): any;
export interface GlueSchemaRegistry {
    /**
    * Amazon Resource Name for the Registry.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html#arn GlueSchema#arn}
    */
    readonly arn?: string;
    /**
    * Name of the registry in which the schema will be created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html#name GlueSchema#name}
    */
    readonly name?: string;
}
export declare function glueSchemaRegistryToTerraform(struct?: GlueSchemaRegistry): any;
export interface GlueSchemaTags {
    /**
    * A key to identify the tag.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html#key GlueSchema#key}
    */
    readonly key: string;
    /**
    * Corresponding tag value for the key.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html#value GlueSchema#value}
    */
    readonly value: string;
}
export declare function glueSchemaTagsToTerraform(struct?: GlueSchemaTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html awscc_glue_schema}
*/
export declare class GlueSchema extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html awscc_glue_schema} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueSchemaConfig
    */
    constructor(scope: Construct, id: string, config: GlueSchemaConfig);
    get arn(): string;
    private _checkpointVersion?;
    get checkpointVersion(): GlueSchemaCheckpointVersion;
    set checkpointVersion(value: GlueSchemaCheckpointVersion);
    resetCheckpointVersion(): void;
    get checkpointVersionInput(): GlueSchemaCheckpointVersion | undefined;
    private _compatibility;
    get compatibility(): string;
    set compatibility(value: string);
    get compatibilityInput(): string;
    private _dataFormat;
    get dataFormat(): string;
    set dataFormat(value: string);
    get dataFormatInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get initialSchemaVersionId(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _registry?;
    get registry(): GlueSchemaRegistry;
    set registry(value: GlueSchemaRegistry);
    resetRegistry(): void;
    get registryInput(): GlueSchemaRegistry | undefined;
    private _schemaDefinition;
    get schemaDefinition(): string;
    set schemaDefinition(value: string);
    get schemaDefinitionInput(): string;
    private _tags?;
    get tags(): GlueSchemaTags[];
    set tags(value: GlueSchemaTags[]);
    resetTags(): void;
    get tagsInput(): GlueSchemaTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
