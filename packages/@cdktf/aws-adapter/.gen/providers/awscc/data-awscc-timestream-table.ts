// https://www.terraform.io/docs/providers/awscc/d/timestream_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccTimestreamTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/timestream_table.html#id DataAwsccTimestreamTable#id}
  */
  readonly id: string;
}
export class DataAwsccTimestreamTableRetentionProperties extends cdktf.ComplexComputedList {

  // magnetic_store_retention_period_in_days - computed: true, optional: false, required: false
  public get magneticStoreRetentionPeriodInDays() {
    return this.getStringAttribute('magnetic_store_retention_period_in_days');
  }

  // memory_store_retention_period_in_hours - computed: true, optional: false, required: false
  public get memoryStoreRetentionPeriodInHours() {
    return this.getStringAttribute('memory_store_retention_period_in_hours');
  }
}

export function dataAwsccTimestreamTableRetentionPropertiesToTerraform(struct?: DataAwsccTimestreamTableRetentionProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    magnetic_store_retention_period_in_days: cdktf.stringToTerraform(struct!.magneticStoreRetentionPeriodInDays),
    memory_store_retention_period_in_hours: cdktf.stringToTerraform(struct!.memoryStoreRetentionPeriodInHours),
  }
}

export class DataAwsccTimestreamTableTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccTimestreamTableTagsToTerraform(struct?: DataAwsccTimestreamTableTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/timestream_table.html awscc_timestream_table}
*/
export class DataAwsccTimestreamTable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_timestream_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/timestream_table.html awscc_timestream_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccTimestreamTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccTimestreamTableConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_timestream_table',
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

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // retention_properties - computed: true, optional: false, required: false
  public get retentionProperties() {
    return this.interpolationForAttribute('retention_properties') as any;
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
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
