import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccConfigStoredQueriesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/config_stored_queries.html awscc_config_stored_queries}
*/
export declare class DataAwsccConfigStoredQueries extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/config_stored_queries.html awscc_config_stored_queries} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccConfigStoredQueriesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccConfigStoredQueriesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
