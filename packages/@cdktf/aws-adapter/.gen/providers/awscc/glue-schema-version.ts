// https://www.terraform.io/docs/providers/awscc/r/glue_schema_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function glueSchemaVersionSchemaToTerraform(struct?: GlueSchemaVersionSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    registry_name: cdktf.stringToTerraform(struct!.registryName),
    schema_arn: cdktf.stringToTerraform(struct!.schemaArn),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema_version.html awscc_glue_schema_version}
*/
export class GlueSchemaVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_glue_schema_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema_version.html awscc_glue_schema_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueSchemaVersionConfig
  */
  public constructor(scope: Construct, id: string, config: GlueSchemaVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_schema_version',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._schema = config.schema;
    this._schemaDefinition = config.schemaDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schema - computed: false, optional: false, required: true
  private _schema: GlueSchemaVersionSchema;
  public get schema() {
    return this.interpolationForAttribute('schema') as any;
  }
  public set schema(value: GlueSchemaVersionSchema) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema
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

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      schema: glueSchemaVersionSchemaToTerraform(this._schema),
      schema_definition: cdktf.stringToTerraform(this._schemaDefinition),
    };
  }
}
