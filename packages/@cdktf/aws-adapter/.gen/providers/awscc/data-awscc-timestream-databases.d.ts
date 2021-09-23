import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccTimestreamDatabasesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/timestream_databases.html awscc_timestream_databases}
*/
export declare class DataAwsccTimestreamDatabases extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/timestream_databases.html awscc_timestream_databases} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccTimestreamDatabasesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccTimestreamDatabasesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
