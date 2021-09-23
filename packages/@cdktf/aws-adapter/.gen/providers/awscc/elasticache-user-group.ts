// https://www.terraform.io/docs/providers/awscc/r/elasticache_user_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticacheUserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Must be redis.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user_group.html#engine ElasticacheUserGroup#engine}
  */
  readonly engine: string;
  /**
  * The ID of the user group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user_group.html#user_group_id ElasticacheUserGroup#user_group_id}
  */
  readonly userGroupId: string;
  /**
  * List of users associated to this user group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user_group.html#user_ids ElasticacheUserGroup#user_ids}
  */
  readonly userIds?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user_group.html awscc_elasticache_user_group}
*/
export class ElasticacheUserGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_elasticache_user_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user_group.html awscc_elasticache_user_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticacheUserGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticacheUserGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_elasticache_user_group',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._engine = config.engine;
    this._userGroupId = config.userGroupId;
    this._userIds = config.userIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // engine - computed: false, optional: false, required: true
  private _engine: string;
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_group_id - computed: false, optional: false, required: true
  private _userGroupId: string;
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId
  }

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: string[];
  public get userIds() {
    return this.getListAttribute('user_ids');
  }
  public set userIds(value: string[] ) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engine: cdktf.stringToTerraform(this._engine),
      user_group_id: cdktf.stringToTerraform(this._userGroupId),
      user_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._userIds),
    };
  }
}
