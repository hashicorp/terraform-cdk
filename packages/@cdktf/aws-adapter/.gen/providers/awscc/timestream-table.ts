// https://www.terraform.io/docs/providers/awscc/r/timestream_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TimestreamTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name for the database which the table to be created belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/timestream_table.html#database_name TimestreamTable#database_name}
  */
  readonly databaseName: string;
  /**
  * The retention duration of the memory store and the magnetic store.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/timestream_table.html#retention_properties TimestreamTable#retention_properties}
  */
  readonly retentionProperties?: TimestreamTableRetentionProperties;
  /**
  * The name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/timestream_table.html#table_name TimestreamTable#table_name}
  */
  readonly tableName?: string;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/timestream_table.html#tags TimestreamTable#tags}
  */
  readonly tags?: TimestreamTableTags[];
}
export interface TimestreamTableRetentionProperties {
  /**
  * The duration for which data must be stored in the magnetic store.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/timestream_table.html#magnetic_store_retention_period_in_days TimestreamTable#magnetic_store_retention_period_in_days}
  */
  readonly magneticStoreRetentionPeriodInDays?: string;
  /**
  * The duration for which data must be stored in the memory store.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/timestream_table.html#memory_store_retention_period_in_hours TimestreamTable#memory_store_retention_period_in_hours}
  */
  readonly memoryStoreRetentionPeriodInHours?: string;
}

export function timestreamTableRetentionPropertiesToTerraform(struct?: TimestreamTableRetentionProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    magnetic_store_retention_period_in_days: cdktf.stringToTerraform(struct!.magneticStoreRetentionPeriodInDays),
    memory_store_retention_period_in_hours: cdktf.stringToTerraform(struct!.memoryStoreRetentionPeriodInHours),
  }
}

export interface TimestreamTableTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/timestream_table.html#key TimestreamTable#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/timestream_table.html#value TimestreamTable#value}
  */
  readonly value?: string;
}

export function timestreamTableTagsToTerraform(struct?: TimestreamTableTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/timestream_table.html awscc_timestream_table}
*/
export class TimestreamTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_timestream_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/timestream_table.html awscc_timestream_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TimestreamTableConfig
  */
  public constructor(scope: Construct, id: string, config: TimestreamTableConfig) {
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
    this._databaseName = config.databaseName;
    this._retentionProperties = config.retentionProperties;
    this._tableName = config.tableName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // retention_properties - computed: false, optional: true, required: false
  private _retentionProperties?: TimestreamTableRetentionProperties;
  public get retentionProperties() {
    return this.interpolationForAttribute('retention_properties') as any;
  }
  public set retentionProperties(value: TimestreamTableRetentionProperties ) {
    this._retentionProperties = value;
  }
  public resetRetentionProperties() {
    this._retentionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPropertiesInput() {
    return this._retentionProperties
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string;
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: TimestreamTableTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: TimestreamTableTags[] ) {
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
      database_name: cdktf.stringToTerraform(this._databaseName),
      retention_properties: timestreamTableRetentionPropertiesToTerraform(this._retentionProperties),
      table_name: cdktf.stringToTerraform(this._tableName),
      tags: cdktf.listMapper(timestreamTableTagsToTerraform)(this._tags),
    };
  }
}
