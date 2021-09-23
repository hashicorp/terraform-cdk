// https://www.terraform.io/docs/providers/awscc/d/cassandra_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCassandraTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cassandra_table.html#id DataAwsccCassandraTable#id}
  */
  readonly id: string;
}
export class DataAwsccCassandraTableBillingModeProvisionedThroughput extends cdktf.ComplexComputedList {

  // read_capacity_units - computed: true, optional: false, required: false
  public get readCapacityUnits() {
    return this.getNumberAttribute('read_capacity_units');
  }

  // write_capacity_units - computed: true, optional: false, required: false
  public get writeCapacityUnits() {
    return this.getNumberAttribute('write_capacity_units');
  }
}

export function dataAwsccCassandraTableBillingModeProvisionedThroughputToTerraform(struct?: DataAwsccCassandraTableBillingModeProvisionedThroughput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_capacity_units: cdktf.numberToTerraform(struct!.readCapacityUnits),
    write_capacity_units: cdktf.numberToTerraform(struct!.writeCapacityUnits),
  }
}

export class DataAwsccCassandraTableBillingMode extends cdktf.ComplexComputedList {

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // provisioned_throughput - computed: true, optional: false, required: false
  public get provisionedThroughput() {
    return this.interpolationForAttribute('provisioned_throughput') as any;
  }
}

export function dataAwsccCassandraTableBillingModeToTerraform(struct?: DataAwsccCassandraTableBillingMode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    provisioned_throughput: dataAwsccCassandraTableBillingModeProvisionedThroughputToTerraform(struct!.provisionedThroughput),
  }
}

export class DataAwsccCassandraTableClusteringKeyColumnsColumn extends cdktf.ComplexComputedList {

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // column_type - computed: true, optional: false, required: false
  public get columnType() {
    return this.getStringAttribute('column_type');
  }
}

export function dataAwsccCassandraTableClusteringKeyColumnsColumnToTerraform(struct?: DataAwsccCassandraTableClusteringKeyColumnsColumn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    column_type: cdktf.stringToTerraform(struct!.columnType),
  }
}

export class DataAwsccCassandraTableClusteringKeyColumns extends cdktf.ComplexComputedList {

  // column - computed: true, optional: false, required: false
  public get column() {
    return this.interpolationForAttribute('column') as any;
  }

  // order_by - computed: true, optional: false, required: false
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
}

export function dataAwsccCassandraTableClusteringKeyColumnsToTerraform(struct?: DataAwsccCassandraTableClusteringKeyColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column: dataAwsccCassandraTableClusteringKeyColumnsColumnToTerraform(struct!.column),
    order_by: cdktf.stringToTerraform(struct!.orderBy),
  }
}

export class DataAwsccCassandraTableEncryptionSpecification extends cdktf.ComplexComputedList {

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // kms_key_identifier - computed: true, optional: false, required: false
  public get kmsKeyIdentifier() {
    return this.getStringAttribute('kms_key_identifier');
  }
}

export function dataAwsccCassandraTableEncryptionSpecificationToTerraform(struct?: DataAwsccCassandraTableEncryptionSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    kms_key_identifier: cdktf.stringToTerraform(struct!.kmsKeyIdentifier),
  }
}

export class DataAwsccCassandraTablePartitionKeyColumns extends cdktf.ComplexComputedList {

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // column_type - computed: true, optional: false, required: false
  public get columnType() {
    return this.getStringAttribute('column_type');
  }
}

export function dataAwsccCassandraTablePartitionKeyColumnsToTerraform(struct?: DataAwsccCassandraTablePartitionKeyColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    column_type: cdktf.stringToTerraform(struct!.columnType),
  }
}

export class DataAwsccCassandraTableRegularColumns extends cdktf.ComplexComputedList {

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // column_type - computed: true, optional: false, required: false
  public get columnType() {
    return this.getStringAttribute('column_type');
  }
}

export function dataAwsccCassandraTableRegularColumnsToTerraform(struct?: DataAwsccCassandraTableRegularColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    column_type: cdktf.stringToTerraform(struct!.columnType),
  }
}

export class DataAwsccCassandraTableTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccCassandraTableTagsToTerraform(struct?: DataAwsccCassandraTableTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cassandra_table.html awscc_cassandra_table}
*/
export class DataAwsccCassandraTable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cassandra_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cassandra_table.html awscc_cassandra_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCassandraTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCassandraTableConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cassandra_table',
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

  // billing_mode - computed: true, optional: false, required: false
  public get billingMode() {
    return this.interpolationForAttribute('billing_mode') as any;
  }

  // clustering_key_columns - computed: true, optional: false, required: false
  public get clusteringKeyColumns() {
    return this.interpolationForAttribute('clustering_key_columns') as any;
  }

  // encryption_specification - computed: true, optional: false, required: false
  public get encryptionSpecification() {
    return this.interpolationForAttribute('encryption_specification') as any;
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

  // keyspace_name - computed: true, optional: false, required: false
  public get keyspaceName() {
    return this.getStringAttribute('keyspace_name');
  }

  // partition_key_columns - computed: true, optional: false, required: false
  public get partitionKeyColumns() {
    return this.interpolationForAttribute('partition_key_columns') as any;
  }

  // point_in_time_recovery_enabled - computed: true, optional: false, required: false
  public get pointInTimeRecoveryEnabled() {
    return this.getBooleanAttribute('point_in_time_recovery_enabled');
  }

  // regular_columns - computed: true, optional: false, required: false
  public get regularColumns() {
    return this.interpolationForAttribute('regular_columns') as any;
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
