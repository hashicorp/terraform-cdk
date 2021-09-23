// https://www.terraform.io/docs/providers/awscc/r/athena_named_query.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AthenaNamedQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The database to which the query belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_named_query.html#database AthenaNamedQuery#database}
  */
  readonly database: string;
  /**
  * The query description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_named_query.html#description AthenaNamedQuery#description}
  */
  readonly description?: string;
  /**
  * The query name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_named_query.html#name AthenaNamedQuery#name}
  */
  readonly name?: string;
  /**
  * The contents of the query with all query statements.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_named_query.html#query_string AthenaNamedQuery#query_string}
  */
  readonly queryString: string;
  /**
  * The name of the workgroup that contains the named query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_named_query.html#work_group AthenaNamedQuery#work_group}
  */
  readonly workGroup?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/athena_named_query.html awscc_athena_named_query}
*/
export class AthenaNamedQuery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_athena_named_query";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/athena_named_query.html awscc_athena_named_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AthenaNamedQueryConfig
  */
  public constructor(scope: Construct, id: string, config: AthenaNamedQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_athena_named_query',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._database = config.database;
    this._description = config.description;
    this._name = config.name;
    this._queryString = config.queryString;
    this._workGroup = config.workGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: false, optional: false, required: true
  private _database: string;
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // named_query_id - computed: true, optional: false, required: false
  public get namedQueryId() {
    return this.getStringAttribute('named_query_id');
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString: string;
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // work_group - computed: true, optional: true, required: false
  private _workGroup?: string;
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
  public set workGroup(value: string) {
    this._workGroup = value;
  }
  public resetWorkGroup() {
    this._workGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupInput() {
    return this._workGroup
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database: cdktf.stringToTerraform(this._database),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      query_string: cdktf.stringToTerraform(this._queryString),
      work_group: cdktf.stringToTerraform(this._workGroup),
    };
  }
}
