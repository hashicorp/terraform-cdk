import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CassandraKeyspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Name for Cassandra keyspace
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_keyspace.html#keyspace_name CassandraKeyspace#keyspace_name}
    */
    readonly keyspaceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_keyspace.html#tags CassandraKeyspace#tags}
    */
    readonly tags?: CassandraKeyspaceTags[];
}
export interface CassandraKeyspaceTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_keyspace.html#key CassandraKeyspace#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_keyspace.html#value CassandraKeyspace#value}
    */
    readonly value: string;
}
export declare function cassandraKeyspaceTagsToTerraform(struct?: CassandraKeyspaceTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_keyspace.html awscc_cassandra_keyspace}
*/
export declare class CassandraKeyspace extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_keyspace.html awscc_cassandra_keyspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CassandraKeyspaceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: CassandraKeyspaceConfig);
    get id(): string;
    private _keyspaceName?;
    get keyspaceName(): string;
    set keyspaceName(value: string);
    resetKeyspaceName(): void;
    get keyspaceNameInput(): string | undefined;
    private _tags?;
    get tags(): CassandraKeyspaceTags[];
    set tags(value: CassandraKeyspaceTags[]);
    resetTags(): void;
    get tagsInput(): CassandraKeyspaceTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
