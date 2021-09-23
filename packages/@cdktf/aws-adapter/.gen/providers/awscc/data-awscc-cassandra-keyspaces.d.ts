import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCassandraKeyspacesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cassandra_keyspaces.html awscc_cassandra_keyspaces}
*/
export declare class DataAwsccCassandraKeyspaces extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cassandra_keyspaces.html awscc_cassandra_keyspaces} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCassandraKeyspacesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccCassandraKeyspacesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
