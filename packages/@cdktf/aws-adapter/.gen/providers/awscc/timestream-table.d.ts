import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function timestreamTableRetentionPropertiesToTerraform(struct?: TimestreamTableRetentionProperties): any;
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
export declare function timestreamTableTagsToTerraform(struct?: TimestreamTableTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/timestream_table.html awscc_timestream_table}
*/
export declare class TimestreamTable extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/timestream_table.html awscc_timestream_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TimestreamTableConfig
    */
    constructor(scope: Construct, id: string, config: TimestreamTableConfig);
    get arn(): string;
    private _databaseName;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string;
    get id(): string;
    get name(): string;
    private _retentionProperties?;
    get retentionProperties(): TimestreamTableRetentionProperties;
    set retentionProperties(value: TimestreamTableRetentionProperties);
    resetRetentionProperties(): void;
    get retentionPropertiesInput(): TimestreamTableRetentionProperties | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    resetTableName(): void;
    get tableNameInput(): string | undefined;
    private _tags?;
    get tags(): TimestreamTableTags[];
    set tags(value: TimestreamTableTags[]);
    resetTags(): void;
    get tagsInput(): TimestreamTableTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
