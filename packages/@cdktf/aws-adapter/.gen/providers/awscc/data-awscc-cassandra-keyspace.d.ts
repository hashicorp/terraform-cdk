import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCassandraKeyspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cassandra_keyspace.html#id DataAwsccCassandraKeyspace#id}
    */
    readonly id: string;
}
export declare class DataAwsccCassandraKeyspaceTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccCassandraKeyspaceTagsToTerraform(struct?: DataAwsccCassandraKeyspaceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cassandra_keyspace.html awscc_cassandra_keyspace}
*/
export declare class DataAwsccCassandraKeyspace extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cassandra_keyspace.html awscc_cassandra_keyspace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCassandraKeyspaceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCassandraKeyspaceConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get keyspaceName(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
