// https://www.terraform.io/docs/providers/awscc/d/workspaces_connection_alias.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccWorkspacesConnectionAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/workspaces_connection_alias.html#id DataAwsccWorkspacesConnectionAlias#id}
  */
  readonly id: string;
}
export class DataAwsccWorkspacesConnectionAliasAssociations extends cdktf.ComplexComputedList {

  // associated_account_id - computed: true, optional: false, required: false
  public get associatedAccountId() {
    return this.getStringAttribute('associated_account_id');
  }

  // association_status - computed: true, optional: false, required: false
  public get associationStatus() {
    return this.getStringAttribute('association_status');
  }

  // connection_identifier - computed: true, optional: false, required: false
  public get connectionIdentifier() {
    return this.getStringAttribute('connection_identifier');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}

export function dataAwsccWorkspacesConnectionAliasAssociationsToTerraform(struct?: DataAwsccWorkspacesConnectionAliasAssociations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    associated_account_id: cdktf.stringToTerraform(struct!.associatedAccountId),
    association_status: cdktf.stringToTerraform(struct!.associationStatus),
    connection_identifier: cdktf.stringToTerraform(struct!.connectionIdentifier),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}

export class DataAwsccWorkspacesConnectionAliasTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccWorkspacesConnectionAliasTagsToTerraform(struct?: DataAwsccWorkspacesConnectionAliasTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/workspaces_connection_alias.html awscc_workspaces_connection_alias}
*/
export class DataAwsccWorkspacesConnectionAlias extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_workspaces_connection_alias";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/workspaces_connection_alias.html awscc_workspaces_connection_alias} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccWorkspacesConnectionAliasConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccWorkspacesConnectionAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_workspaces_connection_alias',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_id - computed: true, optional: false, required: false
  public get aliasId() {
    return this.getStringAttribute('alias_id');
  }

  // associations - computed: true, optional: false, required: false
  public get associations() {
    return this.interpolationForAttribute('associations') as any;
  }

  // connection_alias_state - computed: true, optional: false, required: false
  public get connectionAliasState() {
    return this.getStringAttribute('connection_alias_state');
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
