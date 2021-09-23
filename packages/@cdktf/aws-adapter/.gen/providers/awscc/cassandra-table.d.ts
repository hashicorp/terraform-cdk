import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function cassandraTableBillingModeProvisionedThroughputToTerraform(struct?: CassandraTableBillingModeProvisionedThroughput): any;
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
export declare function cassandraTableBillingModeToTerraform(struct?: CassandraTableBillingMode): any;
export declare class CassandraTableClusteringKeyColumnsColumn extends cdktf.ComplexComputedList {
    get columnName(): string;
    get columnType(): string;
}
export declare function cassandraTableClusteringKeyColumnsColumnToTerraform(struct?: CassandraTableClusteringKeyColumnsColumn): any;
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
export declare function cassandraTableClusteringKeyColumnsToTerraform(struct?: CassandraTableClusteringKeyColumns): any;
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
export declare function cassandraTableEncryptionSpecificationToTerraform(struct?: CassandraTableEncryptionSpecification): any;
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
export declare function cassandraTablePartitionKeyColumnsToTerraform(struct?: CassandraTablePartitionKeyColumns): any;
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
export declare function cassandraTableRegularColumnsToTerraform(struct?: CassandraTableRegularColumns): any;
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
export declare function cassandraTableTagsToTerraform(struct?: CassandraTableTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html awscc_cassandra_table}
*/
export declare class CassandraTable extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_table.html awscc_cassandra_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CassandraTableConfig
    */
    constructor(scope: Construct, id: string, config: CassandraTableConfig);
    private _billingMode?;
    get billingMode(): CassandraTableBillingMode;
    set billingMode(value: CassandraTableBillingMode);
    resetBillingMode(): void;
    get billingModeInput(): CassandraTableBillingMode | undefined;
    private _clusteringKeyColumns?;
    get clusteringKeyColumns(): CassandraTableClusteringKeyColumns[];
    set clusteringKeyColumns(value: CassandraTableClusteringKeyColumns[]);
    resetClusteringKeyColumns(): void;
    get clusteringKeyColumnsInput(): CassandraTableClusteringKeyColumns[] | undefined;
    private _encryptionSpecification?;
    get encryptionSpecification(): CassandraTableEncryptionSpecification;
    set encryptionSpecification(value: CassandraTableEncryptionSpecification);
    resetEncryptionSpecification(): void;
    get encryptionSpecificationInput(): CassandraTableEncryptionSpecification | undefined;
    get id(): string;
    private _keyspaceName;
    get keyspaceName(): string;
    set keyspaceName(value: string);
    get keyspaceNameInput(): string;
    private _partitionKeyColumns;
    get partitionKeyColumns(): CassandraTablePartitionKeyColumns[];
    set partitionKeyColumns(value: CassandraTablePartitionKeyColumns[]);
    get partitionKeyColumnsInput(): CassandraTablePartitionKeyColumns[];
    private _pointInTimeRecoveryEnabled?;
    get pointInTimeRecoveryEnabled(): boolean | cdktf.IResolvable;
    set pointInTimeRecoveryEnabled(value: boolean | cdktf.IResolvable);
    resetPointInTimeRecoveryEnabled(): void;
    get pointInTimeRecoveryEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _regularColumns?;
    get regularColumns(): CassandraTableRegularColumns[];
    set regularColumns(value: CassandraTableRegularColumns[]);
    resetRegularColumns(): void;
    get regularColumnsInput(): CassandraTableRegularColumns[] | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    resetTableName(): void;
    get tableNameInput(): string | undefined;
    private _tags?;
    get tags(): CassandraTableTags[];
    set tags(value: CassandraTableTags[]);
    resetTags(): void;
    get tagsInput(): CassandraTableTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
