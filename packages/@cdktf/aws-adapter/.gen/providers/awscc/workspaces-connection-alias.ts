// https://www.terraform.io/docs/providers/awscc/r/workspaces_connection_alias.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspacesConnectionAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/workspaces_connection_alias.html#connection_string WorkspacesConnectionAlias#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/workspaces_connection_alias.html#tags WorkspacesConnectionAlias#tags}
  */
  readonly tags?: WorkspacesConnectionAliasTags[];
}
export class WorkspacesConnectionAliasAssociations extends cdktf.ComplexComputedList {

  // associated_account_id - computed: true, optional: true, required: false
  private _associatedAccountId?: string;
  public get associatedAccountId() {
    return this.getStringAttribute('associated_account_id');
  }
  public set associatedAccountId(value: string) {
    this._associatedAccountId = value;
  }
  public resetAssociatedAccountId() {
    this._associatedAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedAccountIdInput() {
    return this._associatedAccountId
  }

  // association_status - computed: true, optional: true, required: false
  private _associationStatus?: string;
  public get associationStatus() {
    return this.getStringAttribute('association_status');
  }
  public set associationStatus(value: string) {
    this._associationStatus = value;
  }
  public resetAssociationStatus() {
    this._associationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationStatusInput() {
    return this._associationStatus
  }

  // connection_identifier - computed: true, optional: true, required: false
  private _connectionIdentifier?: string;
  public get connectionIdentifier() {
    return this.getStringAttribute('connection_identifier');
  }
  public set connectionIdentifier(value: string) {
    this._connectionIdentifier = value;
  }
  public resetConnectionIdentifier() {
    this._connectionIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdentifierInput() {
    return this._connectionIdentifier
  }

  // resource_id - computed: true, optional: true, required: false
  private _resourceId?: string;
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId
  }
}

export function workspacesConnectionAliasAssociationsToTerraform(struct?: WorkspacesConnectionAliasAssociations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    associated_account_id: cdktf.stringToTerraform(struct!.associatedAccountId),
    association_status: cdktf.stringToTerraform(struct!.associationStatus),
    connection_identifier: cdktf.stringToTerraform(struct!.connectionIdentifier),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}

export interface WorkspacesConnectionAliasTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/workspaces_connection_alias.html#key WorkspacesConnectionAlias#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/workspaces_connection_alias.html#value WorkspacesConnectionAlias#value}
  */
  readonly value: string;
}

export function workspacesConnectionAliasTagsToTerraform(struct?: WorkspacesConnectionAliasTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/workspaces_connection_alias.html awscc_workspaces_connection_alias}
*/
export class WorkspacesConnectionAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_workspaces_connection_alias";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/workspaces_connection_alias.html awscc_workspaces_connection_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspacesConnectionAliasConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspacesConnectionAliasConfig) {
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
    this._connectionString = config.connectionString;
    this._tags = config.tags;
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

  // connection_string - computed: false, optional: false, required: true
  private _connectionString: string;
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: WorkspacesConnectionAliasTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: WorkspacesConnectionAliasTags[]) {
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
      connection_string: cdktf.stringToTerraform(this._connectionString),
      tags: cdktf.listMapper(workspacesConnectionAliasTagsToTerraform)(this._tags),
    };
  }
}
