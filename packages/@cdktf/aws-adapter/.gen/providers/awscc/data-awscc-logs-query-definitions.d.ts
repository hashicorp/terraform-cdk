import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLogsQueryDefinitionsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/logs_query_definitions.html awscc_logs_query_definitions}
*/
export declare class DataAwsccLogsQueryDefinitions extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/logs_query_definitions.html awscc_logs_query_definitions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLogsQueryDefinitionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccLogsQueryDefinitionsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
