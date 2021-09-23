import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccTimestreamTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/timestream_table.html#id DataAwsccTimestreamTable#id}
    */
    readonly id: string;
}
export declare class DataAwsccTimestreamTableRetentionProperties extends cdktf.ComplexComputedList {
    get magneticStoreRetentionPeriodInDays(): string;
    get memoryStoreRetentionPeriodInHours(): string;
}
export declare function dataAwsccTimestreamTableRetentionPropertiesToTerraform(struct?: DataAwsccTimestreamTableRetentionProperties): any;
export declare class DataAwsccTimestreamTableTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccTimestreamTableTagsToTerraform(struct?: DataAwsccTimestreamTableTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/timestream_table.html awscc_timestream_table}
*/
export declare class DataAwsccTimestreamTable extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/timestream_table.html awscc_timestream_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccTimestreamTableConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccTimestreamTableConfig);
    get arn(): string;
    get databaseName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get retentionProperties(): any;
    get tableName(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
