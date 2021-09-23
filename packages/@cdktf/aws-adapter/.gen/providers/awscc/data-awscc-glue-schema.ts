// https://www.terraform.io/docs/providers/awscc/d/glue_schema.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccGlueSchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/glue_schema.html#id DataAwsccGlueSchema#id}
  */
  readonly id: string;
}
export class DataAwsccGlueSchemaCheckpointVersion extends cdktf.ComplexComputedList {

  // is_latest - computed: true, optional: false, required: false
  public get isLatest() {
    return this.getBooleanAttribute('is_latest');
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }
}

export function dataAwsccGlueSchemaCheckpointVersionToTerraform(struct?: DataAwsccGlueSchemaCheckpointVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_latest: cdktf.booleanToTerraform(struct!.isLatest),
    version_number: cdktf.numberToTerraform(struct!.versionNumber),
  }
}

export class DataAwsccGlueSchemaRegistry extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export function dataAwsccGlueSchemaRegistryToTerraform(struct?: DataAwsccGlueSchemaRegistry): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsccGlueSchemaTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccGlueSchemaTagsToTerraform(struct?: DataAwsccGlueSchemaTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/glue_schema.html awscc_glue_schema}
*/
export class DataAwsccGlueSchema extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_glue_schema";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/glue_schema.html awscc_glue_schema} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGlueSchemaConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGlueSchemaConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // checkpoint_version - computed: true, optional: false, required: false
  public get checkpointVersion() {
    return this.interpolationForAttribute('checkpoint_version') as any;
  }

  // compatibility - computed: true, optional: false, required: false
  public get compatibility() {
    return this.getStringAttribute('compatibility');
  }

  // data_format - computed: true, optional: false, required: false
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

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

  // initial_schema_version_id - computed: true, optional: false, required: false
  public get initialSchemaVersionId() {
    return this.getStringAttribute('initial_schema_version_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.interpolationForAttribute('registry') as any;
  }

  // schema_definition - computed: true, optional: false, required: false
  public get schemaDefinition() {
    return this.getStringAttribute('schema_definition');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
