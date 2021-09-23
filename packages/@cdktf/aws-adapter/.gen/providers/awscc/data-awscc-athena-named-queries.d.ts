import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAthenaNamedQueriesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/athena_named_queries.html awscc_athena_named_queries}
*/
export declare class DataAwsccAthenaNamedQueries extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/athena_named_queries.html awscc_athena_named_queries} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAthenaNamedQueriesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccAthenaNamedQueriesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
