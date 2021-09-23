import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCassandraTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cassandra_table.html#id DataAwsccCassandraTable#id}
    */
    readonly id: string;
}
export declare class DataAwsccCassandraTableBillingModeProvisionedThroughput extends cdktf.ComplexComputedList {
    get readCapacityUnits(): number;
    get writeCapacityUnits(): number;
}
export declare function dataAwsccCassandraTableBillingModeProvisionedThroughputToTerraform(struct?: DataAwsccCassandraTableBillingModeProvisionedThroughput): any;
export declare class DataAwsccCassandraTableBillingMode extends cdktf.ComplexComputedList {
    get mode(): string;
    get provisionedThroughput(): any;
}
export declare function dataAwsccCassandraTableBillingModeToTerraform(struct?: DataAwsccCassandraTableBillingMode): any;
export declare class DataAwsccCassandraTableClusteringKeyColumnsColumn extends cdktf.ComplexComputedList {
    get columnName(): string;
    get columnType(): string;
}
export declare function dataAwsccCassandraTableClusteringKeyColumnsColumnToTerraform(struct?: DataAwsccCassandraTableClusteringKeyColumnsColumn): any;
export declare class DataAwsccCassandraTableClusteringKeyColumns extends cdktf.ComplexComputedList {
    get column(): any;
    get orderBy(): string;
}
export declare function dataAwsccCassandraTableClusteringKeyColumnsToTerraform(struct?: DataAwsccCassandraTableClusteringKeyColumns): any;
export declare class DataAwsccCassandraTableEncryptionSpecification extends cdktf.ComplexComputedList {
    get encryptionType(): string;
    get kmsKeyIdentifier(): string;
}
export declare function dataAwsccCassandraTableEncryptionSpecificationToTerraform(struct?: DataAwsccCassandraTableEncryptionSpecification): any;
export declare class DataAwsccCassandraTablePartitionKeyColumns extends cdktf.ComplexComputedList {
    get columnName(): string;
    get columnType(): string;
}
export declare function dataAwsccCassandraTablePartitionKeyColumnsToTerraform(struct?: DataAwsccCassandraTablePartitionKeyColumns): any;
export declare class DataAwsccCassandraTableRegularColumns extends cdktf.ComplexComputedList {
    get columnName(): string;
    get columnType(): string;
}
export declare function dataAwsccCassandraTableRegularColumnsToTerraform(struct?: DataAwsccCassandraTableRegularColumns): any;
export declare class DataAwsccCassandraTableTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccCassandraTableTagsToTerraform(struct?: DataAwsccCassandraTableTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cassandra_table.html awscc_cassandra_table}
*/
export declare class DataAwsccCassandraTable extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cassandra_table.html awscc_cassandra_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCassandraTableConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCassandraTableConfig);
    get billingMode(): any;
    get clusteringKeyColumns(): any;
    get encryptionSpecification(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get keyspaceName(): string;
    get partitionKeyColumns(): any;
    get pointInTimeRecoveryEnabled(): cdktf.IResolvable;
    get regularColumns(): any;
    get tableName(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
