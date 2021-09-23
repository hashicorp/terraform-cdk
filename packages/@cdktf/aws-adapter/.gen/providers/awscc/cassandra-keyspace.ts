// https://www.terraform.io/docs/providers/awscc/r/cassandra_keyspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function cassandraKeyspaceTagsToTerraform(struct?: CassandraKeyspaceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_keyspace.html awscc_cassandra_keyspace}
*/
export class CassandraKeyspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cassandra_keyspace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cassandra_keyspace.html awscc_cassandra_keyspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CassandraKeyspaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CassandraKeyspaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_cassandra_keyspace',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyspaceName = config.keyspaceName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keyspace_name - computed: true, optional: true, required: false
  private _keyspaceName?: string;
  public get keyspaceName() {
    return this.getStringAttribute('keyspace_name');
  }
  public set keyspaceName(value: string) {
    this._keyspaceName = value;
  }
  public resetKeyspaceName() {
    this._keyspaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyspaceNameInput() {
    return this._keyspaceName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: CassandraKeyspaceTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CassandraKeyspaceTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      keyspace_name: cdktf.stringToTerraform(this._keyspaceName),
      tags: cdktf.listMapper(cassandraKeyspaceTagsToTerraform)(this._tags),
    };
  }
}
