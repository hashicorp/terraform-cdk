import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDynamodbGlobalTablesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/dynamodb_global_tables.html awscc_dynamodb_global_tables}
*/
export declare class DataAwsccDynamodbGlobalTables extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/dynamodb_global_tables.html awscc_dynamodb_global_tables} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDynamodbGlobalTablesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccDynamodbGlobalTablesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
