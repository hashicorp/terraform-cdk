// https://www.terraform.io/docs/providers/awscc/r/athena_prepared_statement.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AthenaPreparedStatementConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the prepared statement.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_prepared_statement.html#description AthenaPreparedStatement#description}
  */
  readonly description?: string;
  /**
  * The query string for the prepared statement.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_prepared_statement.html#query_statement AthenaPreparedStatement#query_statement}
  */
  readonly queryStatement: string;
  /**
  * The name of the prepared statement.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_prepared_statement.html#statement_name AthenaPreparedStatement#statement_name}
  */
  readonly statementName: string;
  /**
  * The name of the workgroup to which the prepared statement belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/athena_prepared_statement.html#work_group AthenaPreparedStatement#work_group}
  */
  readonly workGroup: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/athena_prepared_statement.html awscc_athena_prepared_statement}
*/
export class AthenaPreparedStatement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_athena_prepared_statement";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/athena_prepared_statement.html awscc_athena_prepared_statement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AthenaPreparedStatementConfig
  */
  public constructor(scope: Construct, id: string, config: AthenaPreparedStatementConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_athena_prepared_statement',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._queryStatement = config.queryStatement;
    this._statementName = config.statementName;
    this._workGroup = config.workGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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

  // query_statement - computed: false, optional: false, required: true
  private _queryStatement: string;
  public get queryStatement() {
    return this.getStringAttribute('query_statement');
  }
  public set queryStatement(value: string) {
    this._queryStatement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStatementInput() {
    return this._queryStatement
  }

  // statement_name - computed: false, optional: false, required: true
  private _statementName: string;
  public get statementName() {
    return this.getStringAttribute('statement_name');
  }
  public set statementName(value: string) {
    this._statementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementNameInput() {
    return this._statementName
  }

  // work_group - computed: false, optional: false, required: true
  private _workGroup: string;
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
  public set workGroup(value: string) {
    this._workGroup = value;
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
      description: cdktf.stringToTerraform(this._description),
      query_statement: cdktf.stringToTerraform(this._queryStatement),
      statement_name: cdktf.stringToTerraform(this._statementName),
      work_group: cdktf.stringToTerraform(this._workGroup),
    };
  }
}
