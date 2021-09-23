import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccTimestreamDatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/timestream_database.html#id DataAwsccTimestreamDatabase#id}
    */
    readonly id: string;
}
export declare class DataAwsccTimestreamDatabaseTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccTimestreamDatabaseTagsToTerraform(struct?: DataAwsccTimestreamDatabaseTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/timestream_database.html awscc_timestream_database}
*/
export declare class DataAwsccTimestreamDatabase extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/timestream_database.html awscc_timestream_database} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccTimestreamDatabaseConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccTimestreamDatabaseConfig);
    get arn(): string;
    get databaseName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get kmsKeyId(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
