// https://www.terraform.io/docs/providers/awscc/r/glue_schema_version_metadata.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
export class GlueSchemaVersionMetadata extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_glue_schema_version_metadata";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/glue_schema_version_metadata.html awscc_glue_schema_version_metadata} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueSchemaVersionMetadataConfig
  */
  public constructor(scope: Construct, id: string, config: GlueSchemaVersionMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_glue_schema_version_metadata',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._key = config.key;
    this._schemaVersionId = config.schemaVersionId;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key: string;
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // schema_version_id - computed: false, optional: false, required: true
  private _schemaVersionId: string;
  public get schemaVersionId() {
    return this.getStringAttribute('schema_version_id');
  }
  public set schemaVersionId(value: string) {
    this._schemaVersionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionIdInput() {
    return this._schemaVersionId
  }

  // value - computed: false, optional: false, required: true
  private _value: string;
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
      schema_version_id: cdktf.stringToTerraform(this._schemaVersionId),
      value: cdktf.stringToTerraform(this._value),
    };
  }
}
