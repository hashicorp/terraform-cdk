// https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CassandraTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#billing_mode CassandraTable#billing_mode}
  */
  readonly billingMode?: CassandraTableBillingMode;
  /**
  * Clustering key columns of the table
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#clustering_key_columns CassandraTable#clustering_key_columns}
  */
  readonly clusteringKeyColumns?: CassandraTableClusteringKeyColumns[];
  /**
  * Represents the settings used to enable server-side encryption
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#encryption_specification CassandraTable#encryption_specification}
  */
  readonly encryptionSpecification?: CassandraTableEncryptionSpecification;
  /**
  * Name for Cassandra keyspace
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#keyspace_name CassandraTable#keyspace_name}
  */
  readonly keyspaceName: string;
  /**
  * Partition key columns of the table
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#partition_key_columns CassandraTable#partition_key_columns}
  */
  readonly partitionKeyColumns: CassandraTablePartitionKeyColumns[];
  /**
  * Indicates whether point in time recovery is enabled (true) or disabled (false) on the table
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#point_in_time_recovery_enabled CassandraTable#point_in_time_recovery_enabled}
  */
  readonly pointInTimeRecoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Non-key columns of the table
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#regular_columns CassandraTable#regular_columns}
  */
  readonly regularColumns?: CassandraTableRegularColumns[];
  /**
  * Name for Cassandra table
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#table_name CassandraTable#table_name}
  */
  readonly tableName?: string;
  /**
  * An array of key-value pairs to apply to this resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#tags CassandraTable#tags}
  */
  readonly tags?: CassandraTableTags[];
}
export interface CassandraTableBillingModeProvisionedThroughput {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#read_capacity_units CassandraTable#read_capacity_units}
  */
  readonly readCapacityUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#write_capacity_units CassandraTable#write_capacity_units}
  */
  readonly writeCapacityUnits: number;
}

export function cassandraTableBillingModeProvisionedThroughputToTerraform(struct?: CassandraTableBillingModeProvisionedThroughput): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_capacity_units: cdktf.numberToTerraform(struct!.readCapacityUnits),
    write_capacity_units: cdktf.numberToTerraform(struct!.writeCapacityUnits),
  }
}

export interface CassandraTableBillingMode {
  /**
  * Capacity mode for the specified table
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#mode CassandraTable#mode}
  */
  readonly mode?: string;
  /**
  * Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#provisioned_throughput CassandraTable#provisioned_throughput}
  */
  readonly provisionedThroughput?: CassandraTableBillingModeProvisionedThroughput;
}

export function cassandraTableBillingModeToTerraform(struct?: CassandraTableBillingMode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    provisioned_throughput: cassandraTableBillingModeProvisionedThroughputToTerraform(struct!.provisionedThroughput),
  }
}

export class CassandraTableClusteringKeyColumnsColumn extends cdktf.ComplexComputedList {

  // column_name - computed: true, optional: false, required: true
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // column_type - computed: true, optional: false, required: true
  public get columnType() {
    return this.getStringAttribute('column_type');
  }
}

export function cassandraTableClusteringKeyColumnsColumnToTerraform(struct?: CassandraTableClusteringKeyColumnsColumn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    column_type: cdktf.stringToTerraform(struct!.columnType),
  }
}

export interface CassandraTableClusteringKeyColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#column CassandraTable#column}
  */
  readonly column: CassandraTableClusteringKeyColumnsColumn;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#order_by CassandraTable#order_by}
  */
  readonly orderBy?: string;
}

export function cassandraTableClusteringKeyColumnsToTerraform(struct?: CassandraTableClusteringKeyColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column: cassandraTableClusteringKeyColumnsColumnToTerraform(struct!.column),
    order_by: cdktf.stringToTerraform(struct!.orderBy),
  }
}

export interface CassandraTableEncryptionSpecification {
  /**
  * Server-side encryption type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#encryption_type CassandraTable#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#kms_key_identifier CassandraTable#kms_key_identifier}
  */
  readonly kmsKeyIdentifier?: string;
}

export function cassandraTableEncryptionSpecificationToTerraform(struct?: CassandraTableEncryptionSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    kms_key_identifier: cdktf.stringToTerraform(struct!.kmsKeyIdentifier),
  }
}

export interface CassandraTablePartitionKeyColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#column_name CassandraTable#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#column_type CassandraTable#column_type}
  */
  readonly columnType: string;
}

export function cassandraTablePartitionKeyColumnsToTerraform(struct?: CassandraTablePartitionKeyColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    column_type: cdktf.stringToTerraform(struct!.columnType),
  }
}

export interface CassandraTableRegularColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#column_name CassandraTable#column_name}
  */
  readonly columnName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#column_type CassandraTable#column_type}
  */
  readonly columnType: string;
}

export function cassandraTableRegularColumnsToTerraform(struct?: CassandraTableRegularColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    column_type: cdktf.stringToTerraform(struct!.columnType),
  }
}

export interface CassandraTableTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#key CassandraTable#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html#value CassandraTable#value}
  */
  readonly value: string;
}

export function cassandraTableTagsToTerraform(struct?: CassandraTableTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html awscc_cassandra_table}
*/
export class CassandraTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cassandra_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html awscc_cassandra_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CassandraTableConfig
  */
  public constructor(scope: Construct, id: string, config: CassandraTableConfig) {
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
    this._billingMode = config.billingMode;
    this._clusteringKeyColumns = config.clusteringKeyColumns;
    this._encryptionSpecification = config.encryptionSpecification;
    this._keyspaceName = config.keyspaceName;
    this._partitionKeyColumns = config.partitionKeyColumns;
    this._pointInTimeRecoveryEnabled = config.pointInTimeRecoveryEnabled;
    this._regularColumns = config.regularColumns;
    this._tableName = config.tableName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_mode - computed: false, optional: true, required: false
  private _billingMode?: CassandraTableBillingMode;
  public get billingMode() {
    return this.interpolationForAttribute('billing_mode') as any;
  }
  public set billingMode(value: CassandraTableBillingMode ) {
    this._billingMode = value;
  }
  public resetBillingMode() {
    this._billingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingModeInput() {
    return this._billingMode
  }

  // clustering_key_columns - computed: true, optional: true, required: false
  private _clusteringKeyColumns?: CassandraTableClusteringKeyColumns[];
  public get clusteringKeyColumns() {
    return this.interpolationForAttribute('clustering_key_columns') as any;
  }
  public set clusteringKeyColumns(value: CassandraTableClusteringKeyColumns[]) {
    this._clusteringKeyColumns = value;
  }
  public resetClusteringKeyColumns() {
    this._clusteringKeyColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringKeyColumnsInput() {
    return this._clusteringKeyColumns
  }

  // encryption_specification - computed: false, optional: true, required: false
  private _encryptionSpecification?: CassandraTableEncryptionSpecification;
  public get encryptionSpecification() {
    return this.interpolationForAttribute('encryption_specification') as any;
  }
  public set encryptionSpecification(value: CassandraTableEncryptionSpecification ) {
    this._encryptionSpecification = value;
  }
  public resetEncryptionSpecification() {
    this._encryptionSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecificationInput() {
    return this._encryptionSpecification
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keyspace_name - computed: false, optional: false, required: true
  private _keyspaceName: string;
  public get keyspaceName() {
    return this.getStringAttribute('keyspace_name');
  }
  public set keyspaceName(value: string) {
    this._keyspaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyspaceNameInput() {
    return this._keyspaceName
  }

  // partition_key_columns - computed: false, optional: false, required: true
  private _partitionKeyColumns: CassandraTablePartitionKeyColumns[];
  public get partitionKeyColumns() {
    return this.interpolationForAttribute('partition_key_columns') as any;
  }
  public set partitionKeyColumns(value: CassandraTablePartitionKeyColumns[]) {
    this._partitionKeyColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyColumnsInput() {
    return this._partitionKeyColumns
  }

  // point_in_time_recovery_enabled - computed: false, optional: true, required: false
  private _pointInTimeRecoveryEnabled?: boolean | cdktf.IResolvable;
  public get pointInTimeRecoveryEnabled() {
    return this.getBooleanAttribute('point_in_time_recovery_enabled');
  }
  public set pointInTimeRecoveryEnabled(value: boolean | cdktf.IResolvable ) {
    this._pointInTimeRecoveryEnabled = value;
  }
  public resetPointInTimeRecoveryEnabled() {
    this._pointInTimeRecoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRecoveryEnabledInput() {
    return this._pointInTimeRecoveryEnabled
  }

  // regular_columns - computed: false, optional: true, required: false
  private _regularColumns?: CassandraTableRegularColumns[];
  public get regularColumns() {
    return this.interpolationForAttribute('regular_columns') as any;
  }
  public set regularColumns(value: CassandraTableRegularColumns[] ) {
    this._regularColumns = value;
  }
  public resetRegularColumns() {
    this._regularColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularColumnsInput() {
    return this._regularColumns
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
  private _tags?: CassandraTableTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CassandraTableTags[] ) {
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
      billing_mode: cassandraTableBillingModeToTerraform(this._billingMode),
      clustering_key_columns: cdktf.listMapper(cassandraTableClusteringKeyColumnsToTerraform)(this._clusteringKeyColumns),
      encryption_specification: cassandraTableEncryptionSpecificationToTerraform(this._encryptionSpecification),
      keyspace_name: cdktf.stringToTerraform(this._keyspaceName),
      partition_key_columns: cdktf.listMapper(cassandraTablePartitionKeyColumnsToTerraform)(this._partitionKeyColumns),
      point_in_time_recovery_enabled: cdktf.booleanToTerraform(this._pointInTimeRecoveryEnabled),
      regular_columns: cdktf.listMapper(cassandraTableRegularColumnsToTerraform)(this._regularColumns),
      table_name: cdktf.stringToTerraform(this._tableName),
      tags: cdktf.listMapper(cassandraTableTagsToTerraform)(this._tags),
    };
  }
}
