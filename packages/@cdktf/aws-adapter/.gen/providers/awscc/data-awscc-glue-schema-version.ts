// https://www.terraform.io/docs/providers/awscc/d/glue_schema_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccGlueSchemaVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/glue_schema_version.html#id DataAwsccGlueSchemaVersion#id}
  */
  readonly id: string;
}
export class DataAwsccGlueSchemaVersionSchema extends cdktf.ComplexComputedList {

  // registry_name - computed: true, optional: false, required: false
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }

  // schema_arn - computed: true, optional: false, required: false
  public get schemaArn() {
    return this.getStringAttribute('schema_arn');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export function dataAwsccGlueSchemaVersionSchemaToTerraform(struct?: DataAwsccGlueSchemaVersionSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    registry_name: cdktf.stringToTerraform(struct!.registryName),
    schema_arn: cdktf.stringToTerraform(struct!.schemaArn),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/glue_schema_version.html awscc_glue_schema_version}
*/
export class DataAwsccGlueSchemaVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_glue_schema_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/glue_schema_version.html awscc_glue_schema_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGlueSchemaVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGlueSchemaVersionConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.interpolationForAttribute('schema') as any;
  }

  // schema_definition - computed: true, optional: false, required: false
  public get schemaDefinition() {
    return this.getStringAttribute('schema_definition');
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
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
