// https://www.terraform.io/docs/providers/awscc/r/glue_schema.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function glueSchemaCheckpointVersionToTerraform(struct?: GlueSchemaCheckpointVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_latest: cdktf.booleanToTerraform(struct!.isLatest),
    version_number: cdktf.numberToTerraform(struct!.versionNumber),
  }
}

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

export function glueSchemaRegistryToTerraform(struct?: GlueSchemaRegistry): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

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

export function glueSchemaTagsToTerraform(struct?: GlueSchemaTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html awscc_glue_schema}
*/
export class GlueSchema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_glue_schema";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema.html awscc_glue_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueSchemaConfig
  */
  public constructor(scope: Construct, id: string, config: GlueSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_schema',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._checkpointVersion = config.checkpointVersion;
    this._compatibility = config.compatibility;
    this._dataFormat = config.dataFormat;
    this._description = config.description;
    this._name = config.name;
    this._registry = config.registry;
    this._schemaDefinition = config.schemaDefinition;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // checkpoint_version - computed: false, optional: true, required: false
  private _checkpointVersion?: GlueSchemaCheckpointVersion;
  public get checkpointVersion() {
    return this.interpolationForAttribute('checkpoint_version') as any;
  }
  public set checkpointVersion(value: GlueSchemaCheckpointVersion ) {
    this._checkpointVersion = value;
  }
  public resetCheckpointVersion() {
    this._checkpointVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointVersionInput() {
    return this._checkpointVersion
  }

  // compatibility - computed: false, optional: false, required: true
  private _compatibility: string;
  public get compatibility() {
    return this.getStringAttribute('compatibility');
  }
  public set compatibility(value: string) {
    this._compatibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityInput() {
    return this._compatibility
  }

  // data_format - computed: false, optional: false, required: true
  private _dataFormat: string;
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_schema_version_id - computed: true, optional: false, required: false
  public get initialSchemaVersionId() {
    return this.getStringAttribute('initial_schema_version_id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // registry - computed: true, optional: true, required: false
  private _registry?: GlueSchemaRegistry;
  public get registry() {
    return this.interpolationForAttribute('registry') as any;
  }
  public set registry(value: GlueSchemaRegistry) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry
  }

  // schema_definition - computed: false, optional: false, required: true
  private _schemaDefinition: string;
  public get schemaDefinition() {
    return this.getStringAttribute('schema_definition');
  }
  public set schemaDefinition(value: string) {
    this._schemaDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: GlueSchemaTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: GlueSchemaTags[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      checkpoint_version: glueSchemaCheckpointVersionToTerraform(this._checkpointVersion),
      compatibility: cdktf.stringToTerraform(this._compatibility),
      data_format: cdktf.stringToTerraform(this._dataFormat),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      registry: glueSchemaRegistryToTerraform(this._registry),
      schema_definition: cdktf.stringToTerraform(this._schemaDefinition),
      tags: cdktf.listMapper(glueSchemaTagsToTerraform)(this._tags),
    };
  }
}
